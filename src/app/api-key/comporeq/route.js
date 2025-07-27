import clientPromise from '../../../../lib/mongodb'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function POST(req) {
  try {
    const { apiKey, componentName, framework } = await req.json()

    // Normalize component name to PascalCase (first letter uppercase)
    const normalizedComponentName = normalizeComponentName(componentName)

    let userTier = 'free'
    let keyRecord = null

    // Step 1: Handle API key validation (only if API key is provided)
    if (apiKey && apiKey.trim() !== '') {
      const client = await clientPromise
      const db = client.db('lineara')
      const collection = db.collection('api_key')

      keyRecord = await collection.findOne({ 
        key: apiKey,
        active: true 
      })

      if (!keyRecord) {
        return NextResponse.json({
          valid: false, 
          error: 'Invalid or inactive API key'
        }, { status: 401 })
      }

      userTier = keyRecord.tier || 'paid'
    }

    // Step 2: Get component path using normalized name
    const componentPath = getComponentPath(normalizedComponentName, userTier)

    if (!componentPath) {
      return NextResponse.json({
        valid: false,
        error: `Component '${normalizedComponentName}' not found`
      }, { status: 404 })
    }

    // Step 3: Read component file
    try {
      const componentData = fs.readFileSync(componentPath, 'utf8')
      
      // Update usage tracking (only for paid users with API keys)
      if (keyRecord) {
        const client = await clientPromise
        const db = client.db('lineara')
        const collection = db.collection('api_key')
        
        await collection.updateOne(
          { _id: keyRecord._id },
          { 
            $inc: { usageCount: 1 }, 
            $set: { lastUsed: new Date() }
          }
        )
      }

      return NextResponse.json({
        valid: true,
        component: {
          name: normalizedComponentName, // Return normalized name
          code: componentData,
          framework: framework || 'nextjs',
          tier: userTier
        },
        message: 'Component delivered successfully'
      })

    } catch (fileError) {
      return NextResponse.json({
        valid: false,
        error: `Component '${normalizedComponentName}' file not readable: ${fileError.message}`
      }, { status: 404 })
    }

  } catch (error) {
    return NextResponse.json({
      valid: false,
      error: 'Server error processing component request'
    }, { status: 500 })
  }
}

// Helper function to normalize component names to PascalCase
function normalizeComponentName(componentName) {
  if (!componentName) return componentName
  
  // Convert to PascalCase (capitalize first letter, rest lowercase for simple names)
  // For complex names like "data-table" -> "DataTable", you can extend this
  const normalized = componentName.charAt(0).toUpperCase() + componentName.slice(1).toLowerCase()
  
  return normalized
}

// Helper function to determine component file path
function getComponentPath(componentName, userTier) {
  const baseDir = path.join(process.cwd(), 'components')
  
  // Try paid components first if user has paid tier
  if (userTier === 'premium' || userTier === 'paid') {
    const paidPath = path.join(baseDir, 'paid', `${componentName}.tsx`)
    if (fs.existsSync(paidPath)) {
      return paidPath
    }
  }
  
  // Fall back to free components (for both free users and paid users)
  const freePath = path.join(baseDir, 'free', `${componentName}.tsx`)
  if (fs.existsSync(freePath)) {
    return freePath
  }
  
  return null
}
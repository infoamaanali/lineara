import clientPromise from '../../../../lib/mongodb';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  let client = null;
  
  try {
    const { apiKey, componentName, framework } = await req.json();

    // Validate required fields
    if (!componentName || componentName.trim() === '') {
      return NextResponse.json({
        valid: false,
        error: 'Component name is required'
      }, { status: 400 });
    }

    const normalizedComponentName = normalizeComponentName(componentName);
    let userTier = 'free';
    let keyRecord = null;

    // Step 1: Handle API key validation (only if API key is provided)
    if (apiKey && apiKey.trim() !== '') {
      try {
        client = await clientPromise;
        const db = client.db('lineara');
        const collection = db.collection('api_key');

        keyRecord = await collection.findOne({ 
          key: apiKey,
          active: true 
        });

        if (!keyRecord) {
          return NextResponse.json({
            valid: false, 
            error: 'Invalid or inactive API key'
          }, { status: 401 });
        }

        userTier = keyRecord.tier || 'paid';
      } catch (dbError) {
        console.error('Database connection error:', dbError);
        return NextResponse.json({
          valid: false,
          error: 'Database connection failed'
        }, { status: 500 });
      }
    }

    // Step 2: Get component path using normalized name
    const componentPath = getComponentPath(normalizedComponentName, userTier);

    if (!componentPath) {
      return NextResponse.json({
        valid: false,
        error: `Component '${normalizedComponentName}' not found`
      }, { status: 404 });
    }

    // Step 3: Read component file
    try {
      const componentData = fs.readFileSync(componentPath, 'utf8');
      
      // Update usage tracking (only for paid users with API keys)
      if (keyRecord && client) {
        try {
          const db = client.db('lineara');
          const collection = db.collection('api_key');
          
          await collection.updateOne(
            { _id: keyRecord._id },
            { 
              $inc: { usageCount: 1 }, 
              $set: { lastUsed: new Date() }
            }
          );
        } catch (updateError) {
          console.error('Usage tracking update failed:', updateError);
          // Don't fail the request if usage tracking fails
        }
      }

      return NextResponse.json({
        valid: true,
        component: {
          name: normalizedComponentName,
          code: componentData,
          framework: framework || 'nextjs',
          tier: userTier
        },
        message: 'Component delivered successfully'
      });

    } catch (fileError) {
      console.error('File read error:', fileError);
      return NextResponse.json({
        valid: false,
        error: `Component '${normalizedComponentName}' file not accessible`
      }, { status: 404 });
    }

  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({
      valid: false,
      error: 'Server error processing component request'
    }, { status: 500 });
  }
}

// Helper function to normalize component names to PascalCase
function normalizeComponentName(componentName) {
  if (!componentName) return componentName;
  
  // Handle kebab-case and snake_case conversion to PascalCase
  return componentName
    .split(/[-_\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

// Helper function to determine component file path
function getComponentPath(componentName, userTier) {
  try {
    const baseDir = path.join(process.cwd(), 'components');
    
    // Try paid components first if user has paid tier
    if (userTier === 'premium' || userTier === 'paid') {
      const paidPath = path.join(baseDir, 'paid', `${componentName}.tsx`);
      if (fs.existsSync(paidPath)) {
        return paidPath;
      }
    }
    
    // Fall back to free components
    const freePath = path.join(baseDir, 'free', `${componentName}.tsx`);
    if (fs.existsSync(freePath)) {
      return freePath;
    }
    
    return null;
  } catch (pathError) {
    console.error('Path resolution error:', pathError);
    return null;
  }
}
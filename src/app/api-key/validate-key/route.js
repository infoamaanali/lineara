import clientPromise from "../../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { apiKey } = await req.json();

    if (!apiKey || apiKey.trim() === '') {
      return NextResponse.json(
        { valid: false, error: "API key is required" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("lineara");
    const collection = db.collection("api_key");

    const keyRecord = await collection.findOne({
      key: apiKey,
      active: true // Add active check
    });

    if (keyRecord) {
      return NextResponse.json(
        { valid: true, message: "API Key is valid!", tier: keyRecord.tier || 'free' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { valid: false, error: "Invalid or inactive API key" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Database validation error:', error);
    return NextResponse.json(
      { valid: false, error: "Database connection failed" },
      { status: 500 }
    );
  }
}
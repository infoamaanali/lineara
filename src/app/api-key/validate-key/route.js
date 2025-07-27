import clientPromise from "../../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { apiKey } = await req.json();

    const client = await clientPromise;
    const db = client.db("lineara"); // Your database name
    const collection = db.collection("api_key"); // Your collection name

    const keyRecord = await collection.findOne({
      key: apiKey,
    });

    if (keyRecord) {
      return NextResponse.json(
        { message: "API Key is valid!" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { valid: false, error: "Invalid API key" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Database connection failed" },
      { status: 500 }
    );
  }
}
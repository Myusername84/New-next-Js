import { NextResponse } from "next/server"

export async function GET() {
  const obj2 = {
    'John': 10,
    'Bob': 20,
    'Jim': 40
  }

  return NextResponse.json(obj2)
}
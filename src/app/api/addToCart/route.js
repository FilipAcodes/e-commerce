import { NextResponse } from "next/server";

export async function GET(request, context) {
  return NextResponse.json({
    data: "Hi there",
  });
}

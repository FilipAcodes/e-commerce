const { getConnection } = require("../../connection");
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const userRequest = context.params.Id.toUpperCase();
  try {
    const connection = await getConnection();
    const data = await connection.execute(
      `select * from stock where upper(description) like '%${userRequest}'`
    );
    return NextResponse.json({
      data: data.rows,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

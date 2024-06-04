const { getConnection } = require("../../connection");
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const userCart = context.params.Id;

  try {
    const connection = await getConnection();
    const data = await connection.execute(
      `select * from cart where orderid=${userCart}`
    );
    return NextResponse.json({
      itemid: "itemid",
      quantity: "quantity",
      orderid: "orderid",
      data: data.rows,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

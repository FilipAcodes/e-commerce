const { getConnection } = require("../../connection");
import { NextResponse } from "next/server";

export async function DELETE(request, context) {
  const deletion = context.params.Id;
  console.log("Deletion ID:", deletion);

  let connection;

  try {
    connection = await getConnection();
    console.log("Database connection established");

    const query = `DELETE FROM cart WHERE orderid = ${deletion}`;
    const result = await connection.execute(query, [], { autoCommit: true });

    console.log("Query executed, rows affected:", result.rowsAffected);

    if (result.rowsAffected > 0) {
      return NextResponse.json({
        data: "Successfully deleted item from cart",
      });
    } else {
      return NextResponse.json({
        error: "No rows affected, check orderid",
      });
    }
  } catch (error) {
    console.error("Database delete error:", error);
    return NextResponse.json({
      error: error.message,
    });
  } finally {
    if (connection) {
      try {
        await connection.close();
        console.log("Database connection closed");
      } catch (closeError) {
        console.error("Error closing connection:", closeError);
      }
    }
  }
}

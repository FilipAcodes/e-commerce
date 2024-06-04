const { getConnection } = require("../connection");
import { NextResponse } from "next/server";

export async function PUT(request, context) {
  try {
    // Parse the request body to get the update data
    const updateCart = await request.json();
    console.log(updateCart);

    const { itemid, orderid, quantity } = updateCart;

    // Get a connection from the connection pool
    const connection = await getConnection();

    // Define the query with named parameters
    const query = `UPDATE cart SET quantity = :quantity WHERE itemid = :itemid AND orderid = :orderid`;
    const binds = { quantity, itemid, orderid };

    // Execute the query with the binds object
    const result = await connection.execute(query, binds, { autoCommit: true });

    // Check the result and respond accordingly
    if (result.rowsAffected > 0) {
      return NextResponse.json({
        Success: "Successfully updated cart",
      });
    } else {
      return NextResponse.json({
        error: "No rows affected, check itemid and orderid",
      });
    }
  } catch (error) {
    console.error("Database update error:", error);
    return NextResponse.json({
      error: error.message,
    });
  } finally {
    // Ensure the connection is always released
    if (connection) {
      try {
        await connection.close();
      } catch (closeError) {
        console.error("Error closing connection:", closeError);
      }
    }
  }
}

its doomed
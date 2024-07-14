import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const cabinId = params.id;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return NextResponse.json({
      status_code: 200,
      message: "success",
      cabin,
      bookedDates,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json({ message: "Cabin not found" }, { status: 500 });
  }
}

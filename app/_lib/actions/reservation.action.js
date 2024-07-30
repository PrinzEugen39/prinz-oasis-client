"use server";

import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { supabase } from "../supabase";
import { redirect } from "next/navigation";

export async function createReservation(bookingData, formData) {
  const session = await auth();

  if (!session) {
    throw new Error("Unauthorized");
  }

  // bookingData.numGuest = formData.get("numGuests");
  // bookingData.observations = formData.get("observations");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations"),
    hasBreakfast: formData.get("hasBreakfast") === "true" ? true : false,
    extrasPrice:
      formData.get("hasBreakfast") === "true"
        ? 15 * Number(formData.get("numGuests"))
        : 0,
    totalPrice: bookingData.cabinPrice,
    status: "unconfirmed",
    isPaid: false,
  };

  // if (newBooking) {
  //   console.log(newBooking);
  //   return;
  // }

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  revalidatePath(`/cabins/${bookingData.cabinId}`);

  redirect("/cabins/thankyou");
}

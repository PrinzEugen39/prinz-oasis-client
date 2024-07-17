"use server";

import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { supabase } from "../supabase";
import { getBookings } from "../data-service";
import { redirect } from "next/navigation";

export async function updateProfile(formData) {
  const session = await auth();

  if (!session) {
    throw new Error("You need to be logged in to update your profile");
  }

  const nationalID = formData.get("nationalID");
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  const regex = /^[a-zA-Z0-9]{6,18}$/;

  const isValidNationalID = regex.test(nationalID);

  if (!isValidNationalID)
    throw new Error("Invalid national ID, please provide a valid one");

  const updatedData = {
    nationalID,
    nationality,
    countryFlag,
  };
  // console.log(session);
  // console.log(updatedData);

  const { error } = await supabase
    .from("guests")
    .update(updatedData)
    .eq("id", session.user.guestId);
  // .select()
  // .single();

  if (error) {
    console.log(error);
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function deleteReservation(bookingId) {
  const session = await auth();

  if (!session) {
    throw new Error("You need to be logged in to update your profile");
  }

  const guestBookings = await getBookings(session.user.guestId);

  const guestBookingsIds = guestBookings.map((booking) => booking.id);

  if (!guestBookingsIds.includes(bookingId))
    throw new Error("Something went wrong when deleting booking");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }
  console.log("Booking deleted");
  revalidatePath("/account/reservations");
}

export async function getReservation(id) {
  const session = await auth();

  if (!session) {
    throw new Error("You need to be logged in to update your profile");
  }

  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabinId(maxCapacity)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data;
}

export async function updateReservation(formData) {
  const session = await auth();

  if (!session) {
    throw new Error("You need to be logged in to update your profile");
  }

  const numGuests = parseInt(formData.get("numGuests"));
  const hasBreakfast = formData.get("hasBreakfast") === "true" ? true : false;
  const observations = formData.get("observations");

  if (!numGuests || numGuests < 1)
    throw new Error("Please provide the number of guests");

  if (hasBreakfast === undefined) throw new Error("Please provide breakfast");

  const updatedData = {
    numGuests,
    hasBreakfast,
    observations,
  };

  const id = formData.get("id");

  const { error } = await supabase
    .from("bookings")
    .update(updatedData)
    .eq("id", id);
  // .select()
  // .single();

  if (error) {
    console.log(error);
    throw new Error("Booking could not be updated");
  }
  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}

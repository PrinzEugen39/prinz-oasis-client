"use server";

import { auth } from "../auth";
import { supabase } from "../supabase";

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

  const { data, error } = await supabase
    .from("guests")
    .update(updatedData)
    .eq("id", session.user.guestId)
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error("Guest could not be updated");
  }
  console.log(data);
}

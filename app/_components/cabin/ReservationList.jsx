import React from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import { auth } from "@/app/_lib/auth";
import LoginMessage from "./LoginMessage";

const ReservationList = async ({ cabin }) => {
  const settings = await getSettings();
  const bookedDates = await getBookedDatesByCabinId(cabin.id);
  const session = await auth();

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
};

export default ReservationList;

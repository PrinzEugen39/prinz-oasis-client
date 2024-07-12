import React from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";

const ReservationList = async ({ cabin }) => {
  const settings = await getSettings();

  const bookedDates = await getBookedDatesByCabinId(cabin.id);
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      <ReservationForm cabin={cabin} />
    </div>
  );
};

export default ReservationList;

"use client";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "@/app/_lib/actions/account.action";

const ReservationList = ({ bookings }) => {

  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currbookings, passedBookingId) => {
      return currbookings.filter((booking) => booking.id !== passedBookingId);

      // reference for adding
      // return [...currbookings, { newBookingsObj }];
    }
  );

  async function handleDelete(id) {
    optimisticDelete(id);
    await deleteReservation(id);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          key={booking.id}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ReservationList;

import UpdateReservationForm from "@/app/_components/profile/UpdateReservationForm";
import { getReservation } from "@/app/_lib/actions/account.action";

export default async function Page({ params }) {
  // CHANGE
  const booking = await getReservation(params.id);

  return (
    <div className="py-12">
      <h2 className="text-2xl font-semibold text-accent-400 mb-7">
        Edit Reservation #{params.id}
      </h2>
      <UpdateReservationForm booking={booking} />
    </div>
  );
}

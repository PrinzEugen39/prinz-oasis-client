"use client";
import { createReservation } from "@/app/_lib/actions/reservation.action";
import { useReservation } from "@/app/_lib/context/ReservationContext";
import { differenceInDays, formatISO, isValid } from "date-fns";
import Image from "next/image";
import SpinnerMini from "../reusable/SpinnerMini";
import { useFormStatus } from "react-dom";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();

  const { from, to } = range;

  const isValidStartDate = from && isValid(new Date(from));
  const isValidEndDate = to && isValid(new Date(to));

  const startDate = isValidStartDate
    ? formatISO(new Date(from), { representation: "date" })
    : null;
  const endDate = isValidEndDate
    ? formatISO(new Date(to), { representation: "date" })
    : null;
  const numNights =
    isValidStartDate && isValidEndDate
      ? differenceInDays(new Date(endDate), new Date(startDate))
      : 0;

  const cabinPrice = numNights * (cabin.regularPrice + cabin.discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: cabin.id,
  };

  const createBookingWithData = createReservation.bind(null, bookingData);

  return (
    <div className="scale-[1.01]">
      <div className="flex items-center justify-between px-16 py-2 bg-primary-800 text-primary-300">
        <p>Logged in as</p>

        <div className="flex items-center gap-4">
          <Image
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
            height={32}
            width={32}
          />
          <p>{user.name}</p>
        </div>
      </div>

      <form
        className="flex flex-col gap-5 px-16 py-10 text-lg bg-primary-900"
        // action={createBookingWithData}
        action={async (formData) => {
          await createBookingWithData(formData);
          resetRange();
        }}
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: cabin.maxCapacity }, (_, i) => i + 1).map(
              (x) => (
                <option value={x} key={x}>
                  {x} {x === 1 ? "guest" : "guests"}
                </option>
              )
            )}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="hasBreakfast">Breakfast setting?</label>
          <select
            name="hasBreakfast"
            id="hasBreakfast"
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
            required
          >
            <option value="" key="">
              Breakfast option...
            </option>
            <option value="true" key="true">
              Yes, I want breakfast
            </option>
            <option value="false" key="false">
              No breakfast
            </option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
            placeholder="Any pets, allergies, special requirements, etc.?"
            maxLength={300}
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <p className="text-base text-primary-300">Start by selecting dates</p>

          <SubmitButton startDate={startDate} endDate={endDate} />
        </div>
      </form>
    </div>
  );
}

function SubmitButton({ startDate, endDate }) {
  const { pending } = useFormStatus();
  // console.log(data, method, action);
  return (
    <button
      disabled={pending || !startDate || !endDate}
      className="flex gap-2 px-8 py-4 font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending && <SpinnerMini />}
      {pending ? "Reserving..." : "Reserve now"}
    </button>
  );
}

export default ReservationForm;

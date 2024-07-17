"use client";

import { useFormStatus } from "react-dom";
import SpinnerMini from "../reusable/SpinnerMini";
import { updateReservation } from "@/app/_lib/actions/account.action";

const UpdateReservationForm = ({ booking }) => {
  return (
    <form
      className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900"
      action={updateReservation}
    >
      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests?</label>
        <select
          name="numGuests"
          id="numGuests"
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
          required
          defaultValue={booking.numGuests}
        >
          <option value="" key="">
            Select number of guests...
          </option>
          {Array.from(
            { length: booking.cabinId.maxCapacity },
            (_, i) => i + 1
          ).map((x) => (
            <option value={x} key={x}>
              {x} {x === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="hasBreakfast">Breakfast setting?</label>
        <select
          name="hasBreakfast"
          id="hasBreakfast"
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
          required
          defaultValue={booking.hasBreakfast}
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
          defaultValue={booking.observations}
          name="observations"
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
        />
      </div>
      <input type="hidden" name="id" value={booking.id} />

      <div className="flex items-center justify-end gap-6">
        <SubmitButton />
      </div>
    </form>
  );
};

function SubmitButton() {
  const { pending } = useFormStatus();
  // console.log(data, method, action);
  return (
    <button
      disabled={pending}
      className="flex gap-2 px-8 py-4 font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      {pending && <SpinnerMini />}
      {pending ? "Updating..." : "Update Reservation"}
    </button>
  );
}

export default UpdateReservationForm;

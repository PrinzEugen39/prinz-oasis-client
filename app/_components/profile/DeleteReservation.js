"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";
import SpinnerMini from "../reusable/SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
  const [isLoading, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => {
        onDelete(bookingId);
      });
  }
  return (
    <button
      className="flex items-center flex-grow gap-2 px-3 text-xs font-bold uppercase transition-colors group text-primary-300 hover:bg-accent-600 hover:text-primary-900"
      onClick={handleDelete}
    >
      {isLoading ? (
        <SpinnerMini />
      ) : (
        <>
          <TrashIcon className="w-5 h-5 transition-colors text-primary-600 group-hover:text-primary-800" />
          <span>Delete</span>
        </>
      )}
    </button>
  );
}

export default DeleteReservation;

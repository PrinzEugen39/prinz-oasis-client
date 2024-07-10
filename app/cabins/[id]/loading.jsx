import Spinner from "@/app/_components/reusable/Spinner";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data...</p>
    </div>
  );
}

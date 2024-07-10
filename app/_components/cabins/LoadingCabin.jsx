import React from "react";
import Spinner from "@/app/_components/reusable/Spinner";

export default function LoadingCabin() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <p className="text-xl text-primary-200">Loading cabin data...</p>
    </div>
  );
}

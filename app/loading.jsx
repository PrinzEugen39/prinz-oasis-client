import React from "react";
import Spinner from "./_components/Spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full">
      <Spinner />
    </div>
  );
}

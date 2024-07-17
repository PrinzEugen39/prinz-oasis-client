import React from "react";
import Spinner from "@/app/_components/reusable/Spinner";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full">
      <Spinner />
    </div>
  );
}

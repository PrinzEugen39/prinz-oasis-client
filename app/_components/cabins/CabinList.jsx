import React from "react";
import CabinCard from "./CabinCard";
import { getCabins } from "@/app/_lib/data-service";

const CabinList = async () => {
  const cabins = await getCabins();

  if (!cabins) {
    return <p className="text-center">No cabins found</p>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {cabins?.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinList;

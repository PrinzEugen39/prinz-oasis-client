import React from "react";
import CabinCard from "./CabinCard";
import { getCabins } from "@/app/_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

const CabinList = async ({ filter }) => {
  noStore();
  const cabins = await getCabins();

  if (!cabins) {
    return <p className="text-center">No cabins found</p>;
  }

  let displayedCabins;

  if (filter === "all") displayedCabins = cabins;
  if (filter === "sm")
    displayedCabins = cabins.filter((c) => c.maxCapacity <= 3);
  if (filter === "md")
    displayedCabins = cabins.filter(
      (c) => c.maxCapacity > 3 && c.maxCapacity < 8
    );
  if (filter === "lg")
    displayedCabins = cabins.filter((c) => c.maxCapacity >= 8);

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:gap-14">
      {displayedCabins?.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinList;

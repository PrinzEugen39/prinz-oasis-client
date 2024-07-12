import { Suspense } from "react";
import CabinList from "../_components/cabins/CabinList";
import LoadingCabin from "../_components/cabins/LoadingCabin";
import Filter from "../_components/reusable/Filter";
import ReservationReminder from "../_components/cabins/ReservationReminder";

export const revalidate = 300; // really relevant if u dont use searchParams, because its already dynamic

export const metadata = {
  title: "Cabins",
};

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity || "all";

  return (
    <div className="py-12">
      <h1 className="mb-5 text-4xl font-medium text-accent-400">
        Our Luxury Cabins
      </h1>
      <p className="mb-10 text-lg text-primary-200">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      <div className="flex justify-center mb-8">
        <Filter />
      </div>

      <Suspense fallback={<LoadingCabin />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

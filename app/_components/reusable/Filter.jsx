"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathName = usePathname();

  const activeFilter = searchParams.get("capacity") || "all";

  function handleFilter(filter) {
    // console.log(filter);
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.push(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex border border-primary-800">
      <Button
        onClick={() => handleFilter("all")}
        activeFilter={activeFilter}
        filter={"all"}
      >
        All cabins
      </Button>
      <Button
        onClick={() => handleFilter("sm")}
        activeFilter={activeFilter}
        filter={"sm"}
      >
        1&mdash;3 guest
      </Button>
      <Button
        onClick={() => handleFilter("md")}
        activeFilter={activeFilter}
        filter={"md"}
      >
        4&mdash;7 guest
      </Button>

      <Button
        onClick={() => handleFilter("lg")}
        activeFilter={activeFilter}
        filter={"lg"}
      >
        8&mdash;12 guest
      </Button>
    </div>
  );
}

function Button({ children, onClick, filter, activeFilter }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => onClick(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;

"use client";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import MobileNavCloseBtn from "./MobileNavCloseBtn";
import MobileNavList from "./MobileNavList";

const MobileNav = () => {
  const [open, setOpen] = useState(true);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="z-10 text-base md:hidden">
      <div>
        {!open && (
          <Bars3Icon
            className="w-8 h-8 transition-all text-primary-100 hover:text-primary-300"
            onClick={handleClick}
          />
        )}

        <>
          <div
            className={`${
              open ? "w-svw" : "w-0"
            } fixed top-0 right-0 z-[9999] min-h-svh grid grid-cols-10 transition-all duration-300 ease-in-out`}
          >
            <div
              onClick={handleClick}
              className={`col-span-3 max-sm:col-span-2 bg-accent-100/5 backdrop-blur-sm`}
            ></div>
            <div className="col-span-7 shadow-2xl max-sm:col-span-8 bg-primary-950">
              <MobileNavCloseBtn handleClick={handleClick} />
              {open && <MobileNavList handleClick={handleClick} />}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default MobileNav;

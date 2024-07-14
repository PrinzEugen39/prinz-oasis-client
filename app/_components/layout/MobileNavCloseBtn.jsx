import { XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const MobileNavCloseBtn = ({ handleClick }) => {
  return (
    <div className="flex justify-end px-8 py-5">
      <XMarkIcon
        className="w-8 h-8 transition-all text-primary-100 hover:text-primary-300"
        onClick={handleClick}
      />
    </div>
  );
};

export default MobileNavCloseBtn;

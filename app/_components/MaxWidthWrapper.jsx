import React from "react";
import { twMerge } from "tailwind-merge";

export default function MaxWidthWrapper({ children, className }) {
  return (
    <div className={twMerge("mx-auto max-w-7xl", className)}>{children}</div>
  );
}

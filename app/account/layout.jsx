import React from "react";
import SideNavigation from "../_components/layout/SideNavigation";

export default function Layout({ children }) {
  return (
    <section className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div>{children}</div>
    </section>
  );
}

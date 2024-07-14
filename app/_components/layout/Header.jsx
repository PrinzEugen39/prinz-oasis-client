import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MaxWidthWrapper from "../reusable/MaxWidthWrapper";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="px-8 py-5 border-b border-primary-900">
      <MaxWidthWrapper className={"flex items-center justify-between"}>
        <Logo />
        {/* appear in md breakpoint */}
        <Navigation />
        {/* max sm */}
        <MobileNav />
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;

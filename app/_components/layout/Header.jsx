import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import MaxWidthWrapper from "../reusable/MaxWidthWrapper";

const Header = () => {
  return (
    <header className="px-8 py-5 border-b border-primary-900">
      <MaxWidthWrapper className={"flex items-center justify-between"}>
        <Logo />
        <Navigation />
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;

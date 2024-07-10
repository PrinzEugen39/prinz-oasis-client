import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-400"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="transition-colors hover:text-accent-400"
          >
            Guest area
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useSession } from "next-auth/react";
import SpinnerMini from "../reusable/SpinnerMini";
import SignOutButton from "../auth/SignOutButton";

const MobileNavList = ({ handleClick }) => {
  const { data: session, status } = useSession();
  return (
    <div className="text-2xl">
      <ul className="flex flex-col items-center justify-center gap-8 md:hidden">
        <div onClick={handleClick}>
          <Logo />
        </div>
        <li className="mt-6">
          <Link
            href="/cabins"
            className="transition-colors hover:text-accent-400"
            onClick={handleClick}
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-accent-400"
            onClick={handleClick}
          >
            About
          </Link>
        </li>
        <li>
          {status === "loading" && (
            <span>
              <SpinnerMini />
            </span>
          )}
          {status === "authenticated" && session?.user.image && (
            <>
              <Link
                href="/account"
                className="flex items-center gap-4 transition-colors hover:text-accent-400"
                onClick={handleClick}
              >
                <span>Guest area</span>
                <Image
                  src={session.user.image}
                  alt="User avatar"
                  width={32}
                  height={32}
                  referrerPolicy="no-referrer"
                  className="object-cover rounded-full"
                />
              </Link>
              <div
                className="fixed top-[calc(100svh-100px)]"
              >
                <SignOutButton />
              </div>
            </>
          )}
          {status === "unauthenticated" && (
            <Link
              href="/account"
              className="transition-colors hover:text-accent-400"
              onClick={handleClick}
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default MobileNavList;

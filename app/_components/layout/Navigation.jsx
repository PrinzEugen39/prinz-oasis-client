import { auth } from "@/app/_lib/auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navigation = async () => {
  const session = await auth();
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
          {session?.user.image ? (
            <>
              <Link
                href="/account"
                className="flex items-center gap-4 transition-colors hover:text-accent-400"
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
            </>
          ) : (
            <Link
              href="/account"
              className="transition-colors hover:text-accent-400"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

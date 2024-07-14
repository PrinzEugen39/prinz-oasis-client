import React from "react";
import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

const Page = async () => {
  const session = await auth();
  return (
    <h2 className="py-12 text-2xl font-semibold text-accent-400 mb-7">
      Welcome, {session.user.name}
    </h2>
  );
};

export default Page;

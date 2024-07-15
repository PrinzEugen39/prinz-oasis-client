"use client";

import { updateProfile } from "@/app/_lib/actions/account.action";
import { usePathname } from "next/navigation";

const UpdateProfileForm = ({ children, guest }) => {
  const path = usePathname();
  const { fullName, email, nationalID, nationality, countryFlag } = guest;
  // CHANGE
  return (
    <div>
      {" "}
      <form
        className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900"
        action={updateProfile}
      >
        <div className="space-y-2">
          <label>Full name</label>
          <input
            name="fullName"
            defaultValue={fullName}
            disabled
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
            name="email"
            defaultValue={email}
            disabled
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            <img
              src={countryFlag}
              alt="Country flag"
              className="h-5 rounded-sm"
            />
          </div>
        </div>

        {children}

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            defaultValue={nationalID}
            name="nationalID"
            className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
            maxLength={18}
            minLength={6}
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <button className="px-8 py-4 font-semibold transition-all bg-accent-500 text-primary-800 hover:bg-accent-600 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfileForm;

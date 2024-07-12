import UpdateProfileForm from "@/app/_components/profile/UpdateProfileForm";
import SelectCountry from "@/app/_components/reusable/SelectCountry";

export const metadata = {
  title: "Update profile",
};

export default function Page() {
  const nationality = "portugal";
  return (
    <div className="py-12">
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">
        Update your guest profile
      </h2>

      <p className="mb-8 text-lg text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}

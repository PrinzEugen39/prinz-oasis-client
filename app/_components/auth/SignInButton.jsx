import { loginAction } from "@/app/_lib/actions/auth.action";

/* eslint-disable @next/next/no-img-element */
function SignInButton() {
  return (
    <form action={loginAction}>
      <button className="flex items-center gap-6 px-10 py-4 text-lg font-medium border border-primary-300 hover:border-primary-500">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;

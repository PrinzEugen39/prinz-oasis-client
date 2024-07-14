import Image from "next/image";
import bgimg from "@/public/bg.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="z-0 py-12 mt-24">
      <Image
        src={bgimg}
        fill
        alt="Mountains and forests with two cabins"
        className="object-cover object-top"
        placeholder="blur"
        quality={90}
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-10 text-6xl font-normal tracking-tight md:text-7xl lg:text-8xl text-primary-50">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="py-5 text-lg font-semibold transition-all px-7 md:px-8 md:py-6 bg-accent-500 text-primary-800 hover:bg-accent-600"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}

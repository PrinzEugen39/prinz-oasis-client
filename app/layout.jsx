import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/layout/Header";
import { ReservationProvider } from "./_lib/context/ReservationContext";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  // title: "Prinz Wild Oasis",
  title: {
    template: "%s | Prinz Wild Oasis",
    default: "Welcome | Prinz Wild Oasis",
  },
  description:
    "Luxurious cabin home stay in Gensokyo, located besides the beautiful Youkai mountain surrounded by Kappas.",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-svh bg-primary-950 text-primary-100 ${josefin.className} flex flex-col relative`}
      >
        <SessionProvider>
          <Header />
          <div className="z-0 grid flex-1 px-8">
            <main className="w-full mx-auto max-w-7xl">
              <ReservationProvider>{children}</ReservationProvider>
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}

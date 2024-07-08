import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/layout/Header";
import MaxWidthWrapper from "./_components/MaxWidthWrapper";

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
        className={`antialiased min-h-screen bg-primary-950 text-primary-100 ${josefin.className} flex flex-col relative`}
      >
        <Header />
        <div className="grid flex-1 px-8">
          <main>
            <MaxWidthWrapper className={"h-full"}>{children}</MaxWidthWrapper>
          </main>
        </div>
      </body>
    </html>
  );
}

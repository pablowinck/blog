import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function TextContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`h-full w-screen flex flex-col justify-center items-center ${inter.className} py-4`}
    >
      <div className="md:w-1/2 w-3/4">{children}</div>
    </div>
  );
}

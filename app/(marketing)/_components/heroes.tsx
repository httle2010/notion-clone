import Image from "next/image";
import { Heading } from "./heading";

export const Heroes = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        className="absolute inset-0 bg-[url('/background.png')] bg-repeat opacity-20 dark:opacity-30 dark:invert"
      />

      {/* Centered Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <Heading />
      </div>
    </div>
        
  );
};
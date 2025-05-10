"use client";

import { useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Marquee from "react-fast-marquee";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative h-screen sm:mt-24 mt-0 items-center justify-center overflow-hidden scroll-mt-24"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        {/* Marquee Container */}
        <div className="relative">
          {/* Text Overlay Top */}
          <Marquee
            speed={50}
            style={{
              position: "absolute",
            }}
            direction="right"
            className={`${inter.className} rotate-[10deg] w-full whitespace-nowrap text-[70px] text-center xl:text-[180px] text-black text-outline font-bold z-30 pointer-events-none`}
          >
            <span> • Zul • Fahri • Baihaqi</span>
          </Marquee>

          {/* Text Overlay Bottom */}
          <Marquee
            speed={50}
            className={`${inter.className} -rotate-[10deg] absolute top-0 left-0 w-full whitespace-nowrap text-[70px] text-center xl:text-[180px] font-bold text-black z-10 pointer-events-none`}
          >
            <span> • Zul • Fahri • Baihaqi</span>
          </Marquee>
        </div>

        {/* Central Image */}
        <div
          style={{ opacity: 1 }}
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[80%] max-w-md aspect-[3/4] z-20"
        >
          <Image
            src="/avatar.png"
            alt="Portfolio Hero"
            fill
            className="object-cover shadow-xl rounded-b-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}

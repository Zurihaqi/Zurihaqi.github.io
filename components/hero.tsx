"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasMoved, setHasMoved] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textX1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const textX2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasMoved(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen mt-24 flex items-center justify-center overflow-hidden scroll-mt-24"
    >
      {/* Text Overlay Top */}
      <motion.div
        style={{ x: textX2 }}
        animate={{
          x: hasMoved ? "0%" : "20%",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className={`${inter.className} absolute rotate-[10deg] right-[30%] w-full whitespace-nowrap text-[70px] text-center xl:text-[180px] text-black text-outline font-bold z-30 pointer-events-none`}
      >
        <span> • Zul • Fahri • Baihaqi </span>
        <span> • Zul • Fahri • Baihaqi </span>
      </motion.div>

      {/* Text Overlay Bottom */}
      <motion.div
        style={{ x: textX1 }}
        animate={{
          x: hasMoved ? "0%" : "-20%",
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute rotate-[-10deg] w-full whitespace-nowrap text-[70px] text-center xl:text-[180px] font-bold text-black z-10 pointer-events-none"
      >
        <span> • Zul • Fahri • Baihaqi </span>
        <span> • Zul • Fahri • Baihaqi </span>
      </motion.div>

      {/* Central Image */}
      <motion.div
        style={{ scale: imageScale, opacity: imageOpacity }}
        className="relative w-[80%] max-w-md aspect-[3/4] z-20"
      >
        <Image
          src="/avatar.png"
          alt="Portfolio Hero"
          fill
          className="object-cover shadow-xl rounded-b-md"
          priority
        />
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LinkedinIcon, GithubIcon } from "lucide-react";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-12 sm:px-0 px-4 bg-[#151414] text-white border-t border-black/10">
      <div className="container mx-auto overflow-hidden">
        <Marquee speed={70}>
          <p className="inline-block mb-12 sm:text-4xl text-3xl font-light">
            <span className="mr-[10rem]">LET'S CONNECT!</span>
            <span className="mr-[10rem]">EMAIL ME</span>
            <span className="mr-[10rem]">MESSAGE ME</span>
            <span className="mr-[10rem]">CHECK OUT MY GITHUB</span>
            <span className="mr-[10rem]">ADD ME ON STEAM?</span>
          </p>
        </Marquee>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-light">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl mb-4">Zul • Fahri • Baihaqi</h3>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Zurihaqi"
                target="_blank"
                className=" hover:text-gray-300/70 transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/zurihaqi/"
                target="_blank"
                className=" hover:text-gray-300/70 transition-colors"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="https://steamcommunity.com/id/Zrymund/"
                target="_blank"
                className=" hover:text-gray-300/70 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="#ffffff"
                    d="M496 256c0 137-111.2 248-248.4 248-113.8 0-209.6-76.3-239-180.4l95.2 39.3c6.4 32.1 34.9 56.4 68.9 56.4 39.2 0 71.9-32.4 70.2-73.5l84.5-60.2c52.1 1.3 95.8-40.9 95.8-93.5 0-51.6-42-93.5-93.7-93.5s-93.7 42-93.7 93.5v1.2L176.6 279c-15.5-.9-30.7 3.4-43.5 12.1L0 236.1C10.2 108.4 117.1 8 247.6 8 384.8 8 496 119 496 256zM155.7 384.3l-30.5-12.6a52.8 52.8 0 0 0 27.2 25.8c26.9 11.2 57.8-1.6 69-28.4 5.4-13 5.5-27.3 .1-40.3-5.4-13-15.5-23.2-28.5-28.6-12.9-5.4-26.7-5.2-38.9-.6l31.5 13c19.8 8.2 29.2 30.9 20.9 50.7-8.3 19.9-31 29.2-50.8 21zm173.8-129.9c-34.4 0-62.4-28-62.4-62.3s28-62.3 62.4-62.3 62.4 28 62.4 62.3-27.9 62.3-62.4 62.3zm.1-15.6c25.9 0 46.9-21 46.9-46.8 0-25.9-21-46.8-46.9-46.8s-46.9 21-46.9 46.8c.1 25.8 21.1 46.8 46.9 46.8z"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-2 text-xl"
          >
            <h3 className=" mb-4">Navigation</h3>
            <Link
              href="#hero"
              className="block hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="block hover:text-gray-300 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#about"
              className="block hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="block hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-2 text-xl"
          >
            <h3 className=" mb-4">Contact</h3>
            <p className="">zurihaqi@gmail.com</p>
            <p className="">+62 878 2381 5619</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-black/10 mt-12 pt-8 font-light"
        >
          <div className="border border-white" />
          <p className="mt-10">
            Designed and developed by Zul Fahri Baihaqi. © {year} All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

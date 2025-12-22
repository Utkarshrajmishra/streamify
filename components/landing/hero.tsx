"use client"
import Wrapper from "./wrapper";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion, Variants, Transition } from "framer-motion";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }, // cubic-bezier for easeOut
    },
  };

  return (
    <main className="flex items-center h-fit justify-center">
      <Wrapper>
        <motion.section
          className="font-sans py-16 flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="font-[500] text-6xl max-w-5xl"
            variants={itemVariants}
          >
            Never miss a commit again, with missed days handled automatically.
          </motion.h1>

          <motion.p
            className="text-2xl max-w-5xl text-neutral-500"
            variants={itemVariants}
          >
            Backfill missed commits, schedule future ones, keep your GitHub
            contribution graph full, maintain your streaks, and let automation
            handle the rest.
          </motion.p>

          <motion.div className="flex gap-4" variants={itemVariants}>
            <Button className="relative overflow-hidden text-lg font-light p-5 rounded-full bg-neutral-800 text-white group">
             <img src="/logo-white.webp" alt="Backfill now" className="w-4 h-4 inline-block" /> Backfill now
              <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white opacity-30 transform -skew-x-12 transition-all duration-500 ease-in-out group-hover:left-[125%]"></span>
            </Button>

            <Button className="relative font-[400] hover:bg-neutral-200 overflow-hidden text-lg p-5 rounded-full bg-neutral-300 text-black group">
              How it Works
              <span className="absolute top-0 left-[-75%] w-1/2 h-full bg-white opacity-30 transform -skew-x-12 transition-all duration-500 ease-in-out group-hover:left-[125%]"></span>
            </Button>
          </motion.div>

          <motion.div
            className="h-[600px] w-full bg-gradient-to-b flex justify-center from-pink-300 via-blue-200 to-blue-200 rounded-xl mt-9"
            variants={itemVariants}
          >
            {/* <Image src="/github.png" width={1000} height={400} alt="Hero Image"/> */}
          </motion.div>
        </motion.section>
      </Wrapper>
    </main>
  );
};

export default Hero;

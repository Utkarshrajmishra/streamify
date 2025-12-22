"use client";

import { Button } from "../ui/button";
import Wrapper from "./wrapper";
import Image from "next/image";
import { motion, Variants, easeInOut } from "framer-motion";

const Header = () => {
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeInOut }, // ✅ Use easing function
    },
  };

  return (
    <motion.header
      className="fixed top-0 backdrop-blur-sm bg-white/60 left-0 w-full h-16 border-b border-neutral-300 flex items-center justify-center font-sans z-50"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <Wrapper>
        <div className="flex items-center justify-between w-full">
          {/* Logo and text */}
          <motion.div className="flex items-center gap-1" variants={itemVariants}>
            <Image src="/logo.webp" width={30} height={30} alt="Logo" />
            <h1 className="text-2xl font-mono font-bold">Enactgit</h1>
          </motion.div>

          {/* Navigation links */}
<motion.div className="flex gap-10 font-[500]" variants={itemVariants}>
  {["Features", "Pricing", "Blog", "Changelog"].map((item) => (
    <motion.div
      key={item}
      className="relative cursor-pointer"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <motion.p
        variants={{
          rest: { y: 0 },
          hover: { y: -2 },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="hover:text-neutral-900"
      >
        {item}
      </motion.p>

      {/* underline */}
      <motion.span
        variants={{
          rest: { width: 0, opacity: 0 },
          hover: { width: "100%", opacity: 1 },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="absolute left-0 -bottom-1 h-[2px] bg-neutral-900"
      />
    </motion.div>
  ))}
</motion.div>


          {/* Button */}
          <motion.div variants={itemVariants}>
            <Button className="rounded-full font-[500] text-md bg-neutral-100 text-black px-5 py-2">
              Get started
            </Button>
          </motion.div>
        </div>
      </Wrapper>
    </motion.header>
  );
};

export default Header;

"use client";
import { motion, useAnimation } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

const TextAnimation = () => {
  const boxControls = useAnimation();
  const borderControls = useAnimation();
  const [showGithub, setShowGithub] = useState(true);

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await borderControls.start({
          strokeDashoffset: 0,
          transition: { duration: 2, ease: "linear" },
        });

        await boxControls.start({
          y: -120,
          transition: { duration: 0.5, ease: "easeIn" },
        });

     setShowGithub((prev) => !prev);

       boxControls.set({ y: 120 });

        await boxControls.start({
          y: 0,
          transition: {
            duration: 0.7,
            ease: "easeOut",
          },
        });

        // reset border
        borderControls.set({ strokeDashoffset: 400 });

        // pause
        await new Promise((r) => setTimeout(r, 1000));
      }
    };

    loop();
  }, []);

  return (
    <div className="bg-amber-50 h-[200px] w-[400px] flex items-center justify-center rounded-md relative overflow-hidden">
      {/* Border animation */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.rect
          x="2"
          y="2"
          width="396"
          height="196"
          rx="12"
          fill="none"
          stroke="black"
          strokeWidth="2"
          strokeDasharray="400"
          strokeDashoffset="400"
          animate={borderControls}
        />
      </svg>

      {/* Animated black box */}
      <motion.div
        animate={boxControls}
        initial={{ y: 0 }}
        className="h-32 w-32 bg-neutral-900 rounded-md border border-white flex items-center justify-center"
      >
        {showGithub ? (
          <FaGithub className="text-white text-6xl" />
        ) : (
          <img
            src="/logo-white.webp"
            alt="Logo"
            className="w-14 h-14"
          />
        )}
      </motion.div>
    </div>
  );
};

export default TextAnimation;

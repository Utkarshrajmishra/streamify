"use client"

import Wrapper from "./wrapper"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Message2 = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section
      ref={ref}
      className="flex pb-12 items-center justify-center"
    >
      <Wrapper>
        <motion.p
          className="text-6xl"
          initial={{ color: "#d4d4d4" }} // neutral-300
          animate={isInView ? { color: "#171717" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Build by developer,
        </motion.p>

        <motion.p
          className="text-6xl"
          initial={{ color: "#d4d4d4" }}
          animate={isInView ? { color: "#171717" } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
        >
          build for the developers.
        </motion.p>
      </Wrapper>
    </section>
  )
}

export default Message2

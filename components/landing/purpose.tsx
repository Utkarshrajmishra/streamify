import Wrapper from "./wrapper"
import Image from "next/image"
const Purpose = () => {
  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      {/* Background */}
      <img
        src="/slider-bg.jpg"
        alt="Purpose background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex  items-center justify-center ">
        <Wrapper>
          <p className="max-w-5xl text-5xl mt-2 font-inter text-light text-neutral-400 leading-snug"> <span className="text-white"> Purpose‑built</span> for GitHub, <span className="text-white"> privacy‑first</span>, and designed for <span className="text-white">reliability</span>. Up to <span className="text-white"> 365‑day backfill</span> and <span className="text-white"> future fill</span> per run.

</p>
        </Wrapper>
      </div>

    </section>
  )
}

export default Purpose

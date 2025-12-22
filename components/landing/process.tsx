import Wrapper from "./wrapper";

const Process = () => {
  return (
    <section className="py-26 w-full flex justify-center font-sans">
      <Wrapper>
        <div className="grid grid-cols-3 gap-12 items-center">
          
          {/* LEFT: Steps */}
<div className="max-w-md flex flex-col h-full">
  <h2 className="text-5xl font-[400]">
    Get started with-in minutes.
  </h2>

  <ul className="mt-auto space-y-4 text-lg text-neutral-600">
    <li className="flex items-center gap-3 text-black">
      <span className="bg-black h-2 w-2"></span> Sign in
    </li>
    <li className="flex items-center gap-3">
      <span className="text-black"></span> Select repo
    </li>
    <li className="flex items-center gap-3">
      <span className="text-black"></span> Future-fill or backfill
    </li>
    <li className="flex items-center gap-3">
      <span className="text-black"></span> Watch it glow
    </li>
  </ul>
</div>


          {/* CENTER: Visual */}
          <div className="flex justify-center">
            <img
              src="/bg-cover.jpg"
              alt="Process visual"
              className=" object-contain"
            />
          </div>

          {/* RIGHT: Description */}
          <div className="flex flex-col gap-3 max-w-sm">
            <p className="text-2xl font-[400]">Sign in</p>
            <p className="text-lg text-neutral-600">
              Authorize with GitHub so we can securely create and manage your workflow.
            </p>
          </div>

        </div>
      </Wrapper>
    </section>
  );
};

export default Process;

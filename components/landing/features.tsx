import { IndianRupee } from "lucide-react"
import Wrapper from "./wrapper"
import { FaCalendar, FaWallet } from "react-icons/fa"

const Features = () => {
  return (
    <section className="w-full flex justify-center font-sans py-16">
      <Wrapper>
        <div className="grid grid-cols-3 gap-6 w-full">

          {/* LEFT BIG CARD (spans 2 rows) */}
          <div className="row-span-2 flex flex-col justify-between p-6 rounded-xl bg-neutral-100">
            <div className="flex items-center gap-3">
              <FaWallet className="text-2xl" />
              <p className="text-3xl font-medium">Free Forever</p>
            </div>

            <div className="flex items-start text-7xl">
              <IndianRupee className="size-8" />
              <p>0</p>
            </div>

            <p className="text-light text-neutral-600">
                Use it freely, forever, without paying, upgrading, or begging — automate everything and stay consistent effortlessly. Use it freely, forever, without paying, upgrading, or begging
            </p>
          </div>

          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="p-6 rounded-xl flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <FaCalendar className="text-2xl" />
                <p className="text-2xl not-[]: font-medium">Long Backfill</p>
              </div>

              <p className=" text-light text-neutral-600">
                Up to 365 days of missed commits, fixed automatically.
              </p>
            </div>
          ))}

        </div>
      </Wrapper>
    </section>
  )
}

export default Features

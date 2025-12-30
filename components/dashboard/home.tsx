import { IoReload } from "react-icons/io5"
import { Button } from "../ui/button"
import { Calendar, ChevronDown, Download } from "lucide-react"
import SelectRepo from "./select-repo"
import HeatMap from "./heatmap"

const Home=()=>{
    return(
        <section className=" font-sans">
            <div className="flex gap-4 justify-end">
                        <Button className="rounded-sm bg-neutral-800"><Calendar/> Year 2025 <ChevronDown className="size-3"/></Button>

            <Button className="rounded-sm bg-neutral-800"><IoReload/> Refresh</Button>
      </div>
<SelectRepo/>
<HeatMap/>
        </section>
    )
}

export default Home
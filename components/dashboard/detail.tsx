import { Button } from "../ui/button"
import { GitMerge } from "lucide-react"
const Detail=()=>{
    return(
            <div className="h-fit flex items-center justify-between w-full border border-neutral-400 rounded-md p-4 mt-6 bg-white">
                <div className="font-sans flex  gap-8">
                    <p>Repo : --</p>
                    <p>Branch: --</p>
                </div>
                        <Button className="rounded-sm bg-neutral-800"><GitMerge/> Create commit</Button>

</div>
    )
}

export default Detail
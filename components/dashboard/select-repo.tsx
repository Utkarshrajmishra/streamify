import { FolderGit, FolderGit2, GitBranch, GithubIcon } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import Github from "next-auth/providers/github"

const SelectRepo=()=>{
    return(
              <div className="h-fit  flex-col w-full border-1 border-neutral-400 rounded-md flex p-4  mt-4 bg-white">
       <div className="flex justify-between w-full">
        <p className="text-neutral-900 text-lg font-semibold">Repository</p>
        <div className="flex gap-2">
                            <Button className="rounded-sm bg-neutral-800"><FolderGit2/> Create new repo</Button>

                    <Button className="rounded-sm bg-neutral-800"><FolderGit/> Select repo</Button>

     </div>
     </div>
            <Input placeholder="Search repositories..." className="h-10 mt-4 w-[100%] bg-neutral-100"/>
        
     <div className="mt-4 flex flex-col gap-1">
        <p className="flex gap-1 items-center"> Select Branch</p>
        <div className="text-sm mt-1 flex gap-3">
            <p className="bg-neutral-900 w-fit h-fit py-1 px-2 rounded-sm text-white">main</p>
                        <p className="bg-neutral-700 w-fit h-fit py-1 px-2 rounded-sm text-white">main-dev</p>

        </div>
     </div>

      </div>
    )
}

export default SelectRepo
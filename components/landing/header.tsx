import { Button } from "../ui/button"
import Wrapper from "./wrapper"

const Header=()=>{
    return(
        <header className="h-18 flex items-center justify-center font-sans bg-neutral-50 w-full">
            <Wrapper>
                <div className=" flex items-center justify-between">
                <h1 className="text-2xl font-mono font-bold">ChraGit</h1>
                <div className="flex gap-10">
                {    ["Features", "Pricing", "Blog", "Changelog"]?.map((item) => (
                    <p>{item}</p>
                ))

                }
                </div>
                <Button className="rounded-full text-md bg-neutral-200 text-black">Get started</Button>
            </div>
            </Wrapper>
        </header>
    )
}

export default Header
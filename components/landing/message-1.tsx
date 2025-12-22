import { Github } from "lucide-react";
import Wrapper from "./wrapper";
import Image from "next/image";
import TextAnimation from "./text-animation";
const Message1 = () => {
    return(
        <section className="w-full mt-10 text-left  items-center justify-center flex bg-neutral-950 py-20 text-white">
            <Wrapper>
                <div className="flex justify-between gap-3">
        <p className="text-5xl font-[400] max-w-2xl font-sans">EnactGit is not affiliated with GitHub. <span className="text-neutral-400">It requests only the scopes needed to run fills via your own workflows, and you can revoke access anytime.</span>

</p>

<div className="relative">
<Image src="/bg-1.jpg" height={200} width={600}  alt="background" />
<div className="bg-transparent backdrop-blur-sm flex items-center justify-center h-58 w-[440px] absolute top-2 left-18 rounded-md border-1 border-neutral-500">
<TextAnimation/>
</div>



</div>
</div>
</Wrapper>
</section>
    )
}

export default Message1;
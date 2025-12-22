import { MdArrowOutward } from "react-icons/md";
import Wrapper from "./wrapper";
import { BiGitRepoForked } from "react-icons/bi";

const Features2=()=>{
    return(
        <section className="py-12 flex justify-center">
            <Wrapper>
                <div className="border-b-1 border-neutral-200">
                <div className="font-sans  mb-10">
            <p className="text-5xl ">What EnactGit can do?</p>
            <section className="flex justify-between gap-4 mt-12">
                <div className="text-xl p-10 w-110 bg-neutral-100 rounded-lg flex flex-col gap-8">
                 

                   <div className="flex items-center gap-2">
                    <MdArrowOutward size={40} />

                    <p className="text-3xl">Commit Recovery</p>
                    </div>
                    <div className="flex flex-col gap-4">
                    <p >+ Recover missed days up to a year in one go.</p>
                    <p>+ Backfill commits to any past date.</p>
                    <p>+ No scheduling. Fill upcoming days immediately.</p>
                </div>
                </div>
                                <div className="text-xl p-12  w-110 bg-neutral-100 rounded-lg flex flex-col gap-8">

                   <div className="flex  gap-2">

                    <MdArrowOutward size={40} />

                    <p className="text-3xl">Private & Yours</p>
                    </div>

                    <div className="flex flex-col gap-4">
                    <p >+ Runs in your repository via Actions.</p>
                    <p>+ Revoke commits any time.</p>
                    <p>+ No scheduling. Fill upcoming days immediately.</p>
                    
                </div>
                </div>
                                <div className="text-xl p-12  w-110 bg-neutral-100 rounded-lg flex flex-col gap-8">
                   <div className="flex  gap-2">

                    <MdArrowOutward size={40} />
                    <p className="text-3xl">Create Patterns</p>
                    </div>

                    <div className="flex flex-col gap-4">
                    <p >+ Print fun, symmetric, or custom patterns.</p>
                    <p>+ Backfill commits to any past date.</p>
                    <p>+ No scheduling. Fill upcoming days immediately.</p>
                </div>
                </div>
                
            </section>
            </div>
            </div>
            </Wrapper>
        </section>
    )
}

export default Features2;
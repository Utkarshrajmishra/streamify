import Image from "next/image"

const Sidebar = () => {
    return (
        <section className="w-62 flex flex-col justify-between  bg-white gap-4 font-sans  h-screen border-r border-neutral-400">
         <div>
          <div className="h-12 flex items-center border-b border-neutral-600 p-4">
                        <Image src="/logo.webp" width={25} height={50} alt="Logo" />
                        <h1 className="text-xl font-mono font-bold">Enactgit</h1>
            
            </div>   
            <div className="flex flex-col gap-2 text-s p-4  text-neutral-600 ">
                <p className="bg-neutral-100 text-neutral-950 p-2 rounded-md border-1 border-neutral-400">Home</p>
                <p className="p-2 hover:text-neutral-950">Docs</p>
                <p className="p-2 hover:text-neutral-950">API</p>
                <p className="p-2 hover:text-neutral-950">Github to Resume</p>
                <p className="p-2 hover:text-neutral-950">Profile Generator</p>
                <p className="p-2 hover:text-neutral-950">Docs</p>
                <p className="p-2 hover:text-neutral-950">API</p>
                <p className="p-2 hover:text-neutral-950">Github to Resume</p>
                <p className="p-2 hover:text-neutral-950">Profile Generator</p>
            </div>
            </div>
            <div className="h-32 bg-neutral-100 border-t border-neutral-400 flex flex-col justify-center items-center p-4">
         </div>
        </section>
    )
}

export default Sidebar
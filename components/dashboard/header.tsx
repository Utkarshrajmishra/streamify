import { ProfilePopover } from "../auth/profile";

const Header=()=>{
    return  (
        <section className="h-12 bg-white flex justify-between items-center px-6 font-sans w-full border-b border-neutral-400">
        <p className="text-xl font-sabs font-semibold">Dashboard</p>
        <ProfilePopover/>
        </section>
    )
}

export default Header;
import { ProfilePopover } from "../auth/profile";
import SessionProviderWrapper from "../auth/session-provider";

const Header=()=>{
    return  (
        <SessionProviderWrapper>
        <section className="h-12 bg-white flex justify-between items-center px-6 font-sans w-full border-b border-neutral-400">
        <p className="text-xl font-sabs font-semibold">Dashboard</p>
        <ProfilePopover/>
        </section>
        </SessionProviderWrapper>
    )
}

export default Header;
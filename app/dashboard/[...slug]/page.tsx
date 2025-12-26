import Header from "@/components/dashboard/header"
import Home from "@/components/dashboard/home"
import Sidebar from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import {  GitMerge } from "lucide-react"

const DashboardPage=()=>{
    return(
        <section className="h-screen flex w-full bg-neutral-50">
        <Sidebar/>
        <div className="w-full">
            <Header/>
            <Home/>
        <Button className="rounded-sm bg-neutral-800"><GitMerge/> Create commit</Button>

        </div>
        </section>
    )
}

export default DashboardPage
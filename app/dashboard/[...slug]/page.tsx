import Header from "@/components/dashboard/header"
import Home from "@/components/dashboard/home"
import Sidebar from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import {  GitMerge } from "lucide-react"
import Detail from "@/components/dashboard/detail"
const DashboardPage=()=>{
    return(
        <section className="h-screen flex w-full bg-neutral-50">
        <Sidebar/>
        <div className="w-full ">
            <Header/>
            <div className="p-6">
            <Home/>
            <Detail/>
            </div>

        </div>
        </section>
    )
}

export default DashboardPage
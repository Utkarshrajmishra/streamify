import Header from "@/components/dashboard/header"
import Home from "@/components/dashboard/home"
import Sidebar from "@/components/dashboard/sidebar"

const DashboardPage=()=>{
    return(
        <section className="h-screen flex w-full bg-neutral-50">
        <Sidebar/>
        <div className="w-full">
            <Header/>
            <Home/>
        </div>
        </section>
    )
}

export default DashboardPage
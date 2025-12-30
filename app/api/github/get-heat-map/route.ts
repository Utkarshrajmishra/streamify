import { NextRequest } from "next/server";
import * as cheerio from "cheerio";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";
export async function GET(req: NextRequest){
    try{
        const session=await getServerSession(authOptions)

        if(!session?.user?.name){
            return new Response(JSON.stringify({error: 'You are not authorized!'}),{
                status:400,
                headers:{'Content-Type':'application/json'}
            })
        }


        const html=await fetch(`https://github.com/${session.user.name}`)
        .then(res=>res.text());

        const $=cheerio.load(html)
          
        const data : {date:string, counter:number}[]=[]

        $('react[data-date]').each((_:any,el:any)=>{
            data.push({
                 date: $(el).attr("data-date")!,
      counter: Number($(el).attr("data-count")),
            })
        })



        return new Response(JSON.stringify({
            heatmap:data
        }),{
            status:200,
            headers:{'Content-Type':'application/json'}
        })


    }
    catch(error){
        return new Response(JSON.stringify({error:'Internal server error'}),{
            status:500,
            headers:{'COntetn-Type':'application/json'}
        })
    }


}
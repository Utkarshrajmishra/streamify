import { NextRequest }  from "next/server";


export async function GET(req: NextRequest){
    try {
        const id=req.nextUrl.searchParams.get('id')

        if(!id){
            return new Response(JSON.stringify({error:"User id not found"}),{
                status:400,
                headers:{'Content-Type':'application/json'}
            })
        }

        const res=await fetch(`https://api.github.com/user/repos&sorted=updated`,{
            headers:{
                Authorization:`Bearer ${id}`,
                Accept:'application/vnd.github+json'
            }
        })
        const repos=await res.json()

        const writableRepos=repos.filter((repo:any)=>repo?.permission.push)

        return new Response(JSON.stringify({repos:writableRepos}),{
            status:200,
            headers:{'Content-Type':'application/json'}
        })
        
    }
    catch(error){
        return new Response(JSON.stringify({error:"Internal server error"}),{
            status:500,
            headers:{'Content-Type':'application/json'}
        })
    }
}
//node
//

import { NextResponse } from "next/server";


const url="https://reqres.in/api/users"
export async function GET(){
  const response=  await fetch(url)
  const res=await response.json()
    return NextResponse.json({data:res})
}


export async function POST(req:Request){
    const body=await req.json()//body

    const res=await fetch(url,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    })
   const response=await res.json()
    return NextResponse.json({response})

}
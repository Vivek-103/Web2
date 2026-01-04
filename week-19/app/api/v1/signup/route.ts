import { NextResponse, NextRequest } from "next/server";
import {PrimsaClient} from "@/prisma/client"

const prismaClient = new PrismaClient();

export async function POST(req:NextRequest){

    const data = await req.json();

    await prismaClient.user.Create({
        data:{
            username : data.username,
            password : data.password
        }
    })

    return NextResponse.json({
        message: "Your have signed up"
    })
}

export async function GET(req:NextRequest){
    const user = await PrimsaClient.user.findfirst();

    return NextResponse.json({
        user
    })

}
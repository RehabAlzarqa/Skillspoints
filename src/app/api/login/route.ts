import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs";



export async function POST(request:NextRequest){
    //this is the declaration
    const body = await request.json()
    const email = body.email;
    const password = body.password;
    const utilisateur =  await prisma.utilisateur.findUnique({where:{email: email}});
    if(!utilisateur){
        return NextResponse.json({
            message:"User not found"},
            {status:404}
        );
    }

const isPasswordCorrect =await bcrypt.compare(password,utilisateur.motDePasse)
if(!isPasswordCorrect){
    return NextResponse.json(
        { message:"Invalid email or password"},
        {status: 401}
    );
}
return NextResponse.json({
    message:"login successful"
}, {status: 200});
   

}

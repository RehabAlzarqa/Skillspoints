import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";



export async function POST(request:NextRequest){
    //this is the declaration
    const body = await request.json()
    const email = body.email;
    const password = body.password;
    
    const utilisateur =  await prisma.utilisateur.findUnique({where:{email: email}});
    return NextResponse.json({
        message:"User not found"},
        {status:404}
    );

    if(!utilisateur){
    }

const isPasswordCorrect =await bcrypt.compare(password,utilisateur.motDePasse as string)
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

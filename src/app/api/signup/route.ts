import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


// steps 



//create the endpoint function
export async function POST(request: NextRequest) {

  try {
    //collect user details
    const body = await request.json();
    const name = body.name;
    const email = body.email;
    const password = body.password;

    //collect user details

    // valaidate fields
    if (!name || !email || !password) {
      return NextResponse.json({ error: true, msg: " all field required" }, { status: 400 })
    }
    
    // valaidate fields

    //validate user existence
    const utilisateurExist = await prisma.utilisateur.findUnique({ where: { email } })
        return NextResponse.json({ error: true, msg: " all field required" }, { status: 400 })

    if (utilisateurExist) {

      return NextResponse.json({ error: true, msg: "The user with this email already exist. User another gmail" }, { status: 400 })
    }

    //validate user existence

    // create the user 
    const utilsateurCreated = await prisma.utilisateur.create({
     data: { name: name as string,
      email: email,
      motDePasse: password,}
    })

    // create the user 

    // confirm is the user is not not saved

    if (!utilsateurCreated) {
      return NextResponse.json({ error: true, msg: "Error in creating your account" }, { status: 400 })
    }
    // confirm is the user is not not saved

    // return the user to the frontend 

    return NextResponse.json(
      { error: false, msg: "  Your account was successfully created " },
      { status: 201 }

    )
  } catch (error) {
    console.log({error})
    return NextResponse.json({ error })
  }
  //create the endpoint function


}
// return the user to the frontend

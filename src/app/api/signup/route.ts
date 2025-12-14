import { NextResponse } from "next/server";
import { date } from "yup";
export async function POST(request:Request) {
    const body = await request.json();
// validation here 
    if (!body.name || ! body.email || ! body.password || !body.confirmpassword) {
        return NextResponse.json(
            {error:"all field are requiresd "},
            {status:400}
        );
    }
return NextResponse.json(
  {
    message:"done",
    date:{
        nome: body.name,
        email: body.email,
        password: body.password,
    },
  },
  {status:201}
);
}
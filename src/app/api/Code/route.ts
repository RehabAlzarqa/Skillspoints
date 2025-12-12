import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ status: "OK" ,
    id: 1,
    body: " body"

  });
}

 export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    status:" did it ",
    date: body,
  },
  {status: 201}
);
}


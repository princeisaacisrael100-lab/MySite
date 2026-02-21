import { NextResponse } from "next/server";
import { whyUs } from "../../Data/data";


export async function GET() {
    return NextResponse.json(whyUs);
}
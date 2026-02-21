import { NextResponse } from "next/server";
import { menu } from "../../Data/data";


export async function GET() {
    return NextResponse.json(menu);
}

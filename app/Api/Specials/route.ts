import { specials } from "@/app/Data/data";
 

export async function GET(request: Request) {
    return Response.json(specials);
}
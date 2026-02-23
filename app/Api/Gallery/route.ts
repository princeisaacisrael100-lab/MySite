import { gallery } from '../../Data/data';

export async function GET() {
    return Response.json(gallery);
}

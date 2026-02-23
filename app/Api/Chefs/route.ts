import { chefs } from '../../Data/data';

export async function GET() {
    return Response.json(chefs);
}

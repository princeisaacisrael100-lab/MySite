import { events } from '../../Data/data';

export async function GET() {
    return Response.json(events);
}

import { testimonials } from '../../Data/data';

export async function GET() {
    return Response.json(testimonials);
}

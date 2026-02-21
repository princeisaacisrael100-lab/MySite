import { menu } from '../../../Data/data';

export async function GET(
    _request: Request, {
        params
    }: {
        params: Promise<{ id: string }>
    }
) {
    const { id } = await params;
    const food = menu.find(
        (item: { id: number }) => item.id.toString() === id
    );
    return Response.json(food);

}
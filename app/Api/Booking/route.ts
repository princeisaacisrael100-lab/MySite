import {bookings} from  '@/app/Data/data';

export const GET = async () => {
    return new Response(JSON.stringify(bookings));
};
 export async function POST(request: Request) {
  const booking = await request.json();
  delete booking.validate;
  const newBooking = {
    id: bookings.length + 1,
    details: booking,
  };
  bookings.push(newBooking);
  return new Response(JSON.stringify(newBooking), {
    headers: {
      'Content-Type': 'application/json',
    },
    status: 201,
  });
}

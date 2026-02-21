import React from 'react'
import { Breadscrumbs } from '@/app/Components/Breadscrumbs';
import Image from 'next/image';
import { menu } from '@/app/Data/data';

export default async function MenuSingle({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const food = menu.find((item: any) => item.id.toString() === id);

  if (!food) {
    return (
      <main id='main'>
        <Breadscrumbs pages={["Menu"]} />
        <section className='inner-page'>
          <div className="container">
            <h2>Item not found</h2>
          </div>
        </section>
      </main>
    )
  }

  return (
    <main id='main'>
      <Breadscrumbs pages={["Menu"]} />

      <section className='inner-page'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Image
                src={food.preview}
                alt={food.name}
                height={500}
                width={500}
                className='img-fluid'
              />
            </div>
            <div className='col-lg-6'>
              <h2 className='mt-3'>{food.name}</h2>
              <h4 className='mt-2'>
                <i>{food.ingredients}</i>
              </h4>
              <p className='mt-5'>Price: ${food.price}</p>
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}

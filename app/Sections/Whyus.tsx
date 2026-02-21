import React from 'react'
import './Whyus.css'
import { Whyuscart } from '../Components/Whyuscart';


import { whyUs } from '../Data/data';
import { Sectiontitle } from '../Components/Sectiontitle';

export default async function whyus() {
    const items = whyUs;
    return (
        <section className='why-us' id='why-us'>
            <div className="container">
                <Sectiontitle title='why us' subtitle='why choose our restaurant' />
                <div className="row">
                    {items &&
                        items.length > 0 &&
                        (items.map((item: any) => (
                            <Whyuscart key={item.id} item={item} />
                        )))
                    }
                </div>
            </div>

        </section>
    )
}

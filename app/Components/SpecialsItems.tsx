import React from 'react'
import './SpecialsItems.css'

export const SpecialsItems = ({ items }: {
    items: {
        id: number;
        image: string;
        title: string;
        subtitle: string;
        content: string;
        active: boolean;
    }
}) => {
    return (
        <div className={`tab-pane ${items.active ? 'active' : ''}`}
            id={`tab-${items.id.toString()}`}
        >
            <div className="row">
                <div className='col-lg-8 details order-2 order-lg-1'>
                    <h3>{items.title}</h3>
                    <p className='fst-italic'>{items.subtitle}</p>
                    <p>{items.content}</p>

                </div>
                <div className='col-lg-4 text-center order-1 order-lg-2'>
                    <img src={items.image} alt='' className='img-fluid' />
                </div>
            </div>
        </div>
    );
}

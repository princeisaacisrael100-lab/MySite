import React from 'react'
import './Breadscrumbs.css'
import Link from 'next/link'
export const Breadscrumbs = ({ pages }: { pages: string[] }) => {
    return (
        <section className="breadscrumbs">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h2>{pages}</h2>
                    <ol>
                        <li>
                            <Link href="/">
                                <i className="bi bi-house-door-fill"></i>
                            </Link>
                        </li>
                        <li>{pages}</li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

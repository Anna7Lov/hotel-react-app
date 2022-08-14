import React from "react";

import './Advantages.scss';

export default function Advantages({ advantages }) {
    return (
        <div className='advantages'>
            {advantages.map((advantage) => (
                <div key={advantage.id} className='advantage'>
                    <h5 className={`advantage__title ${advantage.additionalClass}`}>{advantage.title}</h5>
                    <p className='advantage__text'>{advantage.text}</p>
                </div>
            ))}
        </div>
    );
}
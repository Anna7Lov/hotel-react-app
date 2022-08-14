import React from "react";

import './SocialNetworks.scss';

export default function SocialNetworks({ networks }) {
    return (
        <ul className='social-networks'>
            {networks.map((network) => (
                <li key={network.id} className='social-networks__item'>
                    <a href={network.address} className='social-networks__link'>
                        <span className={`${network.name}`}></span>
                    </a>
                </li>
            ))}
        </ul>
    );
}
import React from "react";
import Logo from '../Logo/Logo';
import Text from '../../shared/Text/Text';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import VerticalMenu from '../VerticalMenu/VerticalMenu';

import './Footer.scss';

export default function Footer() {

    const verticalLinks = [

        {
            id: 27, title: 'Home', list: [{ id: 30, name: 'Accessibility', address: '/' },
            { id: 31, name: 'Lertifiotion', address: '/' },
            { id: 32, name: 'Knowledge', address: '/' }
            ]
        },

        {
            id: 28, title: 'Pages', list: [{ id: 40, name: 'Blogs', address: '/' },
            { id: 41, name: 'Careers', address: '/' },
            { id: 42, name: 'Communing', address: '/' }
            ]
        },

        {
            id: 29, title: 'Business', list: [{ id: 50, name: 'Collaboration', address: '/' },
            { id: 51, name: 'Investment', address: '/' },
            { id: 52, name: 'People', address: '/' }
            ]
        }

    ];

    const socialNetworks = [
        { id: 100, name: 'facebook', address: 'https://www.facebook.com/' },
        { id: 101, name: 'instagram', address: 'https://www.instagram.com/' },
        { id: 102, name: 'twitter', address: 'https://twitter.com/' },
        { id: 103, name: 'google', address: 'https://www.google.com/' }
    ];

    return (
        <footer className='footer'>
            <div className='footer__inner'>
                <div>
                    <Logo />
                    <Text additionalClass='footer__text' text='Travel deals on hotels, flights, vacation packages.' />
                    <SocialNetworks networks={socialNetworks} />
                </div>
                <VerticalMenu links={verticalLinks} />
            </div>
        </footer>
    )
}
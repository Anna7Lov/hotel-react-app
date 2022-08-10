import React, { useEffect, useState } from 'react';
import HorizontalMenu from '../../components/shared/HorizontalMenu/HorizontalMenu';
import Button from '../../components/shared/Button/Button';
import Logo from '../../components/shared/Logo/Logo';
import MainTitle from '../../components/shared/MainTitle/MainTitle';
import Footer from '../../components/shared/Footer/Footer';
import { horizontalLinks } from '../../components/main/Header/Header';

import './RoomsPage.scss';

export default function RoomsPage() { 

    return (
        <div className='rooms-page'>
            <div className='rooms-page__main-content'>
                <div className='room-page__top'>
                    <Logo />
                    <HorizontalMenu links={horizontalLinks} />
                    <Button title='Contact us' />
                </div>
                <div className='rooms-page__content'>
                    <MainTitle title='Rooms for you' />
                    <div> Результаты поиска </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
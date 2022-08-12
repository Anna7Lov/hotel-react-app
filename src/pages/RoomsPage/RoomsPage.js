import React, { useEffect, useState } from 'react';

import HorizontalMenu from '../../components/shared/HorizontalMenu/HorizontalMenu';
import Button from '../../components/shared/Button/Button';
import Logo from '../../components/shared/Logo/Logo';
import MainTitle from '../../components/shared/MainTitle/MainTitle';
import Footer from '../../components/shared/Footer/Footer';
import { horizontalLinks } from '../../components/main/Header/Header';
import { Services } from '../../services/services';

import './RoomsPage.scss';


export default function RoomsPage({ selected }) {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        async function getRooms() {
            const response = await Services.getRooms();
            setRooms(response.data);
        }
        getRooms();
    }, []);

    return (
        <div className='rooms-page'>
            <div className='rooms-page__main-content'>
                <div className='rooms-page__top'>
                    <Logo />
                    <HorizontalMenu links={horizontalLinks} />
                    <Button title='Contact us' />
                </div>
                <div className='rooms-page__content'>
                    <MainTitle additionalClass='rooms-page__title' title='Rooms for you' />
                    {(() => {
                        let filteredRooms;
                        let result;
                        if (selected === '1') {
                            filteredRooms = rooms.filter(item => item.capacity === 1);
                            result = filteredRooms.map((room) => (
                                <div className='rooms-page__item' key={room.id}>
                                    <img className='rooms-page__image' src={room.roomImage} alt={room.name} />
                                    <h4 className='room__name'>{room.name}</h4>
                                    <span className='room__price'>{room.price}€ Night</span>
                                </div>
                            ))
                            return result;
                        }
                        else if (selected === '2') {
                            filteredRooms = rooms.filter(item => item.capacity === 2);
                            result = filteredRooms.map((room) => (
                                <div className='rooms-page__item' key={room.id}>
                                    <img className='rooms-page__image' src={room.roomImage} alt={room.name} />
                                    <h4 className='room__name'>{room.name}</h4>
                                    <span className='room__price'>{room.price}€ Night</span>
                                </div>
                            ))
                            return result;
                        }
                        else if (selected === '3') {
                            filteredRooms = rooms.filter(item => item.capacity > 2);
                            result = filteredRooms.map((room) => (
                                <div className='rooms-page__item' key={room.id}>
                                    <img className='rooms-page__image' src={room.roomImage} alt={room.name} />
                                    <h4 className='room__name'>{room.name}</h4>
                                    <span className='room__price'>{room.price}€ Night</span>
                                </div>
                            ))
                            return result;
                        }
                        else if (selected === '4') {
                            filteredRooms = rooms.filter(item => item.capacity > 3);
                            result = filteredRooms.map((room) => (
                                <div className='rooms-page__item' key={room.id}>
                                    <img className='rooms-page__image' src={room.roomImage} alt={room.name} />
                                    <h4 className='room__name'>{room.name}</h4>
                                    <span className='room__price'>{room.price}€ Night</span>
                                </div>
                            ))
                            return result;
                        }
                        else if (selected === '5') {
                            filteredRooms = rooms.filter(item => item.capacity === 5);
                            result = filteredRooms.map((room) => (
                                <div className='rooms-page__item' key={room.id}>
                                    <img className='rooms-page__image' src={room.roomImage} alt={room.name} />
                                    <h4 className='room__name'>{room.name}</h4>
                                    <span className='room__price'>{room.price}€ Night</span>
                                </div>
                            ))
                            return result;
                        }
                    })()}
                </div>
            </div>
            <Footer />
        </div>
    )
}
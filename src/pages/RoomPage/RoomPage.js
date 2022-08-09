import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import HorizontalMenu from '../../components/shared/HorizontalMenu/HorizontalMenu';
import Button from '../../components/shared/Button/Button';
import Logo from '../../components/shared/Logo/Logo';
import MainTitle from '../../components/shared/MainTitle/MainTitle';
import Text from '../../components/shared/Text/Text';
import Title from '../../components/shared/Title/Title';
import Footer from '../../components/shared/Footer/Footer';
import { horizontalLinks } from '../../components/main/Header/Header';

import './RoomPage.scss';

export default function RoomPage() {
    let { id } = useParams();
    const [room, setRoom] = useState({});

    useEffect(() => {
        async function getRoom() {
            const response = await axios.get(`/api/rooms/${id}`);
            setRoom(response.data);
        }
        getRoom();

    }, []);

    return (
        <div className='room-page'>
            <div className='room-page__top'>
                <Logo />
                <HorizontalMenu links={horizontalLinks} />
                <Button title='Contact us' />
            </div>
            <div className='room-page__content'>
                <MainTitle title={room.name} />
                <div className='room-page__images'>
                    <img className='room-page__image' src={room.roomImage} alt={room.name} />
                    <img className='room-page__image' src={room.bathroomImage} alt={`${room.name} bathroom`} />
                </div>
                <Text text={room.description} />
                <Title title='Info' />
                <span className='room-page__info'>Price: {room.price}€ Night</span>
                <span className='room-page__info'>Capacity: {room.capacity} {room.capacity === 1 ? 'Person' : 'Persons'}</span>
                <Text text='With a privileged location in the city’s most exclusive area, Rayal Park is 5* hotel with a sophisticated interior design that breathes elegance and distinction. The use of soft tones, with some splashes of colour provided by works of art and upholsteries, natural light and fine materials such as special marble and wood, all play an important role, creating an atmosphere of timeless luxury. The project was executed in collaboration with prestigious designer Jaime Beriestain. The establishment offers large, bright rooms, the  Restaurant, the Spa, a plunge pool and the impressive Rooftop Bar, with panoramic views of the city.' />
            </div>
            <Footer />
        </div>
    )
}
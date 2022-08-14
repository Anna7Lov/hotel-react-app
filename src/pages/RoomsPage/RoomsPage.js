import React, { useEffect, useState } from 'react';
import MainTitle from '../../components/shared/MainTitle/MainTitle';
import HeaderNotMainPage from '../../components/shared/HeaderNotMainPage/HeaderNotMainPage';
import Room from '../../components/rooms/Room/Room';
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
            <HeaderNotMainPage />
            <div className='rooms-page__content'>
                <MainTitle additionalClass='rooms-page__title' title='Rooms for you' />
                {(() => {
                    let filteredRooms;
                    if (selected === '1') {
                        filteredRooms = rooms.filter(item => item.capacity === 1);
                        return <Room filteredRooms={filteredRooms} />
                    }
                    else if (selected === '2') {
                        filteredRooms = rooms.filter(item => item.capacity === 2);
                        return <Room filteredRooms={filteredRooms} />
                    }
                    else if (selected === '3') {
                        filteredRooms = rooms.filter(item => item.capacity > 2);
                        return <Room filteredRooms={filteredRooms} />
                    }
                    else if (selected === '4') {
                        filteredRooms = rooms.filter(item => item.capacity > 3);
                        return <Room filteredRooms={filteredRooms} />
                    }
                    else if (selected === '5') {
                        filteredRooms = rooms.filter(item => item.capacity === 5);
                        return <Room filteredRooms={filteredRooms} />
                    }
                })()}
            </div>
        </div>
    )
}
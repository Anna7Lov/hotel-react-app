import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

import './Rooms.scss';

export default function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
      async function getRooms() {
        const response = await axios.get('/api/rooms');
        setRooms(response.data);
      }
      getRooms();
    }, []);

    return (
        <div className='rooms'>
            {rooms.map((room) => (
                <div key={room.id} className={`room ${room.additionalClass}`}>
                    <div className='room__content'>
                        <Link to={`/rooms/${room.id}`} className="room__link">
                            <div>
                                <h4 className='room__name'>{room.name}</h4>
                                <span className='room__price'>{room.price}€ Night</span>
                            </div>
                        </Link>
                        
                    </div>
                </div>
            ))}
        </div>
    );
}
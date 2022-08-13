import './Room.scss';

export default function Room({ filteredRooms }) {
  return (
    filteredRooms.map((room) => (
        <div className='room__item' key={room.id}>
            <img className='room__image' src={room.roomImage} alt={room.name} />
            <h4 className='room__name'>{room.name}</h4>
            <span className='room__price'>{room.price}€ Night</span>
        </div>
    ))
  );
}
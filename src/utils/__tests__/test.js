import rooms from '../../mocks/rooms';

describe("Rooms length", () => {
    it("Should have length 4", () => {
        expect(rooms).toHaveLength(4);
    });
})

let filteredRooms = rooms.filter(item => item.capacity > 3);

describe("Rooms filter", () => {
    it("Should have length 2", () => {
        expect(filteredRooms).toHaveLength(2);       
    });
})

describe("Contains test", () => {
    it("Should contain object", () => {        
        expect(filteredRooms).toContainEqual({ 'id': 202, 'name': 'Family Suit', 'price': 400, 'capacity': 4, 'roomImage': 'https://cmspro.h10hotels.com/ImagenesHotel/the%20one%20the%20one%20(3).jpg', 'bathroomImage': 'https://cmspro.h10hotels.com/ImagenesHotel/the%20one%20the%20one%20(1).jpg','additionalClass': 'family', 'description': '40 m² suites located on the corner of the building, with street views.' });
    });
})
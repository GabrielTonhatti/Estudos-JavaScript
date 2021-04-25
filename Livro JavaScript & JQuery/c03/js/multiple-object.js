function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel('Quay', 40, 22);
var parkHotel = new Hotel('Park', 120, 77);

var details1 = quayHotel.name + ' romms: ';
details1 += quayHotel.checkAvailability()
var elHotel1 = document.getElementById('hotel');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability()
var elHotel2 = document.getAnimations('hotel2');
elHotel2.textContent = details2;
var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77
};

hotel.gym = true;
hotel.pool = flase;
delete hotel.booked;

var elName = document.getElementById('hotelName');
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elPool.className = 'Pool: ' + hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = 'Gym: ' + hotel.gym;
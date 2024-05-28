document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const bookingList = document.getElementById('bookingList');

    bookingForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const gasType = document.getElementById('gasType').value;
        const slot = document.getElementById('slot').value;

        const booking = {
            name,
            address,
            phone,
            gasType,
            slot
        };

        addBookingToList(booking);
        saveBooking(booking);
        bookingForm.reset();
    });

    function addBookingToList(booking) {
        const div = document.createElement('div');
        div.className = 'booking';
        div.innerHTML = `
            <p><strong>Name:</strong> ${booking.name}</p>
            <p><strong>Address:</strong> ${booking.address}</p>
            <p><strong>Phone:</strong> ${booking.phone}</p>
            <p><strong>Gas Type:</strong> ${booking.gasType}</p>
            <p><strong>Slot:</strong> ${booking.slot}</p>
        `;
        bookingList.appendChild(div);
    }

    function saveBooking(booking) {
        let bookings = [];
        if (localStorage.getItem('bookings')) {
            bookings = JSON.parse(localStorage.getItem('bookings'));
        }
        bookings.push(booking);
        localStorage.setItem('bookings', JSON.stringify(bookings));
    }

    function loadBookings() {
        if (localStorage.getItem('bookings')) {
            const bookings = JSON.parse(localStorage.getItem('bookings'));
            bookings.forEach(addBookingToList);
        }
    }

    loadBookings();
});

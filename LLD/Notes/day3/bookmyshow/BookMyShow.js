import User from './User.js';
import Movie from './Movie.js';
import ShowTime from './ShowTime.js';
import Booking from './Booking.js';

// Create instances
const user = new User(1, 'John Doe', 'john.doe@example.com', '1234567890');
const movie = new Movie(101, 'Inception', 'Sci-Fi', 148, 'English');
const showTime = new ShowTime(201, movie, 'PVR Cinemas', new Date(), 50);

// Create a booking
const booking = new Booking(301, user, showTime, 3);
booking.confirmBooking();

// Display details
console.log(booking.getBookingDetails());


// Key Concepts Covered
// Encapsulation: Each entity has its own file with properties and methods.
// Separation of Concerns: Files are separated logically into User, Movie, ShowTime, and Booking.
// Relationships:
// Booking references User and ShowTime.
// ShowTime references Movie.
// This design is modular, extensible, and adheres to SOLID principles. Let me know if you need further improvements or additional features!
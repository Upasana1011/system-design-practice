// Booking.js

class Booking {
    constructor(bookingId, user, showTime, numberOfSeats) {
      this.bookingId = bookingId;
      this.user = user; // Instance of the User class
      this.showTime = showTime; // Instance of the ShowTime class
      this.numberOfSeats = numberOfSeats;
    }
  
    confirmBooking() {
      const success = this.showTime.bookSeat(this.numberOfSeats);
      if (success) {
        console.log(`Booking confirmed for ${this.user.name}.`);
      } else {
        console.log('Booking failed. Not enough seats available.');
      }
      return success;
    }
  
    getBookingDetails() {
      return {
        bookingId: this.bookingId,
        user: this.user.getUserDetails(),
        showTime: this.showTime.getShowDetails(),
        numberOfSeats: this.numberOfSeats,
      };
    }
  }
  
  export default Booking;
  
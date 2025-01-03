// ShowTime.js

class ShowTime {
    constructor(showId, movie, theater, startTime, availableSeats) {
      this.showId = showId;
      this.movie = movie; // Instance of the Movie class
      this.theater = theater;
      this.startTime = startTime; // Date object
      this.availableSeats = availableSeats;
    }
  
    bookSeat(numberOfSeats) {
      if (this.availableSeats >= numberOfSeats) {
        this.availableSeats -= numberOfSeats;
        return true;
      }
      return false;
    }
  
    getShowDetails() {
      return {
        showId: this.showId,
        movie: this.movie.getMovieDetails(),
        theater: this.theater,
        startTime: this.startTime,
        availableSeats: this.availableSeats,
      };
    }
  }
  
  export default ShowTime;
  
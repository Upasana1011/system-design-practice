// Movie.js

class Movie {
    constructor(movieId, title, genre, duration, language) {
      this.movieId = movieId;
      this.title = title;
      this.genre = genre;
      this.duration = duration; // Duration in minutes
      this.language = language;
    }
  
    getMovieDetails() {
      return {
        movieId: this.movieId,
        title: this.title,
        genre: this.genre,
        duration: this.duration,
        language: this.language,
      };
    }
  }
  
  export default Movie;
  
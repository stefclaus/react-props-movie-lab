import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    console.log(this.props)

    return movieData.map((movie, index) => <MovieCard
      key={index}
      title = {movie.title}
      IMDBRating = {movie.IMDBRating}
      genres = {movie.genres}
      poster = {movie.poster}

    />)

  };

  render() {

    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
//If we were to place console.log(this.props) in the MovieCard component at the beginning
//of render(), we'd see that each MovieCard contains different props.

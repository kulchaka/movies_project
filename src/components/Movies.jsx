import React from 'react';
import Card from "./Card";

const Movies = (props) => {

  const {movies} = props

  return (
      <div className="container movies">
        {
          movies.map(e => <Card key={e.imdbID} {...e} />)
        }
      </div>
  );
};

export default Movies;
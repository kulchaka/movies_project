import React from 'react';
import Card from "./Card";

const Movies = (props) => {

  const {movies = []} = props

  return (
      <div className="container movies">
        {
          movies.length
              ?
              (movies.map(e => <Card key={e.imdbID} {...e} />))
              :
              (<h4>nothing found...</h4>)

        }
      </div>
  );
};

export default Movies;
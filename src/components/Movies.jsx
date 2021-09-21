import React from 'react';
import Card from "./Card";

const Movies = (props) => {

  const {movies} = props

  return (
      <div className="movies">
        {
          movies.map(e => <Card key={e.id} {...e}/>)
        }
      </div>
  );
};

export default Movies;
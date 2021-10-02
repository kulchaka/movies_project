import React, {useState} from 'react';

const Search = ({searchMovies}) => {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('')

  const handleKey = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      searchMovies(search, type)
      // this.setState({search: '', type: ''})

    }
  }

  const handlerType = (event) => {
    setType(event.target.value)
    if (search.length) {
      searchMovies(search, event.target.value)
    }

  }

  return (
      <div className="container">
        <div className="row search-container">
          <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search..."
              className="validate"
              onKeyDown={handleKey}
          />
          <button className="btn search-btn" onClick={handleKey}>Search</button>
        </div>
        <div>
          <p>
            <label>
              <input
                  name="type"
                  type="radio"
                  value=""
                  checked={type === ''}
                  onChange={handlerType}
              />
              <span>All</span>
            </label>
          </p>
          <p>
            <label>
              <input
                  name="type"
                  type="radio"
                  value="movie"
                  checked={type === 'movie'}
                  onChange={handlerType}
              />
              <span>Movies</span>
            </label>
          </p>
          <p>
            <label>
              <input
                  name="type"
                  type="radio"
                  value="series"
                  checked={type === 'series'}
                  onChange={handlerType}
              />
              <span>Serials</span>
            </label>
          </p>
        </div>
      </div>
  );
};

export default Search;

import React, {Component} from 'react';

class Search extends Component {

  state = {
    search: '',
    type: ''
  }

  handleKey = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      this.props.search(this.state.search, this.state.type)
      this.setState({search: '', type: ''})

    }
  }

  handlerType = (event) => {
    this.setState({type: event.target.value})
  }

  render() {
    return (
        <div className="row container search-container">

          <input
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}
              type="search"
              placeholder="Search..."
              className="validate"
              onKeyDown={this.handleKey}
          />
          <p>
            <label>
              <input
                  name="type"
                  type="radio"
                  value=""
                  checked={this.state.type === ''}
                  onChange={this.handlerType}
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
                  checked={this.state.type === 'movie'}
                  onChange={this.handlerType}
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
                  checked={this.state.type === 'series'}
                  onChange={this.handlerType}
              />
              <span>Serials</span>
            </label>
          </p>
          <button className="btn search-btn" onClick={this.handleKey}>Search</button>
        </div>
    );
  }
}

export default Search;
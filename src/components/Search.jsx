import React, {Component} from 'react';

class Search extends Component {

  state = {
    search: '',
    type: ''
  }

  handleKey = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      this.props.search(this.state.search, this.state.type)
      // this.setState({search: '', type: ''})

    }
  }

  handlerType = (event) => {
    this.setState(() => ({type: event.target.value}), () => {
      if (this.state.search.length) {
        this.props.search(this.state.search, this.state.type)
      }
    })
  }

  render() {
    return (
        <div className="container">
          <div className="row search-container">
            <input
                value={this.state.search}
                onChange={(e) => this.setState({search: e.target.value})}
                type="search"
                placeholder="Search..."
                className="validate"
                onKeyDown={this.handleKey}
            />
            <button className="btn search-btn" onClick={this.handleKey}>Search</button>
          </div>
          <div>
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
          </div>
        </div>
    );
  }
}

export default Search;
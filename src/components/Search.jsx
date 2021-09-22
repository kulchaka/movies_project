import React, {Component} from 'react';

class Search extends Component {

  state= {
    search: ''
  }

  render() {
    return (
        <div className="row container">
              <input
                  value={this.state.search}
                  onChange={(e) => this.setState({search: e.target.value})}
                  type="search"
                  placeholder="Search..."
                  className="validate" />
        </div>
    );
  }
}

export default Search;
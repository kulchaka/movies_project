import React, {Component} from 'react';

class Search extends Component {

  state = {
    search: ''
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.search(this.state.search)
      this.setState({search: ''})
    }
  }

  render() {
    return (
        <div className="row container">
          <input
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}
              type="search"
              placeholder="Search..."
              className="validate"
              onKeyDown={this.handleKey}
          />
        </div>
    );
  }
}

export default Search;
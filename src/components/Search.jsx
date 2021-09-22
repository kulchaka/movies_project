import React, {Component} from 'react';

class Search extends Component {

  state = {
    search: ''
  }

  handleKey = (event) => {
    console.log(event)
    if (event.key === 'Enter' || event.type === 'click') {
      this.props.search(this.state.search)
      this.setState({search: ''})
    }
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
            <button className="btn search-btn" onClick={this.handleKey}>Search</button>
        </div>
    );
  }
}

export default Search;
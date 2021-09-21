import React, {Component} from 'react';
import Movies from "../Movies";

class Main extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=47b0015f&s=matrix')
        .then(respone => respone.json())
        .then(data => this.setState({movies: data.Search}))
  }

  render() {
    return (
        <main>
         <Movies movies={this.state.movies}/>
        </main>
    );
  }
}

export default Main;
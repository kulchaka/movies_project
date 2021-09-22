import React, {Component} from 'react';
import Movies from "../Movies";
import Preloader from "../Preloader";

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
          {
            this.state.movies.length
                ?
                (<Movies movies={this.state.movies}/>)
                :
                (<Preloader/>)
          }

        </main>
    );
  }
}

export default Main;
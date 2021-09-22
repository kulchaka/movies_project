import React, {Component} from 'react';
import Movies from "../Movies";
import Preloader from "../Preloader";
import Search from "../Search";

class Main extends Component {

  state = {
    movies: [],
    errorSearch: true
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=47b0015f&s=matrix')
        .then(respone => respone.json())
        .then(data => this.setState({movies: data.Search}))
  }

  searchMovies = str => {
    fetch(`http://www.omdbapi.com/?apikey=47b0015f&s=${str}`)
        .then(respone => respone.json())
        .then(data => this.setState({movies: data.Search}))
        .catch(err => alert(err))
  }

  render() {
    return (
        <main>
          {
            this.state.movies.length
                ?
                (<>
                  <Search search={this.searchMovies}/>
                  <Movies movies={this.state.movies} />
                </>)
                :
                (<Preloader/>)
          }

        </main>
    );
  }
}

export default Main;
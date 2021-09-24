import React, {Component} from 'react';
import Movies from "../Movies";
import Preloader from "../Preloader";
import Search from "../Search";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {

  state = {
    movies: [],
    loading: true
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(respone => respone.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
  }

  searchMovies = (str, type) => {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${type}`)
        .then(respone => respone.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
  }

  render() {
    const {movies, loading} = this.state
    return (
        <main>
          <Search search={this.searchMovies}/>
          {
            loading
                ?
                (<Preloader/>)

                :
                (
                    <Movies movies={movies}/>
                )

          }

        </main>
    );
  }
}

export default Main;
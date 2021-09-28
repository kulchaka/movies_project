import React, {Component} from 'react';
import Movies from "../Movies";
import Preloader from "../Preloader";
import Search from "../Search";

const API_KEY = process.env.REACT_APP_APIKEY

class Main extends Component {

  state = {
    movies: [],
    loading: true
  }

  componentDidMount() {
    console.log(process.env)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
        .then(respone => respone.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch(err => {
          this.setState({loading: false})
          console.error(err)
        })

  }

  searchMovies = (str, type) => {
    this.setState({loading: true})
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${type}`)
        .then(respone => respone.json())
        .then(data => this.setState({movies: data.Search, loading: false}))
        .catch(err => {
          this.setState({loading: false})
          console.error(err)
        })
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
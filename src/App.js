import React from "react";
import "./App.css";
import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
import $ from "jquery";
import MovieRow from "./components/MovieRow";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  performSearch(searchTerm) {
    const urlString = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=365427c010adfc990267e381b0156758`;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        // console.log(searchResults.results);
        var movieRows = [];
        const results = searchResults.results;
        results.forEach((movie) => {
          movie.poster_src = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
        this.setState({ rows: movieRows });
      },
      error: (xhs, status, error) => {
        console.log("data not fetched");
      },
    });
  }
  componentDidMount() {
    this.performSearch("");
  }
  searchChangeHandler = (e) => {
    // console.log(e.target.value);
    var searchTerm = e.target.value;
    this.performSearch(searchTerm);
  };
  render() {
    // console.log(this.state.rows, "this.state.data");

    return (
      <div>
        <Header />
        <input
          autoFocus
          placeholder="Enter search term..."
          id="input-search"
          onChange={this.searchChangeHandler}
        />
        {this.state.rows}
      </div>
    );
  }
}

export default App;

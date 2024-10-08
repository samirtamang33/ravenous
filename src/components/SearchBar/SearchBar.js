import React from "react";
import styles from "./SearchBar.module.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      sortBy: "best_match", // default sorting option
    };

    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
  }

  handleTermChange = (event) => {
    this.setState({ term: event.target.value });
  };

  handleLocationChange = (event) => {
    this.setState({ location: event.target.value });
  };

  handleSortByChange = (event) => {
    this.setState({ sortBy: event.target.value });
  };

  handleSearch = (event) => {
    event.preventDefault();
    const { term, location, sortBy } = this.state;
    this.props.onSearch(term, location, sortBy);
  };

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortOption) => {
      const sortValue = this.sortByOptions[sortOption];
      return (
        <option key={sortValue} value={sortValue}>
          {sortOption}
        </option>
      );
    });
  }

  render() {
    return (
      <div className={styles.SearchBar}>
        <form onSubmit={this.handleSearch}>
          <input
            type="text"
            placeholder="Search Businesses"
            value={this.state.term}
            onChange={this.handleTermChange}
          />
          <input
            type="text"
            placeholder="Location"
            value={this.state.location}
            onChange={this.handleLocationChange}
          />
          <select value={this.state.sortBy} onChange={this.handleSortByChange}>
            {this.renderSortByOptions()}
          </select>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;

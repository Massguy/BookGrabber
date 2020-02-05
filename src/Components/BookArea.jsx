import React, { Component } from "react";
import SearchArea from "./SearchArea";
import BookList from "./BookList";
import axios from "axios";

class BookArea extends Component {
  state = { books: [], searchInput: "", sort: "" };

  handleSearchForBooks = e => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchInput}`
      )
      .then(res => {
        const definedData = this.handleUndefinedImages(res.data);
        this.setState({ books: definedData });
      });
  };

  handleSearchInput = e => {
    this.setState({ searchInput: e.target.value });
  };

  handleSort = e => {
    this.setState({ sort: e.target.value });
  };

  handleUndefinedImages = books => {
    const definedData = books.items.map(book => {
      if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = {
          thumbnail:
            "https://image.shutterstock.com/image-vector/no-image-available-icon-photo-260nw-1251146734.jpg"
        };
      }
      return book;
    });
    return definedData;
  };

  render() {
    const sortedBooks = this.state.books.sort((a, b) => {
      if (this.state.sort === "newest") {
        return (
          parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(a.volumeInfo.publishedDate.substring(0, 4))
        );
      } else if (this.state.sort === "oldest") {
        return (
          parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
          parseInt(b.volumeInfo.publishedDate.substring(0, 4))
        );
      }
    });
    return (
      <div>
        <SearchArea
          handleSearchForBooks={this.handleSearchForBooks}
          handleSearchInput={this.handleSearchInput}
          handleSort={this.handleSort}
        />
        <BookList books={sortedBooks} />
      </div>
    );
  }
}

export default BookArea;

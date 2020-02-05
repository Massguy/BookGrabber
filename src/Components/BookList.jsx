import React from "react";
import ArticleCard from "./ArticleCard";

const BookList = props => {
  const { books } = props;
  return (
    <div className="grid-container">
      {books.map((book, i) => {
        return (
          <ArticleCard
            key={i}
            image={
              book.volumeInfo.imageLinks === undefined
                ? ""
                : book.volumeInfo.imageLinks.thumbnail
            }
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            published={book.volumeInfo.publishedDate}
          />
        );
      })}
    </div>
  );
};

export default BookList;

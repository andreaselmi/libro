import React, { createContext, useState } from "react";
import axios from "axios";

export const BookContext = createContext();

const BooksContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("Madame Bovary");

  const fetchData = async () => {
    const result = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${search}`
    );
    console.log(result);
    const data = await result.data.items;
    setBooks(data);
  };

  const getSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        fetchData,
        getSearch,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BooksContextProvider;

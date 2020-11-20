import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BookContext = createContext();

const BooksContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("Madame Bovary");
  const [startIndex, setStartIndex] = useState(0);

  const fetchData = async () => {
    const result = await axios(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&startIndex=${startIndex}`
    );
    console.log(result);
    const data = await result.data.items;
    setBooks(data);
  };

  const getSearch = (e) => {
    setSearch(e.target.value);
  };

  const getIndex = (e) => {
    const sign = e.target.value;
    if (sign === "-") {
      if (startIndex === 0) {
        return startIndex;
      } else setStartIndex(startIndex - 10);
    } else setStartIndex(startIndex + 10);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [startIndex]);

  return (
    <BookContext.Provider
      value={{
        books,
        fetchData,
        getSearch,
        startIndex,
        getIndex,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BooksContextProvider;

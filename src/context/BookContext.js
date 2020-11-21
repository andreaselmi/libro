import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BookContext = createContext();

const BooksContextProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("Madame Bovary");
  const [startIndex, setStartIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const url = "https://www.googleapis.com/books/v1/volumes?q=";

  const fetchData = async () => {
    try {
      setError(false);
      setIsLoading(true);
      const result = await axios(`${url}${search}&startIndex=${startIndex}`);
      console.log(result);
      const data = await result.data.items;
      setIsLoading(false);
      setBooks(data);
    } catch (err) {
      setError(true);
      displayError(err);
    }
  };

  const displayError = (err) => {
    setIsLoading(false);
    if (err.response) {
      setErrorMessage("Inserisci un titolo valido");
      console.log(errorMessage);
    } else if (err.request) {
      setErrorMessage("Impossibile completare la ricerca");
      console.log(errorMessage);
    } else {
      setErrorMessage("Aggiorna la pagina o riprova più tardi");
      console.log(errorMessage);
    }
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

  const restartIndex = () => {
    setStartIndex(0);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [startIndex]);

  const value = {
    books,
    fetchData,
    getSearch,
    startIndex,
    getIndex,
    restartIndex,
    isLoading,
    error,
    errorMessage,
  };

  return (
    <BookContext.Provider value={value}>{props.children} </BookContext.Provider>
  );
};

export default BooksContextProvider;

import React, { useContext } from "react";
import Book from "./Book";
import { BookContext } from "../context/BookContext";

const Books = () => {
  const { users } = useContext(BookContext);

  return (
    <>
      {users.map((user) => (
        <Book title={user.title} body={user.body} />
      ))}
    </>
  );
};

export default Books;

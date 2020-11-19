import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import BooksContextProvider from "./context/BookContext";
import Books from "./components/Books";

function App() {
  return (
    <>
      <BooksContextProvider>
        <TopNavbar />
        <Header />
        <Books />
      </BooksContextProvider>
    </>
  );
}

export default App;

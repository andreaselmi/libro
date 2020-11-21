import TopNavbar from "./components/TopNavbar";
import Header from "./components/Header";
import BooksContextProvider from "./context/BookContext";
import Books from "./components/Books";
import Details from "./components/Details";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <BooksContextProvider>
          <TopNavbar />
          <Header />
          <Switch>
            {/* <Books /> */}
            <Route exact path="/" component={Books} />
            <Route path="/details" component={Details} />
          </Switch>
        </BooksContextProvider>
      </Router>
    </>
  );
}

export default App;

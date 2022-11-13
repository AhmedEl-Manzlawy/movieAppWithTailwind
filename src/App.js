import { BrowserRouter as Router , Route , Switch } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
function App() {
  return ( 
    <div className=" min-h-screen">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path='/movie/:id' exact component={MoviePage} />
          <Route  path='*' exact component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

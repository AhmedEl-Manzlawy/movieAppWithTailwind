import { BrowserRouter as Router , Route , Switch } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import KidsPage from './pages/KidsPage';
import TheatresPage from './pages/TheatresPage';
import DramaPage from './pages/DramaPage';
import ComedyPage from './pages/ComedyPage';
function App() {
  return ( 
    <div className=" min-h-screen">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path='/movie/:id' exact component={MoviePage} />
          <Route path='/theatres' exact component={TheatresPage} />
          <Route path='/kids' exact component={KidsPage} />
          <Route path='/drama' exact component={DramaPage} />
          <Route path='/comedy' exact component={ComedyPage} />
          <Route  path='*' exact component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

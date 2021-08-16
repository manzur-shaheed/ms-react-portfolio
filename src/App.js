// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router } from "react-router-dom";

// css
import "./App.css";

// components
import Navigation from "./components/Navigation";
// import Header from "./components/Header";
import Home from "./components/Home";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <div className="App">
          <Navigation />
          <Home />
        </div>
      </Switch>
    </Router>
  );
};

export default App;

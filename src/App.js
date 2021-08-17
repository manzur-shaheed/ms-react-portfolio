// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// react router
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
    <div>
      <Router>
        <Navigation />
        <Home />
      </Router>
    </div>
  );
};

export default App;

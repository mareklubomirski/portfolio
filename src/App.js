import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx"
import About from "./components/About/About.jsx"
import NavBar from "./components/NavBar/NavBar.jsx"
import Projects from "./components/Projects/Projects.jsx"

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

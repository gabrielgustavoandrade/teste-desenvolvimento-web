import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pokebola from "./components/pokebola"
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <Pokebola/>
        </div>
      </div>
      <div>
        <Switch>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/topics">{/* <Topics /> */}</Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

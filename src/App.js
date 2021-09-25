import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import CenteredContainer from "./components/CenteredContainer";
import Hypotenuse from "./components/Hypotenuse/Hypotenuse";
import AreaOfTriangle from "./components/AreaOfTriangle/AreaOfTriangle";
import IsTriangle from "./components/IsTriangle/IsTriangle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <CenteredContainer>
          <Switch>
            <Route path="/calculate-hypotenuse">
              <Hypotenuse />
            </Route>
            <Route path="/calculate-area">
              <AreaOfTriangle />
            </Route>
            <Route path="/isTriangle">
              <IsTriangle />
            </Route>
          </Switch>
        </CenteredContainer>
      </Router>
    </div>
  );
}

export default App;

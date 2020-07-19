import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedRoute from './components/PrivateRoute';
import BubblePage from "./components/BubblePage";
import Login from "./components/Login";
import Logoff from './components/Logoff';
import ContactPage from './components/ContactPage';
import "./styles.scss";



function App() {
  return (
    <Router>
      <nav className="nav">
        <Link to="/logoff"><button className="logoff">Logoff</button></Link>
        <Link to="/contactpage"><button>Click Here to enter your details</button></Link>
      </nav>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/protected" component={BubblePage} />
        <PrivateRoute path="/contactpage" component={ContactPage} />
        <ProtectedRoute path="/logoff" component={Logoff} />
      </div>
    </Router>
  );
}

export default App;

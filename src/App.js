import React from "react";
import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import FormComponent from "./components/FormComponent/FormComponent";
import TableComponent from "./components/TableComponent/TableComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <div className="header">
            <span className="logo">React Exercise</span>
            <div className="links">
              <Link className="link" to="/">From</Link> 
              <Link  className="link" to="/table">Table</Link> 
            </div>
          </div>
          <Route path="/" component={FormComponent} exact />
          <Route path="/table" component={TableComponent} />
        </div>
      </Router>
    </div>
  );
}

export default App;

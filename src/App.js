import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import FormComponent from "./components/FormComponent/FormComponent";
import TableComponent from "./components/TableComponent/TableComponent";



function App() {
  return (
    <div className="App">
     <Router>
    <div>
      <Route path="/" component={FormComponent} exact/>
      <Route path="/users" component={TableComponent} />
    </div>
  </Router>
    </div>
  );
}

export default App;

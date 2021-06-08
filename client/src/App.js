import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";
import Login from './Login/Login';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const [token, setToken] = React.useState();

  if (!token) {
    return <Login setToken={setToken}/>
  }

  return (
    <div className="App">
      <h2>Application</h2>
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
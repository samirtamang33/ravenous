import React from "react";
import "./App.css";

import BusinessList from "../src/components/BusinessList/BusinessList";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <BusinessList />
      </div>
    );
  }
}

export default App;

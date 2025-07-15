import React, { Component } from "react";
import "./App.css";
import VacationCalculator from "./components/VacationCalculator";


class App extends Component {
  

  render() {
    return (
      <div className="App">
        <VacationCalculator />
      </div>
    );
  }
}

export default App;

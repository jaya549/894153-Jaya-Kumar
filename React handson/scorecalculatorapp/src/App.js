import React, { Component } from 'react';
import Calc from "./Components/CalculateScore";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Calc name={"Steeve"} school={"DNV public school"} total={283} goal={4} />
      </div>
    )
  }
}
export default App;
import React from "react";

function App() {

  fetch("http://localhost:3000/dogs")
  .then (res => res.json())
  .then (dogs => console.log(dogs))



  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar">


      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info"></div>
      </div>
    </div>
  );
}

export default App;

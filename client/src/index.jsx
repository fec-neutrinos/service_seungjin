import React from 'react';
import ReactDOM from 'react-dom';
// import $ from 'jquery';

const App = () => {
  return (
    <form action="" method="post">
      <input type="text" name="search" id="search" placeholder="Search..."></input>
    </form>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
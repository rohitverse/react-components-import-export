import React from "react";
import Para from "./components/Para";
import List from "./components/List";
import Heading from "./components/Heading";
import "./App.css";
import Import from "./components/Import";

const App = () => {
  return (
    <>
      <Heading />
      <Para />
      <Import />

      <List />
    </>
  );
};

export default App;

import React from "react";
import BubbleSort from "./Components/Sorting/BubbleSort";
import { Route, Router, Routes } from "react-router-dom";
import NavbarPages from "./Components/Templates/NavbarPages";

const App = () => {
  return (
    <main>
      <BubbleSort />
    </main>
  );
};

export default App;

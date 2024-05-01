import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <h1>Counter Component</h1>
      <Counter />
    </div>
  );
}

export default App;

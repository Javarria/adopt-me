import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet.jsx";


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "luna", age: 100, weight: 12 }),
    React.createElement(Pet, { name: "peewee", age: 100, weight: 12 }),
    React.createElement(Pet, { name: "coco", age: 100, weight: 12 }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));

export default App;

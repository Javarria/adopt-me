import React from "react";


const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.weight}</h2>
    </div>
  );
};

//CODE BELOW DOES THE SAME EXACT THING AS CODE ABOVE HOWEVER IT IS ALOT MORE LEGIBLE

// const Pet = (props) => {
//     return React.createElement("div", {}, [
//       React.createElement("h1", {}, props.name),
//       React.createElement("h2", {}, props.age),
//       React.createElement("h2", {}, props.weight),
//     ]);
//   };


export default Pet;

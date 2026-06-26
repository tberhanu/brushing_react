// import animals, {useAnimals} from "./data";

// const [cat, dog] = animals;

// console.log(useAnimals(cat));


// const [catName, catSound] = useAnimals(cat);

// console.log(catName);
// catSound();

import React from "react";
import ReactDOM from "react-dom/client";
import cars from "./practice";

// CHALLENGE: uncomment the code below and see the car stats rendered
console.log(cars);
const [honda, tesla] = cars;
const { speedStats: {topSpeed: hondaTopSpeed }}  = honda;
const { coloursByPopularity: [hondaTopColour] } = honda;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <table>
    <tbody>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{tesla.speedStats.topSpeed}</td>
      <td>{tesla.coloursByPopularity[0]}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
    </tbody>
  </table>
);

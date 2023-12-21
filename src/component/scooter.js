import { useState } from "react";
function Scooter() {
  //State in Object
  //   let [color, setColor] = useState("Red");
  //   let [brand, setBrand] = useState("Honda");
  //   let [model, setModel] = useState("Activa 6G");
  //   let [year, setYear] = useState("2020");

  const [scooter, setScooter] = useState({
    color: "red,",
    brand: "Honda",
    model: "Activa 6G",
    year: "2020",
  });

  function updateColor() {
    setScooter((previousState) => {
      return {
        ...previousState,
        color: "Blue",
      };
    });
  }

  // console.log(scooter);
  return (
    <>
      <h1>My Scooter</h1>
      <p>Color:{scooter.color}</p>
      <p>Brand:{scooter.brand}</p>
      <p>Model:{scooter.model}</p>
      <p>Year:{scooter.year}</p>
      <button onClick={updateColor}>Change color</button>


      {/* State in Object */}
      {/* <h1>My Scooter</h1>
      <p>Color:{color}</p>
      <p>Brand:{brand}</p>
      <p>Model:{model}</p>
      <p>Year:{year}</p> */}
    </>
  );
}

export default Scooter;

import { useState } from "react";

function FavoriteColor() {
  const [Color, setColor] = useState("black");
  return (
    <>
      <h2>My Favorite Color is {Color}</h2>
      <button
        onClick={() => {
          setColor("red");
        }}
      >
        Change color
      </button>
    </>
  );
}

export default FavoriteColor;

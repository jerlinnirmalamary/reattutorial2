import React from "react";
class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "yellow",model:"Ford" };
  }

  render() {
    return (
      <>
        <h2>My car color is {this.state.color} and model {this.state.model}</h2>
        <button
          onClick={() => {
            this.setState((previousState)=>{
              return{...previousState,color:"blue"}
            });
          }}
        >
          Change Color
        </button>
      </>
    );
  }
}

export default Car;

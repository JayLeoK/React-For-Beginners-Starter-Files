import React from "react";
import Header from "./Header.js";
import Inventory from "./Inventory.js";
import Order from "./Order.js";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = (fish) => {
    console.log("Adding a fish!");
    //to update state:
    //1. take copy of existing state (don't modify directly = mutation)
    const fishes = { ...this.state.fishes }; //spreading!
    //2. add new fish to the copy
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood is cool!" cool={true} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish key={key} details={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;

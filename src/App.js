import React, { Component } from "react";
import Selector from "./components/Selector";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      val0: false,
      val1: false,
      val2: false,
      val3: false,
      val4: false,
      val5: false,
      val6: false,
      val7: false,
      val8: false,
      val9: false
    };
  }

  toggle = (field) => {
    this.setState({ [field]: !this.state[field] });
  };

  render() {
    const val0 = ["0", "1"];
    const val1 = ["000", "111"];
    const val2 = ["00000", "11111"];
    const val3 = ["0000000", "1111111"];
    const val4 = ["000000000", "111111111"];
    const val5 = ["00000000000", "11111111111"];
    const val6 = ["0000000000000", "11111111111"];
    const val7 = ["000000000000000", "1111111111111"];
    const val8 = ["00000000000000000", "111111111111111"];
    const val9 = ["0000000000000000000", "11111111111111111"];

    return (
      <div className="App">
        <Selector
          id="val0"
          selection={this.state.val0}
          items={val0}
          toggle={() => this.toggle("val0")}
        />
        <Selector
          id="val1"
          selection={this.state.val1}
          items={val1}
          toggle={() => this.toggle("val1")}
        />
        <Selector
          id="val2"
          selection={this.state.val2}
          items={val2}
          toggle={() => this.toggle("val2")}
        />
        <Selector
          id="val3"
          selection={this.state.val3}
          items={val3}
          toggle={() => this.toggle("val3")}
        />
        <Selector
          id="val4"
          selection={this.state.val4}
          items={val4}
          toggle={() => this.toggle("val4")}
        />
        <Selector
          id="val5"
          selection={this.state.val5}
          items={val5}
          toggle={() => this.toggle("val5")}
        />
        <Selector
          id="val6"
          selection={this.state.val6}
          items={val6}
          toggle={() => this.toggle("val6")}
        />
        <Selector
          id="val7"
          selection={this.state.val7}
          items={val7}
          toggle={() => this.toggle("val7")}
        />
        <Selector
          id="val8"
          selection={this.state.val8}
          items={val8}
          toggle={() => this.toggle("val8")}
        />
        <Selector
          id="val9"
          selection={this.state.val9}
          items={val9}
          toggle={() => this.toggle("val9")}
        />
      </div>
    );
  }
}

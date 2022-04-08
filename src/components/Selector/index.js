import React, { Component } from "react";
import "./style.css";

export default class Selector extends Component {
  componentDidMount = () => {
    let length = Math.max(...this.props.items.map((el) => el.length));

    let r = document.querySelector("#" + this.props.id);
    r.style.setProperty("--width", length + 5 + "em");

    let rs = getComputedStyle(r);

    console.log(rs.getPropertyValue("--width"));
  };

  render() {
    return (
      <table
        id={this.props.id}
        className="selector-container"
        onClick={this.props.toggle}
      >
        <thead>
          <tr>
            <th
              className={`${
                !this.props.selection
                  ? "selector-position-off"
                  : "selector-position-on"
              }`}
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>{this.props.items[0]}</span>
            </td>
            <td>{this.props.items[1]}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  /*render() {
    return (
      <div className="selector" onClick={this.props.toggle}>
        <div
          className={`${
            this.props.selection === false
              ? "selector-position-off"
              : "selector-position-on"
          }`}
        />
        <div className="selector-item selector-item-0">
          {this.props.items[0]}
        </div>
        <div className="selector-item selector-item-1">
          {this.props.items[1]}
        </div>
      </div>
    );
  }*/
}

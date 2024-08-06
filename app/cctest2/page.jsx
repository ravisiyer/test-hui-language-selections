// Adapted from: How to set state with a dynamic key name in ReactJS ?,
// https://www.geeksforgeeks.org/how-to-set-state-with-a-dynamic-key-name-in-reactjs/
"use client";
import React from "react";

export default class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      value: " ",
    };
  }
  render() {
    return (
      <div>
        <p className="my-4 ml-4">Enter State Name:</p>
        <input
          onChange={(e) => {
            this.setState({
              name: e.target.value,
            });
          }}
          type="text"
          className="my-2 ml-4 border border-black rounded-md px-2"
        ></input>
        <p className="my-2 ml-4">Enter State Value:</p>
        <input
          onChange={(e) => {
            this.setState({
              value: e.target.value,
            });
          }}
          type="text"
          className="my-2 ml-4 border border-black rounded-md px-2"
        ></input>
        <br />
        <br />
        <button
          onClick={() => {
            this.setState({
              [this.state.name]: this.state.value,
            });
          }}
          className="my-2 ml-4 border border-black rounded-md px-2"
        >
          Create a dynamic state
        </button>
        <p className="my-2 ml-4">
          To see value of previously created state (variable), key in its name
          in 'Enter State Name' field
        </p>
        {this.state[this.state.name] ? (
          <p className="my-2 ml-4">
            {this.state.name}:{this.state[this.state.name]}
          </p>
        ) : null}
      </div>
    );
  }
}

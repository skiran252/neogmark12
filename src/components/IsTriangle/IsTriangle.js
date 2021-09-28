import React, { useState } from "react";
import "./IsTriangle.css";
export default function AreaOfTriangle() {
  let [a, setA] = useState();
  let [b, setB] = useState();
  let [c, setC] = useState();
  const [message, setMessage] = useState("");

  const checkIfTriangle = () => {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    if (a + b + c === 180) {
      setMessage("Area of Triangle is " + AreaOfTriangle);
    } else {
      setMessage("Oh no ! Cannot form Triangle with given angles");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="row">
        <h1>Check if is a triangle</h1>
        <div className="mx-auto col-md-3 col-xs-6">
          <div className="form-group">
            <label>Enter value of Angle A = </label>
            <input
              type="number"
              className="form-control"
              id="a"
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="A"
            />
          </div>

          <div className="form-group">
            <label>Enter value of Angle B = </label>
            <input
              type="number"
              className="form-control"
              id="b"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="B"
            />
          </div>
          <div className="form-group">
            <label>Enter value of (c) = </label>
            <input
              type="number"
              className="form-control"
              id="c"
              value={c}
              onChange={(e) => setC(e.target.value)}
              placeholder="C"
            />
          </div>
          <button
            className="btn btn-primary form-group"
            onClick={() => checkIfTriangle()}
          >
            Check if Triangle is Possible
          </button>
        </div>
        <div className="mt-5 fw-bolder fs-6">
          * A Triangle is possible if sum of all angles is 180
        </div>
        <h3 className="mt-5">{message}</h3>
      </div>
    </div>
  );
}
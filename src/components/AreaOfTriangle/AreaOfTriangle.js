import React, { useState } from "react";
import "./AreaOfTriangle.css";
export default function AreaOfTriangle() {
  let [a, setA] = useState();
  let [b, setB] = useState();
  let [c, setC] = useState();
  const [message, setMessage] = useState("");

  const calculateArea = () => {
    a = parseInt(a);
    b = parseInt(b);
    c = parseInt(c);
    const s = (a + b + c) / 2;
    let AreaOfTriangle = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    if (!isNaN(AreaOfTriangle)) {
      setMessage("Area of Triangle is " + AreaOfTriangle);
    } else {
      setMessage("Cannot Form a triangle with given sides");
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="row">
        <h1>Calculate Area of a Triangle</h1>
        <div className="mx-auto col-md-3 col-xs-6">
          <div className="form-group">
            <label>Enter value of (a) = </label>
            <input
              type="number"
              className="form-control"
              id="a"
              value={a}
              onChange={(e) => setA(e.target.value)}
              placeholder="a"
            />
          </div>

          <div className="form-group">
            <label>Enter value of (b) = </label>
            <input
              type="number"
              className="form-control"
              id="a"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="b"
            />
          </div>
          <div className="form-group">
            <label>Enter value of (c) = </label>
            <input
              type="number"
              className="form-control"
              id="a"
              value={c}
              onChange={(e) => setC(e.target.value)}
              placeholder="b"
            />
          </div>
          <button
            className="btn btn-primary form-group"
            onClick={() => calculateArea()}
          >
            Calculate Area
          </button>
        </div>
        <div className="mt-5 fw-bolder fs-3">
          Area of triangle formula √(s(s-a)(s-b)(s-c))
        </div>
        <div className="mt-5 fw-bolder fs-2">Where s = (a+b+c)/2</div>
        <h3 className="mt-5">{message}</h3>
      </div>
    </div>
  );
}

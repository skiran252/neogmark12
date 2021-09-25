import React, { useState } from "react";
import "./Hypotenuse.css";
export default function Hypotenuse() {
  const [a, setA] = useState();
  const [b, setB] = useState();
  const [hypotenuse, setHypotenuse] = useState(0);

  const calculateHypotenuse = () => {
    setHypotenuse(Math.sqrt(a * a + b * b));
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="row">
        <h1>Calculate Hypotenuse of a Triangle</h1>
        <div className="mx-auto col-md-3 col-xs-6">
          <div className="form-group">
            <label>Enter base value (a) = </label>
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
            <label>Enter height value (b) = </label>
            <input
              type="number"
              className="form-control"
              id="a"
              value={b}
              onChange={(e) => setB(e.target.value)}
              placeholder="b"
            />
          </div>
          <button
            className="btn btn-primary form-group"
            onClick={() => calculateHypotenuse()}
          >
            Calculate Hypotenuse
          </button>
        </div>
        <p className="mt-5 fw-bolder fs-3">Hypotenuse formula √(base² + height²)</p>
        <h3 className="mt-5">
          {" "}
          The Hypotenuse of triangle is {hypotenuse.toFixed(2)}
        </h3>
      </div>
    </div>
  );
}

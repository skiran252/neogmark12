import React from "react";

export default function CenteredContainer(props) {
  return (
    <div className="pt-5 text-center">
      {props.children}
    </div>
  );
}

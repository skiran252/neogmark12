import React from "react";

export default function CenteredContainer(props) {
  return (
    <div className="text-center pt-5">
      {props.children}
    </div>
  );
}

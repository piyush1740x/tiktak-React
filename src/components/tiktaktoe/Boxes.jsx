import React from "react";

const Boxes = (props) => {
  return (
    <div>
      <div
        onClick={props.onClick}
        className="box cursor-pointer font-bold text-3xl text-red-400 bg-white border border-gray-400 w-20 h-20 flex items-center justify-center"
      >
        {props.value}
      </div>
    </div>
  );
};

export default Boxes;

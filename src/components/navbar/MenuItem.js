import React from "react";

const MenuItem = (props) => {
  const opts = {};
  if (props.newTab) {
    opts["target"] = "_blank";
  }
  const icon = props.icon;

  return (
    <div>
      <a
        className={
          (props.transparent
            ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
            : "text-green-50 hover:text-green-200") +
          " px-3 py-4 lg:py-2 flex items-center text-xs font-bold"
        }
        href={props.link}
        {...opts}
      >
        <i
          className={
            (props.transparent
              ? "lg:text-gray-300 text-gray-500"
              : "text-gren-100") +
            " text-lg leading-lg mr-2 " +
            icon
          }
        />{" "}
        {props.title}
      </a>
    </div>
  );
};

export default MenuItem;

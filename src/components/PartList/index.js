import React from "react";
import "./styles.css";

function PartList({
  title,
  numberOfItems,
  height,
  path,
  onClick,
  selectedPath,
}) {
  let items = Array(numberOfItems).fill(null);
  let array = selectedPath?.split(`/`);
  let finalArray = array?.pop().split(`.`);
  let selectedIndex = finalArray?.[0] - 1;
  return (
    <div>
      <h1 className="header">{title}</h1>
      <div className="list">
        {items.map((item, index) => {
          const imagePath = `${path}/${index + 1}.png`;
          return (
            <img
              className={`clickable-square ${
                index === selectedIndex && "selected"
              }`}
              src={imagePath}
              height={height}
              alt=""
              onClick={() => {
                onClick(imagePath);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
export default PartList;

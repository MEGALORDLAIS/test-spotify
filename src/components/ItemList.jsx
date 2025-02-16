import React from "react";
import SingleItem from "./SingleItem";
import { artistArray } from "../../Pasta Assets com Database e Logo/assets/database/artists";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  //console.log(title);
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a href={path} className="item-list__link">
          Mostrar Tudo
        </a>
      </div>
      ;
      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem
              idePath={idPath}
              {...currObj}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
  S;
};

export default ItemList;

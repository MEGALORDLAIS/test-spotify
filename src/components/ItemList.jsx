import React from "react";
import SingleItem from "./SingleItem";

const ItemList = ({ title }) => {
  console.log(title);
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>
        <a className="item-list__link" href="/">
          Mostrar Tudo
        </a>
      </div>
      ;
      <div className="item-list__container">
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </div>
    </div>
  );
};

export default ItemList;

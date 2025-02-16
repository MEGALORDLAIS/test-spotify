import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ id, name, image, banner, artist, idPath }) => {
  return (
    <Link
      to={idPath && id ? `${idPath}/${id}` : "/default-path"}
      className="single-item"
    >
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-tem__image"
            src={image}
            alt={`imagme do artista ${name}`}
          />
        </div>
        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>
      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
          <p className="single-item__type">{artist ?? "Artista"}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleItem;

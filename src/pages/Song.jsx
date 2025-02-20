import React from "react";
import { Link, useParams } from "react-router-dom";
import Player from "../components/Player";
import { artistArray } from "../../Pasta Assets com Database e Logo/assets/database/artists";
import { songsArray } from "../../Pasta Assets com Database e Logo/assets/database/songs";

const Song = () => {
  const { id } = useParams();

  // Encontrando a música correspondente
  const songObj = songsArray.find(
    (currentSongObj) => currentSongObj.id === Number(id)
  );

  // Se não encontrar a música, evita erro
  if (!songObj) {
    return <p>Música não encontrada</p>;
  }

  // Encontrando o artista correspondente
  const artistObj = artistArray.find(
    (currentArtistObj) => currentArtistObj.name === songObj.artist
  );

  //const { image, name, duration, artist, audio, index } = songsArray.filter(
  //  (currentSongObj) => currentSongObj.id === Number(id)
  //)[0];

  //const artistObj = artistArray.filter(
  //  (currentArtistObj) => currentArtistObj.name === artist
  //)[0];

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container"></div>
        <img src={songObj.image} alt={`imagem da musica ${songObj.name}}`} />
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`imagem do artista ${artistObj.name}`}
          />
        </Link>
        <Player duration={songObj.duration} />

        <div>
          <p className="song__name">{name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;

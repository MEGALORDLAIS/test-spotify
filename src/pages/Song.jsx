import React from "react";
import { Link, useParams } from "react-router-dom";
import Player from "../components/Player";

const Song = () => {
  const { id } = useParams(); // Obtém o ID da URL

  if (!id) {
    return <p>Erro: ID não encontrado</p>; // Garante que o ID é válido
  }

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container"></div>
        <img
          src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
          alt="imagem do texto x"
        />
      </div>
      <div className="song__bar">
        <Link to="/artist/1" className="song__artist-image">
          <img
            width={75}
            height={75}
            src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
            alt="imagem do artista y"
          />
        </Link>
        <Player />

        <div>
          <p className="song__name">Ultima saudade - Ao vivo</p>
          <p>Henrique & Juliano</p>
        </div>
      </div>
    </div>
  );
};

export default Song;

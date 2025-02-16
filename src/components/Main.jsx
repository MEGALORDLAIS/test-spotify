import React from "react";
import ItemList from "./ItemList";
import { artistArray } from "../../Pasta Assets com Database e Logo/assets/database/artists";
import { songsArray } from "../../Pasta Assets com Database e Logo/assets/database/songs";
const Main = () => {
  return (
    <div className="main">
      {/*artista*/}

      <ItemList
        title="Artistas"
        items={5}
        itemsArray={artistArray}
        path="/artists"
        idPath="/artist"
      />

      {/*musicas*/}

      <ItemList
        title="Musicas"
        items={10}
        itemsArray={songsArray}
        path="/songs"
        idPath="/song"
      />
    </div>
  );
};

export default Main;

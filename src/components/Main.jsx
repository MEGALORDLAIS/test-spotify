import React from "react";
import ItemList from "./ItemList";

const Main = () => {
  return (
    <div className="main">
      {/*artista*/}

      <ItemList title="Artistas" />

      {/*musicas*/}

      <ItemList title="Musicas" />
    </div>
  );
};

export default Main;

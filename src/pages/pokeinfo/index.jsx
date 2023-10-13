import React, { useState, useEffect } from "react";
import InfoCard from "../../components/InfoCard";
import { useLocation } from "react-router";

const Pokeinfo = () => {
  const [poke, setPoke] = useState([]);
  const location = useLocation();
  const pokeId = location.pathname.split("/")[2].split(":")[1];

  useEffect(() => {
    const getPokemon = async (id) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokeId}`
      );
      const data = await response.json();
      console.log(data);
      return setPoke(data);
    };
    getPokemon();
    console.log(poke);
  }, []);
  return (
    <>
      {poke.length !== 0 ? <InfoCard poke={poke} /> : <div>carregando...</div>}
    </>
  );
};

export default Pokeinfo;

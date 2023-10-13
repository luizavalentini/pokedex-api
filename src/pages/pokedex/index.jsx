import { useEffect, useState } from "react";
import React from "react";
import CardPokedex from "../../components/cardPokedex";
import styles from "./pokedex.module.css";
import { useForm } from "react-hook-form";

const Pokedex = () => {
  const { register, handleSubmit } = useForm();
  const [poke, setPoke] = useState([]);
  const [pokeSearch, setPokeSearch] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=151`
      );
      const data = await response.json();
      return setPoke(data.results);
    };
    fetchApi();
  }, []);

  const onSearch = (e) => {
    const name = e.name;
    const search = poke.filter((item) =>
      item.name.includes(name.toLowerCase())
    );
    setPokeSearch(search);
  };

  return (
    <div className="container">
      <div className={styles.texto}>
        <p>
          151 <span>Pokemons</span> for you choose you favorite
        </p>
      </div>

      <form onChange={handleSubmit(onSearch)}>
        <input
          className={styles.input}
          type="search"
          placeholder="Encontre seu Pokémon"
          {...register("name")}
        />
      </form>

      <div className={styles.pokedex}>
        {pokeSearch.length > 0
          ? pokeSearch.map((pokemon, index) => {
              return <CardPokedex poke={pokemon} key={index} />;
            })
          : poke.map((pokemon, index) => {
              return <CardPokedex poke={pokemon} key={index} />;
            })}
      </div>
    </div>
  );
};

export default Pokedex;

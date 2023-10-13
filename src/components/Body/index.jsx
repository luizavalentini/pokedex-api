import React from "react";
import { Link, NavLink } from "react-router-dom";
import banner from "../../assets/banner.png";
import style from "./Body.module.css";

const Body = () => {
  return (
    <>
      <div className={style.corpo}>
        <div className={`container ${style.corpo}`}>
          <div className={style.sec}>
            <p className={style.find}>
              <strong>Find</strong> all your favorite <strong>Pokémon</strong>
            </p>
            <p className={style.type}>
              You can know the type of Pokemon, its strengths, disadvantages and
              abilities
            </p>
            <Link to={"/PokeDex"} className={style.botao}>See pokemons</Link>
          </div>
          <div className={style.secti}>
            <img className={style.banner} src={banner} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

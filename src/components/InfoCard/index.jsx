import React, { useState } from "react";
import style from "./InfoCard.module.css";

const InfoCard = ({ poke }) => {
  return (
    <>
      <div className={style.co}>
        <div className={style.card}>
          <div className={style.teste1}>
            <img
              className={style.pokemon}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`}
              alt="Mew foto"
            />
            <div></div>
          </div>
          <div className={style.teste2}>
            <div className={style.nomegeracao}>
              <h1 className={style.nome}>
                <strong>{poke?.name}</strong>
              </h1>
            </div>
            <div className={style.habilidades}>
              <p className={style.abilidades}>
                <strong>ABILITES:</strong>
              </p>
              {poke?.abilities?.map((ability, index) => {
                return (
                  <span key={index} className={style.block}>
                    {ability.ability.name}
                  </span>
                );
              })}
            </div>
            <div className={style.points}>
              <div>
                <p className={style.abilidades}>
                  <strong>HEALTHY POINTS</strong>
                </p>
                <p className={style.city}>{poke?.stats[0].base_stat}</p>
              </div>
              <div className={style.abilidades}>
                <strong>SPEED</strong>
                <p className={style.city}>{poke?.stats[5].base_stat}</p>
              </div>
            </div>
            <div className={style.poderes}>
              <div>
                <p className={style.abilidades}>
                  <strong>DEFENSE</strong>
                </p>
                <p className={style.city}>{poke?.stats[2].base_stat} </p>
              </div>
              <div className={style.abilidades}>
                <strong>ATTACK</strong>
                <p className={style.city}>{poke?.stats[1].base_stat}</p>
              </div>
              <div className={style.abilidades}>
                <strong> SP ATTACK</strong>
                <p className={style.city}>{poke?.stats[3].base_stat}</p>
              </div>
              <div className={style.abilidades}>
                <strong> SP DEFENSE</strong>
                <p className={style.city}>{poke?.stats[4].base_stat}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoCard;

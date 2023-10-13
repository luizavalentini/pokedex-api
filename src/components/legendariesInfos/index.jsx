import React from "react";
import styles from "./LegendariesInfos.module.css";

const LegendariesInfos = ({ poke }) => {
  return (
    <div className={styles.pokeinfo}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${poke.id}.png`}
        alt="Mew foto"
      />
      <div className={styles.pokeContainer}>
        <h1 className={styles.pokeName}>{poke.name}</h1>

        <div className={styles.pokeBox}>
          <span className={styles.pokeLine}>
            <span>
              <strong>Abilities:</strong>
            </span>
            {poke.abilities.map((ability) => (
              <div key={ability.ability.name}>
                <span>{ability.ability.name}</span>
              </div>
            ))}
          </span>
          <span className={styles.pokeLine}>
            <span>
              <strong>Types:</strong>
            {poke.types.map((type) => (
              <div key={type.type.name}>
                <span>{type.type.name}</span>
              </div>
            ))}
            </span>
          </span>
        </div>

        <div className={styles.pokeStates}>
          <div className={styles.pokeStatus}>
            <span>
              <strong>HP:</strong> {poke.stats[0].base_stat}
            </span>
            <span>
              <strong>Attack:</strong> {poke.stats[1].base_stat}
            </span>
            <span>
              <strong>Defense:</strong> {poke.stats[2].base_stat}
            </span>
            <span>
              <strong>Speed:</strong> {poke.stats[5].base_stat}
            </span>
            <span>
              <strong>Special Attack:</strong> {poke.stats[3].base_stat}
            </span>
            <span>
              <strong>Special Defense:</strong> {poke.stats[4].base_stat}
            </span>
          </div>
        </div>
      </div>
      {/* <div>
        <h2>{poke.name}</h2>
        <div>
          <span>
            <p className={styles.subtype}>Types</p>
            {poke.types.map((type, i) => {
              return (
                <span key={i} className={styles.block}>
                  {type.type.name}
                </span>
              );
            })}
          </span>
          <div>
            <p className={styles.subtype}>Abilities</p>
            {poke.abilities.map((ability, i) => {
              return (
                <span key={i} className={styles.block}>
                  {ability.ability.name}
                </span>
              );
            })}
          </div>
        </div>
        <div>
          {poke.stats.map((stat, i) => {
            return (
              <span key={i}>
                <small className={styles.subtype}>{stat.stat.name}</small>
                <p>{stat.base_stat}</p>
              </span>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

export default LegendariesInfos;

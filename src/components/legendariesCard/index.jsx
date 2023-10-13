import React from "react";
import styles from "./LegendariesCard.module.css";

const LegendariesCard = ({pokemon}) => {
  return (
    <div className={styles.card}>
      <span>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
          alt={`${pokemon.name} foto`}
        />
      </span>
      <div>
        <h3>{pokemon.name}</h3>
      </div>
    </div>
  );
};

export default LegendariesCard;

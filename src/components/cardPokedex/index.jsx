import { Link } from "react-router-dom";
import styles from "./cardPokedex.module.css";

const CardPokedex = ({ poke }) => {
  const pokeImage = poke.url.split("/");
  const pokeId = pokeImage[pokeImage.length - 2];
  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`;
  return (
    <Link to={`/pokeinfo/id:${pokeId}`} className={styles.card}>
      <div className={styles.item}>
        <h4>{poke.name}</h4>
      </div>
      <img src={`${pokeImg}`} alt="" />
    </Link>
  );
};

export default CardPokedex;

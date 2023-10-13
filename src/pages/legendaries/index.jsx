import React, { useState } from "react";
import styles from "./Legendaries.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper";
import legendariesPokemons from "../../json/legendaries.json";
import LegendariesCard from "../../components/legendariesCard";
import LegendariesInfos from "../../components/legendariesInfos";
import legendariesImage from "../../assets/legendariesPokemons.png";

const Legendaries = () => {
  const [poke, setPoke] = useState([]);
  const getPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    console.log(data);
    return setPoke(data);
  };

  return (
    <section className={styles.container}>
      <div className="container">
        <div className={`${styles.box} ${styles.fadeIn}`}>
          {poke.length !== 0 ? (
            <LegendariesInfos poke={poke} />
          ) : (
            <div className={styles.loadContainer}>
              <img
                className={styles.loadImage}
                src={legendariesImage}
                alt="legendaries"
              />
              <h1>Selecione um Pokémon abaixo!</h1>
            </div>
          )}
          <div className={styles.fadeIn}>
            <Swiper
              slidesPerView={3}
              grid={{
                rows: 2,
              }}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 5,
                },
                768: {
                  slidesPerView: 6,
                },
                1024: {
                  slidesPerView: 7,
                },
              }}
              modules={[Grid, Pagination]}
              className="mySwiper"
            >
              {legendariesPokemons.map((pokemon) => {
                return (
                  <SwiperSlide
                    key={pokemon.id}
                    onClick={() => getPokemon(pokemon.id)}
                  >
                    <LegendariesCard pokemon={pokemon} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legendaries;

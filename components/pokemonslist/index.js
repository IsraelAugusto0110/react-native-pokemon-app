import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./style";
import ApiPokemon from "../../api/api-pokemons";

function PokemonsList() {
  const [pokemonsList, setPokemonsList] = useState();

  useEffect(() => {
    ApiPokemon.getAllPokemons()
      .then((res) => {
        setPokemonsList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(pokemonsList);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pokemons list</Text>
      <View style={styles.container}>
        {pokemonsList ? (
          pokemonsList.map((value) => {
            <Text style={styles.text}>{value.name}</Text>;
          })
        ) : (
          <Text style={styles.text}>Pokemons list</Text>
        )}
      </View>
    </View>
  );
}

export default PokemonsList;

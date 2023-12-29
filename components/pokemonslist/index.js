import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
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
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pokemons list</Text>
      <View style={styles.container}>
        <FlatList
          data={pokemonsList}
          renderItem={({ item }) => <Text>{item.name}</Text>}
        />
      </View>
    </View>
  );
}

export default PokemonsList;

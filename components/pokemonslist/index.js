import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import styles from "./style";
import ApiPokemon from "../../api/api-pokemons";
import Card from "../common/cards";

function PokemonsList() {
  const [pokemonsList, setPokemonsList] = useState([]);

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
      <FlatList
        initialNumToRender={20}
        showsVerticalScrollIndicator={false}
        data={pokemonsList}
        renderItem={({ item }) => <Card name={item.name} url={item.url} />}
      />
    </View>
  );
}

export default PokemonsList;

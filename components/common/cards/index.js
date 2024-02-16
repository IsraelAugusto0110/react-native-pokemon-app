import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ApiPokemon from "../../../api/api-pokemons";

export default function Card({ name, url }) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonUrl, setPokemonUrl] = useState("");

  useEffect(() => {
    setPokemonName(name);
    setPokemonUrl(url);
    //
  }, []);

  function handlePress() {
    //console.log(pokemonName, pokemonUrl);
    ApiPokemon.getAllByNumber(pokemonUrl)
      .then((res) => {
        console.log(res.data.types[1]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.textName}>{pokemonName}</Text>
        <Text style={styles.textName}>{pokemonUrl}</Text>
      </View>
    </TouchableOpacity>
  );
}

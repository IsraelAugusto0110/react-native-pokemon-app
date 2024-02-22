import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";
import ApiPokemon from "../../../api/api-pokemons";

export default function Card({ name, url }) {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonUrl, setPokemonUrl] = useState("");
  const [pokemonType, setPokemonType] = useState([]);

  useEffect(() => {
    setPokemonName(name);
    setPokemonUrl(url);
    //
    ApiPokemon.getAllByNumber(url)
      .then((res) => {
        setPokemonType(res.data.types);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function handlePress() {
    console.log(pokemonName);
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.textName}>{pokemonName}</Text>
        <FlatList
          horizontal
          data={pokemonType}
          renderItem={({ item }) => <Text>{item.type.name} </Text>}
        />
      </View>
    </TouchableOpacity>
  );
}

import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./style";
import SearchInput from "../../components/common/searchfield";
import Api from "../../api/api";
import axios from "axios";

function Home({ navigation }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  getAllPokemons = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/pikachu`
      );
      setData(response?.data);
    } catch (e) {
      setError(e);
      console.log(error);
    } finally {
      console.log(data.name, data.stats);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containertext}>
        <Text style={styles.titleText}>Welcome to pokedex</Text>
        <Text style={styles.messageText}>
          Use the search box below or click on the cards
        </Text>
      </View>
      <View>
        <SearchInput />
      </View>
    </View>
  );
}

export default Home;

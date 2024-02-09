import React, { useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "./style";
import SearchInput from "../../components/common/searchfield";

import axios from "axios";
import PokemonsList from "../../components/pokemonslist";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containertext}>
        <Text style={styles.titleText}>Welcome to pokedex</Text>
        <Text style={styles.messageText}>
          Use the search box below or click on the cards
        </Text>
      </View>

      <SearchInput />
      <PokemonsList />
    </View>
  );
}

export default Home;

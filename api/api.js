import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  getAllPokemons = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/pikachu`
      );
      setData(response.data);
    } catch (e) {
      setError(e);
      console.log(error);
    } finally {
      console.log(data);
    }
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const refetch = () => {
    getAllPokemons();
  };

  return { data, error, refetch };
};

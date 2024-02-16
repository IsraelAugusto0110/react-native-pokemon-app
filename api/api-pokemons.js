import api from "./api";

const getAllByNumber = (url) => {
  return api.get(url);
};

const getAllPokemons = () => {
  return api.get("/");
};

const ApiPokemon = {
  getAllByNumber,
  getAllPokemons,
};

export default ApiPokemon;

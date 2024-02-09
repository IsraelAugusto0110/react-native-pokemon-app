import api from "./api";

const getAllByNumber = (name) => {
  return api.get(`/${name}`);
};

const getAllPokemons = () => {
  return api.get("/");
};

const ApiPokemon = {
  getAllByNumber,
  getAllPokemons,
};

export default ApiPokemon;

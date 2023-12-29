import api from "./api";

const getAllByNumber = (number) => {
  return api.get(`/${number}`);
};

const getAllPokemons = () => {
  return api.get("/");
};

const ApiPokemon = {
  getAllByNumber,
  getAllPokemons,
};

export default ApiPokemon;

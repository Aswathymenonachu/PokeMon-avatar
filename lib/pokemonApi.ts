const pokeapi = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
const pokemonnameapi = "https://pokeapi.co/api/v2/pokemon/";
export async function getPokeMonList() {
  const response = await fetch(pokeapi);
  const data = await response.json();

  return data.results;
}

export async function getPokemon(name: string) {
  const response = await fetch(pokemonnameapi + name);
  const data = await response.json();
  return data;
}

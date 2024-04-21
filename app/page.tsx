import PokemonCard from "@/components/pokemon-card";
import PokemonGrid from "@/components/pokemon-grid";
import Image from "next/image";
import { getPokeMonList } from "@/lib/pokemonApi";

export default async function Home() {
  const pokemonList = await getPokeMonList();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-black">
      <PokemonGrid pokemonList={pokemonList} />
    </main>
  );
}

"use client";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import PokemonCard from "./pokemon-card";
import styled from "styled-components";

interface PokemonGridProps {
  pokemonList: any;
}

const Container = styled.div`
  margin: auto;
  width: 50%;
`;

const PokemonGrid = ({ pokemonList }: PokemonGridProps) => {
  const [searchText, setSearchText] = useState("");

  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <Container>
      <div>
        <h3 className="text-2xl mb-10 text-cyan-200">Search your pokemon</h3>
        <Label className="text-start  text-cyan-200 pt-4" htmlFor="pokemonname">
          PokeMon Name
        </Label>
        <Input
          type="text"
          value={searchText}
          autoComplete="off"
          id="pokemonname"
          placeholder="pikachu"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <h3 className="text-2xl pt-12 pb-6 text-center">PokeMon collection</h3>
      </div>
      <div className="mb-32 grid text-center lg:mb-0  lg:max-w-5xl lg:grid-cols-3 lg:text-lef">
        {filteredPokemonList.map((pokemon: any) => {
          return <PokemonCard key={pokemon.name} name={pokemon.name} />;
        })}
      </div>
    </Container>
  );
};
export default PokemonGrid;

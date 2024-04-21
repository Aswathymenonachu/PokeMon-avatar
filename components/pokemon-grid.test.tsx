import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import PokemonGrid from "./pokemon-grid";

describe("PokemonGrid component", () => {
  test("renders correctly", () => {
    const pokemonList = [
      { name: "pikachu" },
      { name: "bulbasaur" },
      { name: "charmander" },
    ];

    const { getByText, getByLabelText } = render(
      <PokemonGrid pokemonList={pokemonList} />
    );

    // Check if elements are rendered
    expect(getByText("Search your pokemon")).toBeInTheDocument();
    expect(getByLabelText("PokeMon Name")).toBeInTheDocument();
    expect(getByText("PokeMon collection")).toBeInTheDocument();

    // Check if pokemons are rendered
    expect(getByText("pikachu")).toBeInTheDocument();
    expect(getByText("bulbasaur")).toBeInTheDocument();
    expect(getByText("charmander")).toBeInTheDocument();
  });

  test("filters pokemon list based on search input", () => {
    const pokemonList = [
      { name: "pikachu" },
      { name: "bulbasaur" },
      { name: "charmander" },
    ];

    const { getByText, getByLabelText } = render(
      <PokemonGrid pokemonList={pokemonList} />
    );

    const searchInput = getByLabelText("PokeMon Name");
    fireEvent.change(searchInput, { target: { value: "pikachu" } });

    // Check if only pikachu is rendered
    expect(getByText("pikachu")).toBeInTheDocument();
  });
});

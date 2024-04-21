import { getPokemon } from "@/lib/pokemonApi";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Container } from "postcss";
import styled from "styled-components";
// import Chart from "@/components/chart";
import { Progress } from "@/components/ui/progress";

const PokemonPage = async ({ params }: { params: { pokemonName: string } }) => {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);
  console.log("pokemonObject", pokemonObject);

  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-black">
      <h1 className="text-4xl pb-10 text-bold pt-4 text-center text-white">
        {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
      </h1>
      <Image
        src={pokemonObject.sprites.other["official-artwork"].front_default}
        alt="pokemon picture"
        height="200"
        width="200"
      />
      <h3 className="text-white p-4">Weight:{pokemonObject.weight}</h3>
      <div className="flex-col">
        {pokemonObject.stats.map((statobject: any) => {
          const statname = statobject.stat.name;
          const statvalue = statobject.base_stat;
          return (
            <div
              className="flex items-stretch pb-3"
              style={{ width: "500px" }}
              key={statobject.stat.name}
            >
              <h3 className="p-3 w-2/4 text-white">
                {statname}:{statvalue}
              </h3>
              <Progress
                className="w-2/4 m-auto bg-red-500 text-white"
                value={statvalue}
              />
              {/* <Chart /> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonPage;

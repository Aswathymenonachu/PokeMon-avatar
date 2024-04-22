"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { getPokemon } from "@/lib/pokemonApi";
import Chart from "react-apexcharts";

const PokemonPage = ({ params }: { params: { pokemonName: string } }) => {
  const [pokemonObject, setPokemonObject] = useState<any>(null);
  const [chartData, setChartData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { pokemonName } = params;

  useEffect(() => {
    let stat_value: any = [];
    let stat_name: any = [];
    const base_stat = pokemonObject?.stats;
    console.log(base_stat, "base_stat");
    base_stat?.map((stat: any) => stat_value.push(stat?.base_stat));
    base_stat?.map((stat: any) => stat_name.push(stat?.stat?.name));

    const fetchPokemon = async () => {
      try {
        const data = await getPokemon(pokemonName);

        setPokemonObject(data);
        setChartData({
          options: {
            chart: {
              id: "basic-bar",
              foreColor: "#fff",
            },
            xaxis: {
              categories: stat_name,
            },
          },
          series: [
            {
              name: "series-1",
              data: stat_value,
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [pokemonName, pokemonObject]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemonObject) {
    return <div>Error: Pokémon not found</div>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-black">
      <h1 className="text-4xl pb-10 text-bold pt-4 text-center text-white">
        {pokemonName.charAt(0).toUpperCase() + pokemonName?.slice(1)}
      </h1>
      <Image
        src={pokemonObject.sprites.other["official-artwork"].front_default}
        alt="pokemon picture"
        height="200"
        width="200"
      />
      <h3 className="text-white p-4">Weight: {pokemonObject.weight}</h3>
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
                {statname}: {statvalue}
              </h3>
            </div>
          );
        })}
        {!loading && (
          <Chart
            options={chartData?.options}
            series={chartData?.series}
            type="bar"
          />
        )}
      </div>
    </div>
  );
};

export default PokemonPage;

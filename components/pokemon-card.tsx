import React from "react";
import Link from "next/link";
import { Slice } from "lucide-react";

interface PokemonCardProps {
  name: string;
}

const PokemonCard = ({ name }: PokemonCardProps) => {
  return (
    <Link
      href={name}
      className="group rounded-lg border border-transparent m-3 px-5 py-4 transition-colors dark:border-gray-500 border-gray-300 bg-slate-50 hover:bg-gray-400 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      key={name + "card"}
      rel="noopener noreferrer"
    >
      <h2 className=" text-2xl font-semibold">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
};
export default PokemonCard;

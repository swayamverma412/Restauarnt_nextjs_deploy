import React from "react";
import axios from "axios";
import YearRoundMenu from "@/components/Menu/YearRoundMenu";
import SeasonalMenu from "@/components/Menu/SeasonalMenu";

export default async function Menu() {
  const res = await axios.get("https://rox-api.onrender.com/menu");

  return (
    <main className="flex flex-col items-center justify-start w-full h-full gap-32 pt-20 pb-14">
      <div className="flex flex-col items-center justify-center gap-16 px-5 tabletM:px-10">
        <div className="flex flex-col items-center justify-start gap-8">
          <h1 className="text-6xl font-bold">Year Round Menu</h1>
          <YearRoundMenu categories={res.data.category} />
        </div>

        {res.data.Seasonal.map((seasonal) => (
          <div
            key={seasonal.seasonName}
            className="flex flex-col items-center justify-start gap-8"
          >
            <h1 className="text-6xl font-bold">{seasonal.seasonName}</h1>
            <SeasonalMenu items={seasonal.items} />
          </div>
        ))}
      </div>
    </main>
  );
}

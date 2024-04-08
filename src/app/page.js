import Chef from "@/components/Homepage/Chef";
import Events from "@/components/Homepage/Events";
import HeroSection from "@/components/Homepage/HeroSection";
import PopularDish from "@/components/Homepage/PopularDish";
import SustainabilityInitiatives from "@/components/Homepage/SustainabilityInitiatives";
import Testimonials from "@/components/Homepage/Testimonials";
import Awards from "@/components/Homepage/Awards";
import Image from "next/image";
import axios from "axios";

export default async function Home() {
  const res = await axios.get("https://rox-api.onrender.com/");

  return (
    <main className="flex flex-col items-center justify-start w-full h-full gap-32 py-14">
      {/* Hero Section */}
      <HeroSection description={res.data.ambiance_description} />
      <PopularDish popular={res.data.top_dishes_by_rating} />
      <SustainabilityInitiatives
        initiatives={res.data.sustainability_initiatives}
      />
      <Chef chef={res.data.chef_name} />
      <Events events={res.data.upcoming_event.upcoming_events} />
      <Awards awards={res.data.awards}/>
      <Testimonials review={res.data.review} />
    </main>
  );
}

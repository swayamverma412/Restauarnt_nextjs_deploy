import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa6";
import axios from "axios";

const Footer = async () => {
  const { data } = await axios.get("https://rox-api.onrender.com/footer");
  console.log(data);

  // Function to initialize Google Map
  const initMap = () => {
    if (typeof window !== "undefined") {
      const map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: data.location.latitude, lng: data.location.longitude },
        zoom: 15,
      });

      const marker = new window.google.maps.Marker({
        position: { lat: data.location.latitude, lng: data.location.longitude },
        map: map,
        title: "Your Location",
      });
    }
  };

  // Call initMap directly without useEffect
  initMap();

  return (
    <div className="flex items-center justify-center w-full bg-Orange/50">
      <div className="flex flex-col items-center justify-center w-full max-w-6xl gap-10 px-5 py-10 tabletM:px-10">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg font-medium">{data.location.address}</p>
          <Link
            target="_blank"
            href={data.online_presence.website}
            className="hover:underline"
          >
            {data.online_presence.website}
          </Link>
        </div>
        {/* Container for Google Map */}
        <div id="map" style={{ height: "300px", width: "100%" }}></div>
        <div className="flex items-center justify-center gap-4">
          <Link
            target="_blank"
            href={data.online_presence.social_media.facebook}
          >
            <FaFacebook />
          </Link>
          <Link
            target="_blank"
            href={data.online_presence.social_media.instagram}
          >
            <RiInstagramFill />
          </Link>
          <Link
            target="_blank"
            href={data.online_presence.social_media.twitter}
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

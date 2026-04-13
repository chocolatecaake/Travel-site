//import "../css/Footer.css";
//import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { AwardIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[var(--dark-green)] flex justify-between items-end p-4 text-white footer">
      <div className="flex font-semibold items-start flex-col gap-8">
        <a href="#destinations">Destinations</a>
        <a href="#travelTips">Travel Tips</a>
        <a href="#ctaSection">Explore</a>
      </div>
      <span className="tertiary-color font-semibold">#visitSriLanka</span>
    </footer>
  );
};

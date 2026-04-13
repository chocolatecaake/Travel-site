import { Star } from "lucide-react";

const DestinationCard = ({ image, title, subtitle }) => {
  return (
    <>
      <div className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer">
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="w-full h-[520px] object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent" />
        {/* Content */}
        <Star
          className="absolute z-20 top-4 left-4 text-white"
          fill="#ffffff"
        />

        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-lg font-semibold tracking-widest">{title}</h3>
          {/* {subtitle && <p className="text-sm opacity-80">{subtitle}</p>} */}
        </div>
      </div>
    </>
  );
};

export default DestinationCard;

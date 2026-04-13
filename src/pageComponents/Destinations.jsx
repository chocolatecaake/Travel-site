import DestinationCard from "../components/DestinationCard";
import ella from "../assets/imgs/ella.webp";
import kandy from "../assets/imgs/kandy.webp";
import nuwera from "../assets/imgs/nuweraEliya.webp";
import cuisine from "../assets/imgs/cuisine.webp";
import events from "../assets/imgs/events.webp";
import beaches from "../assets/imgs/beaches.webp";

export const Destinations = () => {
  return (
    <section id="destinations" className="px-6">
      <div className="flex flex-col gap-16">
        {/* Popular */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl uppercase text-right font-bold">
            Popular <br />
            <span className="tertiary-color">Places</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <DestinationCard
              image={ella}
              title="Ella"
              subtitle="Nine Arches bridge"
            />
            <DestinationCard image={kandy} title="Kandy" />
            <DestinationCard image={nuwera} title="Nuwera Eliya" />
          </div>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-6" id="explore">
          <h2 className="text-3xl uppercase text-left font-bold">
            To <br /> <span className="tertiary-color">Explore</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <DestinationCard image={cuisine} title="Cuisine" />
            <DestinationCard image={beaches} title="Beaches" />
            <DestinationCard image={events} title="Events" />
          </div>
        </div>
      </div>
    </section>
  );
};

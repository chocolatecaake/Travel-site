import DestinationCard from "../components/DestinationCard";
import ella from "../assets/imgs/ella.webp";
import kandy from "../assets/imgs/kandy.webp";
import nuwera from "../assets/imgs/nuweraEliya.webp";
import cuisine from "../assets/imgs/cuisine.webp";
import events from "../assets/imgs/events.webp";
import beaches from "../assets/imgs/beaches.webp";
import { Reveal } from "../assets/hooks/Reveal";

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
            <Reveal delay={100}>
              <DestinationCard
                image={ella}
                title="Ella"
                subtitle="Nine Arches bridge"
              />
            </Reveal>
            <Reveal delay={200}>
              <DestinationCard image={kandy} title="Kandy" />
            </Reveal>
            <Reveal delay={300}>
              <DestinationCard image={nuwera} title="Nuwera Eliya" />
            </Reveal>
          </div>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-6" id="explore">
          <h2 className="text-3xl uppercase text-left font-bold">
            To <br /> <span className="tertiary-color">Explore</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Reveal delay={100}>
              <DestinationCard image={cuisine} title="Cuisine" />
            </Reveal>
            <Reveal delay={200}>
              <DestinationCard image={beaches} title="Beaches" />
            </Reveal>
            <Reveal delay={300}>
              <DestinationCard image={events} title="Events" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

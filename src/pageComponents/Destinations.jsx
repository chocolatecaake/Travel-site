import DestinationCard from "../components/DestinationCard";
import ella from "../assets/imgs/ella.png";
import kandy from "../assets/imgs/kandy.png";
import nuwera from "../assets/imgs/nuweraEliya.png";
import cuisine from "../assets/imgs/cuisine.png";
import events from "../assets/imgs/events.png";
import beaches from "../assets/imgs/beaches.png";

export const Destinations = () => {
  return (
    <section id="destinations" className="py-24 px-6">
      <h2 className="text-3xl uppercase text-right font-bold mb-8">
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

      <h2 className="text-3xl uppercase text-left font-bold my-8">
        To <br /> <span className="tertiary-color">Explore</span>
      </h2>
      <div id="explore" className="grid md:grid-cols-3 gap-6">
        <DestinationCard image={cuisine} title="Cuisine" />
        <DestinationCard image={beaches} title="Beaches" />
        <DestinationCard image={events} title="Events" />
      </div>
    </section>
  );
};

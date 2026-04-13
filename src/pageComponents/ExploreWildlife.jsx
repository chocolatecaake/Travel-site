import wildlife from "../assets/imgs/wildlife.webp";
import { Button } from "../components/Button";

export const ExploreWildlife = () => {
  return (
    <section id="wildlife">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col items-start space-y-6">
          <span className="tertiary-color subtitle-font leading-none">
            Discover <br />
            <span className="text-black">Wildlife</span>
          </span>

          <p className="text-2xl leading-relaxed max-w-md">
            Discover the breathtaking wildlife of Sri Lanka in their natural
            habitats
          </p>

          <Button
            href="https://www.pettitts.co.uk/guides/sri-lanka-wildlife"
            variant="primary"
          >
            Explore Wildlife
          </Button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={wildlife}
            alt="sri lankan elephants"
            loading="lazy"
            decoding="async"
            className="w-full max-w-md md:max-w-xl lg:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

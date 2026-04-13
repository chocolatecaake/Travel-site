import wildlife from "../assets/imgs/wildlife.svg";
import { Button } from "../components/Button";

export const ExploreWildlife = () => {
  return (
    <section id="wildlife" className="min-h-screen">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div className="ms-8 flex flex-col items-start">
          <span className="tertiary-color text-left homepage-title-font font-regular tracking-normal leading-none animate-fade-in mb-3">
            Discover <br /> <span className="text-black">Wildlife</span>
          </span>
          <p className="w-1/2 mb-6 text-left text-2xl leading-relaxed">
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
        <div className="relative rounded-2xl">
          <img src={wildlife} className="w-full" />
        </div>
      </div>
    </section>
  );
};

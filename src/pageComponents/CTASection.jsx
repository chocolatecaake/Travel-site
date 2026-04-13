import cta from "../assets/imgs/Awaits.svg";
import { Button } from "../components/Button";
export const CTASection = () => {
  return (
    <section
      id="ctaSection"
      className="min-h-screen flex items-center gap-3 justify-center text-center relative text-white"
    >
      {/* Background */}

      <div
        className="absolute contain inset-0"
        style={{ backgroundImage: `url(${cta})` }}
      />
      <span className="tertiary-color absolute w-1/4 text-left left-5 font-semibold tracking-widest bottom-4 text-2xl tertiary-font block hidden sm:block">
        WHAT ARE YOU WAITING FOR?
      </span>

      {/* Content */}
      <div className="relative text-center z-10">
        <span className="text-white subtitle-font uppercase tracking-wide bold leading-none animate-fade-in">
          Sri Lanka Awaits You
        </span>

        <p className="max-w-xl font-semibold text-2xl mx-auto">
          Start your unforgettable journey today and explore the pearl of the
          Indian Ocean.
        </p>
        <Button
          href="https://www.srilankan.com"
          variant="light"
          className="mt-3 px-8"
        >
          Book Your Visit
        </Button>
      </div>
    </section>
  );
};

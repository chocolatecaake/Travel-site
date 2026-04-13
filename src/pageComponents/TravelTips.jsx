import { Calendar, TrainFront, CoinsIcon, Languages } from "lucide-react";

const donationMethods = [
  {
    title: "Best Time to travel",
    subtitle: "December-Mid April",
    icon: <Calendar />,
  },
  {
    title: "Transportation",
    subtitle: "Tuk-Tuks / Trains",
    icon: <TrainFront />,
  },
  {
    title: "Currency",
    subtitle: "Sri Lankan Rupee",
    icon: <CoinsIcon />,
  },
  {
    title: "Languages",
    subtitle: "English, Sinhala, Tamil",
    icon: <Languages />,
  },
];

export const TravelTips = () => {
  return (
    <section
      id="travelTips"
      className="py-10 px-6 bg-[var(--dark-green)] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {donationMethods.map((item, i) => (
            <div
              key={i}
              className="w-full sm:w-[250px] p-6 flex flex-col items-center justify-center 
                     transition hover:-translate-y-1"
            >
              <div className="rounded-full tertiary-color p-3 mb-3">
                {item.icon}
              </div>

              <div className="text-center font-semibold">{item.title}</div>

              <div className="text-center">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

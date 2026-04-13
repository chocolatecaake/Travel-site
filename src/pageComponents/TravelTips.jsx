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
    <section id="travelTips" className="mb-4">
      <div className="flex w-full bg-[var(--dark-green)] text-white p-9 justify-center">
        <div className="flex flex-col max-w-6xl w-full px-6 gap-y-6">
          <div className="flex flex-col md:flex-row md:justify-center gap-6 reveal">
            {donationMethods.map((item, i) => (
              <div
                key={i}
                className="sm:w-[250px] p-6 flex flex-col items-center justify-center green-border-right transition hover:-translate-y-1"
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
      </div>
    </section>
  );
};

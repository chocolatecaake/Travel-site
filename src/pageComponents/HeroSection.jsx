import { ArrowDown } from "lucide-react";
import landing from "../../public/landing.webp";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  // const date = new Date();
  const searchData = [
    { name: "Ella", section: "#destinations" },
    { name: "Kandy", section: "#destinations" },
    { name: "Nuwara Eliya", section: "#destinations" },
    { name: "Wildlife", section: "#wildlife" },
    { name: "Beaches", section: "#explore" },
    { name: "Events", section: "#explore" },
    { name: "Cuisine", section: "#explore" },
  ];

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = searchData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase()),
    );

    setResults(filtered);
  };

  const handleSelect = (section) => {
    document.querySelector(section)?.scrollIntoView({
      behavior: "smooth",
    });

    setResults([]);
    setQuery("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (results.length > 0) {
      handleSelect(results[0].section);
    } else {
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(query + " Sri Lanka")}`,
        "_blank",
      );
    }
  };

  useEffect(() => {
    const handleClickOutside = () => setResults([]);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <section
      id="home"
      className=" relative min-h-screen flex flex-col items-center justify-center p4 bg-center bg-no-repeat"
    >
      <img src={landing} className="absolute w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/10"></div>

      <div className="container w-full mx-auto z-10 ">
        <div className="space-y-6">
          <div className="flex flex-col space-y-3 items-center tracking-tight">
            <h1 className="secondary-font uppercase tertiary-color font-bold tracking-widest text-xl sm:text-xl md:text-2xl text-center whitespace-normal md:whitespace-nowrap">
              Explore the beauty of
            </h1>
            <span className="text-white text-center homepage-title-font uppercase font-medium tracking-wide bold leading-none animate-fade-in">
              Sri Lanka
            </span>
          </div>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative w-full">
              <input
                type="search"
                value={query}
                onChange={handleChange}
                placeholder="Search destinations, wildlife..."
                className="w-full backdrop-blur-lg p-3 ps-9 border-2 border-white border-default-medium text-heading text-sm rounded-full focus:bg-white ring-brand focus:border-brand shadow-2xs placeholder:text-body"
              />

              <button
                type="submit"
                className="absolute bg-tertiary rounded-full inset-e-1.5 bottom-1.5 text-white shadow-2xs px-1.5 py-1.5"
              >
                <Search aria-label="Search destinations" />
              </button>

              {/* Dropdown */}
              {results.length > 0 && (
                <div className="absolute left-0 right-0 top-full mt-1 bg-white text-black rounded-xl shadow-lg z-50 overflow-hidden">
                  {results.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => handleSelect(item.section)}
                      className="px-4 py-3 hover:bg-gray-100 cursor-pointer transition"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </form>
        </div>

        <span className="tertiary-color text-2xl tertiary-font font-medium absolute tracking-widest left-6 bottom-8 max-w-sm">
          Discover beaches, mountains, wildlife and culture
        </span>
      </div>

      <div className="absolute bottom-8 mx-auto animate-bounce">
        <a href="#destinations">
          <ArrowDown className="text-white h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

// import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import { Button } from "../components/Button";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Destinations", href: "#destinations" },
  { name: "Travel Tips", href: "#travelTips" },
  { name: "Explore", href: "#ctaSection" },
];

export const Navbar = () => {
  const [selected, setSelected] = useState(navItems[0].name);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => {
      const el = document.querySelector(item.href);
      return { name: item.name, element: el };
    });

    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const sec of sections) {
        if (!sec.element) continue;

        const top = sec.element.offsetTop;
        const height = sec.element.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setSelected(sec.name);
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav
      className={`fixed w-max left-1/2 -translate-x-1/2 z-40 mt-5 transition-all duration-300 py-2 md:rounded-full px-5 rounded-md
      ${scrolled ? "bg-black/40 text-white shadow-md backdrop-blur-lg" : "text-white bg-transparent"}`}
    >
      <div className="flex items-center justify-between">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => {
            const isActive = selected === item.name;
            return (
              <a
                key={key}
                href={item.href}
                className="relative secondary-font font-semibold flex items-center px-4 rounded-sm transition-colors hover:tertiary-color"
              >
                {isActive && (
                  <span className="absolute left-0 w-3 h-3 bg-tertiary rounded-xs" />
                )}
                <span className={isActive ? "pl-5 tertiary-color" : ""}>
                  {item.name}
                </span>
              </a>
            );
          })}
          <Button
            href="https://www.srilankan.com"
            variant="light"
            className="px-4 py-2 text-sm"
          >
            Book Your Visit
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-md"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="flex flex-col mt-4 space-y-2 md:hidden">
          {navItems.map((item, key) => {
            const isActive = selected === item.name;
            return (
              <a
                key={key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2 rounded-sm transition-colors hover:bg-tertiary-200 hover:tertiary-color ${
                  isActive ? "bg-black-300 font-semibold" : ""
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

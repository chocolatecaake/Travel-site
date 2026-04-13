// import { cn } from "../lib/utils";

export const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}) => {
  const baseStyles =
    "inline-block px-6 py-3 rounded-full font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-black text-white hover:opacity-80",
    light: "bg-white text-black hover:opacity-80",
    outline: "border border-white text-white hover:bg-white hover:text-black",
  };

  const styles = `${baseStyles} ${variants[variant]} ${className || ""}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
};

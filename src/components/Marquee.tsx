// components/MarqueeSection.tsx
import Marquee from "react-fast-marquee";

type Item = {
  name: string;
  icon?: string;
  iconImg?: string;
};

interface MarqueeSectionProps {
  items: Item[];
  theme: "light" | "dark";
  direction: "right" | "left"
}

export default function MarqueeSection({ items, theme, direction }: MarqueeSectionProps) {
  return (
    <Marquee
      speed={50}
      gradient={false}
      direction={direction}
      className={`py-4 ${theme === "dark" ? "bg-background" : "bg-foreground"}`}
    >
      {items.map((item) => (
        <div key={item.name} className="flex items-center gap-2 mx-2 md:mx-6 mt-16">
          {item.icon ? (
            <i className={`${item.icon} text-3xl`}></i>
          ) : (
            <img src={item.iconImg} alt={item.name} className="w-7 h-7" />
          )}
          <span
            className={`text-lg font-medium ${
              theme === "dark" ? "text-foreground" : "text-background"
            }`}
          >
            {item.name}
          </span>
        </div>
      ))}
    </Marquee>
  );
}

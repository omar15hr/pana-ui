import { useState } from "react";
import { Bell, DocumentationSVG, Github, Moon, Sun } from "../Icons";

const socialLinks = [
  {
    icon: <Github size={22} />,
    link: "https://github.com/omar15hr/pana-ui",
    title: "Github",
  },
  {
    icon: <DocumentationSVG size={22} />,
    link: "",
    title: "Documentation",
  },
  {
    icon: <Bell size={22} />,
    link: "",
    title: "Bell",
  },
];

export function SocialLinks() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="fixed left-4 bottom-4 text-left bg-[#09122e] p-2 px-6 rounded-full opacity-95 backdrop-blur">
      {/* Enlaces sociales */}
      {socialLinks.map(({ link, icon, title }) => (
        <div key={title} className="group relative inline-block p-1">
          <div className="flex flex-row items-center">
          {title === "Github" ? (
              <a href={link} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            ) : (
              <button>{icon}</button>
            )}
          </div>

          {/* Popover */}
          <div className="absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mb-2 bottom-full w-32 bg-[#8bbd02] rounded-lg shadow-lg">
            <div className="p-2 text-center">
              <h3 className="text-sm font-semibold text-white">{title}</h3>
            </div>
          </div>
        </div>
      ))}

      {/* Toggle de tema */}
      <div className="group relative inline-block p-1">
        <div className="flex flex-row gap-4 items-center">
          <button onClick={toggleTheme}>
            {theme === "light" ? <Moon size={22} /> : <Sun size={22} />}
          </button>
        </div>

        {/* Popover */}
        <div className="absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 mb-2 bottom-full w-32 bg-[#8bbd02] rounded-lg shadow-lg">
          <div className="p-2 text-center">
            <h3 className="text-sm font-semibold text-white">
              {theme === "light" ? "Modo Oscuro" : "Modo Claro"}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

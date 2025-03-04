import { useState } from "react";
import { Bell, DocumentationSVG, Github, Moon, Sun } from "./Icons";

export function SocialLinks() {

  const [theme, setTheme] = useState< 'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="fixed left-4 bottom-4 text-left bg-[#09122e] p-2 px-6 rounded-full opacity-95 backdrop-blur">
      <div className="flex flex-row gap-4 items-center">
        <Github />
        <DocumentationSVG />
        <Bell />
        <div onClick={toggleTheme}>{theme === 'dark' ? <Moon /> : <Sun />}</div>
      </div>
    </div>
  );
}

import { ReactSVG, RightArrow, Tailwind } from "../../Icons";

export function Header() {
  return (
    <header className="flex flex-col gap-8 items-center justify-center p-5">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-bold">Pana</h1>
        <span className="text-6xl text-[#A8E600] font-bold">UI</span>
      </div>

      <p className="text-xl text-[#979797]">A collection of UI components</p>

      <a href="/doc" className="group flex gap-2 bg-[#8bbd02] p-2 rounded-md cursor-pointer transition-all duration-300 sombra-normal">
        <span>Get Started</span>
        <div className="transition-transform duration-300 group-hover:translate-x-1">
          <RightArrow />
        </div>
      </a>

      <div className="flex flex-row gap-5 text-[#979797] text-xs font-semibold items-center justify-center">
        <span>BUILT FOR</span>
        <div className="flex gap-2 items-center">
          <ReactSVG size={20} />
          <span>REACT</span>
        </div>
        <div className="flex gap-2 items-center">
          <Tailwind size={20} />
          <span>TAILWIND CSS</span>
        </div>
      </div>
    </header>
  );
}

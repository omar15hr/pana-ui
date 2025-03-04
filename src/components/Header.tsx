import { RightArrow } from "./Icons";

export function Header() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="flex items-center justify-center">
        <h1 className="text-5xl font-bold">Pana</h1>
        <span className="text-6xl text-[#A8E600] font-bold">UI</span>
      </div>

      <p className="text-xl text-[#979797]">A collection of UI components</p>

      <a className="group flex gap-2 bg-[#8bbd02] p-2 rounded-md cursor-pointer transition-all duration-300">
        <span>Get Started</span>
        <div className="transition-transform duration-300 group-hover:translate-x-1">
          <RightArrow />
        </div>
      </a>

      <div></div>
    </div>
  );
}

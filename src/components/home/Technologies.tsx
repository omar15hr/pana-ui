import { Box, ReactSVG, Tailwind } from "../Icons";

const TechCards = [
  {
    title: "Smooth Animations",
    description:
      "Built-in animations powered by Motion for delightful user experiences.",
    icon: <Box size={24} />,
  },
  {
    title: "React",
    description:
      "Built with React patterns including Server Components, TypeScript, and hooks for optimal performance.",
    icon: <ReactSVG size={24} />,
  },
  {
    title: "Tailwind CSS",
    description:
      "Built with Tailwind CSS v4, featuring the latest utility-first CSS framework with enhanced dark mode and modern design patterns.",
    icon: <Tailwind size={24} />,
  },
];

export function Technologies() {
  return (
    <section className="flex flex-col gap-8 items-center justify-center p-5 mt-10">
      <h2 className="text-4xl font-bold">
        Why Choose Pana<span className="text-[#A8E600]">UI</span> ?
      </h2>

      <div className="mt-10 grid gap-8 px-4 md:grid-cols-3">
        {TechCards.map((tech) => (
          <div className="transition-all shadow-2xl duration-300 sombra-normal border-light-200 bg-[#070f27] dark:border-dark-200 dark:bg-dark-100 relative flex flex-col rounded-2xl p-6 backdrop-blur-lg box-light dark:box-light h-46 items-center hover:[--icon-color:white]">
            <h3 className="flex flex-row gap-3 text-light-950 group-hover:text-light-50 dark:text-dark-950 mb-2 text-xl font-semibold transition mt-5">
              <span>{tech.icon}</span>
              {tech.title}
            </h3>
            <p className="text-sm text-[#e7e4e4] dark:text-dark-900 group-hover:dark:text-dark-950 transition">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

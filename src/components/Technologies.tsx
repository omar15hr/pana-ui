const TechCards = [
  {
    title: "Smooth Animations",
    description:
      "Built-in animations powered by Motion for delightful user experiences.",
    icon: "ReactSVG",
  },
  {
    title: "React",
    description: 'Built with React patterns including Server Components, TypeScript, and hooks for optimal performance.',
    icon: "ReactSVG",
  },
  {
    title: "Tailwind CSS",
    description:
      "Built with Tailwind CSS v4, featuring the latest utility-first CSS framework with enhanced dark mode and modern design patterns.",
    icon: "Tailwind",
  },
];

export function Technologies() {
  return (
    <section className="flex flex-col gap-8 items-center justify-center p-5 mt-10">
      <h2 className="text-4xl font-bold">
        Why Choose Pana <span className="text-[#A8E600]">UI</span> ?
      </h2>

      <div className="mt-16 grid gap-8 px-4 md:grid-cols-3">
        {TechCards.map((tech) => (
          <div className="group border-light-200 bg-[#08122e] dark:border-dark-200 dark:bg-dark-100 relative flex flex-col rounded-2xl border p-6 backdrop-blur-lg transition-all hover:border-[#0b193f] box-light dark:box-light">
            <h3 className="text-light-950 group-hover:text-light-50 dark:text-dark-950 mb-2 text-xl font-semibold transition">
              {tech.title}
            </h3>
            <p className="text-light-900 group-hover:text-light-50 dark:text-dark-900 group-hover:dark:text-dark-950 transition">
              {tech.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

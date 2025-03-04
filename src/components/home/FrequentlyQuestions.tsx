export function FrequentlyQuestions() {
  return (
    <section className="flex flex-col gap-8 items-center justify-center p-5 mt-10">
      <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>

      <div className="mt-10 flex flex-col items-center justify-center gap-10">
        <div className="transition-all shadow-2xl duration-300 sombra-normal border-light-200 bg-[#070f27] dark:border-dark-200 dark:bg-dark-100 relative flex flex-col rounded-2xl p-6 backdrop-blur-lg box-light dark:box-light h-46 items-center hover:[--icon-color:white] w-96">
          <h3 className="text-light-950 group-hover:text-light-50 dark:text-dark-950 mb-2 text-xl font-semibold transition mt-5">
            Is Pana<span className="text-[#A8E600]">UI</span> free?
          </h3>
          <p className="text-md text-[#e7e4e4] dark:text-dark-900 group-hover:dark:text-dark-950 transition">
            Yes, Pana UI is completely free to use. You can use it for any
            purpose, including commercial projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Showcase() {
  return (
    <section className="flex flex-col gap-8 items-center justify-center p-5 mt-10">
      <h2 className="text-4xl font-bold">Component Showcase</h2>

      <div className="mt-10 grid gap-8 px-4 md:grid-cols-3">
        <div
          className="border-light-200 bg-light-100 dark:border-dark-200 dark:bg-dark-100 relative flex h-[340px] w-full items-center justify-center overflow-hidden rounded-lg transition md:flex-1 shadow-2xl bg-[#070f27]"
        >
          <div className="flex w-[300px] flex-col gap-4 p-4">
            <div className="flex flex-col items-start justify-center gap-1">
              <p>Selected Tags</p>
              <div className="border-light-300 dark:border-dark-300 flex min-h-12 w-full flex-wrap items-center gap-1 rounded-xl border p-2"></div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

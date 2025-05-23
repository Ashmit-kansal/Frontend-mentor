function App() {
  return (
    <main className="w-4/5 mx-auto mt-11">
      <p className="text-preset-2-mobile sm:text-preset-2 text-center text-grey-500">
        Reliable, efficient delivery
      </p>
      <p className="text-preset-1-mobile sm:text-preset-1 text-center text-grey-500">
        Powered by Technology
      </p>
      <p className="text-preset-4 text-grey-500 text-center my-5">
        Our Artificial Intelligence powered tools use millions of project data
        points to ensure that your project is successful
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 max-w-[1090px] mx-auto">
        <section className="rounded-lg shadow-lg p-8 border-t-4 border-t-cyan sm:col-span-2 max-w-xs mx-auto lg:col-span-1 lg:row-span-2 max-h-64 my-auto">
          <h2 className="text-preset-3 text-grey-500">Supervisor</h2>
          <p className="text-preset-5 text-grey-400 my-2">
            Monitors activity to identify project roadblocks
          </p>
          <img
            className="my-4 ml-auto"
            src="/images/icon-supervisor.svg"
            alt="supervisor icon"
          />
        </section>
        <section className="rounded-lg shadow-lg p-8 border-t-4 border-t-red max-w-xs mx-auto max-h-64">
          <h2 className="text-preset-3 text-grey-500">Team Builder</h2>
          <p className="text-preset-5 text-grey-400 my-2">
            Scans our talent network to create the optimal team for your project
          </p>
          <img
            className="my-4 ml-auto"
            src="/images/icon-team-builder.svg"
            alt="teambuilder icon"
          />
        </section>
        <section className="rounded-lg shadow-lg p-8 border-t-4 border-t-orange max-w-xs mx-auto lg:col-start-2 max-h-64">
          <h2 className="text-preset-3 text-grey-500">Karma</h2>
          <p className="text-preset-5 text-grey-400 my-2">
            Regularly evaluates our talent to ensure quality
          </p>
          <img
            className="my-4 ml-auto"
            src="/images/icon-karma.svg"
            alt="karma icon"
          />
        </section>
        <section className="rounded-lg shadow-lg p-8 border-t-4 border-t-blue sm:col-span-2 max-w-xs mx-auto lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:row-span-2 max-h-64 my-auto">
          <h2 className="text-preset-3 text-grey-500">Calculator</h2>
          <p className="text-preset-5 text-grey-400 my-2">
            Uses data from past projects to provide better delivery estimates
          </p>
          <img
            className="my-4 ml-auto"
            src="/images/icon-calculator.svg"
            alt="calculator icon"
          />
        </section>
      </div>
    </main>
  );
}

export default App;

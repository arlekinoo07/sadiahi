import { weeklyPlan } from "@/data/site-data";

export default function PlanPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      <section className="rounded-[2rem] border border-white/10 bg-[#131313] p-5 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ffd6a5]">
          Детальный план
        </p>
        <h1 className="mt-4 text-4xl font-black uppercase leading-[0.92] text-white sm:text-6xl">
          Разбивка тренировочного цикла по неделям.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68 sm:text-lg">
          Эта страница удобна, если нужен именно план: без лишнего маркетинга,
          с четкой логикой роста нагрузки и фокусом каждой недели.
        </p>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {weeklyPlan.map((item, index) => (
          <article
            key={item.week}
            className="rounded-[1.8rem] border border-white/10 bg-white/4 p-5 sm:p-6"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`h-3 w-16 rounded-full ${item.accent}`}
                aria-hidden="true"
              />
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
                {item.week}
              </p>
              <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-white/70">
                Этап {index + 1}
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-black uppercase text-white">
              {item.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/68">{item.goal}</p>

            <div className="mt-5 rounded-[1.4rem] bg-black/20 p-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                Недельный объем
              </p>
              <p className="mt-2 text-xl font-bold text-white">{item.volume}</p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.focus.map((focus) => (
                <span
                  key={focus}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/74"
                >
                  {focus}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

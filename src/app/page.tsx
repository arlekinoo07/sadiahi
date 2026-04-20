import Link from "next/link";
import {
  intensitySteps,
  splitDays,
  statCards,
  weeklyPlan,
} from "@/data/site-data";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#131313] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] sm:p-8">
          <p className="mb-4 inline-flex cursor-pointer rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#ffd6a5] transition-transform duration-300 hover:-translate-y-0.5">
            План тренировок на 8 недель
          </p>
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="max-w-xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                Сайт для тренировок, прогресса и своего сплита.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/72 sm:text-lg">
                Теперь это не только landing page, а маленький тренировочный
                сайт: с планом, отдельными страницами, адаптивом под мобилку и
                возможностью редактировать свои тренировки.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/workouts"
                  className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-2xl bg-[#ff8a3d] px-5 text-sm font-bold uppercase tracking-[0.18em] text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Управлять тренировками
                </Link>
                <Link
                  href="/plan"
                  className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-white/10"
                >
                  Смотреть план
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {statCards.map((item) => (
                  <div
                    key={item.label}
                    className="cursor-pointer rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:bg-white/8"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                      {item.label}
                    </p>
                    <p className="mt-3 text-2xl font-bold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between rounded-[1.75rem] bg-[#f6f1e8] p-5 text-[#151515]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#8b6f47]">
                  Сводка программы
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="cursor-pointer rounded-[1.4rem] bg-[#151515] p-4 text-white transition-transform duration-300 hover:-translate-y-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                      Сила
                    </p>
                    <p className="mt-2 text-4xl font-black">78%</p>
                  </div>
                  <div className="cursor-pointer rounded-[1.4rem] bg-[#ff8a3d] p-4 text-white transition-transform duration-300 hover:-translate-y-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                      Кардио
                    </p>
                    <p className="mt-2 text-4xl font-black">64%</p>
                  </div>
                  <div className="col-span-2 cursor-pointer rounded-[1.4rem] bg-[#d9efe4] p-4 transition-transform duration-300 hover:-translate-y-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#3c5f55]">
                      Режим восстановления
                    </p>
                    <p className="mt-2 text-2xl font-black uppercase">
                      Сон 7ч+, вода и прогулка каждый день
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 cursor-pointer rounded-[1.4rem] border border-black/8 bg-white p-4 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-black/45">
                      Нагрузка
                    </p>
                    <p className="mt-2 text-3xl font-black">Прогрессивная</p>
                  </div>
                  <p className="rounded-full bg-[#151515] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-white">
                    Режим тренера
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  {intensitySteps.map((step) => (
                    <div key={step.label} className="cursor-pointer">
                      <div className="mb-1 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.15em] text-black/50">
                        <span>{step.label}</span>
                        <span>Интенсивность</span>
                      </div>
                      <div className="h-3 rounded-full bg-black/8">
                        <div
                          className={`h-3 rounded-full ${step.width} ${step.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-[2rem] bg-[#f25f4c] p-5 text-white shadow-[0_20px_70px_rgba(242,95,76,0.35)] sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">
                  Недельный сплит
                </p>
                <h2 className="mt-3 text-3xl font-black uppercase leading-none">
                  Сначала выстраиваем привычку.
                </h2>
              </div>
              <p className="cursor-pointer rounded-full border border-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] transition-transform duration-300 hover:-translate-y-0.5">
                Ритм 6 дней
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              {splitDays.map((item) => (
                <div
                  key={item.day}
                  className="grid cursor-pointer gap-3 rounded-[1.3rem] border border-white/12 bg-black/12 px-4 py-3 transition-transform duration-300 hover:-translate-y-1 hover:bg-black/18 sm:grid-cols-[68px_1fr_auto] sm:items-center"
                >
                  <p className="text-lg font-black uppercase">{item.day}</p>
                  <p className="text-sm font-medium text-white/88 sm:text-base">
                    {item.title}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                    {item.time}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#f6f1e8] p-5 text-[#151515] sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7d694d]">
              Что нового
            </p>
            <div className="mt-4 grid gap-3">
              {[
                "Отдельная страница плана с разбивкой по неделям",
                "Редактор тренировок с добавлением и удалением",
                "Страница восстановления и режима",
              ].map((item) => (
                <div
                  key={item}
                  className="cursor-pointer rounded-[1.25rem] bg-white px-4 py-5 text-sm font-semibold shadow-[0_10px_30px_rgba(21,21,21,0.06)] transition-transform duration-300 hover:-translate-y-1"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-[#101010] p-5 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
              План по неделям
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase text-white sm:text-4xl">
              Восемь этапов. Один понятный прогресс.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/62 sm:text-right sm:text-base">
            Весь интерфейс выровнен под мобильные экраны: карточки
            перестраиваются в одну колонку, кнопки крупные, а формы удобны для
            тапов.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {weeklyPlan.map((item) => (
            <article
              key={item.week}
              className="group cursor-pointer rounded-[1.8rem] border border-white/10 bg-white/4 p-5 transition-transform duration-300 hover:-translate-y-1 hover:bg-white/6"
            >
              <div className={`mb-5 h-2 w-20 rounded-full ${item.accent}`} />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                {item.week}
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase leading-none text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/65">{item.goal}</p>
              <div className="mt-4 rounded-[1.2rem] bg-black/22 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                  Объем
                </p>
                <p className="mt-2 text-lg font-bold text-white">{item.volume}</p>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.focus.map((focus) => (
                  <span
                    key={focus}
                    className="cursor-pointer rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white/72 transition-colors duration-300 hover:bg-white/8"
                  >
                    {focus}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

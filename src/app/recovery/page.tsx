import { recoveryCards } from "@/data/site-data";

export default function RecoveryPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/10 bg-[#131313] p-5 sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ffd6a5]">
            Восстановление
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-[0.94] text-white sm:text-6xl">
            Результат строится не только в зале.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-lg">
            Эта страница собирает базовые правила режима: сон, питание,
            шаговую активность и разгрузку между тяжелыми днями.
          </p>
        </div>

        <div className="rounded-[2rem] bg-[#f25f4c] p-5 text-white shadow-[0_20px_70px_rgba(242,95,76,0.35)] sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">
            Мини-чеклист
          </p>
          <div className="mt-5 grid gap-3">
            {[
              "Ложиться спать в одно время",
              "Пить воду в течение дня",
              "Не забивать каждую неделю до отказа",
              "Добавлять прогулки в дни отдыха",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] border border-white/12 bg-black/12 px-4 py-4 text-sm font-semibold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {recoveryCards.map((card) => (
          <article
            key={card.title}
            className="rounded-[1.8rem] border border-white/10 bg-white/4 p-5 sm:p-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
              {card.title}
            </p>
            <h2 className="mt-4 text-3xl font-black uppercase leading-[0.95] text-white">
              {card.value}
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/65">{card.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

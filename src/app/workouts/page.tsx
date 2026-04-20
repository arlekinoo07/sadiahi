import { WorkoutManager } from "@/components/workout-manager";

export default function WorkoutsPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-5 sm:px-6 sm:py-8 lg:px-8">
      <section className="rounded-[2rem] border border-white/10 bg-[#101010] p-5 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ffd6a5]">
          Конструктор тренировок
        </p>
        <h1 className="mt-4 text-4xl font-black uppercase leading-[0.92] text-white sm:text-6xl">
          Добавляй свои занятия и убирай лишнее.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68 sm:text-lg">
          Здесь ты можешь подстроить план под себя: занести новые тренировки,
          пересобрать дни и оставить только нужные блоки.
        </p>
      </section>

      <WorkoutManager />
    </main>
  );
}

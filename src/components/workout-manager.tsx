"use client";

import { FormEvent, useEffect, useState } from "react";
import { defaultWorkoutItems, type WorkoutItem } from "@/data/site-data";

const STORAGE_KEY = "sidiahi-workouts";

type WorkoutForm = {
  name: string;
  day: string;
  duration: string;
  category: string;
};

const initialForm: WorkoutForm = {
  name: "",
  day: "",
  duration: "",
  category: "",
};

export function WorkoutManager() {
  const [items, setItems] = useState<WorkoutItem[]>(() => {
    if (typeof window === "undefined") {
      return defaultWorkoutItems;
    }

    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      return defaultWorkoutItems;
    }

    try {
      const parsed = JSON.parse(raw) as WorkoutItem[];
      return Array.isArray(parsed) && parsed.length > 0
        ? parsed
        : defaultWorkoutItems;
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
      return defaultWorkoutItems;
    }
  });
  const [form, setForm] = useState<WorkoutForm>(initialForm);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name || !form.day || !form.duration || !form.category) {
      return;
    }

    const nextItem: WorkoutItem = {
      id: crypto.randomUUID(),
      name: form.name,
      day: form.day,
      duration: form.duration,
      category: form.category,
    };

    setItems((current) => [nextItem, ...current]);
    setForm(initialForm);
  };

  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="rounded-[2rem] border border-white/10 bg-[#f6f1e8] p-5 text-[#161616] sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#7d694d]">
          Своя тренировка
        </p>
        <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] text-[#111]">
          Добавляй и убирай любые занятия.
        </h2>
        <p className="mt-3 text-sm leading-6 text-black/65">
          Данные сохраняются в браузере через localStorage, без базы данных.
        </p>

        <form className="mt-6 grid gap-3" onSubmit={handleSubmit}>
          <input
            value={form.name}
            onChange={(event) =>
              setForm((current) => ({ ...current, name: event.target.value }))
            }
            placeholder="Название тренировки"
            className="min-h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition-colors focus:border-[#ff8a3d]"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            <input
              value={form.day}
              onChange={(event) =>
                setForm((current) => ({ ...current, day: event.target.value }))
              }
              placeholder="День"
              className="min-h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition-colors focus:border-[#ff8a3d]"
            />
            <input
              value={form.duration}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  duration: event.target.value,
                }))
              }
              placeholder="Длительность"
              className="min-h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition-colors focus:border-[#ff8a3d]"
            />
          </div>
          <input
            value={form.category}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                category: event.target.value,
              }))
            }
            placeholder="Категория"
            className="min-h-12 rounded-2xl border border-black/10 bg-white px-4 text-sm outline-none transition-colors focus:border-[#ff8a3d]"
          />
          <button
            type="submit"
            className="min-h-12 cursor-pointer rounded-2xl bg-[#111] px-5 py-3 text-center text-sm font-bold uppercase tracking-[0.1em] text-white transition-transform duration-300 hover:-translate-y-0.5 sm:tracking-[0.14em]"
          >
            Добавить тренировку
          </button>
        </form>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-white/4 p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/45">
              Мой список
            </p>
            <h2 className="mt-3 text-3xl font-black uppercase leading-[0.95] text-white">
              Управление тренировками
            </h2>
          </div>
          <p className="text-sm leading-6 text-white/60">
            Удали ненужное или собери собственный сплит под себя.
          </p>
        </div>

        <div className="mt-6 grid gap-3">
          {items.map((item) => (
            <article
              key={item.id}
              className="grid gap-4 rounded-[1.6rem] border border-white/10 bg-black/20 p-4 sm:grid-cols-[1fr_auto] sm:items-center"
            >
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#ff8a3d] px-3 py-1 text-center text-[11px] font-bold tracking-[0.04em] text-white">
                    {item.category}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-center text-[11px] font-bold tracking-[0.04em] text-white/70">
                    {item.day}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-center text-[11px] font-bold tracking-[0.04em] text-white/70">
                    {item.duration}
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-black uppercase leading-[0.95] text-white">
                  {item.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => removeItem(item.id)}
                className="min-h-11 cursor-pointer rounded-2xl border border-white/10 px-4 py-3 text-center text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors duration-300 hover:bg-white/10"
              >
                Удалить
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

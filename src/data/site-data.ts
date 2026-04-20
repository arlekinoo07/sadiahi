export const weeklyPlan = [
  {
    week: "Неделя 01",
    title: "Старт базы",
    goal: "Фундамент выносливости",
    accent: "bg-[#f25f4c]",
    volume: "3 тренировки",
    focus: ["Мобилити", "Кардио zone 2", "Контроль кора"],
  },
  {
    week: "Неделя 02",
    title: "Ритм и контроль",
    goal: "Качество движения",
    accent: "bg-[#ff8a3d]",
    volume: "4 тренировки",
    focus: ["Темповые круги", "Стабильность таза", "Дыхание"],
  },
  {
    week: "Неделя 03",
    title: "Набор силы",
    goal: "Сила нижней части тела",
    accent: "bg-[#ffb703]",
    volume: "4 тренировки",
    focus: ["Паттерн приседа", "Задняя цепь", "Перенос веса"],
  },
  {
    week: "Неделя 04",
    title: "Взрывная фаза",
    goal: "Мощность и скорость",
    accent: "bg-[#5cb85c]",
    volume: "4 тренировки",
    focus: ["Толкание саней", "Прыжковые серии", "Короткие спринты"],
  },
  {
    week: "Неделя 05",
    title: "Плотность нагрузки",
    goal: "Рабочая емкость",
    accent: "bg-[#00a6a6]",
    volume: "5 тренировок",
    focus: ["EMOM-блоки", "Канаты", "Темп восстановления"],
  },
  {
    week: "Неделя 06",
    title: "Пиковая неделя",
    goal: "Интенсивные интервалы",
    accent: "bg-[#118ab2]",
    volume: "5 тренировок",
    focus: ["Анаэробные отрезки", "Плиометрика", "Тяговые упражнения"],
  },
  {
    week: "Неделя 07",
    title: "Резкость и темп",
    goal: "Скорость и точность",
    accent: "bg-[#5e60ce]",
    volume: "4 тренировки",
    focus: ["Реактивные drills", "Лестница", "Взрывной кор"],
  },
  {
    week: "Неделя 08",
    title: "Разгрузка и тест",
    goal: "Восстановление и замер",
    accent: "bg-[#8338ec]",
    volume: "3 тренировки",
    focus: ["Мягкая мобилити", "Контрольный забег", "Тест с весом тела"],
  },
] as const;

export const statCards = [
  { label: "Длительность", value: "8 недель" },
  { label: "Сессии", value: "32 всего" },
  { label: "Восстановление", value: "2 reset-дня" },
  { label: "Цель", value: "Рельеф + сила" },
] as const;

export const intensitySteps = [
  { label: "Недели 1-2", width: "w-3/12", color: "bg-[#f25f4c]" },
  { label: "Недели 3-4", width: "w-5/12", color: "bg-[#ffb703]" },
  { label: "Недели 5-6", width: "w-8/12", color: "bg-[#00a6a6]" },
  { label: "Недели 7-8", width: "w-11/12", color: "bg-[#8338ec]" },
] as const;

export const splitDays = [
  { day: "Пн", title: "Ноги + кор", time: "55 мин" },
  { day: "Вт", title: "Кардио интервалы", time: "40 мин" },
  { day: "Ср", title: "Мобилити + растяжка", time: "25 мин" },
  { day: "Чт", title: "Верх тела на силу", time: "50 мин" },
  { day: "Пт", title: "Атлетический круг", time: "45 мин" },
  { day: "Сб", title: "Длинная ходьба / бег", time: "60 мин" },
] as const;

export const pageLinks = [
  { href: "/", label: "Главная" },
  { href: "/plan", label: "План" },
  { href: "/workouts", label: "Тренировки" },
  { href: "/recovery", label: "Восстановление" },
] as const;

export const recoveryCards = [
  {
    title: "Сон",
    value: "7-8 часов",
    text: "Самый важный восстановительный блок во всем цикле.",
  },
  {
    title: "Питание",
    value: "Белок + вода",
    text: "Собираем рацион вокруг белка, овощей и нормального питьевого режима.",
  },
  {
    title: "Легкая активность",
    value: "8-10k шагов",
    text: "Низкоинтенсивное движение между тренировками ускоряет восстановление.",
  },
] as const;

export type WorkoutItem = {
  id: string;
  name: string;
  day: string;
  duration: string;
  category: string;
};

export const defaultWorkoutItems: WorkoutItem[] = [
  {
    id: "preset-1",
    name: "Ноги и кор",
    day: "Понедельник",
    duration: "55 мин",
    category: "Сила",
  },
  {
    id: "preset-2",
    name: "Интервальный бег",
    day: "Вторник",
    duration: "40 мин",
    category: "Кардио",
  },
  {
    id: "preset-3",
    name: "Мобилити и растяжка",
    day: "Среда",
    duration: "25 мин",
    category: "Восстановление",
  },
];

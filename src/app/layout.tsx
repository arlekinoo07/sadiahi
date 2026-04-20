import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "План тренировок на 8 недель",
  description: "Многостраничный тренировочный сайт на Next.js с редактором тренировок.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full">
        <div className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,138,61,0.22),_transparent_28%),radial-gradient(circle_at_85%_10%,_rgba(94,96,206,0.24),_transparent_24%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0))]" />

          <div className="relative z-10 flex min-h-screen flex-col">
            <header className="sticky top-0 z-20 border-b border-white/8 bg-black/35 backdrop-blur-xl">
              <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                <div className="flex items-center justify-between gap-4">
                  <Link href="/" className="cursor-pointer">
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffd6a5] sm:text-xs sm:tracking-[0.28em]">
                      Sidiahi Training
                    </p>
                    <p className="mt-1 text-sm text-white/55">
                      Личный тренировочный сайт
                    </p>
                  </Link>
                </div>

                <SiteNav />
              </div>
            </header>

            <div className="flex-1">{children}</div>

            <footer className="border-t border-white/8">
              <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-white/52 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                <p className="max-w-xl">
                  Тренировочный сайт на Next.js без тяжелой базы данных.
                </p>
                <p className="max-w-xl lg:text-right">
                  Редактирование тренировок работает локально в браузере.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}

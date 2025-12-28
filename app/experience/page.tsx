// app/experience/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { experience } from "./experience-data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Megha Kalal Experience",
};

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Experience</h1>

      <div className="grid grid-cols-[200px,1fr] gap-x-6">
        <div className="text-neutral-500 font-semibold">
          Aug 2025 - Dec 2025
        </div>
        <div className="space-y-2 pb-6 border-l pl-4 border-neutral-200 dark:border-neutral-700">
          <div className="relative">
            <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
            Teaching Assistant, <b>University of Maryland</b>
          </div>
        </div>

        <div className="text-neutral-500 font-semibold">
          May 2025 - Dec 2025
        </div>
        <div className="space-y-2 pb-6 border-l pl-4 border-neutral-200 dark:border-neutral-700">
          <div className="relative">
            <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
            Student Advisor, <b>University of Maryland</b>
          </div>
        </div>

        <div className="text-neutral-500 font-semibold">
          May 2025 - Aug 2025
        </div>
        <div className="space-y-2 pb-6 border-l pl-4 border-neutral-200 dark:border-neutral-700">
          <div className="relative">
            <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
            Software Engineering Intern, <b>Horizon World Salon</b>
          </div>
        </div>

        <div className="text-neutral-500 font-semibold">
          Jan 2025 - Mar 2025
        </div>
        <div className="space-y-2 pb-6 border-l pl-4 border-neutral-200 dark:border-neutral-700">
          <div className="relative">
            <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
            Research Assistant, <b>University of Maryland</b>
          </div>
        </div>

        <div className="text-neutral-500 font-semibold">
          Aug 2023 - Apr 2024
        </div>
        <div className="space-y-2 pb-6 border-l pl-4 border-neutral-200 dark:border-neutral-700">
          <div className="relative">
            <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
            Software Engineer, <b>DWD Merchant Assoc.</b>
          </div>
        </div>

        <div className="text-neutral-500 font-semibold">
          Mar 2021 - Apr 2023
        </div>
        <div className="space-y-2 pb-6 border-l pl-4 border-neutral-200 dark:border-neutral-700">
          <div className="relative">
            <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
            Software Development Engineer, <b>Amazon</b>
          </div>
        </div>

        <div className="text-neutral-500 font-semibold">
          Jan 2020 - Feb 2021
        </div>
        <div className="space-y-2 pb-6 border-l pl-4 border-neutral-200 dark:border-neutral-700">
          <div className="relative">
            <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
            Software Engineer, <b>Delvit Solutions Pvt. Ltd.</b>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="space-y-6">
        {experience.map((item, i) => (
          <div
            key={i}
            className="rounded-xl bg-neutral-50 dark:bg-neutral-900/40 p-5 shadow-sm"
          >
            {/* Row 1: Role (left)  —  Date (right) */}
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold">{item.role}</h2>
              <span className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
                {item.dateRange}
              </span>
            </div>

            {/* Row 2: Company (left)  —  Location (right) */}
            <div className="mt-0.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.company}</span>
              </div>
              <span className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
                {item.location}
              </span>
            </div>

            {/* Bullets */}
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-relaxed">
              {item.bullets.map((b: string, idx: number) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

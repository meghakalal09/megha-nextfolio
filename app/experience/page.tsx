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
                {/* {item.url ? (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    (link)
                  </Link>
                ) : null} */}
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

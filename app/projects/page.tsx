// app/projects/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects by Megha Kalal",
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>

      <div className="space-y-5">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-neutral-50 dark:bg-neutral-900/40 p-4"
          >
            {/* header row: title (with optional link) on left, date on right */}
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-semibold leading-snug">
                {p.url ? (
                  <Link
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {p.title}
                  </Link>
                ) : (
                  p.title
                )}
              </h2>
              <span className="text-sm text-neutral-600 dark:text-neutral-400 whitespace-nowrap">
                {p.date}
              </span>
            </div>

            {/* short description */}
            <p className="mt-2 text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-200">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// app/education/page.tsx
import type { Metadata } from "next";
import { education, researchTeaching } from "./education-data";

export const metadata: Metadata = {
  title: "Education",
  description: "Education, research, and teaching – Megha Kalal",
};

export default function EducationPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Education</h1>

      {/* Education cards */}
      <div className="space-y-6">
        {education.map((ed, i) => (
          <div
            key={i}
            className="rounded-xl bg-neutral-50 dark:bg-neutral-900/40 p-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-semibold">{ed.school}</h2>
              <div className="text-neutral-600 dark:text-neutral-400">
                {ed.dateRange}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-neutral-800 dark:text-neutral-200">
                {ed.degree}
                {ed.gpa ? (
                  <span className="ml-2 text-neutral-600 dark:text-neutral-400">
                    GPA: {ed.gpa}
                  </span>
                ) : null}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                {ed.location}
              </p>
            </div>

            {ed.honors && ed.honors.length > 0 && (
              <ul className="mt-2 list-disc pl-5 space-y-1 text-[15px]">
                {ed.honors.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            )}

            {/* {ed.coursework && ed.coursework.length > 0 && (
              <p className="mt-2 text-[15px] leading-relaxed">
                <span className="font-medium">Coursework: </span>
                {ed.coursework.join(", ")}
              </p>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
}

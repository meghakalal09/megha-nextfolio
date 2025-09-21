"use client";

import { useState } from "react";
import { education, testimonials } from "./education-data";

export default function EducationPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Education</h1>

      {/* Education section */}
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

      {/* Testimonials slider */}
      <div className="mt-32 flex justify-center">
        <div className="w-full max-w-2xl bg-neutral-100 dark:bg-neutral-800 p-8 rounded-xl relative min-h-[220px] flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-6 text-center">
            What others say
          </h2>

          <p className="italic text-md leading-relaxed text-center">
            "{testimonials[currentIndex].text}"
          </p>
          <p className="mt-8 text-right font-medium">
            - {testimonials[currentIndex].author}
          </p>
          <p className="text-sm text-right text-neutral-600 dark:text-neutral-400">
            {testimonials[currentIndex].role}
          </p>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 bg-neutral-200 dark:bg-neutral-700 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-600"
          >
            ◀
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 bg-neutral-200 dark:bg-neutral-700 rounded-full w-8 h-8 flex items-center justify-center shadow-md hover:bg-neutral-300 dark:hover:bg-neutral-600"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}

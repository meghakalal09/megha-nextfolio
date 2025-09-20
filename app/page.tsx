// app/page.tsx
import Image from "next/image";

export default function Page() {
  return (
    <section>
      {/* Profile Photo */}
      <a target="_blank">
        <Image
          src="/profile.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 shadow-md"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      {/* Intro */}
      <h1 className="mb-8 text-2xl font-medium">Hey!</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm Megha, currently pursuing my Master's in Information Systems at
          the University of Maryland, College Park. I come from a background in
          Computer Science and Software Engineering, and I'm learning how to
          bridge the gap between technology, data, and strategic
          decision-making.
        </p>
        <p>
          My work has been a mix of backend systems, cloud infrastructure, data
          analytics, and digital transformation. Along the way, I've delved into
          business areas like project planning, system architecture, and
          implementation strategy.
        </p>
        <p>
          Having worked previously at Amazon and Delvit Solutions, I've built
          software at scale and also worn multiple hats across fast-paced teams.
          So if you're into building things, solving data problems, or just
          geeking out on system design, I'd love to connect!
        </p>
      </div>

      {/* Timeline */}

      <section className="max-w-3xl mx-auto">
        <h2 className="mt-12 mb-6 text-2xl font-semibold">Timeline</h2>

        <div className="grid grid-cols-[96px,1fr] gap-x-6">
          <div className="text-neutral-500 font-semibold">2025</div>
          <div className="space-y-2 pb-6 border-l pl-4 border-neutral-200 dark:border-neutral-700">
            <div className="relative">
              <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
              Maintaining a 3.97 GPA; expecting graduation in Dec 2025.
            </div>
            <div className="relative">
              <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
              Teaching Assistant under Dr. Bharti Motwani (HDFS, Spark, Neo4j,
              MongoDB, MapReduce).
            </div>
            <div className="relative">
              <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
              Software Engineering Intern at Horizon World Salon.
            </div>
            <div className="relative">
              <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
              Research Assistant with Prof. Anil K. Gupta.
            </div>
          </div>

          <div className="text-neutral-500 font-semibold">2024</div>
          <div className="space-y-2 pb-6 border-l pl-4 border-neutral-200 dark:border-neutral-700">
            <div className="relative">
              <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
              Started M.S. in Information Systems at Univerity of Maryland.
            </div>
            <div className="relative">
              <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
              Awarded Terrapin Scholarship for academic and professional
              excellence.
            </div>
          </div>

          <div className="text-neutral-500 font-semibold">2021</div>
          <div className="space-y-2 pb-6 border-l pl-4 border-neutral-200 dark:border-neutral-700">
            <div className="relative">
              <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
              Software Development Engineer I at Amazon.
            </div>
          </div>

          <div className="text-neutral-500 font-semibold">2020</div>
          <div className="space-y-2 pb-6 border-l pl-4 border-neutral-200 dark:border-neutral-700">
            <div className="relative">
              <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
              Converted Delvit Solutions internship to full-time.
            </div>
            <div className="relative">
              <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
              3x recipient of CNR Rao Merit Scholarship.
            </div>
            <div className="relative">
              <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
              Graduated PES University (First className with Distinction, GPA
              9.2/10).
            </div>
          </div>

          <div className="text-neutral-500 font-semibold">2018</div>
          <div className="space-y-2 pb-2 border-l pl-4 border-neutral-200 dark:border-neutral-700">
            <div className="relative">
              <span className="absolute -left-[22px] top-2 h-2 w-2 rounded-full bg-neutral-400"></span>
              Intern, Center for Cloud Computing & Big Data (PES University).
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

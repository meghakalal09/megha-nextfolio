import Image from "next/image";

export default function Page() {
  return (
    <section>
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
      <h1 className="mb-8 text-2xl font-medium">
        Hey!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm Megha, currently pursuing my Master's in Information Systems at the University of Maryland, College Park. 
          I come from a background in Computer Science and Software Engineering, and I'm learning how to bridge the gap between technology, data, and strategic decision-making.
        </p>
        <p>
          My work has been a mix of backend systems, data analytics, cloud infrastructure, and digital transformation. 
          Along the way, I've delved into business areas like project planning, system architecture, and implementation strategy, the parts that make technology not just buildable, but truly usable.
        </p>
        <p>
          Having worked previously at Amazon and Delvit Solutions, I've built software at scale and also worn multiple hats across fast-paced teams. 
          Right now, I'm interning as a Software Engineer at a startup while working part-time as a Research Assistant under 
          <a href='https://www.rhsmith.umd.edu/directory/anil-k-gupta' className="text-blue-600 hover:underline"> Prof.Anil Gupta</a>
          , at UMD.
        </p>
        <p>
          If you're into building things, solving data problems, or just geeking out on system design, I'd love to connect!
        </p>
      </div>
    </section>
  );
}

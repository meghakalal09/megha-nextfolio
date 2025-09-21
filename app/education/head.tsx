import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education",
  description: "Education, research, and teaching – Megha Kalal",
};

export default function Head() {
  return (
    <>
      <title>Education | Megha Kalal</title>
      <meta
        name="description"
        content="Education, research, and teaching – Megha Kalal"
      />
    </>
  );
}

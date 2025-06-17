// pages/work/[slug].tsx
import { GetStaticPaths, GetStaticProps } from "next";

const projects: {
  [key: string]: { title: string; description: string; image: string };
} = {
  amazonclone: {
    title: "Amazon Clone",
    description: "An e-commerce clone built using React, Node.js, and MongoDB.",
    image: "/images/amazonclone.png",
  },
  triangle: {
    title: "Triangle Wallet",
    description:
      "A crypto wallet UI built in Next.js with animation and wallet API.",
    image: "/images/triangle.png",
  },
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(projects).map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const project = projects[slug];

  return {
    props: { project },
  };
};

export default function ProjectDetail({ project }: { project: any }) {
  if (!project) return <p>Project not found.</p>;

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg text-gray-700">{project.description}</p>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mt-6"
      />
    </div>
  );
}

import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import React from "react";
import SectionIntro from "@/components/SectionIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import StylizedImage from "@/components/StylizedImage";
import imageLaptop from "../../images/laptop.jpg";
import List, { ListItem } from "@/components/List";
const projects = [
  { title: "Amazon Clone", slug: "amazonclone" },
  { title: "Bazar App", slug: "bazar" },
  { title: "Blog 101", slug: "blog101" },
];

export default function WorkIndex() {
  return (
    <>
      <SectionIntro
        eyebrow="Our Work"
        title=""
        className="mt-24 sm:mt-32 lg:mt-40"
      ></SectionIntro>
      <ul className="grid grid-cols-1 md:grid-cols-2  gap-y-4 mt-12 justify-center">
        {projects.map((project) => (
          <li key={project.slug} className="flex justify-center">
            <Link
              href={`/work/${project.slug}`}
              className="group block w-full max-w-sm rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900 shadow-lg overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-2xl hover:bg-white/90 dark:hover:bg-neutral-800"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-neutral-800">
                <StylizedImage
                  src={imageLaptop}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  A showcase of our work in {project.title}.
                </p>
                <span className="inline-block text-primary-600 dark:text-primary-400 font-medium mt-auto">
                  View details →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

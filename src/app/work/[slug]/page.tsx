// app/work/[slug]/page.tsx

import React from "react";
import SectionIntro from "@/components/SectionIntro";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import StylizedImage from "@/components/StylizedImage";
import imageLaptop from "../../../images/laptop.jpg";
import List, { ListItem } from "@/components/List";

interface ProjectData {
  [key: string]: {
    title: string;
    description: string;
    image: string;
  };
}

const projectData: ProjectData = {
  amazonclone: {
    title: "Amazon Clone",
    description: "An e-commerce clone with full cart and auth features.",
    image: "/images/amazonclone.png",
  },
  bazar: {
    title: "Bazar App",
    description: "Local market shopping app made in React Native.",
    image: "/images/bazar.png",
  },
  blog101: {
    title: "Blog 101",
    description: "Simple blogging platform with markdown support.",
    image: "/images/blog101.png",
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectData[params.slug];

  if (!project)
    return <div className="p-10 text-red-500">Project not found</div>;

  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="text-lg text-gray-600 mb-6">{project.description}</p>
      <img src={project.image} alt={project.title} className="rounded-lg" />
      <>
        <SectionIntro
          eyebrow="Our Work"
          title="We help you identify, explore and respond to new opportunities."
          className="mt-24 sm:mt-32 lg:mt-40"
        >
          <p>
            As long as those opportunities involve giving us money to
            re-purposes old projects — we can come up with an endless number of
            those.
          </p>
        </SectionIntro>
        <Container className="mt-16">
          <div className="lg:flex lg:items-center lg:justify-end">
            <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
              <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                <StylizedImage
                  src={imageLaptop}
                  sizes="(min-width: 1024px) 41rem, 31rem"
                  className="justify-center lg:justify-end"
                />
              </FadeIn>
            </div>
            {/* List item */}
            <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
              <ListItem title="Web development">
                We specialise in crafting beautiful, high quality marketing
                pages. The rest of the website will be a shell that uses lorem
                ipsum everywhere.
              </ListItem>
              <ListItem title="Application development">
                We have a team of skilled developers who are experts in the
                latest app frameworks, like Angular 1 and Google Web Toolkit.
              </ListItem>
              <ListItem title="E-commerce">
                We are at the forefront of modern e-commerce development. Which
                mainly means adding your logo to the Shopify store template
                we’ve used for the past six years.
              </ListItem>
              <ListItem title="Custom content management">
                At Studio we understand the importance of having a robust and
                customised CMS. That’s why we run all of our client projects out
                of a single, enormous Joomla instance.
              </ListItem>
            </List>
          </div>
        </Container>
      </>
    </div>
  );
}

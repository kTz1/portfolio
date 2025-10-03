import { portfolioProjects } from "@/constants";
import Image from "next/image";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import GithubIcon from "@/assets/icons/github.svg";
import { Card } from "@/components/Card";

export const Projects = () => {
  return (
    <section className="pb-16 lg:py-24 lg:mt-26 mt-20" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky "
              style={{
                top: `calc(64px + ${projectIndex * 20}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-linear-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>

                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <p className="flex flex-col gap-4 mt-4 md:mt-5 lg:h-32 text-ellipsis">
                    {project.description}
                  </p>

                  <a href={project.link} target="_blank" rel="noreferrer">
                    <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span className="">Website</span>
                      <ArrowUpRight className="size-4" />
                    </button>
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    <button className="bg-white text-gray-900 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center lg:ml-4 md:ml-4 gap-2 mt-8">
                      <span className="">GitHub</span>
                      <GithubIcon className="size-4" />
                    </button>
                  </a>
                </div>

                <div className="relative lg:min-h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-3xl lg:object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

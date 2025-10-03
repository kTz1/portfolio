"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { toolboxItems } from "@/constants/index";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import DownloadIcon from "@/assets/icons/download.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

export const About = () => {
  return (
    <div className="py-20 lg:py-28 mt-20" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8 mt-20">
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="I enjoy learning new things every day, solving real problems, and turning ideas into digital experiences that people can actually use. For me, development isn't just about writing clean code — it's about creating impact, improving experiences, and helping ideas grow. I like exploring design trends, discovering new technologies, and continuously challenging myself to think differently. I'm always open to collaboration, new projects, and opportunities that let me grow both as a developer and as a person."
              className=""
            />
          </Card>

          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Resume"
              description="Dive into my professional journey, skills, and experiences."
              className="py-6 md:py-6 px-6 md:px-6"
            />
            <div className="flex justify-center">
              <a
                href="/resume.pdf"
                download
                aria-label="Download my curriculum vitae (PDF)"
                className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-8 px-4 rounded-xl mt-4 lg:mt-2"
              >
                <DownloadIcon
                  className="size-6"
                  aria-hidden="true"
                  focusable="false"
                />
                <span className="font-semibold">Download</span>
              </a>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-8 mt-8">
          <div className="grid grid-cols-1 gap-8">
            <Card className="h-[320px] md:col-span-3 lg:col-span-2 relative">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
              <div className="absolute lg:block md:block hidden top-[-20px] right-[-10px]">
                <DotLottieReact
                  src="https://lottie.host/87f19efb-942e-4604-8f32-bfd353fd249f/GLGukMpeSF.lottie"
                  loop
                  autoplay
                  className="size-44"
                  aria-hidden="true"
                />
              </div>
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:40s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:25s]"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

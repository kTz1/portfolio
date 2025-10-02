"use client";

import { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import curriculumVitae from "@/assets/images/cv.png";
import Image from "next/image";
import { toolboxItems } from "@/constants/index";
import { hobbies } from "@/constants/index";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import DownloadIcon from "@/assets/icons/download.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";

export const About = () => {
  const constraintRef = useRef(null);

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
              description="Explore my interests and hobbies beyond the digital realm."
              className="px-6 py-6"
            />
          </Card>

          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Resume"
              description="Dive into my professional journey, skills, and experiences."
              className="py-6 md:py-6 px-6 md:px-6"
            />
            <div className="w-20 mx-auto md:mt-0">
              <Image
                src={curriculumVitae}
                alt="Curriculum vitae preview (PDF)"
              />
            </div>

            <div className="flex justify-center">
              <a
                href="/resume.pdf"
                download
                aria-label="Download my curriculum vitae (PDF)"
                className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-10 px-6 rounded-xl mt-4"
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
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
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

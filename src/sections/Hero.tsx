import ContactIcon from "@/assets/icons/contact.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import DeconstructedRobot from "@/assets/images/deconstructed-robot-dark.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { HeroOrbit } from "@/components/HeroOrbit";

export const Hero = () => {
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_70%,transparent)]">
        {/* background image */}
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        {/* rings */}
        <div className="size-[620px] hero-ring" />
        <div className="size-[820px] hero-ring" />
        <div className="size-[1020px] hero-ring" />
        <div className="size-[1220px] hero-ring" />

        {/* stars*/}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={150}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="3s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      {/* content */}
      <div className="container">
        {/*<div className="flex flex-col items-center z-10">
          <DeconstructedRobot className="w-[300px]" />
          <span className="text-white/60 font-mono">I&apos;m a</span>{" "}
          <span className="text-emerald-300 font-mono">copilot</span>
        </div>*/}
        <div className="flex flex-col items-center">
          <span className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Hi there, I&apos;m -
          </span>
          <h1 className="font-bold text-6xl md:text-8xl text-center mt-4 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
            Catalin Simon
          </h1>
        </div>

        <div className="max-w-lg mx-auto">
          <p className="mt-4 text-center text-white/60 md:text-lg">
            <b>Self-taught developer</b> and <b>freelancer</b> with a strong
            passion for learning and building practical solutions.
          </p>
        </div>

        <div className="flex justify-center mt-6 mb-6">
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center absolute inset-x-0 gap-4">
          <button
            className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl mt-4"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="font-semibold">My Work</span>
            <ArrowDown className="size-4 animate-bounce" />
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl mt-4"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ContactIcon className="size-6" />
            <span className="font-semibold">Contact</span>
          </button>
        </div>
      </div>
    </div>
  );
};

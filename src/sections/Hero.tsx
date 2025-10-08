import ContactIcon from "@/assets/icons/contact.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { HeroOrbit } from "@/components/HeroOrbit";
import HeroButtons from "@/components/HeroButtons";

export const Hero = () => {
  return (
    <div
      className="py-24 md:py-40 lg:py-20 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_70%,transparent)]">
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
      <div className="container lg:max-w-6xl lg:mx-auto">
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Text Content - Left side on large screens, top on smaller screens */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-serif text-3xl md:text-4xl text-center mt-8 tracking-wide">
              Hi there, I&apos;m -
            </h3>
            <h1 className="font-bold text-5xl md:text-7xl text-center mt-4 bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
              Catalin Simon
            </h1>

            <div className="max-w-lg mt-4">
              <p className="mt-4 text-center text-white/60 md:text-lg">
                <b>Self-taught developer</b> and <b>freelancer</b> with a strong
                passion for learning and building practical solutions.
              </p>
            </div>

            <div className="mt-6 mb-6 sm:mb-2">
              <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
                <div className="bg-green-500 size-2.5 rounded-full relative">
                  <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
                </div>
                <div className="text-sm font-medium">
                  Available for new projects
                </div>
              </div>
            </div>

            {/* Large screens */}
            <HeroButtons className="hidden lg:flex items-center gap-4 mt-8" />
          </div>
          {/* Animation - Right side on large screens, below text on smaller screens */}
          <div className="relative lg:static mt-2 flex justify-center">
            <DotLottieReact
              src="https://lottie.host/70c23966-0c60-4f23-b005-697bc6a2aa0c/c5DoKva9eK.lottie"
              loop
              autoplay
              className="size-[400px] sm:size-[250px] md:size-[400px] lg:size-[600px]"
              aria-hidden="true"
            />
          </div>

          {/* Small/medium screens */}
          <HeroButtons className="lg:hidden flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 mb-8" />
        </div>
      </div>
    </div>
  );
};

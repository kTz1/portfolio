import ContactIcon from "@/assets/icons/contact.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";

const scrollToSection = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

const HeroButtons = ({ className = "" }: { className?: string }) => (
  <div className={`flex gap-4 ${className}`}>
    <button
      type="button"
      className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl cursor-pointer"
      onClick={() => scrollToSection("projects")}
    >
      <span className="font-semibold">My Work</span>
      <ArrowDown className="size-4 animate-bounce" />
    </button>

    <button
      type="button"
      className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl cursor-pointer"
      onClick={() => scrollToSection("contact")}
    >
      <ContactIcon className="size-6" />
      <span className="font-semibold">Contact</span>
    </button>
  </div>
);

export default HeroButtons;

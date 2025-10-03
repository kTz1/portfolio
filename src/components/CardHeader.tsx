import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-col p-6 md:py-6 md:px-6 sm:py-4 sm:px-4",
        className
      )}
    >
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </div>
      <p className="flex text-sm lg:text-base text-white/60 mt-4">
        {description}
      </p>
    </div>
  );
};

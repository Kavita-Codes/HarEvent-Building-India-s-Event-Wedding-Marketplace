import { useState } from "react";
import {
  Search,
  Compass,
  BadgeCheck,
  SlidersHorizontal,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    title: "More Choices, One Platform",
    description:
      "Explore a wide range of event professionals and services across multiple categories.",
    Icon: Search,
  },
  {
    title: "Convenient Discovery",
    description:
      "Find relevant vendors without having to search across multiple platforms.",
    Icon: Compass,
  },
  {
    title: "Compare with Confidence",
    description:
      "Review available portfolios, services, pricing information, and genuine customer feedback.",
    Icon: BadgeCheck,
  },
  {
    title: "Your Event, Your Preferences",
    description:
      "Discover professionals according to your occasion, location, style, and budget.",
    Icon: SlidersHorizontal,
  },
  {
    title: "Direct Vendor Connections",
    description:
      "Communicate with the professionals you choose to discuss your requirements.",
    Icon: MessageCircle,
  },
];

export default function WhyChooseHarEvent() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { title, description, Icon } = features[activeIndex];

  return (
    <section className="w-full overflow-hidden bg-[#fef0e1] px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
      {/* Section Heading */}
      <div className="mx-auto mb-6 max-w-[1100px] text-center">
        <div className="mb-3 flex items-center justify-center gap-3">
          <span className="h-[2px] w-[30px] bg-[#ed0870]" />

          <p className="font-poppins text-[13px] font-bold uppercase tracking-[2px] text-[#ed0870]">
            Your Event, Your Way
          </p>

          <span className="h-[2px] w-[30px] bg-[#ed0870]" />
        </div>

        <h2 className="font-playfair text-[30px] font-bold leading-tight text-[#35121e]">
          Why Choose HarEvent?
        </h2>

        <p className="mx-auto mt-2 max-w-[1000px] font-poppins text-[15px] leading-[1.6] text-[#69534d]">
          Finding the right event professionals shouldn't be complicated.
          HarEvent brings event discovery and vendor connections together
          in one convenient place.
        </p>
      </div>

      {/* Feature Navigation and Card */}
      <div className="mx-auto grid w-full max-w-[1350px] grid-cols-1 items-center gap-6 lg:grid-cols-[0.85fr_2fr] lg:gap-8">
        {/* Left Side */}
        <div className="flex flex-col gap-2">
          {features.map((feature, index) => {
            const selected = activeIndex === index;

            return (
              <button
                key={feature.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-pressed={selected}
                className={`group w-full rounded-xl border px-4 py-2.5 text-left transition-all duration-300 sm:px-5 ${
                  selected
                    ? "border-[#ffb4bd] bg-white/55 shadow-[0_8px_20px_rgba(237,8,112,0.10)]"
                    : "border-transparent hover:border-[#f7c8b8] hover:bg-white/30"
                }`}
              >
                <span
                  className={`block font-playfair text-[24px] leading-none ${
                    selected ? "text-[#ed0870]" : "text-[#f18e9b]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="mt-1.5 block font-poppins text-[16px] font-semibold leading-snug text-[#35121e]">
                  {feature.title}
                </span>

                <span className="mt-3 block h-[4px] w-full overflow-hidden rounded-full bg-[#f8dcd1]">
                  <span
                    className={`block h-full rounded-full bg-gradient-to-r from-[#ed0870] to-[#ff7900] transition-all duration-300 ${
                      selected ? "w-[76%]" : "w-0 group-hover:w-[25%]"
                    }`}
                  />
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Side Card */}
        <div
          key={activeIndex}
          className="flex min-h-[240px] flex-col justify-center rounded-[20px] border border-[#ffb68e] bg-white/20 px-5 py-5 sm:min-h-[270px] sm:px-7 sm:py-6 lg:min-h-[300px] lg:px-9"
        >
          <div className="mb-4 flex h-[56px] w-[56px] items-center justify-center rounded-[16px] bg-gradient-to-br from-[#ffe0e6] to-[#ffeadc]">
            <Icon
              size={28}
              strokeWidth={1.8}
              className="text-[#ed0870]"
            />
          </div>

          <span className="mb-2 font-playfair text-[36px] font-bold leading-none text-[#f18e9b]">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <h3 className="font-playfair text-[26px] font-bold leading-tight text-[#35121e] sm:text-[30px] lg:text-[34px]">
            {title}
          </h3>

          <p className="mt-3 max-w-[700px] font-poppins text-[15px] leading-[1.7] text-[#69534d]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
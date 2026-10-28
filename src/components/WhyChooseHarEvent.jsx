import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  Cake,
  Heart,
  Gem,
  GlassWater,
  ArrowRight,
  UsersRound,
  ShieldCheck,
  Zap,
} from "lucide-react";

const showcaseCards = [
  {
    title: "Corporate Events",
    icon: Building2,
    image: "/Corporate Summit Networking Reception.png",
    rotation: -16,
    translateY: 18,
    scale: 0.86,
    zIndex: 10,
    path: "/events/corporate-events",
  },
  {
    title: "Birthdays",
    icon: Cake,
    image: "/Joyful Birthday Cake Celebration.png",
    rotation: -8,
    translateY: 6,
    scale: 0.93,
    zIndex: 20,
    path: "/events/birthdays",
  },
  {
    title: "Weddings",
    icon: Heart,
    image: "/Opulent Indian Garden Wedding Mandap.png",
    rotation: 0,
    translateY: -8,
    scale: 1.05,
    zIndex: 30,
    isHero: true,
    path: "/events/weddings",
  },
  {
    title: "Engagements",
    icon: Gem,
    image: "/Rohan and Eisha’s Floral Engagement.png",
    rotation: 8,
    translateY: 6,
    scale: 0.93,
    zIndex: 20,
    path: "/events/engagements",
  },
  {
    title: "Anniversaries",
    icon: GlassWater,
    image: "/Romantic Anniversary Cake Cutting Celebration.png",
    rotation: 16,
    translateY: 18,
    scale: 0.86,
    zIndex: 10,
    path: "/events/anniversaries",
  },
];

const keyFeatures = [
  {
    title: "Wide Variety",
    description: "Explore professionals across multiple categories",
    icon: UsersRound,
  },
  {
    title: "Trusted Vendors",
    description: "Verified and reliable event professionals",
    icon: ShieldCheck,
  },
  {
    title: "Easy & Convenient",
    description: "Find, compare and connect all in one place",
    icon: Zap,
  },
];

export default function WhyChooseHarEvent() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#fff8fa] px-4 py-0 font-poppins sm:px-6 lg:px-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-20 top-16 -z-10 h-72 w-72 rounded-full bg-gradient-to-tr from-pink-300/30 to-orange-200/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 h-80 w-80 rounded-full bg-gradient-to-bl from-rose-200/30 to-pink-100/40 blur-3xl" />

      <div className="mx-auto max-w-[1440px]">
        {/* Top Header section - centered, single-line text, tight padding */}
        <div className="mx-auto mb-3 flex flex-col items-center pt-3 text-center sm:mb-4 sm:pt-4">
          <div className="flex items-center justify-center gap-2.5 text-[11px] font-bold uppercase tracking-[1.5px] text-[#ed0055]">
            <span className="h-[2px] w-6 rounded-full bg-[#ed0055]" />
            <span>YOUR EVENT, YOUR WAY</span>
            <span className="h-[2px] w-6 rounded-full bg-[#ed0055]" />
          </div>

          <h2 className="mt-1 font-playfair text-[28px] font-bold leading-tight tracking-[-0.5px] text-[#1f1625] sm:text-[34px] lg:text-[36px]">
            Why Choose HarEvent?
          </h2>

          <p className="mt-1 max-w-5xl text-center text-[13px] leading-normal text-[#6b6370] sm:text-[14px]">
            Finding the right event professionals shouldn&apos;t be complicated.
            HarEvent brings event discovery and vendor connections together in
            one convenient place.
          </p>
        </div>

        {/* Main 2-column Grid */}
        <div className="grid items-center gap-8 pb-4 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16 sm:pb-6">
          {/* Left Column: Interactive 3D Fanned Cards Showcase */}
          <div className="relative flex items-center justify-center py-2 sm:py-4">
            {/* Background circular ambient blob behind cards */}
            <div className="pointer-events-none absolute h-[260px] w-[260px] rounded-full bg-gradient-to-tr from-[#ed0055]/15 via-[#ff7900]/15 to-transparent blur-2xl sm:h-[340px] sm:w-[340px]" />

            {/* Fanned Cards Wrapper */}
            <div className="relative flex items-center justify-center -space-x-10 sm:-space-x-12 lg:-space-x-14 max-sm:scale-[0.82] max-sm:origin-center">
              {showcaseCards.map((card, idx) => {
                const Icon = card.icon;
                const isHovered = hoveredIndex === idx;
                const isAnyHovered = hoveredIndex !== null;

                // Dynamic transform for interactive 3D fanning
                const baseTransform = `rotate(${card.rotation}deg) translateY(${card.translateY}px) scale(${card.scale})`;
                const hoverTransform =
                  "rotate(0deg) translateY(-26px) scale(1.14)";

                return (
                  <button
                    key={card.title}
                    type="button"
                    onClick={() => navigate(card.path)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(idx)}
                    onBlur={() => setHoveredIndex(null)}
                    aria-label={`View ${card.title}`}
                    style={{
                      transform: isHovered ? hoverTransform : baseTransform,
                      zIndex: isHovered ? 40 : card.zIndex,
                    }}
                    className={`group relative h-[225px] w-[145px] shrink-0 cursor-pointer rounded-2xl border-[3px] border-white bg-white shadow-[0_14px_30px_rgba(237,0,85,0.12),0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-400 ease-[cubic-bezier(0.2,0.9,0.25,1.35)] outline-none sm:h-[265px] sm:w-[172px] sm:rounded-[22px] lg:h-[285px] lg:w-[185px] ${
                      isHovered
                        ? "shadow-[0_24px_48px_rgba(237,0,85,0.28),0_8px_20px_rgba(0,0,0,0.12)] ring-2 ring-[#ed0055]"
                        : isAnyHovered
                        ? "opacity-90"
                        : "opacity-100"
                    }`}
                  >
                    {/* Card Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full rounded-[13px] object-cover transition-transform duration-500 ease-out group-hover:scale-105 sm:rounded-[19px]"
                      loading="lazy"
                    />

                    {/* Gradient overlay at bottom for pill contrast */}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 rounded-b-[13px] bg-gradient-to-t from-black/60 via-black/15 to-transparent sm:rounded-b-[19px]" />

                    {/* Bottom Pill Badge */}
                    <div
                      className={`absolute bottom-2.5 inset-x-2.5 flex items-center justify-center gap-1.5 rounded-full bg-white/95 px-2 py-1.5 shadow-md backdrop-blur-md transition-all duration-300 group-hover:bg-white sm:bottom-3 sm:inset-x-3 sm:px-2.5 sm:py-2 ${
                        card.isHero ? "ring-1 ring-[#ed0055]/30" : ""
                      }`}
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#ed0055] to-[#ff7900] text-white shadow-xs sm:h-6 sm:w-6">
                        <Icon size={12} strokeWidth={2.2} />
                      </span>
                      <span className="truncate text-[11px] font-semibold text-[#1f1625] sm:text-[12px]">
                        {card.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Platform Information & Features */}
          <div className="flex flex-col items-start">
            {/* Pill Tag */}
            <span className="inline-flex items-center rounded-full bg-[#ffe8f0] px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#ed0055]">
              ALL YOUR EVENTS, ONE PLATFORM
            </span>

            {/* Heading */}
            <h3 className="mt-3.5 font-sans text-[27px] font-bold leading-[1.2] tracking-[-0.5px] text-[#1f1625] sm:text-[34px] lg:text-[35px]">
              Discover, Plan and Celebrate with the{" "}
              <span className="bg-gradient-to-r from-[#ed0055] to-[#ff7900] bg-clip-text text-transparent">
                Right Professionals
              </span>
            </h3>

            {/* Subtext */}
            <p className="mt-3.5 text-[14px] leading-relaxed text-[#6b6370] sm:text-[15px]">
              From intimate gatherings to grand celebrations, HarEvent helps
              you find trusted event professionals, compare options, and connect
              easily.
            </p>

            {/* Action Button */}
            <button
              type="button"
              onClick={() => navigate("/event-categories")}
              className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#ed0055] to-[#ff7900] px-7 py-3 text-[14px] font-semibold text-white shadow-lg shadow-[#ed0055]/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-[#ed0055]/35 active:scale-95 sm:text-[15px]"
            >
              <span>Explore Events</span>
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* 3 Key Feature Callouts with Dividers */}
            <div className="mt-8 grid w-full grid-cols-1 divide-y divide-rose-100 border-t border-rose-100/80 pt-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {keyFeatures.map((feat) => {
                const FeatIcon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="flex flex-col items-start px-2 py-3 sm:px-4 sm:py-1 first:pl-0 last:pr-0"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff0f4] text-[#ed0055] shadow-xs">
                      <FeatIcon size={20} strokeWidth={2} />
                    </span>

                    <h4 className="mt-3 text-[14px] font-bold text-[#1f1625]">
                      {feat.title}
                    </h4>

                    <p className="mt-1 text-[12px] leading-snug text-[#7a7080]">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

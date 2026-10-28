import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Heart,
  Cake,
  Gem,
  BriefcaseBusiness,
  Baby,
  GlassWater,
  Flower2,
  Camera,
  UsersRound,
  PartyPopper,
  ArrowUpRight,
} from "lucide-react";

const events = [
  { title: "Weddings", icon: Heart, path: "/events/weddings", color: "pink" },
  { title: "Birthdays", icon: Cake, path: "/events/birthdays", color: "orange" },
  { title: "Engagements", icon: Gem, path: "/events/engagements", color: "pink" },
  {
    title: "Corporate Events",
    icon: BriefcaseBusiness,
    path: "/events/corporate-events",
    color: "orange",
  },
  { title: "Baby Showers", icon: Baby, path: "/events/baby-showers", color: "pink" },
  {
    title: "Anniversaries",
    icon: GlassWater,
    path: "/events/anniversaries",
    color: "orange",
  },
  { title: "Receptions", icon: Flower2, path: "/events/receptions", color: "pink" },
  {
    title: "Pre-Wedding Events",
    icon: Camera,
    path: "/events/pre-wedding-events",
    color: "orange",
  },
  {
    title: "Naming Ceremonies",
    icon: Baby,
    path: "/events/naming-ceremonies",
    color: "pink",
  },
  {
    title: "Family & Social Gatherings",
    icon: UsersRound,
    path: "/events/family-social-gatherings",
    color: "orange",
  },
  {
    title: "Farewell & Retirement",
    icon: PartyPopper,
    path: "/events/farewell-retirement",
    color: "pink",
  },
];

const COLOR_VARIANTS = {
  pink: {
    accentText: "text-[#ed0055]",
    hoverText: "group-hover:text-[#ed0055]",
    ringBorder: "border-[#ed0055]/16",
    hoverBorder: "group-hover:border-[#ed0055]/16",
    hoverShadow: "group-hover:shadow-[0_18px_36px_rgba(237,0,85,0.22),0_0_0_6px_rgba(237,0,85,0.035)]",
    cornerGlow: "bg-gradient-to-br from-white/0 to-[rgba(237,0,85,0.22)]",
    radialGlow: "bg-[radial-gradient(circle,rgba(237,0,85,0.22),transparent_70%)]",
    iconFilter: "group-hover:drop-shadow-[0_5px_7px_rgba(237,0,85,0.22)]",
  },
  orange: {
    accentText: "text-[#ff7900]",
    hoverText: "group-hover:text-[#ff7900]",
    ringBorder: "border-[#ff7900]/16",
    hoverBorder: "group-hover:border-[#ff7900]/16",
    hoverShadow: "group-hover:shadow-[0_18px_36px_rgba(255,121,0,0.22),0_0_0_6px_rgba(255,121,0,0.035)]",
    cornerGlow: "bg-gradient-to-br from-white/0 to-[rgba(255,121,0,0.22)]",
    radialGlow: "bg-[radial-gradient(circle,rgba(255,121,0,0.22),transparent_70%)]",
    iconFilter: "group-hover:drop-shadow-[0_5px_7px_rgba(255,121,0,0.22)]",
  },
};

const STAGGER_DELAYS = [
  "delay-[0ms]",
  "delay-[65ms]",
  "delay-[130ms]",
  "delay-[195ms]",
  "delay-[260ms]",
  "delay-[325ms]",
  "delay-[390ms]",
  "delay-[455ms]",
  "delay-[520ms]",
  "delay-[585ms]",
  "delay-[650ms]",
];

function EventCard({ event, index, visible, navigate }) {
  const Icon = event.icon;
  const colors = COLOR_VARIANTS[event.color];
  const delayClass = STAGGER_DELAYS[index] || "delay-0";

  return (
    <button
      type="button"
      onClick={() => navigate(event.path)}
      aria-label={`Explore ${event.title}`}
      className={`group flex w-full min-w-0 flex-col items-center rounded-2xl px-1 pb-2 pt-1 text-center outline-none transition-[opacity,transform] duration-[650ms] ease-[cubic-bezier(0.2,0.8,0.25,1)] focus-visible:ring-2 focus-visible:ring-[#ed0055] focus-visible:ring-offset-4 ${delayClass} ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-95"
      }`}
    >
      <span
        className={`relative flex h-[116px] w-[116px] shrink-0 items-center justify-center rounded-full border border-white/80 bg-[linear-gradient(145deg,#ffffff,#fff0f5)] shadow-[0_10px_30px_rgba(237,0,85,0.08)] isolate transition-all duration-[450ms] ease-[cubic-bezier(0.2,0.9,0.25,1.35)] sm:h-[132px] sm:w-[132px] lg:h-[142px] lg:w-[142px] max-sm:group-hover:-translate-y-1 max-sm:group-hover:scale-[1.03] sm:group-hover:-translate-y-2 sm:group-hover:scale-[1.06] ${colors.hoverBorder} ${colors.hoverShadow}`}
      >
        {/* Outer animated rotating ring */}
        <span
          className={`pointer-events-none absolute inset-2 -z-10 rounded-full border ${colors.ringBorder} transition-[inset,transform] duration-500 ease-out group-hover:-inset-[5px] group-hover:rotate-[35deg]`}
        />

        {/* Ambient radial glow from bottom-right */}
        <span
          className={`pointer-events-none absolute -bottom-[5%] -right-[5%] -z-10 h-[75%] w-[75%] rounded-full ${colors.radialGlow} transition-transform duration-400 ease-out group-hover:scale-[1.4]`}
        />

        {/* Soft top-left highlight */}
        <span className="pointer-events-none absolute left-[13%] top-[12%] h-[36%] w-[36%] rounded-full bg-white/70 blur-xl" />

        {/* Corner glow */}
        <span
          className={`pointer-events-none absolute bottom-0 right-0 h-[48%] w-[48%] rounded-tl-full rounded-br-full ${colors.cornerGlow} opacity-70`}
        />

        {/* Subtle shine sweep on hover */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <span className="pointer-events-none absolute -left-full -top-[65%] h-[230%] w-[65%] rotate-[32deg] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-[left,opacity] duration-700 ease-out group-hover:left-[140%] group-hover:opacity-100" />
        </span>

        {/* Icon */}
        <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl">
          <Icon
            className={`h-10 w-10 sm:h-[43px] sm:w-[43px] transition-all duration-400 ease-[cubic-bezier(0.2,0.9,0.25,1.35)] group-hover:scale-110 ${colors.accentText} ${colors.iconFilter}`}
            strokeWidth={1.7}
          />
        </span>

        {/* Corner arrow button */}
        <span className="absolute -bottom-1 -right-1 z-20 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#ed0055] to-[#ff7900] text-white shadow-lg transition-all duration-300 ease-[cubic-bezier(0.2,0.9,0.25,1.4)] max-sm:opacity-100 max-sm:translate-x-0 max-sm:translate-y-0 max-sm:scale-100 sm:opacity-0 sm:-translate-x-2 sm:translate-y-1.5 sm:scale-75 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100">
          <ArrowUpRight size={19} strokeWidth={2} />
        </span>
      </span>

      {/* Label */}
      <span
        className={`mt-4 block max-w-[190px] text-center text-[15px] font-medium leading-[1.55] text-[#241a23] transition-colors duration-300 ${colors.hoverText}`}
      >
        {event.title}
      </span>

      {/* Expanding underline */}
      <span className="mt-1.5 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#ed0055] to-[#ff7900] transition-[width] duration-300 group-hover:w-[30px]" />
    </button>
  );
}

export default function Events() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate w-full overflow-hidden bg-[#fffdfd] px-4 py-12 font-poppins sm:px-6 sm:py-14 lg:px-8 lg:py-16 motion-reduce:[&_*]:transition-none"
    >
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-pink-200/40 blur-[90px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-orange-200/40 blur-[90px]" />

      <div className="mx-auto w-full max-w-[1440px]">
        <header
          className={`mb-10 text-center transition-all duration-800 ease-[cubic-bezier(0.2,0.8,0.25,1)] sm:mb-12 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-7"
          }`}
        >
          <div className="mb-3 flex items-center justify-center gap-2.5 text-[12px] font-semibold tracking-[2px] text-[#ed0055]">
            <span className="h-[3px] w-6 rounded-full bg-gradient-to-r from-[#ed0055] to-[#ff7900]" />
            <span className="text-[13px] font-bold">OCCASIONS &amp; GATHERINGS</span>
            <span className="h-[2px] w-6 rounded-full bg-gradient-to-r from-[#ff7900] to-[#ed0055]" />
          </div>

          <h2 className="font-playfair text-[36px] font-bold leading-tight tracking-[-0.5px] text-[#21151d]">
            Explore Events
          </h2>

          <p className="mx-auto mt-3 max-w-3xl text-[16px] font-normal leading-7 text-[#77717b]">
            Whatever the occasion, discover the right professionals and
            services to make it special.
          </p>
        </header>

        {/* Row 1: Six equally spaced circles (12-column grid on desktop) */}
        <div className="grid grid-cols-2 items-start justify-items-center gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-12 lg:gap-x-5">
          {events.slice(0, 6).map((event, index) => (
            <div
              key={event.title}
              className="flex w-full justify-center lg:col-span-2"
            >
              <EventCard
                event={event}
                index={index}
                visible={visible}
                navigate={navigate}
              />
            </div>
          ))}
        </div>

        {/* Row 2: Five circles centered between row 1 circles */}
        <div className="mt-7 grid grid-cols-2 items-start justify-items-center gap-x-3 gap-y-8 sm:mt-8 sm:grid-cols-3 sm:gap-x-5 sm:gap-y-10 lg:mt-11 lg:grid-cols-12 lg:gap-x-5">
          {events.slice(6).map((event, index) => (
            <div
              key={event.title}
              className={`flex w-full justify-center lg:col-span-2 ${
                index === 0 ? "lg:col-start-2" : ""
              }`}
            >
              <EventCard
                event={event}
                index={index + 6}
                visible={visible}
                navigate={navigate}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

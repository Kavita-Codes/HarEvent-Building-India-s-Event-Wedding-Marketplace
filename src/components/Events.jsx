import { useCallback, useId, useRef, useState, useSyncExternalStore } from "react";
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
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

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
    icon: "text-[#ed0055]",
    tint: "from-[#FFE7EF] to-[#FFF3E9]",
    vivid: "from-[#ed0055] to-[#ff6a3d]",
    blob: "bg-[radial-gradient(circle_at_70%_70%,rgba(237,0,85,0.26),rgba(237,0,85,0)_70%)]",
    corner: "bg-gradient-to-br from-white/0 to-[rgba(237,0,85,0.22)]",
    labelHover: "group-hover:text-[#ed0055]",
    orbRing: "group-hover:ring-[#F7C7D7]",
    orbShadow:
      "group-hover:shadow-[0_26px_46px_rgba(237,0,85,0.22),inset_0_1px_0_rgba(255,255,255,0.9)]",
  },
  orange: {
    icon: "text-[#ff7900]",
    tint: "from-[#FFEBD2] to-[#FFF5EA]",
    vivid: "from-[#ff7900] to-[#ffa42b]",
    blob: "bg-[radial-gradient(circle_at_70%_70%,rgba(255,121,0,0.26),rgba(255,121,0,0)_70%)]",
    corner: "bg-gradient-to-br from-white/0 to-[rgba(255,121,0,0.22)]",
    labelHover: "group-hover:text-[#ff7900]",
    orbRing: "group-hover:ring-[#FFD6AC]",
    orbShadow:
      "group-hover:shadow-[0_26px_46px_rgba(255,121,0,0.22),inset_0_1px_0_rgba(255,255,255,0.9)]",
  },
};

const EASE_OUT = [0.22, 1, 0.36, 1];
const TILT_SPRING = { stiffness: 200, damping: 20, mass: 0.5 };
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/* The section reads the motion preference itself so the first paint already
   knows whether to animate; useSyncExternalStore avoids a setState-in-effect
   flash and keeps the listener cleanup in one place. */
function usePrefersReducedMotion() {
  const subscribe = useCallback((onStoreChange) => {
    const query = window.matchMedia(REDUCED_MOTION_QUERY);
    query.addEventListener("change", onStoreChange);
    return () => query.removeEventListener("change", onStoreChange);
  }, []);

  const getSnapshot = useCallback(
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    [],
  );

  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}

function EventCard({ event, index, dimmed, reduced, navigate }) {
  const Icon = event.icon;
  const colors = COLOR_VARIANTS[event.color];
  const gradientId = useId().replace(/:/g, "");

  /* Pointer position inside the card, normalised to 0..1 */
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(pointerY, [0, 1], [8, -8]), TILT_SPRING);
  const rotateY = useSpring(useTransform(pointerX, [0, 1], [-10, 10]), TILT_SPRING);
  const glareX = useTransform(pointerX, (value) => `${value * 100}%`);
  const glareY = useTransform(pointerY, (value) => `${value * 100}%`);
  const boundsRef = useRef(null);

  /* The box is measured once on enter, from the untilted wrapper: measuring a
     rotated element on every move would feed its own transform back in. */
  const handleEnter = (pointerEvent) => {
    if (reduced) return;
    boundsRef.current = pointerEvent.currentTarget.getBoundingClientRect();
  };

  const handleMove = (pointerEvent) => {
    if (reduced) return;
    let bounds = boundsRef.current;
    if (!bounds) return;

    let fx = (pointerEvent.clientX - bounds.left) / bounds.width;
    let fy = (pointerEvent.clientY - bounds.top) / bounds.height;

    /* Pointer outside the cached box means layout moved: re-measure once */
    if (fx < -0.08 || fx > 1.08 || fy < -0.08 || fy > 1.08) {
      bounds = pointerEvent.currentTarget.getBoundingClientRect();
      boundsRef.current = bounds;
      fx = (pointerEvent.clientX - bounds.left) / bounds.width;
      fy = (pointerEvent.clientY - bounds.top) / bounds.height;
    }

    pointerX.set(fx);
    pointerY.set(fy);
  };

  const handleLeave = () => {
    boundsRef.current = null;
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <motion.div
      onMouseEnter={handleEnter}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ perspective: 1000 }}
      /* The wrapper carries the focus dim so it never fights the card's tilt */
      animate={{ opacity: dimmed ? 0.55 : 1, scale: dimmed ? 0.94 : 1 }}
      transition={{ duration: 0.45, ease: EASE_OUT }}
      className="flex w-full justify-center"
    >
      <motion.button
        type="button"
        onClick={() => navigate(event.path)}
        aria-label={`Explore ${event.title}`}
        initial={reduced ? false : { opacity: 0, y: 42, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-70px" }}
        transition={{ duration: 0.6, delay: (index % 6) * 0.07, ease: EASE_OUT }}
        whileHover={{ y: -10, transition: { duration: 0.35, ease: EASE_OUT } }}
        whileTap={{ scale: 0.97, transition: { duration: 0.12 } }}
        style={
          reduced
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="group relative flex w-full min-w-0 cursor-pointer flex-col items-center rounded-2xl px-1 pb-2 pt-1 text-center outline-none focus-visible:ring-2 focus-visible:ring-[#ed0055] focus-visible:ring-offset-4"
      >
        <span
          style={{ transformStyle: "preserve-3d" }}
          className={`relative flex h-[124px] w-[124px] shrink-0 items-center justify-center rounded-full bg-[linear-gradient(150deg,#ffffff,#fff4f8_55%,#fff7ee)] shadow-[0_14px_34px_rgba(237,0,85,0.10),inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-[#F6E6EB] transition-[box-shadow,ring-color] duration-500 ease-out sm:h-[136px] sm:w-[136px] ${colors.orbRing} ${colors.orbShadow}`}
        >
          {/* Ring that draws itself around the orb, plus its travelling spark */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            className="pointer-events-none absolute -inset-[7px] -rotate-90"
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ed0055" />
                <stop offset="100%" stopColor="#ff7900" />
              </linearGradient>
            </defs>
            <circle
              className="orb-ring"
              cx="50"
              cy="50"
              r="49"
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="1.5"
              strokeLinecap="round"
              pathLength="1"
            />
          </svg>
          <span
            aria-hidden="true"
            className="orb-spark pointer-events-none absolute -inset-[7px]"
          >
            <span className="absolute left-1/2 top-0 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#ed0055] to-[#ff7900] shadow-[0_0_0_3px_rgba(255,255,255,0.92)]" />
          </span>

          {/* Depth inside the glass, clipped to the orb */}
          <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <span
              className={`absolute -bottom-[10%] -right-[10%] h-[85%] w-[85%] rounded-full ${colors.blob} transition-transform duration-700 ease-out group-hover:scale-[1.25]`}
            />
            <span
              className={`absolute bottom-0 right-0 h-[48%] w-[48%] rounded-tl-full rounded-br-full ${colors.corner} opacity-70 transition-transform duration-700 ease-out group-hover:scale-110`}
            />
            <span className="absolute left-[10%] top-[8%] h-[46%] w-[46%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.92),rgba(255,255,255,0)_70%)]" />
            {/* Specular highlight that follows the cursor */}
            <motion.span
              aria-hidden="true"
              style={{ left: glareX, top: glareY }}
              className="absolute -ml-[62px] -mt-[62px] h-[124px] w-[124px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.85),rgba(255,255,255,0)_62%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            {/* Shine sweep */}
            <span className="absolute -left-full -top-[65%] h-[230%] w-[65%] rotate-[32deg] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-[left,opacity] duration-[900ms] ease-out group-hover:left-[140%] group-hover:opacity-100" />
          </span>

          {/* Icon medallion, lifted toward the viewer */}
          <span
            className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full"
            style={{ transform: "translateZ(38px)" }}
          >
            <span
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.tint} shadow-[inset_0_0_0_1px_rgba(255,255,255,0.7)]`}
            />
            <span
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${colors.vivid} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
            />
            <Icon
              className={`relative z-10 h-[38px] w-[38px] transition-[color,transform] duration-500 ease-[cubic-bezier(0.2,0.9,0.25,1.45)] group-hover:scale-110 group-hover:text-white ${colors.icon}`}
              strokeWidth={1.8}
            />
          </span>

          {/* Corner arrow, floating above everything */}
          <span
            style={{ transform: "translateZ(52px)" }}
            className="absolute -bottom-1 -right-1 z-20 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#ed0055] to-[#ff7900] text-white shadow-[0_8px_18px_rgba(237,0,85,0.35)] transition-[translate,scale,opacity] duration-300 ease-[cubic-bezier(0.2,0.9,0.25,1.4)] max-sm:opacity-100 max-sm:translate-x-0 max-sm:translate-y-0 max-sm:scale-100 sm:opacity-0 sm:-translate-x-2 sm:translate-y-1.5 sm:scale-75 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-0"
          >
            <ArrowUpRight size={19} strokeWidth={2} />
          </span>
        </span>

        {/* Label */}
        <span
          className={`mt-4 block max-w-[190px] text-[15px] font-medium leading-[1.55] text-[#241a23] transition-colors duration-300 ${colors.labelHover}`}
          style={{ transform: "translateZ(18px)" }}
        >
          {event.title}
        </span>

        {/* Expanding underline */}
        <span
          className="mt-1.5 h-[2px] w-0 rounded-full bg-gradient-to-r from-[#ed0055] to-[#ff7900] transition-[width] duration-500 ease-out group-hover:w-[46px]"
          style={{ transform: "translateZ(18px)" }}
        />
      </motion.button>
    </motion.div>
  );
}

export default function Events() {
  const navigate = useNavigate();
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  /* Cursor light: springs make it trail instead of sticking to the pointer */
  const spotX = useSpring(useMotionValue(-9999), {
    stiffness: 120,
    damping: 24,
    mass: 0.6,
  });
  const spotY = useSpring(useMotionValue(-9999), {
    stiffness: 120,
    damping: 24,
    mass: 0.6,
  });
  /* Fading beats teleporting the light away when the pointer leaves */
  const spotVisibility = useMotionValue(0);
  const spotOpacity = useSpring(spotVisibility, { stiffness: 140, damping: 26 });

  /* Depth: the two rows drift at different speeds as the section scrolls by */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const row1Y = useTransform(scrollYProgress, [0, 1], [12, -12]);
  const row2Y = useTransform(scrollYProgress, [0, 1], [26, -8]);

  const handleSpot = (pointerEvent) => {
    if (reduced) return;
    /* Measured on the section: it carries no transform, so the box stays
       correct while the page scrolls under the pointer */
    const bounds = pointerEvent.currentTarget.getBoundingClientRect();
    spotVisibility.set(1);
    spotX.set(pointerEvent.clientX - bounds.left);
    spotY.set(pointerEvent.clientY - bounds.top);
  };

  const focusIndex = reduced ? null : hovered;

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleSpot}
      onMouseLeave={() => spotVisibility.set(0)}
      className="relative isolate w-full overflow-hidden bg-white px-4 py-12 font-poppins sm:px-6 sm:py-14 lg:px-8 lg:py-16 motion-reduce:[&_*]:transition-none"
    >
      <style>{`
        /* Progress ring: pathLength="1" keeps the draw maths-free */
        .orb-ring {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          transition: stroke-dashoffset 0.85s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .group:hover .orb-ring,
        .group:focus-visible .orb-ring {
          stroke-dashoffset: 0;
        }

        /* The spark only orbits a card that is actually hovered */
        .orb-spark {
          opacity: 0;
          transition: opacity 0.45s ease;
        }

        .group:hover .orb-spark,
        .group:focus-visible .orb-spark {
          opacity: 1;
          animation: orb-turn 6s linear infinite;
        }

        @keyframes orb-turn {
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .orb-ring,
          .group:hover .orb-ring {
            transition: none;
            stroke-dashoffset: 0.62;
          }

          .orb-spark,
          .group:hover .orb-spark {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>

      {/* Cursor light */}
      {!reduced && (
        <motion.span
          aria-hidden="true"
          style={{ left: spotX, top: spotY, opacity: spotOpacity }}
          className="pointer-events-none absolute -z-10 -ml-[260px] -mt-[260px] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(237,0,85,0.10),rgba(255,121,0,0.07)_45%,transparent_72%)]"
        />
      )}

      <div className="pointer-events-none absolute -left-36 top-10 -z-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(237,0,85,0.09),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,121,0,0.11),transparent_70%)]" />

      <div className="mx-auto w-full max-w-[1440px]">
        <header className="mb-10 text-center sm:mb-12">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: -14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
            className="mb-3 flex items-center justify-center gap-2.5 text-[12px] font-semibold tracking-[2px] text-[#ed0055]"
          >
            <span className="h-[3px] w-6 rounded-full bg-gradient-to-r from-[#ed0055] to-[#ff7900]" />
            <span className="text-[13px] font-bold">OCCASIONS &amp; GATHERINGS</span>
            <span className="h-[2px] w-6 rounded-full bg-gradient-to-r from-[#ff7900] to-[#ed0055]" />
          </motion.div>

          <motion.h2
            initial={reduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE_OUT }}
            className="font-playfair text-[36px] font-bold leading-tight tracking-[-0.5px] text-[#21151d]"
          >
            Explore Events
          </motion.h2>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.55, delay: 0.32, ease: EASE_OUT }}
            className="mx-auto mt-3 max-w-3xl text-[16px] font-normal leading-7 text-[#77717b]"
          >
            Whatever the occasion, discover the right professionals and
            services to make it special.
          </motion.p>
        </header>

        {/* Row 1: Six equally spaced circles (12-column grid on desktop) */}
        <motion.div
          style={{ y: reduced ? 0 : row1Y }}
          className="mx-auto grid w-full max-w-[1440px] grid-cols-2 items-start justify-items-center gap-x-3 gap-y-7 sm:max-w-[1160px] sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-12 lg:gap-x-2"
        >
          {events.slice(0, 6).map((event, index) => (
            <div
              key={event.title}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="flex w-full justify-center lg:col-span-2"
            >
              <EventCard
                event={event}
                index={index}
                dimmed={focusIndex !== null && focusIndex !== index}
                reduced={reduced}
                navigate={navigate}
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2: Five circles centered between row 1 circles */}
        <motion.div
          style={{ y: reduced ? 0 : row2Y }}
          className="mx-auto mt-5 grid w-full max-w-[1440px] grid-cols-2 items-start justify-items-center gap-x-3 gap-y-7 sm:mt-6 sm:max-w-[1160px] sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 lg:mt-7 lg:grid-cols-12 lg:gap-x-2"
        >
          {events.slice(6).map((event, index) => (
            <div
              key={event.title}
              onMouseEnter={() => setHovered(index + 6)}
              onMouseLeave={() => setHovered(null)}
              className={`flex w-full justify-center lg:col-span-2 ${
                index === 0 ? "lg:col-start-2" : ""
              }`}
            >
              <EventCard
                event={event}
                index={index + 6}
                dimmed={focusIndex !== null && focusIndex !== index + 6}
                reduced={reduced}
                navigate={navigate}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

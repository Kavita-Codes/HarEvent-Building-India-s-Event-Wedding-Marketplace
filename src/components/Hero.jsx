import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import {
  Search,
  CalendarDays,
  Camera,
  MapPin,
  ChevronDown,
  Star,
} from "lucide-react";

const eventOptions = [
  "Weddings",
  "Birthdays",
  "Engagements",
  "Corporate Events",
  "Baby Showers",
  "Anniversaries",
  "Receptions",
  "Pre-Wedding Events",
  "Naming Ceremonies",
  "Family & Social Gatherings",
  "Farewell & Retirement",
];

const vendorOptions = [
  "Event Planner",
  "Photographer",
  "Venue",
  "Decorator",
  "Caterer",
  "Makeup Artist",
  "Entertainment",
];

const rotatingKeywords = [
  "Venues",
  "Photographers",
  "Caterers",
  "Decorators",
  "Event Planner",
  "Wedding Planner",
  "Makeup Artists",
];

/* Entrance presets: the hero plays on mount (it is above the fold), timed so
   the pieces land just as the brand intro panel lifts away. */
const EASE_OUT = [0.22, 1, 0.36, 1];

const rise = (delay) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

/* Opacity only: the search card hosts a `fixed` dropdown backdrop, and any
   transform on an ancestor would break that positioning. */
const fade = (delay) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE_OUT },
});

function Hero() {
  const [eventType, setEventType] = useState("");
  const [vendorCategory, setVendorCategory] = useState("");
  const [location, setLocation] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);

  const [keywordIndex, setKeywordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  /* Flashlight reveal: the dark overlay is masked away around the pointer so
     the venue photo shows through crisp underneath. The section rect is cached
     on enter and only re-measured once when the pointer leaves it, so every
     pointermove stays free of forced layout reads. */
  const prefersReducedMotion = useReducedMotion();
  const revealX = useSpring(useMotionValue(-9999), {
    stiffness: 140,
    damping: 24,
    mass: 0.5,
  });
  const revealY = useSpring(useMotionValue(-9999), {
    stiffness: 140,
    damping: 24,
    mass: 0.5,
  });
  const revealRadius = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 26,
    mass: 0.6,
  });
  const heroBoundsRef = useRef(null);

  const revealMask = useMotionTemplate`radial-gradient(circle ${revealRadius}px at ${revealX}px ${revealY}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 52%, rgba(0,0,0,0.7) 76%, rgba(0,0,0,1) 100%)`;

  const trackPointer = (pointerEvent) => {
    if (prefersReducedMotion || pointerEvent.pointerType === "touch") return;

    // The cursor can already be inside the hero on load, where no pointerenter
    // fires, so the first move also opens the reveal.
    if (revealRadius.get() === 0) revealRadius.set(240);

    let bounds = heroBoundsRef.current;

    if (!bounds) {
      bounds = pointerEvent.currentTarget.getBoundingClientRect();
      heroBoundsRef.current = bounds;
    }

    let x = pointerEvent.clientX - bounds.left;
    let y = pointerEvent.clientY - bounds.top;

    // Scroll, resize or the sticky header can move the cached box.
    if (x < -20 || y < -20 || x > bounds.width + 20 || y > bounds.height + 20) {
      bounds = pointerEvent.currentTarget.getBoundingClientRect();
      heroBoundsRef.current = bounds;
      x = pointerEvent.clientX - bounds.left;
      y = pointerEvent.clientY - bounds.top;
    }

    revealX.set(x);
    revealY.set(y);
  };

  const openReveal = (pointerEvent) => {
    if (prefersReducedMotion || pointerEvent.pointerType === "touch") return;

    heroBoundsRef.current = pointerEvent.currentTarget.getBoundingClientRect();
    revealRadius.set(240);
    trackPointer(pointerEvent);
  };

  const closeReveal = () => {
    heroBoundsRef.current = null;
    revealRadius.set(0);
  };

  useEffect(() => {
    const word = rotatingKeywords[keywordIndex];
    const delay = isDeleting ? 45 : typedText === word ? 1600 : 90;

    const timer = setTimeout(
      () => {
        if (!isDeleting && typedText === word) {
          setIsDeleting(true);
        } else if (isDeleting && typedText === "") {
          setIsDeleting(false);
          setKeywordIndex((index) => (index + 1) % rotatingKeywords.length);
        } else {
          setTypedText(word.slice(0, typedText.length + (isDeleting ? -1 : 1)));
        }
      },
      isDeleting && typedText === "" ? 280 : delay,
    );

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, keywordIndex]);

  const selectOption = (type, value) => {
    if (type === "event") {
      setEventType(value);
    } else {
      setVendorCategory(value);
    }

    setOpenDropdown(null);
  };

  const renderDropdown = (type, value, placeholder, options, Icon) => (
    <div className="relative w-full min-w-0">
      <button
        type="button"
        onClick={() => setOpenDropdown(openDropdown === type ? null : type)}
        aria-expanded={openDropdown === type}
        className="flex h-[44px] w-full min-w-0 items-center gap-2 rounded-[7px] border border-white/35 bg-white/5 px-3 text-left transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      >
        <Icon size={16} strokeWidth={2} className="shrink-0 text-white" />

        <span
          className={`min-w-0 flex-1 truncate font-poppins text-[12px] sm:text-[13px] ${
            value ? "font-medium text-white" : "font-normal text-white/90"
          }`}
        >
          {value || placeholder}
        </span>

        <ChevronDown
          size={15}
          strokeWidth={1.8}
          className={`shrink-0 text-white/90 transition-transform ${
            openDropdown === type ? "rotate-180" : ""
          }`}
        />
      </button>

      {openDropdown === type && (
        <>
          <button
            type="button"
            aria-label="Close dropdown"
            className="fixed inset-0 z-20 cursor-default"
            onClick={() => setOpenDropdown(null)}
          />

          <div
            tabIndex={0}
            role="listbox"
            aria-label={placeholder}
            onWheel={(e) => {
              e.preventDefault();
              e.currentTarget.scrollTop += e.deltaY;
            }}
            onKeyDown={(e) => {
              const menu = e.currentTarget;

              if (e.key === "ArrowDown") {
                e.preventDefault();
                menu.scrollTop += 40;
              }

              if (e.key === "ArrowUp") {
                e.preventDefault();
                menu.scrollTop -= 40;
              }

              if (e.key === "PageDown") {
                e.preventDefault();
                menu.scrollTop += menu.clientHeight;
              }

              if (e.key === "PageUp") {
                e.preventDefault();
                menu.scrollTop -= menu.clientHeight;
              }

              if (e.key === "Escape") {
                setOpenDropdown(null);
              }
            }}
            className="dropdown-menu absolute left-0 right-0 top-[calc(100%+6px)] z-30 max-h-[240px] overflow-x-hidden overflow-y-auto overscroll-contain rounded-lg border border-white/25 bg-[#24151B]/95 text-left shadow-xl backdrop-blur-xl focus:outline-none"
          >
            {options.map((option) => (
              <button
                key={option}
                type="button"
                role="option"
                aria-selected={value === option}
                onClick={() => selectOption(type, option)}
                className={`block w-full border-0 px-3 py-3 text-left font-poppins text-[12px] outline-none transition-colors duration-200 focus:outline-none sm:text-[13px] ${
                  value === option
                    ? "bg-gradient-to-r from-[#D4145A] to-[#FF7628] font-semibold text-white"
                    : "bg-transparent font-normal text-white/90 hover:bg-gradient-to-r hover:from-[#D4145A] hover:to-[#FF7628] hover:font-semibold hover:text-white"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );

  return (
    <main>
      <section
        onPointerEnter={openReveal}
        onPointerMove={trackPointer}
        onPointerLeave={closeReveal}
        className="relative flex min-h-[640px] items-center justify-center bg-[#24151B] px-4 py-12 sm:min-h-[660px] lg:min-h-[calc(100svh-68px)]"
      >
        <style>{`
          /* The venue photo settles into place right as the brand intro lifts away */
          .hero-bg {
            animation: hero-settle 2.8s cubic-bezier(0.22, 1, 0.36, 1) both;
          }
          @keyframes hero-settle {
            from {
              transform: scale(1.14);
            }
            to {
              transform: scale(1);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-bg {
              animation: none;
            }
          }
        `}</style>

        {/* The photo clips itself, not the section: overflow-hidden on the
            section would cut off the search dropdowns that hang below it. */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/hero.png"
            alt="Elegant wedding event venue"
            className="hero-bg h-full w-full object-cover object-center"
          />
        </div>

        <motion.div
          aria-hidden="true"
          style={{ WebkitMaskImage: revealMask, maskImage: revealMask }}
          className="absolute inset-0 bg-[#000000]/60"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1250px] text-center">
          <motion.div
            {...rise(0.1)}
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-orange-300/30 bg-black/40 px-4 py-2 font-poppins text-[10px] font-semibold uppercase tracking-wide text-[#FF8429] sm:text-[11px]"
          >
            <span className="flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#FF8429] to-[#FF7628]">
              <Star
                size={9}
                strokeWidth={2.5}
                fill="white"
                className="text-white"
              />
            </span>

            <span>India's Event &amp; Vendor Discovery Platform</span>
          </motion.div>

          <motion.h1
            {...rise(0.22)}
            className="mt-6 font-playfair text-[34px] font-bold leading-[1.15] text-white sm:text-[48px] md:text-[60px]"
          >
            <span className="block">Plan Your Perfect Event</span>

            <span className="mt-1 flex flex-wrap items-baseline justify-center gap-x-3 text-center sm:inline-flex sm:flex-nowrap">
              <span className="shrink-0 bg-gradient-to-r from-[#E50059] via-[#FF4D63] to-[#FF8429] bg-clip-text text-transparent">
                All in One Place..
              </span>

              <span className="relative inline-block h-[1.2em] w-[290px] max-w-full overflow-visible whitespace-nowrap text-center align-baseline bg-gradient-to-r from-[#E50059] via-[#FF4D63] to-[#FF8429] bg-clip-text text-transparent sm:w-[380px] sm:text-left md:w-[480px]">
                <span className="inline-block">{typedText}</span>

                <span
                  aria-hidden="true"
                  className="ml-1 inline-block h-[0.75em] w-[3px] translate-y-[2px] animate-pulse rounded-full bg-[#FF7628]"
                />
              </span>
            </span>
          </motion.h1>

          <motion.p
            {...rise(0.34)}
            className="mx-auto mt-4 max-w-[820px] font-poppins text-[15px] font-normal leading-[1.6] text-white/90 sm:text-[17px]"
          >
            Discover trusted event professionals, explore inspiring services,
            and connect with the right vendors to bring your special occasions
            to life.
          </motion.p>

          <motion.div
            {...fade(0.46)}
            className="mx-auto mt-8 w-full max-w-[940px] rounded-[12px] border border-white/30 bg-black/25 p-3 text-left shadow-xl backdrop-blur-md sm:p-4"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 items-center gap-2.5 sm:grid-cols-2 lg:grid-cols-[1fr_1.1fr_0.85fr_auto]"
            >
              {renderDropdown(
                "event",
                eventType,
                "Event Type",
                eventOptions,
                CalendarDays,
              )}

              {renderDropdown(
                "vendor",
                vendorCategory,
                "Vendor Category",
                vendorOptions,
                Camera,
              )}

              <div className="flex h-[44px] w-full min-w-0 items-center gap-2 rounded-[7px] border border-white/35 bg-white/5 px-3 transition-colors focus-within:bg-white/10">
                <MapPin
                  size={16}
                  strokeWidth={2}
                  className="shrink-0 text-white"
                />

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter city"
                  aria-label="Location"
                  className="w-full min-w-0 bg-transparent font-poppins text-[12px] font-medium text-white outline-none placeholder:font-normal placeholder:text-white/90 sm:text-[13px]"
                />
              </div>

              <button
                type="submit"
                className="flex h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-5 font-poppins text-[13px] font-semibold text-white shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Search size={16} strokeWidth={2.2} />
                Search Vendors
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

export default Hero;

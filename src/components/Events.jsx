import {
  ArrowRight,
  Baby,
  CakeSlice,
  Heart,
  PartyPopper,
  Sparkles,
  UsersRound,
  Video,
  Utensils,
  Building2,
  BriefcaseBusiness,
  Flower2,
  Star,
} from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SectionImage from "./SectionImage";

const events = [
  {
    name: "Weddings",
    description: "Discover venues, decorators, photographers, caterers, and wedding specialists.",
    image: "/Golden Mandap Wedding Ceremony.png",
    icon: Heart,
    vendorCount: "4,200+ Vendors",
  },
  {
    name: "Birthdays",
    description: "Find creative decor, cakes, entertainment, and party services.",
    image: "/Joyful Birthday Cake Celebration.png",
    icon: CakeSlice,
    vendorCount: "1,850+ Vendors",
  },
  {
    name: "Engagements",
    description: "Make your special moment memorable with the right event professionals.",
    image: "/Rohan and Eisha’s Floral Engagement.png",
    icon: Sparkles,
    vendorCount: "1,400+ Vendors",
  },
  {
    name: "Corporate Events",
    description: "Explore venues and services for meetings, conferences, and corporate celebrations.",
    image: "/Corporate Summit Networking Reception.png",
    icon: BriefcaseBusiness,
    vendorCount: "950+ Vendors",
  },
  {
    name: "Baby Showers",
    description: "Discover beautiful decorations and services for welcoming a little one.",
    image: "/Elegant Pastel Baby Shower Celebration.png",
    icon: Baby,
    vendorCount: "680+ Vendors",
  },
  {
    name: "Anniversaries",
    description: "Celebrate your milestones with personalized event experiences.",
    image: "/Romantic Anniversary Cake Cutting Celebration.png",
    icon: PartyPopper,
  },
  {
    name: "Receptions",
    description: "Find venues, decor, catering, and entertainment for your celebration.",
    image: "/Joyful Newlywed Entrance at Reception.png",
    icon: Utensils,
  },
  {
    name: "Pre-Wedding Events",
    description: "Explore photography, makeup, styling, and celebration services.",
    image: "/Golden Hour Pre-Wedding Celebration.png",
    icon: Video,
  },
  {
    name: "Naming Ceremonies",
    description: "Find professionals for your family's special occasion.",
    image: "/Elegant Indian Naming Ceremony Celebration.png",
    icon: Flower2,
  },
  {
    name: "Family & Social Gatherings",
    description: "Bring people together with services tailored to your gathering.",
    image: "/Joyful Indian Family Celebration.png",
    icon: UsersRound,
  },
  {
    name: "Farewell & Retirement",
    description: "Celebrate achievements and new beginnings with thoughtful event planning.",
    image: "/Farewell and Retirement Celebrations.png",
    icon: Building2,
  },
];

function Events() {
  const carouselRef = useRef(null);
  const [activePage, setActivePage] = useState(0);
  const pageCount = 4;

  const scrollToPage = (page) => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollTo({
      left: maxScroll * (page / (pageCount - 1)),
      behavior: "smooth",
    });
    setActivePage(page);
  };

  return (
    <section className="overflow-hidden bg-white px-5 py-9 sm:px-8 lg:px-9 lg:py-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-1 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#D4145A]" />
              <span className="!text-[10px] !font-bold !uppercase !tracking-[1.2px] !text-[#D4145A]">
                Occasions & Gatherings
              </span>
            </div>
            <h2 className="!font-sans !text-[24px] !font-bold !leading-[1.2] !tracking-[-0.3px] !text-[#30232B] sm:!text-[26px]">
              Explore Events
            </h2>
            <p className="mt-1 !text-[12px] !leading-4 !text-[#8A7580]">
              Whatever the occasion, discover the right professionals and services to make it special.
            </p>
          </div>
          <Link
            to="/event-categories"
            className="inline-flex h-8 w-fit shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#E60059] to-[#FF790D] px-4 !text-[10px] !font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            View All Events <ArrowRight size={12} />
          </Link>
        </div>

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onScroll={(event) => {
            const carousel = event.currentTarget;
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;
            const progress = maxScroll > 0 ? carousel.scrollLeft / maxScroll : 0;
            setActivePage(Math.round(progress * (pageCount - 1)));
          }}
        >
          {events.map(({ name, description, image, icon: Icon, vendorCount }) => (
            <Link
              key={name}
              to="/event-categories"
              className="group w-[72%] shrink-0 snap-start overflow-hidden rounded-[13px] border border-[#F1DDE5] bg-white transition duration-300 hover:border-[#E9B4C7] hover:shadow-[0_8px_20px_rgba(71,34,52,0.1)] sm:w-[42%] md:w-[22%] lg:w-[21.5%]"
            >
              <div className="relative overflow-hidden">
                <SectionImage
                  src={image}
                  alt={`${name} celebration`}
                  icon={Icon}
                  className="h-[165px] transition duration-500 group-hover:scale-[1.03] sm:h-[175px]"
                />
                {name === "Weddings" && (
                  <span className="absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-[#E60059] px-2 py-1 text-[9px] font-semibold leading-none text-white shadow-sm">
                    <Star size={9} fill="currentColor" strokeWidth={1.5} />
                    Popular
                  </span>
                )}
              </div>
              <div className="flex min-h-[96px] flex-col px-3 pb-2 pt-2.5">
                <h3 className="!font-sans !text-[14px] !font-semibold !leading-[1.2] text-[#382832]">
                  {name}
                </h3>
                <p className="mt-1 line-clamp-1 !text-[11px] !leading-4 !text-[#8A7580]">
                  {description}
                </p>
                <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#F2DDE5] pt-1.5">
                  {vendorCount ? (
                    <span className={`rounded-full px-2 py-1 !text-[9px] !font-semibold !leading-none ${
                      ["Birthdays", "Corporate Events"].includes(name)
                        ? "bg-[#FFF3E9] !text-[#F07814]"
                        : "bg-[#FFF1F6] !text-[#D4145A]"
                    }`}>
                      {vendorCount}
                    </span>
                  ) : <span />}
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white transition group-hover:scale-105 ${
                    ["Birthdays", "Corporate Events"].includes(name)
                      ? "bg-[#FF790D]"
                      : "bg-[#E60059]"
                  }`}>
                    <ArrowRight size={13} strokeWidth={2.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-center gap-1.5" aria-label="Event carousel pages">
          {Array.from({ length: pageCount }, (_, page) => (
            <button
              key={page}
              type="button"
              aria-label={`Show event page ${page + 1}`}
              aria-current={activePage === page ? "true" : undefined}
              onClick={() => scrollToPage(page)}
              className={`h-[6px] rounded-full transition-all ${
                activePage === page ? "w-[7px] bg-[#E60059]" : "w-[6px] bg-[#F1D7E1]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;

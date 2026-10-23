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
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionImage from "./SectionImage";

const events = [
  {
    name: "Weddings",
    description: "Discover venues, decorators, photographers, caterers, and wedding specialists.",
    image: "/Golden Mandap Wedding Ceremony.png",
    icon: Heart,
  },
  {
    name: "Birthdays",
    description: "Find creative decor, cakes, entertainment, and party services.",
    image: "/Joyful Birthday Cake Celebration.png",
    icon: CakeSlice,
  },
  {
    name: "Engagements",
    description: "Make your special moment memorable with the right event professionals.",
    image: "/Rohan and Eisha’s Floral Engagement.png",
    icon: Sparkles,
  },
  {
    name: "Corporate Events",
    description: "Explore venues and services for meetings, conferences, and corporate celebrations.",
    image: "/Corporate Summit Networking Reception.png",
    icon: BriefcaseBusiness,
  },
  {
    name: "Baby Showers",
    description: "Discover beautiful decorations and services for welcoming a little one.",
    image: "/Elegant Pastel Baby Shower Celebration.png",
    icon: Baby,
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
  return (
    <section className="overflow-hidden bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#D4145A]" />
              <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#D4145A]">
                Occasions & Gatherings
              </span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#30232B] sm:text-4xl">
              Explore Events
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#8A7580]">
              Whatever the occasion, discover the right professionals and services to make it special.
            </p>
          </div>
          <Link
            to="/event-categories"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            Explore All Events <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.map(({ name, description, image, icon: Icon }) => (
            <Link
              key={name}
              to="/event-categories"
              className="group overflow-hidden rounded-2xl border border-[#F1DDE5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <SectionImage
                src={image}
                alt={`${name} celebration`}
                icon={Icon}
                className="h-40"
              />
              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-bold text-[#382832]">{name}</h3>
                  <ArrowRight size={16} className="shrink-0 text-[#D4145A] transition group-hover:translate-x-1" />
                </div>
                <p className="mt-2 text-xs leading-5 text-[#8A7580]">{description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;

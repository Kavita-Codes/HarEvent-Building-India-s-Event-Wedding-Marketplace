import {
  ArrowRight,
  Camera,
  CakeSlice,
  Gift,
  Music2,
  PartyPopper,
  Sparkles,
  Utensils,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";
import SectionImage from "./SectionImage";

const categories = [
  {
    name: "Venues",
    description: "Explore banquet halls, wedding lawns, resorts, heritage venues, and celebration spaces.",
    image: "/Luxurious Ivory Floral Wedding Stage.png",
    icon: Building2,
    vendorCount: "4,000+ Vendors",
  },
  {
    name: "Event Planners",
    description: "Discover professionals who coordinate your event from concept to execution.",
    image: "/Elegant Banquet Table Inspection.png",
    icon: PartyPopper,
    vendorCount: "3,400+ Vendors",
    popular: true,
  },
  {
    name: "Photographers & Videographers",
    description: "Capture special moments through candid photography, cinematic films, and creative storytelling.",
    image: "/Golden Meadow Wedding Photoshoot.png",
    icon: Camera,
    vendorCount: "4,200+ Vendors",
  },
  {
    name: "Decorators",
    description: "Find floral arrangements, themed decorations, stage designs, and venue styling.",
    image: "/Lavish Nighttime Wedding Canopy.png",
    icon: Sparkles,
    vendorCount: "1,850+ Vendors",
  },
  {
    name: "Caterers",
    description: "Explore catering services offering diverse cuisines and menus for every occasion.",
    image: "/Golden Wedding Buffet Under Crystal Lights.png",
    icon: Utensils,
    vendorCount: "4,200+ Vendors",
  },
  {
    name: "Makeup & Mehendi Artists",
    description: "Discover bridal makeup, occasion styling, and intricate mehendi artistry.",
    image: "/Circle of Henna Hands.png",
    icon: CakeSlice,
    vendorCount: "6,850+ Vendors",
  },
  {
    name: "Entertainment",
    description: "Find DJs, live bands, performers, and entertainment services for your celebration.",
    image: "/Glittering Indian Wedding Dance Stage.png",
    icon: Music2,
    vendorCount: "5,200+ Vendors",
  },
  {
    name: "Invitations & Gifts",
    description: "Explore digital invitations, printed stationery, personalized gifts, and event favors.",
    image: "/Elegant Botanical Wedding Invitation Suite.png",
    icon: Gift,
    vendorCount: "150+ Vendors",
  },
];

function FindRightVendor() {
  return (
    <section className="bg-[#FFFAFC] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.2px] text-[#D4145A]">
              <span className="h-[2px] w-6 bg-[#D4145A]" />
              Curated Specialists
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#30232B] sm:text-4xl">
              Find the Right Vendor
            </h2>
            <p className="mt-1.5 text-sm leading-6 text-[#8A7580]">
              Discover professionals for every part of your event.
            </p>
          </div>
          <Link
            to="/vendor-categories"
            className="inline-flex h-9 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E60059] to-[#FF790D] px-4 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            View All Vendors <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ name, description, image, icon: Icon, vendorCount, popular }) => (
            <Link
              key={name}
              to="/vendor-categories"
              className="group overflow-hidden rounded-[14px] border border-[#F1DDE5] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#E9B4C7] hover:shadow-[0_10px_24px_rgba(71,34,52,0.12)]"
            >
              <div className="relative overflow-hidden">
                <SectionImage
                  src={image}
                  alt={`${name} portfolio`}
                  icon={Icon}
                  className="h-[180px] transition duration-500 group-hover:scale-[1.03]"
                />
                {popular && (
                  <span className="absolute left-3 top-3 rounded-full border border-[#F8D8E5] bg-white px-3 py-1 text-[10px] font-semibold leading-none text-[#E60059] shadow-sm">
                    Popular
                  </span>
                )}
              </div>
              <div className="flex min-h-[106px] flex-col px-3 pb-2 pt-2.5">
                <h3 className="text-sm font-semibold leading-snug text-[#382832]">{name}</h3>
                <p className="mt-1 line-clamp-2 text-xs leading-[1.35] text-[#8A7580]">
                  {description}
                </p>
                <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#F2DDE5] pt-1.5">
                  <span className={`rounded-full px-2 py-1 text-[9px] font-semibold leading-none ${
                    ["Event Planners", "Decorators", "Invitations & Gifts"].includes(name)
                      ? "bg-[#FFF3E9] text-[#F07814]"
                      : "bg-[#FFF1F6] text-[#D4145A]"
                  }`}>
                    {vendorCount}
                  </span>
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white transition group-hover:scale-105 ${
                    ["Event Planners", "Decorators", "Invitations & Gifts"].includes(name)
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
      </div>
    </section>
  );
}

export default FindRightVendor;

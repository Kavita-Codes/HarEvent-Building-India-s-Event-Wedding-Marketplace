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
    image: "/Elegant Banquet Table Inspection.png",
    icon: Building2,
  },
  {
    name: "Event Planners",
    description: "Discover professionals who coordinate your event from concept to execution.",
    image: "/Corporate Summit Networking Reception.png",
    icon: PartyPopper,
  },
  {
    name: "Photographers & Videographers",
    description: "Capture special moments through candid photography, cinematic films, and creative storytelling.",
    image: "/Golden Meadow Wedding Photoshoot.png",
    icon: Camera,
  },
  {
    name: "Decorators",
    description: "Find floral arrangements, themed decorations, stage designs, and venue styling.",
    image: "/Luxurious Ivory Floral Wedding Stage.png",
    icon: Sparkles,
  },
  {
    name: "Caterers",
    description: "Explore catering services offering diverse cuisines and menus for every occasion.",
    image: "/Golden Wedding Buffet Under Crystal Lights.png",
    icon: Utensils,
  },
  {
    name: "Makeup & Mehendi Artists",
    description: "Discover bridal makeup, occasion styling, and intricate mehendi artistry.",
    image: "/Circle of Henna Hands.png",
    icon: CakeSlice,
  },
  {
    name: "Entertainment",
    description: "Find DJs, live bands, performers, and entertainment services for your celebration.",
    image: "/Glittering Indian Wedding Dance Stage.png",
    icon: Music2,
  },
  {
    name: "Invitations & Gifts",
    description: "Explore digital invitations, printed stationery, personalized gifts, and event favors.",
    image: "/Elegant Botanical Wedding Invitation Suite.png",
    icon: Gift,
  },
];

function FindRightVendor() {
  return (
    <section className="bg-[#FFFAFC] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#D4145A]">
            Curated Specialists
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#30232B] sm:text-4xl">
            Find the Right Vendor
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#8A7580]">
            Every great event begins with the right people. Explore event professionals across a range of services and find the ones that match your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ name, description, image, icon: Icon }) => (
            <Link
              key={name}
              to="/vendor-categories"
              className="group overflow-hidden rounded-2xl border border-[#F1DDE5] bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <SectionImage
                src={image}
                alt={`${name} portfolio`}
                icon={Icon}
                className="h-36"
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

        <div className="mt-8 text-center">
          <Link
            to="/vendor-categories"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-6 py-3 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            View All Vendors <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FindRightVendor;

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
import { motion } from "motion/react";

const MotionLink = motion(Link);

const categories = [
  {
    name: "Venues",
    description:
      "Discover banquet halls, wedding lawns, resorts, heritage venues, and beautiful celebration spaces.",
    image: "/Luxurious Ivory Floral Wedding Stage.png",
    icon: Building2,
  },
  {
    name: "Event Planners",
    description:
      "Find experienced professionals to plan, organize, and coordinate your special occasion.",
    image: "/Elegant Banquet Table Inspection.png",
    icon: PartyPopper,
  },
  {
    name: "Photographers & Videographers",
    description:
      "Capture every special moment with candid photography and cinematic wedding films.",
    image: "/Golden Meadow Wedding Photoshoot.png",
    icon: Camera,
  },
  {
    name: "Decorators",
    description:
      "Explore floral arrangements, stunning mandaps, stage designs, and themed decorations.",
    image: "/Lavish Nighttime Wedding Canopy.png",
    icon: Sparkles,
  },
  {
    name: "Caterers",
    description:
      "Find catering professionals offering delicious menus for every kind of celebration.",
    image: "/Golden Wedding Buffet Under Crystal Lights.png",
    icon: Utensils,
  },
  {
    name: "Makeup & Mehendi Artists",
    description:
      "Discover bridal makeup, occasion styling, and intricate mehendi artistry.",
    image: "/Circle of Henna Hands.png",
    icon: CakeSlice,
  },
  {
    name: "Entertainment",
    description:
      "Make your celebration memorable with DJs, live bands, performers, and music.",
    image: "/Glittering Indian Wedding Dance Stage.png",
    icon: Music2,
  },
  {
    name: "Invitations & Gifts",
    description:
      "Discover elegant invitations, personalized gifts, stationery, and event favors.",
    image: "/Elegant Botanical Wedding Invitation Suite.png",
    icon: Gift,
  },
];

function FindRightVendor() {
  return (
    <section className="overflow-hidden bg-[#fef0e1] px-5 pb-14 pt-12 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20 lg:pt-16">
      <div className="mx-auto max-w-[1440px]">
        {/* Section Heading */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 flex items-center gap-2 font-poppins text-[12px] font-bold uppercase tracking-[1.2px] text-[#D4145A]">
              <span className="h-[2px] w-6 bg-[#D4145A]" />
              Curated Specialists
            </p>

            <h2 className="font-playfair text-3xl font-bold tracking-tight text-[#30232B] sm:text-4xl">
              Find the Right Vendor
            </h2>

            <p className="mt-1.5 text-[16px] leading-6 text-[#8A7580]">
              Discover professionals for every part of your event.
            </p>
          </div>

          <Link
            to="/vendor-categories"
            className="inline-flex h-9 w-fit shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E60059] to-[#FF790D] px-4 font-poppins text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            View All Vendors
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="vendor-scroll -mx-1 snap-x snap-mandatory overflow-x-auto px-1 pb-6 pt-2">
          <div className="flex items-stretch gap-3 sm:gap-4">
            {categories.map(
              ({ name, description, image, icon: Icon }, index) => (
                <MotionLink
                  key={name}
                  to="/vendor-categories"
                  aria-label={`Browse ${name}`}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="vendor-card group relative flex h-[340px] w-[calc((100%-12px)/2)] shrink-0 snap-start flex-col overflow-hidden rounded-[15px] border border-[#F1DDE5] bg-[#fef0e1] shadow-[0_2px_6px_rgba(71,34,52,0.05)] transition-[border-color,box-shadow] duration-500 hover:border-[#E9A0BA] hover:shadow-[0_4px_10px_rgba(71,34,52,0.07)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4145A] focus-visible:ring-offset-2 sm:h-[355px] sm:w-[calc((100%-16px)/2)] lg:h-[370px] lg:w-[calc((100%-48px)/4)]"
                >
                  {/* Blurred Background Image */}
                  <div className="absolute inset-0 overflow-hidden bg-[#2a1620]">
                    <img
                      src={image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full scale-125 object-cover blur-2xl"
                    />

                    {/* Full Image */}
                    <img
                      src={image}
                      alt={`${name} portfolio`}
                      loading="lazy"
                      className="vendor-card-image absolute inset-0 h-full w-full object-contain object-center transition-transform duration-[850ms] ease-out group-hover:scale-[1.04]"
                    />
                  </div>

                  {/* Image Contrast Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/5 via-black/15 to-black/80 transition-all duration-500 group-hover:to-black/90" />

                  {/* Light Sweep */}
                  <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:left-full group-hover:opacity-100" />

                  {/* Card Content */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-3.5 pb-[18px]">
                    <div className="vendor-card-content translate-y-1.5 transition-transform duration-500 ease-out group-hover:translate-y-0">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-[#E60059] text-white shadow-md transition-colors duration-300 group-hover:bg-white group-hover:text-[#E60059]">
                          <Icon size={15} strokeWidth={2} />
                        </span>

                        <h3 className="min-w-0 grow font-poppins text-[13px] font-bold leading-snug text-white drop-shadow-sm sm:text-[14px]">
                          {name}
                        </h3>

                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/95 text-[#D4145A] shadow-md transition-transform duration-300 ease-out group-hover:translate-x-[3px]">
                          <ArrowRight size={13} strokeWidth={2.6} />
                        </span>
                      </div>

                      {/* Description on Hover */}
                      <p className="vendor-card-description line-clamp-2 max-h-0 overflow-hidden text-[12px] leading-[1.5] text-white/90 opacity-0 transition-all duration-500 ease-out group-hover:mt-2 group-hover:max-h-[62px] group-hover:opacity-100">
                        {description}
                      </p>
                    </div>
                  </div>

                  {/* Inner Border */}
                  <span className="pointer-events-none absolute inset-0 rounded-[14px] border border-white/0 transition-colors duration-500 group-hover:border-white/40" />
                </MotionLink>
              )
            )}
          </div>
        </div>
      </div>

      <style>{`
        .vendor-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          overscroll-behavior-x: contain;
        }

        .vendor-scroll::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        .vendor-card {
          -webkit-tap-highlight-color: transparent;
          isolation: isolate;
        }

        @media (hover: hover) and (pointer: fine) {
          .vendor-card-description {
            transition-property: max-height, opacity, margin-top;
          }
        }

        @media (hover: none) {
          .vendor-card .vendor-card-content {
            transform: translateY(0);
          }

          .vendor-card .vendor-card-description {
            max-height: 62px;
            margin-top: 8px;
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .vendor-card,
          .vendor-card * {
            transition-duration: 0.01ms !important;
          }

          .vendor-scroll {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}

export default FindRightVendor;
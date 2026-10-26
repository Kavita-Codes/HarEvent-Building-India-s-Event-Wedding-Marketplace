
import {
  ArrowRight,
  AudioLines,
  Building2,
  Cake,
  Camera,
  Heart,
  ShieldCheck,
  Star,
  Utensils,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

// Custom lotus icon for Royal Florist
function LotusIcon({ size = 35 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 31C12.3 25.5 11.5 17.5 18 6C24.5 17.5 23.7 25.5 18 31Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 31C9.5 31 4 25 4 17C11 17.5 15.5 22 18 31Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 31C26.5 31 32 25 32 17C25 17.5 20.5 22 18 31Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const highlights = [
  {
    title: "Verified Vendors",
    detail: "Only trusted &\nauthentic providers",
    icon: ShieldCheck,
  },
  {
    title: "Quality\nAssured",
    detail: "Top-rated pros\nacross India",
    icon: Star,
  },
  {
    title: "15,000+\nPartners",
    detail: "Across Tier-1 &\nTier-2 cities",
    icon: UsersRound,
  },
];

const categories = [
  {
    name: "Royal Florist",
    category: "Flower Decor",
    icon: LotusIcon,
    color: "pink",
  },
  {
    name: "Lumiere Studios",
    category: "Photography",
    icon: Camera,
    color: "orange",
  },
  {
    name: "Food Atelier",
    category: "Catering",
    icon: Utensils,
    color: "pink",
  },
  {
    name: "After Weddings",
    category: "Wedding Planning",
    icon: Heart,
    color: "pink",
    popular: true,
  },
  {
    name: "Vibe Events",
    category: "DJ & Entertainment",
    icon: AudioLines,
    color: "orange",
  },
  {
    name: "Grand Stays",
    category: "Venues",
    icon: Building2,
    color: "pink",
  },
  {
    name: "Sweet Delights",
    category: "Cake & Desserts",
    icon: Cake,
    color: "orange",
  },
];

function BrandsAndPartners() {
  return (
    <section className="w-full overflow-hidden bg-white px-5 pb-[22px] pt-[34px] sm:px-8 lg:px-[4.55%]">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading and statistics */}
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.05fr_1.55fr] lg:gap-7">

          {/* Left content */}
          <div className="min-w-0">
            <p className="mb-[10px] flex items-center gap-[9px] text-[12px] font-bold uppercase tracking-[1.25px] text-[#E60059]">
              <span className="h-[2px] w-[30px] bg-[#E60059]" />
              Network Excellence
            </p>

            <h2 className="text-[30px] font-semibold leading-[1.18] tracking-[-0.8px] text-[#292327] sm:text-[36px]">
              Trusted Brands &{" "}
              <span className="font-serif font-semibold text-[#D4145A]">
                Partners
              </span>
            </h2>

            <p className="mt-[12px] max-w-[530px] text-[15.5px] leading-[1.42] text-[#8D7A85]">
              Work with certified event service providers who bring quality,
              reliability and creativity to your special moments.
            </p>
          </div>

          {/* Right content */}
          <div className="flex min-w-0 flex-col items-end gap-[10px] lg:flex-row lg:items-center">

            {/* Trust statistics panel */}
            <ul className="grid h-[87px] w-full min-w-0 flex-1 grid-cols-3 items-center rounded-[16px] border border-[#F5D7E1] bg-[#FFFAFC] px-[7px] sm:px-[8px]">
              {highlights.map(({ title, detail, icon: Icon }, index) => (
                <li
                  key={title}
                  className={`flex h-[58px] min-w-0 items-center gap-[7px] px-[7px] ${
                    index > 0 ? "border-1 border-[#F0DDE5]" : ""
                  }`}
                >
                  <span className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full border border-[#F7D5E1] bg-white text-[#E60059] shadow-sm">
                    <Icon
                      size={17}
                      strokeWidth={2}
                      fill={index === 1 ? "currentColor" : "none"}
                    />
                  </span>

                  <span className="min-w-0">
                    <span className="block whitespace-pre-line text-[12px] font-bold leading-[1.12] text-[#30272C]">
                      {title}
                    </span>

                    <span className="mt-[2px] block whitespace-pre-line text-[10px] leading-[1.15] text-[#95838C] sm:text-[11px]">
                      {detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Button below the panel, aligned right */}
            <Link
              to="/vendor-categories"
              className="inline-flex h-[35px] shrink-0 items-center justify-center gap-[8px] rounded-full bg-gradient-to-r from-[#E60059] to-[#FF790D] px-[18px] !text-[12px] font-semibold text-white transition hover:brightness-95"
            >
              View all partners
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>
        </div>

        {/* Partner cards */}
        <div className="mt-[35px] grid grid-cols-2 gap-[10px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {categories.map(({ name, category, icon: Icon, color, popular }) => (
            <Link
              key={name}
              to="/vendor-categories"
              className={`group relative flex h-[210px] min-w-0 flex-col items-center rounded-[16px] border px-[6px] pt-[32px] transition-all duration-200 ${
                popular
                  ? "border-[#F58AB4] bg-gradient-to-b from-[#FFF9FB] to-[#FFF5F8] shadow-[0_2px_5px_rgba(212,20,90,0.17)]"
                  : "border-[#F2D7E1] bg-white shadow-[0_1px_2px_rgba(70,25,45,0.04)] hover:border-[#F58AB4]"
              }`}
            >
              {/* Popular badge */}
              {popular && (
                <span className="absolute -top-[9px] right-[10px] flex h-[20px] items-center gap-[4px] rounded-full bg-[#E60059] px-[10px] text-[10px] font-semibold text-white">
                  <Star size={10} fill="currentColor" />
                  Popular
                </span>
              )}

              {/* Icon background */}
              <span
                className={`mb-[12px] flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-[15px] text-white transition-transform duration-200 group-hover:scale-105 ${
                  color === "pink" ? "bg-[#E60059]" : "bg-[#FF790D]"
                }`}
              >
                {name === "Royal Florist" ? (
                  <LotusIcon size={35} />
                ) : name === "After Weddings" ? (
                  <Heart size={31} strokeWidth={1.3} />
                ) : (
                  <Icon size={31} strokeWidth={2.3} />
                )}
              </span>

              {/* Vendor name */}
              <span className="max-w-full text-center text-[13px] font-bold leading-[1.2] text-[#382A32]">
                {name}
              </span>

              {/* Category label */}
              <span
                className={`mt-[10px] flex h-[24px] max-w-full items-center justify-center whitespace-nowrap rounded-full px-[11px] text-[10px] font-semibold leading-none ${
                  popular
                    ? "bg-[#F9C9DB] text-[#D4145A]"
                    : color === "pink"
                      ? "bg-[#FFF0F5] text-[#E60059]"
                      : "bg-[#FFF3E8] text-[#F07816]"
                }`}
              >
                {category}
              </span>
            </Link>
          ))}
        </div>

        {/* Pagination dots */}
        <div
          className="mt-[35px] flex items-center justify-center gap-[7px]"
          aria-hidden="true"
        >
          {[0, 1, 2, 3, 4].map((dot) => (
            <span
              key={dot}
              className={`h-[9px] w-[9px] rounded-full ${
                dot === 0 ? "bg-[#E60059]" : "bg-[#F1D8E2]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandsAndPartners;

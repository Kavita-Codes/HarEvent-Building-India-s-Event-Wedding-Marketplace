import {
  ArrowRight,
  AudioLines,
  Building2,
  Cake,
  Camera,
  Flower2,
  Heart,
  ShieldCheck,
  Star,
  Utensils,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";

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
  { name: "Royal Florist", category: "Flower Decor", icon: Flower2, color: "pink" },
  { name: "Lumiere Studios", category: "Photography", icon: Camera, color: "orange" },
  { name: "Food Atelier", category: "Catering", icon: Utensils, color: "pink" },
  { name: "After Weddings", category: "Wedding Planning", icon: Heart, color: "pink", popular: true },
  { name: "Vibe Events", category: "DJ & Entertainment", icon: AudioLines, color: "orange" },
  { name: "Grand Stays", category: "Venues", icon: Building2, color: "pink" },
  { name: "Sweet Delights", category: "Cake & Desserts", icon: Cake, color: "orange" },
];

function BrandsAndPartners() {
  return (
    <section className="bg-white px-5 pb-5 pt-10 sm:px-8 lg:px-12 lg:pb-5 lg:pt-12">
      <div className="mx-auto max-w-[1440px]">

        {/* Heading and Highlights */}
        <div className="grid grid-cols-1 items-center gap-5 lg:grid-cols-[1.05fr_1.55fr] lg:gap-7">

          <div>
            <p className="mb-2 flex items-center gap-2 !text-[10px] !font-bold !uppercase !tracking-[1.3px] !text-[#E60059]">
              <span className="h-[2px] w-6 bg-[#E60059]" />
              Network Excellence
            </p>

            <h2 className="font-sans text-[28px] font-semibold leading-[1.2] tracking-[-0.7px] text-[#282128] sm:text-[32px]">
              Trusted Brands &{" "}
              <span className="font-serif font-semibold text-[#D4145A]">
                Partners
              </span>
            </h2>

            <p className="mt-2 max-w-[500px] !text-[15px] !leading-[1.5] !text-[#897781]">
              <span className="block md:whitespace-nowrap">
                Work with certified event service providers who bring quality,
              </span>
              <span className="block md:whitespace-nowrap">
                reliability and creativity to your special moments.
              </span>
            </p>
          </div>

          <div className="flex flex-col items-start justify-end gap-3 sm:flex-row sm:items-end lg:gap-3">

            <ul className="grid h-[78px] w-full grid-cols-3 items-center rounded-[15px] border border-[#F5DCE5] bg-[#FFFAFC] px-1 sm:flex-1 sm:px-2 lg:max-w-[480px]">
              {highlights.map(({ title, detail, icon: Icon }, index) => (
                <li
                  key={title}
                  className={`flex h-[49px] min-w-0 items-center gap-2 px-1.5 sm:px-2 ${
                    index > 0 ? "border-l border-[#F0E0E7]" : ""
                  }`}
                >
                  <span className="flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-full border border-[#F4DCE5] bg-white text-[#E60059]">
                    <Icon
                      size={15}
                      strokeWidth={2.1}
                      fill={title === "Quality\nAssured" ? "currentColor" : "none"}
                    />
                  </span>

                  <span className="min-w-0">
                    <span className="block whitespace-pre-line text-[10px] font-bold leading-[1.1] text-[#382D34]">
                      {title}
                    </span>
                    <span className="mt-0.5 block whitespace-pre-line text-[9px] leading-[1.15] text-[#94818B]">
                      {detail}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/vendor-categories"
              className="inline-flex h-[32px] shrink-0 items-center justify-center gap-2 self-end rounded-full bg-gradient-to-r from-[#E60059] to-[#FF790D] px-4 text-[10px] font-semibold text-white transition hover:brightness-95 sm:mb-0"
            >
              View all partners
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>

        {/* Brand Cards */}
        <div className="mt-7 grid grid-cols-2 gap-[10px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-[10px]">

          {categories.map(({ name, category, icon: Icon, color, popular }) => (
            <Link
              key={name}
              to="/vendor-categories"
              className={`group relative flex h-[158px] min-w-0 flex-col items-center justify-center rounded-[15px] border px-1.5 pt-4 transition-colors duration-200 ${
                popular
                  ? "border-[#F28BB3] bg-gradient-to-br from-[#FFF8FB] to-[#FFF4F8] shadow-[0_2px_5px_rgba(212,20,90,0.15)]"
                  : "border-[#F1DDE5] bg-white hover:border-[#F28BB3]"
              }`}
            >
              {popular && (
                <span className="absolute -right-0.5 -top-2 rounded-full bg-gradient-to-r from-[#E60059] to-[#FF4B5F] px-2.5 py-[3px] text-[9px] font-semibold leading-none text-white">
                  <span className="inline-flex items-center gap-1">
                    <Star size={9} fill="currentColor" strokeWidth={1.5} />
                    Popular
                  </span>
                </span>
              )}

              <span
                className={`mb-[11px] flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-[12px] text-white transition-transform duration-200 group-hover:scale-105 ${
                  color === "pink" ? "bg-[#E60059]" : "bg-[#FF790D]"
                }`}
              >
                <Icon size={24} strokeWidth={2} />
              </span>

              <span className="text-center text-[11px] font-bold leading-[1.2] text-[#392D35]">
                {name}
              </span>

              <span
                className={`mt-[9px] max-w-full truncate rounded-full px-[10px] py-[5px] text-[9px] font-medium leading-none ${
                  popular
                    ? "bg-[#F9C9DB] text-[#C41150]"
                    : color === "pink"
                    ? "bg-[#FFF0F5] text-[#D4145A]"
                    : "bg-[#FFF2E7] text-[#E76A16]"
                }`}
              >
                {category}
              </span>
            </Link>
          ))}

        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-[7px]" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((dot) => (
            <span
              key={dot}
              className={`h-[7px] w-[7px] rounded-full ${
                dot === 0 ? "bg-[#E60059]" : "bg-[#F1D7E1]"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default BrandsAndPartners
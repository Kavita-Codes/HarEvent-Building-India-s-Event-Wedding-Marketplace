import { useState } from "react";
import {
  ArrowRight,
  Image as ImageIcon,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatePresence, MotionConfig, motion } from "motion/react";

const filters = [
  "All",
  "Photography",
  "Decor",
  "Venues",
  "Catering",
  "Entertainment",
];

const vendors = [
  {
    id: "royal-moments",
    category: "Wedding Photography",
    businessName: "Royal Moments...",
    description:
      "Specializing in cinematic wedding stories, candid moments and timeless portraits.",
    location: "Pune",
    priceFrom: "₹85,000",
    priceNote: "onwards",
    portfolioImage: "/Joyful Indian Wedding Petal Shower.png",
    imageAlt: "Wedding couple celebrating with flower petals",
  },
  {
    id: "mayur-mandap-floral",
    category: "Wedding Decor",
    businessName: "Mayur Mandap & Floral...",
    description:
      "Elegant mandap designs, floral installations and contemporary decor.",
    location: "Pune & Mumbai",
    priceFrom: "₹1.2 Lakh",
    priceNote: "onwards",
    portfolioImage: "/Waterfront Romance Under a Floral Canopy.png",
    imageAlt: "Wedding decor with a floral canopy",
  },
  {
    id: "imperial-palace-banquets",
    category: "Luxury Venue",
    filterCategory: "Venues",
    businessName: "Imperial Palace & Banquets",
    description:
      "Spacious luxury banquet spaces for weddings, receptions and celebrations.",
    location: "Kharadi, Pune",
    priceFrom: "₹3.5 Lakh",
    priceNote: "per event",
    portfolioImage: "/Opulent Indian Garden Wedding Mandap.png",
    imageAlt: "Luxury garden wedding venue with a mandap",
  },
  {
    id: "saffron-spice-gourmet",
    category: "Catering",
    businessName: "Saffron & Spice Gourmet...",
    description:
      "Multi-cuisine catering with regional specialties and live counters.",
    location: "Pune",
    priceFrom: "₹950",
    priceNote: "per plate",
    portfolioImage: "/Lavish Indian Fusion Wedding Buffet.png",
    imageAlt: "Indian fusion wedding buffet with multiple dishes",
  },
].map((vendor) => ({
  ...vendor,
  inquiryUrl: `/enquiry?vendor=${encodeURIComponent(vendor.businessName)}&category=${encodeURIComponent(vendor.category)}`,
  profileUrl: "/vendor-categories",
}));

const EASE_OUT = [0.22, 1, 0.36, 1];

function VendorCard({ vendor, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 34, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE_OUT }}
      whileHover={{ y: -8, transition: { duration: 0.3, ease: EASE_OUT } }}
      className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[15px] border border-[#F1DDE5] bg-white shadow-[0_3px_14px_rgba(71,34,52,0.04)] transition-[border-color,box-shadow] duration-300 hover:border-[#E9A0BA] hover:shadow-[0_18px_38px_rgba(71,34,52,0.16)] sm:min-h-[405px] lg:min-h-[420px]"
    >
      {/* Gradient hairline that runs across the top on hover */}
      <span className="pointer-events-none absolute left-0 top-0 z-30 h-[3px] w-0 bg-gradient-to-r from-[#E60059] via-[#FF4E6B] to-[#FF7628] transition-[width] duration-[700ms] ease-out group-hover:w-full" />

      <div className="relative h-[222px] shrink-0 overflow-hidden bg-gradient-to-br from-[#FFF0F5] via-[#FFF8F2] to-[#FCE4EC] sm:h-[232px] lg:h-[244px]">
        <img
          src={vendor.portfolioImage}
          alt={vendor.imageAlt}
          loading="lazy"
          className="vendor-kb h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />

        {/* Legibility scrim, deepens on hover */}
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-[64%] bg-gradient-to-t from-[#2A1220]/60 via-[#2A1220]/16 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Light sweep across the photo */}
        <span className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute -left-full top-[-25%] h-[150%] w-[55%] rotate-[18deg] bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-[left,opacity] duration-[1100ms] ease-out group-hover:left-[150%] group-hover:opacity-100" />
        </span>

        {/* Price chip */}
        <span className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5 rounded-full bg-white/95 py-1 pl-2.5 pr-3 shadow-[0_6px_16px_rgba(42,18,32,0.22)] ring-1 ring-white/70 transition-transform duration-500 ease-out group-hover:-translate-y-[3px]">
          <span className="text-[12.5px] font-bold leading-none text-[#E60059]">
            {vendor.priceFrom}
          </span>
          <span className="text-[9.5px] font-semibold uppercase leading-none tracking-[0.4px] text-[#8A7580]">
            {vendor.priceNote}
          </span>
        </span>

        {/* Location rides the photo so the body keeps its original height */}
        <span className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full bg-[#2A1220]/45 py-[5px] pl-2 pr-2.5 text-[10px] font-semibold text-white/95 ring-1 ring-white/25 transition-transform duration-500 ease-out group-hover:-translate-y-[3px]">
          <MapPin size={10} className="shrink-0 text-[#FFB6C8]" />
          {vendor.location}
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-3 pb-3 pt-3 sm:px-3.5">
        <p className="text-[13px] font-bold uppercase tracking-[0.3px] text-[#E60059]">
          {vendor.category}
        </p>

        <h3 className="mt-1.5 font-sans text-[16px] font-semibold leading-5 text-[#382832] transition-colors duration-300 group-hover:text-[#B41049]">
          {vendor.businessName}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-[13px] leading-[1.6] text-[#8A7580]">
          {vendor.description}
        </p>

        <div className="mt-auto pt-1">
          <div className="mb-2.5 h-px w-full bg-gradient-to-r from-[#F2DDE5] via-[#F2DDE5] to-transparent" />

          <div className="flex gap-1.5">
            <Link
              to={vendor.inquiryUrl}
              className="inline-flex h-7 min-w-0 flex-1 items-center justify-center gap-1 rounded-full bg-[#E60059] px-2 text-[11px] font-semibold text-white transition hover:bg-[#A80F46]"
            >
              Send Inquiry
            </Link>

            <Link
              to={vendor.profileUrl}
              className="inline-flex h-7 min-w-0 flex-1 items-center justify-center rounded-full border border-[#F1DDE5] bg-[#FFF7FA] px-2 text-[11px] font-normal text-[#493640] transition hover:border-[#E9B4C7] hover:text-[#E60059]"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function EmptyVendorCard({ category }) {
  return (
    <article className="flex min-h-[336px] flex-col overflow-hidden rounded-[18px] border border-[#F1DDE5] bg-white shadow-[0_3px_14px_rgba(71,34,52,0.04)]">
      <div className="flex h-[190px] items-center justify-center bg-gradient-to-br from-[#FFF0F5] via-[#FFF8F2] to-[#FCE4EC] text-[#D4145A]/50">
        {category === "All" ? (
          <BriefcaseBusiness size={28} strokeWidth={1.5} />
        ) : (
          <ImageIcon size={28} strokeWidth={1.5} />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[9px] font-bold uppercase tracking-wide text-[#D4145A]">
          {category === "All" ? "Vendor Portfolio" : category}
        </p>

        <h3 className="mt-1 text-sm font-semibold text-[#382832]">
          Vendor listing coming soon
        </h3>

        <p className="mt-1 text-xs leading-5 text-[#8A7580]">
          Business details and portfolio will appear when available.
        </p>

        <div className="mt-auto pt-3">
          <div className="mb-3 border-t border-[#F7E8EE]" />

          <div className="flex gap-2">
            <Link
              to="/enquiry"
              className="flex h-10 flex-1 items-center justify-center rounded-full bg-[#D4145A] px-2 text-center text-[10px] font-semibold text-white transition hover:bg-[#A80F46] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4145A]"
            >
              Send Inquiry
            </Link>

            <Link
              to="/vendor-categories"
              className="flex h-10 flex-1 items-center justify-center rounded-full border border-[#F1DDE5] bg-white px-2 text-center text-[10px] font-semibold text-[#493640] transition hover:border-[#D4145A] hover:text-[#D4145A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4145A]"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function PopularVendors() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleVendors = vendors.filter(
    (vendor) =>
      activeFilter === "All" ||
      (vendor.filterCategory || vendor.category)
        .toLowerCase()
        .includes(activeFilter.toLowerCase()),
  );

  return (
    /* reducedMotion="user" lets every motion prop below fall back to a
       transform-free state for visitors who ask for less animation */
    <MotionConfig reducedMotion="user">
      <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <style>{`
          /* Idle Ken Burns breathing: animates transform only, so the hover
             scale utility multiplies on top of it instead of fighting it */
          .vendor-kb {
            animation: vendor-kenburns 18s ease-in-out infinite alternate;
          }

          @keyframes vendor-kenburns {
            from {
              transform: scale(1) translate3d(0, 0, 0);
            }
            to {
              transform: scale(1.06) translate3d(-1.5%, -1.5%, 0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .vendor-kb {
              animation: none;
            }
          }
        `}</style>

        <div className="mx-auto max-w-[1440px]">
          <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 flex items-center gap-2 text-[13px] font-bold uppercase tracking-[1.5px] text-[#D4145A]">
                <span className="h-[2px] w-6 bg-[#D4145A]" />
                Featured Professionals
              </p>

              <h2 className="text-3xl font-semibold tracking-tight text-[#30232B] sm:text-4xl">
                Popular Vendors
              </h2>

              <p className="mt-2 text-sm leading-6 text-[#8A7580]">
                Explore trusted event professionals near you.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    aria-pressed={activeFilter === filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-[12px] font-semibold transition ${
                      activeFilter === filter
                        ? "border-[#D4145A] bg-[#D4145A] text-white"
                        : "border-[#F1DDE5] bg-white text-[#78646E] hover:border-[#D4145A] hover:text-[#D4145A]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <Link
                to="/vendor-categories"
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-5 text-[12px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                View All Vendors <ArrowRight size={13} />
              </Link>
            </div>
          </div>

          {/* Filtering cross-fades the grid instead of snapping to a new list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: EASE_OUT }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {visibleVendors.length > 0
                ? visibleVendors.map((vendor, index) => (
                    <VendorCard key={vendor.id} vendor={vendor} index={index} />
                  ))
                : [1, 2, 3, 4].map((slot) => (
                    <EmptyVendorCard key={slot} category={activeFilter} />
                  ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </MotionConfig>
  );
}

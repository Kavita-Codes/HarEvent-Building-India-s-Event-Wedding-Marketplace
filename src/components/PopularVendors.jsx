import { useState } from "react";
import { ArrowRight, Image as ImageIcon, MapPin, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router-dom";

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
    portfolioImage: "/Lavish Indian Fusion Wedding Buffet.png",
    imageAlt: "Indian fusion wedding buffet with multiple dishes",
  },
].map((vendor) => ({
  ...vendor,
  inquiryUrl: `/enquiry?vendor=${encodeURIComponent(vendor.businessName)}&category=${encodeURIComponent(vendor.category)}`,
  profileUrl: "/vendor-categories",
}));

function VendorCard({ vendor }) {
  return (
    <article className="group flex h-[390px] flex-col overflow-hidden rounded-[15px] border border-[#F1DDE5] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#E9A0BA] hover:shadow-[0_8px_20px_rgba(71,34,52,0.12)] sm:h-[405px] lg:h-[420px]">
      <div className="relative h-[210px] shrink-0 overflow-hidden bg-gradient-to-br from-[#FFF0F5] via-[#FFF8F2] to-[#FCE4EC] sm:h-[220px] lg:h-[230px]">
        <img
          src={vendor.portfolioImage}
          alt={vendor.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-3 pb-3 pt-2.5 sm:px-3.5">
        <div className="flex min-h-[16px] items-center justify-end gap-2 text-[11px]">
          <span className="inline-flex items-center gap-1 text-right text-[#8A7580]">
            <MapPin size={11} className="shrink-0 text-[#E60059]" />
            {vendor.location}
          </span>
        </div>

        <p className="mt-1 text-[13px] font-bold uppercase tracking-[0.3px] text-[#E60059]">
          {vendor.category}
        </p>

        <h3 className="mt-1 font-sans text-[16px] font-semibold leading-5 text-[#382832]">
          {vendor.businessName}
        </h3>

        <p className="mt-1 text-[13px] leading-[1.5] text-[#8A7580]">
          {vendor.description}
        </p>

        <div className="mt-auto pt-3">
          <div className="mb-3 border-t border-[#F2DDE5]" />

          <div className="flex gap-1.5">
            <Link
              to={vendor.inquiryUrl}
              className="inline-flex h-7 min-w-0 flex-1 items-center justify-center rounded-full bg-[#E60059] px-2 text-[11px] font-semibold text-white transition hover:bg-[#A80F46]"
            >
              Send Inquiry
            </Link>

            <Link
              to={vendor.profileUrl}
              className="inline-flex h-7 min-w-0 flex-1 items-center justify-center rounded-full border border-[#F1DDE5] bg-[#FFF7FA] px-2 text-[11px] font-normal text-[#493640] transition hover:border-[#E9B4C7]"
            >
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </article>
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
        .includes(activeFilter.toLowerCase())
  );

  return (
    <section className="bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#D4145A]">
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
                  className={`shrink-0 rounded-full border px-4 py-2 text-[10px] font-semibold transition ${
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
              className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-5 text-[10px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              View All Vendors <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleVendors.length > 0
            ? visibleVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))
            : [1, 2, 3, 4].map((slot) => (
                <EmptyVendorCard key={slot} category={activeFilter} />
              ))}
        </div>
      </div>
    </section>
  )
}
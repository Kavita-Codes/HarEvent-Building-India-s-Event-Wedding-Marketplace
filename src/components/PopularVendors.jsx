import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Image as ImageIcon,
  MapPin,
  MessageCircle,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const filters = ["All", "Photography", "Decor", "Venues", "Catering", "Entertainment"];

const vendors = [];

const portfolioPreviews = [
  {
    id: "wedding-photography-preview",
    category: "Photography",
    portfolioImage: "/Joyful Indian Wedding Petal Shower.png",
    imageAlt: "Wedding celebration with a flower petal shower",
  },
  {
    id: "floral-decor-preview",
    category: "Decor",
    portfolioImage: "/Waterfront Romance Under a Floral Canopy.png",
    imageAlt: "Waterfront celebration under a floral canopy",
  },
  {
    id: "wedding-venue-preview",
    category: "Venues",
    portfolioImage: "/Opulent Indian Garden Wedding Mandap.png",
    imageAlt: "Garden wedding mandap",
  },
  {
    id: "wedding-catering-preview",
    category: "Catering",
    portfolioImage: "/Lavish Indian Fusion Wedding Buffet.png",
    imageAlt: "Indian fusion wedding buffet",
  },
].map((preview) => ({
  ...preview,
  isPortfolioPreview: true,
  description: "Portfolio preview. Business information will appear when available.",
  inquiryUrl: `/enquiry?category=${encodeURIComponent(preview.category)}`,
  profileUrl: "/vendor-categories",
}));

function VendorCard({ vendor }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#F1DDE5] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-[#FFF0F5] via-[#FFF8F2] to-[#FCE4EC]">
        {vendor.portfolioImage ? (
          <img
            src={vendor.portfolioImage}
            alt={vendor.imageAlt || `${vendor.businessName} portfolio`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-[#D4145A]/55">
            <ImageIcon size={30} strokeWidth={1.5} />
          </div>
        )}
        {vendor.logoUrl && (
          <img
            src={vendor.logoUrl}
            alt={`${vendor.businessName} logo`}
            className="absolute bottom-3 left-3 h-11 w-11 rounded-xl border-2 border-white bg-white object-contain p-1 shadow-sm"
            loading="lazy"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-center justify-between gap-2 text-[10px]">
          {vendor.ratingVerified === true &&
          Number.isFinite(vendor.rating) &&
          vendor.rating >= 0 &&
          vendor.rating <= 5 ? (
            <span className="inline-flex items-center gap-1 font-semibold text-[#493640]">
              <Star size={13} className="fill-[#F5A623] text-[#F5A623]" />
              {vendor.rating.toFixed(1)}
              {Number.isInteger(vendor.reviewCount) && vendor.reviewCount > 0 && (
                <span className="font-normal text-[#8A7580]">
                  ({vendor.reviewCount})
                </span>
              )}
              <BadgeCheck
                size={12}
                className="text-[#247A45]"
                aria-label="Verified rating"
              />
            </span>
          ) : (
            <span />
          )}
          {vendor.location && (
            <span className="inline-flex items-center gap-1 text-right text-[#8A7580]">
              <MapPin size={12} className="shrink-0 text-[#D4145A]" />
              {vendor.location}
            </span>
          )}
        </div>

        {vendor.category && (
          <p className="mt-2 text-[9px] font-bold uppercase tracking-wide text-[#D4145A]">
            {vendor.isPortfolioPreview ? "Portfolio Preview · " : ""}
            {vendor.category}
          </p>
        )}
        <div className="mt-1 flex items-center gap-1.5">
          <h3 className="truncate text-sm font-bold text-[#382832]">
            {vendor.isPortfolioPreview ? "Vendor listing coming soon" : vendor.businessName}
          </h3>
          {vendor.isVerified === true && (
            <BadgeCheck
              size={14}
              className="shrink-0 text-[#247A45]"
              aria-label="Verified vendor"
            />
          )}
        </div>
        {vendor.description && (
          <p className="mt-1 line-clamp-2 min-h-10 text-xs leading-5 text-[#8A7580]">
            {vendor.description}
          </p>
        )}

        <div className="mt-auto flex gap-2 border-t border-[#F7E8EE] pt-3">
          <Link
            to={
              vendor.inquiryUrl ||
              `/enquiry?vendor=${encodeURIComponent(vendor.businessName)}&category=${encodeURIComponent(vendor.category || "Vendor")}`
            }
            className="inline-flex min-w-0 flex-1 items-center justify-center gap-1 rounded-full bg-[#D4145A] px-3 py-2 text-[10px] font-semibold text-white transition hover:bg-[#A80F46]"
          >
            <MessageCircle size={12} /> Send Inquiry
          </Link>
          <Link
            to={vendor.profileUrl || "/vendor-categories"}
            className="inline-flex min-w-0 flex-1 items-center justify-center rounded-full border border-[#F1DDE5] bg-[#FFF7FA] px-3 py-2 text-[10px] font-semibold text-[#493640] transition hover:border-[#E9B4C7]"
          >
            View Profile
          </Link>
        </div>
      </div>
    </article>
  );
}

function PopularVendors() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleVendors = [...vendors, ...portfolioPreviews].filter(
    (vendor) =>
      activeFilter === "All" ||
      vendor.category?.toLowerCase().includes(activeFilter.toLowerCase()),
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
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-5 py-2.5 text-[10px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              View All Vendors <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {visibleVendors.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {visibleVendors.map((vendor) => (
              <VendorCard key={vendor.id} vendor={vendor} />
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[0, 1, 2, 3].map((slot) => (
              <div
                key={slot}
                className="flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-[#F1DDE5] bg-white"
              >
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#FFF0F5] via-[#FFF8F2] to-[#FCE4EC] text-[#D4145A]/50">
                  {activeFilter === "All" ? (
                    <BriefcaseBusiness size={28} strokeWidth={1.5} />
                  ) : (
                    <ImageIcon size={28} strokeWidth={1.5} />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <p className="text-[9px] font-bold uppercase tracking-wide text-[#D4145A]">
                    {activeFilter === "All" ? "Vendor Portfolio" : activeFilter}
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-[#382832]">
                    Vendor listing coming soon
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#8A7580]">
                    Business details and portfolio will appear when available.
                  </p>
                  <div className="mt-auto flex gap-2 border-t border-[#F7E8EE] pt-3">
                    <Link
                      to="/enquiry"
                      className="flex flex-1 items-center justify-center rounded-full bg-[#D4145A] px-2 py-2 text-center text-[10px] font-semibold text-white transition hover:bg-[#A80F46] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4145A]"
                    >
                      Send Inquiry
                    </Link>
                    <Link
                      to="/vendor-categories"
                      className="flex flex-1 items-center justify-center rounded-full border border-[#F1DDE5] bg-white px-2 py-2 text-center text-[10px] font-semibold text-[#493640] transition hover:border-[#D4145A] hover:text-[#D4145A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4145A]"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default PopularVendors;

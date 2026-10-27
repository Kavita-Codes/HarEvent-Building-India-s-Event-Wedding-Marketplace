import { useState } from "react";
import {
  Search,
  CalendarDays,
  Camera,
  MapPin,
  ChevronDown,
  Star,
} from "lucide-react";

function Hero() {
  const [eventType, setEventType] = useState("");
  const [vendorCategory, setVendorCategory] = useState("");
  const [location, setLocation] = useState("Pune");
  const [openDropdown, setOpenDropdown] = useState(null);

  const eventOptions = [
    "Wedding",
    "Birthday",
    "Engagement",
    "Corporate Event",
    "Anniversary",
    "Baby Shower",
  ];

  const vendorOptions = [
    "Event Planner",
    "Photographer",
    "Venue",
    "Decorator",
    "Caterer",
    "Makeup Artist",
    "Entertainment",
  ];

  const selectOption = (type, value) => {
    if (type === "event") setEventType(value);
    if (type === "vendor") setVendorCategory(value);
    setOpenDropdown(null);
  };

  const fieldClass =
    "flex h-[44px] w-full min-w-0 items-center gap-2 rounded-[10px] bg-[#FFF1F5] px-3";

  const labelClass =
    "mb-2 block font-poppins text-[10px] font-medium uppercase tracking-wide text-[#8C7882]";

  const renderDropdown = (type, value, placeholder, options, Icon) => (
    <div className="relative w-full min-w-0">
      <button
        type="button"
        onClick={() => setOpenDropdown(openDropdown === type ? null : type)}
        aria-expanded={openDropdown === type}
        className={`${fieldClass} cursor-pointer text-left transition-colors hover:bg-[#FFE6EF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E50059]/30`}
      >
        <Icon size={16} strokeWidth={2} className="shrink-0 text-[#E50059]" />

        <span
          className={`min-w-0 flex-1 truncate font-poppins text-[14px] ${
            value ? "font-medium text-[#382832]" : "font-normal text-[#9D8B94]"
          }`}
        >
          {value || placeholder}
        </span>

        <ChevronDown
          size={15}
          strokeWidth={1.8}
          className={`shrink-0 text-[#A58D98] transition-transform ${
            openDropdown === type ? "rotate-180" : ""
          }`}
        />
      </button>

      {openDropdown === type && (
        <>
          <button
            type="button"
            aria-label="Close dropdown"
            className="fixed inset-0 z-20 cursor-default"
            onClick={() => setOpenDropdown(null)}
          />

          <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-30 max-h-60 overflow-y-auto rounded-xl border border-[#F0DDE5] bg-white text-left shadow-xl">
            {options.map((option) => {
              const selected = value === option;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => selectOption(type, option)}
                  className={`flex w-full items-center rounded-none px-3 py-2.5 text-left font-poppins text-[13px] transition-colors ${
                    selected
                      ? "bg-gradient-to-r from-[#D4145A] to-[#FF7628] font-semibold text-white"
                      : "font-normal text-[#382832] hover:bg-gradient-to-r hover:from-[#D4145A] hover:to-[#FF7628] hover:text-white"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );

  return (
    <main>
      <section className="relative flex min-h-[640px] items-center justify-center bg-[#24151B] px-4 py-12 sm:min-h-[660px] lg:min-h-[calc(100svh-68px)]">
        {/* Background Image */}
        <img
          src="/hero.png"
          alt="Elegant wedding event venue"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1000px] text-center">
          {/* Eyebrow */}
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-orange-300/30 bg-black/40 px-4 py-2 font-poppins text-[10px] font-semibold uppercase tracking-wide text-[#FF8429] sm:text-[11px]">
            <span className="flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#FF8429] to-[#FF7628]">
              <Star
                size={9}
                strokeWidth={2.5}
                fill="white"
                className="text-white"
              />
            </span>
            <span>India's Event &amp; Vendor Discovery Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-6 font-playfair text-[36px] font-bold leading-[1.1] text-white sm:text-[48px] md:text-[60px]">
            Plan Your Perfect Event
            <br />
            <span className="mt-1 inline-block bg-gradient-to-r from-[#E50059] via-[#FF4D63] to-[#FF8429] bg-clip-text font-playfair text-[36px] font-bold leading-[1.1] text-transparent sm:text-[48px] md:text-[60px]">
              All in One Place
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-[820px] font-poppins text-[15px] font-normal leading-[1.6] text-white/90 sm:text-[17px]">
            Discover trusted event professionals, explore inspiring services,
            and connect with the right vendors to bring your special occasions
            to life.
          </p>

          {/* Search Panel */}
          <div className="mx-auto mt-8 w-full max-w-[1000px] rounded-[18px] bg-white px-4 py-5 text-left shadow-2xl sm:px-6">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="grid grid-cols-1 items-end gap-3 md:grid-cols-2 lg:grid-cols-[1fr_1.35fr_1fr_auto]"
            >
              {/* Event Type */}
              <label className="block w-full min-w-0">
                <span className={labelClass}>Event Type</span>

                {renderDropdown(
                  "event",
                  eventType,
                  "Select your event",
                  eventOptions,
                  CalendarDays,
                )}
              </label>

              {/* Vendor Category */}
              <label className="block w-full min-w-0">
                <span className={labelClass}>Vendor Category</span>

                {renderDropdown(
                  "vendor",
                  vendorCategory,
                  "Choose a service",
                  vendorOptions,
                  Camera,
                )}
              </label>

              {/* Location */}
              <label className="block w-full min-w-0">
                <span className={labelClass}>Location</span>

                <div
                  className={`${fieldClass} focus-within:ring-2 focus-within:ring-[#E50059]/20`}
                >
                  <MapPin
                    size={16}
                    strokeWidth={2}
                    className="shrink-0 text-[#E50059]"
                  />

                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter city or location"
                    className="w-full min-w-0 bg-transparent font-poppins text-[14px] font-medium text-[#382832] outline-none placeholder:font-normal placeholder:text-[#9D8B94]"
                  />
                </div>
              </label>

              {/* Search Button */}
              <button
                type="submit"
                className="flex h-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-7 font-poppins text-[15px] font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                <Search size={16} strokeWidth={2.2} />
                Search Vendors
              </button>
            </form>

            {/* Supporting Text */}
            <div className="mt-3 flex w-fit max-w-full min-w-0 items-start justify-start gap-1 font-poppins text-[12px] font-normal leading-4 text-[#897782]">
              <span className="mt-0.5 flex h-[13px] w-[13px] shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#FF8429] to-[#FF7628]">
                <Star
                  size={8}
                  strokeWidth={2.5}
                  fill="white"
                  className="text-white"
                />
              </span>

              <p className="m-0 min-w-0 text-left font-poppins text-[13px] font-normal leading-4 sm:text-[13px]">
                From beautiful venues to exceptional event services, discover
                everything you need to make your celebration unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;

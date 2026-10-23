import { Search, CalendarDays, Camera, MapPin } from "lucide-react";

function Hero() {
  return (
    <>
      <main>
        {/* Hero Banner */}
        <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-[#24151B] px-4 py-16 sm:min-h-[640px] lg:min-h-[calc(100svh-76px)]">

          {/* Background Image */}
          <img
            src="/hero.png"
            alt="Elegant event venue decoration"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Hero Content */}
          <div className="relative z-10 mx-auto w-full max-w-5xl text-center">

            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-300/30 bg-black/40 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-orange-400 sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              India's Event & Vendor Discovery Platform
            </span>

            {/* Heading */}
            <h1 className="mt-6 font-serif text-4xl font-bold leading-[1.12] text-white sm:text-5xl md:text-6xl">
              Plan Your Perfect Event
              <br />

              <span className="bg-gradient-to-r from-[#E50059] via-[#FF4D63] to-[#FF8429] bg-clip-text text-transparent">
                All in One Place
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
              Discover trusted event professionals, explore inspiring
              services, and connect with the right vendors to bring
              your special occasions to life.
            </p>

            {/* Search Panel */}
            <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-4 text-left shadow-2xl sm:p-5">

              <form
                onSubmit={(e) => e.preventDefault()}
                className="grid grid-cols-1 items-end gap-3 md:grid-cols-[1fr_1.35fr_1fr_auto]"
              >

                {/* Event Type */}
                <label className="block min-w-0">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-[#8C7882]">
                    Event Type
                  </span>

                  <div className="flex h-11 items-center gap-2 rounded-lg bg-[#FFF3F7] px-3">
                    <CalendarDays size={16} className="shrink-0 text-[#D4145A]" />

                    <select
                      defaultValue=""
                      className="w-full min-w-0 cursor-pointer bg-transparent text-sm text-[#382832] outline-none"
                    >
                      <option value="" disabled>
                        Select your event
                      </option>
                      <option>Wedding</option>
                      <option>Birthday</option>
                      <option>Engagement</option>
                      <option>Corporate Event</option>
                      <option>Anniversary</option>
                      <option>Baby Shower</option>
                    </select>
                  </div>
                </label>

                {/* Vendor Category */}
                <label className="block min-w-0">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-[#8C7882]">
                    Vendor Category
                  </span>

                  <div className="flex h-11 items-center gap-2 rounded-lg bg-[#FFF3F7] px-3">
                    <Camera size={16} className="shrink-0 text-[#D4145A]" />

                    <select
                      defaultValue=""
                      className="w-full min-w-0 cursor-pointer bg-transparent text-sm text-[#382832] outline-none"
                    >
                      <option value="" disabled>
                        Choose a service
                      </option>
                      <option>Event Planner</option>
                      <option>Photographer</option>
                      <option>Venue</option>
                      <option>Decorator</option>
                      <option>Caterer</option>
                      <option>Makeup Artist</option>
                      <option>Entertainment</option>
                    </select>
                  </div>
                </label>

                {/* Location */}
                <label className="block min-w-0">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-wide text-[#8C7882]">
                    Location
                  </span>

                  <div className="flex h-11 items-center gap-2 rounded-lg bg-[#FFF3F7] px-3">
                    <MapPin size={16} className="shrink-0 text-[#D4145A]" />

                    <input
                      type="text"
                      placeholder="Enter city or location"
                      className="w-full min-w-0 bg-transparent text-sm text-[#382832] outline-none placeholder:text-[#9D8B94]"
                    />
                  </div>
                </label>

                {/* Search Button */}
                <button
                  type="submit"
                  className="flex h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-7 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <Search size={16} />
                  Search Vendors
                </button>

              </form>

              {/* Supporting Text */}
              <div className="mt-4 flex items-start justify-center gap-2 text-center text-xs leading-5 text-[#897782]">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-orange-500" />

                <p>
                  From beautiful venues to exceptional event services,
                  discover everything you need to make your celebration
                  unforgettable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

    </>
  );
}

export default Hero
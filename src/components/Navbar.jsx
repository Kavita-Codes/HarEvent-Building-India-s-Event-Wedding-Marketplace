import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  Search,
  UserRound,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const EVENT_MEGA_MENU = {
  id: "events",
  label: "Event Category",
  path: "/event-categories",
  tabs: [
    {
      id: "weddings",
      name: "Wedding Events",
      columns: [
        {
          title: "Pre-Wedding",
          items: [
            "Engagements",
            "Sangeet Night",
            "Mehendi Ceremony",
            "Haldi Ceremony",
            "Roka Ceremony",
            "Pre-Wedding Shoots",
          ],
        },
        {
          title: "Wedding Day",
          items: [
            "Mandap Weddings",
            "Destination Weddings",
            "Royal Palace Weddings",
            "Garden & Lawn Weddings",
            "Varmala & Baraat",
          ],
        },
        {
          title: "Post-Wedding",
          items: [
            "Receptions",
            "Cocktail Parties",
            "Vidai & Farewell",
            "Family Brunch",
            "After Parties",
          ],
        },
        {
          title: "Wedding Specials",
          items: [
            "Anniversaries",
            "Vow Renewals",
            "Intimate Celebrations",
            "Theme Weddings",
            "Silver & Golden Jubilee",
          ],
        },
      ],
    },
    {
      id: "birthdays",
      name: "Birthdays & Socials",
      columns: [
        {
          title: "Birthdays",
          items: [
            "Birthdays",
            "Kids Birthdays",
            "1st Birthday Specials",
            "Milestone 18th & 21st",
            "Surprise Celebrations",
          ],
        },
        {
          title: "Social Gatherings",
          items: [
            "Family & Social Gatherings",
            "Family Reunions",
            "Housewarming / Griha Pravesh",
            "Farewell & Retirement",
            "Get-Togethers",
          ],
        },
        {
          title: "Baby Celebrations",
          items: [
            "Baby Showers",
            "Naming Ceremonies",
            "Gender Reveal",
            "Annaprashan Ceremony",
            "Cradle Ceremonies",
          ],
        },
        {
          title: "Party & Nightlife",
          items: [
            "Cocktail Nights",
            "Pool Parties",
            "Theme Nights",
            "Alumni Meets",
            "Festival Celebrations",
          ],
        },
      ],
    },
    {
      id: "corporate",
      name: "Corporate Events",
      columns: [
        {
          title: "Conferences & Summits",
          items: [
            "Corporate Events",
            "Business Conclaves",
            "Annual General Meetings",
            "Medical Conferences",
            "Seminars & Workshops",
          ],
        },
        {
          title: "Launches & Meets",
          items: [
            "Product Launches",
            "Inauguration Ceremonies",
            "Builder Site Launches",
            "Press Conferences",
            "Brand Activations",
          ],
        },
        {
          title: "Celebrations & Galas",
          items: [
            "Annual Award Nights",
            "Work Anniversaries",
            "Foundation Days",
            "Success Celebrations",
            "Gala Dinners",
          ],
        },
        {
          title: "Team Engagement",
          items: [
            "Corporate Retreats",
            "Team Building Offsites",
            "Employee Engagement",
            "Sports Events",
            "Townhall Meets",
          ],
        },
      ],
    },
    {
      id: "traditional",
      name: "Traditional & Ceremonies",
      columns: [
        {
          title: "Sacred Poojas",
          items: [
            "Satyanarayan Pooja",
            "Griha Shanti",
            "Mata Ki Chowki",
            "Ganesh Sthapana",
            "Hawan & Homa",
          ],
        },
        {
          title: "Family Rituals",
          items: [
            "Thread Ceremony (Upanayana)",
            "Mundan Ceremony",
            "Godh Bharai",
            "Shasti Poorti (60th)",
            "Namkaran Sanskar",
          ],
        },
        {
          title: "Festive Occasions",
          items: [
            "Bhajan Sandhya",
            "Dandiya & Garba Nights",
            "Diwali & Festive Galas",
            "Jagran Nights",
            "Community Feasts",
          ],
        },
        {
          title: "Cultural Events",
          items: [
            "Heritage Celebrations",
            "Spiritual Gatherings",
            "Traditional Music Evenings",
            "Memorial Services",
          ],
        },
      ],
    },
  ],
};

const VENDOR_MEGA_MENU = {
  id: "vendors",
  label: "Vendor Category",
  path: "/vendor-categories",
  tabs: [
    {
      id: "services",
      name: "Event Services",
      columns: [
        {
          title: "Planning & Management",
          items: [
            "Event Planner",
            "Wedding Planners",
            "Corporate Event Planners",
            "Theme Designers",
            "Hospitality Management",
          ],
        },
        {
          title: "Photographer & Video",
          items: [
            "Photographer",
            "Cinematic Wedding Films",
            "Candid Photographers",
            "Pre-Wedding Shoot Studios",
            "Drone Videography",
          ],
        },
        {
          title: "Caterer & Food",
          items: [
            "Caterer",
            "Multi-Cuisine Catering",
            "Live Cooking Counters",
            "Food & Beverage Stalls",
            "Dessert & Sweet Bars",
          ],
        },
        {
          title: "Event Essentials",
          items: [
            "Stage & Truss Setup",
            "Sound & DJ Equipment",
            "Security & Bouncers",
            "Valet Parking Management",
            "Invitations & Favors",
          ],
        },
      ],
    },
    {
      id: "decor",
      name: "Decor & Rentals",
      columns: [
        {
          title: "Floral & Theme Decor",
          items: [
            "Decorator",
            "Flower Decor",
            "Royal Mandap Decor",
            "Theme Stage Design",
            "Entrance & Floral Arches",
          ],
        },
        {
          title: "Lighting & Ambience",
          items: [
            "Ambient Fairy Lighting",
            "LED Wall & Screens",
            "Laser & Pyro Shows",
            "Chandelier Installations",
          ],
        },
        {
          title: "Furniture & Setup",
          items: [
            "Banquet Chairs & Sofas",
            "VIP Lounge Furniture",
            "Canopies & Shamiyanas",
            "Table Linens & Runners",
          ],
        },
        {
          title: "Props & Photo Booths",
          items: [
            "Selfie Booths",
            "360 Video Booths",
            "Vintage Car Rentals",
            "Floral Backdrops",
          ],
        },
      ],
    },
    {
      id: "venues",
      name: "Venues",
      columns: [
        {
          title: "Banquet Halls",
          items: [
            "Venues",
            "Luxury Banquet Halls",
            "AC Marriage Halls",
            "Mini Halls for Parties",
            "Budget Function Halls",
          ],
        },
        {
          title: "Outdoor Lawns",
          items: [
            "Wedding Lawns & Gardens",
            "Poolside Lawns",
            "Open-Air Amphitheatres",
            "Farmhouses for Events",
          ],
        },
        {
          title: "Hotels & Resorts",
          items: [
            "5-Star Luxury Hotels",
            "Boutique Destination Resorts",
            "Beachfront Properties",
            "Palace & Heritage Stays",
          ],
        },
        {
          title: "Specialty Spaces",
          items: [
            "Rooftop Terraces",
            "Art & Cultural Centers",
            "Clubhouses",
            "Corporate Auditoriums",
          ],
        },
      ],
    },
    {
      id: "entertainment",
      name: "Entertainment & Beauty",
      columns: [
        {
          title: "Music & Artists",
          items: [
            "Entertainment",
            "DJ & Live Sound",
            "Live Fusion Bands",
            "Singers & Vocalists",
            "Dhol Tasha Groups",
          ],
        },
        {
          title: "Performers",
          items: [
            "Choreographers for Sangeet",
            "Celebrity Anchors & Emcees",
            "Stand-Up Comedians",
            "Folk Dancers & Troupes",
          ],
        },
        {
          title: "Makeup & Hair",
          items: [
            "Makeup Artist",
            "Bridal Makeup Artists",
            "Airbrush & HD Makeup",
            "Groom Styling & Hair",
            "Family Makeup Packages",
          ],
        },
        {
          title: "Styling & Mehendi",
          items: [
            "Bridal Mehendi Artists",
            "Arabic & Rajasthani Mehendi",
            "Saree & Turban Draping",
            "Costume & Jewelry Rentals",
          ],
        },
      ],
    },
  ],
};

function Navbar({ onLoginClick }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeEventTab, setActiveEventTab] = useState("weddings");
  const [activeVendorTab, setActiveVendorTab] = useState("services");

  // Mobile accordion state
  const [mobileEventOpen, setMobileEventOpen] = useState(false);
  const [mobileVendorOpen, setMobileVendorOpen] = useState(false);

  const navigate = useNavigate();
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  const links = [
    { name: "Home", to: "/" },
    { name: "Event Planner", to: "/event-planners" },
    { name: "Event Category", to: "/event-categories", hasMega: "events" },
    { name: "Vendor Category", to: "/vendor-categories", hasMega: "vendors" },
    { name: "Blogs", to: "/blogs" },
    { name: "About Us", to: "/about" },
    { name: "Contact Us", to: "/contact" },
  ];

  const handleMouseEnter = (menuType) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMegaMenu(menuType);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    navigate(`/search?query=${encodeURIComponent(search.trim())}`);
    setOpen(false);
    setActiveMegaMenu(null);
  };

  const closeMenu = () => {
    setOpen(false);
    setActiveMegaMenu(null);
  };

  const currentMegaData =
    activeMegaMenu === "events"
      ? EVENT_MEGA_MENU
      : activeMegaMenu === "vendors"
      ? VENDOR_MEGA_MENU
      : null;

  const currentTabId =
    activeMegaMenu === "events" ? activeEventTab : activeVendorTab;

  const activeTabObj =
    currentMegaData?.tabs.find((t) => t.id === currentTabId) ||
    currentMegaData?.tabs[0];

  const loginClass =
    "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-[#ed0055] to-[#ff7900] px-[18px] py-2 text-[12px] font-semibold font-poppins text-white shadow-sm transition hover:brightness-105";

  return (
    <header
      ref={navRef}
      onMouseLeave={handleMouseLeave}
      className="sticky top-0 z-50 w-full border-b border-[#F4E5EB] bg-white font-poppins"
    >
      <div className="mx-auto flex min-h-[68px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:gap-4 lg:px-10">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-0"
          aria-label="HarEvent Home"
        >
          <img
            src="/logoForm.jpeg"
            alt="HarEvent Logo"
            className="h-16 w-16 object-contain"
          />
          <span className="font-playfair bg-gradient-to-r from-[#ed0055] to-[#ff7900] bg-clip-text text-[25px] font-bold leading-none text-transparent">
            HarEvent
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 xl:ml-auto xl:flex 2xl:gap-2"
          aria-label="Main navigation"
        >
          {links.map((link) => {
            const hasMega = link.hasMega;
            const isMegaActive = activeMegaMenu === hasMega;

            if (hasMega) {
              return (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(hasMega)}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setActiveMegaMenu(null)}
                    className={({ isActive }) =>
                      `flex items-center gap-1 whitespace-nowrap rounded-md px-2.5 py-2 text-[14px] font-semibold transition-colors ${
                        isActive || isMegaActive
                          ? "text-[#ed0055]"
                          : "text-[#51434B] hover:text-[#ed0055]"
                      }`
                    }
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isMegaActive ? "rotate-180 text-[#ed0055]" : "text-[#7d6f76]"
                      }`}
                    />
                  </NavLink>
                </div>
              );
            }

            return (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onMouseEnter={() => setActiveMegaMenu(null)}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-md px-2.5 py-2 text-[14px] font-semibold transition-colors ${
                    isActive
                      ? "text-[#ed0055]"
                      : "text-[#51434B] hover:text-[#ed0055]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden shrink-0 items-center gap-2 md:flex xl:ml-2">
          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex h-9 w-[220px] items-center gap-2 rounded-full border border-[#F0DDE5] bg-[#FFF7FA] px-3 focus-within:border-[#ed0055] 2xl:w-[240px]"
          >
            <Search size={16} className="shrink-0 text-[#907D87]" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events, vendors..."
              aria-label="Search events, vendors or locations"
              className="min-w-0 flex-1 bg-transparent text-[12px] text-[#453640] outline-none placeholder:text-[#9A8992]"
            />
          </form>

          {/* Login */}
          {onLoginClick ? (
            <button
              type="button"
              onClick={onLoginClick}
              className={loginClass}
            >
              <UserRound size={16} aria-hidden="true" />
              Login
            </button>
          ) : (
            <Link to="/login" className={loginClass}>
              <UserRound size={14} aria-hidden="true" />
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#F0DDE5] text-[#ed0055] xl:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ================================================================ */}
      {/* DESKTOP MEGA MENU DROPDOWN                                      */}
      {/* ================================================================ */}
      {activeMegaMenu && currentMegaData && (
        <div
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
          className="absolute left-0 top-[68px] z-50 w-full border-t border-rose-100 bg-white shadow-2xl transition-all duration-300"
        >
          <div className="mx-auto max-w-[1440px]">
            {/* Top Horizontal Tabs */}
            <div className="flex items-center overflow-x-auto border-b border-gray-100 px-6 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {currentMegaData.tabs.map((tab) => {
                const isActive = tab.id === activeTabObj.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onMouseEnter={() => {
                      if (activeMegaMenu === "events") setActiveEventTab(tab.id);
                      else setActiveVendorTab(tab.id);
                    }}
                    onClick={() => {
                      if (activeMegaMenu === "events") setActiveEventTab(tab.id);
                      else setActiveVendorTab(tab.id);
                    }}
                    className={`relative cursor-pointer px-5 py-3.5 text-[14px] font-semibold transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-[#ed0055]"
                        : "text-[#584852] hover:text-[#ed0055]"
                    }`}
                  >
                    <span>{tab.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-full bg-gradient-to-r from-[#ed0055] to-[#ff7900]" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Subcategories 4-Column Grid */}
            <div className="bg-[#fffcfd] px-6 py-7 sm:px-10 sm:py-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {activeTabObj.columns.map((col, cIdx) => (
                  <div key={col.title || cIdx} className="flex flex-col">
                    <h4 className="mb-3.5 flex items-center gap-1.5 text-[14px] font-bold tracking-tight text-[#ed0055]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ed0055]" />
                      <span>{col.title}</span>
                    </h4>

                    <ul className="flex flex-col gap-2 list-none p-0 m-0">
                      {col.items.map((item) => (
                        <li key={item}>
                          <Link
                            to={`/search?query=${encodeURIComponent(item)}`}
                            onClick={closeMenu}
                            className="group flex items-center gap-1.5 text-[13px] text-[#4d3e47] transition-all duration-150 hover:translate-x-1 hover:text-[#ed0055]"
                          >
                            <ChevronRight
                              size={12}
                              className="text-gray-300 transition-colors group-hover:text-[#ed0055]"
                            />
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Bottom Quick Bar inside Mega Menu */}
              <div className="mt-8 flex items-center justify-between border-t border-rose-100/70 pt-4">
                <div className="flex items-center gap-2 text-[12px] text-[#7a6c75]">
                  <Sparkles size={14} className="text-[#ff7900]" />
                  <span>Discover 1000+ verified professionals across India</span>
                </div>

                <Link
                  to={currentMegaData.path}
                  onClick={closeMenu}
                  className="group inline-flex items-center gap-1.5 text-[12px] font-bold text-[#ed0055] transition hover:text-[#ff7900]"
                >
                  <span>View all {currentMegaData.label}</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================================================================ */}
      {/* MOBILE NAVIGATION DRAWER WITH ACCORDION                           */}
      {/* ================================================================ */}
      {open && (
        <div className="max-h-[calc(100vh-68px)] overflow-y-auto border-t border-[#F0DDE5] bg-white px-4 pb-6 pt-4 shadow-xl xl:hidden">
          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="mb-4 flex h-11 items-center gap-2 rounded-full border border-[#F0DDE5] bg-[#FFF7FA] px-3"
          >
            <Search size={17} className="text-[#ed0055]" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events, vendors..."
              aria-label="Search events, vendors or locations"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#9A8992]"
            />
          </form>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2.5 text-[14px] font-medium ${
                  isActive ? "text-[#ed0055]" : "text-[#51434B] hover:bg-[#FFF7FA]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/event-planners"
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2.5 text-[14px] font-medium ${
                  isActive ? "text-[#ed0055]" : "text-[#51434B] hover:bg-[#FFF7FA]"
                }`
              }
            >
              Event Planner
            </NavLink>

            {/* Event Category Accordion */}
            <div className="rounded-lg border border-rose-100/60 bg-[#fffbfc] p-2">
              <button
                type="button"
                onClick={() => setMobileEventOpen(!mobileEventOpen)}
                className="flex w-full items-center justify-between px-2 py-1.5 text-left text-[14px] font-semibold text-[#ed0055]"
              >
                <span>Event Category</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    mobileEventOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileEventOpen && (
                <div className="mt-2 flex flex-col gap-3 pl-3 pr-2 pt-2 border-t border-rose-100/50">
                  {EVENT_MEGA_MENU.tabs.map((tab) => (
                    <div key={tab.id}>
                      <p className="text-[12px] font-bold uppercase tracking-wide text-[#ff7900]">
                        {tab.name}
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {tab.columns.flatMap((c) => c.items).slice(0, 6).map((item) => (
                          <Link
                            key={item}
                            to={`/search?query=${encodeURIComponent(item)}`}
                            onClick={closeMenu}
                            className="rounded-md bg-white border border-rose-100 px-2 py-1 text-[11px] text-[#4d3e47] hover:text-[#ed0055]"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link
                    to="/event-categories"
                    onClick={closeMenu}
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-[#ed0055] pt-1"
                  >
                    <span>View all event categories →</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Vendor Category Accordion */}
            <div className="rounded-lg border border-rose-100/60 bg-[#fffbfc] p-2">
              <button
                type="button"
                onClick={() => setMobileVendorOpen(!mobileVendorOpen)}
                className="flex w-full items-center justify-between px-2 py-1.5 text-left text-[14px] font-semibold text-[#ed0055]"
              >
                <span>Vendor Category</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    mobileVendorOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileVendorOpen && (
                <div className="mt-2 flex flex-col gap-3 pl-3 pr-2 pt-2 border-t border-rose-100/50">
                  {VENDOR_MEGA_MENU.tabs.map((tab) => (
                    <div key={tab.id}>
                      <p className="text-[12px] font-bold uppercase tracking-wide text-[#ff7900]">
                        {tab.name}
                      </p>
                      <div className="mt-1.5 flex flex-wrap gap-1.5">
                        {tab.columns.flatMap((c) => c.items).slice(0, 6).map((item) => (
                          <Link
                            key={item}
                            to={`/search?query=${encodeURIComponent(item)}`}
                            onClick={closeMenu}
                            className="rounded-md bg-white border border-rose-100 px-2 py-1 text-[11px] text-[#4d3e47] hover:text-[#ed0055]"
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  <Link
                    to="/vendor-categories"
                    onClick={closeMenu}
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-[#ed0055] pt-1"
                  >
                    <span>View all vendor categories →</span>
                  </Link>
                </div>
              )}
            </div>

            <NavLink
              to="/blogs"
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2.5 text-[14px] font-medium ${
                  isActive ? "text-[#ed0055]" : "text-[#51434B] hover:bg-[#FFF7FA]"
                }`
              }
            >
              Blogs
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2.5 text-[14px] font-medium ${
                  isActive ? "text-[#ed0055]" : "text-[#51434B] hover:bg-[#FFF7FA]"
                }`
              }
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2.5 text-[14px] font-medium ${
                  isActive ? "text-[#ed0055]" : "text-[#51434B] hover:bg-[#FFF7FA]"
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>

          {/* Mobile Login */}
          <div className="mt-4 grid grid-cols-1 gap-3 border-t border-[#F0DDE5] pt-4">
            {onLoginClick ? (
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onLoginClick();
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ed0055] to-[#ff7900] px-3 py-3 text-center text-sm font-semibold text-white shadow-sm"
              >
                <UserRound size={16} aria-hidden="true" />
                Login
              </button>
            ) : (
              <Link
                to="/login"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ed0055] to-[#ff7900] px-3 py-3 text-center text-sm font-semibold text-white shadow-sm"
              >
                <UserRound size={16} aria-hidden="true" />
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;

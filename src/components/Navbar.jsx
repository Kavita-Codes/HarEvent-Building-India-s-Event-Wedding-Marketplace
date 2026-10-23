import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, Search, UserRound, X } from "lucide-react";

function Navbar({ onLoginClick }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const links = [
    { name: "Home", to: "/" },
    { name: "Event Planner", to: "/event-planners" },
    { name: "Event Category", to: "/event-categories" },
    { name: "Vendor Category", to: "/vendor-categories" },
    { name: "Blogs", to: "/blogs" },
    { name: "About Us", to: "/about" },
    { name: "Contact Us", to: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `whitespace-nowrap rounded-md px-2.5 py-2 !text-[13px] !font-semibold transition-colors ${
      isActive
        ? "bg-[#FCE8F0] text-[#D4145A]"
        : "text-[#51434B] hover:text-[#D4145A]"
    }`;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/search?query=${encodeURIComponent(search.trim())}`);
    setOpen(false);
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#F4E5EB] bg-white">
      <div className="mx-auto flex min-h-[68px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:gap-4 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0"
          aria-label="HarEvent Home"
        >
          <img
            src="/logoNavbar.png"
            alt="HarEvent"
            className="h-[56px] w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 xl:ml-auto xl:flex 2xl:gap-2"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden shrink-0 items-center gap-2 md:flex xl:ml-2">

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex h-9 w-[220px] items-center gap-2 rounded-full border border-[#F0DDE5] bg-[#FFF7FA] px-3 focus-within:border-[#D4145A] 2xl:w-[240px]"
          >
            <Search size={15} className="shrink-0 text-[#907D87]" />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events, vendors or locations..."
              aria-label="Search events, vendors or locations"
              className="min-w-0 flex-1 bg-transparent !text-[13px] text-[#453640] outline-none placeholder:text-[#9A8992]"
            />
          </form>

          {/* Login */}
          {onLoginClick ? (
            <button
              type="button"
              onClick={onLoginClick}
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-[18px] py-2 text-xs font-semibold text-white shadow-sm transition hover:brightness-105"
            >
              <UserRound size={13} aria-hidden="true" />
              Login
            </button>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-[18px] py-2 text-xs font-semibold text-white shadow-sm transition hover:brightness-105"
            >
              <UserRound size={13} aria-hidden="true" />
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
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#F0DDE5] text-[#D4145A] xl:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-[#F0DDE5] bg-white px-4 pb-5 pt-4 shadow-lg xl:hidden">

          {/* Mobile Search */}
          <form
            onSubmit={handleSearch}
            className="mb-4 flex h-11 items-center gap-2 rounded-full border border-[#F0DDE5] bg-[#FFF7FA] px-3"
          >
            <Search size={17} className="text-[#D4145A]" />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events, vendors or locations..."
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#9A8992]"
            />
          </form>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 !text-[14px] !font-medium ${
                    isActive
                      ? "bg-[#FFF0F5] text-[#D4145A]"
                      : "text-[#51434B] hover:bg-[#FFF7FA]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </nav>

          {/* Mobile Buttons */}
          <div className="mt-4 grid grid-cols-1 gap-3 border-t border-[#F0DDE5] pt-4">
            {onLoginClick ? (
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  onLoginClick();
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-3 py-3 text-center text-sm font-semibold text-white"
              >
                <UserRound size={16} aria-hidden="true" />
                Login
              </button>
            ) : (
              <Link
                to="/login"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-3 py-3 text-center text-sm font-semibold text-white"
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

export default Navbar
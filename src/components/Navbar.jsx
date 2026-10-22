import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Heart, Menu, Search, X } from "lucide-react";

function Navbar() {
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
    `whitespace-nowrap rounded-md px-2 py-2 text-[12px] font-medium transition-colors ${
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
      <div className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="shrink-0"
          aria-label="HarEvent Home"
        >
          <img
            src="/logo.png"
            alt="HarEvent"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-2 lg:flex"
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
        <div className="hidden shrink-0 items-center gap-2 md:flex">

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex h-9 w-[190px] items-center gap-2 rounded-full border border-[#F0DDE5] bg-[#FFF7FA] px-3 focus-within:border-[#D4145A] lg:w-[230px]"
          >
            <Search size={15} className="shrink-0 text-[#907D87]" />

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search events, vendors or locations..."
              aria-label="Search events, vendors or locations"
              className="min-w-0 flex-1 bg-transparent text-[10px] text-[#453640] outline-none placeholder:text-[#9A8992]"
            />
          </form>

          {/* Wishlist */}
          <Link
            to="/favorites"
            aria-label="Wishlist"
            title="Wishlist"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#D4145A] transition hover:bg-[#FFF0F5]"
          >
            <Heart size={19} strokeWidth={1.8} />
          </Link>

          {/* Login */}
          <Link
            to="/login"
            className="whitespace-nowrap rounded-full bg-[#D4145A] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#A80F46]"
          >
            Login
          </Link>

          {/* Join CTA */}
          <Link
            to="/join-as-vendor"
            className="whitespace-nowrap rounded-md bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:brightness-105"
          >
            Join as a Vendor
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#F0DDE5] text-[#D4145A] md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-[#F0DDE5] bg-white px-4 pb-5 pt-4 shadow-lg md:hidden">

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
                  `rounded-lg px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-[#FFF0F5] text-[#D4145A]"
                      : "text-[#51434B] hover:bg-[#FFF7FA]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/favorites"
              onClick={closeMenu}
              className="flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-[#51434B] hover:bg-[#FFF7FA]"
            >
              <Heart size={17} className="text-[#D4145A]" />
              Wishlist
            </Link>
          </nav>

          {/* Mobile Buttons */}
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#F0DDE5] pt-4">
            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-full border border-[#D4145A] px-3 py-3 text-center text-sm font-semibold text-[#D4145A]"
            >
              Login
            </Link>

            <Link
              to="/join-as-vendor"
              onClick={closeMenu}
              className="rounded-md bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-3 py-3 text-center text-sm font-semibold text-white"
            >
              Join as Vendor
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar
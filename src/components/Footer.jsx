import {
  MessageCircle,
  MapPin,
  BadgeCheck,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const quickLinks = [
    ["Home", "/"],
    ["Event Planner", "/event-planners"],
    ["Event Category", "/event-categories"],
    ["Vendor Category", "/vendor-categories"],
    ["Blogs", "/blogs"],
  ];

  const companyLinks = [
    ["About HarEvent", "/about"],
    ["Contact Us", "/contact"],
    ["Privacy Policy", "/privacy-policy"],
    ["Terms & Conditions", "/terms"],
  ];

  const vendorLinks = [
    ["Join as Vendor", "/join-as-vendor"],
    ["Vendor Login", "/vendor-login"],
    ["Vendor Registration", "/join-as-vendor"],
    ["Partner Guidelines", "/partner-guidelines"],
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/harevent_20/?hl=en",
    },
    {
      name: "YouTube",
      icon: FaYoutube,
      url: "https://www.youtube.com/",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/in/harevent-company-20772a428/",
    },
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "https://www.facebook.com/profile.php?id=61593053192328",
    },
  ];

  const linkClass =
    "group inline-flex items-center gap-1 text-[13px] text-[#78646E] transition-colors duration-200 hover:text-[#D4145A]";

  return (
    <footer className="relative mt-10 border-t-4 border-[#FCE8F0] bg-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-[1440px] px-5 pb-3 pt-8 sm:px-8 lg:px-10 lg:pb-3 lg:pt-9">

        {/* Footer Columns */}
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.25fr_0.8fr_0.85fr_0.95fr_1fr] lg:gap-x-8">

          {/* Brand */}
          <div className="max-w-[380px]">

            <img
              src="/logoNavbar.png"
              alt="HarEvent"
              className="mb-4 h-[76px] w-auto object-contain object-left"
            />

            <h3 className="mb-2 text-sm font-bold leading-6 text-[#32252D]">
              One Platform. Every Event. Every Vendor.
            </h3>

            <p className="text-[13px] leading-6 text-[#78646E]">
              HarEvent helps customers discover event professionals and
              services for weddings, celebrations, corporate functions,
              and special occasions. Explore your options, compare
              services, and connect with the right professionals for
              your event.
            </p>

            {/* Social Media */}
            <div className="mt-5">
              <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-[#493640]">
                Follow Us
              </h4>

              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ name, icon: Icon, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    title={name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4145A] text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#A80F46] hover:shadow-md"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#FFF2E9] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#E76A25]">
                <BadgeCheck size={11} />
                Trusted Discovery
              </span>

              <span className="inline-flex items-center gap-1 rounded-full bg-[#FCE8F0] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#D4145A]">
                <MapPin size={11} />
                Across India
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-3 sm:pt-4">
            <h3 className="mb-4 text-sm font-bold text-[#32252D]">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map(([name, to]) => (
                <li key={name}>
                  <a href={to} className={linkClass}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="pt-3 sm:pt-4">
            <h3 className="mb-4 text-sm font-bold text-[#32252D]">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map(([name, to]) => (
                <li key={name}>
                  <a href={to} className={linkClass}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Vendors */}
          <div className="pt-3 sm:pt-4">
            <h3 className="mb-4 text-sm font-bold text-[#32252D]">
              For Vendors
            </h3>

            <ul className="space-y-3">
              {vendorLinks.map(([name, to]) => (
                <li key={name}>
                  <a href={to} className={linkClass}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="pt-3 sm:pt-4">
            <h3 className="mb-4 text-sm font-bold text-[#32252D]">
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* Mobile */}
              <a
                href="tel:+917448181396"
                className="flex items-start gap-3 text-[13px] text-[#78646E] transition hover:text-[#D4145A]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF0F5] text-[#D4145A]">
                  <Phone size={15} />
                </span>

                <span>
                  <span className="mb-1 block text-[11px] text-[#A08C96]">
                    Mobile
                  </span>

                  <span className="font-medium">
                    +91 74481 81396
                  </span>
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/917448181396"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-[13px] text-[#78646E] transition hover:text-[#D4145A]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF8EE] text-[#239B56]">
                  <MessageCircle size={16} />
                </span>

                <span>
                  <span className="mb-1 block text-[11px] text-[#A08C96]">
                    WhatsApp
                  </span>

                  <span className="font-medium">
                    +91 74481 81396
                  </span>
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-5 rounded-lg border border-[#F8E8EE] bg-[#FFF5F8] px-4 py-3 text-center">
          <p className="text-[11px] leading-5 text-[#8A7580]">
            © 2026 HarEvent. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer
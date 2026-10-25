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
    "inline-flex items-center text-[13px] text-[#78646E] transition-colors duration-200 hover:text-[#D4145A]";

  return (
    <footer className="relative mt-10 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-2 pt-0 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:grid-cols-2 xl:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
          <div className="max-w-[380px]">
            <a href="/" aria-label="HarEvent Home" className="mb-4 inline-flex items-center gap-1">
              <img
                src="/logo.png"
                alt=""
                className="h-30 w-30 object-contain"
              />
            </a>

            <p className="max-w-[360px] text-[13px] leading-6 text-[#78646E]">
              HarEvent helps customers discover event professionals and
              services for weddings, celebrations, corporate functions,
              and special occasions.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1F4F8] text-[#536174] transition-all duration-200 hover:-translate-y-1 hover:bg-[#E5EAF1] hover:text-[#D4145A]"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 border-b border-[#E9EDF2] pb-3 text-sm font-bold text-[#32252D]">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(([name, to]) => (
                <li key={name}>
                  <a href={to} className={linkClass}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 border-b border-[#E9EDF2] pb-3 text-sm font-bold text-[#32252D]">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map(([name, to]) => (
                <li key={name}>
                  <a href={to} className={linkClass}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 border-b border-[#E9EDF2] pb-3 text-sm font-bold text-[#32252D]">
              For Vendors
            </h3>
            <p className="mb-4 text-[13px] leading-5 text-[#78646E]">
              Grow your event business with thousands of active bookings.
            </p>
            <div className="space-y-2.5">
              <a
                href="/vendor-login"
                className="flex min-h-10 items-center justify-center rounded-lg border border-[#E6EAF0] bg-[#F1F4F8] px-4 text-[13px] font-semibold text-[#32252D] transition-colors hover:bg-[#E5EAF1]"
              >
                Vendor Login
              </a>
              <a
                href="/join-as-vendor"
                className="flex min-h-10 items-center justify-center rounded-lg bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-4 text-[13px] font-semibold text-white transition hover:brightness-105"
              >
                Register as Vendor
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-[#E9EDF2] pt-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-5 text-[#8A7580]">
            © 2026 HarEvent. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-[11px] text-[#8A7580]">
              Designed for Seamless Celebrations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaPhoneAlt,
  FaWhatsapp,
  FaRegCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Event Planner", href: "/event-planners" },
  { label: "Event Category", href: "/event-categories" },
  { label: "Vendor Category", href: "/vendor-categories" },
  { label: "Blogs", href: "/blogs" },
];

const companyLinks = [
  { label: "About HarEvent", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const vendorLinks = [
  { label: "Join as a Vendor", href: "/join-as-vendor" },
  { label: "Vendor Login", href: "/vendor-login" },
  { label: "Partner Guidelines", href: "/partner-guidelines" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/harevent_20/?hl=en",
    Icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    Icon: FaYoutube,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/harevent-company-20772a428/",
    Icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61593053192328",
    Icon: FaFacebookF,
  },
];

function FooterLinkColumn({ title, links }) {
  return (
    <div className="min-w-0 pt-[48px] 2xl:pt-[54px] max-[1100px]:pt-[12px]">
      <h3 className="font-playfair text-[16px] font-semibold leading-[1.35] text-white">
        {title}
      </h3>

      <span className="mt-[7px] block h-[2px] w-[43px] rounded-full bg-gradient-to-r from-[#ed0055] to-[#ff7900]" />

      <ul className="mt-[14px] flex list-none flex-col gap-[10px] p-0">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="inline-block font-poppins text-[15px] font-normal leading-[1.45] text-white/90 no-underline transition-[transform,color] duration-200 ease-in-out hover:translate-x-[3px] hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full font-poppins motion-reduce:[&_*]:transition-none">
      {/* Main footer */}
      <div className="bg-[linear-gradient(112deg,#ed0870_0%,#ed2854_42%,#ff650e_100%)] text-white">
        <div className="mx-auto grid w-full max-w-[1600px] grid-cols-[1.85fr_1.05fr_1.05fr_1.15fr_1.3fr] items-start px-[5.3%] py-[24px] [column-gap:clamp(28px,3.8vw,64px)] max-[1100px]:grid-cols-[1.6fr_1fr_1fr] max-[1100px]:[column-gap:28px] max-[1100px]:[row-gap:20px] max-[1100px]:px-[5%] max-[1100px]:py-[26px] max-[540px]:grid-cols-[repeat(2,minmax(0,1fr))] max-[540px]:[column-gap:20px] max-[540px]:[row-gap:22px] max-[540px]:px-[6%] max-[540px]:py-[24px] 2xl:px-[5.3%] 2xl:pb-[14px] 2xl:pt-[24px]">
          {/* Brand */}
          <div className="min-w-0 pt-[4px] max-[1100px]:col-span-3 max-[540px]:col-span-2">
            <a
              href="/"
              className="mb-[10px] inline-flex items-center"
              aria-label="HarEvent Home"
            >
              <img
                src="/WhiteLogo.png"
                alt="HarEvent"
                className="block h-[70px] w-[170px] object-contain object-left 2xl:h-[80px] 2xl:w-[195px]"
              />
            </a>

            {/* Text aligned slightly to the right */}
            <div className="ml-[9px]">
              <h2 className="max-w-[310px] font-playfair text-[18px] font-bold leading-[1.3] tracking-[-0.25px] text-white max-[540px]:text-[20px] 2xl:text-[22px]">
                One Platform. Every Event.
                <br />
                Every Vendor.
              </h2>

              <p className="mt-[8px] max-w-[315px] font-poppins text-[12px] leading-[1.5] text-white/95 max-[1100px]:max-w-[430px] max-[540px]:text-[13px] 2xl:text-[14px]">
                HarEvent helps customers discover event professionals and
                services for weddings, celebrations, corporate functions, and
                special occasions.
              </p>

              <div
                className="mt-[12px] flex items-center gap-[10px]"
                aria-label="Social media links"
              >
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-white text-[#ed0870] no-underline transition-[transform,box-shadow,background] duration-200 ease-in-out hover:-translate-y-[3px] hover:scale-[1.06] hover:bg-[#fff4f7] hover:shadow-[0_5px_12px_rgba(80,0,30,0.2)] 2xl:h-[36px] 2xl:w-[36px]"
                  >
                    <Icon className="block h-[15px] w-[15px] 2xl:h-[17px] 2xl:w-[17px]" />
                  </a>
                ))}
              </div>

              <div className="mt-[12px] flex flex-wrap items-center gap-[8px]">
                <span className="inline-flex min-h-[24px] items-center justify-center gap-[6px] rounded-[30px] bg-[#fff7f5] px-[10px] py-[5px] font-poppins text-[10px] font-semibold leading-[1.2] whitespace-nowrap text-[#ff7900]">
                  <FaRegCheckCircle className="h-[12px] w-[12px] shrink-0" />
                  100% VERIFIED
                </span>

                <span className="inline-flex min-h-[24px] items-center justify-center gap-[6px] rounded-[30px] bg-[#fff7f5] px-[10px] py-[5px] font-poppins text-[10px] font-semibold leading-[1.2] whitespace-nowrap text-[#ed0870]">
                  <FaMapMarkerAlt className="h-[12px] w-[12px] shrink-0" />
                  PAN INDIA
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <FooterLinkColumn title="Quick Links" links={quickLinks} />

          {/* Company */}
          <FooterLinkColumn title="Company" links={companyLinks} />

          {/* For Vendors */}
          <FooterLinkColumn title="For Vendors" links={vendorLinks} />

          {/* Contact Us */}
          <div className="min-w-0 pt-[48px] max-[1100px]:col-span-3 max-[1100px]:pt-[12px] max-[540px]:col-span-2 2xl:pt-[54px]">
            <h3 className="font-playfair text-[16px] font-semibold leading-[1.35] text-white">
              Contact Us
            </h3>
            <span className="mt-[7px] block h-[2px] w-[43px] rounded-full bg-gradient-to-r from-[#ed0055] to-[#ff7900]" />

            <div className="mt-[16px] flex flex-col gap-[14px] max-[1100px]:flex-row max-[1100px]:flex-wrap max-[1100px]:gap-[14px_30px] max-[540px]:flex-col max-[540px]:gap-[12px]">
              <a
                href="tel:+917448181396"
                className="group flex min-w-0 items-center gap-[10px] text-white no-underline"
              >
                <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white/32 text-white transition-transform duration-200 ease-in-out group-hover:scale-[1.07]">
                  <FaPhoneAlt className="h-[15px] w-[15px]" />
                </span>

                <span className="min-w-0">
                  <span className="block font-poppins text-[11px] leading-[1.4] text-white/85">
                    Mobile
                  </span>
                  <span className="mt-[1px] block font-poppins text-[15px] font-semibold leading-[1.4] whitespace-nowrap text-white">
                    +91 74481 81396
                  </span>
                </span>
              </a>

              <a
                href="https://wa.me/917448181396"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-w-0 items-center gap-[10px] text-white no-underline"
              >
                <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white/32 text-white transition-transform duration-200 ease-in-out group-hover:scale-[1.07]">
                  <FaWhatsapp className="h-[15px] w-[15px]" />
                </span>

                <span className="min-w-0">
                  <span className="block font-poppins text-[11px] leading-[1.4] text-white/85">
                    WhatsApp
                  </span>
                  <span className="mt-[1px] block font-poppins text-[15px] font-semibold leading-[1.4] whitespace-nowrap text-white">
                    +91 74481 81396
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright: gradient background and white top border */}
      <div className="flex min-h-[38px] items-center justify-center border-t border-[#FCE7EE] bg-[linear-gradient(112deg,#ed0870_0%,#ed2854_42%,#ff650e_100%)] px-[16px] py-[10px] text-center font-poppins text-[13px] leading-[1.5] text-white max-[540px]:text-[10px] 2xl:min-h-[42px]">
        © 2026 HarEvent India Private Limited. All rights reserved.
      </div>
    </footer>
  );
}

import {
  BriefcaseBusiness,
  Compass,
  Layers3,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function BrandsAndPartners() {
  const highlights = [
    {
      title: "Explore Event Professionals",
      icon: BriefcaseBusiness,
    },
    {
      title: "Discover Diverse Services",
      icon: Compass,
    },
    {
      title: "Find Vendors Across Categories",
      icon: Layers3,
    },
  ];

  return (
    <section className="bg-white px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col gap-8 rounded-3xl border border-[#F5DCE6] bg-[#FFFAFC] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="max-w-xl">
            <div className="mb-2 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#D4145A]" />
              <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#D4145A]">
                Network Excellence
              </span>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-[#30232B] sm:text-4xl">
              Trusted Brands & Partners
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#8A7580]">
              Discover event professionals and service providers who bring creativity, quality, and expertise to every celebration.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <ul className="grid gap-3 sm:grid-cols-3 lg:min-w-[540px]">
              {highlights.map(({ title, icon: Icon }) => (
                <li
                  key={title}
                  className="flex items-center gap-3 rounded-xl border border-[#F5DCE6] bg-white p-3 text-xs font-semibold leading-5 text-[#493640]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF0F5] text-[#D4145A]">
                    <Icon size={17} />
                  </span>
                  {title}
                </li>
              ))}
            </ul>
            <Link
              to="/vendor-categories"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Explore Our Vendors <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandsAndPartners
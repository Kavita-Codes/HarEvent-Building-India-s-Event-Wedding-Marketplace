import { ArrowRight, Camera, MapPin, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import SectionImage from "./SectionImage";

const articles = [
  {
    title: "How to Choose the Right Wedding Photographer",
    description: "Learn how to evaluate photography styles, portfolios, experience, and packages before making your decision.",
    image: "/Joyful Indian Wedding Procession.png",
    icon: Camera,
  },
  {
    title: "10 Things to Check Before Booking an Event Venue",
    description: "Discover the essential details to consider when choosing the perfect venue for your event.",
    image: "/Golden-Hour Garden Wedding Ceremony.png",
    icon: MapPin,
  },
  {
    title: "How to Plan a Beautiful Event on a Budget",
    description: "Explore practical ways to prioritize your requirements, compare vendors, and plan your event thoughtfully.",
    image: "/Lavish Red and Gold Wedding Stage.png",
    icon: Wallet,
  },
];

function LatestBlogs() {
  return (
    <section className="bg-[#FFFAFC] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#D4145A]">
              Guides & Inspiration
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#30232B] sm:text-4xl">
              Latest from HarEvent
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#8A7580]">
              Get inspired with practical planning tips, creative ideas, and helpful insights for your next celebration.
            </p>
          </div>
          <Link
            to="/blogs"
            className="inline-flex w-fit shrink-0 items-center gap-2 text-xs font-semibold text-[#D4145A] transition hover:text-[#A80F46]"
          >
            Explore All Articles <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {articles.map(({ title, description, image, icon: Icon }) => (
            <article
              key={title}
              className="overflow-hidden rounded-2xl border border-[#F1DDE5] bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              <SectionImage
                src={image}
                alt={title}
                icon={Icon}
                className="h-48"
              />
              <div className="p-5">
                <h3 className="text-base font-bold leading-6 text-[#382832]">{title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#8A7580]">{description}</p>
                <Link
                  to="/blogs"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#D4145A] hover:text-[#A80F46]"
                >
                  Read More <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestBlogs;

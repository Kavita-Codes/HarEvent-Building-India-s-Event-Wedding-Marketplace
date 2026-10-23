import {
  ArrowLeftRight,
  Compass,
  Heart,
  Layers3,
  MessageCircle,
  SearchCheck,
} from "lucide-react";

const benefits = [
  {
    title: "More Choices, One Platform",
    description: "Explore a wide range of event professionals and services across multiple categories.",
    icon: Layers3,
  },
  {
    title: "Convenient Discovery",
    description: "Find relevant vendors without having to search across multiple platforms.",
    icon: Compass,
  },
  {
    title: "Compare with Confidence",
    description: "Review available portfolios, services, pricing information, and genuine customer feedback.",
    icon: ArrowLeftRight,
  },
  {
    title: "Your Event, Your Preferences",
    description: "Discover professionals according to your occasion, location, style, and budget.",
    icon: Heart,
  },
  {
    title: "Direct Vendor Connections",
    description: "Communicate with the professionals you choose to discuss your requirements.",
    icon: MessageCircle,
  },
];

function WhyChooseHarEvent() {
  return (
    <section className="bg-[#FFFAFC] px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#D4145A]">
            Your Event, Your Way
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#30232B] sm:text-4xl">
            Why Choose HarEvent?
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#8A7580]">
            Finding the right event professionals shouldn&apos;t be complicated. HarEvent brings event discovery and vendor connections together in one convenient place.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-[#F1DDE5] bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF0F5] text-[#D4145A]">
                <Icon size={21} />
              </span>
              <h3 className="mt-4 text-sm font-bold leading-5 text-[#382832]">{title}</h3>
              <p className="mt-2 text-xs leading-5 text-[#8A7580]">{description}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-2 text-center text-sm font-medium leading-6 text-[#6E5863]">
          <SearchCheck size={19} className="shrink-0 text-[#D4145A]" />
          Your vision matters. We&apos;re here to help you find the right connections to bring it to life.
        </p>
      </div>
    </section>
  );
}

export default WhyChooseHarEvent;

import {
  Search,
  Scale,
  MessagesSquare,
  CalendarCheck,
  PartyPopper,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "SEARCH",
      description: "Find event professionals based on your occasion, service requirements, and preferred location.",
      icon: Search,
      color: "pink",
    },
    {
      number: "02",
      title: "COMPARE",
      description: "Explore portfolios, services, ratings, and available pricing information to understand your options.",
      icon: Scale,
      color: "pink",
    },
    {
      number: "03",
      title: "CONNECT",
      description: "Reach out to the professionals who match your vision and discuss your requirements directly.",
      icon: MessagesSquare,
      color: "pink",
    },
    {
      number: "04",
      title: "BOOK",
      description: "Finalize your preferred services and booking arrangements with the selected vendor.",
      icon: CalendarCheck,
      color: "pink",
    },
    {
      number: "05",
      title: "CELEBRATE",
      description: "Bring your plans together and create moments worth remembering.",
      icon: PartyPopper,
      color: "orange",
    },
  ];

  return (
    <section className="w-full bg-[#FFF6F8] py-9 sm:py-10">
      <div className="mx-auto w-full px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <span className="h-[2px] w-6 bg-[#D4145A]" />

            <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#D4145A]">
              How It Works
            </span>

            <span className="h-[2px] w-6 bg-[#D4145A]" />
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#38232F] sm:text-3xl">
            How HarEvent Works
          </h2>

          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-[#8C7883] sm:text-sm">
            Planning an event starts with the right connections. HarEvent makes it easier to discover professionals, explore your options, and plan with confidence.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto mt-10 w-full max-w-[1200px]">

          {/* Connecting Line */}
          <div className="absolute left-[8%] right-[8%] top-[30px] hidden h-[2px] bg-gradient-to-r from-[#F4B4CD] via-[#F7A9C6] to-[#FFC18D] md:block" />

          <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5 md:gap-4">

            {steps.map(({ number, title, description, icon: Icon, color }) => (
              <div
                key={number}
                className="flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className="relative mb-4">
                  <div
                    className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-md transition-transform duration-300 hover:scale-110 ${
                      color === "orange"
                        ? "bg-[#FF790D]"
                        : "bg-[#E60059]"
                    }`}
                  >
                    <Icon size={21} strokeWidth={2} />
                  </div>

                  {/* Step Number */}
                  <span
                    className={`absolute -right-1 -top-1 z-20 flex h-[18px] min-w-[20px] items-center justify-center rounded-full border border-white px-1 text-[9px] font-bold text-[#D4145A] shadow-sm ${
                      number === "05"
                        ? "bg-gradient-to-r from-[#E60059] to-[#FF790D] text-white"
                        : "bg-white"
                    }`}
                  >
                    {number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[11px] font-bold tracking-wide text-[#3E2A35]">
                  {title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 max-w-[190px] text-[11px] leading-[1.5] text-[#8C7883]">
                  {description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks
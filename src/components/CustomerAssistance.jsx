import { ArrowRight, MessageCircleHeart } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "./MainAnimation";

function CustomerAssistance() {
  return (
    <section className="px-5 py-10 sm:px-8 lg:px-12 ">
      <Reveal
        className="mx-auto max-w-[1440px] overflow-hidden border rounded-3xl bg-[#fef0e1]  px-6 py-10 text-white sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-14 lg:py-12"
      >
        <Reveal className="flex items-start gap-4" delay={0.12} y={18} duration={0.55}>
          <span className="animate-float-soft flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FFF0F5] text-[#D4145A]">
            <MessageCircleHeart size={23} />
          </span>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#000000] sm:text-3xl">
              Need Help Finding the Right Vendor?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#000000]">
              Tell us about your upcoming event, and let us help you discover
              services that match your requirements.
            </p>
            <p className="mt-2 max-w-2xl text-xs leading-5 text-[#000000]">
              Whether you&apos;re planning a wedding, birthday, corporate
              function, or another special occasion, we&apos;re here to help you
              take the next step.
            </p>
          </div>
        </Reveal>

        <Reveal className="shrink-0" delay={0.2} y={16} duration={0.55}>
          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Send an Inquiry
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </Reveal>
    </section>
  );
}

export default CustomerAssistance;

import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail, Phone, UserRound, Briefcase, Store } from "lucide-react";
import { Link } from "react-router-dom";

function Signup({ initialVendorMode = false }) {
  const [vendorMode, setVendorMode] = useState(initialVendorMode);
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#FFFAFC] p-6 font-poppins sm:p-8">
      <div className="flex h-[min(560px,calc(100svh-3rem))] w-full max-w-[780px] overflow-hidden rounded-[24px] bg-white shadow-2xl">

        {/* Left Side: themed panel */}
        <div className={`relative hidden overflow-hidden transition-all duration-500 lg:block lg:w-[36%] ${
          vendorMode
            ? "bg-gradient-to-br from-[#143B2B] via-[#1B6B45] to-[#0D2B20]"
            : "bg-gradient-to-br from-[#D4145A] via-[#E60059] to-[#FF790D]"
        }`}>
        </div>

        {/* Right Side: compact signup form */}
        <div className="flex w-full flex-col justify-between gap-2 p-4 sm:p-5 lg:w-[64%] lg:p-6">

          <div className="relative flex min-h-20 items-center justify-center">
            <Link to="/" className="absolute left-0 inline-flex items-center gap-1.5 text-xs font-semibold text-[#78646E] transition hover:text-[#D4145A]">
              <ArrowLeft size={14} /> Back
            </Link>
            <img src="/logoForm.jpeg" alt="HarEvent" className="h-20 w-20 object-contain" />
          </div>

          <div className="mx-auto w-full max-w-[360px]">

            {/* Header & Mode Switcher */}
            <div className="mb-2 flex items-center justify-between">
              <div className={vendorMode ? "order-1" : ""}>
                <span className={`text-[9px] font-bold uppercase tracking-[1.5px] ${vendorMode ? "text-[#2D6A4F]" : "text-[#D4145A]"}`}>
                  {vendorMode ? "Vendor Portal" : "Customer Portal"}
                </span>
                <h2 className="mt-0.5 whitespace-nowrap text-lg font-bold tracking-tight text-[#30232B] sm:text-xl">
                  {vendorMode ? "Join as a Vendor" : "Create an account"}
                </h2>
              </div>

              {/* Toggle Button */}
              <button
                type="button"
                onClick={() => setVendorMode(!vendorMode)}
                className={`signup-mode-toggle relative isolate flex min-h-10 shrink-0 items-center gap-1.5 whitespace-nowrap overflow-hidden rounded-full border px-3 py-2 text-[11px] font-extrabold transition shadow-sm cursor-pointer ${
                  vendorMode
                    ? "signup-mode-toggle--vendor border-emerald-200 bg-emerald-50 text-[#2D6A4F] hover:bg-emerald-100"
                    : "signup-mode-toggle--customer border-[#F1DDE5] bg-[#FFF9FA] text-[#D4145A] hover:bg-[#FFF1F5]"
                }`}
              >
                <span className="signup-mode-toggle__fill" aria-hidden="true" />
                <span className="relative z-10 flex items-center gap-1.5">
                  {vendorMode ? <Store size={15} /> : <Briefcase size={15} />}
                  {vendorMode ? "Switch to Customer" : "Switch to Vendor"}
                </span>
              </button>
            </div>

            <p className="mb-2 text-[11px] text-[#8A7580] sm:text-xs">
              {vendorMode
                ? "Enter your business details to start receiving client leads."
                : "It only takes a minute to get started with your planning."}
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className={`grid w-full gap-x-3 gap-y-1.5 ${vendorMode ? "grid-cols-2" : "grid-cols-1"}`}>
              <div className={vendorMode ? "order-1" : ""}>
                <label className="mb-0.5 block text-[10px] font-semibold text-[#493640]">Full Name</label>
                <div className={`flex h-8 w-full items-center gap-2 rounded-lg border border-[#EED5DF] bg-[#FFFAFC] px-2.5 focus-within:border-2 ${vendorMode ? "focus-within:border-[#2D6A4F]" : "focus-within:border-[#D4145A]"}`}>
                  <UserRound size={14} className={`shrink-0 ${vendorMode ? "text-[#2D6A4F]" : "text-[#D4145A]"}`} />
                  <input required autoComplete="name" placeholder="e.g. Priya Sharma" className="w-full bg-transparent text-[11px] outline-none placeholder:text-[#B3A3AA]" />
                </div>
              </div>

              {vendorMode && (
                <div className="order-5 col-span-2">
                  <label className="mb-0.5 block text-[10px] font-semibold text-[#493640]">Business Name</label>
                  <div className="flex h-8 w-full items-center gap-2 rounded-lg border border-[#EED5DF] bg-[#FFFAFC] px-2.5 focus-within:border-2 focus-within:border-[#2D6A4F]">
                    <Store size={14} className="shrink-0 text-[#2D6A4F]" />
                    <input required autoComplete="organization" placeholder="Royal Events" className="w-full bg-transparent text-[11px] outline-none placeholder:text-[#B3A3AA]" />
                  </div>
                </div>
              )}

              <div className={vendorMode ? "order-2" : ""}>
                <label className="mb-0.5 block text-[10px] font-semibold text-[#493640]">Email Address</label>
                <div className={`flex h-8 w-full items-center gap-2 rounded-lg border border-[#EED5DF] bg-[#FFFAFC] px-2.5 focus-within:border-2 ${vendorMode ? "focus-within:border-[#2D6A4F]" : "focus-within:border-[#D4145A]"}`}>
                  <Mail size={14} className={`shrink-0 ${vendorMode ? "text-[#2D6A4F]" : "text-[#D4145A]"}`} />
                  <input required type="email" autoComplete="email" placeholder="you@example.com" className="w-full bg-transparent text-[11px] outline-none placeholder:text-[#B3A3AA]" />
                </div>
              </div>

              <div className={vendorMode ? "order-3" : ""}>
                <label className="mb-0.5 block text-[10px] font-semibold text-[#493640]">Phone Number</label>
                <div className={`flex h-8 w-full items-center gap-2 rounded-lg border border-[#EED5DF] bg-[#FFFAFC] px-2.5 focus-within:border-2 ${vendorMode ? "focus-within:border-[#2D6A4F]" : "focus-within:border-[#D4145A]"}`}>
                  <Phone size={14} className={`shrink-0 ${vendorMode ? "text-[#2D6A4F]" : "text-[#D4145A]"}`} />
                  <input required type="tel" autoComplete="tel" placeholder="+91 98765 43210" className="w-full bg-transparent text-[11px] outline-none placeholder:text-[#B3A3AA]" />
                </div>
              </div>

              {vendorMode && (
                <div className="order-7 col-span-2">
                  <label className="mb-0.5 block text-[10px] font-semibold text-[#493640]">Service Category</label>
                  <select required defaultValue="" className="h-8 w-full rounded-lg border border-[#EED5DF] bg-[#FFFAFC] px-2.5 text-[11px] text-[#78646E] outline-none focus:border-2 focus:border-[#2D6A4F]">
                    <option value="" disabled>Select category</option>
                    <option>Photography & Videography</option>
                    <option>Wedding & Event Decor</option>
                    <option>Venues & Banquets</option>
                    <option>Catering Services</option>
                    <option>Makeup & Styling</option>
                    <option>DJ & Entertainment</option>
                  </select>
                </div>
              )}

              <div className={vendorMode ? "order-4" : ""}>
                <label className="mb-0.5 block text-[10px] font-semibold text-[#493640]">Password</label>
                <div className={`flex h-8 w-full items-center gap-2 rounded-lg border border-[#EED5DF] bg-[#FFFAFC] px-2.5 focus-within:border-2 ${vendorMode ? "focus-within:border-[#2D6A4F]" : "focus-within:border-[#D4145A]"}`}>
                  <LockKeyhole size={14} className={`shrink-0 ${vendorMode ? "text-[#2D6A4F]" : "text-[#D4145A]"}`} />
                  <input required minLength={8} type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="At least 8 characters" className="w-full bg-transparent text-[11px] outline-none placeholder:text-[#B3A3AA]" />
                  <button type="button" aria-label="Toggle password" onClick={() => setShowPassword(!showPassword)} className="shrink-0 text-[#8A7580] transition hover:text-[#D4145A]">
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>

              <label className={`col-span-full mt-2 flex cursor-pointer items-start gap-2 pt-0.5 text-[10px] text-[#78646E] ${vendorMode ? "order-8" : ""}`}>
                <input required type="checkbox" className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${vendorMode ? "accent-[#2D6A4F]" : "accent-[#D4145A]"}`} />
                <span>I agree to the <a href="/terms" className="underline">Terms</a> & <a href="/privacy-policy" className="underline">Privacy Policy</a>.</span>
              </label>

              <button
                type="submit"
                className={`col-span-full flex h-10 w-full items-center justify-center rounded-full text-xs font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg ${vendorMode ? "order-9" : ""} ${
                  vendorMode
                    ? "bg-gradient-to-r from-[#2D6A4F] to-[#52B788]"
                    : "bg-gradient-to-r from-[#E60059] to-[#FF790D]"
                }`}
              >
                {vendorMode ? "Create Vendor Account" : "Create Account"}
              </button>

              {submitted && (
                <p role="status" className={`col-span-full rounded-lg px-3 py-2 text-center text-[11px] font-medium ${vendorMode ? "order-10 bg-emerald-50 text-[#2D6A4F]" : "bg-[#FFF0F5] text-[#A80F46]"}`}>
                  Account registration preview submitted successfully!
                </p>
              )}
            </form>

            {/* Footer Sign in Link */}
            <p className="mt-2 text-center text-xs text-[#78646E]">
              Already have an account?{" "}
              <Link to={vendorMode ? "/?form=vendor" : "/?form=login"} className={`font-semibold hover:underline ${vendorMode ? "text-[#2D6A4F]" : "text-[#D4145A]"}`}>Sign in</Link>
            </p>

          </div>

        </div>

      </div>
    </main>
  );
}

export default Signup;
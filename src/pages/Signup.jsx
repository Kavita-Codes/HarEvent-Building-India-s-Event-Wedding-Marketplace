import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail, Phone, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

function Signup({ vendorMode = false }) {
  const [showPassword, setShowPassword] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#FFFAFC] px-4 py-5 sm:px-6 sm:py-7">
      <div className="w-full max-w-md">
        <Link to="/" className="mb-3 inline-flex items-center gap-2 text-xs font-medium text-[#78646E] hover:text-[#D4145A]">
          <ArrowLeft size={16} /> Back to HarEvent
        </Link>

        <div className="rounded-2xl border border-[#F1DDE5] bg-white p-5 shadow-[0_12px_32px_rgba(89,32,55,0.08)] sm:p-6">
          <section>
            <div className="mb-4">
              <Link to="/">
                <img src="/logo.png" alt="HarEvent" className="h-8 w-auto object-contain" />
              </Link>
            </div>
            <p className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#D4145A]">
              {vendorMode ? "Vendor registration" : "Get started"}
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#30232B]">
              {vendorMode ? "Join as a Vendor" : "Create your account"}
            </h2>
            <p className="mt-1 text-xs leading-5 text-[#8A7580]">
              {vendorMode ? "Tell us about yourself and your business." : "It only takes a moment to get started."}
            </p>

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <label className="block text-[11px] font-semibold text-[#493640]">
                {vendorMode ? "Your full name" : "Full name"}
                <span className="mt-1.5 flex h-9 items-center gap-2.5 rounded-lg border border-[#EED5DF] bg-[#FFFAFC] px-3 focus-within:border-[#D4145A]">
                  <UserRound size={15} className="shrink-0 text-[#D4145A]" />
                  <input required autoComplete="name" placeholder="e.g. Priya Sharma" className="min-w-0 flex-1 bg-transparent text-xs font-normal outline-none placeholder:text-[#B3A3AA]" />
                </span>
              </label>

              {vendorMode && (
                <label className="block text-[11px] font-semibold text-[#493640]">
                  Business name
                  <input required placeholder="Your business name" className="mt-1.5 h-9 w-full rounded-lg border border-[#EED5DF] bg-[#FFFAFC] px-3 text-xs font-normal outline-none placeholder:text-[#B3A3AA] focus:border-[#D4145A]" />
                </label>
              )}

              <label className="block text-[11px] font-semibold text-[#493640]">
                Email address
                <span className="mt-1.5 flex h-9 items-center gap-2.5 rounded-lg border border-[#EED5DF] bg-[#FFFAFC] px-3 focus-within:border-[#D4145A]">
                  <Mail size={15} className="shrink-0 text-[#D4145A]" />
                  <input required type="email" autoComplete="email" placeholder="you@example.com" className="min-w-0 flex-1 bg-transparent text-xs font-normal outline-none placeholder:text-[#B3A3AA]" />
                </span>
              </label>

              <label className="block text-[11px] font-semibold text-[#493640]">
                Phone number
                <span className="mt-1.5 flex h-9 items-center gap-2.5 rounded-lg border border-[#EED5DF] bg-[#FFFAFC] px-3 focus-within:border-[#D4145A]">
                  <Phone size={15} className="shrink-0 text-[#D4145A]" />
                  <input required type="tel" autoComplete="tel" placeholder="+91 98765 43210" className="min-w-0 flex-1 bg-transparent text-xs font-normal outline-none placeholder:text-[#B3A3AA]" />
                </span>
              </label>

              {vendorMode && (
                <label className="block text-[11px] font-semibold text-[#493640]">
                  Service category
                  <select required defaultValue="" className="mt-1.5 h-9 w-full rounded-lg border border-[#EED5DF] bg-[#FFFAFC] px-3 text-xs font-normal text-[#78646E] outline-none focus:border-[#D4145A]">
                    <option value="" disabled>Select a category</option>
                    <option>Photography</option>
                    <option>Decor</option>
                    <option>Venue</option>
                    <option>Catering</option>
                    <option>Entertainment</option>
                    <option>Other</option>
                  </select>
                </label>
              )}

              <label className="block text-[11px] font-semibold text-[#493640]">
                Password
                <span className="mt-1.5 flex h-9 items-center gap-2.5 rounded-lg border border-[#EED5DF] bg-[#FFFAFC] px-3 focus-within:border-[#D4145A]">
                  <LockKeyhole size={15} className="shrink-0 text-[#D4145A]" />
                  <input required minLength={8} type={showPassword ? "text" : "password"} autoComplete="new-password" placeholder="At least 8 characters" className="min-w-0 flex-1 bg-transparent text-xs font-normal outline-none placeholder:text-[#B3A3AA]" />
                  <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((visible) => !visible)} className="shrink-0 text-[#8A7580] hover:text-[#D4145A]">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </span>
              </label>

              <label className="flex items-start gap-2 text-[11px] leading-4 text-[#78646E]">
                <input required type="checkbox" className="mt-1 accent-[#D4145A]" />
                <span>I agree to the terms and privacy policy.</span>
              </label>

              <button type="submit" className="flex h-10 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] text-xs font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg">
                {vendorMode ? "Create Vendor Account" : "Create Account"}
              </button>
              {submitted && (
                <p role="status" className="rounded-xl bg-[#FFF0F5] px-4 py-3 text-xs leading-5 text-[#A80F46]">
                  This is a UI preview. Account registration is not connected yet.
                </p>
              )}
            </form>

            <p className="mt-4 text-center text-xs text-[#78646E]">
              Already have an account?{" "}
              <Link to="/login" className="font-semibold text-[#D4145A] hover:text-[#A80F46]">Sign in</Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Signup;

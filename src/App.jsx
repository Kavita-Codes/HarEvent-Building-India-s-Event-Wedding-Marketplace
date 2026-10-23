import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Enquiry from "./pages/Enquiry";
import EventCategories from "./pages/EventCategories";
import EventPlanners from "./pages/EventPlanners";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import JoinAsVendor from "./pages/JoinAsVendor";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import VendorCategories from "./pages/VendorCategories";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event-planners" element={<EventPlanners />} />
          <Route path="/event-categories" element={<EventCategories />} />
          <Route path="/vendor-categories" element={<VendorCategories />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vendor-login" element={<Login initialMode="vendor" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/join-as-vendor" element={<JoinAsVendor />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <a
          href="https://wa.me/917448181396"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="fixed bottom-5 right-5 z-[60] inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#D4145A] to-[#FF7628] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-900/20 transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4145A]"
        >
          <FaWhatsapp size={19} aria-hidden="true" />
          Chat with us
        </a>
      </>
    </BrowserRouter>
  );
}

export default App;

import {
  AudioLines,
  Cake,
  Camera,
  Flower2,
  Heart,
  Utensils,
  Building2,
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Flower Decor", icon: Flower2, color: "pink" },
  { name: "Photography", icon: Camera, color: "orange" },
  { name: "Catering", icon: Utensils, color: "pink" },
  { name: "Wedding Planning", icon: Heart, color: "pink" },
  { name: "DJ & Entertainment", icon: AudioLines, color: "orange" },
  { name: "Venues", icon: Building2, color: "pink" },
  { name: "Cake & Desserts", icon: Cake, color: "orange" },
];

function FeaturedServiceCategories() {
  return (
    <section className="bg-white px-5 pb-10 sm:px-8 lg:px-12 lg:pb-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {categories.map(({ name, icon: Icon, color }) => (
            <Link
              key={name}
              to="/vendor-categories"
              className="group flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-[#F2DDE5] bg-white px-3 py-5 text-center transition duration-200 hover:-translate-y-1 hover:border-[#F28BB3] hover:shadow-md"
            >
              <span
                className={`mb-3 flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-transform group-hover:scale-105 ${
                  color === "pink" ? "bg-[#E60059]" : "bg-[#FF790D]"
                }`}
              >
                <Icon size={27} strokeWidth={1.9} />
              </span>
              <span
                className={`rounded-full px-3 py-1.5 text-[10px] font-semibold ${
                  color === "pink"
                    ? "bg-[#FDEAF2] text-[#D4145A]"
                    : "bg-[#FFF1E5] text-[#E76A16]"
                }`}
              >
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedServiceCategories;

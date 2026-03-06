import { NavLink } from "react-router-dom";
import logo from "../../assets/School_img.png";

const Navbar: React.FC = () => {

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-base font-medium transition ${
      isActive
        ? "text-[#083BA0] border-b-2 border-[#083BA0]"
        : "text-gray-700 hover:text-[#083BA0]"
    }`;

  const announcements = [
    "🔔 Apply For Admission",
    "📢 Notices",
    "💡 Fee Structure",
    "📞 Contact Us",
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

        {/* ───── Announcement Bar ───── */}
        <div className="w-full bg-sky-300 py-2 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...announcements, ...announcements].map((item, i) => (
              <span
                key={i}
                className="mx-10 text-sm font-semibold text-gray-800 cursor-pointer hover:text-[#083BA0] transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ───── Logo + School Name Section ───── */}
        <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-5 py-4">
          
          <img
            src={logo}
            alt="School Logo"
            className="h-25 w-auto object-contain"
          />

          <div className="text-center">
            <h1 className="text-lg md:text-3xl font-bold tracking-wide text-[#313567]">
              ADARSHA SISHU BIDYA BITHI
            </h1>
            <p className="text-sm text-gray-900">
              (NURSERY & K.G. PRIMARY SCHOOL)
            </p>
            <p className="text-xs text-gray-900">
              ESTD : 1959
            </p>
          </div>
        </div>

        {/* ───── Full Navbar (Always Visible) ───── */}
        <div className="w-full bg-white ">
          <nav className="flex justify-center gap-10 py-4 flex-wrap">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/academics" className={navClass}>Academics</NavLink>
            <NavLink to="/registration" className={navClass}>Registration</NavLink>
            <NavLink to="/achievement" className={navClass}>Achievement</NavLink>
            <NavLink to="/notice" className={navClass}>Notice</NavLink>
            <NavLink to="/gallery" className={navClass}>Gallery</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>
        </div>

      </header>

      {/* Spacer (Important because header is fixed) */}
      <div className="h-[220px]"></div>
    </>
  );
};

export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavItem } from "../../types";

interface HeaderProps {
  isScrolled: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "Welcome", path: "/about#history" },
      { label: "Mission", path: "/about#mission" },
      { label: "Board Members", path: "/about#board-members" },
      { label: "Staffs", path: "/about#staffs" },
      { label: "Parent Teacher Association (PTA)", path: "/pta" },
    ],
  },
  {
    label: "Admissions",
    path: "/admissions",
    children: [
      { label: "Process", path: "/admissions#process" },
      { label: "Requirements", path: "/admissions#requirements" },
      { label: "Academic Calendar", path: "/admissions#calendar" },
      { label: "Apply Now", path: "/admissions#apply" },
      { label: "FAQs", path: "/admissions#faq" },
    ],
  },
  { label: "Facilities", path: "/facilities" },
  { label: "Rules & Regulations", path: "/rules&reg" },
  { label: "Gallery", path: "/gallery" },
  { label: "News & Events", path: "/news-events" },
  { label: "Contact", path: "/contact" },
];

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleMouseEnter = (label: string) => {
    if (!mobileMenuOpen) {
      setActiveDropdown(label);
    }
  };

  const handleMouseLeave = () => {
    if (!mobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link
          to="/"
          className={`flex items-center space-x-2 ${
            !isScrolled && "md:text-white"
          }`}
        >
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="Logo"
            className="w-16 h-16"
          />
          <div>
            <h1
              className={`text-base font-bold ${
                isScrolled ? "text-primary-900" : "text-white"
              }`}
            >
              ST. MICHEL’S ENGLISH SCHOOL
            </h1>
            <p
              className={`font-semibold text-xs ${
                isScrolled ? "text-primary-700" : "text-gray-200"
              }`}
            >
              Building Bright Futures since 1981
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-300 flex items-center ${
                    isActive
                      ? "text-accent"
                      : isScrolled
                      ? "text-gray-800 hover:text-accent"
                      : "text-white hover:text-accent"
                  }`
                }
              >
                {item.label}
                {item.children && <ChevronDown size={16} className="ml-1" />}
              </NavLink>

              {item.children && (
                <div
                  className={`absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 origin-top-left ${
                    activeDropdown === item.label
                      ? "opacity-100 scale-100 visible"
                      : "opacity-0 scale-95 invisible"
                  }`}
                >
                  <div className="py-2">
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.path}
                        className={`block px-4 py-2 text-sm ${
                          location.pathname + location.hash === child.path
                            ? "bg-gray-50 text-accent"
                            : "text-gray-800"
                        } hover:bg-gray-50 hover:text-accent transition-colors duration-300`}
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <button
          className={`lg:hidden ${
            isScrolled ? "text-gray-800" : "text-white"
          } hover:text-accent focus:outline-none`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="container py-5">
          <button
            className="absolute top-5 right-5 text-gray-800 hover:text-accent focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            <X size={24} />
          </button>

          <div className="py-10 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100">
                <div className="flex items-center justify-between py-3">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-base font-medium ${
                        isActive ? "text-accent" : "text-gray-800"
                      }`
                    }
                    onClick={() => !item.children && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>

                  {item.children && (
                    <button
                      className="p-2 text-gray-500 hover:text-accent"
                      onClick={() => toggleDropdown(item.label)}
                      aria-label={`Toggle ${item.label} dropdown`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.children && (
                  <div
                    className={`pl-4 overflow-hidden transition-all duration-300 ${
                      activeDropdown === item.label ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.children.map((child) => (
                      <NavLink
                        key={child.label}
                        to={child.path}
                        className={`block py-2 text-sm ${
                          location.pathname + location.hash === child.path
                            ? "text-accent"
                            : "text-gray-600"
                        } hover:text-accent`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              to="/admissions#apply"
              className="btn-primary w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

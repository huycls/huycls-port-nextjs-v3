import Link from "next/link";
import StarBorder from "../../atoms/StarBorder";
import { useState, useRef, useEffect } from "react";

const menuItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Works",
    href: "#works",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Menu = ({
  className = "",
  currentSection: externalCurrentSection,
  onSectionChange,
  ...props
}) => {
  const [currentSection, setCurrentSection] = useState(
    externalCurrentSection || "#home"
  );
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const itemRefs = useRef({});
  const ulRef = useRef(null);

  // Sync với external currentSection nếu có
  useEffect(() => {
    if (externalCurrentSection !== undefined) {
      setCurrentSection(externalCurrentSection);
    }
  }, [externalCurrentSection]);

  const updateIndicator = (href) => {
    const itemRef = itemRefs.current[href];
    if (itemRef && ulRef.current) {
      const ulRect = ulRef.current.getBoundingClientRect();
      const itemRect = itemRef.getBoundingClientRect();

      setIndicatorStyle({
        width: itemRect.width,
        left: itemRect.left - ulRect.left,
      });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateIndicator(currentSection);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    updateIndicator(currentSection);

    const handleResize = () => {
      updateIndicator(currentSection);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentSection]);

  const handleClick = (section) => {
    setCurrentSection(section);
    updateIndicator(section);

    // Update URL hash
    window.location.hash = section;

    // Notify parent component
    if (onSectionChange) {
      onSectionChange(section);
    }
  };

  return (
    <nav
      className="max-[1540px] pr-4 sm:pr-10 md:pr-20 mx-auto fixed inset-x-0 top-0 z-10 h-16 sm:h-20 px-2 sm:px-4"
      {...props}>
      <div className="flex items-center justify-center sm:justify-end pt-4 sm:pt-3 lg:pt-10 w-full">
        <div className="overflow-x-auto scrollbar-none max-w-full">
          <ul
            ref={ulRef}
            className="flex text-white py-1.5 gap-1 sm:gap-4 relative whitespace-nowrap">
            <span
              className="menu-indicator"
              style={{
                width: `${indicatorStyle.width}px`,
                left: `${indicatorStyle.left}px`,
              }}
            />
            {menuItems.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  ref={(el) => (itemRefs.current[item.href] = el)}
                  href={item.href}
                  onClick={() => handleClick(item.href)}
                  className={`relative py-1.5 sm:py-2 text-sm sm:text-lg px-3 sm:px-6 rounded-t-xl z-10 transition-colors duration-300 ${
                    currentSection === item.href ? "text-[#333333]" : ""
                  }`}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

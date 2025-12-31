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
      className="max-[1540px] pr-20 mx-auto fixed inset-0 z-10 h-20 px-4"
      {...props}>
      <div className="flex items-center justify-end pt-10">
        <ul
          ref={ulRef}
          className={`flex text-white py-1.5 gap-4 relative`}>
          <span
            className="menu-indicator"
            style={{
              width: `${indicatorStyle.width}px`,
              left: `${indicatorStyle.left}px`,
            }}
          />
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                ref={(el) => (itemRefs.current[item.href] = el)}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={`relative py-2 text-lg px-6 rounded-t-xl z-10 transition-colors duration-300 ${
                  currentSection === item.href ? "text-[#333333]" : ""
                }`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;

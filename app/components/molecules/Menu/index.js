import Link from "next/link";

const menuItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Works",
    href: "/works",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Menu = ({ className = "", ...props }) => {
  return (
    <ul
      {...props}
      className={`flex text-white flex-col gap-4  ${className}`}>
      {menuItems.map((item) => (
        <li
          key={item.href}
          className="relative text-2xl before:content-[''] before:absolute before:top-4 before:rounded-full before:left-0 before:w-1 before:h-1 before:bg-white pl-4">
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

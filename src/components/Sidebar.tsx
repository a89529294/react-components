import Link from "./Link";

function Sidebar() {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
    { label: "Counter", path: "/counter" },
  ];
  const renderedLinks = links.map((link) => (
    <Link
      key={link.label}
      to={link.path}
      className="mb-3"
      activeClassName="font-bold border-l-4 border-blue-500 pl-2">
      {link.label}
    </Link>
  ));

  return (
    <div className="flex flex-col sticky top-0 overflow-y-auto items-start">{renderedLinks}</div>
  );
}

export default Sidebar;

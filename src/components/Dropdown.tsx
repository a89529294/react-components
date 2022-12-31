import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";

export type Option = { label: string; value: string };
type Props = {
  options: Option[];
  value: Option | null;
  onChange: React.Dispatch<React.SetStateAction<Option | null>>;
};
function Dropdown({ options, value, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.documentElement.addEventListener("click", handleClick, true);

    return () => document.documentElement.removeEventListener("click", handleClick, true);
  }, []);

  const handleSelectClick = () => setIsOpen((pv) => !pv);

  const handleOptionClick = (option: Option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => (
    <div
      className="hover:bg-sky-100 rounded cursor-pointer p-1"
      key={option.value}
      onClick={() => handleOptionClick(option)}>
      {option.label}
    </div>
  ));

  return (
    <div className="w-48 relative" ref={dropdownRef}>
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleSelectClick}>
        {value?.label ?? "Select..."}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
    </div>
  );
}

export default Dropdown;

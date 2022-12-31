import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

type Item = { id: string; label: string; content: string };
function Accordion({ items }: { items: Item[] }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, i) => {
    const isExpanded = i === expandedIndex;
    const icon = (
      <span className="text-xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );
    return (
      <div key={item.id}>
        <div
          onClick={() => setExpandedIndex((pv) => (pv === i ? -1 : i))}
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between">
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;

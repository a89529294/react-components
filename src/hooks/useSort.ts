import { useState } from "react";
import { SortableColumn } from "../components/table/tableTypes";

export default function useSort<T>(
  data: T[],
  config: { label: string; sortValue?: (arg: T) => number | string }[]
) {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | null>(null);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const sortedData = (() => {
    if (!sortOrder || !sortBy) return data;

    const { sortValue } = config.find((c) => c.label === sortBy)!;
    const sortModifier = sortOrder === "asc" ? 1 : -1;
    return [...data].sort((a, b) => {
      const valueA = sortValue!(a);
      const valueB = sortValue!(b);
      if (typeof valueA === "string" && typeof valueB === "string") {
        return valueA.localeCompare(valueB) * sortModifier;
      } else if (typeof valueA === "number" && typeof valueB === "number") {
        return (valueA - valueB) * sortModifier;
      } else return 0; // this should not be possible, need better ts
    });
  })();

  const setSortColumn = (col: SortableColumn<T>) => {
    if (col.label !== sortBy) {
      setSortOrder("asc");
      setSortBy(col.label);
      return;
    }
    switch (sortOrder) {
      case null:
        setSortOrder("asc");
        setSortBy(col.label);
        break;
      case "asc":
        setSortOrder("desc");
        setSortBy(col.label);
        break;
      case "desc":
        setSortOrder(null);
        setSortBy(null);
    }
  };

  return {
    sortBy,
    sortOrder,
    sortedData,
    setSortColumn,
  };
}

import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

import useSort from "../../hooks/useSort";
import Table from "./Table";
import { SortableTableProps } from "./tableTypes";

function SortableTable<T>({ data, config, keyFn }: SortableTableProps<T>) {
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort(data, config);

  const newConfig = config.map((col) =>
    col.sortValue
      ? {
          ...col,
          header: (
            <th
              key={col.label}
              onClick={() => setSortColumn(col)}
              className="cursor-pointer hover:bg-gray-100 select-none">
              <div className="flex items-center">
                {getIcons(col.label, sortBy, sortOrder)}
                {col.label}
              </div>
            </th>
          ),
        }
      : col
  );

  return <Table data={sortedData} keyFn={keyFn} config={newConfig} />;
}

function getIcons(label: string, sortBy: string | null, sortOrder: "asc" | "desc" | null) {
  if (label !== sortBy)
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );

  switch (sortOrder) {
    case null:
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    case "asc":
      return (
        <div>
          <GoArrowSmallUp />
        </div>
      );
    case "desc":
      return (
        <div>
          <GoArrowSmallDown />
        </div>
      );
  }
}

export default SortableTable;

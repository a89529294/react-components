import { ReactNode } from "react";

export type TableProps<T> = {
  data: T[]; // rows, this is our data
  config: Column<T>[]; // columns, how we render each data cell
  keyFn: (row: T) => string; // key of each row
};

export type SortableTableProps<T> = {
  data: T[]; // rows, this is our data
  config: SortableColumn<T>[]; // columns, how we render each data cell
  keyFn: (row: T) => string; // key of each row
};

type BaseColumn<T> = {
  readonly label: string;
  render: (row: T) => ReactNode;
};

export type Column<T> = BaseColumn<T> & {
  header?: ReactNode;
};

export type SortableColumn<T> = BaseColumn<T> & {
  sortValue?: (row: T) => number | string;
};

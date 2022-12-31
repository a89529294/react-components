import { ReactNode } from "react";

export type Column<T> = { label: string; render: (cell: T) => ReactNode };
function Table<T>({
  data,
  config,
  keyFn,
}: {
  data: T[]; // rows
  config: Column<T>[]; // columns
  keyFn: (row: T) => string; // key of each row
}) {
  const renderedHeaders = config.map((col) => <th key={col.label}>{col.label}</th>);
  const renderedRows = data.map((row) => (
    <tr className="border-b" key={keyFn(row)}>
      {config.map((col) => (
        <td key={col.label} className="p-3">
          {col.render(row)}
        </td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;

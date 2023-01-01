import { Fragment } from "react";
import { TableProps } from "./tableTypes";

function Table<T>({ data, config, keyFn }: TableProps<T>) {
  const renderedHeaders = config.map((col) =>
    col.header ? (
      <Fragment key={col.label}>{col.header}</Fragment>
    ) : (
      <th key={col.label}>{col.label}</th>
    )
  );
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

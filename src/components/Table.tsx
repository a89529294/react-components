import React from "react";
import { Column, Fruit } from "../pages/TablePage";

function Table({ data, config }: { data: Fruit[]; config: Column[] }) {
  const renderedHeaders = config.map((col) => <th key={col.label}>{col.label}</th>);
  const renderedRows = data.map((row) => (
    <tr className="border-b" key={row.name}>
      {config.map((col) => (
        <td key={col.label} className="p-3">
          {col.render(row)}
        </td>
      ))}
    </tr>
  ));

  return (
    <table className="">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;

import React, { ReactNode } from "react";
import Table from "../components/Table";

export type Fruit = { name: string; color: string; score: number };
const data: Fruit[] = [
  { name: "Orange", color: "bg-orange-300", score: 5 },
  { name: "Apple", color: "bg-red-300", score: 3 },
  { name: "Banana", color: "bg-yellow-500", score: 1 },
  { name: "Lime", color: "bg-green-500", score: 4 },
];
export type Column = { label: string; render: (cell: Fruit) => ReactNode };
const config: Column[] = [
  { label: "Name", render: (cell) => cell.name },
  { label: "Color", render: (cell) => <div className={`p-3 m-2 ${cell.color}`}></div> },
  { label: "Score", render: (cell) => cell.score },
];

function TablePage() {
  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
}

export default TablePage;

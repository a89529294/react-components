import Table, { Column } from "../components/Table";

export type Fruit = { name: string; color: string; score: number };
const data: Fruit[] = [
  { name: "Orange", color: "bg-orange-300", score: 5 },
  { name: "Apple", color: "bg-red-300", score: 3 },
  { name: "Banana", color: "bg-yellow-500", score: 1 },
  { name: "Lime", color: "bg-green-500", score: 4 },
];

const config: Column<Fruit>[] = [
  { label: "Name", render: (cell) => cell.name },
  { label: "Color", render: (cell) => <div className={`p-3 m-2 ${cell.color}`}></div> },
  { label: "Score", render: (cell) => cell.score },
];

const keyFn = (fruit: Fruit) => fruit.name;

function TablePage() {
  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;

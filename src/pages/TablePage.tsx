import SortableTable from "../components/table/SortableTable";
import Table from "../components/table/Table";
import { SortableColumn } from "../components/table/tableTypes";

export type Fruit = { name: string; color: string; score: number };
const data: Fruit[] = [
  { name: "Orange", color: "bg-orange-300", score: 5 },
  { name: "Apple", color: "bg-red-300", score: 3 },
  { name: "Banana", color: "bg-yellow-500", score: 1 },
  { name: "Lime", color: "bg-green-500", score: 4 },
];

const config: SortableColumn<Fruit>[] = [
  { label: "Name", render: (row) => row.name, sortValue: (row) => row.name },
  { label: "Color", render: (row) => <div className={`p-3 m-2 ${row.color}`}></div> },
  {
    label: "Score",
    render: (row) => row.score,
    sortValue: (row) => row.score,
  },
];

const keyFn = (fruit: Fruit) => fruit.name;

function TablePage() {
  return (
    <div>
      <Table data={data} config={config} keyFn={keyFn} />
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}

export default TablePage;

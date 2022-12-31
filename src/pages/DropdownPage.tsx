import { useState } from "react";

import Dropdown, { type Option } from "../components/Dropdown";

function DropdownPage() {
  const [selection, setSelection] = useState<Option | null>(null);
  const options = [
    { label: "red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  return <Dropdown options={options} value={selection} onChange={setSelection} />;
}

export default DropdownPage;

import React from "react";
import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "dfsdfs",
      label: "Can I use React on a project?",
      content:
        "Minim occaecat velit id culpa pariatur proident sint elit. Occaecat quis dolore fugiat aliqua velit tempor velit reprehenderit. Consectetur dolore enim ullamco enim. Tempor eu aliquip magna tempor excepteur.",
    },
    {
      id: "cvxcv,l",
      label: "Can I use JavaScript on a project?",
      content:
        "Minim occaecat velit id culpa pariatur proident sint elit. Occaecat quis dolore fugiat aliqua velit tempor velit reprehenderit. Consectetur dolore enim ullamco enim. Tempor eu aliquip magna tempor excepteur.",
    },
    {
      id: "lkopopwe",
      label: "Can I use CSS on a project?",
      content:
        "Minim occaecat velit id culpa pariatur proident sint elit. Occaecat quis dolore fugiat aliqua velit tempor velit reprehenderit. Consectetur dolore enim ullamco enim. Tempor eu aliquip magna tempor excepteur.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;

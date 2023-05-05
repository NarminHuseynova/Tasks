import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    title: " 📃 Tasks",
    tasks: [
      {
        id: uuidv4(),
        title: "Mapbox",
      },
      {
        id: uuidv4(),
        title: "Mobx",
      },
    ],
  },
  {
    id: uuidv4(),
    title: " ✏️ In progress",
    tasks: [
      {
        id: uuidv4(),
        title: "Twitter clone",
      },
      {
        id: uuidv4(),
        title: "Three js",
      },
      {
        id: uuidv4(),
        title: "3D Portfolio",
      },
    ],
  },
  {
    id: uuidv4(),
    title: " ✔️ Completed",
    tasks: [
      {
        id: uuidv4(),
        title: "Google Sign In",
      },
    ],
  },
];

export default data;

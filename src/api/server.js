import { Server } from "miragejs";

// import faker from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

const todoTemplates = [
  { base: "Buy $THING", values: ["tea", "milk", "bananas", ""] },
  { base: "Clean $THING", values: ["litter tray", "kitchen", "bedroom", "c"] },
  { base: "Read $THING", values: [] },
  { base: "Call $THING", values: [] },
  { base: "Repair $THING", values: ["car", ""] },
  {
    base: "Play $THING",
    values: [
      "War for the Overworld",
      "the Witcher 3",
      "Divinity: Original Sin 2",
    ],
  },
];

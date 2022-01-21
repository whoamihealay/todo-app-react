// Source: https://redux.js.org/tutorials/fundamentals/part-1-overview

import { Factory, hasMany, Model, RestSerializer, Server } from "miragejs";

import faker from "@faker-js/faker";
import seedrandom from "seedrandom";

const IdSerializer = RestSerializer.extend({
  serializeIds: "always",
});

let useSeededRNG = false;

let rng = seedrandom();

if (useSeededRNG) {
  let randomSeedString = localStorage.getItem("randomTimestampSeed");
  let seedDate;

  if (randomSeedString) {
    seedDate = new Date(randomSeedString);
  } else {
    seedDate = new Date();
    randomSeedString = seedDate.toISOString();
    localStorage.setItem("randomTimestampSeed", randomSeedString);
  }

  rng = seedrandom(randomSeedString);
  faker.seed(seedDate.getTime());
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(rng() * (max - min + 1)) + min;
};

const randomFromArray = (array) => {
  const index = getRandomInt(0, array.length - 1);
  return array[index];
};

const todoTemplates = [
  { base: "Buy $THING", values: ["tea", "milk", "bananas", "cheese"] },
  {
    base: "Clean $THING",
    values: ["litter tray", "kitchen", "bedroom", "house"],
  },
  { base: "Read $THING", values: ["Children of Hurin", "the news", "email"] },
  { base: "Call $THING", values: ["David", "Susan", "Bob"] },
  { base: "Repair $THING", values: ["car", "washing machine"] },
  {
    base: "Play $THING",
    values: [
      "War for the Overworld",
      "the Witcher 3",
      "Divinity: Original Sin 2",
    ],
  },
];

const generateTodoText = () => {
  const template = randomFromArray(todoTemplates);
  const value = randomFromArray(template.values);
  const text = template.base.replace("$THING", value);
  return text;
};

new Server({
  routes() {
    this.namespace = "veryRealApi";
    this.timing = 500;

    this.resource("todos");
    this.resource("lists");

    const server = this;

    this.post("/todos", function (schema, req) {
      const data = this.normalizedRequestAttrs();

      if (data.text === "error") {
        throw new Error("Could not save the todo!");
      }

      const result = server.create("todo", data);
      return result;
    });
  },
  models: {
    todo: Model.extend({}),
    list: Model.extend({
      todos: hasMany(),
    }),
  },
  factories: {
    todo: Factory.extend({
      id(i) {
        return Number(i);
      },
      text() {
        return generateTodoText();
      },
      completed() {
        return false;
      },
    }),
  },
  serializers: {
    todo: IdSerializer.extend({
      serialize(object, request) {
        const numerifyId = (todo) => {
          todo.id = Number(todo.id);
        };
        let json = IdSerializer.prototype.serialize.apply(this, arguments);

        if (json.todo) {
          numerifyId(json.todo);
        } else if (json.todos) {
          json.todos.forEach(numerifyId);
        }

        return json;
      },
    }),
    list: IdSerializer,
  },
  seeds(server) {
    server.createList("todo", 5);
  },
});

import faker from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

export let todos = [];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const dataFormat = () => {
  let isCompleted = getRandomInt(100);

  let id = uuidv4();
  let content = faker.company.catchPhrase();
  let completed = false;

  if (isCompleted < 15) {
    completed = true;
  }
  return {
    id: id,
    content: content,
    completed: completed,
  };
};

const dataGenerator = (size) => {
  todos.push(dataFormat);
  const newSize = size - 1;
  if (newSize > 0) {
    dataGenerator(newSize);
  }
};

dataGenerator(4);

import faker from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";

// Artificial delay to database
const sleep = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 350);
  });

// Database seeding
export default async function seed(req, res) {
  let database = [];
  const {
    body: { number },
    method,
  } = req;

  if (method === "GET") {
    if (!number) {
      return res.status(422).json({
        message: "Unproccesable request, please provide the required fields",
      });
    }
    try {
      // Fake "api" call to a "fake" document database returns random data objects
      const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
      };
      const documentFormat = () => {
        let id = uuidv4();
        let content = faker.company.catchPhrase();
        let isCompleted = getRandomInt(100);
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

      const documentGenerator = (number) => {
        database.push(documentFormat);
        const newNumber = number - 1;
        if (newNumber > 0) {
          documentGenerator(newNumber);
        }
      };
      documentGenerator(number);

      await sleep();

      return res.status(200).json(database);
    } catch (error) {
      console.log(error);
      return res.status(422).json({
        message: "Something went wrong! I shoud have used Typescript!",
      });
    }
  }
}

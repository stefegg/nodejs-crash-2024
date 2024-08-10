// import fs from "fs";
import fs from "fs/promises";
// #1 readFile() - callback

// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

//#2 readFileSync() = Synchronous version this is blocking

// const data = fs.readFileSync("./test.txt", "utf8");

// console.log(data);

// #3 readFile() - Promise .then()

// fs.readFile("./test.txt", "utf8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// #4 readFile() - async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

//writeFile();

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, I am writing to this file");
    console.log("File written to");
  } catch (error) {
    console.log(error);
  }
};

//appendFile()

const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is appended text");
    console.log("File appended to");
  } catch (error) {
    console.log(error);
  }
};
writeFile();
appendFile();
readFile();

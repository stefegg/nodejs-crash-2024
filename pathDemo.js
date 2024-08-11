import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt";

//basename() returns last part of path

console.log(path.basename(filePath));

//dirname()

console.log(path.dirname(filePath));

// gives just filepath

//extName() gives file extension

console.log(path.extname(filePath));

//parse() gives all of the above as an object
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename, __dirname);

//join() creates a filepath based on arguments passed in - useful for dealing with different OS's ie mac. users/brad windowss users\brad

const filePath2 = path.join(__dirname, "dir1", "dir2", "test.txt");

console.log(filePath2);

//resolve() does same thing basically

const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test.txt");

console.log(filePath3);

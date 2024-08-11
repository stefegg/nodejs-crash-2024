import url from "url";

const urlString = "https://www.google.com/ssearch?q=hello+world";

//URL Object
const urlObject = new URL(urlString);

console.log(urlObject);

//format() turns url object back into string

console.log(url.format(urlObject));

//import.meta.url provides meta data about current module - file URL

console.log(import.meta.url);

//fileURLToPath(); gives us path

console.log(url.fileURLToPath(import.meta.url));

console.log(urlObject.search);

const params = new URLSearchParams(urlObject.search);

console.log(params.get("q"));
params.append("limit", "5");
console.log(params);

//argv access arguments sent through commandline
console.log(process.argv);
console.log(process.argv[3]);

//process.env
console.log(process.env.LOGNAME);

// pid - id of node js process

console.log(process.pid);

//cwd - current working directory

console.log(process.cwd());

// title of node js process

console.log(process.title);

// memoryUsage();

console.log(process.memoryUsage());

//uptime - uptime of process

console.log(process.uptime());

process.on("exit", (code) => {
  console.log(`About to exit with code: ${code}`);
});

// exit();
process.exit(0);
// wont print
console.log("Hello from after exit");

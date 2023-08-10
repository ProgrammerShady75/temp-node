// console.log(__dirname);
// setInterval(()=>{
//     console.log('hello world');
// }, 1000)

// Modules
// const names = require('./app2');
// const sayHi = require('./app3');
// const data = require('./another')
// console.log(data);
// require('./mindgrenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)


// // os module
// const os = require('os')

// // info about current user
// const user = os.userInfo()
// console.log(user);

// //method returns the system uptime in seconds
// console.log(`The system Uptime is ${os.uptime()} seconds`);

// const currentOS = {
//     name: os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }

// console.log(currentOS);



// // Path module
// const path = require('path')

// console.log(path.sep)

// const filePath = path.join('/content/', 'subfolder', 'test.txt')
// console.log(filePath);

// const base = path.basename(filePath)
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);


//synchronous 
const { log } = require("console");
const {readFileSync, writeFileSync} = require("fs");
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt', 
    `Here is the result : ${first}, ${second}`, 
    {flag: 'a'}
)
console.log('done with this task');
console.log('starting the next one');


// const amount = 9

// if (amount < 10){
//     console.log('small number');
// }
// else{
//     console.log('large number');
// }

// console.log('Hello World!!!');
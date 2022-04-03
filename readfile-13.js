const { readFile, readFileSync } = require("fs");

console.log("started first task");

//asynchronous
readFile("./content/first.txt","utf8",(error,result)=>{
    if(error){
        console.log(error);
        return;
    }
    console.log(result);
    console.log("Completed first task");
});
//synchronous
let res=readFileSync("./content/second.txt","utf8");
console.log(res);
console.log("Starting next task");

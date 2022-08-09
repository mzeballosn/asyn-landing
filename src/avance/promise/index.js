//const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


const promise = new Promise(function(resolve,reject){
    resolve('!hey')
});

promise.then((resolve) => {
    console.log(resolve);
})

const cows = 9;

const countCows = new Promise(function(resolve, reject){
    if(cows > 10){
        resolve(`We have ${cows} on the farm`);
    }else{
        reject("there is no cows on the farm");
    }
}).catch((err) =>{
    console.log(err);
}).finally(() => console.log('Finally'));

countCows.then((result) => {
    console.log(result);
});
function suma(a,b){
    return a + b;
} 
function multiplicar(a,b){
    return a * b;
}


function calcular(a,b,callback){
        return callback(a,b);
}

console.log(calcular(2,5,suma));
console.log(calcular(2,5,multiplicar));

setTimeout(function(){
    console.log('Hola JacaScript');
},2000);

function gretting(name){
    console.log(`Hola ${name}`);
}

setTimeout(gretting,2000,'Mario');
function* generator() { 
    yield 1;
}
const gen = generator(); // "Generator { }"

//console.log(generator());
//Object [Generator] {}

//console.log(gen());
//gen is not a function

console.log(gen.next())
//{ value: 1, done: false }
console.log(gen.next())
//{ value: undefined, done: true }
function* generator() { 
return 1;
}
const gen1 = generator();
console.log(gen1.next())
//{ value: 1, done: true }
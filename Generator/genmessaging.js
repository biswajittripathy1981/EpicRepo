function* generator(x) { 
   yield 2 * x;
   yield (x + 5);  
}
const gen = generator(4);
console.log(gen.next());
//{ value: 8, done: false }
console.log(gen.next(4));
//{ value: 9, done: false }
//this is a very powerful feature by which we can pass parameters during execution
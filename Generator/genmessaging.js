function* gen() {
   let cmd1 = yield "initiated";
   console.log(cmd1);
   let cmd2 = yield "water boiled";
   console.log(cmd2);
   let cmd3 = yield "tea leaves poured";
   console.log(cmd3);
   let cmd4 = yield "Sugar added";
   console.log(cmd4);
   let cmd5 = yield "welcome!";
   console.log(cmd5);
 }
 
 let generator = gen(true);
 console.log( generator.next().value );
 
 console.log( generator.next("boil water").value ); 

 console.log( generator.next("pour tea leaves").value ); 
  
 console.log( generator.next("add Sugar").value ); 
  
 console.log(generator.next("Done thanks").value);

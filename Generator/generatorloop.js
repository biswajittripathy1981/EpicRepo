// function* generator() { 
//     for(let i=1;i<9;i++)
//     {
//       console.log('before yield');
//       yield i;
//       console.log('inside loop');
//     }
//     console.log('outside loop');
// }
function* generator() { 
  yield 1;
  yield 2;
  return 3;
}
const gen = generator();

// for(let i=1;i<gen.length;i++)
// {
//     console.log(gen.next());
// }
while(!gen.next().done)
{
  console.log(gen.next());
}
for(let item of gen)
{
  console.log(item);
}
// before yield
// { value: 1, done: false }
// inside loop
// before yield
// { value: 2, done: false }
// inside loop
// before yield
// { value: 3, done: false }
// inside loop
// before yield
// { value: 4, done: false }
// inside loop
// before yield
// { value: 5, done: false }
// inside loop
// before yield
// { value: 6, done: false }
// inside loop
// before yield
// { value: 7, done: false }
// inside loop
// before yield
// { value: 8, done: false }

// it never executes what is after loop i.e it is bothered about yield only not other things
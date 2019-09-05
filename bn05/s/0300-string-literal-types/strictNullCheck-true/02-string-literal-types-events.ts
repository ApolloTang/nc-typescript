

// {
//   'compilerOptions': {
//     'strictNullChecks': true,
//   }
// }

type EventType = 'click' | 'mouseover'
function on(event: EventType, callback: ()=>any) {
  callback()
}

on('click', ()=>console.log('Click!'))
on('mouseover', () => console.log('Mouseover!'))


on('drag', ()=>console.log('Drag!'))
//[tsserver 2345] Argument of type '"drag"' is not assignable
//to parameter of type 'EventType'






// {
//   "compilerOptions": {
//     "strictNullChecks": true,
//   }
// }

// myEvent is a type 'click' whose only allow value is 'click'
  let myEvent: 'click' = 'click'

  myEvent = null
  // [tsserver 2322] Type 'null' is not assignable to type '"click"'.

  myEvent = undefined
  // [tsserver 2322] Type 'undefined' is not assignable to type '"click"'.

  myEvent = 'hover'
  //[tsserver 2322] Type '"hover"' is not assignable to type '"click"'.




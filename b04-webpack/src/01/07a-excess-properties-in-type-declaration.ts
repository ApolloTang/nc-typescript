
interface MyIntf {
  x:string;
  /* y:string;  // <--- property y not declared */
}

function fn( _a: MyIntf ) {
              // ^
              // formal parameter has object type declaration
              // without property y
  console.log(JSON.stringify(_a, null, 2))
}

let a = {
  x:'x',
  y:'excess property' // This property is not declare in MyIntf
}
fn(a) // passing an object w excess property is ** ✅ OK **



// But assignment to type with an undeclared property is ** 🚫 NOT OKAY **
let b:MyIntf = {
 // ^
 // variable b has object type declaration
 // without property y

  x: 'x',
  y: 'excess property'  // is ** 🚫 NOT OKAY **
}


// To get arround the above we can cast the value of assignment to MyInf
let c:MyIntf = {
 // ^
 // variable c has object type declaration
 // without property y

  x: 'x',
  y: 'excess property'  // is ** ✅ OKAY **
} as MyIntf



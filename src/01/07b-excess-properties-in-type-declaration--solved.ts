(() => {

interface MyIntf {
  x:string;
  /* y:string;  // <--- property y not declared */
}

let z: MyIntf = {
 // ^
 // variable z has object type
 // declaration without property y

  x: 'a',
  y: 'excess property' // is ** 🚫 NOT OKAY **
}

gn(z) // passing an object w excess property is ** ✅ OK **

function gn( _r: MyIntf ) {
              // ^
              // formal parameter has object type declaration
              // without property y
  console.log(_r.x)  //  ** ✅ OK **
  console.log(_r.y)  //  using a undeclared property is ** 🚫 NOT OKAY **
}

})()

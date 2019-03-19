;(()=>{

  interface MyFuncInteface<T> {
    (foo:T): void
  }

  // fucntion interface can be use to type variable
  const Zoo:MyFuncInteface<string> = function Baz(a) {console.log(a)}

})()



;(()=>{

  interface MyFuncInteface<T, S> {
    (foo:T, bar:S): void
  }

  // fucntion interface can be use to type variable
  const Zoo:MyFuncInteface<string, number> = function Baz(a, b) {console.log(a, b)}
  const Poo:MyFuncInteface<number, string> = (a, b) => {console.log(a, b)}

  Zoo('a', 1)
  Poo(1, 'a')

})()

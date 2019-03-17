
type MyFuncType<T> = (foo:T) => void  /// this aperrently is missuse of type alias

interface MyFuncInteface<T> {
  (foo:T): void
}

// can not annotate type for a function statement with interface
function Boo(a):MyFuncInteface<string> {console.log(a)} //arrh :(
function Fuu:MyFuncInteface<string>(a) {console.log(a)} // arrh :(

// But interface can be use to type variable
const Zoo:MyFuncInteface<string> = function Baz(a) {console.log(a)} //ok
const Poo:MyFuncInteface<string> = a => {console.log(a)} //ok




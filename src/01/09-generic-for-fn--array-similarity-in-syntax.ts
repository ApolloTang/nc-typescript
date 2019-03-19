[
,(()=>{

  function Fn<T>(_a:Array<T>):Array<T> {
    return _a.splice(-2, 2)
  }

  type T=string|number
  let result = Fn<T>([1,2,3,'a'])
  console.log(result)

}
)()

, (()=>{

  // simlar syntax
  function Fn<T>(_a:T[]):T[] {
    return _a.splice(-2, 2)
  }

  type T=string|number
  let result = Fn<T>([1,2,3,'a'])
  console.log(result)

})()

]

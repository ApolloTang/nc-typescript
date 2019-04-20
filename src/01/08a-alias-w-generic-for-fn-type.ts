;(()=>{ // eg: one

  // -----
  // Alias
  // -----
    type myFnType = (para: number) => string
    let myFn:myFnType = (a) => a+''

    console.log( myFn(4) )

})()

;(()=>{ // eg: two

  // ---------------
  // Alias w generic
  // ---------------
    type myFnType<T, R> = (para: T) => R
    let myFn:myFnType<number, string>= (a) => a+''

    console.log( myFn(5) )

})()

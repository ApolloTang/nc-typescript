;(()=>{ // eg: one

  // ---------
  // Interface
  // ---------
    interface myFnIntf {
      (para: number):string
    }
    let myFn:myFnIntf = (a) => a+''

    console.log( myFn(5) )

})()

;(()=>{ // eg: two

  // -------------------
  // Interface w generic
  // -------------------
    interface myFnIntf<T, R> {
      (para: T): R
    }
    let myFn:myFnIntf<number, string> = (a) => a+''

    console.log( myFn(6) )

})()

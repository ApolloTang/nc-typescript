;(()=>{

  function myFn(a: number):string {
    return a+''
  }
  console.log( myFn(0) )



  let myFn1:Function = function(a: number):string {
    return a+''
  }
  console.log( myFn1(1))





  let myFn2: (para: number) => string = function(a) { return a+'' }
  console.log( myFn2(2) )




  let myFn3: (para: number) => string = (a) => a+''
  console.log( myFn3(3) )


})()




;(()=>{

  function myFn<T>(a:T):string {
      return a+''
    }
  console.log( myFn<number>(0) )



  let myFn1:Function = function<T>(a:T):string {
      return a+''
    }
  console.log( myFn1<number>(1) )
            // ^^^^^^^^^^^^^^^^
            // Untyped function calls may not accept type arguments



  let myFn2: <T>(para:T) => string = function(a) { return a+'' }
  console.log( myFn2<number>(2) )




  let myFn3: <T>(para:T) => string = (a) => a+''
  console.log( myFn3<number>(3) )

})()


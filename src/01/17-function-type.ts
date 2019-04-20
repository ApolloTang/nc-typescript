;(()=>{

  // Function declaration
  // Directly specifying the function signature and return type

    function myFn(a: number):string {
    //           ^^^^^^^^^^^^^^^^^^
      return a+''
    }

    console.log( myFn(0) )


  // Function expression
  // Declare variable type as function
  // Directly specifying the function signature and return type

    let myFn1:Function = function(a: number):string {
    //        ^^^^^^^^           ^^^^^^^^^^^^^^^^^^
      return a+''
    }

    console.log( myFn1(1) )


  // Function expression
  // Specifying the function signature and return type on variable

    let myFn2: (para: number) => string = function(a) { return a+'' }
    //         ^^^^^^^^^^^^^^^^^^^^^^^^

    console.log( myFn2(2) )


  // Same as above but arrow function

    let myFn3: (para: number) => string = (a) => a+''
    //         ^^^^^^^^^^^^^^^^^^^^^^^^

    console.log( myFn3(3) )


  // ================================
  // Reusable function type anotation
  // ================================
  // [!] As of version 3, reusuable function type anotation
  // only apply for function expression, it is not support
  // for function declaration.


  // -----
  // Alias
  // -----
    type myFnType = (para: number) => string
    let myFn4:myFnType = (a) => a+''

    console.log( myFn4(4) )


  // ---------
  // Interface
  // ---------
    interface myFnIntf {
      (para: number):string
    }
    let myFn5:myFnIntf = (a) => a+''

    console.log( myFn5(5) )

})()

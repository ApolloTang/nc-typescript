[(()=>{ // eg: one

    type Func = (foo:string) => void

    // function expression
    const myFunctionExpression:Func = function(foo) {
      console.log(foo)
    }

    myFunctionExpression('a')


})(),
(()=>{ // eg: two

    type Func<T> = (foo:T) => void

    // function expression
    const myFunctionExpression:Func<string> = function(a) {
      console.log(a)
    }

    myFunctionExpression('c')


})(),
(()=>{ // eg: three

    // function declaration
    function myFunctionDeclaration(a:string):void {
      console.log(a)
    }

    myFunctionDeclaration('d')

})(),

]

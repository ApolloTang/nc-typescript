


;(function () {

  type A<G> = (g:G)=>void
  type B<H> = (g:H)=>void

  type T = string
  const foo:A<B<T>> = function (a){
    a('hello')
  }

  foo(a=>{console.log(a)})

})();


;(function () {

  interface A<G>{
    (g:G): void
  }

  interface B<H>{
    (h:H): void
  }

  type T = string
  const foo:A<B<T>> = function (a){
    a('world')
  }

  foo(a=>{console.log(a)})

})();

;
(function () {

  interface A<G>{
    (g:G): void
  }

  interface B<H>{
    (h:H): void
  }

  type T = string
  const foo:A<B<T>> = function (a){
    a('a')
  }

  foo(()=>{})

})();

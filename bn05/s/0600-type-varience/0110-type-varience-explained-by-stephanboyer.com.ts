/* eslint-disable */

(function(){

  class Animal              { constructor(public name: string) {}
                              move() { console.log(`${this.name} move`)} }
  class Dog extends Animal  { bark() { console.log(`${this.name} bark`)} }
  class Hound extends Dog   { race() { console.log(`${this.name} race`)} }

  // Hound <: Dog <: Animal

  ;(function(){
  // ----------------------------------------------------

    function f( g:(x:Dog)=>Dog ) {
      const x = new Dog('woof')
      g(x).move()
      g(x).bark()
    }

    function g( y:Hound ):Hound {
      y.move()
      y.bark()
      // y.race()
      return y
    }

    f(g) // Type error

  })() ;(function(){ // ----------------------------------

    function f( g:(x:Dog)=>Dog ) {
      const x = new Dog('woof')
      g(x).move()
      // g(x).bark()
    }

    function g( y:Hound ):Animal {
      y.move()
      y.bark()
      // y.race()
      return new Animal('animally')
    }

    f(g) // type error

  })() ;(function(){ // ----------------------------------

    function f( g:(x:Dog)=>Dog ) {
      const x = new Dog('woof')
      g(x).move()
      // g(x).bark()
    }

    function g( y:Animal ):Animal {
      y.move()
      return new Animal('animally')
    }

    f(g)

  })() ;(function(){ // ----------------------------------

  ;(function(){
    function f( g:(x:Dog)=>Dog ) {
      const x = new Dog('woof')
      g(x).move()
      g(x).bark()
    }

    function g( y:Animal ):Hound {
      y.move()
      return new Hound('racerace')
    }

    f(g)

  // -------------------------------------------------------
  })()

  ;(function(){
  })()
})()


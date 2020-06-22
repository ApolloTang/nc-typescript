/* eslint-disable */

(function(){

  class Animal {
    constructor(public name: string) {}
    move() { console.log(`${this.name} move`)}
  }
  class Bird extends Animal {
    chirp() { console.log(`${this.name} chirp`)}
  }
  class Crow extends Bird {
    caw() { console.log(`${this.name} caw`)}
  }

  // Crow <: Bird <: Animal

  ;(function(){

    // 1. is the function g_:(Bird) => Bird a subtype of g:(Bird) => Bird ?
    // ---------------------------------------------------------------------

    // f expected g() return type Bird, and received a g_() that
    // returns correct type of Bird [ok].
    function f( g:(x:Bird)=>Bird ) {
      const x = new Bird('birdy')  // type Bird is given to g()'s actual argument.
      g(x).move()
      g(x).chirp()
    }

    // g_(y) defined in its formal parameter that y to be given with type Bird;
    // inside f, a correct type Bird is given to actual argument [ok].
    function g_(y:Bird):Bird {
      y.move()
      y.chirp()
      return new Bird(y.name)
    }

    f(g_)


  })()



  ;(function(){

    // 2. is the function g_:(Bird) => Animal a subtype of g:(Bird) => Bird ?
    // -----------------------------------------------------------------------

    // f expected g() return type Bird, and received a g_() that
    // returns incorrect supertype Animal.
    // Animal does not contain all properties of Bird [not ok].
    function f( g:(x:Bird)=>Bird ) {
      const x = new Bird('birdy')  // type Bird is given to g()'s actual argument.
      g(x).move()
      // g(x).chirp()  // <--- Error [1]
    }

    // g_(y) defined in its formal parameter that y to be given with type Bird;
    // inside f, a correct type Bird is given to actual argument [ok].
    function g_(y:Bird):Animal {
      y.move()
      y.chirp()
      return new Animal(y.name)
    }

    f(g_) // Type Error [2]

    // [1] g(...).chirp() does not exist on Animal
    // [2] Argument of type '(y: Bird) => Animal' is not assignable
    //     to parameter of type '(x: Bird) => Bird'.

  })()




  ;(function(){
    // 3. is the function g_:(Bird) => Crow a subtype of g:(Bird) => Bird ?
    // --------------------------------------------------------------------

    // f expected g() return type Bird, and received a g_() that
    // returns a suptype Crow.
    // Crow has all properties of Bird, it is allowed [ok].
    function f( g:(x:Bird)=>Bird ) {  // expected g:(x) return type Bird.
      const x = new Bird('birdy')  // type Bird is given to g()'s actual argument.
      g(x).move()
      g(x).chirp()
    }

    // g_(y) defined in its formal parameter that y to be given with type Bird;
    // inside f,a correct type Bird is given to actual argument [ok].
    function g_(y:Bird):Crow {
      y.move()
      y.chirp()
      return new Crow(y.name)
    }

    f(g_)

  })()



  // ---------------------
  // contravarient case:
  // actual argument >: formal parameter (received is supertype of expected: [okay])
  // actual argument <: formal paramter  (received is subtype of expected  : [not okay])
  // ---------------------


  ;(function(){
    // 4. is the function g_:(Animal) => Bird a subtype of g:(Bird) => Bird ?
    // ------------------------------------------------------------------------


    // f expected g() return type Bird, and received a g_() that
    // returns correct type of Bird [ok].
    function f( g:(x:Bird)=>Bird ) {
      const x = new Bird('birdy')  // type Bird is given to g()'s actual argument.
      g(x).move()
      g(x).chirp()
    }

    // g_(y) defined in its formal parameter that y to be given with type Animal;
    // Inside f, a subtype Bird is given to actual argument.
    // Bird has all props of Animal, it is allowed  [ok].
    function g_(y:Animal):Bird {
      y.move()
      return new Bird(y.name)
    }

    f(g_)

  })()


  ;(function(){
    // 5. is the function g_:(Crow) => Bird a subtype of g:(Bird) => Bird ?
    // ------------------------------------------------------------------------

    // f expected g() return type Bird, and received a g_() that
    // returns correct type of Bird [ok].
    function f( g:(x:Bird)=>Bird ) {
      const x = new Bird('birdy')  // type Bird is given to g()'s actual argument.
      g(x).move()
      g(x).chirp()
    }

    // g_(y) defined in its formal parameter that y to be given with type Crow;
    // Inside f, a subtype Bird is given to actual argument.
    // Bird does not has all props of Crow, this is not allowed  [not ok].
    function g_(y:Crow):Bird {
      y.move()
      y.chirp()
      // y.caw() //<-- Error [1]
      return new Bird(y.name)
    }

    f(g_) // Type error [2]

    // [1] y.caw does not exist on Bird
    // [2] Argument of type '(y: Crow) => Bird' is not assignable
    //     to parameter of type '(x: Bird) => Bird'

  })()

})()


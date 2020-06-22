/* eslint-disable */

// https://basarat.gitbooks.io/typescript/docs/types/type-compatibility.html

(function() {

  class Animal { constructor (public name: string) {} }
  class Cat extends Animal { meow(){ console.log(`${this.name} meow`)} } // Cat is a subtype of Animal

  var animal1 = new Animal('animal1')
  var cat1 = new Cat('cat1')

  animal1 = cat1  // assigning a subtype to supertype is allowed
                  // (rules of covariant); Animal now is now reference to a cat,
  animal1.meow()  // TypeError: animal1 is a cat and it is meow-able, but this
                  // is a type error. TS don't expect you would call meaw on type Animal.

  var cat2 = new Cat('cat2')
  cat2 = animal1  // TypeError: but why? animal1 reference to a cat ?
                  // assigning a supertype to subtype is a type error (rules of covariant)


  // Similary, lets say we have a group  of Animal and a a group of Cat
  type Animals = Animal[]
  type Cats = Cat[]

  var animals:Animals = []
  var cats:Cats = []

  animals = cats // assigning subtype to supertype is allow (rules of covariant);
  cats = animals // Error: assigning supertype to subtype is a type error  (rules of covariant)
                 // Of course not all animals are cats, but:
  animals.push(new Cat('cat2')) // just push cat into animals
  animals[0].meow() // but meow-able (no runtime error)
                    // This is a TypeError, TS don't expect you would call meow on animal


})()

;(function() {

  class Animal { constructor (public name: string) {} }
  class Cat extends Animal { meow(){ console.log(`${this.name} meow`)} }

  var animal1 = new Animal('animal1')
  var cat1 = new Cat('cat1')

  animal1 = cat1
  ;(animal1 as Cat).meow()   // disable TypeError w casting: it is actually meow-able
  cat1 = animal1 as Cat      // disable TypeError w casting, animal is actually refence to cat


  type Animals = Animal[]
  type Cats = Cat[]
  var animals: Animals = []
  var cats:Cats = []

  animals = cats
  cats = animals as Cats        // disable TypeError with casting
  animals.push(new Cat('cat2'))
  ;(animals[0] as Cat).meow()   // disable TypeError with casting: meow-able

})()

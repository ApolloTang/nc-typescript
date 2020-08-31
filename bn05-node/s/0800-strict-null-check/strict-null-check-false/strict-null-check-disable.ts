/* eslint-disable */
(function() {
  /*
  {
    "compilerOptions": {
      "noEmit": true
      , "strict": false
      , "strictNullChecks": false
  }
  */

//  With strictNullChecks DISABLE
//  you can assign null to a non-null type.
//
//  Example:
//  Here is a non-null type

      type zooType = object

//  Assign a null to it is possible (no warning):

      const zoo:zooType = null

//  Assign an undefined to it is also possible (no warning):

      const zoo2:zooType = undefined

//  So when strictNullChecks is disable,
//  zooType in this example is actually: {} | null | undefined

//  Dispite of this typescript still do type guard for you:

      zoo.bar()
//        ^^^
//        Property 'bar' does not exist on type zooType

//  Disabling strictNullChecks can lead to following dangerous situation:

//  Consider a variable 'foo' being assigned with null

      const foo = null

//  Now we try to access a non-existing property 'bar'

      foo.bar()

//  The above is a run time error but there are no typescript error

})()


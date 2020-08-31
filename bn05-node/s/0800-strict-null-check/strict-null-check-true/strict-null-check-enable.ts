/* eslint-disable */
(function() {
/*
{
  "compilerOptions": {
    "noEmit": true
    , "strict": false
    , "strictNullChecks": true
}
*/

//  With strictNullChecks ENABLE
//  we CANNOT assign null or undefined to a non-null type.
//
//  Example:
//  Here is a non-null type:

    type zooType = object

//  We CANNOT assign a null to it:

      const zoo:zooType = null
//          ^^^
//          Type 'null' is not assginable to type object

//  It is also not possible to assign an undefined to it:

      const zoo2:zooType = undefined
//          ^^^^
//          Type 'undefined' is not assginable to type object

//  As expected, typescript warn you when you try
//  to access a non-existing property

      zoo.bar()
//        ^^^
//        Property 'bar' does not exist on type zooType

//  Similar if you try to access a property on null
//  typescript warn you:

      const foo = null

//  now try to access a non existing property 'bar'

      foo.bar()
//    ^^^
//    Object is possibly null

//  If strictNullCheck has been disable,
//  typescript would not warn you when you try
//  to access a property on null value.




})()



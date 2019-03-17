[
(() => {


function CreateCustomId( name: string, id: number): string {
  return name + id
}

// this is how you would declare function type
let myFunction: (chars: string, nums: number) => string = CreateCustomId



})(), (() => {

// The above can be written with interface

interface StringGenerator {
  (chars: string, nums: number): string
}

function CreateCustomId( name: string, id: number): string {
  return name + id
}

// below the function type is annotated by interface
let myFunction: StringGenerator = CreateCustomId


})(),

]



import {someInterface, consoleLogFunction } from './03-depd--exporting-an-interface'

const foo: someInterface = {
  someString: 'hello world',
  consoleLogSomething: (someString: string) => console.log(someString)
}

const myFunction: consoleLogFunction = (someString) => {
  console.log(`this is myFunction, and it console.log this string: "${someString}"`)
}

console.log(foo.someString)
foo.consoleLogSomething('hello bye')
myFunction('blah blah')



;(function(){   // eslint-disable-line no-extra-semi

interface ReadonlyArray<T> {
  readonly length: number
  readonly [n: number]: T
}


const arr : ReadonlyArray<number> = [10,11,12]

arr.pop()
//ERROR [tsserver 2339] Property 'pop' does not exist on type 'ReadonlyArray<number>'.

arr.push(15)
//ERROR [tsserver 2339] Property 'push' does not exist on type 'ReadonlyArray<number>'

arr[0] = 1
//ERROR [tsserver 2542] Index signature in type 'ReadonlyArray<number>' only permits reading.


// https://stackoverflow.com/questions/46561155/difference-between-const-and-readonly-in-typescript
// https://mariusschulz.com/blog/read-only-properties-in-typescript

})()


interface InterfacePartA {
  A: number;
}

interface InterfacePartB {
  B: number;
}

interface InterfaceExtended extends InterfacePartA, InterfacePartB {
  C: number;
}

let Foo: InterfaceExtended = {
  A: 1,
  B: 2,
  C: 3
}

console.log(Foo)

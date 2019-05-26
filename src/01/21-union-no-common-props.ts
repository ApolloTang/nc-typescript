;(()=>{

  type A = { a: string; }
  type B = { b: string; }
  type AorB = A | B;

  let AorB: AorB = {a:'a'}

  if (AorB.b) { //Property 'b' does not exist on type 'A'.
    AorB.b      //Property 'b' does not exist on type 'A'.
  }

})()

;(()=>{

  type A = { a: string; }
  type B = { b: string; }
  type AorB = A | B;

  let AorB: AorB = {a:'a'};
  let _AorB = AorB as unknown as B
  if (_AorB.b) {
    _AorB.b
  }

})()

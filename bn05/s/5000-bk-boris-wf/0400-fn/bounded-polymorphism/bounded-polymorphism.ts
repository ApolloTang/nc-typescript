// chapter 4
// section Bounded polymorphism
//

( function fn() {


type TreeNode  = { value: string }
type LeafNode  = TreeNode & { isLeaf: true }
type InnerNode = TreeNode & { children: [TreeNode] | [TreeNode, TreeNode] }

function mapNode<T extends TreeNode>( node: T, f: (value: string) => string ): T {
  return { ...node, value: f(node.value) }
}

const a: TreeNode  = {value: 'a'}
const b: LeafNode  = {value: 'b', isLeaf: true}
const c: InnerNode = {value: 'c', children: [b]}

const a1 = mapNode(a, _ => _.toUpperCase()) // TreeNode
const b1 = mapNode(b, _ => _.toUpperCase()) // LeafNode
const c1 = mapNode(c, _ => _.toUpperCase()) // InnerNode

mapNode({}, _=>_.toUpperCase())
//       ^  ^
//       |  |
//       |  Parameter '_' implicitly has an 'any' type.
//       |
//       Argument of type '{}' is not assignable to parameter of type 'TreeNode'.
//

})()




;( function fn() {

type TreeNode  = { value: string }
type LeafNode  = TreeNode & { isLeaf: true }
type InnerNode = TreeNode & { children: [TreeNode] | [TreeNode, TreeNode] }

function mapNode<T>( node: T, f: (value: string) => string ): T {
  return { ...node, value: f(node.value) }
}

const a: TreeNode  = {value: 'a'}
const b: LeafNode  = {value: 'b', isLeaf: true}
const c: InnerNode = {value: 'c', children: [b]}

const a1 = mapNode(a, _ => _.toUpperCase()) // TreeNode
const b1 = mapNode(b, _ => _.toUpperCase()) // LeafNode
const c1 = mapNode(c, _ => _.toUpperCase()) // InnerNode

mapNode({}, _=>_.toUpperCase())  // no type error

})()


;( function fn() {

type TreeNode  = { value: string }
type LeafNode  = TreeNode & { isLeaf: true }
type InnerNode = TreeNode & { children: [TreeNode] | [TreeNode, TreeNode] }

function mapNode( node: TreeNode, f: (value: string) => string ) {
  return { ...node, value: f(node.value) }
}

const a: TreeNode  = {value: 'a'}
const b: LeafNode  = {value: 'b', isLeaf: true}
const c: InnerNode = {value: 'c', children: [b]}

const a1 = mapNode(a, _ => _.toUpperCase()) // any
const b1 = mapNode(b, _ => _.toUpperCase()) // any
const c1 = mapNode(c, _ => _.toUpperCase()) // any
                                            //  ^--- missing information on return type

mapNode({}, _=>_.toUpperCase())
//       ^  ^
//       |  |
//       |  Parameter '_' implicitly has an 'any' type.
//       |
//       Argument of type '{}' is not assignable to parameter of type 'TreeNode'.
//

})()

export { }


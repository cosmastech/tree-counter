import Node from "./node";

const defineNodes = (): Node => {
  const root = new Node(1);
  root.left = new Node(2, new Node(4));
  root.right = new Node(
    3,
    new Node(
      5,
      undefined,
      new Node(7, new Node(8, new Node(9, new Node(10), new Node(11)))),
    ),
    new Node(6),
  );

  return root;
};

const root = defineNodes();

let nodeValues: number[][] = [];
let currentNodes = [root];
do {
  let thisRowValues: number[] = [];
  let foundNodesInThisRow: Node[] = [];

  for (const node of currentNodes) {
    thisRowValues.push(node.value);
    if (node.left) {
      foundNodesInThisRow.push(node.left);
    }
    if (node.right) {
      foundNodesInThisRow.push(node.right);
    }
  }

  nodeValues.push(thisRowValues);
  currentNodes = foundNodesInThisRow;
} while (currentNodes.length > 0);

for (let i = 0; i < nodeValues.length; i++) {
  console.log(nodeValues[i].join(" "));
}

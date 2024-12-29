export default class Node {
  value: number;
  left: Node | undefined;
  right: Node | undefined;

  constructor(
    value: number,
    left: Node | undefined = undefined,
    right: Node | undefined = undefined,
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

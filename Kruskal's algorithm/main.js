class UnionFind {
  constructor(elements) {
    this.count = elements.length;

    this.parent = {};

    elements.forEach((e) => (this.parent[e] = e));
  }

  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);

    if (rootA === rootB) return;

    if (rootA < rootB) {
      if (this.parent[b] != b) this.union(this.parent[b], a);
      this.parent[b] = this.parent[a];
    } else {
      if (this.parent[a] != a) this.union(this.parent[a], b);
      this.parent[a] = this.parent[b];
    }
  }

  find(a) {
    while (this.parent[a] !== a) {
      a = this.parent[a];
    }
    return a;
  }

  connected(a, b) {
    return this.find(a) === this.find(b);
  }
}
let uf = new UnionFind(["A", "B", "C", "D", "E"]);
uf.union("A", "B");
uf.union("A", "C");
uf.union("C", "D");

console.log(uf.connected("B", "E"));
console.log(uf.connected("B", "D"));

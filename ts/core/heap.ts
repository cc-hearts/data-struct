class Heap<T> {
  private count = 0
  private nodes: T[]
  // 一个比较函数
  private readonly compare: (...args: any[]) => any
  constructor(compare: (...args: any[]) => any, nodes: T[]) {
    this.compare = compare
    this.nodes = nodes
  }

  size() {
    return this.count
  }

  /**
   * 是否存在左子树
   * @param parentIndex
   * @returns {boolean}
   */
  hasLeftChild(parentIndex: number) {
    const leftChild = parentIndex * 2 + 1
    return leftChild < this.size()
  }

  /**
   * 是否存在右子树
   * @param parentIndex
   * @returns {boolean}
   */
  hasRightChild(parentIndex: number) {
    const rightChild = parentIndex * 2 + 2
    return rightChild < this.size()
  }

  // 如果 compareFn(a, b) 大于 0，b 会被排列到 a 之前。
  // 如果 compareFn(a, b) 小于 0，那么 a 会被排列到 b 之前；
  compareAt(i: number, j: number) {
    return this.compare(this.nodes[i], this.nodes[j])
  }

  /**
   * 比较是否需要交换
   * @param parentIndex
   * @param childIndex
   * @returns
   */
  private shouldSwap(parentIndex: number, childIndex: number) {
    if (parentIndex < 0 || parentIndex >= this.size()) {
      return false
    }
    if (childIndex < 0 || childIndex >= this.size()) {
      return false
    }
    // 通过比较函数来比较是否需要交换
    // 大于0 的时候 childIndex 需要与 parentIndex 交换
    return this.compareAt(parentIndex, childIndex) > 0
  }

  private compareChildrenOf(parentIndex: number) {
    if (!this.hasLeftChild(parentIndex) && !this.hasRightChild(parentIndex)) {
      return -1
    }
    const leftChildIndex = parentIndex * 2 + 1
    const rightChildIndex = parentIndex * 2 + 2

    if (!this.hasLeftChild(parentIndex)) {
      return rightChildIndex
    }
    if (!this.hasRightChild(parentIndex)) {
      return leftChildIndex
    }
    const compareResult = this.compareAt(leftChildIndex, rightChildIndex)
    return compareResult > 0 ? rightChildIndex : leftChildIndex
  }

  private swap(i: number, j: number) {
    const temp = this.nodes[i]
    this.nodes[i] = this.nodes[j]
    this.nodes[j] = temp
  }

  // 比较 index之前的 leftChildIndex 和 rightChildIndex 节点
  private compareChildrenBefore(index, leftChildIndex, rightChildIndex) {
    const compare = this.compareAt(rightChildIndex, leftChildIndex)
    // 返回右边节点
    if (compare <= 0 && rightChildIndex < index) {
      return rightChildIndex
    }

    return leftChildIndex
  }

  // heapify的向上更换操作
  heapifyUp(startIndex: number) {
    let childIndex = startIndex
    // childIndex = parentIndex * 2 + 1
    let parentIndex = Math.floor((childIndex - 1) / 2)

    // 判断是否需要更换堆
    while (this.shouldSwap(parentIndex, childIndex)) {
      this.swap(parentIndex, childIndex)
      childIndex = parentIndex
      parentIndex = Math.floor((childIndex - 1) / 2)
    }
  }

  // heapify 向下替换
  heapifyDown(startIndex: number) {
    let parentIndex = startIndex
    let childIndex = this.compareChildrenOf(parentIndex)

    while (this.shouldSwap(parentIndex, childIndex)) {
      this.swap(parentIndex, childIndex)
      parentIndex = childIndex
      childIndex = this.compareChildrenOf(parentIndex)
    }
  }

  // 从开始节点往下heapify替换到 index节点为止
  heapifyDownUtil(index: number) {
    let parentIndex = 0,
      leftChildIndex = 1,
      rightChildIndex = 2,
      childIndex

    while (leftChildIndex < index) {
      // 比较index之前的节点的值 是否需要交换
      childIndex = this.compareChildrenBefore(index, leftChildIndex, rightChildIndex)

      if (this.shouldSwap(parentIndex, childIndex)) {
        this.swap(parentIndex, childIndex)
      }

      parentIndex = childIndex
      leftChildIndex = parentIndex * 2 + 1
      rightChildIndex = parentIndex * 2 + 2
    }
  }

  insert(value: T) {
    this.nodes.push(value)
    this.heapifyUp(this.size() - 1)

    return this
  }
}

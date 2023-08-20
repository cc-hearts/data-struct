// LRU 双向链表的解法
class CacheNode {
    constructor(
        public readonly key: null | number = null,
        public val = 0,
        public prev: CacheNode | null = null,
        public next: CacheNode | null = null
        ) {}
}
class LRUCache {
    private readonly head: CacheNode;
    private readonly next: CacheNode;
    constructor(
        private readonly capacity: number,
        private size: number = 0,
        head: CacheNode = new CacheNode(),
        next: CacheNode = new CacheNode()
        ) {
        this.head = head;
        this.next = next;
        this.head.next = this.next;
        this.next.prev = this.head;
    }

    get(key: number): number {
        // 说明没有值
        if (this.isEmpty()) return -1;
        let node = this.next.prev;
        while (node && node.key !== key) {
            // 循环链表 找到key值
            node = node.prev;
        }
        if (!node) return -1;
        // 如果有值 将这个值提取出来 交换
        this.popNode(node);
        // 将node 插入到 表头
        this.insertFirstNode(node);
        return node.val;
    }

    insertFirstNode(node: CacheNode) {
        const firstNode = this.next.prev;
        node.next = this.next;
        node.prev = firstNode;
        firstNode!.next = node;
        this.next.prev = node;
    }

    popNode(node: CacheNode) {
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode!.next = nextNode;
        nextNode!.prev = prevNode;
        return node;
    }

    isEmpty() {
        return this.next.prev === this.head;
    }

    find(key: number) {
        if (this.isEmpty()) return null;
        let node = this.next.prev;
        while (node && node.key !== key) {
            node = node.prev;
        }
        return node;
    }
    put(key: number, value: number): void {
        // 插入值
        // 首先需要判断是否有key值
        let node = this.find(key);
        const isHasNode = node !== null;
        if (node) {
            // 前后节点连接 这个节点单独拿出来
            this.popNode(node);
            node.val = value;
        } else {
            node = new CacheNode(key, value);
        }
        // 插入到最新的节点
        this.insertFirstNode(node);

        if (!isHasNode) {
            this.size++;
            // 删除最后没有使用的节点
            if (this.size > this.capacity) {
                const node = this.head.next;
                node!.next!.prev = this.head;
                this.head.next = node!.next;
                node!.prev = null;
                node!.next = null;
                this.size--;
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export {};

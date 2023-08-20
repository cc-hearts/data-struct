class LRUCache {
    private readonly capacity: number;

    constructor(capacity: number, private readonly map = new Map()) {
        // 初始化容量数组
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.map.has(key)) {
            const value = this.map.get(key);
            this.map.delete(key);
            this.map.set(key, value);
            return value;
        }
        return -1;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            // 如果有值 删除值
            this.map.delete(key);
        }

        this.map.set(key, value);

        if (this.map.size > this.capacity) {
            // 如果超出了容量 删除第一个 因为最后一个才是最新的
            this.map.delete(this.map.keys().next().value);
        }
    }
}

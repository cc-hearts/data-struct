package main

import "fmt"

type MyQueue struct {
	preSlice, nextSlice []int
	size                int
}

func constructor() MyQueue {
	return MyQueue{preSlice: make([]int, 0, 2001), nextSlice: make([]int, 0, 2001)}
}

func (this *MyQueue) inStack(val int) {
	copy(this.nextSlice, this.preSlice)
	var b bool
	if this.size+1 > len(this.preSlice) {
		// 扩容
		b = true
		this.preSlice = append(this.preSlice, 0)
	}
	this.preSlice[0] = val
	fmt.Println("next length", len(this.nextSlice), this.nextSlice)
	for j := 0; j < len(this.nextSlice); j++ {
		this.preSlice[j+1] = this.nextSlice[j]
	}
	if b {
		this.nextSlice = append(this.nextSlice, 0)
	}
	// 同一份地址值
	this.nextSlice = this.preSlice[:]
	// 如果需要拷贝切片 使用copy 即可
	//copy(this.nextSlice, this.preSlice)
	fmt.Println("--------------------", this.nextSlice)
}

func (this *MyQueue) Push(x int) {
	this.inStack(x)
	this.size++
}

func (this *MyQueue) Pop() int {
	element := this.preSlice[0]
	this.preSlice = this.preSlice[1:]
	this.size--
	if this.size < 0 {
		this.size = 0
	}
	return element
}

func (this *MyQueue) Peek() int {
	if len(this.preSlice) == 0 {
		return 0
	}
	this.size--
	return this.preSlice[0]
}

func (this *MyQueue) Empty() bool {
	return this.size == 0
}

func main() {
	obj := constructor()
	obj.Push(1)
	obj.Push(2)
	obj.Pop()
	fmt.Println(obj.preSlice)
	fmt.Println(obj.nextSlice)

}

/**
 * Your MyQueue object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Push(x);
 * param_2 := obj.Pop();
 * param_3 := obj.Peek();
 * param_4 := obj.Empty();
 */

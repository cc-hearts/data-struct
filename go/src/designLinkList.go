package main

// &取地址运算符
// *获取地址指向的变量值
// 引用类型 需要用指针类型取存储地址

type Node struct {
	val  int
	next *Node
}

type MyLinkedList struct {
	size   int
	header *Node
}

func Constructor() MyLinkedList {
	return MyLinkedList{0, &Node{}}
}

func (this *MyLinkedList) Get(index int) int {
	node := this.header.next
	if node == nil {
		return -1
	}
	// 进行while循环
	for i := 0; i < index; i++ {
		if node == nil {
			break
		}
		node = node.next
	}
	if node == nil {
		return -1
	}
	return node.val
}

func (this *MyLinkedList) AddAtHead(val int) {
	this.AddAtIndex(0, val)
}

func (this *MyLinkedList) AddAtTail(val int) {
	this.AddAtIndex(this.size, val)
}

func (this *MyLinkedList) AddAtIndex(index int, val int) {
	if index > this.size {
		return
	}
	if index < 0 {
		index = 0
	}
	node := this.header
	for i := 0; i < index; i++ {
		if node == nil {
			break
		}
		node = node.next
	}
	if node != nil {
		newNode := &Node{val, node.next}
		node.next = newNode
		this.size++
	}
}

func (this *MyLinkedList) DeleteAtIndex(index int) {
	if index < 0 || index >= this.size {
		return
	}
	node := this.header
	for i := 0; i < index; i++ {
		if node == nil {
			break
		}
		node = node.next
	}
	if node != nil {
		prevNode := node.next
		var nextNode *Node
		if prevNode != nil {
			nextNode = prevNode.next
		}
		node.next = nextNode
		prevNode.next = nil
		this.size--
	}
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Get(index);
 * obj.AddAtHead(val);
 * obj.AddAtTail(val);
 * obj.AddAtIndex(index,val);
 * obj.DeleteAtIndex(index);
 */

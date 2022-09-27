package main

import "fmt"

//func Max(arg1 int, arg2 int) int {
//	if arg1 > arg2 {
//		return arg1
//	}
//	return arg2
//}
//
//func Min(arg1 int, arg2 int) int {
//	if arg1 > arg2 {
//		return arg2
//	}
//	return arg1
//}

func decrypt(code []int, k int) []int {
	result := make([]int, len(code))
	if k > 0 {
		for i := 0; i < len(code); i++ {
			// 获取前缀和
			count := 0
			index := 1
			for index <= k {
				j := (i + index) % len(code)
				count += code[j]
				index++
			}
			result[i] = count
		}
	} else if k < 0 {
		for i := 0; i < len(code); i++ {
			// 获取前缀和
			count := 0
			index := -k
			for index > 0 {
				j := i - index
				if j < 0 {
					j = len(code) + j
				}
				count += code[j]
				index--
			}
			result[i] = count
		}
	} else {
		for i := 0; i < len(code); i++ {
			result[i] = 0
		}
	}
	return result
}

func main() {
	//fmt.Println(decrypt([]int{5, 7, 1, 4}, 3))
	fmt.Println(decrypt([]int{2, 4, 9, 3}, -2))
}

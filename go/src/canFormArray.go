// Package al @see https://leetcode.cn/problems/check-array-formation-through-concatenation/
package al

func canFormArray(arr []int, pieces [][]int) bool {
	m := make(map[int]int, len(pieces))
	for index, list := range pieces {
		// 存储第一位的下标
		m[list[0]] = index
	}
	for i := 0; i < len(arr); {
		j, ok := m[arr[i]]
		if !ok {
			return false
		}
		for _, x := range pieces[j] {
			if arr[i] != x {
				return false
			}
			i++
		}
	}
	return true
}

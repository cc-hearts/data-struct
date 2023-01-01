package main

func repeatedCharacter(s string) byte {
	var ans byte = 0
	set := make(map[byte]bool)
	for _, v := range s {
		key := byte(v)
		data := set[key]
		if data == false {
			set[key] = true
		} else {
			ans = key
			break
		}
	}
	return ans
}

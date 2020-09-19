package main

import (
	"fmt"
)

//ReverseString reverse the input string and return its length
func ReverseString(word string) (ans string, ansLen int) {
	for _, v := range word {
		ans = string(v) + ans
		println(ans)
	}
	ansLen = len(ans)
	return
}

func main() {
	var ans, ansLen = ReverseString("abcdefghijklmnopqrstuvwxyz")
	fmt.Printf("Reverse string is: %s\n", ans)
	fmt.Printf("String length is: %d\n", ansLen)
}

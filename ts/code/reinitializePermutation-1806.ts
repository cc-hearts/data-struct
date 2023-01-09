function reinitializePermutation(n: number): number {
    let arr = Array.from({ length: n }).map((_, index) => index)
    let ans = 0
    function isSort(arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            // 
            if (arr[i] !== i) {
                return false
            }
        }
        return true
    }
    function perm(arr: number[]) {
        const newArr = [...arr]
        for (let i = 0; i < newArr.length; i++) {
            if (i % 2 == 0) {
                newArr[i] = arr[i / 2]
            } else {
                newArr[i] = arr[n / 2 + (i - 1) / 2]
            }
        }
        return newArr
    }
    arr = perm(arr)
    ans++
    while (!isSort(arr)) {
        arr = perm(arr)
        ans++
    }
    return ans
};

console.log(reinitializePermutation(8));

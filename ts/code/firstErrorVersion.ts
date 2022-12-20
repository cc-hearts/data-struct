function parse(number: number) {
  return Number.parseInt(number + '')
}
var solution = function (isBadVersion: any) {
  return function (n: number): number {
    // 二分进行查找
    let middle = -1,
      left = 1,
      right = n,
      bool
    if (isBadVersion(left)) {
      return left
    }
    while (left < right) {
      middle = parse(left + ((right - left) >> 1))
      bool = isBadVersion(middle)
      if (bool) {
        right = middle
      } else {
        left = middle + 1
      }
    }
    return left
  }
}

const isBadVersion = (n: number) => {
  return n >= 2
}

const func = solution(isBadVersion)

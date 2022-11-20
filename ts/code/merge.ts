// 1
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = 0, j = 0
  const res = []
  while(i < m  && j < n) {
    if(nums1[i] >= nums2[j]) {
      res.push(nums2[j++])
    } else {
      res.push(nums1[i++])
    }
  }

  if(i < m) {
    while(i < m) {
      res.push(nums1[i++])
    }
  }

  if(j < n) {
    while(j < n) {
      res.push(nums2[j++])
    }
  }
  nums1.length =0
  nums1.push(...res)
};

// 2

function merge1(nums1: number[], m: number, nums2: number[], n: number): void {

  for(let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m]
  }

  nums1.sort((a,b) => a - b)
}
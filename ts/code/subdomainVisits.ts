/**
 * @author heart
 * @description
 * @Date 2022-10-05
 * @see https://leetcode.cn/problems/subdomain-visit-count/
 */

function parseDomain(domain: string): [number, string[]] {
  const [count, domainList] = domain.split(' ')
  const nameList = domainList.split('.')
  const result: string[] = []
  let j = 0,
    cur = ''
  for (let i = 0; i < nameList.length; i++) {
    j = i + 1
    cur = nameList[i]
    while (j < nameList.length) {
      cur += '.' + nameList[j]
      j++
    }
    result.push(cur)
  }
  return [Number(count), result]
}
function subdomainVisits(cpdomains: string[]): string[] {
  const map = new Map<string, number>()
  cpdomains.forEach((val) => {
    const [count, array] = parseDomain(val)
    array.forEach((cur) => {
      map.set(cur, map.has(cur) ? map.get(cur)! + count : count)
    })
  })
  // 结果转换
  const result: string[] = []
  for (const [v, k] of map) {
    result.push(`${k} ${v}`)
  }
  return result
}

function evaluate(s: string, knowledge: string[][]): string {
  let ans = s
  const map = new Map<string, string>()
  for (let i = 0; i < knowledge.length; i++) {
    const [key, value] = knowledge[i]
    map.set(key, value)
  }
  const reg = /\((.*?)\)/g
  const matcher = s.match(reg)?.map((val) => val.replace(/[()]/g, ''))
  if (!matcher) return ans
  for (let i = 0; i < matcher.length; i++) {
    const val = map.get(matcher[i]) || '?'
    ans = ans.replace(new RegExp(`\\(${matcher[i]}\\)`), val)
  }
  return ans
}

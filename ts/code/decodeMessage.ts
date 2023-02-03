function decodeMessage(key: string, message: string): string {
  const map = new Map<string, string>()
  let charCode = 97
  for (let i = 0; i < key.length; i++) {
    if (key[i] === ' ') continue
    if (!map.has(key[i])) {
      map.set(key[i], String.fromCharCode(charCode))
      charCode++
    }
  }

  let res = ''
  for (let i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      res += message[i]
      continue
    }
    res += map.get(message[i])
  }
  return res
}

decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv')

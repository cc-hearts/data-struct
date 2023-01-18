// 1813
function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  const isSentence1 = sentence1.length >= sentence2.length
  const minList = (isSentence1 ? sentence2 : sentence1).split(' ')
  const list = (isSentence1 ? sentence1 : sentence2).split(' ')
  while (minList.length > 0) {
    if (minList[0] !== list[0] && minList[minList.length - 1] !== list[list.length - 1]) break
    if (minList[0] === list[0]) {
      minList.shift()
      list.shift()
    } else {
      minList.pop()
      list.pop()
    }
  }
  return minList.length === 0
}

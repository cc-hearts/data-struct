export function prefixCount(words: string[], pref: string): number {
    function isContainPerf(word: string): boolean {
        if (word.length < pref.length) return false
        for (let i = 0; i < pref.length; i++) {
            if (pref[i] !== word[i]) return false
        }
        return true
    }

    let ans = 0

    for (let i = 0; i < words.length; i++) {
        if (isContainPerf(words[i])) {
            ans++
        }
    }
    return ans
};

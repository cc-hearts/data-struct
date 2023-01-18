// 2299
function strongPasswordCheckerII(password: string): boolean {
  if (password.length < 8) return false
  let isDigit = false,
    isUpperCase = false,
    isLowerCase = false,
    isOtherCode = false
  for (let i = 0; i < password.length; i++) {
    const cur = password[i]
    const code = password.charCodeAt(i)
    if (i > 0 && cur === password[i - 1]) return false
    if (!isDigit && (code >= 48 && code <= 57)) isDigit = true
    if (!isUpperCase && (code >= 65 && code <= 90)) isUpperCase = true
    if (!isLowerCase && (code >= 97 && code <= 122)) isLowerCase = true
    if (!isOtherCode && '!@#$%^&*()-+'.includes(cur)) isOtherCode = true
  }

  return isDigit && isUpperCase && isLowerCase && isOtherCode
}

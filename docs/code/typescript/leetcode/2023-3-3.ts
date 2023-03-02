/**
 * @title 1487. 保证文件名唯一
 * @description 给你一个长度为 n 的字符串数组 names 。你将会在文件系统中创建 n 个文件夹：在第 i 分钟，新建名为 names[i] 的文件夹。
 * 由于两个文件 不能 共享相同的文件名，因此如果新建文件夹使用的文件名已经被占用，系统会以 (k) 的形式为新文件夹的文件名添加后缀，其中 k 是能保证文件名唯一的 最小正整数 。
 * 返回长度为 n 的字符串数组，其中 ans[i] 是创建第 i 个文件夹时系统分配给该文件夹的实际名称。
 */
export function getFolderNames(names: string[]): string[] {
  const set = new Set<string>()
  return names.map(name => {
    if (!set.has(name)) {
      set.add(name)
      return name
    }
    let n = 1
    while (set.has(`${name}(${n})`)) n++
    const res = `${name}(${n})`
    set.add(res)
    return res
  })
};
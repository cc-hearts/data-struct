/**
 * @author heart
 * @Date 2022-10-24
 * @see https://github.com/type-challenges/type-challenges/blob/main/questions/08987-medium-subsequence/README.md
 */

type Subsequence<T extends any[]> = T extends [infer r, ...infer rest]
  ? Subsequence<rest> | [r, ...Subsequence<rest>]
  : [];

// 1. 显示 Subsequence<[2]> | [1,...Subsequence<2>]
// 2. 显示 Subsequence<[2]> = [] | [2]
// 相当于是 [] | [2] | [1,...([] | [2])]
// 展开的结果就是为 [] | [2] | [1, 2]
// 联合类型的数组展开 每一项都会参与计算 最后取得的值是他们的联合类型值
type case4 = [...([2, 3, 4] | [])]; // [2,3,4] | []


export {}
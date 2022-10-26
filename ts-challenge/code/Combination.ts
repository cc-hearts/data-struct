/**
 * @author heart
 * @description 全排列问题
 * @Date 2022-10-25
 */
type Combination<T extends string[], U = T[number], K = U> = K extends U
  ? K extends string
    ? K | `${K} ${Combination<[], Exclude<U, K>>}`
    : ""
  : "";

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "../utils";

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>,
  'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
]

export {};

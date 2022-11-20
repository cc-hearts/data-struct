/**
 * @author heart
 * @description
 * @Date 2022-09-17
 */

// 判断相等
export type Equal<T, U> = (<R>() => R extends T ? 1 : 2) extends <
  R
>() => R extends U ? 1 : 2
  ? true
  : false;

export type Expect<T extends true> = T;
export type MergeInsertions<T> = T extends object
  ? { [K in keyof T]: MergeInsertions<T[K]> }
  : T;

export type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>;

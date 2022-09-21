/**
 * @author heart
 * @description
 * @Date 2022-09-17
 */

// 判断相等
export type equal<T, U> = (<R>() => R extends T ? 1 : 2) extends <R>() => R extends U ? 1 : 2 ? true : false

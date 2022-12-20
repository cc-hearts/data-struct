/**
 * @author heart
 * @Date 2022-10-25
 * @Number 08767
 * @see https://github.com/cc-hearts/type-challenges/blob/main/questions/08767-medium-combination/README.md
 */
type Combination<T extends string[], U = T[number], K = U> = K extends U
  ? K extends string
    ? K | `${K} ${Combination<[], Exclude<U, K>>}`
    : ""
  : "";

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "../utils";

type cases = [
  Expect<
    Equal<
      Combination<["foo", "bar", "baz"]>,
      | "foo"
      | "bar"
      | "baz"
      | "foo bar"
      | "foo bar baz"
      | "foo baz"
      | "foo baz bar"
      | "bar foo"
      | "bar foo baz"
      | "bar baz"
      | "bar baz foo"
      | "baz foo"
      | "baz foo bar"
      | "baz bar"
      | "baz bar foo"
    >
  >
];

export {};

type SplitChar<
  S extends string,
  result extends string[] = []
> = S extends `${infer r}${infer rest}`
  ? SplitChar<rest, [...result, r]>
  : result;
type Split<
  S extends string,
  SEP extends string,
  resultArray extends string[] = [],
  result extends string = ""
> = string extends S
  ? string[]
  : SEP extends ""
  ? SplitChar<S>
  : S extends `${infer r}${infer rest}`
  ? r extends SEP
    ? Split<rest, SEP, [...resultArray, result], "">
    : Split<rest, SEP, resultArray, `${result}${r}`>
  : [...resultArray, result];

type case1 = Split<string, "whatever">;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "../utils";

type cases = [
  Expect<Equal<Split<"Hi! How are you?", "z">, ["Hi! How are you?"]>>,
  Expect<Equal<Split<"Hi! How are you?", " ">, ["Hi!", "How", "are", "you?"]>>,
  Expect<
    Equal<
      Split<"Hi! How are you?", "">,
      [
        "H",
        "i",
        "!",
        " ",
        "H",
        "o",
        "w",
        " ",
        "a",
        "r",
        "e",
        " ",
        "y",
        "o",
        "u",
        "?"
      ]
    >
  >,
  Expect<Equal<Split<"", "">, []>>,
  Expect<Equal<Split<"", "z">, [""]>>,
  Expect<Equal<Split<string, "whatever">, string[]>>
];

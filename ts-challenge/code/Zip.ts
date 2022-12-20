/**
 * @author cc-heart
 * @Date 2022-12-20
 * @Number 04471
 * @see https://github.com/cc-hearts/type-challenges/blob/main/questions/04471-medium-zip/README.md
 */
import { Expect, Equal } from "../utils";

type Zip<T, U> = T extends [infer r, ...infer TRest]
  ? U extends [infer t, ...infer URest]
    ? [[r, t], ...Zip<TRest, URest>]
    : []
  : [];

type cases = [
  Expect<Equal<Zip<[], []>, []>>,
  Expect<Equal<Zip<[1, 2], [true, false]>, [[1, true], [2, false]]>>,
  Expect<Equal<Zip<[1, 2, 3], ["1", "2"]>, [[1, "1"], [2, "2"]]>>,
  Expect<Equal<Zip<[], [1, 2, 3]>, []>>,
  Expect<Equal<Zip<[[1, 2]], [3]>, [[[1, 2], 3]]>>
];

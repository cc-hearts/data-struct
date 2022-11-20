/**
 * @author heart
 * @description 4518
 * @Date 2022-11-09
 */
import { Equal, Expect } from "../utils";


type Fill<
  T extends unknown[],
  N,
  Start = 0,
  End extends number = T["length"],
  count extends unknown[] = [],
  Result extends unknown[] = [],
  total = T["length"]
> = count["length"] extends total
  ? Result
  : T extends [infer r, ...infer rest]
  ? count["length"] extends Start
    ? count["length"] extends End
      ? Fill<rest, N, Start, End, [...count, 0], [...Result, r], total>
      : Fill<
          rest,
          N,
          [...count, 0]["length"],
          End,
          [...count, 0],
          [...Result, N],
          total
        >
    : Fill<rest, N, Start, End, [...count, 1], [...Result, r], total>
  : Result;

// TODO：问题
// type array<
//   T extends number[] = [],
//   U extends number = [...T, 1]
// > = 1;


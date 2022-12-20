/**
 * @author cc-heart
 * @Date 2022-12-20
 * @Number 04499
 * @see https://github.com/cc-hearts/type-challenges/blob/main/questions/04499-medium-chunk/README.md
 */
type Chunk<
  T extends any[],
  N extends number,
  temp extends any[] = [],
  result extends any[] = []
> = T extends [infer r, ...infer rest]
  ? [...temp, r]["length"] extends N
    ? Chunk<rest, N, [], [...result, [...temp, r]]>
    : Chunk<rest, N, [...temp, r], [...result]>
  : temp extends []
  ? result
  : [...result, temp];

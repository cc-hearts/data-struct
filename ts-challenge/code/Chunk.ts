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

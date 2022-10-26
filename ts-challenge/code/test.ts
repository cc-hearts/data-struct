
type cases = NumberRange<0, 40>;

// TODO: 会死循环 暂时放弃
// type NumberRange<L, H, T extends any[] = []> = L extends H
//   ? H
//   : T["length"] extends L
//   ? L | NumberRange<[...T, unknown]["length"], H, [...T, unknown]>
//   : NumberRange<L, H, [...T, unknown]>;

// type NumberRange<L, H, T extends any[] = []> = T["length"] extends L
//   ? T["length"] extends H
//     ? T["length"]
//     : T["length"] | NumberRange<[...T, unknown]["length"], H, [...T, unknown]>
//   : NumberRange<L, H, [...T, unknown]>;



type NumberRange<L, H, union = never, T extends unknown[] = []> = L extends H
  ? H | union
  : T["length"] extends L
  ? NumberRange<[...T, unknown]["length"], H, L | union, [...T, unknown]>
  : NumberRange<L, H, union, [...T, unknown]>;
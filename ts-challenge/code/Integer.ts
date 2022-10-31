type Integer<T extends number> = `${T}` extends `${infer r}.${infer t}`
  ? never
  : T extends number
  ? number extends T
    ? never
    : T
  : never;

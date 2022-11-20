type valueToPrimitive<T> = T extends number
  ? number
  : T extends string
  ? string
  : T extends boolean
  ? boolean
  : T extends undefined
  ? undefined
  : T extends null
  ? null
  : never;

type arrayToPrimitive<T extends unknown[], K extends any[] = []> = T extends [
  infer r,
  ...infer rest
]
  ? arrayToPrimitive<rest, [...K, valueToPrimitive<r>]>
  : K;

type ToPrimitive<T extends Record<string, unknown>> = {
  [k in keyof T]: T[k] extends any[]
    ? arrayToPrimitive<T[k]>
    : T[k] extends Record<string, unknown>
    ? ToPrimitive<T[k]>
    : valueToPrimitive<T[k]>;
};

type aaa = ToPrimitive<PersonInfo>;
/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "../utils";

type PersonInfo = {
  name: "Tom";
  age: 30;
  married: false;
  addr: {
    home: "123456";
    phone: "13111111111";
  };
  hobbies: ["sing", "dance"];
};

type ExpectedResult = {
  name: string;
  age: number;
  married: boolean;
  addr: {
    home: string;
    phone: string;
  };
  hobbies: [string, string];
};

type cases = [Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>];

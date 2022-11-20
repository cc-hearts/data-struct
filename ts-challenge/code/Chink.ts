type obj = {
  name: string;
  age: number;
};

type s = Omit<obj, "name">;

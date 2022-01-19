import { Result, Err, Ok } from "./result";
import { match } from "./match";

const str_to_int = (str: string): Result<number, string> => {
  const num = parseInt(str);
  if (isNaN(num)) {
    return new Err("cannot parse to int");
  } else {
    return new Ok(num);
  }
};

test("test_result_ok", () => {
  const result: number = match(str_to_int("55"), {
    Ok: (value: number) => value,
    Err: (value: string) => {
      console.error(value);
      return 0;
    },
  });

  expect(result).toBe(55);
});

test("test_result_err", () => {
  const result: number = match(str_to_int("hoge"), {
    Ok: (value: number) => value,
    Err: (_: string) => {
      return 0;
    },
  });

  expect(result).toBe(0);
});

test("test_result_unwrap", () => {
  expect(str_to_int("123").unwrap()).toBe(123);
});

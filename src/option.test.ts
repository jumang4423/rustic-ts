import { Option, Some, None } from "./option";
import { match } from "./match";

const count_one_from_arr = (arr: Array<number>): Option<number> => {
  let counter: number = 0;
  arr.forEach((value: number) => {
    if (value === 1) {
      counter++;
    }
  });
  if (counter === 0) {
    return new None();
  } else {
    return new Some(counter);
  }
};

test("test_option_some", () => {
  const result: number = match(count_one_from_arr([1, 1, 1, 2, 1]), {
    Some: (value: number) => value,
    None: () => {
      return -1;
    },
  });

  expect(result).toBe(4);
});

test("test_option_none", () => {
  const result: number = match(count_one_from_arr([5, 5, 5, 5]), {
    Some: (value: number) => value,
    None: () => {
      return -1;
    },
  });

  expect(result).toBe(-1);
});

test("test_option_unwrap", () => {
  expect(count_one_from_arr([1, 1, 1, 2, 1]).unwrap()).toBe(4);
});

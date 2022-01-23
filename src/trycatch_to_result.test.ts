import { trycatch_to_result } from "./trycatch_to_result";

function str_to_number(str: string): number {
  let num = parseInt(str);
  if (isNaN(num)) {
    throw Error("not a number");
  }
  return num;
}

test("test_trycatch_to_result_ok", () => {
  let result = trycatch_to_result<number, Error>(str_to_number, "1");
  expect(result.type).toBe("Ok");
  expect(result.value).toBe(1);
});

test("test_trycatch_to_result_err", () => {
    let result = trycatch_to_result<number, Error>(str_to_number, "hoge");
    expect(result.type).toBe("Err");
    expect(result.value).toStrictEqual(Error("not a number"));
  });
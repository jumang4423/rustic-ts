import { Option, OptionPattern } from "./option";
import { Result, ResultPattern } from "./result";

export const match = <T, S>(
  res: Result<T, S> | Option<T>,
  pattern: ResultPattern<T, S> | OptionPattern<T>
): any => {
  return pattern[res.type](res.value);
};

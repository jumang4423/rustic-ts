import { Result, Ok, Err } from "./result";

// give a function, return a Result<T, E> using try catch
export const trycatch_to_result = <T, E>(
    func: () => T,
): Result<T, E> => {
    try {
        return new Ok(func());
    } catch (e) {
        return new Err(e);
    }
}
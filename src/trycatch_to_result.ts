import { Result, Ok, Err } from "./result";

// give a function, return a Result<T, E> using try catch
export const trycatch_to_result = <T, E>(
    func_and_args: (...args: any[]) => T,
    ...args: any[]
): Result<T, E> => {
    try {
        return new Ok(func_and_args(...args));
    } catch (e) {
        return new Err(e);
    }
}
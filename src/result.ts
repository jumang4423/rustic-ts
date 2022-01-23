export class Result<T, E> {
  public value: T | E;
  public type: string;

  constructor(value: T) {
    this.value = value;
    this.type = this.constructor.name;
  }

  public unwrap(): T {
    if (this.type === "Ok") {
      return this.value as T;
    } else {
      throw new Error("unwrap error");
    }
  }
}

export class Ok<T> extends Result<T, any> {
  constructor(value: T) {
    super(value);
  }
}

export class Err<E> extends Result<any, E> {
  constructor(value: E) {
    super(value);
  }
}

export type ResultPattern<T, E> = {
  Ok: (value: T) => any;
  Err: (value: E) => any;
};
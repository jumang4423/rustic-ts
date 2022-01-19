export class Result<T, S> {
  public value: T | S;
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

export class Err<S> extends Result<any, S> {
  constructor(value: S) {
    super(value);
  }
}

export type ResultPattern<T, S> = {
  Ok: (value: T) => any;
  Err: (value: S) => any;
};
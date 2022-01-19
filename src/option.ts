export class Option<T> {
  public value: T;
  public type: string;

  constructor(value: T) {
    this.value = value;
    this.type = this.constructor.name;
  }

  public unwrap(): T {
    if (this.type === "Some") {
      return this.value as T;
    } else {
      throw new Error("unwrap error");
    }
  }
}

export class Some<T> extends Option<T> {
  constructor(value: T) {
    super(value);
  }
}

export class None extends Some<any> {
  constructor() {
    super(null);
  }
}

export type OptionPattern<T> = {
  Some: (value: T) => any;
  None: () => any;
};

export const match_option = <T, S>(
  res: Option<T>,
  pattern: OptionPattern<T>
): any => {
  return pattern[res.type](res.value);
};

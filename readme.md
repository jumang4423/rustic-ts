# rustic-ts

a collection of rust like utilities like Result, Option, and some types (not yet implemented) for typescript

## install

```
yarn add rustic-ts
```

## usage

### Result<T, E>

- `Result<T, E>` is a type that represents either a success (containing a value of type `T`) or a failure (containing an error of type `E`).
- it can be either Ok obj or Err obj like this:

```typescript
function str_to_number (str: string): Result<number, Error> {
    let num = parseInt(str);
    if (isNaN(num)) {
        return Err(Error("not a number"))
    }
    return Ok(parseInt(str))
}
```

### Option<T>

- `Option<T>` is a type that represents an optional value.
- it can be either Some obj or None obj like this:

```typescript
let optional_number: Option<number> = Some(1)
let optional_string: Option<string> = None()
```

### match

- `match` is a keyword that can be used to match on a value which is result and option.
- it can be used like this:

```typescript
let optional_number: Option<number> = Some(1)
1 == match(optional_number, {
    Some(num) => num,
    None() => 0
})
```

## development

### install dependencies

```
yarn install
```

### test 

```
npm t
```

## TODO

- int32
- int64
- float32
- float64
- array
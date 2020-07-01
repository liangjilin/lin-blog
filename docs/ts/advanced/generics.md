## 定义

**泛型**：在定义函数、类、接口时不指定函数类型，在使用时才指定类型。

## 例子

我们定义一个输入什么值，就返回什么值的函数：

```typescript
    function backSelf(val: any): any {
        return val
    }

    backSelf('123')
    backSelf(123)
```

这里我们使用了`any`类型，但是，不管我们传入的是什么类型的数据，都会返回`any`数据类型，但是我们本意是希望传入什么类型就输出什么类型。

我们这时可以使用泛型:

```typescript
    function backSelf<T>(val: T): T {
        return val
    }

    backSelf<string>('123')
    backSelf<number>(123)
    backSelf<string>(123) // error: Argument of type '123' is not assignable to parameter of type 'string'.
```

也可以定义多个类型参数:

```typescript
    function backThemSelf<T, U> (num: T, str: U): [T, U] {
        return [ num, str ]
    }

    backThemSelf<number, string>(123, '123') // [ 123, '123' ]
```

## 泛型约束

约束函数、接口或传入的参数必须包含指定属性：

```typescript
    interface LengthInt {
        length: number
    }

    function backSelf<T extends LengthInt>(val: T): T {
        console.log(val.length)
        return val
    }

    backSelf(123) // error: Argument of type '123' is not assignable to parameter of type 'LengthInt'.
    backSelf('123') // 3
```

上例中，我们使用 `LengthInt` 接口对 `backSelf` 函数进行了约束。

## 泛型接口

```typescript
    function backThemSelf<T, U> (num: T, str: U): [T, U] {
        return [ num, str ]
    }

    interface Compare {
        <T>(value1: T, value2: T): boolean;
    }
    
    let myCompare: Compare;

    myCompare = function<T>(value1: T, value2: T): boolean {
        return value1 > value2
    }

    myCompare<number>(3, 4)
    myCompare<string>('5', '10')
```

## 泛型类

```typescript
    class Person<T> {
        name;
        constructor(name) {
            this.name = name;
        }
        getMarry (x: T) {
            return x
        }
    }

    let a = new Person('lin');
    console.log(a.getMarry(30))
```

## 泛型参数的默认类型


```typescript
    function swap<T = number, U = string>(tuple: [T, U]): [U, T] {
        return [tuple[1], tuple[0]];
    }

    swap([7, 'seven']); // ['seven', 7]
```
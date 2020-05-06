## 介绍

数组对象是使用单独的变量名来存储一系列的值。在 TypeScript 中，数组类型有多种定义方式，比较灵活。


## 「类型 + 方括号」表示法

最简单的方法是使用<font color=fa9003>「类型 + 方括号」</font>来表示数组：

```typescript
let numArr: number[] = [1, 2, 3, 4, 5]; 
```

如果已經定義了類型，那麽數組中不允許出現其他類型：

```typescript
let numArr: number[] = [1, 2, 3, 4, 5]; // - error TS2322: Type 'string' is not assignable to type 'number'.
```

即使是後面對數組進行操作，也是不允許的：

```typescript
let numArr: number[] = [1, 2, 3, 4, 5];
numArr.push('6') // - error TS2345: Argument of type '"6"' is not assignable to parameter of type 'number'.
```

## 「数组泛型」表示法

也就是, `Array<elemType>`（括號内為類型）來表示數組：

```typescript
let numArr: Array<number> = [1, 2, 3, 4, 5];
```


## 「接口」表示法

也可以用接口来描述数组：

```typescript
interface NumInf {
    [index: number]: number;
}
let numArr: NumInf = [1, 1, 2, 3, 5];
```

這裏`NumInf`索引類型為數字，那麽`numArr`也必須是數字。


## 类数组

在`JavaScript`中`arguments`对象不是數組，而是一個類數組對象。
在`typescript`类数组（Array-like Object）也一樣不是数组类型，比如 `arguments`：

```typescript
function sum() {
    let args: number[] = arguments;
}
// Type 'IArguments' is missing the following properties from type 'number[]': pop, push, concat, join, and 24 more.
```

上例中，`arguments` 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：

```typescript
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}
```


## any 在数组中的应用

如果我們想定義一個包含多種類型的數組，這時我們可以使用`any`, 例如:

```typescript
let list: any[] = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
```
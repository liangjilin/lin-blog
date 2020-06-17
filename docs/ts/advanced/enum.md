## 定义

`TypeScript`枚举类型的概念来源于 [C#](https://docs.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/enum)。

使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。

## 例子

<!-- red, orange, yellow, green, blue, indigo, violet. -->
枚举使用 `enum` 关键字来定义：

```typescript
    enum Week { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
    console.log(Week)
```

编译后的js为：

```typescript
    var Days;
    (function (Days) {
        Days[Days["Sun"] = 0] = "Sun";
        Days[Days["Mon"] = 1] = "Mon";
        Days[Days["Tue"] = 2] = "Tue";
        Days[Days["Wed"] = 3] = "Wed";
        Days[Days["Thu"] = 4] = "Thu";
        Days[Days["Fri"] = 5] = "Fri";
        Days[Days["Sat"] = 6] = "Sat";
    })(Days || (Days = {}));
```

运行后会得到这样数据：

```typescript
    {
        '0': 'Sun',
        '1': 'Mon',
        '2': 'Tue',
        '3': 'Wed',
        '4': 'Thu',
        '5': 'Fri',
        '6': 'Sat',
        Sun: 0,
        Mon: 1,
        Tue: 2,
        Wed: 3,
        Thu: 4,
        Fri: 5,
        Sat: 6
    }
```

可以看得出，TS会帮我们把枚举成员自动赋值为从0开始逐步递增的数字，同时也会将值和名称进行反向映射。

## 手动赋值

```typescript
    enum Days { Sun = 6, Mon, Tue = 3, Wed, Thu, Fri, Sat }
    console.log(Days)
```

结果：

```typescript
    {
        '3': 'Tue',
        '4': 'Wed',
        '5': 'Thu',
        '6': 'Fri',
        '7': 'Sat',
        Sun: 6,
        Mon: 7,
        Tue: 3,
        Wed: 4,
        Thu: 5,
        Fri: 6,
        Sat: 7
    }
```

我们可以看到，枚举中未被赋值的成员 “Mon” 和 “Wed” 会被分别赋值为 “7” 和 “4”，他们的值会根据前一个枚举成员+1得到，
<font color=fa9003>值得注意的是，“枚举值” 到 “枚举名” 映射时，我们发现本来 应该是 '6': 'Sun' 和 '7': 'Mon'不见了，**其实**是被'6': 'Fri', '7': 'Sat' 覆盖了</font>
我们要尽量<font color=fa9003>避免</font>这种情况的出现。


## 计算所得项

枚举项有两种类型：常数项（`constant member`）和计算所得项（`computed member`）。
前面举的例子就是 “常数项”, 接下来我们看 “计算所得项”

```typescript
    enum Color {Red, Green, Blue = "blue".length}
    console.log(Color) // { '0': 'Red', '1': 'Green', '4': 'Blue', Red: 0, Green: 1, Blue: 4 }
```

上面的例子中，`"blue".length` 就是一个计算所得项。计算所得项只能在最后面，不能在前面或者中间，例如:

```typescript
    enum Color {Red, Green = "Green".length, Blue } // error TS1061: Enum member must have initializer.
```

当满足以下条件时，枚举成员被当作是常数：

* 不具有初始化函数并且之前的枚举成员是常数。第一个初始值为0，之后在成员的值都是在上个成员的值+1

* 枚举成员使用常数枚举表达式初始化。常数枚举表达式：

    * 数字字面量

    * 引用之前定义的常数枚举成员（可以是在不同的枚举类型中定义的）如果这个成员是在同一个枚举类型中定义的，可以使用非限定名来引用

    * 带括号的常数枚举表达式

    * +, -, ~ 一元运算符应用于常数枚举表达式

    * +, -, *, /, %, <<, >>, >>>, &, |, ^ 二元运算符，常数枚举表达式做为其一个操作对象。若常数枚举表达式求值后为 NaN 或 Infinity，则会在编译阶段报错


## 常数枚举

使用 `const enum` 定义的枚举类型：

```typescript
    const enum Week {
        Sun,
        Mon,
        Tue
    }

    let week = [Week.Sun, Week.Mon, Week.Tue];

    // 编译为js： var week = [0 /* Sun */, 1 /* Mon */, 2 /* Tue */];
```

<font color=fa9003>注意：</font>常数枚举不能包含计算成员，否则报错


## 外部枚举

使用 `declare enum` 定义的枚举类型：

```typescript
    declare enum Week {
        Sun,
        Mon,
        Tue
    }

    let week = [Week.Sun, Week.Mon, Week.Tue];

    // 编译为js： var week = [Week.Sun, Week.Mon, Week.Tue];
```

declare 定义的类型只会用于编译时的检查，编译结果中会被删除

也可以同时使用 `declare` 和 `const`定义枚举:

```typescript
    declare const enum Week {
        Sun,
        Mon,
        Tue
    }
```

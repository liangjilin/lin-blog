## 介绍

函数是`JavaScript`应用程序的基础。 它帮助你实现抽象层，模拟类，信息隐藏和模块。 在`TypeScript`里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义行为的地方。 `TypeScript`为`JavaScript`函数添加了额外的功能，让我们可以更容易的使用。


## 函数声明

和JavaScript一样，TypeScript函数可以创建有名字的函数和匿名函数。 你可以随意选择适合应用程序的方式，不论是定义一系列API函数还是只使用一次的函数。
通过下面的例子可以迅速回想起这两种JavaScript中的函数：

```typescript
// Named function
function add(x, y) {
    return x + y;
}

// Anonymous function
let myAdd = function(x, y) { return x + y; };
```

在`JavaScript`里，函数可以可以使用函数体外部的变量。 当函数这么做时，我们说它‘捕获’了这些变量。 至于为什么可以这样做以及其中的利弊超出了本文的范围，但是深刻理解这个机制对学习`JavaScript`和`TypeScript`会很有帮助。

```typescript
let z = 100;

function add(x, y) {
    return x + y + z;
}
```

我们为上面那个函数添加类型即為`TypeScript`的函数声明：

```typescript
function add(x: number, y: number): number {
    return x + y;
}
add(3, 4) // 7
add(5) // error
add(5, 6, 7) // // error

let myAdd = function (x: number, y: number): number {
    return x + y;
};
```

注意：<font color=fa9003>输入多余的（或者少于要求的）参数，是不被允许的</font>

## 函数表达式

上面我們是這麽对函数表达式（Function Expression）的定义的：

```typescript
let myAdd = function (x: number, y: number): number {
    return x + y;
};
```
这是可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 myAdd，是通过赋值操作进行类型推论而推断出来的。如果需要我们手动给 myAdd 添加类型，则完整的应该是这样：

```typescript
let myAdd: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
```

<font color=fa9003>注意：</font>不要混淆了 `TypeScript` 中的 => 和 ES6 中的 =>
在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
在 ES6 中，=> 叫做箭头函数，应用十分广泛，可以参考 ES6 中的[箭头函数](https://es6.ruanyifeng.com/#docs/function#%E7%AE%AD%E5%A4%B4%E5%87%BD%E6%95%B0)。


## 可选参数和默认参数

在调用函数时，您可以向其传递值，这些值被称为参数。
这些参数可以在函数中使用。
您可以向函数发送多个参数，每个参数使用逗号 , 分隔：
语法格式如下所示：

```typescript
function func_name(param1: datatype, param2: datatype): datatype2 {
}
```
param1、param2 为参数名。datatype 为参数类型。datatype2 为函數类型

TypeScript里的每个函数参数都是必须的。 这不是指不能传递null或undefined作为参数，而是说编译器检查用户是否为每个参数都传入了值。 编译器还会假设只有这些参数会被传递进函数。 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。


**可选参数:**
与接口中的可选属性类似，我们用 ? 表示可选的参数：

```typescript
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```
<font color=fa9003>注意：</font>可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了：

```typescript
function buildName(firstName?: string, lastName: string) { // error: A required parameter cannot follow an optional parameter.ts(1016)

}

```

**默認參數:**

在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：

```typescript
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```
默認參數沒有「可选参数必须接在必需参数后面」的限制

## 剩余参数

ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数(<font color=fa9003>rest 参数只能是最后一个参数</font>)

```typescript
function natNum(array: any[], ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a: any[] = [];
natNum(a, 1, 2, 3);
```

## 重载

重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。

每个重载的方法（或者构造函数）都必须有一个独一无二的参数类型列表。

以下实例定义了参数类型与参数数量不同：

```typescript
function disp(s1: string): void; 
function disp(n1: number, s1: string): void; 
 
function disp(x: any, y?: any): void { 
    console.log(x); 
    console.log(y); 
} 
```

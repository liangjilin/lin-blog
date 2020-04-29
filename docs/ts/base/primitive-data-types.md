## 原始数据类型 (Primitive Data Types)

JavaScript 的类型分为两种：原始数据类型（[Primitive Data Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)）和对象类型（Object Types）。

原始数据类型包括：布尔值(`Boolean`)、数值(`Number`)、字符串(`String`)、`null`、`undefined` 以及 [ES6 中的 Symbol](https://es6.ruanyifeng.com/#docs/symbol)。

## 布尔值

最基础的数据类型就是简单的 <font color=#fa9003>true</font>/<font color=#fa9003>false</font> ，在 Javascript 和 TypeScript （以及其他语言）中被称作是 "boolean(布尔值)"。

```typescript
    let bln: boolean = false
```

PS: 使用构造函数 `Boolean` 实例化的对象**不是**布尔值：

```typescript
let newBl: boolean = new Boolean(1)

// 在轉換為JavaScript時就會報以下錯誤：
// Type 'Boolean' is not assignable to type 'boolean'.
//   'boolean' is a primitive, but 'Boolean' is a wrapper object. Prefer using 'boolean' when possible.
```

`new Boolean()` 返回的是一个 Boolean 对象：

```typescript
console.log(new Boolean(1)) // [Boolean: true]
```


直接调用 `Boolean` 也可以返回一个 boolean 类型：

```typescript
let bln: boolean = Boolean(1)
console.log(bln) // true
```

## 数值

和 Javascript 一样，在 TypeScript 中所有的`number`都是浮点值。 TypeScript 除了支持ECMAScript 2015中的<font color=fa9003>十六进制</font>和<font color=fa9003>十进制</font>外，还支持[二进制和八进制字面量](https://es6.ruanyifeng.com/#docs/number)。

使用 `number` 定义数值类型：
```typescript
let binaryLiteral: number = 0b1010  // 二进制
let octalLiteral: number = 0o744    // 八进制
let decLiteral: number = 6          // 十进制
let hexLiteral: number = 0xf00d     // 十六进制
```

## 字符串

和其他语言一样，我们使用 "<font color=#fa9003>string</font>" 类型来表示那些文本数据。和 JavaScript 一样，TypeScript 也使用双引号或单引号来围绕字符串数据。

```typescript
let myName: string = 'jilin'
let myAge: number = 28
```

你也可以使用 模板字符串，他能支持多行文本和内嵌表达式。这些字符串使用单引号 <font color=fa9003>`</font> 包围，并且嵌入的表达式使用<font color=#fa9003>${ expr }</font>这样的形式表示。

```typescript
var myName: string = `jilin`
var myAge: number = 28
var sentence: string = `Hello, my name is ${ name }.
I'll be ${ age + 1 } years old next year.`

// 編譯后的JavaScript
// var name = "jilin";
// var age = 28;
// var sentence = "Hello, my name is " + name + ".\nI'll be " + (age + 1) + " years old next year.";
```

## 空值 Void

某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。
用于标识方法返回值的类型，表示该方法没有返回值。

```typescript
function hello(): void {
    alert("Hello");
}
```

<font color=fa9003>不建议</font>声明一个变量是`void`类型，因为这个变量就只能赋值`undefined` 或 `null`:

```typescript
let unusable: void = undefined // 或者null
```


## Null 和 Undefined

*   在 JavaScript 中 null 表示 "什么都没有"。null是一个只有一个值的特殊类型。表示一个空对象引用。用 typeof 检测 null 返回是 object。
*   在 JavaScript 中, undefined 是一个没有设置值的变量。typeof 一个没有值的变量会返回 undefined。

在 `TypeScript` 中，可以使用 `null` 和 `undefined` 定义这两个原始数据类型

```typescript
let n: null = null
let u: undefined = undefined
```

與`void`的區別：`null` 和 `undefined` 是所有类型的子类型。即可以將`null` 和 `undefined`賦值給聲明的任何類型的變量 

```typescript
let str: String
str = null
str = undefined
```

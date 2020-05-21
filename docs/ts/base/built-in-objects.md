## 介紹

JavaScript的[内置對象](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)在TypeScript中也是可以直接使用的。
内置对象是指根据标准在全局作用域（Global）上存在的对象。

## ECMAScript 的内置对象

ECMAScript 标准提供的内置对象有：`Boolean`、`Error`、`Date`、`RegExp` 等。
我们可以在 TypeScript 中将变量定义为这些类型：

```typescript
let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
```

更多的内置对象，可以查看 [MDN 的文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)。


## DOM 和 BOM 的内置对象

DOM 和 BOM 提供的内置对象有：`Document`、`HTMLElement`、`Event`、`NodeList` 等。

使用：

```typescript
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});
```

## TypeScript 核心库的定义文件
[TypeScript 核心库的定义文件](https://github.com/Microsoft/TypeScript/tree/master/src/lib)中定义了所有浏览器环境需要用到的类型，并且是预置在 `TypeScript` 中的。


## 用 TypeScript 写 Node.js

`Node.js` 不是内置对象的一部分，如果想用 `TypeScript` 写 `Node.js`，则需要引入第三方声明文件：

```typescript
npm install @types/node --save-dev
```
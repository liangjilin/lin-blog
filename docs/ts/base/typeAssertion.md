## 介绍

类型断言（`Type Assertion`）可以用来手动指定一个值的类型。


## 语法

```typescript
值 as 类型
// 或 
<类型>值
```

## 用途

**将一个联合类型断言为其中一个类型**

我们之前学习过联合类型: 当 `TypeScript` 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法：

```typescript
function getLength(something: string | number) {
    return something.length; // Property 'length' does not exist on type 'string | number'.
}
}
function getString(something: string | number) {
    return something.toString(); // toString()為 string | number的共有方法
}
```

我們可以使用类型断言，将 `something` 断言成 `string`：

```typescript
function getLength(something: string | number) {
    return (something as string).length;
}
```
这样就可以解决报错的问题了，
<font color=fa9003>注意：</font>类型断言只能够「欺骗」`TypeScript` 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：

```typescript
let myName: string = 'jilin';
let myAge: number = 29;

function getLength(something: string | number) {
    return (something as string).length;
}

console.log(getLength(myName)) // 5
console.log(getLength(myAge))  // undefined，如果我們調用的不是length，而是不存在的function，那就會運行出錯
```
`TypeScript` 编译器信任了我们的断言（认为我们传在`myAge`就是`string`），故在调用`getLength(myAge)`时没有编译错误

**将一个父类断言为更加具体的子类**

当类之间有继承关系时，类型断言也是很常见的:

```typescript
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    if (error instanceof ApiError) {
        return true;
    }
    return false;
}
```

使用 `instanceof` 更加合适，因为 `ApiError` 是一个 `JavaScript` 的类，能够通过 instanceof 来判断 error 是否是它的实例。
<font color=fa9003>注意：</font>有的情况下 `ApiError` 和 `HttpError` 不是一个真正的类，而只是一个 `TypeScript` 的接口（`interface`），接口是一个类型，不是一个真正的值，它在编译结果中会被删除，当然就无法使用 `instanceof` 来做运行时判断了

**将任何一个类型断言为 any**

当我们引用一个在此类型上不存在的属性或方法时，就会报错：

```typescript
const foo: number = 1;
foo.length = 1; // 数字类型的变量 foo 上是没有 length 属性的，故 TypeScript 给出了相应的错误提示。

// index.ts:2:5 - error TS2339: Property 'length' does not exist on type 'number'.
```

但有的时候，我们非常确定这段代码不会出错，比如下面这个例子：

```typescript
window.foo = 1;

// index.ts:1:8 - error TS2339: Property 'foo' does not exist on type 'Window & typeof globalThis'.
```
上面的例子中，我们需要将 `window` 上添加一个属性 `foo`，但 `TypeScript` 编译时会报错，提示我们 `window` 上不存在 `foo` 属性。
此时我们可以使用 `as any` 临时将 `window` 断言为 `any` 类型：

```typescript
(window as any).foo = 1;
```
<font color=fa9003>在 any 类型的变量上，访问任何属性都是允许的。</font>
需要注意的是，将一个变量断言为 any 可以说是解决 TypeScript 中类型问题的最后一个手段。
**它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用 as any。**

总之，一方面不能滥用 `as any`，另一方面也不要完全否定它的作用，我们需要在类型的严格性和开发的便利性之间掌握平衡（这也是[TypeScript 的设计理念](https://github.com/Microsoft/TypeScript/wiki/TypeScript-Design-Goals)之一），才能发挥出 `TypeScript` 最大的价值。


**将 any 断言为一个具体的类型**

在日常的开发中，我们不可避免的需要处理 `any` 类型的变量，它们可能是由于第三方库未能定义好自己的类型，也有可能是历史遗留的或其他人编写的烂代码，还可能是受到 `TypeScript` 类型系统的限制而无法精确定义类型的场景。

我们可以选择改进它，通过类型断言及时的把 `any` 断言为精确的类型，亡羊补牢，使我们的代码向着高可维护性的目标发展。

举例来说，历史遗留的代码中有个 `getCacheData`，它的返回值是 `any`：

```typescript
function getCacheData(key: string): any {
    return (window as any).cache[key];
}
```

那么我们在使用它时，最好能够将调用了它之后的返回值断言成一个精确的类型，这样就方便了后续的操作：

```typescript
function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();
```

上面的例子中，我们调用完 `getCacheData` 之后，立即将它断言为 `Cat` 类型。这样的话明确了 `tom` 的类型，后续对 `tom` 的访问时就有了代码补全，提高了代码的可维护性。


## 类型断言的限制


## 双重断言

既然：

*任何类型都可以被断言为 `any`
*`any` 可以被断言为任何类型

```typescript
interface Cat {
    run(): void;
}
interface Fish {
    swim(): void;
}

function testCat(cat: Cat) {
    return (cat as any as Fish);
}
```

在上面的例子中，若直接使用 `cat as Fish` 肯定会报错，因为 `Cat` 和 `Fish` 互相都不兼容。
但是若使用双重断言，则可以打破「要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可」的限制，将任何一个类型断言为任何另一个类型。
<font color=fa9003>除非迫不得已，千万别用双重断言。</font>

## 类型断言 vs 类型转换

类型断言只会影响 `TypeScript` 编译时的类型，类型断言语句在编译结果中会被删除：

```typescript
function toBoolean(something: any): boolean {
    return something as boolean;
}

toBoolean(1); // 返回值为 1, 而不是 true
```

在上面的例子中，将 `something` 断言为 `boolean` 虽然可以通过编译，但是并没有什么用(类型断言不是类型转换，它不会真的影响到变量的类型)，
若要进行类型转换，需要直接调用类型转换的方法：
```typescript
function toBoolean(something: any): boolean {
    return Boolean(something);
}

toBoolean(1); // 返回值为 true
```


## 类型断言 vs 类型声明


## 类型断言 vs 范型

例子：

```typescript
function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData('tom') as Cat;
tom.run();
```

我们还有第三种方式可以解决这个问题，那就是范型：

```typescript
function getCacheData<T>(key: string): T {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}

const tom = getCacheData<Cat>('tom');
tom.run();
```

通过给 `getCacheData` 函数添加了一个范型 `<T>`，我们可以更加规范的实现对 `getCacheData` 返回值的约束，这也同时去除掉了代码中的 `any`，是最优的一个解决方案。

## 定義

联合类型（Union Types）表示取值可以为多种类型中的一种。有點像是any類型與類型推斷的結合使用；

## 使用

联合类型使用 | 分隔每个类型, 例如：

```typescript
let num: string | number;
num = 'one';
num = 1;
```

只要是包含的類型均可賦值為對應的類型，這裏包含 `string` 和 `number`，所以num可以賦值為 `one` 或者 1，
<font color=fa9003>但是不可複製為不包含的類型</font>，例如: <font color=fa9003>num = true</font> 是錯誤的。


## 属性或方法

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法，
例如：

```typescript
let x: any
// x = '123'
x = 123
let some: string | number
some = x

console.log(some.length) // TS2339: Property 'length' does not exist on type 'string | number'. Property 'length' does not exist on type 'number'.
```
如果我們不知道<font color=fa9003>x</font>是字符串（<font color=fa9003>'123'</font>）還是數字(<font color=fa9003>123</font>)或者是別的，
但是如果我們能確定<font color=fa9003>x</font>只可能是字符串或者數字，那麽這時候我們可以訪問`string\number`的共有方法：

```typescript
some.toString()
```

x不管是s`tring`還是`number`都不會出錯了

## 類型推斷

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```typescript
let num: string | number
num = 'one'             // 推断num類型成了 string
console.log(num.length) // 3
num = 1                 // 推断num類型成了 number
console.log(num.length) // 编译时报错
```


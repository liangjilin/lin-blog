## 类型推论

类型推论的含义就是“类型是在哪里如何被推断的”， 主要作用是 “在有些没有明确指出类型的地方帮助确定与提供类型”


## 基礎

TypeScript里，在有些没有明确指出类型的地方，类型推论会帮助提供类型。如：

```typescript
let x = 7
```
变量x的类型被推断为数字。 这种推断发生在初始化变量和成员，设置默认参数值和决定函数返回值时。

<font color=fa9003>但是，我們得注意別與`any`類型的弄混了</font>, 如：

```typescript
let x // x已經被定義為any類型
x = 7 // 這裏并不會推斷x的類型為數字
```

## 最佳通用类型

对于某些表达式的最合适的通用类型

```typescript
let x = 3              // => number
let y = [1, '2']       // (number|string)[]
let z = [1, 's', null] // (number|string|null)[]

let pets: Animal[] = [new Dog(), new Cat(), new Mouse()];
```

如果没有找到最佳通用类型，则类型推断的结果为联合数组类型（因为此时变量一定是多种类型的集合）。
比如上面的pets，如果没有指定Animal[]类型，则推断结果为(Dog | Cat | Mouse)[]


## 上下文类型

上下文类型推论是反方向进行`TypeScript`类型推论（从变量类型推断值或者参数的类型），
被叫做 “按上下文归类”，会发生在表达式的类型与所处的位置相关时(通常包含函数的参数，赋值表达式的右边，类型断言，对象成员和数组字面量和返回值语句), 如:


```typescript
window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.button);
}
```
此时函数表达式处在上下文类型的位置，`TypeScript`类型检查器使用`Window.onmousedown`函数的类型来推断右边函数表达式的类型。 
因此，就能推断出`mouseEvent`参数的类型了（也就是MouseEvent类型）

上下文类型也会做为最佳通用类型的候选类型

**PS：學習函數、聯合類型、類型斷言后再來理解，最佳通用类型、上下文类型**
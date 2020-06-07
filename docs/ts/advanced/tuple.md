## 元组

数组：相同类型对象的集合

元祖: 不同类型对象的集合

### 例子

定义一个包含`string、number`的元祖:

```typescript
let myDog: [string, number] = ['Hachi', 9]

// 与数组一样可以通过索引访问
console.log(myDog[0]) // 'Hachi'

// 也可以修改其值，类型必须对应一致
myDog[1] = 8
// 也可以访问其值的属性
console.log(myDog[0].toString) // 只能访问string, 和number的共有属性
console.log(myDog[0].length) // error: Property 'length' does not exist on type 'string | number'.Property 'length' does not exist on type 'number'.

```

对元祖类型的变量进行初始化或赋值的时候，必须与元祖类型保持一致在 “数量” 及 “类型”：
```typescript
let myDog2: [string, number]

myDog2 = ['Hachi'] // error
myDog2 = ['Hachi', '9']  // error
myDog2 = ['Hachi', 9, 'white'] // error
```

### 越界的元素

当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型：

```typescript
let myDog2: [string, number]

myDog2,push(true) // Argument of type 'true' is not assignable to parameter of type 'string | number'.
```
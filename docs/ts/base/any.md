## 定義

任意值（Any）：用来表示允许赋值为任意类型的類型。

```typescript
let let something: any = '666'
```

变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

```typescript
let something;
something = '666'

// 與let let something: any = '666'是等價的
```


## 特點

聲明类型且賦值后，是不允许重新賦值為其他類型的值（`null` 和 `undefined` 是所有类型的子类型, 所以是可以賦值為`null` 或 `undefined`）

```typescript
let str: String = '123'
str = null
str = undefined
str = 123

// - error TS2322: Type '123' is not assignable to type 'String'.
```

但如果是 `any` 类型，则允许被赋值为任意类型

```typescript
let str: any = '123'
str = 123
```

## 属性和方法

定義的任意值是可以訪問任何屬性的：

```typescript
let dog: any = 'Hachi'
console.log(dog.name)
console.log(dog.dog.firstName)
```


也可以调用任何方法：

```typescript
let dog: any = 'Hachi'
console.log(dog.eat())
console.log(dog.run())
```

<font color=fa9003>不建議</font>對any使用不存在的屬性或者方法，因爲編譯成JavaScript運行后會報錯。

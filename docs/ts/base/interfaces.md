## 介绍

在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。
接口是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。

TypeScript 接口定义如下：

```typescript
interface interface_name { 
}
```

## 实例

接口一般首字母大写。

```typescript
interface IPerson { 
    firstName: string, 
    lastName: string, 
    sayHi: ()=>string 
} 
 
let customer: IPerson = { 
    firstName: "Tom",
    lastName: "Hanks", 
    sayHi: (): string => { return "Hi there" } 
} 
 
console.log("Customer 对象 ")   // Customer 对象
console.log(customer.firstName) // Tom
console.log(customer.lastName)  // Hanks
console.log(customer.sayHi())   // Hi there
 
let employee: IPerson = { 
    firstName: "Jim",
    lastName: "Blakes", 
    sayHi: (): string => { return "Hello!!!" } 
} 
 
console.log("Employee  对象 ")   // Employee  对象
console.log(employee.firstName)  // Jim
console.log(employee.lastName)   // Blakes
```

是不是想到了`JavaScript`的構造函數？ 沒錯，他跟構造函數封裝對象很類似。

## 可選屬性

定义的变量比接口少了一些或者多一些属性都是不允许的。如果想少一些屬性，可以使用 “可選屬性”, <font color=fa9003>屬性名 + ?</font> 的形式，如:

```typescript
interface IPerson { 
    firstName: string, 
    lastName?: string, 
    sayHi: ()=>string 
} 

var customer:IPerson = { 
    firstName: "Tom",
    sayHi: (): string => { return "Hi there" } 
} 
```

<font color=fa9003>注意：接口不能转换为 JavaScript。 它只是 TypeScript 的一部分。</font>

## 任意屬性

有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

```typescript
interface Person {
    name: string
    age?: number
    [propName: string]: any
}

let tom: Person = {
    name: 'Tom',
    gender: 'male'
}
```

<font color=fa9003>注意：propName只能為string或number，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集</font>，例如：

```typescript
interface Person {
    name: string
    age?: number
    [propName: string]: string;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
}
// error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
// Property 'age' is incompatible with index signature.
// Type 'number' is not assignable to type 'string'.
```

可選屬性`age`為`number`，并不是任意屬性`string`的子類型所以出錯了。

儅我們需要定義多個任意屬性時，這樣做是錯誤的：

```typescript
interface Person {
    name: string;
    [propName: string]: string;
    [propName: number]: number;  // - error TS2413: Numeric index type 'number' is not assignable to string index type 'string'.
}
```

可以這樣：

```typescript
interface Person {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male',
    height: 185
};
```

## 只读属性

顧名思義，也就是只允許讀，不允許修改

有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：

```typescript
interface Person {
    readonly id: number;
    name: string;
    age?: number;
}

let tom: Person = {
    id: 857,
    name: 'Tom',
    gender: 'male'
};

tom.id = 9527; // - error TS2540: Cannot assign to 'id' because it is a read-only property.
```
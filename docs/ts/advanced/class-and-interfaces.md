## 介绍

使用 “接口(`Interfaces`)” 对 “类(`Shape`)” 的部分进行**抽象**


## 类实现接口

当不同类有一些共有的 “特性” 的时候，我们就可以使用关键字`implements`把这个 “特性” 提取为一个接口，例如：

```typescript
    // 我們定義一個跑的接口
    interface Run {
        alert(): void;
    }

    // 定義一個 “動物” 類
    class Animal {
    }

    // 给 “Dog” 添加一个 “跑” 方法
    class Dog extends Animal implements Run {
        alert() {
            console.log('Dog run');
        }
    }

    // 给 Cat 添加一个 “跑” 方法
    class Cat implements Run {
        alert() {
            console.log('Cat run');
        }
    }
```

單來説，“動物” 是一個類，“狗” 是 “動物” 的子類，“狗” 有 “跑” 的功能，
我們可以給 “狗” 添加一個 “跑”的方法，
這時候，如果有另外一個類 “貓”，也有 “跑” 的功能，
我們就可以將 “跑” 的功能提取出來，作爲一個接口，讓 “狗” 和 “貓” 都去實現它。

一个类也可以实现多个接口：

```typescript
    // 我們定義一個跑的接口
    interface Run {
        run(): void;
    }

    // 我們定義一個叫的接口
    interface Sound {
        sound(): void;
    }

    // 定義一個 “動物” 類
    class Animal {
    }

    // 给 “Dog” 添加一个 “跑”、“叫” 方法
    class Dog extends Animal implements Run, Sound {
        run() {
            console.log('Dog run');
        },
        sound() {
            console.log('Dog sound');
        }
    }
```

## 接口继承接口

接口与接口之间可以是继承关系：

```typescript
    // 我們定義一個跑的接口
    interface Run {
        run(): void;
    }

    // 定义接口 “叫”， 继承 “跑” 的接口
    interface RunSound extends Run {
        sound(): void;
    }

    // 定義一個 “動物” 類
    class Animal {
    }

    // 给 “Dog” 添加一个 “跑” 方法
    class Dog extends Animal implements RunSound {
        run() {
            console.log('Dog run');
        }
        sound() {
            console.log('Dog sound');
        }
    }

    let tom = new Dog()

    tom.sound() // Dog sound
```

## 接口继承类

Typescript接口可以继承类：

```typescript
    class Person {
        name: string;
        height: number;
        constructor(name: string, height: number) {
            this.name = name;
            this.height = height;
        }
    }

    interface Age extends Person {
        age: number;
    }

    let my: Age = { name: 'lin', height: 180, age: 18 };

    console.log(my) // { name: 'lin', height: 180, age: 18 }
```

之所以接口可以继承类，是因为我们定义类 `class Person` 同时也创建了一个名为 `Person` 的类型（实例的类型）, 
`Person` 的类型与下面的`infPerson`接口是等价的：

```typescript
    interface infPerson {
        name: string;
        height: number;
    }
```

所以我们在前面例子中 `interface Age extends Person` 等同于 `interface Age extends infPerson`, 也就是接口继承接口
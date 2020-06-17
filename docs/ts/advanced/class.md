## 定义

类（`class`）是对象（`object`）的模板，定义了同一组对象（又称 "实例" ）共有的属性和方法。

## TypeScript 中类的用法

`TypeScript` 可以使用三种访问修饰符，分别是 `public、private` 和 `protected`


### public

修饰的属性或方法是公有的，可以在任何地方访问或修改：

```typescript
    class Person {
        public name;
        age;
        public constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    
    let a = new Person('lin', 18);
    console.log(a.name); // lin

    a.name = 'ji';
    console.log(a.name); // ji
    console.log(a)       // Person { name: 'ji', age: 18 }

    a.age = 20;
    console.log(a.age);  // 20
```


<font color=fa9003>注意：</font> 如果不指定修饰符，那么在`TypeScript`中，成员都默认为`public`, 例如上面例子的 `age`

### private

修饰的属性或方法是私有的，不能在声明它的类的外部访问或修改:

```typescript
    class Person {
        public name;
        private age;
        public constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    let a = new Person('lin', 18);

    a.age = 20;         // error: Property 'age' is private and only accessible within class 'Person'.
    console.log(a.age); // error: Property 'age' is private and only accessible within class 'Person'.
```


<font color=fa9003>注意：</font>当构造函数修饰为 `private` 时，该类不允许被继承或者实例化：

```typescript
    class Person {
        public name;
        private constructor(name) {
            this.name = name;
        }
    }
    
    class My extends Person { // error: Cannot extend a class 'Person'. Class constructor is marked as private.
        constructor(name) {
            super(name);
        }
    }
```

### protected

修饰的属性或方法是受保护的, 在子类中也是允许被访问的或修改:

```typescript
    class Person {
        protected name;
        public constructor(name) {
            this.name = name;
        }
    }
    
    class My extends Person {
        constructor(name) {
            super(name);
            this.name = 'ji' // 可以在子类中访问或修改
            console.log(this.name);
        }
    }

    let newMy = new My('lin') // ji

    console.log(newMy) // My { name: 'ji' }
```

<font color=fa9003>注意：</font>当构造函数修饰为 `protected` 时，该类只允许被继承(不允许实例化)：

```typescript
    class Person {
        public name;
        protected constructor(name) {
            this.name = name;
        }
    }

    let newMy = new Person('lin') // error: Constructor of class 'Person' is protected and only accessible within the class declaration.
```

### 只读属性readonly

只允许访问，不允许修改其值:

```typescript
    class Person {
        readonly age;
        public constructor(age) {
            this.age = age;
        }
    }


    let my = new Person(18)

    my.age = 16 // error: Cannot assign to 'age' because it is a read-only property.
```

<font color=fa9003>注意：</font> `readonly` 和其他访问修饰符同时存在的话，需要写在其后面: `public readonly name;`


## 抽象类

使用 `abstract` 定义类和其方法: 

```typescript
    abstract class Person {
        public age;
        public constructor(age) {
            this.age = age;
        }
        public abstract say()
    }

    let my = new Person(18) // error: Cannot create an instance of an abstract class.
```

抽象类是不允许被实例化的, 如上例子，我们在实例化`my`的时候，报错了, 抽象类是用于子类继承来使用的：

```typescript
    abstract class Person {
        public age;
        public constructor(age) {
            this.age = age;
        }
        public abstract say()
    }

    class Son extends Person {
        public say() {
            console.log(`Hi, i am ${this.age} years old`);
        }
    }

    let mySon = new Son(2)

    mySon.say() // Hi, i am 2 years old
```

<font color=fa9003>注意：</font>如果在子类 `Son` 中没有实现 “抽象类” 的抽象方法 `say`, 那么就会报错:

```typescript
    abstract class Person {
        public age;
        public constructor(age) {
            this.age = age;
        }
        public abstract say()
    }

    class Son extends Person { // Non-abstract class 'Son' does not implement inherited abstract member 'say' from class 'Person'.
        public sayHi() {
            console.log(`Hi, i am ${this.age} years old`);
        }
    }
```

## 类的类型

与接口添加类型基本一致：

```typescript
    class Person {
        public name: string;
        public age: number;
        public constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        public say(): string {
            return `Hi, i am ${this.age} years old`;
        }
    }


    let my = new Person('lin', 18)
    console.log(my.say())
```
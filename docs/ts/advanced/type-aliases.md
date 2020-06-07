## 类型别名

就是给已有在类型定义一个新在名字

### 例子

我们使用给`string`起了个新名字`isString`:
 
```typescript
type isString = string
type isNumber = number
let myName: isString = 'jilin'
let myAge: isNumber = 18

function getName (x: isString, y: isNumber): isString {
    return `my name is ${x}, i am ${y} years old`
}

getName(myName, myAge)

```

<font color=fa9003>类型别名常用于联合类型</font>


## 字符串字面量类型

字符串字面量类型，就是相当于我们定义一个包含多个 “字符串” 的 “联合字符串"

### 例子

```typescript
type favAnimal = 'dog' | 'cat' | 'cow'

let isFav: favAnimal = 'mouse' // Type '"mouse"' is not assignable to type 'favAnimal'.
```

也就是说，我们可以将多种 “字符串”，以类似联合类型定义的方式定义为 “字符串字面量类型”，
以此 “字符串字面量类型” 定义的变量，它只能取定义在多个 “字符串” 中的一个。


<font color=fa9003>类型别名与字符串字面量类型都是使用 type 进行定义。</font>
## 定义

**声明合并**: 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型


## 函数的合并

```typescript
    function reverse(x: number): number;
    function reverse(x: string): string;
    function reverse(x: number | string): number | string {
        if (typeof x === 'number') {
            return Number(x.toString().split('').reverse().join(''));
        } else if (typeof x === 'string') {
            return x.split('').reverse().join('');
        }
    }
```

## 接口的合并

相同名称的接口会合并到一个接口中:

```typescript
    interface Info {
        age: number;
    }
    interface Info {
        height: number;
    }
```

相当于：

```typescript
    interface Info {
        age: number;
        height: number;
    }
```

<font color=fa9003>注意：</font> 相同的属性合并时，其类型必须一致，否则报错。

接口里的方法合并与函数合并一样。

## 类的合并

与接口合并规则一致
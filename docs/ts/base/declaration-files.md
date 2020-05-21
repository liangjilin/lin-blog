## 介紹

当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

## 语法索引

* `declare var` 声明全局变量
* `declare function` 声明全局方法
* `declare class` 声明全局类
* `declare enum` 声明全局枚举类型
* `declare namespace` 声明（含有子属性的）全局对象
* `interface` 和 `type` 声明全局类型
* `export` 导出变量
* `export namespace` 导出（含有子属性的）对象
* `export default ES6` 默认导出
* `export = commonjs` 导出模块
* `export as namespace UMD` 库声明全局变量
* `declare global` 扩展全局变量
* `declare module` 扩展模块
* `///` `<reference />` 三斜线指令

## 声明语句

如果我們引入了`jQuery`庫，我們想在 `TypeScript` 中使用，但是`TypeScript`并不知道 `$` 或 `jQuery` 是什么东西：

```typescript
jQuery('#foo'); // ERROR: Cannot find name 'jQuery'.
```

这时，我们需要使用 `declare var` 来定义它的类型：

```typescript
declare var jQuery: (selector: string) => any;

jQuery('#foo');
```

<font color=fa9003>注意：</font>`declare var` 并没有真的定义一个变量，只是定义了全局变量 jQuery 的类型，仅仅会用于编译时的检查，在编译结果中会被删除。

## 声明文件

通常我们会把声明语句放到一个单独的文件（`jQuery.d.ts`）中，这就是声明文件：

```typescript
// src/jQuery.d.ts

declare var jQuery: (selector: string) => any;
```

<font color=fa9003>注意：</font>声明文件必需以 `.d.ts` 为后缀。

**第三方声明文件**

推荐的是使用 `@types` 统一管理第三方库的声明文件。
`@types` 的使用方式很简单:

```typescript
npm install @types/jquery --save-dev
```

可以在[这个页面](https://microsoft.github.io/TypeSearch/)搜索你需要的声明文件。

## 书写声明文件

当一个第三方库没有提供声明文件时，我们就需要自己书写声明文件了。

声明文件或模块的语法格式如下：

```typescript
declare module Module_Name {
}
```

TypeScript 引入声明文件语法格式：

```typescript
/// <reference path = " runoob.d.ts" />
```

### 全局变量

全局变量的声明文件主要有以下几种语法：

* `declare var` 声明全局变量
* `declare function` 声明全局方法
* `declare class` 声明全局类
* `declare enum` 声明全局枚举类型
* `declare namespace` 声明（含有子属性的）全局对象
* `interface` 和 `type` 声明全局类型

### npm 包

npm 包的声明文件主要有以下几种语法：

* `export` 导出变量
* `export namespace` 导出（含有子属性的）对象
* `export default ES6` 默认导出
* `export = commonjs` 导出模块

### UMD 库

既可以通过 `<script>` 标签引入，又可以通过 `import` 导入的库，称为 `UMD` 库。
相比于 `npm` 包的类型声明文件，我们需要额外声明一个全局变量，为了实现这种方式，`ts` 提供了一个新语法 `export as namespace`。


<!-- ### 直接扩展全局变量


### 在 npm 包或 UMD 库中扩展全局变量

### 模块插件

### 声明文件中的依赖

### 自动生成声明文件 -->

## 发布声明文件

发布声明文件有两种方案：

* 将声明文件和源码放在一起
* 将声明文件发布到 `@types` 下

### 将声明文件和源码放在一起

tsc 自动生成的:
无需做任何其他配置，只需要把编译好的文件也发布到 npm 上，使用方就可以获取到类型提示了。

手动写的声明文件，那么需要满足以下条件之一，才能被正确的识别：

* 给 `package.json` 中的 `types` 或 `typings` 字段指定一个类型声明文件地址
* 在项目根目录下，编写一个 `index.d.ts` 文件
* 针对入口文件（`package.json` 中的 `main` 字段指定的入口文件），编写一个同名不同后缀的 `.d.ts` 文件

给 `package.json` 中的 `types` 或 `typings` 字段指定一个类型声明文件地址:

```typescript
{
    "name": "foo",
    "version": "1.0.0",
    "main": "lib/index.js",
    "types": "foo.d.ts",
}
```
指定了 `types` 为 `foo.d.ts` 之后，导入此库的时候，就会去找 `foo.d.ts` 作为此库的类型声明文件了。
如果没有指定 `types` 或 `typings`，那么就会在根目录下寻找 `index.d.ts` 文件，将它视为此库的类型声明文件。

如果没有找到 `index.d.ts` 文件，那么就会寻找入口文件（`package.json` 中的 `main` 字段指定的入口文件）是否存在对应同名不同后缀的 `.d.ts` 文件:

```typescript
// package.json
{
    "name": "foo",
    "version": "1.0.0",
    "main": "lib/index.js"
}
```

### 将声明文件发布到 `@types` 下

要将声明文件发布到 `@types` 下，就需要给 [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/) 创建一个 `pull-request`，其中包含了类型声明文件，测试代码，以及 `tsconfig.json` 等。

如果大家需要将声明文件发布到 `@types` 下，可以参考[提交的 pull-request](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/30336/files) 。
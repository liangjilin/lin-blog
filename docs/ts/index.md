## 什么是 [TypeScript](https://www.typescriptlang.org/) ？

*   是 `JavaScript` 的一个超集，支持 ECMAScript 6 标准。
*   由微软开发的自由和开源的编程语言。
*   设计目标: 开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。
*   面向对象、强类型、编译型语言：编译为 js 后运行，单独无法运行;

## TypeScript 的优势

*   类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用；

*   可以在编译阶段就发现大部分错误，这总比在运行时候出错好；

*   增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等；

**总结**：TypeSctipt增加了代码的可读性和可维护性。

## TypeScript 安裝及執行

*   安裝

    ```
        npm install -g typescript
    ```

*   執行

    新建一個 test.ts文件
    ```typescript
        var msg:string = "Hello World" 
        console.log(msg)
    ```
    将 TypeScript 转换为 JavaScript 代码：
    ```
        tsc test.ts
    ```
    使用 node 命令来执行 test.js 文件：
    ```
        node test.js 
    ```

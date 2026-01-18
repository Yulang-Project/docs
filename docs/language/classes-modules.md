# 类与模块

## 类
- 定义：`class File { public fd: i64; public fun read(max_len: i64): string { ... } }`
- 方法：通过 `obj.method(args)` 调用，隐式传入 `this`。
- 构造函数：约定方法名 `constructor(...)`，由 `new Class(args...)` 自动调用。
- 未来：`destructor` 方法配合自动释放；类成员可扩展为更多引用语义类型。

## 实例化与调用
- `let f: io.File = new io.File(path, flags, mode);`
- 方法示例：`f.write(content); f.read(1024); f.close();`
- 类默认按引用语义传递。

## 模块
- 导入：`#import "std/io" as io;` 获得模块对象。
- 命名空间：模块内的类/函数经点号访问：`new io.File(...)`、`io.output(...)`。
- 模块对象在编译期生成函数表和类型信息，支持成员调用和类型引用。

## 计划中的特性
- 类的析构/资源管理与分配器联动。
- 模块导出/声明文件机制，便于跨模块类型检查。
- 更多命名空间语法糖与包管理。

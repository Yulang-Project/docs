# 基本设计

Yulang 的核心是 Object 化，所有的数据类型包括函数、类、模块、组件等都是 Object 的子类，并且都拥有 Object 的方法。

基本语法：

```yu
#import System as sys header <sys.yuh>  // 导入基本模块并附加头文件
fun(int) main(int argc, array(char) argv) {
    sys.output("Hello World!");
    this.return(0);
}
```

## 语法逻辑

### 1. 宏表达式

宏表达式以“#”开头，在编译时进行预处理，可用于模块导入导出以及头文件附加。例如：

```yu
#import System as sys header <sys.yuh>  // 导入基本模块并附加头文件
```

### 2. 声明语句

声明语句用于声明变量、函数、类、模块等。例如：

```yu
int a = 1;  // 声明一个整数变量并赋值
string b = "Hello World!";  // 声明一个字符串变量并赋值
fun(int) foo(int x) {  // 声明一个函数，表示这个对象是 fun(int) 类型
    return x + 1;
}
```
需要注意的是，虽然函数也是对象的一部分，但是由于编译型语言的特性，且函数在yulang中作为变量存在，因此函数的声明只能出现一次，之后若出现同样名字的变量将无法被编译。

### 3. 类泛型

Yulang 的类泛型比较特殊，由于所有的数据类型都算是一个变量，所以类型可以当作参数传播。为了方便区分泛型类，我们采用了一个顶层参数的机制。例如：

```yu
class Foo(class basetype) {
    public basetype x;
    fun(void) constructor(basetype x) {
        this.x = x;
    }
    fun(basetype) get() {
        return this.x;
    }
}
// 创建对象
int a = 1;
Foo(int) foo(a);    // 或者分配堆内存：pointer(Foo(int)) foo = new Foo(int);
int b = foo.get();
```

### 4. 指针

Yulang 中的指针是类型 pointer 的对象，该对象接受一个顶层参数类，表示该指针指向的对象类型。例如：

```yu
pointer(int) p = new int(1);  // 创建一个指向 int 类型对象的指针
uint u = p.address;  // 获取指针的地址，返回 0x00000000形式的值
```

Yulang中的指针和其他的语言不同，pointer 是一个独立的变量，它本身并不能直接代表它指向的对象。如果要获取它指向的对象，可以使用它的匿名成员变量：

```yu
int b = p.;
// 也可以：
int c = p.anonymous;
```

在分配堆内存的时候，默认返回的都是相应类型的 pointer 对象。

### 5. 匿名成员变量

Yulang 中为了方便可以设置一个匿名成员变量，名称需要命名为 anonymous，例如：

```yu
object obj {
    int anonymous = 1;
}
// 调用
int a = obj.;
```

匿名成员变量可以方便的获取对象中的值，而不需要通过名字来获取。



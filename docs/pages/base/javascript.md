# JavaScript 基础

##  1. JavaScript 是一门怎样的语言及其特点

JavaScript 是一种高级、解释型的编程语言，主要用于网页开发，但现已扩展到服务器端、移动应用、桌面应用等多个领域。

### JavaScript 的本质特性

1. **多范式语言**：
   - 支持面向对象编程（基于原型）
   - 支持函数式编程
   - 支持命令式/过程式编程
2. **动态类型系统**：
   - 变量类型在运行时确定
   - 无需预先声明变量类型
3. **弱类型语言**：
   - 允许隐式类型转换
   - 例如 `"5" - 3` 得到 `2`，但 `"5" + 3` 得到 `"53"`

### JavaScript 的核心特点

1. **基于原型的继承**：
   - 不同于传统的基于类的继承
   - 对象可以直接继承其他对象
2. **函数是一等公民**：
   - 函数可以作为参数传递
   - 可以作为返回值
   - 可以赋值给变量
3. **事件驱动和非阻塞I/O**：
   - 特别适合处理异步操作
   - Node.js 使其成为高效的服务器端语言
4. **单线程但支持并发**：
   - 通过事件循环机制处理并发
   - Web Workers 可实现多线程
5. **跨平台性**：
   - 浏览器中运行（所有现代浏览器）
   - 服务器端运行（Node.js）
   - 移动应用（React Native等）
   - 桌面应用（Electron等）

### JavaScript 的独特优势

1. **即时执行**：
   - 不需要编译步骤（虽然现代引擎会JIT编译）
   - 修改代码后立即看到结果
2. **丰富的API生态**：
   - 浏览器提供的DOM API
   - Node.js提供的文件系统、网络等API
   - 大量第三方库和框架
3. **JSON原生支持**：
   - JSON是JavaScript的子集
   - 内置`JSON.parse()`和`JSON.stringify()`
4. **灵活的对象系统**：
   - 对象可以动态添加属性和方法
   - 支持对象字面量表示法

### JavaScript 的"怪异"之处

1. **自动分号插入(ASI)**：
   - 某些情况下会自动插入分号
   - 可能导致意外的行为
2. **变量提升(Hoisting)**：
   - 变量声明会被提升到作用域顶部
   - 但赋值不会提升
3. **`this`的绑定规则复杂**：
   - 根据调用方式不同，`this`指向不同
   - 容易引起混淆
4. **宽松的相等比较**：
   - `==`会进行类型转换
   - 建议总是使用`===`

### JavaScript 的现代发展

1. **ECMAScript标准**：
   - ES6(2015)引入了类、模块、箭头函数等
   - 每年发布新版本(ES2016, ES2017等)
2. **TypeScript的兴起**：
   - JavaScript的超集
   - 添加静态类型系统
3. **WebAssembly支持**：
   - 可以与JavaScript协同工作
   - 提供更高性能的计算能力

JavaScript已经从最初的"网页脚本语言"发展成为一门功能全面、应用广泛的通用编程语言，其灵活性和不断进化的特性使其在当今软件开发中占据重要地位。

## 2. JavaScript 数据类型详解

JavaScript 的数据类型可以分为两大类：**原始类型（基本类型） **、 **对象类型（引用类型）**。

### 一、原始类型（Primitive Types）

原始类型是按值访问的，直接存储在栈内存中，共有 7 种：

#### 1. Number（数字类型）

- 包括整数和浮点数
- 特殊值：`Infinity`、`-Infinity`、`NaN`（Not a Number）
- 示例：

```JavaScript
let num = 42;
let pi = 3.14;
let inf = Infinity;
let notNum = NaN;
```

#### 2. String（字符串类型）

- 表示文本数据
- 可以使用单引号、双引号或反引号（模板字符串）
- 示例：

```JavaScript
let str1 = 'Hello';
let str2 = "World";
let template = `Hello ${str2}`; // 模板字符串
```

#### 3. Boolean（布尔类型）

- 只有两个值：`true` 和 `false`
- 示例：

```JavaScript
let isTrue = true;
let isFalse = false;
```

#### 4. Undefined

- 表示变量已声明但未赋值
- 类型为 `undefined`
- 示例：

```JavaScript
let x;
console.log(x); // undefined
```

#### 5. Null

- 表示空值或"无对象"
- 类型为 `object`（历史遗留问题）
- 示例：

```JavaScript
let empty = null;
```

#### 6. Symbol（ES6新增）

- 表示唯一且不可变的值
- 常用于对象属性的键
- 示例：

```JavaScript
let sym1 = Symbol('desc');
let sym2 = Symbol('desc');
console.log(sym1 === sym2); // false
```

#### 7. BigInt（ES2020新增）

- 表示大于2^53-1的整数
- 在数字后加n或使用BigInt()函数
- 示例：

```JavaScript
let bigNum = 1234567890123456789012345678901234567890n;
let bigInt = BigInt("12345678901234567890");
```

### 二、对象类型（Object Types）

对象类型是按引用访问的，存储在堆内存中，包括：

#### 1. Object（对象）

- 键值对的集合
- 示例：

```JavaScript
let obj = {
  name: 'John',
  age: 30
};
```

#### 2. Array（数组）

- 有序的数据集合
- 示例：

```JavaScript
let arr = [1, 2, 3];
```

#### 3. Function（函数）

- 可调用的对象
- 示例：

```JavaScript
function greet() {
  console.log('Hello');
}
```

#### 4. 其他内置对象

- Date（日期）
- RegExp（正则表达式）
- Map、Set（ES6新增）
- Promise（ES6新增）
- 等等...

### 三、类型检测方法

#### 1. typeof 操作符

```JavaScript
typeof 42;           // "number"
typeof 'hello';      // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object" (历史遗留问题)
typeof Symbol();     // "symbol"
typeof 123n;         // "bigint"
typeof {};           // "object"
typeof [];           // "object"
typeof function(){}; // "function"
```

#### 2. instanceof 操作符

检测对象是否为特定构造函数的实例：

```JavaScript
[] instanceof Array;    // true
{} instanceof Object;   // true
```

#### 3. Object.prototype.toString.call()

最准确的类型检测方法：

```JavaScript
Object.prototype.toString.call(42);        // "[object Number]"
Object.prototype.toString.call('hello');   // "[object String]"
Object.prototype.toString.call(null);      // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
```

### 四、类型转换

#### 1. 显式类型转换

```JavaScript
Number('123');    // 123
String(123);      // "123"
Boolean(1);       // true
```

#### 2. 隐式类型转换

```JavaScript
'5' + 1;   // "51" (字符串拼接)
'5' - 1;   // 4 (数字运算)
if (1) {   // 1 被转换为 true
  // 执行
}
```

### 五、原始类型与引用类型的区别

| 特性     | 原始类型          | 引用类型             |
| -------- | ----------------- | -------------------- |
| 存储位置 | 栈内存            | 堆内存               |
| 访问方式 | 按值访问          | 按引用访问           |
| 复制行为 | 复制实际值        | 复制引用地址         |
| 比较方式 | 比较值是否相等    | 比较引用地址是否相同 |
| 大小     | 固定大小          | 动态大小             |
| 可变性   | 不可变(immutable) | 可变(mutable)        |

### 六、特殊注意事项

1. **NaN 的特殊性**：

```JavaScript
NaN === NaN;  // false
isNaN(NaN);   // true
```

2. **浮点数精度问题**：

```JavaScript
0.1 + 0.2 === 0.3;  // false
```

3. **Symbol 的唯一性**：

```JavaScript
Symbol('foo') === Symbol('foo');  // false
```

4. **BigInt 不能与 Number 混合运算**：

```JavaScript
1n + 2;  // TypeError
```



## 3.  JavaScript 中检测变量是否为 String 类型

在 JavaScript 中，有几种方法可以检测一个变量是否是 String 类型：

### 1. 使用 `typeof` 操作符

```JavaScript
if (typeof variable === 'string') {
  // 变量是字符串
}
```

注意：`typeof` 对于原始字符串和字符串对象都返回 `'string'`。

### 2. 使用 `instanceof` 操作符（仅适用于 String 对象）

```JavaScript
if (variable instanceof String) {
  // 变量是 String 对象
}
```

注意：`instanceof` 只对通过 `new String()` 创建的字符串对象返回 `true`，对原始字符串返回 `false`。

### 3. 使用 `Object.prototype.toString.call()`

```JavaScript
if (Object.prototype.toString.call(variable) === '[object String]') {
  // 变量是字符串（包括原始字符串和 String 对象）
}
```

这种方法可以检测原始字符串和 String 对象。

### 4. 结合使用的方法（推荐）

```JavaScript
function isString(variable) {
  return typeof variable === 'string' || variable instanceof String;
}
```

### 示例比较

```JavaScript
const primitiveStr = 'hello';
const stringObj = new String('world');

console.log(typeof primitiveStr);        // "string"
console.log(typeof stringObj);           // "object"
console.log(primitiveStr instanceof String);  // false
console.log(stringObj instanceof String);     // true
console.log(Object.prototype.toString.call(primitiveStr)); // "[object String]"
console.log(Object.prototype.toString.call(stringObj));    // "[object String]"
```

### 最佳实践

- 大多数情况下，使用 `typeof variable === 'string'` 就足够了
- 如果你需要处理可能来自其他框架或环境的 String 对象，可以使用更全面的检查方法
- 在 TypeScript 中，可以使用类型保护 `typeof` 或类型断言




## 4. JavaScript 中去除字符串空格的几种方法

在 JavaScript 中，有几种方法可以去除字符串中的空格，根据不同的需求可以选择不同的方法：

### 1. 去除字符串两端的空格（最常用）

```JavaScript
const str = "  Hello World  ";
const trimmedStr = str.trim();
console.log(trimmedStr); // "Hello World"
```

### 2. 去除字符串左侧空格

```JavaScript
const str = "  Hello World  ";
const leftTrimmed = str.trimLeft(); // 或 str.trimStart()
console.log(leftTrimmed); // "Hello World  "
```

### 3. 去除字符串右侧空格

```JavaScript
const str = "  Hello World  ";
const rightTrimmed = str.trimRight(); // 或 str.trimEnd()
console.log(rightTrimmed); // "  Hello World"
```

### 4. 去除字符串中所有空格

```JavaScript
const str = " H e l l o W o r l d ";
const noSpaces = str.replace(/\s+/g, '');
console.log(noSpaces); // "HelloWorld"
```

### 5. 替换多个连续空格为单个空格

```JavaScript
const str = "Hello    World   from   JavaScript";
const singleSpaced = str.replace(/\s+/g, ' ');
console.log(singleSpaced); // "Hello World from JavaScript"
```

### 6. 去除特定类型的空白字符

```JavaScript
const str = "Hello\tWorld\nfrom\rJavaScript";
// 去除所有空白字符（包括制表符、换行符等）
const noWhitespace = str.replace(/\s+/g, '');
console.log(noWhitespace); // "HelloWorldfromJavaScript"
```

### 注意事项

1. `trim()`、`trimStart()` 和 `trimEnd()` 是 ES5/ES6 方法，在旧浏览器中可能需要 polyfill
2. 使用正则表达式方法时，`\s`匹配所有空白字符，包括：
   - 空格``
   - 制表符 `\t`
   - 换行符 `\n`
   - 回车符 `\r`
   - 垂直制表符 `\v`
   - 换页符 `\f`
3. 如果需要更复杂的空格处理，可以结合多种方法使用

### 性能考虑

对于简单的去除两端空格，`trim()` 系列方法性能最好。如果需要处理大量字符串或复杂空格情况，正则表达式方法可能更灵活但性能稍低。



## 5. JavaScript 中 `==` 和 `===` 的区别

`==`是抽象相等运算符，而`===`是严格相等运算符。`==`运算符是在进行必要的类型转换后，再比较。`===`运算符不会进行类型转换，所以如果两个值不是相同的类型，会直接返回`false`。

### 主要区别

| 比较点       | `==` (宽松相等)              | `===` (严格相等)                   |
| ------------ | ---------------------------- | ---------------------------------- |
| **类型转换** | 会进行隐式类型转换           | 不进行类型转换                     |
| **比较方式** | 先转换类型再比较值           | 先比较类型，类型不同直接返回 false |
| **推荐程度** | 不推荐使用，容易产生意外结果 | 推荐使用，结果更可预测             |

### 具体比较规则

#### `==` 的隐式转换规则

1. 如果类型相同，直接比较值（等同于 `===`）
2. 如果类型不同：
   - null 和 undefined 相等
   - 字符串和数字比较时，字符串转换为数字
   - 布尔值与其他类型比较时，布尔值转换为数字（true→1，false→0）
   - 对象与基本类型比较时，对象会尝试转换为基本值（通过 valueOf() 或 toString()）

#### `===` 的比较规则

1. 类型不同 → 直接返回 false
2. 类型相同：
   - 基本类型：比较值是否相同
   - 对象：比较引用地址是否相同（是否是同一个对象）

#### 示例比较

```JavaScript
// 数字和字符串
5 == '5'    // true (字符串'5'转换为数字5)
5 === '5'   // false (类型不同)

// 布尔值和其他类型
true == 1   // true (true转换为1)
true === 1  // false

// null和undefined
null == undefined   // true
null === undefined  // false

// 对象和基本类型
const obj = { toString: () => '5' }
obj == 5    // true (对象转换为字符串'5'，再转换为数字5)
obj === 5   // false

// NaN比较
NaN == NaN   // false (NaN不等于任何值，包括自己)
NaN === NaN  // false
```

### 特殊情况

1. **NaN**：使用 `==` 或 `===` 比较 NaN 都返回 false，应该用 `isNaN()` 或 `Number.isNaN()`
2. **+0 和 -0**：`+0 === -0` 返回 true
3. **对象比较**：两个不同对象即使内容相同，`==` 和 `===` 都返回 false

### 最佳实践

1. **总是优先使用 `===`**，除非你有明确的理由需要使用 `==`
2. 需要检查 null 或 undefined 时，可以简写：

```JavaScript
if (value == null) {
 // 等同于 value === null || value === undefined
}
```

3. 使用 ESLint 等工具可以配置规则强制使用 `===`（如 `eqeqeq` 规则）

`===` 提供了更严格、更可预测的比较行为，是 JavaScript 开发中的推荐做法。



## 6. JavaScript DOM 节点操作指南

JavaScript 提供了丰富的 API 来操作 DOM 节点，包括添加、移除、移动、复制、创建和查找节点。以下是详细的操作方法：

### 一、创建节点

#### 1. 创建元素节点

```JavaScript
const newDiv = document.createElement('div');
```

#### 2. 创建文本节点

```JavaScript
const newText = document.createTextNode('Hello World');
```

#### 3. 创建属性节点

```JavaScript
const newAttr = document.createAttribute('class');
newAttr.value = 'container';
```

#### 4. 创建文档片段（优化性能）

```JavaScript
const fragment = document.createDocumentFragment();
```

### 二、添加节点

#### 1. 追加子节点

```JavaScript
parentElement.appendChild(newNode);
```

### 2. 在指定节点前插入

```JavaScript
parentElement.insertBefore(newNode, referenceNode);
```

### 3. 插入到指定位置

```JavaScript
parentElement.insertAdjacentElement('beforebegin', newNode); // 元素前
parentElement.insertAdjacentElement('afterbegin', newNode);  // 元素内开头
parentElement.insertAdjacentElement('beforeend', newNode);   // 元素内末尾
parentElement.insertAdjacentElement('afterend', newNode);    // 元素后
```

### 三、移除节点

#### 1. 移除子节点

```JavaScript
parentElement.removeChild(childNode);
```

#### 2. 直接移除节点（现代方法）

```JavaScript
node.remove();
```

#### 3. 移除所有子节点

```JavaScript
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
// 或
element.innerHTML = '';
```

### 四、移动节点

移动节点实际上就是先移除再添加到新位置：

```JavaScript
// 将节点从当前位置移动到新位置
newParent.appendChild(existingNode);

// 在特定位置移动
newParent.insertBefore(existingNode, referenceNode);
```

### 五、复制节点

#### 1. 浅拷贝（不包含子节点）

```JavaScript
const clone = node.cloneNode(false);
```

#### 2. 深拷贝（包含所有子节点）

```JavaScript
const clone = node.cloneNode(true);
```

### 六、查找节点

#### 1. 通过 ID 查找

```JavaScript
const element = document.getElementById('myId');
```

#### 2. 通过类名查找

```JavaScript
const elements = document.getElementsByClassName('myClass');
```

#### 3. 通过标签名查找

```JavaScript
const elements = document.getElementsByTagName('div');
```

#### 4. 通过 CSS 选择器查找

```JavaScript
// 返回第一个匹配元素
const element = document.querySelector('.container > p');

// 返回所有匹配元素
const elements = document.querySelectorAll('.item');
```

#### 5. 关系查找

```JavaScript
// 父节点
const parent = node.parentNode;

// 子节点
const children = node.childNodes;  // 包含所有类型节点
const children = node.children;    // 仅元素节点

// 兄弟节点
const nextSibling = node.nextSibling;
const previousSibling = node.previousSibling;
const nextElementSibling = node.nextElementSibling;      // 下一个元素节点
const previousElementSibling = node.previousElementSibling; // 上一个元素节点
```

### 七、综合示例

```JavaScript
// 创建新元素
const newDiv = document.createElement('div');
newDiv.className = 'box';
newDiv.textContent = '新创建的盒子';

// 添加到文档中
document.body.appendChild(newDiv);

// 复制元素
const clonedDiv = newDiv.cloneNode(true);

// 移动元素
const container = document.querySelector('.container');
container.appendChild(clonedDiv);

// 移除原始元素
newDiv.remove();
```

### 八、性能优化建议

1. 批量操作时使用文档片段(documentFragment)减少重绘
2. 避免频繁操作DOM，可以先在内存中构建好结构再一次性添加
3. 使用`querySelector`和`querySelectorAll`时尽量具体化选择器
4. 需要多次访问的DOM元素应该缓存到变量中




## 7. 事件委托（Event Delegation）详解

事件委托是 JavaScript 中一种重要的**事件处理模式**，它利用**事件冒泡**机制，将子元素的事件处理委托给父元素统一管理。

### 核心原理

1. **事件冒泡**：当子元素触发事件时，事件会向上传播（冒泡）到父元素、祖先元素
2. **委托机制**：不在单个子元素上设置监听器，而是在父元素上设置一个监听器
3. **事件目标**：通过 `event.target` 识别实际触发事件的子元素

### 基本实现

```JavaScript
// 传统方式 - 为每个子元素添加监听器
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', handleClick);
});

// 事件委托方式 - 只需一个监听器
document.querySelector('.parent-container').addEventListener('click', function(event) {
  if (event.target.classList.contains('item')) {
    handleClick(event);
  }
});
```

### 为什么使用事件委托

#### 优势

1. **内存效率**：减少事件监听器数量（从 N 个减少到 1 个）
2. **动态元素支持**：自动适用于后来添加的子元素，无需重新绑定
3. **性能提升**：减少初始化和内存占用，特别适合长列表
4. **简化代码**：统一管理同类事件的处理逻辑

#### 适用场景

- 列表或表格中的多项交互
- 具有相同行为模式的元素组
- 动态内容（频繁添加/删除子元素）

### 高级用法

#### 1. 精确匹配目标元素

```JavaScript
container.addEventListener('click', function(event) {
  // 检查是否是我们关心的元素
  const item = event.target.closest('.item');
  if (item && container.contains(item)) {
    // 处理逻辑
  }
});
```

#### 2. 区分不同子元素

```JavaScript
container.addEventListener('click', function(event) {
  const target = event.target;
  
  if (target.classList.contains('btn-delete')) {
    handleDelete(target);
  } 
  else if (target.classList.contains('btn-edit')) {
    handleEdit(target);
  }
});
```

#### 3. 配合 data-* 属性使用

```HTML
<div class="actions">
  <button data-action="save">保存</button>
  <button data-action="cancel">取消</button>
</div>

<script>
document.querySelector('.actions').addEventListener('click', (event) => {
  const action = event.target.dataset.action;
  if (action) {
    actions[action](); // 调用对应方法
  }
});

const actions = {
  save: () => console.log('保存操作'),
  cancel: () => console.log('取消操作')
};
</script>
```

### 注意事项

1. **事件冒泡**：某些事件不冒泡（如 focus/blur，可用 focusin/focusout 代替）
2. **性能影响**：在非常大的容器上委托太多事件可能影响性能
3. **阻止冒泡**：如果子元素调用了 `stopPropagation()`，委托会失效
4. **目标精确性**：确保准确识别目标元素，特别是复杂嵌套结构

### 现代 JavaScript 的替代方案

对于简单的委托需求，现代浏览器支持 `Element.matches()` 方法：

```JavaScript
document.addEventListener('click', (event) => {
  if (event.target.matches('.item')) {
    // 处理逻辑
  }
});
```

事件委托是高效管理动态内容的强大工具，合理使用可以显著提升应用性能和维护性。



## 8. JavaScript 事件冒泡机制详解

事件冒泡（Event Bubbling）是 DOM 事件传播的三个阶段之一，是理解 JavaScript 事件处理的核心概念。

### 一、事件传播的三个阶段

1. **捕获阶段 (Capture Phase)**：从 window 向下传播到目标元素
2. **目标阶段 (Target Phase)**：到达实际触发事件的元素
3. **冒泡阶段 (Bubble Phase)**：从目标元素向上传播回 window

```
 [捕获阶段] window → document → ... → 父元素
[目标阶段] 目标元素
[冒泡阶段] 父元素 → ... → document → window
```

### 二、冒泡机制的核心特点

1. **自下而上传播**：事件从最深层的目标元素开始，逐级向上层元素传播
2. **默认行为**：大多数事件都会冒泡（除了少数特殊事件）
3. **事件委托基础**：冒泡机制使得事件委托成为可能

### 三、冒泡示例

```HTML
<div id="grandparent" style="padding: 20px; background: lightblue;">
  Grandparent
  <div id="parent" style="padding: 20px; background: lightgreen;">
    Parent
    <div id="child" style="padding: 20px; background: lightpink;">
      Child
    </div>
  </div>
</div>

<script>
document.getElementById('grandparent').addEventListener('click', () => {
  console.log('Grandparent clicked');
});

document.getElementById('parent').addEventListener('click', () => {
  console.log('Parent clicked');
});

document.getElementById('child').addEventListener('click', () => {
  console.log('Child clicked');
});
</script>
```

点击 child 元素时，控制台输出顺序：

```
Child clicked
Parent clicked
Grandparent clicked
```

### 四、控制冒泡行为

#### 1. 阻止冒泡

```JavaScript
element.addEventListener('click', (event) => {
  event.stopPropagation(); // 阻止事件继续冒泡
  console.log('事件将不会继续向上传播');
});
```

#### 2. 阻止默认行为（不阻止冒泡）

```JavaScript
element.addEventListener('click', (event) => {
  event.preventDefault(); // 只阻止默认行为，不阻止冒泡
});
```

#### 3. 立即停止所有传播

```JavaScript
element.addEventListener('click', (event) => {
  event.stopImmediatePropagation(); // 阻止冒泡并阻止同元素上其他处理函数执行
});
```

### 五、哪些事件不冒泡

以下常见事件不会冒泡：

- `focus` / `blur`（可用 `focusin` / `focusout` 代替）
- `load` / `unload`
- `mouseenter` / `mouseleave`
- `abort` / `error`

### 六、事件对象中的冒泡相关属性

1. **event.target**：实际触发事件的元素（最深层）

2. **event.currentTarget**：当前处理事件的元素（等于 `this`）

3. event.eventPhase

   ：表示事件当前所处阶段

   - 1: 捕获阶段
   - 2: 目标阶段
   - 3: 冒泡阶段

### 七、捕获与冒泡的执行顺序

```JavaScript
// 第三个参数 true 表示在捕获阶段处理
document.getElementById('grandparent').addEventListener('click', () => {
  console.log('Grandparent 捕获');
}, true);

// 默认 false 表示在冒泡阶段处理
document.getElementById('grandparent').addEventListener('click', () => {
  console.log('Grandparent 冒泡');
});

// 点击 child 时的输出顺序：
// Grandparent 捕获
// Parent 捕获
// Child 目标（冒泡和捕获监听器按注册顺序执行）
// Parent 冒泡
// Grandparent 冒泡
```

### 八、实际应用技巧

1. **性能优化**：在父元素上使用单个事件监听器处理多个子元素事件
2. **动态元素处理**：对新添加的子元素自动生效
3. **复杂交互**：通过判断 `event.target` 处理不同子元素的交互

```JavaScript
document.querySelector('.list-container').addEventListener('click', (event) => {
  const item = event.target.closest('.list-item');
  if (item) {
    // 处理列表项点击
    console.log('点击的项目:', item.dataset.id);
  }
  
  const button = event.target.closest('.delete-btn');
  if (button) {
    // 处理删除按钮点击
    event.stopPropagation(); // 阻止触发列表项的点击
    console.log('删除项目:', button.dataset.id);
  }
});
```



## 8. `require` 与 `import` 的区别详解

`require` 和 `import` 都是 JavaScript 中用于模块导入的机制，但它们来自不同的模块系统，有显著差异：

### 一、来源与标准

| 特性          | `require`               | `import`                       |
| ------------- | ----------------------- | ------------------------------ |
| **模块系统**  | CommonJS (Node.js 默认) | ES Modules (ES6 标准)          |
| **环境**      | Node.js 原生支持        | 浏览器原生支持，Node.js 需配置 |
| **静态/动态** | 动态加载                | 静态编译时加载                 |

### 二、语法对比

#### CommonJS (`require`)

```JavaScript
// 导入整个模块
const fs = require('fs');

// 导入部分内容
const { readFile } = require('fs');

// 导出
module.exports = { ... };
exports.func = function() { ... };
```

#### ES Modules (`import`)

```JavaScript
// 导入整个模块
import fs from 'fs';

// 导入命名导出
import { readFile } from 'fs';

// 导入并重命名
import { readFile as rf } from 'fs';

// 动态导入(返回Promise)
const module = await import('./module.js');

// 导出
export default { ... };
export function func() { ... };
```

### 三、核心区别

1. **加载时机**
   - `require`: 运行时动态加载（代码执行到该行时才加载）
   - `import`: 编译时静态加载（代码编译阶段就确定依赖关系）
2. **性能优化**
   - `import` 支持静态分析，便于打包工具(tree-shaking)移除未使用代码
   - `require` 难以在编译时确定依赖关系
3. **缓存机制**
   - 两者都有模块缓存，但实现方式不同
   - `require` 的缓存可通过 `delete require.cache[modulePath]` 清除
   - `import` 的缓存不可直接操作
4. **顶层位置**
   - `import` 必须出现在模块顶层（ES2020 支持动态导入除外）
   - `require` 可以在代码任意位置调用
5. **循环依赖处理**
   - `require` 在循环依赖中可能返回未完全初始化的模块
   - `import` 会建立"活绑定"，能获取到模块的最新值

### 四、互操作方式

#### 1. Node.js 中使用 ES Modules

- 文件扩展名用 `.mjs`
- 或在 `package.json` 设置 `"type": "module"`

#### 2. 混合使用

```JavaScript
// 在ES模块中导入CommonJS模块
import cjsModule from 'commonjs-module';

// 在CommonJS模块中导入ES模块(需使用动态导入)
const esModule = await import('./es-module.mjs');
```

### 五、使用建议

1. **新项目**：优先使用 ES Modules (`import/export`)
   - 现代前端生态的主流选择
   - 支持静态分析优化
   - 语言标准规范
2. **Node.js 项目**：
   - 新项目推荐使用 ES Modules
   - 旧项目或需要兼容性时使用 CommonJS
3. **浏览器环境**：
   - 现代浏览器原生支持 ES Modules
   - 通过 `<script type="module">` 使用

### 六、特殊注意事项

1. **`import` 的绑定是实时的（live binding）**

```JavaScript
// counter.js
export let count = 0;

// main.js
import { count } from './counter.js';
console.log(count); // 0
count++; // 会修改原模块的值
```

2. **`require` 是值拷贝**

```JavaScript
// counter.js
exports.count = 0;

// main.js
const { count } = require('./counter.js');
count++; // 不会影响原模块的值
```

3. **动态导入(Dynamic Import)**

```JavaScript
// 按需加载模块
button.addEventListener('click', async () => {
 const module = await import('./dialog.js');
 module.openDialog();
});
```



## 9. JavaScript 对象的多种创建方式

JavaScript 提供了多种创建对象的方式，每种方式都有其适用场景和特点。以下是主要的对象创建方法：

### 1. 对象字面量 (Object Literal)

最简单直接的方式，适合创建单个对象。

```JavaScript
const person = {
  name: '张三',
  age: 30,
  greet() {
    console.log(`你好，我是${this.name}`);
  }
};
```

### 2. 构造函数 (Constructor Function)

传统的面向对象方式，使用 `new` 关键字创建实例。

```JavaScript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`你好，我是${this.name}`);
  };
}

const person = new Person('李四', 25);
```

### 3. Object.create()

基于现有对象创建新对象，可以指定原型。

```JavaScript
const personProto = {
  greet() {
    console.log(`你好，我是${this.name}`);
  }
};

const person = Object.create(personProto);
person.name = '王五';
person.age = 28;
```

### 4. 类语法 (ES6 Class)

ES6 引入的类语法，实质上是构造函数的语法糖。

```JavaScript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`你好，我是${this.name}`);
  }
}

const person = new Person('赵六', 32);
```

### 5. 工厂函数 (Factory Function)

不依赖 `new` 关键字，通过函数返回新对象。

```JavaScript
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      console.log(`你好，我是${this.name}`);
    }
  };
}

const person = createPerson('钱七', 40);
```

### 6. 单例模式 (Singleton)

确保一个类只有一个实例。

```JavaScript
const singleton = (function() {
  let instance;
  
  function createInstance() {
    return {
      name: '唯一实例',
      log() {
        console.log('我是单例对象');
      }
    };
  }
  
  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();
console.log(instance1 === instance2); // true
```

### 7. 使用 Object.assign()

合并多个对象创建新对象。

```JavaScript
const basicInfo = { name: '孙八' };
const detailInfo = { age: 35, job: '工程师' };
const methods = {
  greet() {
    console.log(`我是${this.name}`);
  }
};

const person = Object.assign({}, basicInfo, detailInfo, methods);
```

### 8. 动态属性名创建 (ES6)

使用计算属性名动态创建对象。

```JavaScript
const dynamicKey = 'user' + Math.floor(Math.random() * 10);
const person = {
  [dynamicKey]: '动态属性名',
  ['get' + dynamicKey]() {
    return this[dynamicKey];
  }
};
```

### 9. 原型模式

通过原型共享方法和属性。

```JavaScript
function Person() {}
Person.prototype.name = '默认名字';
Person.prototype.greet = function() {
  console.log(`你好，我是${this.name}`);
};

const person1 = new Person();
const person2 = new Person();
```

### 10. 组合使用构造函数和原型

最常用的模式，构造函数定义实例属性，原型定义共享方法。

```JavaScript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`你好，我是${this.name}`);
};

const person = new Person('周九', 45);
```

### 选择建议

1. **简单对象**：使用对象字面量
2. **需要多个相似对象**：使用类或构造函数
3. **需要继承**：使用 `class` 或 `Object.create()`
4. **需要私有性**：使用工厂函数 + 闭包
5. **需要动态属性**：使用计算属性名
6. **需要单例**：使用模块模式或立即执行函数



## 10. JavaScript 继承的方式与优缺点分析

JavaScript 虽然是基于原型的语言，但提供了多种实现继承的方式。以下是主要的继承模式及其优缺点：

### 1. 原型链继承

#### 实现方式

```JavaScript
function Parent() {
  this.parentProperty = true;
}
Parent.prototype.getParentValue = function() {
  return this.parentProperty;
};

function Child() {
  this.childProperty = false;
}
// 继承Parent
Child.prototype = new Parent();

const instance = new Child();
```

#### 优点

- 简单易实现
- 父类新增原型方法/属性，子类都能访问

#### 缺点

- 所有子类实例共享同一个父类实例（引用类型属性会被共享）
- 创建子类实例时无法向父类构造函数传参
- 无法实现多继承

### 2. 构造函数继承（经典继承）

#### 实现方式

```JavaScript
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue'];
}

function Child(name) {
  Parent.call(this, name); // 调用父类构造函数
}

const child1 = new Child('小明');
child1.colors.push('green');

const child2 = new Child('小红');
console.log(child2.colors); // ['red', 'blue']
```

#### 优点

- 避免了引用类型属性被所有实例共享
- 可以在子类中向父类传递参数
- 可以实现多继承（调用多个父类构造函数）

#### 缺点

- 方法都在构造函数中定义，每次创建实例都会创建一遍方法
- 不能继承父类原型上的属性和方法

### 3. 组合继承（最常用）

#### 实现方式

```JavaScript
function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue'];
}
Parent.prototype.sayName = function() {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name); // 第二次调用Parent
  this.age = age;
}
Child.prototype = new Parent(); // 第一次调用Parent
Child.prototype.constructor = Child;

const child = new Child('小明', 12);
```

#### 优点

- 融合了原型链继承和构造函数继承的优点
- 既是子类的实例，也是父类的实例
- 可传参，函数可复用
- 引用属性不共享

#### 缺点

- 调用了两次父类构造函数（内存浪费）
- 子类原型上会有多余的父类实例属性

### 4. 原型式继承

#### 实现方式

```JavaScript
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

const parent = {
  name: '父对象',
  friends: ['张三', '李四']
};

const child = object(parent);
```

#### ES5 规范 Object.create()

```JavaScript
const child = Object.create(parent, {
  age: {
    value: 18
  }
});
```

#### 优点

- 不需要创建自定义类型
- 适合不需要单独构造函数的场景

#### 缺点

- 包含引用类型的属性值始终共享
- 无法复用（没有封装性）

### 5. 寄生式继承

#### 实现方式

```JavaScript
function createAnother(original) {
  const clone = Object.create(original);
  clone.sayHi = function() {
    console.log('hi');
  };
  return clone;
}

const parent = { name: '父对象' };
const child = createAnother(parent);
```

#### 优点

- 可以为对象添加函数，而不需要创建自定义类型

#### 缺点

- 函数难以复用（类似构造函数模式）
- 引用类型属性共享问题

### 6. 寄生组合式继承（最理想）

#### 实现方式

```JavaScript
function inheritPrototype(child, parent) {
  const prototype = Object.create(parent.prototype);
  prototype.constructor = child;
  child.prototype = prototype;
}

function Parent(name) {
  this.name = name;
  this.colors = ['red', 'blue'];
}
Parent.prototype.sayName = function() {
  console.log(this.name);
};

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

inheritPrototype(Child, Parent);
```

#### 优点

- 只调用一次父类构造函数
- 避免了在子类原型上创建不必要的属性
- 原型链保持不变
- 是引用类型最理想的继承范式

### 7. ES6 Class 继承

#### 实现方式

```JavaScript
class Parent {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // 调用父类构造函数
    this.age = age;
  }
}

const child = new Child('小明', 12);
```

#### 优点

- 语法简洁直观
- 内置的super关键字调用父类
- 本质上是寄生组合式继承的语法糖
- 支持静态方法和继承

#### 缺点

- 兼容性问题（需要Babel等转译工具支持旧浏览器）
- 不能继承常规对象（非构造函数创建的对象）

### 总结对比

| 继承方式       | 优点              | 缺点                 | 适用场景               |
| -------------- | ----------------- | -------------------- | ---------------------- |
| 原型链继承     | 简单              | 引用共享/无法传参    | 简单继承需求           |
| 构造函数继承   | 可传参/不共享引用 | 方法不能复用         | 需要隔离实例的场景     |
| 组合继承       | 综合优点          | 两次调用父类构造函数 | 通用场景               |
| 原型式继承     | 不需要构造函数    | 引用共享             | 基于已有对象创建新对象 |
| 寄生式继承     | 增强对象          | 方法不能复用         | 对象增强               |
| 寄生组合式继承 | 最优解/高效       | 实现稍复杂           | 高质量代码库           |
| ES6 Class继承  | 语法简洁/现代     | 兼容性问题           | 现代JavaScript开发     |

**最佳实践建议**：

1. 现代项目优先使用 ES6 的 `class` 和 `extends`
2. 需要兼容旧环境时使用寄生组合式继承
3. 简单对象扩展可使用 `Object.create()`
4. 避免使用纯原型链继承和纯构造函数继承



##  11. JavaScript 原型链详解

原型链（Prototype Chain）是 JavaScript 实现继承和属性查找的核心机制，它是 JavaScript 区别于基于类的语言的重要特征。

### 一、原型链的基本概念

1. **定义**：原型链是由对象的 `__proto__` 属性（现已被 `Object.getPrototypeOf()` 替代）连接起来的链式结构，用于实现属性和方法的继承与共享。
2. **核心规则**：
   - 每个对象都有一个隐藏的 `[[Prototype]]` 属性（可通过 `__proto__` 访问）
   - 当访问对象的属性时，如果对象自身没有该属性，就会沿着原型链向上查找
   - 原型链的尽头是 `null`（`Object.prototype.__proto__ === null`）

#### 二、原型链的构成

```JavaScript
function Person(name) {
  this.name = name;
}
Person.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const john = new Person('John');
```

上述代码的原型链结构：

```
 john → Person.prototype → Object.prototype → null
```

### 三、原型链的验证方法

1. **查看原型对象**：

```JavaScript
console.log(Object.getPrototypeOf(john) === Person.prototype); // true
```

1. **检查原型链关系**：

```JavaScript
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true
```

1. **查看属性来源**：

```JavaScript
console.log(john.hasOwnProperty('name')); // true (自身属性)
console.log(john.hasOwnProperty('sayHello')); // false (继承属性)
```

### 四、原型链的工作原理

当访问对象属性时，JavaScript 引擎会：

1. 检查对象自身是否有该属性（own property）
2. 如果没有，查找对象的 `[[Prototype]]`（即 `__proto__`）
3. 如果还没有，继续查找原型对象的原型，直到找到或到达 `null`

```
JavaScriptjohn.sayHello(); // 查找过程：john → Person.prototype
john.toString(); // 查找过程：john → Person.prototype → Object.prototype
```

### 五、原型链的创建方式

#### 1. 构造函数创建的对象

```JavaScript
function Animal() {}
const dog = new Animal();
// 原型链：dog → Animal.prototype → Object.prototype → null
```

#### 2. 对象字面量

```JavaScript
const obj = {};
// 原型链：obj → Object.prototype → null
```

#### 3. Object.create()

```JavaScript
const parent = { a: 1 };
const child = Object.create(parent);
// 原型链：child → parent → Object.prototype → null
```

#### 4. ES6 Class

```JavaScript
class Parent {}
class Child extends Parent {}
const c = new Child();
// 原型链：c → Child.prototype → Parent.prototype → Object.prototype → null
```

### 六、原型链的重要特性

1. **动态性**：修改原型会立即影响所有相关对象

```JavaScript
Person.prototype.newMethod = function() {
 console.log('New method!');
};
john.newMethod(); // 可以立即调用
```

2. **属性遮蔽**：如果对象自身有与原型链同名的属性，会优先使用自身属性

```JavaScript
john.sayHello = function() {
 console.log('Overridden!');
};
john.sayHello(); // "Overridden!"（自身方法遮蔽了原型方法）
```

1. **constructor 属性**：原型对象默认有一个指向构造函数的 `constructor` 属性

```JavaScript
console.log(Person.prototype.constructor === Person); // true
```

### 七、原型链的应用场景

1. **实现继承**：通过原型链共享方法和属性
2. **方法复用**：避免每个实例都创建相同的方法
3. **扩展内置对象**：通过修改原型来扩展内置对象功能（需谨慎）

```JavaScript
Array.prototype.myMethod = function() {
 // 自定义数组方法
};
```

### 八、注意事项

1. **性能问题**：过长的原型链会影响查找性能
2. **意外覆盖**：可能意外修改内置对象的行为
3. **循环引用**：错误的原型设置会导致循环引用（浏览器会抛出错误）
4. **现代替代方案**：ES6 的 `class` 和 `extends` 语法是原型继承的语法糖，更推荐使用

理解原型链是掌握 JavaScript 面向对象编程的关键，它解释了 JavaScript 中对象如何继承和共享属性和方法。



## 12. JavaScript 中复杂数据类型转为字符串的方法

在 JavaScript 中，将复杂数据类型（如对象、数组等）转换为字符串有多种方式，每种方式有不同的特点和适用场景。

### 一、JSON.stringify()（最常用）

#### 基本用法

```JavaScript
const obj = { name: "张三", age: 30, hobbies: ["阅读", "运动"] };
const str = JSON.stringify(obj);
console.log(str); 
// '{"name":"张三","age":30,"hobbies":["阅读","运动"]}'
```

#### 特点

1. 将对象/数组转换为 JSON 格式字符串
2. 会忽略函数和 symbol 属性
3. 遇到 `undefined`、函数或 `symbol` 时：
   - 作为对象属性值时会忽略
   - 作为数组元素时会转为 `null`
   - 单独转换时返回 `undefined`

#### 高级用法

```JavaScript
// 第二个参数：替换函数或属性数组
JSON.stringify(obj, ["name", "age"]); // 只包含指定属性

// 第三个参数：缩进空格数（美化输出）
JSON.stringify(obj, null, 2);

// 自定义 toJSON 方法
obj.toJSON = function() { return { name: this.name }; };
JSON.stringify(obj); // '{"name":"张三"}'
```

### 二、toString() 方法

#### 默认行为

```JavaScript
const arr = [1, 2, 3];
arr.toString(); // "1,2,3"

const obj = { a: 1 };
obj.toString(); // "[object Object]"
```

#### 特点

1. 数组：元素转为字符串并用逗号连接
2. 对象：默认返回 `"[object Object]"`
3. 可以自定义对象的 `toString` 方法

#### 自定义示例

```JavaScript
const person = {
  name: "李四",
  age: 25,
  toString() {
    return `${this.name} (${this.age})`;
  }
};
person.toString(); // "李四 (25)"
```

### 三、模板字符串（自动调用 toString）

```JavaScript
const date = new Date();
console.log(`当前时间: ${date}`); // 自动调用 toString()
```

### 四、String() 构造函数

```JavaScript
const arr = [1, 2, 3];
String(arr); // "1,2,3"

const obj = { x: 10 };
String(obj); // "[object Object]"
```

### 五、特殊对象转换

#### Date 对象

```JavaScript
const date = new Date();
date.toString();      // "Wed Jul 20 2022 14:30:00 GMT+0800"
date.toISOString();    // "2022-07-20T06:30:00.000Z"
date.toLocaleString(); // "2022/7/20 14:30:00"（根据环境）
```

#### 函数

```JavaScript
function foo() { return 1; }
foo.toString(); // "function foo() { return 1; }"
```

### 六、比较与选择

| 方法               | 适用场景                   | 是否保留结构 | 处理函数 | 循环引用 |
| ------------------ | -------------------------- | ------------ | -------- | -------- |
| `JSON.stringify()` | 需要完整数据结构序列化     | 是           | 忽略     | 报错     |
| `.toString()`      | 简单对象或自定义字符串表示 | 否           | 保留     | 可能     |
| `String()`         | 强制转换为基本字符串       | 否           | 保留     | 可能     |

### 七、处理循环引用

```JavaScript
const obj = { a: 1 };
obj.self = obj;

// 自定义替换函数处理循环引用
JSON.stringify(obj, (key, value) => {
  if (key === 'self') return '[Circular]';
  return value;
});
```

### 八、最佳实践建议

1. **数据传输/存储**：使用 `JSON.stringify()` 保持数据结构
2. **调试输出**：使用 `JSON.stringify(obj, null, 2)` 美化格式
3. **自定义显示**：重写对象的 `toString()` 方法
4. **避免陷阱**
   - 注意 `JSON.stringify()` 会忽略某些特殊值
   - 循环引用会导致报错
   - 大对象转换可能影响性能



## 13. JavaScript 判断变量类型的多种方法

在 JavaScript 中，有几种常用的方法可以判断变量的类型，每种方法都有其特点和适用场景：

### 一、typeof 操作符

> string、boolean、number、Object、Function、undefined、symbol(ES6)、

#### 基本用法

```JavaScript
typeof 42;           // "number"
typeof "hello";      // "string"
typeof true;         // "boolean"
typeof undefined;    // "undefined"
typeof null;         // "object" (历史遗留问题)
typeof function(){}; // "function"
typeof {};           // "object"
typeof [];           // "object"
typeof Symbol();      // "symbol"
typeof BigInt(10);    // "bigint"
```

#### 特点

- 返回类型名称的字符串
- 对原始类型有效，但对 `null` 返回 `"object"`（这是已知的 JavaScript 设计错误）
- 无法区分数组和普通对象（都返回 `"object"`）

### 二、instanceof 操作符

#### 基本用法

```JavaScript
[] instanceof Array;      // true
{} instanceof Object;     // true
new Date() instanceof Date; // true
"hello" instanceof String; // false (原始类型不是对象)
new String("hello") instanceof String; // true
```

#### 特点

- 检查构造函数的原型是否出现在对象的原型链上
- 适用于检查对象是否属于特定类或继承层次
- 对原始类型无效（除非使用包装对象）
- 在多窗口环境（如 iframe）中可能失效

### 三、Object.prototype.toString.call()

#### 基本用法

```JavaScript
Object.prototype.toString.call(42);        // "[object Number]"
Object.prototype.toString.call("hello");   // "[object String]"
Object.prototype.toString.call(true);     // "[object Boolean]"
Object.prototype.toString.call(null);     // "[object Null]"
Object.prototype.toString.call(undefined);// "[object Undefined]"
Object.prototype.toString.call([]);       // "[object Array]"
Object.prototype.toString.call({});       // "[object Object]"
Object.prototype.toString.call(function(){}); // "[object Function]"
Object.prototype.toString.call(Symbol()); // "[object Symbol]"
```

#### 特点

- 最精确的类型判断方法
- 可以区分 `null` 和 `undefined`
- 可以区分数组和普通对象
- 适用于所有 JavaScript 类型

#### 封装实用函数

```JavaScript
function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
getType([]); // "array"
getType(null); // "null"
```

### 四、Array.isArray()

**专门判断数组**

```JavaScript
Array.isArray([]);    // true
Array.isArray({});    // false
```

### 五、constructor 属性

#### 基本用法

```JavaScript
[].constructor === Array;  // true
"".constructor === String; // true
(42).constructor === Number; // true
```

#### 注意事项

- 可以被修改，不可靠

```JavaScript
function Foo() {}
const obj = new Foo();
obj.constructor = Array;
obj.constructor === Array; // true (但obj不是数组)
```

- 对 `null` 和 `undefined` 无效

### 六、其他特殊检查

#### 检查 NaN

```JavaScript
Number.isNaN(NaN);       // true
Number.isNaN("hello");   // false (与全局isNaN()不同)
```

#### 检查有限数字

```JavaScript
Number.isFinite(42);     // true
Number.isFinite(Infinity); // false
```

#### 检查整数

```JavaScript
Number.isInteger(42);    // true
Number.isInteger(42.5);  // false
```

### 七、类型判断方法比较

| 方法                        | 原始类型 | 对象类型 | null/undefined | 数组 | 自定义类 |
| --------------------------- | -------- | -------- | -------------- | ---- | -------- |
| `typeof`                    | ✓        | △        | ×              | ×    | ×        |
| `instanceof`                | ×        | ✓        | ×              | ✓    | ✓        |
| `Object.prototype.toString` | ✓        | ✓        | ✓              | ✓    | ✓        |
| `Array.isArray()`           | ×        | ×        | ×              | ✓    | ×        |
| `constructor`               | ✓        | ✓        | ×              | ✓    | ✓        |

(✓ 表示有效，△ 表示部分有效，× 表示无效或不准确)

### 八、最佳实践建议

1. **一般类型检查**：使用 `typeof` 判断原始类型
2. **精确类型检查**：使用 `Object.prototype.toString.call()`
3. **数组检查**：优先使用 `Array.isArray()`
4. **自定义类实例检查**：使用 `instanceof`
5. **特殊值检查**
   - `variable === null` 检查 null
   - `variable === undefined` 检查 undefined
   - `Number.isNaN()` 检查 NaN

选择哪种方法取决于具体需求，在需要高精度类型判断时，`Object.prototype.toString.call()` 是最可靠的选择。



## 14. JavaScript 类型转换：强制与隐式转换详解

### 一、强制类型转换（显式转换）

开发者明确调用方法或函数进行的类型转换：

#### 1. 转换为字符串

```JavaScript
String(123);        // "123"
(123).toString();   // "123" (数字→字符串)
Boolean(1).toString(); // "true"
```

#### 2. 转换为数字

```JavaScript
Number("123");      // 123
parseInt("123px");  // 123
parseFloat("12.34"); // 12.34
+"42";              // 42 (一元+运算符)
```

#### 3. 转换为布尔值

```JavaScript
Boolean(0);         // false
!!"hello";          // true (双非运算符)
Boolean([]);        // true
```

#### 4. 特殊转换

```JavaScript
BigInt(123);        // 123n (转为大整数)
String(Symbol('id')); // "Symbol(id)"
```

### 二、隐式类型转换（自动转换）

JavaScript 引擎自动执行的类型转换：

#### 1. 算术运算转换

```JavaScript
"5" - 3;     // 2 (字符串→数字)
"5" + 3;     // "53" (数字→字符串)
"10" / "2";  // 5 (字符串→数字)
```

#### 2. 逻辑运算转换

```JavaScript
if ("hello") { /* 执行 */ } // 字符串→true
0 || "default"; // "default" (0→false)
```

#### 3. 比较运算转换

```JavaScript
"5" == 5;    // true (字符串→数字)
null == undefined; // true (特殊规则)
"" == false; // true (双方转为数字比较)
```

#### 4. 对象转为原始值

```JavaScript
[1,2] + [3,4]; // "1,23,4" (数组→字符串)
{} + [];       // 0 (复杂规则)
```

#### 5. 模板字符串转换

```JavaScript
`Value: ${123}`; // "Value: 123" (数字→字符串)
```

### 三、转换规则对照表

| 原始值    | 转字符串          | 转数字 | 转布尔值 | 转对象              |
| --------- | ----------------- | ------ | -------- | ------------------- |
| undefined | "undefined"       | NaN    | false    | -                   |
| null      | "null"            | 0      | false    | -                   |
| true      | "true"            | 1      | -        | new Boolean(true)   |
| false     | "false"           | 0      | -        | new Boolean(false)  |
| 0         | "0"               | -      | false    | new Number(0)       |
| 1         | "1"               | -      | true     | new Number(1)       |
| ""        | -                 | 0      | false    | new String("")      |
| "123"     | -                 | 123    | true     | new String("123")   |
| "hello"   | -                 | NaN    | true     | new String("hello") |
| []        | ""                | 0      | true     | -                   |
|           | "1"               | 1      | true     | -                   |
| [1,2]     | "1,2"             | NaN    | true     | -                   |
| {}        | "[object Object]" | NaN    | true     | -                   |

### 四、特殊转换案例

#### 1. == 的隐式转换规则

```JavaScript
[] == ![]; // true
// 步骤：
// 1. ![] → false
// 2. [] == false
// 3. [] → "" (调用toString())
// 4. "" == false
// 5. "" → 0, false → 0
// 6. 0 == 0 → true
```

#### 2. + 运算符的转换优先级

```JavaScript
1 + 2 + "3";   // "33" (从左到右)
1 + "2" + 3;   // "123"
```

### 五、最佳实践

1. **使用严格相等**：总是用 `===` 代替 `==`
2. **显式转换**：明确使用 `Number()`、`String()` 等
3. **注意特殊值**：

```JavaScript
   Number(null);      // 0
   Number(undefined); // NaN
```

1. **转换验证**：

```JavaScript
isNaN(Number("123abc")); // true
```




## 15. JavaScript 闭包(Closure)深度解析

闭包是 JavaScript 中最强大且常被误解的特性之一，它影响着作用域、内存管理和函数式编程的实现。

### 一、闭包的本质

**闭包是指有权访问另一个函数作用域中变量的函数**，即使在其词法作用域之外执行。闭包由两部分组成：

1. 函数
2. 创建该函数时所在的环境（包含所有局部变量）

#### 基础示例

```JavaScript
function outer() {
  const secret = '闭包数据';
  
  return function inner() {
    console.log(secret); // 访问外部函数变量
  };
}

const myFunc = outer();
myFunc(); // 输出"闭包数据"
```

### 二、闭包的形成条件

1. **函数嵌套**：一个函数内定义另一个函数
2. **内部函数引用外部变量**：内部函数使用了外部函数的局部变量
3. **外部函数被调用**：外部函数执行后，内部函数仍保持对外部变量的引用

### 三、闭包的工作原理

当函数执行时：

1. 创建执行上下文（包含变量对象、作用域链等）
2. 即使外部函数执行完毕，只要内部函数仍在引用外部变量，这些变量就不会被垃圾回收
3. 形成了一条特殊的"作用域链"，使得内部函数可以持续访问这些变量

### 四、闭包的优点

#### 1. 数据封装与私有化

```JavaScript
function createCounter() {
  let count = 0; // 私有变量
  
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
console.log(count); // 报错：count未定义
```

#### 2. 保持状态

```JavaScript
function rememberMe() {
  const called = {};
  
  return function(fn) {
    const key = fn.name;
    if(!called[key]) {
      called[key] = true;
      return fn();
    }
    console.log('已经调用过');
  };
}

const checker = rememberMe();
checker(function test() {}); // 执行
checker(test); // "已经调用过"
```

#### 3. 函数工厂与柯里化

```JavaScript
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
console.log(double(5)); // 10
```

#### 4. 模块模式实现

```JavaScript
const module = (function() {
  let privateVar = '私有';
  
  function privateMethod() {
    console.log(privateVar);
  }
  
  return {
    publicMethod: function() {
      privateMethod();
    }
  };
})();
```

### 五、闭包的缺点

#### 1. 内存泄漏风险

```JavaScript
function leakMemory() {
  const hugeArray = new Array(1000000).fill('数据');
  
  return function() {
    console.log('闭包保持对hugeArray的引用');
  };
}

const leaking = leakMemory(); // hugeArray不会被回收
```

#### 2. 性能考虑

- 闭包比普通函数占用更多内存（需保存整个作用域链）
- 访问外部变量比访问局部变量稍慢

#### 3. 意外的变量捕获

```JavaScript
for(var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i); // 全部输出5
  }, 100);
}
// 解决方案：使用let或立即执行函数
```

### 六、高级闭包应用

#### 1. 记忆化(Memoization)

```JavaScript
function memoize(fn) {
  const cache = {};
  
  return function(...args) {
    const key = JSON.stringify(args);
    if(cache[key]) return cache[key];
    
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}
```

#### 2. 部分应用函数

```JavaScript
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
```

#### 3. 防抖与节流

```JavaScript
function debounce(fn, delay) {
  let timer;
  
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

### 七、最佳实践

1. **谨慎使用**：只在需要封装数据或保持状态时使用闭包
2. **及时释放**：不再需要的闭包及时解除引用（设为null）
3. **避免循环引用**：闭包引用DOM元素时，确保在卸载时清理
4. **模块化开发**：使用ES6模块替代大量闭包实现封装
5. **性能监控**：关注闭包可能引起的内存问题

### 八、现代JavaScript的替代方案

1. **ES6模块**：通过`export/import`实现封装
2. **类私有字段**：使用`#`前缀定义私有属性

```JavaScript
   class Counter {
     #count = 0;
     
     increment() { this.#count++; }
   }
```

3. **WeakMap实现私有**：

```JavaScript
   const privateData = new WeakMap();
   
   class Person {
     constructor(name) {
       privateData.set(this, { name });
     }
     getName() {
       return privateData.get(this).name;
     }
   }
```

闭包是JavaScript函数式编程的核心概念，合理使用可以写出更优雅、更模块化的代码，但需要对其内存影响保持清醒认识。



## 16. JavaScript 中判断 NaN 的几种方法

在 JavaScript 中，判断一个值是否为 `NaN`（Not-a-Number）需要特别注意，因为 `NaN` 具有一些特殊性质：

### 一、NaN 的特殊性质

1. `NaN` 是 JavaScript 中唯一不等于自身的值：

```JavaScript
NaN === NaN; // false
NaN == NaN;  // false
```

2. `typeof NaN` 返回 `"number"`：

```JavaScript
typeof NaN; // "number"
```

### 二、判断 NaN 的正确方法

#### 1. 使用 `Number.isNaN()`（ES6 推荐）

```JavaScript
Number.isNaN(NaN);        // true
Number.isNaN(0/0);       // true
Number.isNaN('abc'/10);  // true

Number.isNaN(123);       // false
Number.isNaN('123');     // false
Number.isNaN(true);      // false
Number.isNaN(null);      // false
Number.isNaN(undefined); // false
```

**特点**：

- 只对真正的 `NaN` 返回 `true`
- 不会对非数字值进行类型转换

#### 2. 使用全局 `isNaN()`（不推荐）

```JavaScript
isNaN(NaN);       // true
isNaN(undefined); // true
isNaN('abc');     // true
isNaN({});        // true

isNaN(123);       // false
isNaN('123');     // false (字符串可转为数字)
isNaN(true);      // false (true转为1)
```

**特点**：

- 会先尝试将参数转换为数字，再判断是否为 `NaN`
- 容易产生误判（如 `isNaN('abc')` 返回 `true`）

#### 3. 利用 `NaN` 不等于自身的特性

```JavaScript
function isNaNValue(value) {
  return value !== value;
}

isNaNValue(NaN); // true
isNaNValue(123); // false
```

#### 4. 使用 `Object.is()`（ES6）

```JavaScript
Object.is(NaN, NaN); // true
Object.is(0/0, NaN);  // true

Object.is('abc', NaN); // false
```

### 三、不同方法的比较

| 方法                | NaN  | "abc" | undefined | 123  | "123" | true | null |
| ------------------- | ---- | ----- | --------- | ---- | ----- | ---- | ---- |
| `Number.isNaN()`    | ✓    | ✗     | ✗         | ✗    | ✗     | ✗    | ✗    |
| 全局 `isNaN()`      | ✓    | ✓     | ✓         | ✗    | ✗     | ✗    | ✗    |
| `value !== value`   | ✓    | ✗     | ✗         | ✗    | ✗     | ✗    | ✗    |
| `Object.is(x, NaN)` | ✓    | ✗     | ✗         | ✗    | ✗     | ✗    | ✗    |

(✓ 表示返回 true，✗ 表示返回 false)

### 四、实际应用场景

#### 1. 数学计算后的验证

```JavaScript
function safeDivide(a, b) {
  const result = a / b;
  if (Number.isNaN(result)) {
    throw new Error('无效的计算结果');
  }
  return result;
}
```

#### 2. 数据清洗

```
JavaScriptfunction cleanData(arr) {
  return arr.filter(item => !Number.isNaN(Number(item)));
}

cleanData(['123', 'abc', '45.6', NaN]); // ['123', '45.6']
```

#### 3. 表单验证

```JavaScript
function validateInput(input) {
  const num = parseFloat(input);
  if (Number.isNaN(num)) {
    return '请输入有效的数字';
  }
  return num;
}
```

### 五、最佳实践建议

1. **始终使用 `Number.isNaN()`** 替代全局 `isNaN()`
2. 在 TypeScript 中，可以使用类型守卫：

```TypeScript
function isNaN(value: unknown): value is typeof NaN {
 return Number.isNaN(value);
}
```

3. 对于旧浏览器环境，添加 polyfill：

```JavaScript
if (!Number.isNaN) {
 Number.isNaN = function(value) {
   return typeof value === 'number' && isNaN(value);
 };
}
```

记住，正确判断 `NaN` 对于处理数学运算、数据验证和错误处理非常重要，选择合适的方法可以避免许多潜在的错误。




## 17. new 一个对象的过程中发生了什么

当使用 `new` 操作符创建对象时，JavaScript 引擎会执行一系列特定的步骤。以下是 `new` 一个对象的完整过程：

### 一、基本执行步骤

1. **创建一个新的空对象**

```JavaScript
const obj = {};
```

2. **将新对象的原型指向构造函数的 `prototype` 属性**

```JavaScript
obj.__proto__ = Constructor.prototype;
```

3. **将构造函数内部的 `this` 绑定到这个新对象**

```JavaScript
Constructor.call(obj);
```

4. **执行构造函数内部的代码**（初始化对象属性）

5. **如果构造函数没有显式返回对象，则返回这个新对象**

### 二、详细过程解析

假设有以下构造函数：

```JavaScript
function Person(name, age) {
  this.name = name;
  this.age = age;
  
  this.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
  };
}
```

当执行 `const p = new Person('张三', 25)` 时：

#### 1. 内存中创建新对象

```JavaScript
const obj = {};
```

#### 2. 设置原型链

```JavaScript
obj.__proto__ = Person.prototype;
// 现代写法：Object.setPrototypeOf(obj, Person.prototype)
```

#### 3. 绑定 this 并执行构造函数

```JavaScript
Person.call(obj, '张三', 25);
// 相当于：
// obj.name = '张三';
// obj.age = 25;
// obj.sayHello = function() {...}
```

#### 4. 处理返回值

- 如果构造函数没有 `return` 或返回原始值，则返回新对象
- 如果构造函数返回对象，则返回该对象而非新创建的对象

### 三、特殊情况处理

#### 1. 构造函数返回原始值

```JavaScript
function Car() {
  this.name = 'BMW';
  return 123; // 会被忽略
}
const car = new Car(); // 仍然是Car对象
```

#### 2. 构造函数返回对象

```JavaScript
function Bike() {
  this.name = 'Honda';
  return { type: 'Motorcycle' }; // 会替换新对象
}
const bike = new Bike(); // { type: 'Motorcycle' }
```

### 四、手动实现 new 操作符

理解 `new` 的工作原理后，我们可以手动实现一个类似的函数：

```JavaScript
function myNew(Constructor, ...args) {
  // 1. 创建新对象并设置原型
  const obj = Object.create(Constructor.prototype);
  
  // 2. 执行构造函数并绑定this
  const result = Constructor.apply(obj, args);
  
  // 3. 处理返回值
  return result instanceof Object ? result : obj;
}

// 使用示例
const p = myNew(Person, '李四', 30);
```

### 五、ES6 Class 的情况

`class` 语法本质上是构造函数的语法糖，`new` 的行为相同：

```JavaScript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// 底层仍然执行new操作的标准步骤
const cat = new Animal('Tom');
```

### 六、重要注意事项

1. **箭头函数不能用作构造函数**，因为它们没有 `this` 绑定和 `prototype` 属性

```JavaScript
const Foo = () => {};
new Foo(); // 报错：Foo is not a constructor
```

1. **构造函数通常首字母大写**（约定而非强制）
2. **忘记使用 `new` 的后果**：

```JavaScript
const p = Person('张三', 25); // this指向全局对象（严格模式下报错）
console.log(window.name); // '张三'
```

3. **安全模式构造函数**（防止忘记 `new`）：

```JavaScript
function Person(name) {
 if (!(this instanceof Person)) {
   return new Person(name);
 }
 this.name = name;
}
```

### 七、性能考虑

1. 频繁使用 `new` 创建对象会影响性能，考虑对象池技术
2. 方法最好定义在原型上而非构造函数内，避免重复创建：

```JavaScript
function Person(name) {
 this.name = name;
}

// 优于在构造函数内定义
Person.prototype.sayHello = function() {
 console.log(`Hello, ${this.name}`);
};
```

理解 `new` 的执行过程对于掌握 JavaScript 面向对象编程至关重要，也是实现高级设计模式的基础。



## 18. JavaScript 中 `for...in` 和 `for...of` 的深度解析

### 一、核心区别概述

| 特性         | `for...in`                     | `for...of`                         |
| ------------ | ------------------------------ | ---------------------------------- |
| **迭代内容** | 对象的可枚举属性（包括原型链） | 可迭代对象的值                     |
| **适用对象** | 普通对象                       | 数组、字符串、Map、Set等可迭代对象 |
| **键/值**    | 获取键名(key)                  | 获取值(value)                      |
| **原型属性** | 会遍历原型链上的可枚举属性     | 只遍历对象自身的可迭代元素         |
| **顺序保证** | ES6+ 对普通对象有顺序保证      | 严格按迭代器顺序                   |

### 二、`for...in` 详解

#### 基本语法

```JavaScript
for (const key in object) {
  console.log(key); // 属性名
  console.log(object[key]); // 属性值
}
```

#### 特点

1. 遍历对象及其原型链上的**可枚举属性**
2. 不保证顺序（虽然ES6规范了普通对象的属性顺序，但不建议依赖）
3. 会跳过Symbol属性
4. 通常需要配合`hasOwnProperty`检查

#### 示例

```JavaScript
const obj = { a: 1, b: 2 };

// 添加原型属性
Object.prototype.c = 3;

for (const key in obj) {
  console.log(key); // 输出 'a', 'b', 'c'
}

// 只遍历自身属性
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key); // 输出 'a', 'b'
  }
}
```

### 三、`for...of` 详解

#### 基本语法

```JavaScript
for (const value of iterable) {
  console.log(value);
}
```

#### 特点

1. 遍历**可迭代对象**的值（实现了`[Symbol.iterator]`方法的对象）
2. 不会遍历原型链上的属性
3. 保证按照迭代器的返回值顺序
4. 可以遍历Map、Set等ES6新增数据结构

#### 示例

```JavaScript
const arr = ['a', 'b', 'c'];

for (const value of arr) {
  console.log(value); // 输出 'a', 'b', 'c'
}

// 字符串迭代
for (const char of 'hello') {
  console.log(char); // 输出 'h', 'e', 'l', 'l', 'o'
}

// Map迭代
const map = new Map([['a', 1], ['b', 2]]);
for (const [key, value] of map) {
  console.log(key, value); // 输出 'a' 1, 'b' 2
}
```

### 四、适用场景对比

#### 使用 `for...in` 的情况

1. 遍历普通对象的属性
2. 需要检查原型链属性时
3. 调试对象结构时

#### 使用 `for...of` 的情况

1. 遍历数组元素
2. 处理字符串字符
3. 操作Map、Set等集合
4. 需要直接获取值而非键时

### 五、特殊注意事项

#### 1. 数组遍历的陷阱

```JavaScript
const arr = ['a', 'b', 'c'];
arr.customProp = 'd';

// for...in 会包含自定义属性
for (const key in arr) {
  console.log(key); // 输出 '0', '1', '2', 'customProp'
}

// for...of 只迭代数组元素
for (const value of arr) {
  console.log(value); // 输出 'a', 'b', 'c'
}
```

#### 2. 对象转换为可迭代对象

普通对象默认不可迭代，但可以手动实现：

```JavaScript
const obj = { a: 1, b: 2 };

// 添加迭代器
obj[Symbol.iterator] = function*() {
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      yield [key, this[key]];
    }
  }
};

// 现在可以用for...of
for (const [key, value] of obj) {
  console.log(key, value); // 输出 'a' 1, 'b' 2
}
```

#### 3. 性能考虑

- `for...of` 通常比 `for...in` 性能更好
- 对于纯数组遍历，传统的 `for` 循环最快

### 六、常见可迭代对象

1. **内置可迭代对象**：
   - Array
   - String
   - Map
   - Set
   - TypedArray
   - arguments 对象
   - NodeList (DOM集合)
2. **生成器函数**：

```JavaScript
   function* gen() {
     yield 1;
     yield 2;
   }
   for (const num of gen()) {
     console.log(num); // 1, 2
   }
```

### 七、最佳实践建议

1. **数组遍历**：优先使用 `for...of` 或 `forEach()`
2. **对象属性遍历**：使用 `for...in` + `hasOwnProperty` 检查
3. **需要索引时**：考虑传统 `for` 循环或 `Array.prototype.forEach`
4. **避免修改遍历中的对象**：可能导致不可预测的行为
5. **Map/Set操作**：总是使用 `for...of` 获取键值对



## 19. JavaScript 属性遍历方法对比

### 核心区别总结

| 方法                           | 遍历范围                         | 包含不可枚举属性 | 包含 Symbol 属性 | 包含原型链属性 | 输出类型  |
| ------------------------------ | -------------------------------- | ---------------- | ---------------- | -------------- | --------- |
| `for...in`                     | 对象自身及原型链的可枚举属性     | ❌                | ❌                | ✅              | 键名(key) |
| `Object.keys()`                | 对象自身的可枚举属性             | ❌                | ❌                | ❌              | 键名数组  |
| `Object.getOwnPropertyNames()` | 对象自身的所有属性（不含Symbol） | ✅                | ❌                | ❌              | 键名数组  |

### 详细说明

#### 1. `for...in`

- **特点**：会遍历对象自身和原型链上的可枚举属性
- **注意点**
  - 需要配合 `hasOwnProperty` 过滤原型属性
  - 不保证遍历顺序（虽然现代浏览器有实现顺序）
  - 跳过 Symbol 属性
- **示例**：

```JavaScript
const obj = { a: 1 };
Object.defineProperty(obj, 'b', { value: 2, enumerable: false });

for (const key in obj) {
 console.log(key); // 只输出 'a'
}
```

#### 2. `Object.keys()`

- **特点**：只返回对象自身的可枚举属性名数组
- **注意点**
  - 不包含原型链属性
  - 不包含不可枚举属性
  - 不包含 Symbol 属性
- **示例**：

```JavaScript
const obj = { a: 1 };
Object.defineProperty(obj, 'b', { value: 2, enumerable: false });

console.log(Object.keys(obj)); // ['a']
```

#### 3. `Object.getOwnPropertyNames()`

- **特点**：返回对象自身的所有属性名数组（包括不可枚举）
- **注意点**
  - 不包含原型链属性
  - 包含不可枚举属性
  - 不包含 Symbol 属性
- **示例**：

```JavaScript
const obj = { a: 1 };
Object.defineProperty(obj, 'b', { value: 2, enumerable: false });

console.log(Object.getOwnPropertyNames(obj)); // ['a', 'b']
```

## 补充说明

如果需要获取 Symbol 属性，需使用：

```JavaScript
const obj = { [Symbol('foo')]: 'bar' };
console.log(Object.getOwnPropertySymbols(obj)); // [Symbol(foo)]
```

要获取所有类型的自身属性（包括 Symbol）：

```JavaScript
const allProps = [
  ...Object.getOwnPropertyNames(obj),
  ...Object.getOwnPropertySymbols(obj)
];
```





## 20. iframe 通信机制详解：跨域与非跨域场景

### 一、非跨域通信（同源 iframe）

当父窗口和 iframe 加载的页面**同源**（协议、域名、端口相同）时，可以直接访问彼此的属性和方法。

#### 1. 父窗口访问 iframe 内容

```JavaScript
// 获取 iframe 的 window 对象
const iframeWindow = document.getElementById('myIframe').contentWindow;

// 获取 iframe 的 document 对象
const iframeDoc = iframeWindow.document;

// 调用 iframe 中的函数
iframeWindow.childFunction();

// 访问 iframe 中的变量
console.log(iframeWindow.someVariable);
```

### 2. iframe 访问父窗口内容

```JavaScript
// 获取父窗口对象
const parentWindow = window.parent;

// 访问父窗口的属性和方法
parentWindow.parentFunction();
console.log(parentWindow.someVariable);

// 获取顶级窗口（多层 iframe 时）
const topWindow = window.top;
```

### 二、跨域通信（不同源 iframe）

当父窗口和 iframe **不同源**时，浏览器会阻止直接访问，需要使用以下方法进行安全通信：

#### 1. postMessage API（推荐）

**父窗口发送消息**：

```JavaScript
const iframe = document.getElementById('myIframe');
iframe.contentWindow.postMessage('Hello from parent', 'https://child-domain.com');
```

**iframe 接收消息**：

```JavaScript
window.addEventListener('message', (event) => {
  // 验证来源
  if (event.origin !== 'https://parent-domain.com') return;
  
  console.log('Received:', event.data);
  // 回复消息
  event.source.postMessage('Hello back!', event.origin);
});
```

#### 2. 跨域设置（有限场景）

如果两个域**有共同上级域**，可以设置 `document.domain`（现代浏览器已限制此方法）：

```JavaScript
// 父页面和 iframe 页面都设置
document.domain = 'example.com'; // 从 a.example.com 和 b.example.com 设置为相同域
```

#### 3. 片段标识符（hash）通信

**父窗口修改 iframe 的 hash**：

```JavaScript
const iframe = document.getElementById('myIframe');
iframe.src = iframe.src.replace(/#.*$/, '') + '#' + message;
```

**iframe 监听 hash 变化**：

```JavaScript
window.addEventListener('hashchange', () => {
  const message = location.hash.substring(1);
  console.log('Received:', message);
});
```

#### 4. 跨域资源共享（CORS）

适用于 AJAX 请求：

```JavaScript
// 服务器端需要设置响应头
Access-Control-Allow-Origin: https://parent-domain.com
```

## 三、安全注意事项

1. **postMessage 必须验证 origin**

```
JavaScript   window.addEventListener('message', (event) => {
     if (event.origin !== 'https://trusted-domain.com') return;
     // 处理消息
   });
```

1. **避免使用已弃用的方法**
   - 避免使用 `document.domain`（现代浏览器已限制）
   - 避免使用 `window.name` 进行通信（不安全）
2. **敏感操作需要二次验证**
   - 即使通过 postMessage 通信，关键操作仍需后端验证

## 四、通信方案对比

| 方法            | 适用场景       | 安全性 | 实时性 | 数据量限制 |
| --------------- | -------------- | ------ | ------ | ---------- |
| postMessage     | 任意跨域通信   | 高     | 高     | 较大       |
| document.domain | 同主域不同子域 | 低     | 中     | 无         |
| window.hash     | 简单数据通信   | 中     | 中     | 较小       |
| CORS            | AJAX 跨域请求  | 高     | 高     | 较大       |

## 五、最佳实践建议

1. **优先使用 postMessage**：最安全可靠的跨域通信方案
2. **双向验证来源**：发送和接收方都要验证消息来源
3. **定义通信协议**：规范消息格式和类型，例如：

```
JavaScript   // 消息格式示例
   const message = {
     type: 'UPDATE_DATA',
     payload: { ... },
     timestamp: Date.now()
   };
```

1. **考虑使用库简化**：如 `iframe-resizer`、`postmate` 等库封装复杂逻辑

## 六、完整示例

### 父窗口代码

```
HTML<iframe id="myIframe" src="https://child-domain.com"></iframe>
<script>
  const iframe = document.getElementById('myIframe');
  
  // 发送消息
  iframe.onload = () => {
    iframe.contentWindow.postMessage(
      { type: 'GREETING', text: 'Hello iframe!' },
      'https://child-domain.com'
    );
  };

  // 接收消息
  window.addEventListener('message', (event) => {
    if (event.origin !== 'https://child-domain.com') return;
    if (event.data.type === 'RESPONSE') {
      console.log('Received:', event.data.text);
    }
  });
</script>
```

### iframe 代码

```
JavaScript// 接收消息
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://parent-domain.com') return;
  
  if (event.data.type === 'GREETING') {
    console.log('Received:', event.data.text);
    // 回复消息
    event.source.postMessage(
      { type: 'RESPONSE', text: 'Message received!' },
      event.origin
    );
  }
});
```

通过合理选择通信方式并实施安全措施，可以安全高效地实现 iframe 间的数据交换。



## 21. `<script>` 标签的 defer 和 async 属性解析

### 核心区别

| 特性         | 无属性 (默认)              | `async`                        | `defer`                                |
| ------------ | -------------------------- | ------------------------------ | -------------------------------------- |
| **加载时机** | 立即加载，阻塞HTML解析     | 异步加载，不阻塞解析           | 异步加载，不阻塞解析                   |
| **执行时机** | 加载完后立即执行，阻塞渲染 | 加载完后立即执行，可能阻塞渲染 | HTML解析完成后，DOMContentLoaded前执行 |
| **执行顺序** | 按文档顺序                 | 加载完成的顺序                 | 按文档顺序                             |
| **适用场景** | 无特殊需求                 | 独立第三方脚本                 | 依赖DOM的脚本                          |

### 详细说明

#### 1. 普通 `<script>` (无属性)

```HTML
<script src="script.js"></script>
```

- **行为**：立即暂停HTML解析 → 下载脚本 → 执行脚本 → 继续HTML解析
- **影响**：会明显阻塞页面渲染

#### 2. `async` (异步执行)

```HTML
<script async src="script.js"></script>
```

- **特点**
  - 异步下载（不阻塞HTML解析）
  - **下载完成后立即执行**（可能中断HTML解析）
  - 多个async脚本**执行顺序不确定**（先下载完的先执行）
- **适用**：Google Analytics等独立第三方脚本

#### 3. `defer` (延迟执行)

```HTML
<script defer src="script.js"></script>
```

- **特点**
  - 异步下载（不阻塞HTML解析）
  - **等到HTML完全解析后**，按文档顺序执行
  - 在`DOMContentLoaded`事件前执行
- **适用**：需要操作DOM或依赖其他脚本的代码

### 执行时序图示

```
 HTML解析开始
├── 普通script: 下载 → 执行 (阻塞)
├── async script: 下载 → (HTML继续解析) → 下载完成立即执行
└── defer script: 下载 → (HTML解析完成) → 按顺序执行
```

### 最佳实践建议

1. **关键脚本**：使用`defer`保持执行顺序（如依赖DOM的脚本）
2. **独立脚本**：使用`async`加速加载（如统计代码）
3. **内联脚本**：放在`</body>`前，或使用`defer`
4. **模块化**：现代开发建议使用ES模块(`<script type="module">`，默认defer行为)

[参考链接](https://blog.csdn.net/weixin_42561383/article/details/86564715)




## 22. Object.prototype.toString.call() 和 instanceOf 和 Array.isArray() 对比

- **Object.prototype.toString.call()**
  
  - 优点：这种方法对于所有基本的数据类型都能进行判断，即使是 null 和 undefined 。
  * 缺点：不能精准判断自定义对象，对于自定义对象只会返回[object Object]
- **instanceOf**
  
  - 优点：instanceof 可以弥补 Object.prototype.toString.call()不能判断自定义实例化对象的缺点。
  - 缺点： instanceof 只能用来判断对象类型，原始类型不可以。并且所有对象类型 instanceof Object 都是 true，且不同于其他两种方法的是它不能检测出 iframes。
- **Array.isArray()**
  
  - 优点：当检测 Array 实例时，Array.isArray 优于 instanceof ，因为 Array.isArray 可以检测出 iframes
  - 缺点：只能判别数组



### Object.prototype.toString.call()

每一个继承 Object 的对象都有 toString 方法，如果 toString 方法没有重写的话，会返回 [Object type]，其中 type 为对象的类型。但当除了 Object 类型的对象外，其他类型直接使用 toString 方法时，会直接返回都是内容的字符串，所以我们需要使用 call 或者 apply 方法来改变 toString 方法的执行上下文。

```js
const an = ["Hello", "An"];
an.toString(); // "Hello,An"
Object.prototype.toString.call(an); // "[object Array]"
```

这种方法对于所有基本的数据类型都能进行判断，即使是 null 和 undefined 。

```js
Object.prototype.toString.call("An"); // "[object String]"
Object.prototype.toString.call(1); // "[object Number]"
Object.prototype.toString.call(Symbol(1)); // "[object Symbol]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(function() {}); // "[object Function]"
Object.prototype.toString.call({ name: "An" }); // "[object Object]"
```

缺点：不能精准判断自定义对象，对于自定义对象只会返回[object Object]

```js
function f(name) {
  this.name = name;
}
var f1 = new f("martin");
console.log(Object.prototype.toString.call(f1)); //[object Object]

Object.prototype.toString.call(); // 常用于判断浏览器内置对象。
```

### instanceof

instanceof 的内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。

使用 instanceof 判断一个对象是否为数组，instanceof 会判断这个对象的原型链上是否会找到对应的 Array 的原型，找到返回 true，否则返回 false。

```js
[] instanceof Array; // true
```

但 instanceof 只能用来判断对象类型，原始类型不可以。并且所有对象类型 instanceof Object 都是 true。

```js
[] instanceof Object; // true
```

优点：instanceof 可以弥补 Object.prototype.toString.call()不能判断自定义实例化对象的缺点。

缺点：instanceof 只能用来判断对象类型，原始类型不可以。并且所有对象类型 instanceof Object 都是 true，且不同于其他两种方法的是它不能检测出 iframes。

```js
function f(name) {
  this.name = name;
}
var f1 = new f("martin");
console.log(f1 instanceof f); //true
```

### Array.isArray()

- 功能：用来判断对象是否为数组

- instanceof 与 isArray

当检测 Array 实例时，Array.isArray 优于 instanceof ，因为 Array.isArray 可以检测出 iframes

```js
var iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
var arr = new xArray(1, 2, 3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr); // true
Object.prototype.toString.call(arr); // true
// Considered harmful, because doesn't work though iframes
arr instanceof Array; // false
```

缺点：只能判别数组

- Array.isArray() 与 Object.prototype.toString.call()

Array.isArray()是 ES5 新增的方法，当不存在 Array.isArray() ，可以用 Object.prototype.toString.call() 实现。

```js
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
```

[参考](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/23)




## 23. 什么是面向对象？

###  面向对象概念

面向对象是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。

**面向对象和面向过程的异同**

- 面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用就可以了。
- 面向对象是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。

###  从 JavaScript 视角理解面向对象编程（OOP）

面向对象编程（OOP）是一种以**对象**为核心的编程范式，JavaScript 作为一门多范式语言，其面向对象实现具有独特特点：

#### 一、JavaScript 面向对象的三大核心特征

##### 1. 封装（Encapsulation）

**将数据和行为捆绑在一起**，隐藏内部实现细节

```JavaScript
class Person {
  #age; // 私有字段（ES2022）
  
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  
  greet() { // 公开方法
    console.log(`我叫${this.name}，今年${this.getAge()}岁`);
  }
  
  getAge() { // 受控访问私有数据
    return this.#age - 5; // 永远年轻5岁
  }
}

const p = new Person('张三', 30);
p.greet(); // "我叫张三，今年25岁"
console.log(p.#age); // 报错：私有字段不可外部访问
```

##### 2. 继承（Inheritance）

**子类继承父类特性**，JavaScript 使用原型链实现

```JavaScript
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(`${this.name} makes a noise`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
  
  speak() { // 方法重写
    console.log(`${this.name} barks!`);
  }
  
  fetch() { // 子类扩展方法
    console.log(`${this.name} fetches the ball`);
  }
}

const d = new Dog('Buddy', 'Golden');
d.speak(); // "Buddy barks!"
```

##### 3. 多态（Polymorphism）

**同一接口不同实现**，通过方法重写实现

```JavaScript
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  area() { // 重写父类方法
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  
  area() { // 重写父类方法
    return this.side ** 2;
  }
}

const shapes = [new Circle(5), new Square(4)];
shapes.forEach(s => console.log(s.area())); 
// 78.53981633974483
// 16
```

#### 二、JavaScript 特有的 OOP 实现方式

##### 1. 基于原型的继承

```JavaScript
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.start = function() {
  console.log(`${this.type} starting...`);
};

function Car(type) {
  Vehicle.call(this, type);
}

// 设置原型链
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const myCar = new Car('Tesla');
myCar.start(); // "Tesla starting..."
```

##### 2. 混入模式（Mixin）

```JavaScript
const canSwim = {
  swim() {
    console.log(`${this.name} is swimming`);
  }
};

const canFly = {
  fly() {
    console.log(`${this.name} is flying`);
  }
};

class Duck {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(Duck.prototype, canSwim, canFly);

const donald = new Duck('Donald');
donald.swim(); // "Donald is swimming"
donald.fly();  // "Donald is flying"
```

##### 3. 组合优于继承

```JavaScript
class Logger {
  log(message) {
    console.log(`[LOG] ${message}`);
  }
}

class Database {
  constructor(logger) {
    this.logger = logger;
  }
  
  save(data) {
    this.logger.log(`Saving: ${data}`);
    // 实际保存逻辑
  }
}

const logger = new Logger();
const db = new Database(logger);
db.save('user data'); // "[LOG] Saving: user data"
```

#### 三、现代 JavaScript 的 OOP 改进

##### 1. ES6 Class 语法糖

```JavaScript
class Animal {
  static planet = "Earth"; // 静态属性
  
  constructor(name) {
    this.name = name;
  }
  
  // 实例方法
  speak() {
    console.log(`${this.name} makes a noise`);
  }
  
  // 静态方法
  static info() {
    console.log(`Animals live on ${this.planet}`);
  }
}
```

##### 2. 私有字段和方法（ES2022）

```JavaScript
class Counter {
  #count = 0; // 私有字段
  
  increment() {
    this.#count++;
  }
  
  get value() {
    return this.#count;
  }
}

const c = new Counter();
c.increment();
console.log(c.value); // 1
console.log(c.#count); // 报错
```

#### 四、JavaScript OOP 最佳实践

1. **优先使用 class 语法**：比原型语法更清晰
2. **组合优于继承**：使用混入或依赖注入
3. **封装敏感数据**：使用私有字段
4. **合理使用多态**：保持接口一致性
5. **避免深度继承链**：建议不超过3层

JavaScript 的面向对象实现融合了基于原型的灵活性和类语法的可读性，理解其独特机制能帮助开发者写出更优雅的代码。




## 24. 你对松散类型的理解

JavaScript 中的变量为松散类型，所谓松散类型就是指当一个变量被申明出来就可以保存任意类型的值，就是不像 SQL 一样申明某个键值为 int 就只能保存整型数值，申明 varchar 只能保存字符串。一个变量所保存值的类型也可以改变，这在 JavaScript 中是完全有效的，只是不推荐。相比较于将变量理解为“盒子“，《JavaScript 编程精解》中提到应该将变量理解为“触手”，它不保存值，而是抓取值。这一点在当变量保存引用类型值时更加明显。

JavaScript 中变量可能包含两种不同的数据类型的值：基本类型和引用类型。基本类型是指简单的数据段，而引用类型指那些可能包含多个值的对象。

### 本质特征

JavaScript 采用动态弱类型系统，其核心特点是变量没有固定类型约束，同一变量可以在程序运行过程中自由切换存储不同类型的数据值。这种设计允许开发者在声明变量时无需指定类型，且变量的类型可以随赋值内容动态改变。

### 关键表现

1. **隐式类型转换机制** - 当操作涉及不同类型数据时，语言引擎会自动执行类型转换（如字符串与数字相加时自动转字符串）
2. **宽松的比较运算** - "==" 运算符会先进行类型转换再比较值，而 "===" 严格比较类型和值
3. **动态上下文适应** - 函数参数和返回值没有类型限制，同一函数可能根据输入类型返回不同结果类型

### 两面性

**优势**：

- 提升开发灵活性，减少类型声明代码
- 加速原型开发过程，适合快速迭代
- 降低初学者入门门槛

**缺陷**：

- 增加运行时出错风险（类型错误往往到执行时才暴露）
- 降低代码可预测性
- 加大大型项目维护难度
- 可能产生难以追踪的隐式转换bug

### 最佳实践

虽然语言本身松散，但现代开发中建议：

1. 使用TypeScript或JSDoc添加类型约束
2. 优先采用严格相等运算符（===）
3. 重要函数添加参数类型校验
4. 通过ES6的const/let声明提升可读性

这种类型系统体现了JavaScript的设计哲学：在开发便捷性与工程严谨性之间寻求平衡，开发者需要理解其内在机制才能扬长避短。



## 25. JavaScript 严格模式 vs 正常模式

JavaScript 的严格模式（Strict Mode）是 ES5 引入的一种限制性更强的 JavaScript 变体，它与传统的"正常模式"（也称为"松散模式"）有几个重要区别：

### 主要区别

#### 1. 变量声明

- **正常模式**：可以隐式创建全局变量（未声明直接赋值）

```JavaScript
x = 10; // 自动创建全局变量
```

- **严格模式**：必须显式声明变量

```JavaScript
'use strict';
x = 10; // ReferenceError: x is not defined
```

#### 2. 删除操作

- **正常模式**：可以删除变量、函数等（但静默失败）

```JavaScript
var x = 1;
delete x; // 静默失败
```

- **严格模式**：删除变量、函数等会报错

```JavaScript
  'use strict';
  var x = 1;
  delete x; // SyntaxError
```

#### 3. 重复属性名

- **正常模式**：对象字面量允许重复属性名

```JavaScript
var obj = {x: 1, x: 2}; // 第二个x覆盖第一个
```

- **严格模式**：不允许重复属性名

```JavaScript
'use strict';
var obj = {x: 1, x: 2}; // SyntaxError
```

#### 4. 函数参数

- **正常模式**：允许重复参数名

```JavaScript
function sum(a, a, c) { /* 可能出错 */ }
```

- **严格模式**：不允许重复参数名

```JavaScript
'use strict';
function sum(a, a, c) { // SyntaxError
// ...
}
```

#### 5. this 绑定

- **正常模式**：全局函数的 `this` 指向全局对象

```JavaScript
function f() {
  console.log(this); // window (浏览器中)
}
```

- **严格模式**：全局函数的 `this` 为 `undefined`

```JavaScript
'use strict';
function f() {
  console.log(this); // undefined
}
```

#### 6. eval 行为

- **正常模式**：`eval` 可以影响外部作用域

```JavaScript
eval('var x = 10;');
console.log(x); // 10
```

- **严格模式**：`eval` 有自己的作用域

```JavaScript
'use strict';
eval('var x = 10;');
console.log(x); // ReferenceError
```

### 如何启用严格模式

1. 全局严格模式：在脚本文件或 `<script>` 标签开头添加

```JavaScript
'use strict';
// 整个脚本都处于严格模式
```

1. 函数级严格模式：在函数体开头添加

```JavaScript
function strictFunc() {
'use strict';
// 这个函数处于严格模式
}
```

### 为什么使用严格模式

1. 减少错误：捕获常见编码错误
2. 提高安全性：防止意外创建全局变量
3. 优化性能：某些情况下帮助 JavaScript 引擎优化代码
4. 面向未来：禁用未来可能成为语法的功能

严格模式是现代 JavaScript 开发的最佳实践，建议始终使用严格模式编写代码。





## 26. 移动端 click、touch 与 tap 事件的区别解析

### 一、核心事件对比

| 事件类型  | 触发条件               | 延迟时间  | 适用场景               | 穿透问题 | 兼容性        |
| --------- | ---------------------- | --------- | ---------------------- | -------- | ------------- |
| **click** | 手指点击/鼠标点击      | 300-350ms | 通用点击交互           | 存在     | 全平台支持    |
| **touch** | 手指触摸屏幕           | 立即触发  | 需要实时响应的触摸操作 | 无       | 移动端专用    |
| **tap**   | 轻触屏幕（封装的事件） | 50-100ms  | 快速点击交互           | 部分存在 | 需框架/库支持 |

### 二、深度解析

#### 1. click 事件

- **本质**：PC端鼠标事件的移动端适配
- **延迟机制**：浏览器等待约300ms判断是否双击缩放
- **穿透现象**：触发后会继续传递到下层元素
- **适用场景**：需要兼容PC和移动端的通用点击逻辑

#### 2. touch 事件系列

包含四个子事件：

- `touchstart`：手指接触屏幕立即触发
- `touchmove`：手指在屏幕滑动时连续触发
- `touchend`：手指离开屏幕时触发
- `touchcancel`：系统中断触摸时触发

**特点**：

- 无延迟，适合需要实时反馈的交互（如绘图应用）
- 可获取触摸坐标、力度等详细信息
- 需要通过`event.touches`数组访问多点触控

#### 3. tap 事件

- **本质**：由框架（如Zepto、FastClick）封装的合成事件
- **实现原理**：组合`touchstart`和`touchend`，在指定时间/距离阈值内触发
- **优化点**
  - 消除300ms延迟
  - 部分解决点击穿透问题
- **变种事件**
  - `singleTap`：单击
  - `doubleTap`：双击
  - `longTap`：长按（>750ms）
  - `swipe`：滑动手势

### 三、典型问题与解决方案

#### 1. 点击延迟问题

**解决方案**：

```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

或使用`touch`事件模拟快速点击：

```JavaScript
element.addEventListener('touchend', callback);
```

#### 2. 点击穿透（Ghost Clicks）

**发生场景**： 上层元素点击后消失，下层同位置元素触发click事件

**解决方案**：

- 统一使用`touch`事件
- 在`touchend`中调用`preventDefault()`
- 使用`fastclick`等库
- 设置上层元素消失的400ms延迟

#### 3. 误触识别

**优化方案**：

```JavaScript
let startX, startY;
element.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

element.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;
  
  // 判断位移阈值（如10px内视为点击）
  if(Math.abs(endX - startX) < 10 && Math.abs(endY - startY) < 10) {
    // 执行点击逻辑
  }
});
```

### 四、现代开发实践建议

1. **优先使用指针事件（Pointer Events）**：

```JavaScript
element.addEventListener('pointerup', callback);
```

- 统一处理鼠标、触摸、触控笔输入
- 支持IE10+和现代浏览器

2. **交互优化方案**：

- 重要按钮同时绑定`click`和`touchend`
- 滑动列表使用`touch`事件
- 表单元素保留原生`click`

3. **性能注意**：

- 避免在`touchmove`中执行重布局操作
- 使用`passive: true`提高滚动性能：

```JavaScript
element.addEventListener('touchmove', callback, { passive: true });
```

理解这些事件的区别，能够帮助开发者针对不同移动端交互场景选择最优实现方案，平衡响应速度与功能完整性的需求。



## 27. JavaScript 的单线程与异步机制

### 一、JavaScript 的单线程本质

JavaScript 是**单线程**语言，这意味着：

- **单一调用栈**：同一时间只能执行一个任务
- **顺序执行**：代码按顺序逐行执行，不会并行处理
- **阻塞风险**：长时间同步任务会阻塞整个程序

这种设计避免了多线程环境中的**竞态条件**和**死锁**问题，但也带来了性能挑战。

### 二、异步操作的实现原理

虽然 JS 是单线程，但通过以下机制实现异步操作：

#### 1. 事件循环 (Event Loop) 机制

**核心组件**：

- **调用栈**：执行同步代码
- **任务队列**：存放异步回调（宏任务）
- **微任务队列**：优先级更高的异步任务
- **Web APIs**：浏览器提供的异步能力（如 setTimeout、AJAX）

#### 2. 异步操作类型

**宏任务 (Macrotasks)**

- `setTimeout`/`setInterval`
- DOM 事件回调
- I/O 操作
- UI 渲染
- `setImmediate` (Node.js)

**微任务 (Microtasks)**

- `Promise.then`/`catch`/`finally`
- `MutationObserver`
- `process.nextTick` (Node.js)

### 三、执行顺序示例

```JavaScript
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

console.log('4');

// 输出顺序：1 → 4 → 3 → 2
```

**执行流程**：

1. 执行同步代码（输出1、4）
2. 清空微任务队列（输出3）
3. 执行宏任务队列（输出2）

### 四、现代异步编程方式

#### 1. Promise 链式调用

```JavaScript
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

#### 2. async/await 语法糖

```JavaScript
async function loadData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

#### 3. Web Workers（真正的多线程）

```JavaScript
// 主线程
const worker = new Worker('worker.js');
worker.postMessage('start');
worker.onmessage = e => console.log(e.data);

// worker.js
self.onmessage = e => {
  const result = doHeavyCalculation();
  self.postMessage(result);
};
```

### 五、关键结论

1. **单线程但非阻塞**：通过事件循环实现异步
2. **优先级规则**
   - 同步代码 > 微任务 > 宏任务
   - 微任务在每个宏任务之间执行
3. **性能优化**
   - 耗时操作放入 Web Workers
   - 合理使用微任务优先处理高优先级任务
   - 避免长时间阻塞调用栈

JavaScript 的单线程模型配合事件循环机制，在保证线程安全的同时，通过巧妙的任务调度实现了高效的异步编程能力。





## 28. JavaScript 数组常用函数全解析

### 一、基础操作函数

#### 1. 增删元素

- **`push()`** - 末尾添加元素，返回新长度

```JavaScript
let arr = [1, 2];
arr.push(3); // [1, 2, 3]
```

- **`pop()`** - 删除并返回最后一个元素

```JavaScript
arr.pop(); // 返回3，arr变为[1, 2]
```

- **`unshift()`** - 开头添加元素，返回新长度

```JavaScript
arr.unshift(0); // [0, 1, 2]
```

- **`shift()`** - 删除并返回第一个元素

```JavaScript
arr.shift(); // 返回0，arr变为[1, 2]
```

### 2. 合并与拆分

- **`concat()`** - 合并数组（不改变原数组）

```JavaScript
[1, 2].concat([3, 4]); // [1, 2, 3, 4]
```

- **`join()`** - 数组转字符串

```JavaScript
['a', 'b'].join('-'); // "a-b"
```

- **`slice(start, end)`** - 截取子数组（不包含end）

```JavaScript
[1, 2, 3, 4].slice(1, 3); // [2, 3]
```

### 二、高阶函数（重点）

#### 1. 遍历方法

- **`forEach(callback)`** - 简单遍历

```JavaScript
[1, 2, 3].forEach(item => console.log(item));
```

- **`map(callback)`** - 映射新数组

```JavaScript
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```

- **`filter(callback)`** - 过滤元素

```JavaScript
[1, 2, 3].filter(x => x > 1); // [2, 3]
```

#### 2. 查找方法

- **`find(callback)`** - 查找首个符合条件的元素

```JavaScript
[1, 2, 3].find(x => x > 1); // 2
```

- **`findIndex(callback)`** - 查找元素位置

```JavaScript
[1, 2, 3].findIndex(x => x === 2); // 1
```

- **`includes(value)`** - 是否包含某值

```JavaScript
[1, 2, 3].includes(2); // true
```

#### 3. 聚合方法

- **`reduce(callback, initValue)`** - 累计计算

```JavaScript
[1, 2, 3].reduce((sum, curr) => sum + curr, 0); // 6
```

- **`some(callback)`** - 是否有元素满足条件

```JavaScript
[1, 2, 3].some(x => x > 2); // true
```

- **`every(callback)`** - 是否所有元素满足条件

```JavaScript
[1, 2, 3].every(x => x > 0); // true
```

### 三、数组变形方法

#### 1. 排序与反转

- **`sort([compareFunction])`** - 排序（会修改原数组）

```JavaScript
[3, 1, 2].sort((a, b) => a - b); // [1, 2, 3]
```

- **`reverse()`** - 反转数组

```JavaScript
[1, 2, 3].reverse(); // [3, 2, 1]
```

#### 2. 扁平化

- **`flat(depth)`** - 数组扁平化

```JavaScript
[1, [2, [3]]].flat(2); // [1, 2, 3]
```

- **`flatMap(callback)`** - 映射后扁平化

```JavaScript
[1, 2].flatMap(x => [x, x*2]); // [1, 2, 2, 4]
```

### 四、ES6+ 新增方法

#### 1. 填充与包含

- **`fill(value, start, end)`** - 填充数组

```JavaScript
new Array(3).fill(1); // [1, 1, 1]
```

- **`Array.from()`** - 类数组转数组

```JavaScript
Array.from('abc'); // ['a', 'b', 'c']
```

### 2. 查找方法增强

- **`findLast()`** - 从末尾查找

```JavaScript
[1, 2, 3].findLast(x => x > 1); // 3
```

- **`findLastIndex()`** - 从末尾查找索引

```JavaScript
[1, 2, 3].findLastIndex(x => x > 1); // 2
```

### 五、性能与使用建议

1. **避免在循环中修改数组长度**（影响性能）
2. **大数据集优先使用`for...of`**（比`forEach`更快）
3. **链式调用优化**：

```JavaScript
   // 优于多次遍历
   arr.map(...).filter(...).reduce(...)
```

4. **判断空数组**：

```JavaScript
arr.length === 0  // 最佳性能
```

### 六、特殊场景处理

#### 1. 去重方案

```JavaScript
[...new Set([1, 2, 2, 3])]; // [1, 2, 3]
```

#### 2. 数组浅拷贝

```JavaScript
const copy = [...arr];
const copy = arr.slice();
```

#### 3. 类数组转换

```JavaScript
Array.prototype.slice.call(arguments);
[...document.querySelectorAll('div')];
```

掌握这些数组方法可以大幅提升开发效率，建议根据实际场景选择最适合的方法组合使用。



## 29. JavaScript 块级作用域与变量提升

### 变量提升 (Hoisting)

#### 概念

变量提升是 JavaScript 中变量和函数声明在代码执行前被"提升"到作用域顶部的行为。

#### var 的变量提升

```JavaScript
console.log(a); // undefined (不会报错)
var a = 5;
```

实际执行顺序：

```JavaScript
var a;          // 声明被提升
console.log(a); // undefined
a = 5;          // 赋值留在原地
```

#### function 的变量提升

```JavaScript
foo(); // "hello"

function foo() {
  console.log("hello");
}
```

函数声明整体被提升。

#### let/const 的暂时性死区 (TDZ)

```JavaScript
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

let/const 也有提升，但在赋值前处于"暂时性死区"，访问会报错。

### 块级作用域

#### ES5 只有函数作用域

```JavaScript
if (true) {
  var x = 10;
}
console.log(x); // 10 (var 没有块级作用域)
```

#### ES6 引入块级作用域 (let/const)

```JavaScript
if (true) {
  let y = 20;
  const z = 30;
}
console.log(y); // ReferenceError: y is not defined
console.log(z); // ReferenceError: z is not defined
```

#### 循环中的块级作用域

```JavaScript
// var 的问题
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 3, 3, 3
}

// let 的解决方案
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 100); // 0, 1, 2
}
```

### 对比

| 特性         | var                     | let/const            |
| ------------ | ----------------------- | -------------------- |
| 作用域       | 函数作用域              | 块级作用域           |
| 变量提升     | 声明提升，值为undefined | 提升但存在暂时性死区 |
| 全局声明     | 成为window属性          | 不在window对象上     |
| 重复声明     | 允许                    | 不允许               |
| 循环中的表现 | 共享同一个变量          | 每次迭代创建新绑定   |

### 最佳实践

1. 默认使用 `const`，只有需要重新赋值时才用 `let`
2. 避免使用 `var`（除非有特殊需求）
3. 在作用域顶部声明变量（提高可读性）
4. 利用块级作用域管理变量生命周期

块级作用域和正确的变量声明方式可以使代码更可预测、更易于维护，减少意外的全局变量和闭包相关的问题。



## 30. JavaScript 中 `null` 与 `undefined` 的区别

`null` 和 `undefined` 都是 JavaScript 中表示"无"或"空"的特殊值，但它们有重要区别：

### 1. 基本定义

- **undefined**：
  - 表示变量已声明但未赋值
  - 函数没有返回值时默认返回 `undefined`
  - 访问对象不存在的属性返回 `undefined`
- **null**：
  - 表示一个明确的"空值"或"无对象"的引用
  - 需要显式赋值给变量或属性

### 2. 类型区别

```JavaScript
typeof undefined;  // "undefined"
typeof null;       // "object" (历史遗留问题)
```

### 3. 产生场景

#### undefined 出现的常见情况：

```JavaScript
let a;             // 声明但未赋值
console.log(a);    // undefined

function foo() {}  // 没有返回值
console.log(foo()); // undefined

const obj = {};
console.log(obj.prop); // 访问不存在的属性 → undefined
```

#### null 出现的常见情况：

```JavaScript
let b = null;      // 显式赋值为null

document.getElementById('nonexistent'); // 找不到DOM元素 → null

// 表示空值
function getValue() {
  return condition ? someValue : null;
}
```

### 4. 相等性比较

```JavaScript
null == undefined;   // true (抽象相等)
null === undefined;  // false (严格相等)
```

### 5. 使用场景建议

- 使用 **undefined**：
  - 表示"未定义"的自然状态
  - 函数参数默认值
- 使用 **null**：
  - 表示有意清空一个对象引用
  - 作为明确的"无值"标记

### 6. 转换行为

```JavaScript
Number(undefined);  // NaN
Number(null);       // 0

1 + undefined;      // NaN
1 + null;           // 1
```

### 7. JSON 处理

```JavaScript
JSON.stringify({a: undefined, b: null}); 
// '{"b":null}' (undefined属性会被忽略)
```

### 最佳实践

1. 不要显式将变量赋值为 `undefined`（让 JavaScript 引擎自动处理）
2. 使用 `null` 表示有意清空的值
3. 检查变量是否"空"时，通常需要同时检查两者：

```JavaScript
if (value == null) { 
 // 同时捕获 null 和 undefined
}
```

4. 在 TypeScript 中，`null` 和 `undefined` 是不同类型，可以更精确地控制



## 31. JavaScript 中常见的内存泄漏场景

内存泄漏是指程序未能释放不再使用的内存，导致内存占用持续增长。以下是 JavaScript 中常见的内存泄漏场景：

### 1. 意外的全局变量

```JavaScript
function leak() {
  leakVar = '这是一个全局变量'; // 忘记使用var/let/const
  this.anotherLeak = '这也是全局变量'; // 在非严格模式下
}
```

**解决方法**：始终使用 `'use strict'` 模式，明确声明变量。

### 2. 未清理的定时器和回调函数

```JavaScript
// 定时器泄漏
const intervalId = setInterval(() => {
  // 操作
}, 1000);

// 忘记清除：clearInterval(intervalId);

// 事件监听器泄漏
element.addEventListener('click', onClick);

// 忘记移除：element.removeEventListener('click', onClick);
```

**解决方法**：在组件卸载或不再需要时清除定时器和事件监听器。

### 3. DOM 引用未释放

```JavaScript
const elements = {
  button: document.getElementById('myButton'),
  div: document.getElementById('myDiv')
};

// 即使从DOM移除后，elements对象仍保留引用
document.body.removeChild(document.getElementById('myDiv'));
```

**解决方法**：不再需要时手动置空引用 `elements.div = null`。

### 4. 闭包滥用

```JavaScript
function outer() {
  const bigData = new Array(1000000).fill('*');
  
  return function inner() {
    // 闭包保留了bigData的引用
    console.log('inner');
  };
}

const closure = outer(); // bigData不会被释放
```

**解决方法**：避免在闭包中保留不需要的大对象引用。

### 5. 未清理的 Map 和 Set

```JavaScript
const myMap = new Map();
const key = { id: 1 };
myMap.set(key, 'value');

// 即使key不再需要，Map仍保留引用
key = null; // key对象不会被GC，因为Map还引用它
```

**解决方法**：使用 `WeakMap` 或 `WeakSet` 替代，或手动删除条目。

### 6. 未释放的 WebSocket 或订阅

```JavaScript
const socket = new WebSocket('ws://example.com');
socket.onmessage = handleMessage;

// 忘记关闭：socket.close();
```

**解决方法**：在适当时候关闭连接和取消订阅。

### 7. 缓存无限增长

```JavaScript
const cache = {};

function processData(data) {
  if (cache[data.id]) {
    return cache[data.id];
  }
  // 处理并缓存
  cache[data.id] = processedData;
  // 没有清理机制，缓存会无限增长
}
```

**解决方法**：实现LRU等缓存淘汰策略，或使用 `WeakMap`。

### 检测内存泄漏的方法

1. Chrome DevTools 的 Memory 面板
   - Heap Snapshots 对比
   - Allocation Timeline 记录
2. Node.js 的 `--inspect` 标志和 Chrome DevTools
3. 性能监控工具（如 Lighthouse）

### 最佳实践

1. 使用严格模式 (`'use strict'`)
2. 及时清理事件监听器、定时器、订阅等
3. 对于大型数据结构，考虑使用 `WeakMap`/`WeakSet`
4. 避免不必要的闭包长期引用大对象
5. 定期检查并优化缓存策略
6. 使用工具进行内存分析




## 32. jsonp 优缺点？ 

### 1. **优点**

1. 它不像 XMLHttpRequest 对象实现的 Ajax 请求那样受到同源策略的限制，JSONP 可以跨越同源策略；
2. 它的兼容性更好，在更加古老的浏览器中都可以运行，不需要 XMLHttpRequest 或 ActiveX 的支持
3. 在请求完毕后可以通过调用 callback 的方式回传结果。将回调方法的权限给了调用方。这个就相当于将 controller 层和 view 层终于*分 开了。我提供的 jsonp 服务只提供纯服务的数据，至于提供服务以 后的页面渲染和后续 view 操作都由调用者来自己定义就好了。如果*有两个页面需要渲染同一份数据，你们只需要有不同的渲染逻辑就可以了，逻辑都可以使用同 一个 jsonp 服务。

### 2. 缺点

1. 它只支持 GET 请求而不支持 POST 等其它类型的 HTTP 请求
2. 它只支持跨域 HTTP 请求这种情况，不能解决不同域的两个页面之间如何进行 JavaScript 调用的问题。
3. jsonp 在调用失败的时候不会返回各种 HTTP 状态码。
4. 缺点是安全性。万一假如提供 jsonp 的服务存在页面注入漏洞，即它返回的 javascript 的内容被人控制的。那么结果是什么？所有调用这个 jsonp 的网站都会存在漏洞。于是无法把危险控制在一个域名下…所以在使用 jsonp 的时候必须要保证使用的 jsonp 服务必须是安全可信的




## 33. 兼容各种浏览器版本的事件绑定

```js
/*
兼容低版本IE，ele为需要绑定事件的元素，
eventName为事件名（保持addEventListener语法，去掉on），fun为事件响应函数
*/

function addEvent(ele, eventName, fun) {
  if (ele.addEventListener) {
    ele.addEventListener(eventName, fun, false);
  } else {
    ele.attachEvent("on" + eventNme, fun);
  }
}
```










## 34. 如何判断一个对象是否属于某个类？

使用 instanceof

```js
if (a instanceof Person) {
  alert("yes");
}
```



## 35. JavaScript 中 call()、apply() 和 bind() 详解

这三个方法都是 Function 原型上的方法，用于改变函数执行时的 this 指向，是 JavaScript 中函数调用的重要机制。

### 1. call() 方法

#### 基本用法

```JavaScript
func.call(thisArg, arg1, arg2, ...)
```

#### 特点

- 立即执行函数
- 第一个参数是 this 的指向
- 后续参数是传递给函数的参数列表（逐个传递）

#### 示例

```JavaScript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Alice' };

greet.call(person, 'Hello', '!'); 
// 输出: "Hello, Alice!"
```

### 2. apply() 方法

#### 基本用法

```JavaScript
func.apply(thisArg, [argsArray])
```

#### 特点

- 立即执行函数
- 第一个参数是 this 的指向
- 第二个参数是参数数组（或类数组对象）

#### 示例

```JavaScript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Bob' };

greet.apply(person, ['Hi', '?']); 
// 输出: "Hi, Bob?"
```

### 3. bind() 方法

#### 基本用法

```JavaScript
const boundFunc = func.bind(thisArg, arg1, arg2, ...)
```

#### 特点

- 不立即执行函数，而是返回一个新函数
- 第一个参数是 this 的指向
- 可以预先设置部分参数（柯里化）
- 新函数的 this 值永久绑定，无法再改变

#### 示例

```JavaScript
function greet(greeting, punctuation) {
  console.log(greeting + ', ' + this.name + punctuation);
}

const person = { name: 'Charlie' };
const greetCharlie = greet.bind(person, 'Hey');

greetCharlie('!!!'); 
// 输出: "Hey, Charlie!!!"
```

### 三者的对比

| 方法    | 执行时机 | 参数形式 | 返回值       | 是否可再次改变this |
| ------- | -------- | -------- | ------------ | ------------------ |
| call()  | 立即执行 | 参数列表 | 函数返回值   | 不可               |
| apply() | 立即执行 | 参数数组 | 函数返回值   | 不可               |
| bind()  | 延迟执行 | 参数列表 | 绑定后的函数 | 不可               |

### 实际应用场景

#### 1. 借用方法

```JavaScript
// 类数组对象使用数组方法
const arrayLike = { 0: 'a', 1: 'b', length: 2 };
Array.prototype.push.call(arrayLike, 'c');
console.log(arrayLike); // {0: 'a', 1: 'b', 2: 'c', length: 3}
```

#### 2. 继承实现

```JavaScript
function Parent(name) {
  this.name = name;
}

function Child(name, age) {
  Parent.call(this, name); // 继承父类属性
  this.age = age;
}
```

#### 3. 函数柯里化

```JavaScript
function add(a, b) {
  return a + b;
}

const add5 = add.bind(null, 5);
console.log(add5(3)); // 8
```

#### 4. 事件处理函数中的 this

```JavaScript
class Button {
  constructor() {
    this.text = 'Click me';
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    console.log(this.text);
  }
}

const btn = new Button();
document.querySelector('button').addEventListener('click', btn.handleClick);
```

### 注意事项

1. **严格模式下的 this**：
   - 在严格模式下，如果第一个参数是 null 或 undefined，this 将指向 undefined
   - 非严格模式下，this 会指向全局对象（浏览器中是 window）
2. **性能考虑**：
   - bind() 会创建一个新函数，频繁使用可能带来内存开销
   - 在循环或高频触发场景中，考虑预先绑定而非每次调用时绑定
3. **箭头函数的特殊性**：
   - 箭头函数没有自己的 this，所以这些方法无法改变箭头函数的 this 指向

```JavaScript
   const fn = () => console.log(this);
   fn.call({a: 1}); // this 不会改变
```

4. **参数处理**
   - call() 和 apply() 的参数差异：

```JavaScript
 Math.max.call(null, 1, 2, 3);  // call 逐个参数
 Math.max.apply(null, [1, 2, 3]); // apply 数组参数
```



## 36. JavaScript 函数柯里化详解

### 一、什么是函数柯里化？

函数柯里化（Currying）是一种将多参数函数转换为一系列单参数函数的技术。柯里化后的函数可以分步接收参数，并在接收到所有参数后执行原函数。

#### 基本概念

```JavaScript
// 普通函数
function add(a, b, c) {
  return a + b + c;
}

// 柯里化后的函数
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(add(1, 2, 3));      // 6
console.log(curriedAdd(1)(2)(3)); // 6
```

### 二、柯里化的实现方式

#### 1. 手动柯里化

```JavaScript
function multiply(a) {
  return function(b) {
    return a * b;
  };
}

const double = multiply(2);
console.log(double(5)); // 10
```

#### 2. 通用柯里化函数

```JavaScript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// 使用示例
function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3));  // 6
console.log(curriedSum(1)(2, 3));  // 6
```

### 三、柯里化的高级应用

#### 1. 参数复用

```JavaScript
// 创建通用的日志函数
function log(date, importance, message) {
  console.log(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

const curriedLog = curry(log);

// 创建今天的日志函数
const logNow = curriedLog(new Date());

// 创建重要的日志函数
const logImportant = logNow("IMPORTANT");

logImportant("系统启动"); // [HH:MM] [IMPORTANT] 系统启动
```

#### 2. 延迟执行

```JavaScript
const fetchData = curry(function(url, params, callback) {
  fetch(url, params).then(callback);
});

const fetchUsers = fetchData('/api/users');
const fetchUsersWithLimit = fetchUsers({limit: 10});

fetchUsersWithLimit(console.log);
```

#### 3. 组合函数

```JavaScript
function compose(...fns) {
  return fns.reduce((f, g) => (...args) => f(g(...args)));
}

const toUpperCase = str => str.toUpperCase();
const exclaim = str => str + '!';
const greet = name => `Hello, ${name}`;

const loudGreeting = compose(exclaim, toUpperCase, greet);
console.log(loudGreeting('John')); // "HELLO, JOHN!"
```

### 四、柯里化的变体

#### 1. 部分应用（Partial Application）

```JavaScript
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn.apply(this, [...presetArgs, ...laterArgs]);
  };
}

function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

const sayHello = partial(greet, 'Hello');
console.log(sayHello('Alice')); // "Hello, Alice!"
```

#### 2. 反向柯里化（Uncurrying）

```JavaScript
Function.prototype.uncurry = function() {
  return (...args) => this.call(...args);
};

const push = Array.prototype.push.uncurry();
const obj = {};
push(obj, 'first', 'second');
console.log(obj); // {0: 'first', 1: 'second', length: 2}
```

### 五、柯里化的注意事项

1. **性能考虑**：柯里化会创建额外的闭包，可能带来轻微的性能开销
2. **参数顺序**：柯里化函数通常从左到右接收参数，把最可能变化的参数放在最后
3. **参数长度**：使用 `function.length` 可以获取函数期望的参数个数
4. **箭头函数**：箭头函数没有自己的 `arguments` 对象，柯里化时需要注意

### 六、现代 JavaScript 中的替代方案

#### 1. 使用默认参数

```JavaScript
function greet(greeting = 'Hello', name = 'World') {
  return `${greeting}, ${name}!`;
}

console.log(greet(undefined, 'Alice')); // "Hello, Alice!"
```

#### 2. 使用箭头函数简化

```
JavaScriptconst add = a => b => c => a + b + c;
console.log(add(1)(2)(3)); // 6
```

#### 3. 使用 Rest 参数

```JavaScript
const curry = fn => {
  const arity = fn.length;
  
  return function curried(...args) {
    return args.length >= arity
      ? fn(...args)
      : (...moreArgs) => curried(...args, ...moreArgs);
  };
};
```

函数柯里化是函数式编程中的重要技术，它能够提高代码的复用性和灵活性，特别适合需要创建大量相似函数的场景。




## 37. sort 排序原理

使用了冒泡排序法，其原理如下：

- 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
- 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
- 针对所有的元素重复以上的步骤，除了最后一个。
- 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

示例：

```js
var arr = [1, 5, 4, 2];
// sort()方法的比较逻辑为：
// 第一轮：1和5比，1和4比，1和2比
// 第二轮：5和4比，5和2比
// 第三轮：4和2比
```

```js
// 一.sort排序规则 return大于0则交换数组相邻2个元素的位置
// 二.arr.sort(function (a,b) {})中
//         a -->代表每一次执行匿名函时候，找到的数组中的当前项；
//         b -->代表当前项的后一项；

// 1.升序
var apple = [45, 42, 10, 147, 7, 65, -74];
// ①默认法,缺点:只根据首位排序
console.log(apple.sort());
// ②指定排序规则法,return可返回任何值
console.log(
  apple.sort(function(a, b) {
    return a - b; //若return返回值大于0(即a＞b),则a,b交换位置
  })
);

//2.降序
var arr = [45, 42, 10, 111, 7, 65, -74];
console.log(
  apple.sort(function(a, b) {
    return b - a; //若return返回值大于零(即b＞a),则a,b交换位置
  })
);
```

[参考 1](https://blog.csdn.net/soraru/article/details/82255616)、[参考 2](https://www.cnblogs.com/huoxiao/p/10239284.html)




## 38. Zepto 的点透问题如何解决？

**方案一：来得很直接 github 上有个 fastclick 可以完美解决 [查看详情](https://github.com/ftlabs/fastclick)** 

引入 fastclick.js，因为 fastclick 源码不依赖其他库所以你可以在原生的 js 前直接加上

```js
window.addEventListener(
  "load",
  function() {
    FastClick.attach(document.body);
  },
  false
);
```

或者有 zepto 或者 jqm 的 js 里面加上

```js
$(function() {
  FastClick.attach(document.body);
});
```

当然 require 的话就这样：

```js
var FastClick = require("fastclick");
FastClick.attach(document.body, options);
```

**方案二：用 touchend 代替 tap 事件并阻止掉 touchend 的默认行为 preventDefault()**

```js
$("#cbFinish").on("touchend", function(event) {
  //很多处理比如隐藏什么的
  event.preventDefault();
});
```

**方案三：延迟一定的时间(300ms+)来处理事件**

```js
$("#cbFinish").on("tap", function(event) {
  setTimeout(function() {
    //很多处理比如隐藏什么的
  }, 320);
});
```

这种方法其实很好，可以和 fadeInIn/fadeOut 等动画结合使用，可以做出过渡效果

理论上上面的方法可以完美的解决 tap 的点透问题，如果真的不行，用 click

解析：

1、“点透”是什么？

你可能碰到过在列表页面上创建一个弹出层，弹出层有个关闭的按钮，你点了这个按钮关闭弹出层后后，这个按钮正下方的内容也会执行点击事件（或打开链接）。这个被定义为这是一个“点透”现象。

2、为什么会出现点透呢？

[参考](https://www.cnblogs.com/axl234/p/5554281.html)



## 39. 判断 JavaScript 运行环境（浏览器 vs Node.js）

### 常用检测方法

#### 1. 通过全局对象判断

```JavaScript
if (typeof window !== 'undefined') {
  // 浏览器环境
  console.log('Running in browser');
} else if (typeof process !== 'undefined' && process.versions && process.versions.node) {
  // Node.js 环境
  console.log('Running in Node.js');
} else {
  // 其他环境 (如 Service Workers, Web Workers 等)
  console.log('Running in unknown environment');
}
```

#### 2. 通过 this 指向判断（非严格模式）

```JavaScript
const isBrowser = (function() {
  try {
    return this === window;
  } catch (e) {
    return false;
  }
})();

const isNode = (function() {
  try {
    return this === global;
  } catch (e) {
    return false;
  }
})();
```

#### 3. 通过特有 API 判断

```JavaScript
// 检测浏览器特有 API
const isBrowser = typeof document !== 'undefined' || 
                 typeof navigator !== 'undefined' || 
                 typeof XMLHttpRequest !== 'undefined';

// 检测 Node.js 特有 API
const isNode = typeof process !== 'undefined' && 
               process.versions && 
               process.versions.node;
```

### 更精确的检测方法

#### 1. 综合检测函数

```JavaScript
function getRuntimeEnvironment() {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    return {
      isBrowser: true,
      isNode: false,
      environment: 'browser'
    };
  }
  
  if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    return {
      isBrowser: false,
      isNode: true,
      environment: 'node',
      nodeVersion: process.versions.node
    };
  }
  
  if (typeof importScripts === 'function') {
    return {
      isBrowser: false,
      isNode: false,
      environment: 'webworker'
    };
  }
  
  return {
    isBrowser: false,
    isNode: false,
    environment: 'unknown'
  };
}

// 使用示例
const env = getRuntimeEnvironment();
console.log(`Running in ${env.environment}`);
```

#### 2. 检测模块系统（适用于现代环境）

```JavaScript
function isModuleEnvironment() {
  return typeof module !== 'undefined' && module.exports;
}

if (isModuleEnvironment()) {
  console.log('Running in Node.js or module-supporting environment');
}
```

### 特殊环境检测

#### 1. 检测 Electron 环境

```JavaScript
const isElectron = typeof process !== 'undefined' && 
                  process.versions && 
                  process.versions.electron;
```

#### 2. 检测 React Native 环境

```JavaScript
const isReactNative = typeof navigator !== 'undefined' && 
                     navigator.product === 'ReactNative';
```

#### 3. 检测 Deno 环境

```JavaScript
const isDeno = typeof Deno !== 'undefined' && 
               Deno.version && 
               Deno.version.deno;
```

### 最佳实践建议

1. **优先检测浏览器环境**：因为浏览器环境有更多限制和特性
2. **避免单一检测**：结合多个特征判断更可靠
3. **考虑边缘情况**：如 Web Workers、Service Workers 等特殊环境
4. **封装检测逻辑**：将环境检测封装成工具函数复用

### 现代模块开发中的处理

如果是编写通用模块（UMD），可以使用以下模式：

```JavaScript
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    module.exports = factory();
  } else {
    // 浏览器全局变量
    root.myModule = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  // 模块代码
  return {};
}));
```

选择哪种检测方法取决于你的具体需求和使用场景，简单的项目可以使用基础检测，复杂的通用库则需要更全面的环境判断。






## 40. 移动端点击事件延迟问题

1. **延时时间：**

   300 毫秒

2. **出现原因：**
   因为浏览器捕获第一次单击后，会先等待一段时间，如果在这段时间区间里用户未进行下一次点击，则浏览器会做单击事件的处理。如果这段时间里用户进行了第二次单击操作，则浏览器会做双击事件处理。

3. **如何解决**

   - 推荐 fastclick.js

   - 视口设置（推荐）

     ```html
     <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
     ```

   > 随着移动浏览器的不断进化，300ms 点击延迟问题在现代 Web 开发中已不再是主要痛点，但在开发面向旧版本浏览器的应用时仍需注意此问题。




## 41. 使用构造函数的注意点

1. 一般情况下构造函数的首字母需要大写，因为我们在看到一个函数首字母大写的情况，就认定这是一个构造函数，需要跟new关键字进行搭配使用，创建一个新的实例（对象）
2. 构造函数在被调用的时候需要跟new关键字搭配使用。
3. 在构造函数内部通过this+属性名的形式为实例添加一些属性和方法。
4. 构造函数一般不需要返回值，如果有返回值
    * 4.1 如果返回值是一个基本数据类型，那么调用构造函数，返回值仍旧是那么创建出来的对象。
    * 4.2 如果返回值是一个复杂数据类型，那么调用构造函数的时候，返回值就是这个return之后的那个复杂数据类型。



## 42. 获取浏览器版本信息的几种方法

### 1. 通过 `navigator.userAgent` 获取（传统方法）

```JavaScript
const userAgent = navigator.userAgent;
console.log(userAgent);
// 示例输出: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
```

**解析 userAgent 的常见方法 **

```JavaScript
function getBrowserInfo() {
  const ua = navigator.userAgent;
  let browserName;
  let browserVersion;

  // 检测 Chrome
  if (ua.indexOf("Chrome") > -1) {
    browserName = "Chrome";
    const chromeVersion = ua.match(/Chrome\/(\d+\.\d+)/);
    browserVersion = chromeVersion ? chromeVersion[1] : "未知版本";
  } 
  // 检测 Firefox
  else if (ua.indexOf("Firefox") > -1) {
    browserName = "Firefox";
    const ffVersion = ua.match(/Firefox\/(\d+\.\d+)/);
    browserVersion = ffVersion ? ffVersion[1] : "未知版本";
  }
  // 检测 Safari
  else if (ua.indexOf("Safari") > -1) {
    browserName = "Safari";
    const safariVersion = ua.match(/Version\/(\d+\.\d+)/);
    browserVersion = safariVersion ? safariVersion[1] : "未知版本";
  }
  // 检测 Edge
  else if (ua.indexOf("Edg") > -1) {
    browserName = "Edge";
    const edgeVersion = ua.match(/Edg\/(\d+\.\d+)/);
    browserVersion = edgeVersion ? edgeVersion[1] : "未知版本";
  }
  // 检测 IE
  else if (ua.indexOf("Trident") > -1) {
    browserName = "Internet Explorer";
    const ieVersion = ua.match(/rv:(\d+\.\d+)/);
    browserVersion = ieVersion ? ieVersion[1] : "未知版本";
  }

  return {
    name: browserName || "未知浏览器",
    version: browserVersion || "未知版本",
    userAgent: ua
  };
}

console.log(getBrowserInfo());
```

### 2. 使用 `navigator.appVersion` 和 `navigator.appName`

```JavaScript
console.log("浏览器名称:", navigator.appName);
console.log("浏览器版本:", navigator.appVersion);
```

### 3. 使用现代浏览器检测库（推荐）

#### 使用 `bowser` 库（安装: `npm install bowser`）

```JavaScript
import bowser from 'bowser';

const browser = bowser.getParser(navigator.userAgent);
console.log("浏览器名称:", browser.getBrowserName());
console.log("浏览器版本:", browser.getBrowserVersion());
console.log("操作系统:", browser.getOSName());
console.log("设备类型:", browser.getPlatformType());
```

#### 使用 `detect-browser` 库（安装: `npm install detect-browser`）

```JavaScript
import { detect } from 'detect-browser';

const browser = detect();
console.log("浏览器信息:", browser);
```

### 4. 检测特定浏览器特性（特征检测）

```JavaScript
// 检测 Chrome
const isChrome = !!window.chrome && !!window.chrome.webstore;

// 检测 Firefox
const isFirefox = typeof InstallTrigger !== 'undefined';

// 检测 Safari
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// 检测 Edge
const isEdge = navigator.userAgent.includes('Edg/');

// 检测 IE
const isIE = /*@cc_on!@*/false || !!document.documentMode;
```

### 5. 使用 `navigator.platform` 获取操作系统信息

```JavaScript
console.log("操作系统平台:", navigator.platform);
```

### 注意事项

1. **userAgent 可以被伪造**：用户或浏览器扩展可以修改 userAgent 字符串
2. **浏览器兼容性**：不同浏览器提供的信息格式不同
3. **现代浏览器正在减少 userAgent 信息**：如 Chrome 的 User-Agent Reduction 计划
4. **推荐使用特性检测**：判断浏览器是否支持某个特性，而非判断浏览器类型

### 最佳实践建议

1. 对于简单需求，使用 `navigator.userAgent` 解析
2. 对于复杂需求，使用成熟的检测库（如 bowser）
3. 尽可能使用特性检测而非浏览器检测
4. 不要依赖浏览器版本来决定功能可用性，而是直接检测功能支持




## 43. 字符串常用操作

- `charAt(index)`: 返回指定索引处的字符串
- `charCodeAt(index)`: 返回指定索引处的字符的 Unicode 的值
- `concat(str1,str2,...)`: 连接多个字符串，返回连接后的字符串的副本
- `fromCharCode()`: 将 Unicode 值转换成实际的字符串
- `indexOf(str)`: 返回 str 在父串中第一次出现的位置，若没有则返回-1
- `lastIndexOf(str)`: 返回 str 在父串中最后一次出现的位置，若没有则返回-1
- `match(regex)`: 搜索字符串，并返回正则表达式的所有匹配
- `replace(str1,str2)`: str1 也可以为正则表达式，用 str2 替换 str1
- `search(regex)`: 基于正则表达式搜索字符串，并返回第一个匹配的位置
- `slice(start,end)`：返回字符索引在 start 和 end（不含）之间的子串
- `split(sep，limit)`：将字符串分割为字符数组，limit 为从头开始执行分割的最大数量
- `substr(start，length)`：从字符索引 start 的位置开始，返回长度为 length 的子串
- `substring(from,to)`：返回字符索引在 from 和 to（不含）之间的子串
- `toLowerCase()`：将字符串转换为小写
- `toUpperCase()`：将字符串转换为大写
- `valueOf()`：返回原始字符串值




## 44. 作用域的概念、作用及分类

**作用域的概念：** 

对变量起保护作用的一块区域



**作用域的作用：** 

作用域外部无法获取到作用域内部声明的变量，作用域内部能够获取到作用域外界声明的变量。



**作用域的分类**

块作用域、词法作用域、动态作用域

1. 块作用域 花括号 {}

2. 词法作用域（js 属于词法作用域）
   作用域只跟在何处被创建有关系，跟在何处被调用没有关系
3. 动态作用域
   作用域只跟在何处被调用有关系，跟在何处被创建没有关系



## 45. JavaScript 的作用域类型

JavaScript 采用的是 **词法作用域（Lexical Scope）**，也称为 **静态作用域**。

### 词法作用域（Lexical Scope）的特点

1. **定义时确定**：作用域在代码编写阶段（词法分析时）就已经确定，而不是在运行时
2. **嵌套结构**：内层作用域可以访问外层作用域的变量，但外层不能访问内层的变量
3. **与调用位置无关**：函数的作用域取决于它被声明的位置，而不是被调用的位置

### JavaScript 中的作用域类型

虽然 JavaScript 整体是词法作用域，但具体可以分为以下几种作用域：

#### 1. 全局作用域（Global Scope）

```JavaScript
var globalVar = '全局变量'; // 全局作用域

function foo() {
  console.log(globalVar); // 可以访问
}
```

#### 2. 函数作用域（Function Scope）

```JavaScript
function outer() {
  var outerVar = '外部变量'; // 函数作用域
  
  function inner() {
    console.log(outerVar); // 可以访问
  }
  
  inner();
}
```

#### 3. 块级作用域（Block Scope） - ES6新增

```JavaScript
if (true) {
  let blockVar = '块级变量'; // 块级作用域
  const constVar = '常量';
}

console.log(blockVar); // ReferenceError
```

#### 4. 模块作用域（Module Scope） - ES6模块

```JavaScript
// module.js
var moduleVar = '模块变量'; // 模块作用域

// 其他文件无法直接访问 moduleVar
```

### 词法作用域 vs 动态作用域

| 特性     | 词法作用域 (JavaScript)          | 动态作用域 (如Bash脚本)    |
| -------- | -------------------------------- | -------------------------- |
| 确定时机 | 代码编写时确定                   | 函数调用时确定             |
| 查找方式 | 从声明位置向外层查找             | 从调用栈向上查找           |
| 影响性能 | 可优化，性能更好                 | 难以优化，性能较差         |
| 典型语言 | JavaScript, C, C++, Java, Python | Bash, Perl (部分模式), TeX |

### 示例说明词法作用域

```JavaScript
var x = 10;

function foo() {
  console.log(x);
}

function bar() {
  var x = 20;
  foo(); // 输出 10 而不是 20
}

bar();
```

*解释*：foo() 输出的是定义时所在作用域的 x (全局的 10)，而不是调用时所在作用域的 x (bar 中的 20)

### 特殊情况的 this 绑定

虽然 JavaScript 是词法作用域，但 `this` 的绑定是动态的，取决于函数如何被调用：

```JavaScript
const obj = {
  x: 20,
  method: function() {
    console.log(this.x); // this 是动态绑定的
  }
};

obj.method(); // 20 - this 指向 obj
const func = obj.method;
func(); // undefined - this 指向全局或undefined(严格模式)
```

### 总结

1. JavaScript **主要采用词法作用域**（静态作用域）
2. 具体实现上有：全局、函数、块级和模块作用域
3. `var` 只有全局和函数作用域，`let/const` 有块级作用域
4. `this` 绑定是动态的，是唯一的例外情况
5. 理解词法作用域是掌握闭包的基础




## 63. 浮点数精度

答案：[参考](https://www.css88.com/archives/7340)




## 64.自执行函数?用于什么场景？好处?

答案：

自执行函数:
1、声明一个匿名函数
2、马上调用这个匿名函数。<br>
作用：创建一个独立的作用域。<br>

好处：防止变量弥散到全局，以免各种 js 库冲突。隔离作用域避免污染，或者截断作用域链，避免闭包造成引用变量无法释放。利用立即执行特性，返回需要的业务函数或对象，避免每次通过条件判断来处理<br>

场景：一般用于框架、插件等场景




## 65.多个页面之间如何进行通信

答案：有如下几个方式：

- cookie
- web worker
- localeStorage 和 sessionStorage




## 66.css 动画和 js 动画的差异

答案：

1. 代码复杂度，js 动画代码相对复杂一些
2. 动画运行时，对动画的控制程度上，js 能够让动画，暂停，取消，终止，css 动画不能添加事件
3. 动画性能看，js 动画多了一个 js 解析的过程，性能不如 css 动画好

解析：[参考](https://zhuanlan.zhihu.com/p/41479807)




## 67.如何做到修改 url 参数页面不刷新

答案：

HTML5 引入了 `history.pushState()` 和 `history.replaceState()` 方法，它们分别可以添加和修改历史记录条目。

```js
let stateObj = {
  foo: "bar"
};

history.pushState(stateObj, "page 2", "bar.html");
```

假设当前页面为 `foo.html`，执行上述代码后会变为 `bar.html`，点击浏览器后退，会变为 `foo.html`，但浏览器并不会刷新。
`pushState()` 需要三个参数: 一个状态对象, 一个标题 (目前被忽略), 和 (可选的) 一个 URL. 让我们来解释下这三个参数详细内容：

- 状态对象 — 状态对象 `state` 是一个 JavaScript 对象，通过 `pushState ()` 创建新的历史记录条目。无论什么时候用户导航到新的状态，`popstate` 事件就会被触发，且该事件的 `state` 属性包含该历史记录条目状态对象的副本。
  状态对象可以是能被序列化的任何东西。原因在于 Firefox 将状态对象保存在用户的磁盘上，以便在用户重启浏览器时使用，我们规定了状态对象在序列化表示后有 640k 的大小限制。如果你给 `pushState()` 方法传了一个序列化后大于 640k 的状态对象，该方法会抛出异常。如果你需要更大的空间，建议使用 `sessionStorage` 以及 `localStorage`.

- 标题 — Firefox 目前忽略这个参数，但未来可能会用到。传递一个空字符串在这里是安全的，而在将来这是不安全的。二选一的话，你可以为跳转的 `state` 传递一个短标题。

- URL — 该参数定义了新的历史 URL 记录。注意，调用 `pushState()` 后浏览器并不会立即加载这个 URL，但可能会在稍后某些情况下加载这个 URL，比如在用户重新打开浏览器时。新 URL 不必须为绝对路径。如果新 URL 是相对路径，那么它将被作为相对于当前 URL 处理。新 URL 必须与当前 URL 同源，否则 `pushState()` 会抛出一个异常。该参数是可选的，缺省为当前 URL。




## 68.数组方法 pop() push() unshift() shift()

答案：

- arr.pop() 从后面删除元素，只能是一个，返回值是删除的元素
- arr.push() 从后面添加元素，返回值为添加完后的数组的长度
- arr.unshift() 从前面添加元素, 返回值是添加完后的数组的长度
- arr.shift() 从前面删除元素，只能删除一个 返回值是删除的元素




## 69.事件绑定与普通事件有什么区别

答案：

- 用普通事件添加相同事件，下面会覆盖上面的，而事件绑定不会
- 普通事件是针对非 dom 元素，事件绑定是针对 dom 元素的事件




## 70. IE 和 DOM 事件流的区别

答案：

1.事件流的区别

IE 采用冒泡型事件 Netscape 使用捕获型事件 DOM 使用先捕获后冒泡型事件
示例：

复制代码代码如下:

```html
<body>
  <div>
    <button>点击这里</button>
  </div>
</body>
```

冒泡型事件模型： button->div->body (IE 事件流)

捕获型事件模型： body->div->button (Netscape 事件流)

DOM 事件模型： body->div->button->button->div->body (先捕获后冒泡)

2.事件侦听函数的区别

IE 使用:

```js
[Object].attachEvent("name_of_event_handler", fnHandler); //绑定函数
[Object].detachEvent("name_of_event_handler", fnHandler); //移除绑定
```

DOM 使用：

```js
[Object].addEventListener("name_of_event", fnHandler, bCapture); //绑定函数
[Object].removeEventListener("name_of_event", fnHandler, bCapture); //移除绑定
```

bCapture 参数用于设置事件绑定的阶段，true 为捕获阶段，false 为冒泡阶段。




## 71. IE 和标准下有哪些兼容性的写法

答案：

```js
var ev = ev || window.event;
document.documentElement.clientWidth || document.body.clientWidth;
var target = ev.srcElement || ev.target;
```




## 72.变量提升

答案：

### 变量提升

A、js 代码执行的过程

- 1 变量提升
- 2 代码从上到下依次执行

var 关键字和 function 关键字声明的变量会进行变量提升

B、变量提升发生的环境：发生在代码所处的当前作用域。

- 变量提升
- 1 var 关键字进行的变量提升，会把变量提前声明，但是不会提前赋值 。
- 2 function 关键字对变量进行变量提升，既会把变量提前声明，又会把变量提前赋值，也就是把整个函数体提升到代码的顶部
- 3 有一些代码是不会执行的但是仍旧会发生变量提升,规则适用于 1,2
- 3.1 return 之后的代码依旧会发生变量提升，规则适用于 1，2
- 3.2 代码报错之后的代码依旧会发生变量提升，规则适用于 1，2
- 3.3 break 之后的代码依旧会发生变量提升，规则适用于 1,2
- 4 有一些代码是不会执行但是仍旧会发生变量提升，但是规则要发生变化
- 4.1 if 判断语句 if 判断语句中 var 关键字以及 function 关键字声明的变量只会发生提前声明，不会发生提前赋值,也就是不会吧函数体整体提升到当前作用域顶部。规则跟 1,2 不适用
- 4.2 switch case 规则跟 1,2 不适用
- 4.3 do while 规则跟 1,2 不适用
- 4.4 try catch catch 中声明的变量只会发生提前声明，不会发生提前赋值。
- Ps:在条件判断语句和 try catch 中的声明的变量不管是否能够执行，都只会发生提前
- 声明，不会发生提前赋值。

解析：

```js
// 如果一个变量声明了但是未赋值，那么输出这个变量就会输出 undefined
var num;
console.log(num);

// 如果一个变量没有声明也没有赋值，那么就会报一个错：
console.log(num); // 输出一个不存在的变量 Uncaught ReferenceError: num is not defined
```

```js
// var 关键字进行的变量提升
console.log(num);
var num = 123;
console.log(num);
var num = 456;
console.log(num);

// 变量提升之后的代码：
var num;
console.log(num);
num = 123;
console.log(num);
num = 456;
console.log(num);
```

```js
// function 关键字的变量提升
console.log(fn);
function fn() {
  console.log(1);
}

// 变量提升之后的代码：
function fn() {
  console.log(1);
}
console.log(fn); // 输出fn的函数体
```

```js
// 3.1 return 之后的代码依旧会发生变量提升  规则适用于1，2
function fn() {
  console.log(num);
  return;
  var num = 123;
}
fn();

// 变量提升之后的代码：
function fn() {
  var num;
  console.log(num);
  return;
  num = 123;
}
fn(); // undefined

function fn() {
  console.log(fo);
  return;
  function fo() {}
}
fn();

// 变量提升之后的代码：
function fn() {
  function fo() {}
  console.log(fo);
  return;
}
fn(); //输出fo的函数体
```

```js
//3.2 代码报错之后的代码依旧会进行变量提升，规则适用于1,2
console.log(num);
xsasfgdsfqdfsdf; //报一个错
var num = 123;
console.log(num);

// 变量提升之后的代码：
var num;
console.log(num); //输出 undefined
dsagdsqghdwfh; // 报一个错误 ，错误之后的代码不会被执行
num = 123;
console.log(num);
```

```js
//function 关键字
console.log(fn);
sasgfdhwhsdqg;
function fn() {}
console.log(fn);

// 变量提升之后的代码：
function fn() {}
console.log(fn); // 输出 fn 的函数体
asdgsdgdfgfdg; // 报一个错误，报错之后的代码不会被执行
console.log(fn);
```

```js
//4 代码不执行，但是会进行变量提升，不过规则不适用于1,2
//4.1 if判断语句
console.log(num);
if (false) {
  var num = 123;
}
console.log(num)

//  变量提升之后的代码：
var num;
console.log(num); //undefined
if (false) {
  num = 123;
}
console.log(num) //undefined

console.log(fn);
if (false) {
  function fn() {}
}
console.log(fn);

// 变量提升之后的代码：
var fn;
function fn;
console.log(fn) //undefined
if (false) {
  function fn() {}
}
console.log(fn) //undefined
/*function fn//Uncaught SyntaxError: Unexpected end of input*/
```

```js
// try catch
try {
  console.log(num);
} catch (e) {
  var num = 123;
}
console.log(num);

var num;
try {
  console.log(num); // undefined
} catch (e) {
  num = 123;
}
console.log(num); // undefined

try {
  console.log(fn);
} catch (e) {
  function fn() {}
}
console.log(fn);

var fn;
try {
  console.log(fn); // undefined
} catch (e) {
  num = 123;
}
console.log(fn); // undefined
```




## 73.如何阻止冒泡与默认行为

答案：

- 阻止冒泡行为：非 IE 浏览器 stopPropagation()，IE 浏览器 window.event.cancelBubble = true
- 阻止默认行为：非 IE 浏览器 preventDefault()，IE 浏览器 window.event.returnValue = false

解析：

当需要阻止冒泡行为时，可以使用

```js
function stopBubble(e) {
  //如果提供了事件对象，则这是一个非IE浏览器
  if (e && e.stopPropagation)
    //因此它支持W3C的stopPropagation()方法
    e.stopPropagation();
  //否则，我们需要使用IE的方式来取消事件冒泡
  else window.event.cancelBubble = true;
}
```

当需要阻止默认行为时，可以使用

```js
//阻止浏览器的默认行为
function stopDefault(e) {
  //阻止默认浏览器动作(W3C)
  if (e && e.preventDefault) e.preventDefault();
  //IE中阻止函数器默认动作的方式
  else window.event.returnValue = false;
  return false;
}
```




## 74.js 中 this 闭包 作用域

答案：

this：指向调用上下文

闭包：定义一个函数就开辟了一个局部作用域，整个 js 执行环境有一个全局作用域

作用域：一个函数可以访问其他函数中的变量（闭包是一个受保护的变量空间）

```js
var f = (function fn() {
  var name = 1;
  return function () {
    name++;
    console.log(name)
  }
})()

==>undefined 有疑问
```




## 75.javascript 的本地对象，内置对象和宿主对象

答案：

1. 本地对象
ECMA-262 把本地对象（native object）定义为“独立于宿主环境的 ECMAScript 实现提供的对象"。简单来说，本地对象就是 ECMA-262 定义的类（引用类型）。它们包括：Object、Function、Array、String、Boolean、Number、Date、RegExp、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError

2. 内置对象
JS中内置了17个对象，常用的是Array对象、Date对象、正则表达式对象、string对象、Global对象

3. 宿主对象
由ECMAScript实现的宿主环境提供的对象，可以理解为：浏览器提供的对象。所有的BOM和DOM都是宿主对象。




## 76.javascript 的同源策略

答案：一段脚本只能读取来自于同一来源的窗口和文档的属性

解析：

同源策略：限制从一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的关键的安全机制。（来自 MDN 官方的解释）

简单来说就是：一段脚本只能读取来自于同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号的组合
具体解释：

（1）源包括三个部分：协议、域名、端口（http 协议的默认端口是 80）。如果有任何一个部分不同，则源不同，那就是跨域了。

（2）限制：这个源的文档没有权利去操作另一个源的文档。这个限制体现在：（要记住）

Cookie、LocalStorage 和 IndexDB 无法获取。

无法获取和操作 DOM。

不能发送 Ajax 请求。我们要注意，Ajax 只适合同源的通信。

同源策略带来的麻烦：ajax 在不同域名下的请求无法实现，需要进行跨域操作




## 77.事件冒泡与事件捕获

答案：

事件冒泡：由最具体的元素（目标元素）向外传播到最不具体的元素

事件捕获：由最不确定的元素到目标元素




## 78.foo = foo||bar ，这行代码是什么意思？为什么要这样写？

答案：

这种写法称为短路表达式

解析：

相当于

```js
var foo;
if (foo) {
  foo = foo;
} else {
  foo = bar;
}
```

常用于函数参数的空判断




## 79.复杂数据类型如何转变为字符串

答案：

- 首先，会调用 valueOf 方法，如果方法的返回值是一个基本数据类型，就返回这个值
- 如果调用 valueOf 方法之后的返回值仍旧是一个复杂数据类型，就会调用该对象的 toString 方法
- 如果 toString 方法调用之后的返回值是一个基本数据类型，就返回这个值，
- 如果 toString 方法调用之后的返回值是一个复杂数据类型，就报一个错误。




## 80.javascript 中 this 的指向问题

答案：

- 全局环境、普通函数（非严格模式）指向 window
- 普通函数（严格模式）指向 undefined
- 函数作为对象方法及原型链指向的就是上一级的对象
- 构造函数指向构造的对象
- DOM 事件中指向触发事件的元素
- 箭头函数...

解析：

## 1、全局环境

全局环境下，this 始终指向全局对象（window），无论是否严格模式；

```js
// 在浏览器中，全局对象为 window 对象：
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
```

## 2、函数上下文调用

2.1 普通函数

普通函数内部的 this 分两种情况，严格模式和非严格模式。

（1）非严格模式下，没有被上一级的对象所调用,this 默认指向全局对象 window。

```js
function f1() {
  return this;
}
f1() === window; // true
```

（2）严格模式下，this 指向 undefined。

```js
function f2() {
  "use strict"; // 这里是严格模式
  return this;
}
f2() === undefined; // true
```

2.2 函数作为对象的方法

（1）函数有被上一级的对象所调用，那么 this 指向的就是上一级的对象。

（2）多层嵌套的对象，内部方法的 this 指向离被调用函数最近的对象（window 也是对象，其内部对象调用方法的 this 指向内部对象， 而非 window）。

```js
//方式1
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};
//当 o.f()被调用时，函数内的this将绑定到o对象。
console.log(o.f()); // logs 37

//方式2
var o = { prop: 37 };
function independent() {
  return this.prop;
}
//函数f作为o的成员方法调用
o.f = independent;
console.log(o.f()); // logs 37

//方式3
//this 的绑定只受最靠近的成员引用的影响
o.b = { g: independent, prop: 42 };
console.log(o.b.g()); // 42
```

特殊例子

```js
// 例子1
var o = {
  a: 10,
  b: {
    // a:12,
    fn: function() {
      console.log(this.a); //undefined
      console.log(this); //{fn: ƒ}
    }
  }
};
o.b.fn();
// 例子2
var o = {
  a: 10,
  b: {
    a: 12,
    fn: function() {
      console.log(this.a); //undefined
      console.log(this); //window
    }
  }
};
var j = o.b.fn;
j();
// this永远指向的是最后调用它的对象，也就是看它执行的时候是谁调用的，例子2中虽然函数fn是被对象b所引用，但是在将fn赋值给变量j的时候并没有执行所以最终指向的是window，这和例子1是不一样的，例子1是直接执行了fn
```

2.3 原型链中的 this

（1）如果该方法存在于一个对象的原型链上，那么 this 指向的是调用这个方法的对象，就像该方法在对象上一样。

```js
var o = {
  f: function() {
    return this.a + this.b;
  }
};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
```

上述例子中，对象 p 没有属于它自己的 f 属性，它的 f 属性继承自它的原型。当执行 p.f()时，会查找 p 的原型链，找到 f 函数并执行。因为 f 是作为 p 的方法调用的，所以函数中的 this 指向 p。

（2）相同的概念也适用于当函数在一个 getter 或者 setter 中被调用。用作 getter 或 setter 的函数都会把 this 绑定到设置或获取属性的对象。

（3）call()和 apply()方法：当函数通过 Function 对象的原型中继承的方法 call() 和 apply() 方法调用时， 其函数内部的 this 值可绑定到 call() & apply() 方法指定的第一个对象上， 如果第一个参数不是对象，JavaScript 内部会尝试将其转换成对象然后指向它。

```js
function add(c, d) {
  return this.a + this.b + c + d;
}
var o = { a: 1, b: 3 };

add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

function tt() {
  console.log(this);
}
// 第一个参数不是对象，JavaScript内部会尝试将其转换成对象然后指向它。
tt.call(5); // 内部转成 Number {[[PrimitiveValue]]: 5}
tt.call("asd"); // 内部转成 String {0: "a", 1: "s", 2: "d", length: 3, [[PrimitiveValue]]: "asd"}
```

（4）bind()方法：由 ES5 引入， 在 Function 的原型链上， Function.prototype.bind。通过 bind 方法绑定后， 函数将被永远绑定在其第一个参数对象上， 而无论其在什么情况下被调用。

```js
function f() {
  return this.a;
}

var g = f.bind({ a: "azerty" });
console.log(g()); // azerty

var o = { a: 37, f: f, g: g };
console.log(o.f(), o.g()); // 37, azerty
```

2.4 构造函数中的 this

当一个函数用作构造函数时（使用 new 关键字），它的 this 被绑定到正在构造的新对象。

构造器返回的默认值是 this 所指的那个对象，也可以手动返回其他的对象。

```js
function C() {
  this.a = 37;
}

var o = new C();
console.log(o.a); // 37
// 为什么this会指向o？首先new关键字会创建一个空的对象，然后会自动调用一个函数apply方法，将this指向这个空对象，这样的话函数内部的this就会被这个空的对象替代。

function C2() {
  this.a = 37;
  return { a: 38 }; // 手动设置返回{a:38}对象
}

o = new C2();
console.log(o.a); // 38
```

特殊例子

当 this 碰到 return 时

```js
// 例子1
function fn() {
  this.user = "追梦子";
  return {};
}
var a = new fn();
console.log(a.user); //undefined
// 例子2
function fn() {
  this.user = "追梦子";
  return function() {};
}
var a = new fn();
console.log(a.user); //undefined
// 例子3
function fn() {
  this.user = "追梦子";
  return 1;
}
var a = new fn();
console.log(a.user); //追梦子
// 例子4
function fn() {
  this.user = "追梦子";
  return undefined;
}
var a = new fn();
console.log(a.user); //追梦子
// 例子5
function fn() {
  this.user = "追梦子";
  return undefined;
}
var a = new fn();
console.log(a); //fn {user: "追梦子"}
// 例子6
// 虽然null也是对象，但是在这里this还是指向那个函数的实例，因为null比较特殊
function fn() {
  this.user = "追梦子";
  return null;
}
var a = new fn();
console.log(a.user); //追梦子

// 总结：如果返回值是一个对象，那么this指向的就是那个返回的对象，如果返回值不是一个对象那么this还是指向函数的实例。
```

2.5 setTimeout & setInterval

（1）对于延时函数内部的回调函数的 this 指向全局对象 window；

（2）可以通过 bind()方法改变内部函数 this 指向。

```js
//默认情况下代码
function Person() {
  this.age = 0;
  setTimeout(function() {
    console.log(this);
  }, 3000);
}

var p = new Person(); //3秒后返回 window 对象
//通过bind绑定
function Person() {
  this.age = 0;
  setTimeout(
    function() {
      console.log(this);
    }.bind(this),
    3000
  );
}

var p = new Person(); //3秒后返回构造函数新生成的对象 Person{...}
```

## 3、在 DOM 事件中

3.1 作为一个 DOM 事件处理函数

当函数被用作事件处理函数时，它的 this 指向触发事件的元素（针对 addEventListener 事件）。

```js
// 被调用时，将关联的元素变成蓝色
function bluify(e) {
  //this指向所点击元素
  console.log("this === e.currentTarget", this === e.currentTarget); // 总是 true
  // 当 currentTarget 和 target 是同一个对象时为 true
  console.log("this === e.target", this === e.target);
  this.style.backgroundColor = "#A5D9F3";
}

// 获取文档中的所有元素的列表
var elements = document.getElementsByTagName("*");

// 将bluify作为元素的点击监听函数，当元素被点击时，就会变成蓝色
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", bluify, false);
}
```

3.2 作为一个内联事件处理函数

（1）当代码被内联处理函数调用时，它的 this 指向监听器所在的 DOM 元素；

（2）当代码被包括在函数内部执行时，其 this 指向等同于 普通函数直接调用的情况，即在非严格模式指向全局对象 window，在严格模式指向 undefined：

```html
<button onclick="console.log(this)">show me</button>
<button onclick="(function () {console.log(this)})()">show inner this</button>
<button onclick="(function () {'use strict'; console.log(this)})()">
  use strict
</button>
```

```
// 控制台打印
<button onclick="console.log(this)">show me</button>
Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
undefined
```

## 4、箭头函数

4.1 全局环境中

在全局代码中，箭头函数被设置为全局对象：

```js
var globalObject = this;
var foo = () => this;
console.log(foo() === globalObject); // true
```

4.2 this 捕获上下文

箭头函数没有自己的 this，而是使用箭头函数所在的作用域的 this，即指向箭头函数定义时（而不是运行时）所在的作用域。

```js
//1、箭头函数在函数内部，以非方法的方法使用
function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
  }, 3000);
}
var p = new Person(); //Person{age: 0}

//普通函数作为内部函数
function Person() {
  this.age = 0;
  setInterval(function() {
    console.log(this);
    this.age++;
  }, 3000);
}
var p = new Person(); //Window{...}
```

4.2 this 捕获上下文

箭头函数没有自己的 this，而是使用箭头函数所在的作用域的 this，即指向箭头函数定义时（而不是运行时）所在的作用域。

```js
//1、箭头函数在函数内部，以非方法的方法使用
function Person() {
  this.age = 0;
  setInterval(() => {
    console.log(this);
    this.age++;
  }, 3000);
}
var p = new Person(); //Person{age: 0}

//普通函数作为内部函数
function Person() {
  this.age = 0;
  setInterval(function() {
    console.log(this);
    this.age++;
  }, 3000);
}
var p = new Person(); //Window{...}
```

在 setTimeout 中的 this 指向了构造函数新生成的对象，而普通函数指向了全局 window 对象。

4.3 箭头函数作为对象的方法使用

箭头函数作为对象的方法使用，指向全局 window 对象；而普通函数作为对象的方法使用，则指向调用的对象。

```js
var obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
};
obj.b(); // undefined window{...}
obj.c(); // 10 Object {...}
```

4.4 箭头函数中，call()、apply()、bind()方法无效

```js
var adder = {
  base: 1,
  //对象的方法内部定义箭头函数，this是箭头函数所在的作用域的this，
  //而方法add的this指向adder对象，所以箭头函数的this也指向adder对象。
  add: function(a) {
    var f = v => v + this.base;
    return f(a);
  },
  //普通函数f1的this指向window
  add1: function() {
    var f1 = function() {
      console.log(this);
    };
    return f1();
  },
  addThruCall: function inFun(a) {
    var f = v => v + this.base;
    var b = {
      base: 2
    };

    return f.call(b, a);
  }
};

console.log(adder.add(1)); // 输出 2
adder.add1(); //输出全局对象 window{...}
console.log(adder.addThruCall(1)); // 仍然输出 2（而不是3，其内部的this并没有因为call() 而改变，其this值仍然为函数inFun的this值，指向对象adder
```

4.5 this 指向固定化

箭头函数可以让 this 指向固定化，这种特性很有利于封装回调函数

```js
var handler = {
  id: "123456",

  init: function() {
    document.addEventListener(
      "click",
      event => this.doSomething(event.type),
      false
    );
  },

  doSomething: function(type) {
    console.log("Handling " + type + " for " + this.id);
  }
};
```

上面代码的 init 方法中，使用了箭头函数，这导致这个箭头函数里面的 this，总是指向 handler 对象。如果不使用箭头函数则指向全局 document 对象。

4.6 箭头函是不适用场景

（1）箭头函数不适合定义对象的方法（方法内有 this），因为此时指向 window；

（2）需要动态 this 的时候，也不应使用箭头函数。

```js
//例1，this指向定义箭头函数所在的作用域，它位于对象cat内，但cat不能构成一个作用域，所以指向全局window，改成普通函数后this指向cat对象。
const cat = {
  lives: 9,
  jumps: () => {
    this.lives--;
  }
};

//例2，此时this也是指向window，不能动态监听button，改成普通函数后this指向按钮对象。
var button = document.getElementById("press");
button.addEventListener("click", () => {
  this.classList.toggle("on");
});
```




## 81.call 与 apply 区别

答案：第二个参数的类型不同

解析：

call 和 apply 的作用，完全一样，唯一的区别就是在参数上面。

call 接收的参数不固定，第一个参数是函数体内 this 的指向，第二个参数以下是依次传入的参数。

apply 接收两个参数，第一个参数也是函数体内 this 的指向。第二个参数是一个集合对象（数组或者类数组）




## 82.正则表达式构造函数 var reg = new RegExp('xxx')与正则表达字面量 var reg = // 有什么不同？

答案：使用正则表达字面量的效率更高

解析：下面的示例代码演示了两种可用于创建正则表达式以匹配反斜杠的方法：

```js
//正则表达字面量
var re = /\\/gm;

//正则构造函数
var reg = new RegExp("\\\\", "gm");

var foo = "abc\\123"; // foo的值为"abc\123"
console.log(re.test(foo)); //true
console.log(reg.test(foo)); //true
```

如上面的代码中可以看到，使用正则表达式字面量表示法时式子显得更加简短，而且不用按照类似类（class-like）的构造函数方式思考。

其次，在当使用构造函数的时候，在这里要使用四个反斜杠才能匹配单个反斜杠。这使得正则表达式模式显得更长，更加难以阅读和修改。正确来说，当使用 RegExp()构造函数的时候，不仅需要转义引号（即\"表示"），并且通常还需要双反斜杠（即\\表示一个\）。

使用 new RegExp()的原因之一在于，某些场景中无法事先确定模式，而只能在运行时以字符串方式创建。

[参考](https://www.cnblogs.com/coco1s/p/4008955.html)




## 83.js 中 callee 与 caller 的作用

答案：

1. caller 返回一个调用当前函数的引用 如果是由顶层调用的话 则返回 null

（举个栗子哈 caller 给你打电话的人 谁给你打电话了 谁调用了你 很显然是下面 a 函数的执行 只有在打电话的时候你才能知道打电话的人是谁 所以对于函数来说 只有 caller 在函数执行的时候才存在）

```js
var callerTest = function() {
  console.log(callerTest.caller);
};
function a() {
  callerTest();
}
a(); //输出function a() {callerTest();}
callerTest(); //输出null
```

2. callee 返回一个正在被执行函数的引用 （这里常用来递归匿名函数本身 但是在严格模式下不可行）

   callee 是 arguments 对象的一个成员 表示对函数对象本身的引用 它有个 length 属性（代表形参的长度）

```js
var c = function(x, y) {
  console.log(arguments.length, arguments.callee.length, arguments.callee);
};
c(1, 2, 3); //输出3 2 function(x,y) {console.log(arguments.length,arguments.callee.length,arguments.callee)}
```




## 84.异步加载 js 的方法 

答案：

方案一：`<script>`标签的 async="async"属性（详细参见：script 标签的 async 属性）

点评：HTML5 中新增的属性，Chrome、FF、IE9&IE9+均支持（IE6~8 不支持）。此外，这种方法不能保证脚本按顺序执行。

方案二：`<script>`标签的 defer="defer"属性

点评：兼容所有浏览器。此外，这种方法可以确保所有设置 defer 属性的脚本按顺序执行。

方案三：动态创建`<script>`标签

示例：

```html
<!DOCTYPE html>
<html>
  <head>
    <script type="text/javascript">
      (function() {
        var s = document.createElement_x("script");
        s.type = "text/javascript";
        s.src = "http://code.jquery.com/jquery-1.7.2.min.js";
        var tmp = document.getElementsByTagName_r("script")[0];
        tmp.parentNode.insertBefore(s, tmp);
      })();
    </script>
  </head>
  <body>
    <img src="http://xybtv.com/uploads/allimg/100601/48-100601162913.jpg" />
  </body>
</html>
```

点评：兼容所有浏览器。

方案四：AJAX eval（使用 AJAX 得到脚本内容，然后通过 eval_r(xmlhttp.responseText)来运行脚本）

点评：兼容所有浏览器。

方案五：iframe 方式（这里可以参照：iframe 异步加载技术及性能 中关于 Meboo 的部分）

点评：兼容所有浏览器。




## 85.去除数组重复成员的方法

答案：

方法 1 扩展运算符和 Set 结构相结合，就可以去除数组的重复成员

```js
// 去除数组的重复成员
[...new Set([1, 2, 2, 3, 4, 5, 5])];
// [1, 2, 3, 4, 5]
```

方法 2

```js
function dedupe(array) {
  return Array.from(new Set(array));
}
dedupe([1, 1, 2, 3]); // [1, 2, 3]
```


方法 3（ES5）

```js
function unique(arry) {
  const temp = [];
  arry.forEach(e => {
    if (temp.indexOf(e) == -1) {
      temp.push(e);
    }
  });

  return temp;
}
```




## 86.去除字符串里面的重复字符

答案：

最简单的方式

```js
[...new Set("ababbc")].join(""); // "abc"
```




## 87.求数组的最大值

答案：Math.max.apply(null, 数组)

```js
var a = [1, 2, 3, 5];
alert(Math.max.apply(null, a)); //最大值
alert(Math.min.apply(null, a)); //最小值
```




## 88.JS 中 文档碎片的理解和使用

答案：

```js
// 1、什么是文档碎片？

document.createDocumentFragment(); // 一个容器，用于暂时存放创建的dom元素

// 2、文档碎片有什么用？

// 将需要添加的大量元素,先添加到文档碎片中，再将文档碎片添加到需要插入的位置，大大 减少dom操作，提高性能（IE和火狐比较明显）
```

解析：

```js
// 普通方式：（操作了100次dom）
for (var i = 100; i > 0; i--) {
  var elem = document.createElement("div");
  document.body.appendChild(elem); //放到body中
}

//  文档碎片：(操作1次dom)
var df = document.createDocumentFragment();
for (var i = 100; i > 0; i--) {
  var elem = document.createElement("div");
  df.appendChild(elem);
}
//最后放入到页面上
document.body.appendChild(df);
```




## 89.原型的作用 以及什么是原型

答案：作用：实现资源共享

什么是原型:实例在被创建的那一刻，构造函数的 prototype 属性的值。




## 90.javascript 里面的继承怎么实现，如何避免原型链上面的对象共享

答案：用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的 extend()函数，很多前端框架都有封装的，就是用一个空函数当做中间变量




## 91.简单介绍下 JS 的原型和原型链

答案：




## 92.说说你对作用域链的理解

答案：作用域链的作用是保证执行环境里有权访问的变量和函数是有序的，作用域链的变量只能向上访问，变量访问到 window 对象即被终止，作用域链向下访问变量是不被允许的。




## 93.JavaScript 原型，原型链 ? 有什么特点？

答案：

- 原型对象也是普通的对象，是对象一个自带隐式的`__proto__`属性，原型也有可能有自己的原型，如果一个原型对象的原型不为 null 的话，我们就称之为原型链。
- 原型链是由一些用来继承和共享属性的对象组成的（有限的）对象链。
- JavaScript 的数据对象有那些属性值？
  　　 writable：这个属性的值是否可以改。
        　　 configurable：这个属性的配置是否可以删除，修改。
        　　 enumerable：这个属性是否能在 for…in 循环中遍历出来或在 Object.keys 中列举出来。
        　　 value：属性值。
- 当我们需要一个属性的时，Javascript 引擎会先看当前对象中是否有这个属性， 如果没有的话，就会查找他的 Prototype 对象是否有这个属性。

```js
function clone(proto) {
  function Dummy() {}
  Dummy.prototype = proto;
  Dummy.prototype.constructor = Dummy;
  return new Dummy(); //等价于Object.create(Person);
}
function object(old) {
  function F() {}
  F.prototype = old;
  return new F();
}
var newObj = object(oldObject);
```




## 94.请解释什么是事件代理

答案：




## 95.offsetWidth/offsetHeight,clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别

答案：




## 96.谈谈你对 AMD、CMD 的理解

答案：




## 97.web 开发中会话跟踪的方法有哪些

答案：




## 98.说几条写 JavaScript 的基本规范？

答案：




## 99.JavaScript 有几种类型的值？你能画一下他们的内存图吗？

答案：




## 100.eval 是做什么的？

答案：

1. 它的功能是把对应的字符串解析成 JS 代码并运行
2. 应该避免使用 eval，不安全，非常耗性能（2 次，一次解析成 js 语句，一次执行）




## 101.js 延迟加载的方式有哪些？

答案：defer 和 async、动态创建 DOM 方式（用得最多）、按需异步载入 js




## 102.attribute 和 property 的区别是什么？

答案：




## 103.什么是面向对象编程及面向过程编程，它们的异同和优缺点

答案：




## 104.谈一谈你理解的函数式编程？

答案：




## 105.对原生 Javascript 了解程度

答案：




## 106.Js 动画与 CSS 动画区别及相应实现

答案：




## 107.快速的让一个数组乱序

答案：

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(arr.sort(() => 0.5 - Math.random()))




## 108.prototype 和__proto__的关系是什么？

答案：




## 109.UIWebView 和 JavaScript 之间是怎么交互的?

答案：




## 110.IE 与火狐的事件机制有什么区别？如何阻止冒泡

答案：

1.  我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。
2.  事件处理机制：IE 是事件冒泡、火狐是 事件捕获；
3.  ev.stopPropagation();




## 111.在 js 中哪些会被隐式转换为 false

答案：Undefined、null、关键字 false、NaN、零、空字符串




## 112.列举浏览器对象模型 BOM 里常用的至少 4 个对象，并列举 window 对象的常用方法至少 5 个？

答案：

对象：Window，document，location，screen，history，navigator。
方法：Alert()，confirm()，prompt()，open()，close()。




## 113.class.forname 的作用?为什么要用?

答案：

```
1、获取Class对象的方式：类名.class、对象.getClass()、Class.forName(“类名”);
2、通过Class对象自审
3、动态调用方法
```




## 114.外部 JS 文件出现中文字符，会出现什么问题，怎么解决？

答案：会出现乱码，加 charset="GB2312";




## 115.定时器 setInterval 有一个有名函数 fn1，setInterval（fn1,500）与 setInterval（fn1(),500）有什么区别？

答案：第一个是重复执行每 500 毫秒执行一次，后面一个只执行一次。




## 116.自动分号

答案：有时 JavaScript 会自动为代码行补上缺失的分号，即自动分号插入（Automatic SemicolonInsertion，ASI）。<br>
因为如果缺失了必要的 ; ，代码将无法运行，语言的容错性也会降低。ASI 能让我们忽略那些不必要的。<br>
请注意，ASI 只在换行符处起作用，而不会在代码行的中间插入分号。<br>
如果 JavaScript 解析器发现代码行可能因为缺失分号而导致错误，那么它就会自动补上分号。并且，只有在代码行末尾与换行符之间除了空格和注释之外没有别的内容时，它才会这样做。




## 117.你用过 require.js 吗？它有什么特性？

答案：

（1）实现 js 文件的异步加载，避免网页失去响应；
（2）管理模块之间的依赖性，便于代码的编写和维护。




## 118.如何阻止事件冒泡和默认事件？

答案：

阻止浏览器的默认行为
window.event?window.event.returnValue=false:e.preventDefault();

停止事件冒泡
window.event?window.event.cancelBubble=true:e.stopPropagation();
原生 JavaScript 中，return false;只阻止默认行为，不阻止冒泡，jQuery 中的 return false;既阻止默认行为，又阻止冒泡




## 119.分别阐述 split(),slice(),splice(),join()？

答案：

- join()用于把数组中的所有元素拼接起来放入一个字符串。所带的参数为分割字符串的分隔符，默认是以逗号分开。归属于 Array
- split()即把字符串分离开，以数组方式存储。归属于 Stringstring
- slice() 方法可从已有的数组中返回选定的元素。该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()
- splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。返回的是含有被删除的元素的数组。




## 120.事件、IE 与火狐的事件机制有什么区别？ 如何阻止冒泡？

答案：

1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为
2. 事件处理机制：IE 是事件冒泡、firefox 同时支持两种事件模型，也就是：捕获型事件和冒泡型事件
3. ev.stopPropagation();
   注意旧 ie 的方法：ev.cancelBubble = true;




## 121.内置函数(原生函数)

答案：

- String
- Number
- Boolean
- Object
- Function
- Array
- Date
- RegExp
- Error
- Symbol




## 122.对象浅拷贝和深拷贝有什么区别

答案：在 `JS` 中，除了基本数据类型，还存在对象、数组这种引用类型。
基本数据类型，拷贝是直接拷贝变量的值，而引用类型拷贝的其实是变量的地址。

```
let o1 = {a: 1}
let o2 = o1
```

在这种情况下，如果改变 `o1` 或 `o2` 其中一个值的话，另一个也会变，因为它们都指向同一个地址。

```
o2.a = 3
console.log(o1.a) // 3
```

而浅拷贝和深拷贝就是在这个基础之上做的区分，如果在拷贝这个对象的时候，只对基本数据类型进行了拷贝，而对引用数据类型只是进行了引用的传递，而没有重新创建一个新的对象，则认为是浅拷贝。反之，在对引用数据类型进行拷贝的时候，创建了一个新的对象，并且复制其内的成员变量，则认为是深拷贝。




## 123.JS 怎么实现一个类。怎么实例化这个类

答案：严格来讲 js 中并没有类的概念，不过 js 中的函数可以作为构造函数来使用，通过 new 来实例化，其实函数本身也是一个对象。




## 124.如何编写高性能的 Javascript？

答案：

- 使用 DocumentFragment 优化多次 append
- 通过模板元素 clone ，替代 createElement
- 使用一次 innerHTML 赋值代替构建 dom 元素
- 使用 firstChild 和 nextSibling 代替 childNodes 遍历 dom 元素
- 使用 Array 做为 StringBuffer ，代替字符串拼接的操作
- 将循环控制量保存到局部变量
- 顺序无关的遍历时，用 while 替代 for
- 将条件分支，按可能性顺序从高到低排列
- 在同一条件子的多（ >2 ）条件分支时，使用 switch 优于 if
- 使用三目运算符替代条件分支
- 需要不断执行的时候，优先考虑使用 setInterval




## 125.数组和对象有哪些原生方法，列举一下？

答案：

- Array.concat( ) 连接数组
- Array.join( ) 将数组元素连接起来以构建一个字符串
- Array.length 数组的大小
- Array.pop( ) 删除并返回数组的最后一个元素
- Array.push( ) 给数组添加元素
- Array.reverse( ) 颠倒数组中元素的顺序
- Array.shift( ) 将元素移出数组
- Array.slice( ) 返回数组的一部分
- Array.sort( ) 对数组元素进行排序
- Array.splice( ) 插入、删除或替换数组的元素
- Array.toLocaleString( ) 把数组转换成局部字符串
- Array.toString( ) 将数组转换成一个字符串
- Array.unshift( ) 在数组头部插入一个元素

- Object.hasOwnProperty( ) 检查属性是否被继承
- Object.isPrototypeOf( ) 一个对象是否是另一个对象的原型
- Object.propertyIsEnumerable( ) 是否可以通过 for/in 循环看到属性
- Object.toLocaleString( ) 返回对象的本地字符串表示
- Object.toString( ) 定义一个对象的字符串表示
- Object.valueOf( ) 指定对象的原始值




## 126.documen.write 和 innerHTML 的区别?

答案：

1. document.write 是重写整个 document, 写入内容是字符串的 html
2. innerHTML 是 HTMLElement 的属性，是一个元素的内部 html 内容




## 127.让你自己设计实现一个 requireJS，你会怎么做？

答案：核心是实现 js 的加载模块，维护 js 的依赖关系，控制好文件加载的先后顺序




## 128.requireJS 的核心原理是什么？（如何动态加载的？如何避免多次加载的？如何缓存的？）

答案：核心是 js 的加载模块，通过正则匹配模块以及模块的依赖关系，保证文件加载的先后顺序，根据文件的路径对加载过的文件做了缓存




## 129.Javascript 中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？

答案：HasOwnProperty




## 130.原型继承

答案：所有的 JS 对象都有一个 prototype 属性，指向它的原型对象。当试图访问一个对象的属性时，如果没有在该对象上找到，它还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。




## 131.用原生 JavaScript 的实现过什么功能吗？

答案：轮播图、手风琴、放大镜、3D动画效果等，切记，所答的一定要知道实现原理！，不知道还不如不说！




## 132.javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？

答案：意思是使用严格模式，使用严格模式，一些不规范的语法将不再支持




## 133.简述创建函数的几种方式

答案：

```
第一种（函数声明）：
function sum1(num1,num2){
   return num1+num2;
}
第二种（函数表达式）：
var sum2 = function(num1,num2){
   return num1+num2;
}
第三种（函数对象方式）：
var sum3 = new Function("num1","num2","return num1+num2");
```




## 134.window.location.search() 返回的是什么？

答案：查询(参数)部分。除了给动态语言赋值以外，我们同样可以给静态页面,并使用 javascript 来获得相信应的参数值
返回值：?ver=1.0&id=timlq 也就是问号后面的！




## 135.window.location.hash  返回的是什么？

答案：锚点 ，  返回值：#love ；




## 136.window.location.reload() 作用？

答案：刷新当前页面




## 137.为什么不能定义 1px 左右的 div 容器？

答案：
IE6 下这个问题是因为默认的行高造成的，解决的方法也有很多，例如：
overflow:hidden | zoom:0.08 | line-height:1px




## 138.BOM 对象有哪些，列举 window 对象？

答案：

```
 1、window对象 ，是JS的最顶层对象，其他的BOM对象都是window对象的属性；
 2、document对象，文档对象；
 3、location对象，浏览器当前URL信息；
 4、navigator对象，浏览器本身信息；
 5、screen对象，客户端屏幕信息；
 6、history对象，浏览器访问历史信息；
```




## 139.简述 readonly 与 disabled 的区别

答案：




## 140.为什么扩展 javascript 内置对象不是好的做法？

答案：




## 141.什么是三元表达式？“三元”表示什么意思？

答案：




## 142.我们给一个 dom 同时绑定两个点击事件，一个用捕获，一个用冒泡，你来说下会执行几次事件，然后会先执行冒泡还是捕获

答案：




## 144.简述一下 Handlebars 的基本用法？

答案：没有用过的话说出它是干什么的即可




## 143.简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？

答案：




## 145.前端 templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?

答案：

- Web 模板引擎是为了使用户界面与业务数据（内容）分离而产生的，
- Mustache 是一个 logic-less （轻逻辑）模板解析引擎，它的优势在于可以应用在 Javascript、PHP、Python、Perl 等多种编程语言中。
- Underscore 封装了常用的 JavaScript 对象操作方法，用于提高开发效率。
- Handlebars 是 JavaScript 一个语义模板库，通过对 view 和 data 的分离来快速构建 Web 模板。




## 146.知道什么是 webkit 么? 知道怎么用浏览器的各种工具来调试和 debug 代码么?

答案：Webkit 是浏览器引擎，包括 html 渲染和 js 解析功能，手机浏览器的主流内核，与之相对应的引擎有 Gecko（Mozilla Firefox 等使用）和 Trident（也称 MSHTML，IE 使用）。
对于浏览器的调试工具要熟练使用，主要是页面结构分析，后台请求信息查看，js 调试工具使用，熟练使用这些工具可以快速提高解决问题的效率




## 147.如何测试前端代码? 知道 BDD, TDD, Unit Test 么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?

答案：了解 BDD 行为驱动开发与 TDD 测试驱动开发已经单元测试相关概念




## 148.JavaScript 的循环语句有哪些？

答案：while for do while forEach




## 149.作用域-编译期执行期以及全局局部作用域问题

答案：js 执行主要的两个阶段：预解析和执行期




## 150.如何添加 html 元素的事件，有几种方法？请列举

答案：直接在标签里添加；在元素上添加、使用事件注册函数添加




## 151.列举浏览器对象模型 BOM 里常用的至少 4 个对象，并列举 window 对象的常用方法至少 5 个

答案：

对象：Window document location screen history navigator

方法：Alert() confirm() prompt() open() close()




## 152.事件绑定的方式

答案：

- 嵌入 dom

```html
<button onclick="func()">按钮</button>
```

- 直接绑定

```js
btn.onclick = function() {};
```

- 事件监听

```js
btn.addEventListener("click", function() {});
```




## 153.事件循环

答案：事件循环是一个单线程循环，用于监视调用堆栈并检查是否有工作即将在任务队列中完成。如果调用堆栈为空并且任务队列中有回调函数，则将回调函数出队并推送到调用堆栈中执行。




## 154.事件模型

答案：

- DOM0<br>
  直接绑定

```
<input onclick="sayHi()"/>

btn.onclick = function() {}
btn.onclick = null
```

- DOM2<br>
  DOM2 级事件可以冒泡和捕获
  通过 addEventListener 绑定
  通过 removeEventListener 解绑

```
// 绑定
btn.addEventListener('click', sayHi)
// 解绑
btn.removeEventListener('click', sayHi)
```

- DOM3<br>
  DOM3 具有更多事件类型
  DOM3 级事件在 DOM2 级事件的基础上添加了更多的事件类型，全部类型如下：

```
UI事件，当用户与页面上的元素交互时触发，如：load、scroll
焦点事件，当元素获得或失去焦点时触发，如：blur、focus
鼠标事件，当用户通过鼠标在页面执行操作时触发如：dbclick、mouseup
滚轮事件，当使用鼠标滚轮或类似设备时触发，如：mousewheel
文本事件，当在文档中输入文本时触发，如：textInput
键盘事件，当用户通过键盘在页面上执行操作时触发，如：keydown、keypress
合成事件，当为IME（输入法编辑器）输入字符时触发，如：compositionstart
变动事件，当底层DOM结构发生变化时触发，如：DOMsubtreeModified
```

解析：[参考](https://www.jianshu.com/p/3acdf5f71d5b)




## 155.如何自定义事件

答案：

1. 原生提供了 3 个方法实现自定义事件
2. createEvent，设置事件类型，是 html 事件还是 鼠标事件
3. initEvent 初始化事件，事件名称，是否允许冒泡，是否阻止自定义事件
4. dispatchEvent 触发事件

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Creating_and_triggering_events)




## 156.target 和 currentTarget 区别

答案：

- event.target<br>
  返回触发事件的元素
- event.currentTarget<br>
  返回绑定事件的元素




## 157.prototype 和__proto__的关系是什么

答案：

所有的对象都拥有__proto__属性，它指向对象构造函数的 prototype 属性

```
let obj = {}
obj.__proto__ === Object.prototype // true

function Test(){}
test.__proto__ == Test.prototype // true
```

所有的函数都同时拥有__proto__和 protytpe 属性
函数的__proto__指向自己的函数实现 函数的 protytpe 是一个对象 所以函数的 prototype 也有__proto__属性 指向 Object.prototype

```
function func() {}
func.prototype.__proto__ === Object.prototype // true
```

Object.prototype.__proto__指向 null

```
Object.prototype.__proto__ // null
```




## 158.什么是原型属性？

答案：从构造函数的prototype属性出发找到原型，这时候就把原型称之为构造函数的原型属性




## 159.什么是原型对象？

答案：从实例的__proto__出发，找到原型，这时候就把原型称之为实例的原型对象。




## 160.使用 let、var 和 const 创建变量有什么区别

答案：

用 var 声明的变量的作用域是它当前的执行上下文，它可以是嵌套的函数，也可以是声明在任何函数外的变量。let 和 const 是块级作用域，意味着它们只能在最近的一组花括号（function、if-else 代码块或 for 循环中）中访问。

```js
function foo() {
  // 所有变量在函数中都可访问
  var bar = "bar";
  let baz = "baz";
  const qux = "qux";

  console.log(bar); // bar
  console.log(baz); // baz
  console.log(qux); // qux
}

console.log(bar); // ReferenceError: bar is not defined
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined
```

```js
if (true) {
  var bar = "bar";
  let baz = "baz";
  const qux = "qux";
}

// 用 var 声明的变量在函数作用域上都可访问
console.log(bar); // bar
// let 和 const 定义的变量在它们被定义的语句块之外不可访问
console.log(baz); // ReferenceError: baz is not defined
console.log(qux); // ReferenceError: qux is not defined
```

var 会使变量提升，这意味着变量可以在声明之前使用。let 和 const 不会使变量提升，提前使用会报错。

```js
console.log(foo); // undefined

var foo = "foo";

console.log(baz); // ReferenceError: can't access lexical declaration 'baz' before initialization

let baz = "baz";

console.log(bar); // ReferenceError: can't access lexical declaration 'bar' before initialization

const bar = "bar";
```

用 var 重复声明不会报错，但 let 和 const 会。

```js
var foo = "foo";
var foo = "bar";
console.log(foo); // "bar"

let baz = "baz";
let baz = "qux"; // Uncaught SyntaxError: Identifier 'baz' has already been declared
```

let 和 const 的区别在于：let 允许多次赋值，而 const 只允许一次。

```js
// 这样不会报错。
let foo = "foo";
foo = "bar";

// 这样会报错。
const baz = "baz";
baz = "qux";
```

解析：[参考](https://github.com/yangshun/front-end-interview-handbook/blob/master/Translations/Chinese/questions/javascript-questions.md#%E4%BD%BF%E7%94%A8letvar%E5%92%8Cconst%E5%88%9B%E5%BB%BA%E5%8F%98%E9%87%8F%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB)




## 161.JSON 的了解

答案：JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它是基于 JavaScript 的一个子集。数据格式简单, 易于读写, 占用带宽小。




## 162.事件代理怎么实现？

答案：在元素的父节点注册事件，通过事件冒泡，在父节点捕获事件




## 163.什么是属性搜索原则？

答案：

1. 首先会去查找对象本身上面有没有这个属性，有的话，就返回这个属性
2. 如果对象本身上面没有这个属性，就到它的原型上面去查找，如果有，就返回
3. 就到原型的原型上面去查找有没有这个属性，如果查找到最后一只没有找到，就返回一个undefined




## 164.如何避免重绘或者重排？

答案：

1. 分离读写操作
```
var curLeft=div.offsetLeft;
var curTop=div.offsetTop;
div.style.left=curLeft+1+'px';
div.style.top=curTop+1+'px';
```
2. 样式集中改变
```
可以添加一个类，样式都在类中改变
```
3. 可以使用absolute脱离文档流。

4. 使用 display:none ，不使用 visibility，也不要改变 它的 z-index

5. 能用css3实现的就用css3实现。



## 165.说下函数式编程的理解

答案：

1.什么是函数式编程？

函数式编程是种编程方式，它将电脑运算视为函数的计算。函数编程语言最重要的基础是λ演算（lambda calculus），而且λ演算的函数可以接受函数当作输入（参数）和输出（返回值）。

2.优势特点

代码简洁、开发快速、命令式实现、函数式实现、易于理解，抽象度高、没有副作用，变量无状态



## 166.forEach，map和filter的区别（哔哩哔哩）

答案：

* filter函数，顾名思义，它是一个用来过滤的函数。他可以通过指定的过滤条件，删选出数组中符合条件的元素，并返回。

* map函数，这个函数与filter函数不同之处在于，filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。而map则会返回传入函数return的值。

* forEach函数，可以实现对数组的遍历，和map函数与filter函数不同的是它没有返回值。



## 167.delete 数组的 item，数组的 length 是否会 -1

答案：不会

解析：

### delete Array[index]

```js
const arr = ['a', 'b', 'c', 'd', 'e'];
let result = delete arr[1];
console.log(result); // true;
console.log(arr); // ['a', undefined, 'c', 'd', 'e']
console.log(arr.length); // 5
console.log(arr[1]); // undefined
```
使用delete删除元素，返回true和false,true表示删除成功，false表示删除失败。使用delete删除数组元素并不会改变原数组的长度，只是把被删除元素的值变为undefined。



## 168.给出 ['1', '3', '10'].map(parseInt) 执行结果

答案：[1, NaN, 2]



## 169.执行上下文

答案：

执行上下文可以简单理解为一个对象:


它包含三个部分:

* 变量对象(VO)
* 作用域链(词法作用域)
* this指向

它的类型:

* 全局执行上下文
* 函数执行上下文
* eval执行上下文

代码执行过程:

* 创建 全局上下文 (global EC)
* 全局执行上下文 (caller) 逐行 自上而下 执行。遇到函数时，函数执行上下文 (callee) 被push到执行栈顶层
* 函数执行上下文被激活，成为 active EC, 开始执行函数中的代码，caller 被挂起
* 函数执行完后，callee 被pop移除出执行栈，控制权交还全局上下文 (caller)，继续执行




## 170.怎样理解setTimeout 执行误差

答案：定时器是属于 宏任务(macrotask) 。如果当前 执行栈 所花费的时间大于 定时器 时间，那么定时器的回调在 宏任务(macrotask) 里，来不及去调用，所有这个时间会有误差。

解析：[参考](https://juejin.im/post/5cfc9d266fb9a07edb3939ea?utm_medium=hao.caibaojian.com&utm_source=hao.caibaojian.com)



## 171.数组降维

答案：

1.数组字符串化
```js
let arr = [[222, 333, 444], [55, 66, 77], {a: 1} ]
  arr += '';
  arr = arr.split(',');

console.log(arr); // ["222", "333", "444", "55", "66", "77", "[object Object]"]
```
这也是比较简单的一种方式，从以上例子中也能看到问题，所有的元素会转换为字符串，且元素为对象类型会被转换为 "[object Object]" ，对于同一种类型数字或字符串还是可以的。

2.利用apply和concat转换
```js
function reduceDimension(arr) {
    return Array.prototype.concat.apply([], arr);
}

console.log(reduceDimension([[123], 4, [7, 8],[9, [111]]]));// [123, 4, 7, 8, 9, Array(1)]
```

3.递归
```js
function reduceDimension(arr){
    let ret = [];
    let toArr = function(arr){
        arr.forEach(function(item){
            item instanceof Array ? toArr(item) : ret.push(item);
        });
    }
    toArr(arr);
    return ret;
}
```

4.Array​.prototype​.flat()
```js
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//使用 Infinity 作为深度，展开任意深度的嵌套数组
arr3.flat(Infinity);
// [1, 2, 3, 4, 5, 6]
```

5.使用 reduce、concat 和递归无限反嵌套多层嵌套的数组
```js
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];

function flattenDeep(arr1) {
   return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}
flattenDeep(arr1);
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
```

解析：[參考](https://blog.csdn.net/xufeiayang/article/details/90111775)



## 172.为什么for循环嵌套顺序会影响性能？

答案：把循环次数大的放在内层，执行时间会比较短

```js
var t1 = new Date().getTime()
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 1000; j++) {
    for (let k = 0; k < 10000; k++) {
    }
  }
}
var t2 = new Date().getTime()
console.log('first time', t2 - t1)
```
|   变量   |   实例化(次数)   |   初始化(次数)   |   比较(次数)   |   自增(次数)   |
| -------- | --------------- | --------------- | ------------- | ------------- |
|    i     |        1        | 1            | 10               |    10    |
|    j     |       10        | 10           | 10 * 100         |   10 * 100   |
|    k     | 	  10 * 100     | 10 * 100     | 10 * 100 * 1000	 |  10 * 100 * 1000   |
```js
for (let i = 0; i < 10000; i++) {
  for (let j = 0; j < 1000; j++) {
    for (let k = 0; k < 100; k++) {

    }
  }
}
var t3 = new Date().getTime()
console.log('two time', t3 - t2)
```
|   变量   |   实例化(次数)   |   初始化(次数)   |   比较(次数)   |   自增(次数)   |
| -------- | --------------- | --------------- | ------------- | ------------- |
|    i     |        1        | 1            | 1000               |    1000    |
|    j     |       1000        | 1000           | 1000 * 100       |   1000 * 100   |
|    k     | 	  1000 * 100     | 1000 * 100     | 1000 * 100 * 10		 |  1000 * 100 * 10	   |

解析：[參考](https://blog.csdn.net/weixin_42182143/article/details/98682537)



## 173.轮播图实现原理

答案：
```
1.图片移动实现原理：
利用浮动将所有所有照片依次排成一行，给这一长串图片添加一个父级的遮罩，每次只显示一张图，其余的都隐藏起来。对图片添加绝对定位，通过控制left属性，实现照片的移动。

2.图片移动动画原理：
从a位置移动到b位置，需要先计算两点之间的差值，通过差值和时间间隔，计算出每次移动的步长，通过添加定时器，每次移动相同的步长，实现动画效果。

3.图片定位停止原理：
每一张照片都有相同的宽度，每张照片都有一个绝对的定位数值，通过检测定每次移动后，照片当前位置和需要到达位置之间的距离是否小于步长，如果小于，说明已经移动到位，可以将定时器清除，来停止动画。

4图片切换原理：
在全局设置一个变量，记录当前图片的位置，每次切换或跳转时，只需要将数值修改，并调用图片页数转像素位置函数，再调用像素运动函数即可。

5.自动轮播原理：
设置定时器，一定时间间隔后，将照片标记加1，然后开始切换。

6.左右点击切换原理：
修改当前位置标记，开始切换。这里需要注意与自动轮播之间的冲突。当点击事件触发之后，停止自动轮播计时器，开始切换。当动画结束后再次添加自动轮播计时器。

7.无缝衔接原理：
需要无缝衔接，难度在于最后一页向后翻到第一页，和第一页向前翻到最后一页。由于图片的基本移动原理。要想实现无缝衔接，两张图片就必须紧贴在一起。所以在第一张的前面需要添加最后一张，最后一张的后面需要添加第一张。

7.预防鬼畜原理：
始终保证轮播图的运动动画只有一个，从底层杜绝鬼畜。需要在每次动画开始之前，尝试停止动画定时器，然后开始为新的动画添加定时器。

8.预防暴力点击原理：
如果用户快速点击触发事件，会在短时间内多次调用切换函数，虽然动画函数可以保证，不会发生鬼畜，但在照片从最后一张到第一张的切换过程，不会按照正常的轮播，而是实现了跳转。所以需要通过添加口令的方式来，限制用户的点击。当用户点击完成后，口令销毁，动画结束后恢复口令。

9.小圆点的位置显示原理：
每次触发动画时，通过全局变量标记，获取当前页数，操作清除所有小圆点，然后指定一页添加样式。

10.点击触发跳转的原理：
类似于左右点击触发，只是这是将全局页面标记，直接修改，后执行动画。需要避免与自动轮播定时器的冲突。
```
解析：[参考](https://blog.csdn.net/konghouy/article/details/81407492)



## 174.如何设计一个轮播图组件

答案：

1. 轮播图功能实现
2. 抽出需要传入的变量，如：背景图，文案描述等



## 175.script 引入方式

答案：

* html 静态`<script>`引入
* js 动态插入`<script>`
* `<script defer>`: 延迟加载，元素解析完成后执行
* `<script async>`: 异步加载，但执行时会阻塞元素渲染



## 176.数组中的forEach和map的区别

答案：



## 177.for in和for of的区别

答案：



## 178.typeof 与 instanceof 区别

答案：



## 179.微任务和宏任务

答案：
```js
/*
* 宏任务
*   分类： setTimeout setInterval requrestAnimationFrame
*   1. 宏任务所处的队列就是宏任务队列
*   2. 第一个宏任务队列中只有一个任务： 执行主线程的js代码
*   3. 宏任务队列可以有多个
*   4. 当宏任务队列的中的任务全部执行完以后会查看是否有微任务队列如果有先执行微任务队列中的所有任务，如果没有就查看是否有宏任务队列
*
* 微任务
*   分类： new Promise().then(回调) process.nextTick
*   1. 微任务所处的队列就是微任务队列
*   2. 只有一个微任务队列
*   3. 在上一个宏任务队列执行完毕后如果有微任务队列就会执行微任务队列中的所有任务
* */

console.log('----------------- start -----------------');

setTimeout(() => {
  console.log('setTimeout');
}, 0)

new Promise((resolve, reject) =>{
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  resolve();  // 修改promise实例对象的状态为成功的状态
}).then(() => {
  console.log('promise实例成功回调执行');
})

console.log('----------------- end -----------------');
```


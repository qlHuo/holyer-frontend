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



## 2.  JavaScript 中检测变量是否为 String 类型

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




## 3. JavaScript 中去除字符串空格的几种方法

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



## 4. window.load 和 document.ready 的区别

| 特性             | $(document).ready() | window.onload / $(window).load() |
| ---------------- | ------------------- | -------------------------------- |
| 触发时机         | DOM 就绪后立即触发  | 所有资源加载完成后触发           |
| 执行速度         | 更快                | 较慢                             |
| 是否可以多次使用 | 可以                | 会覆盖之前的处理函数             |
| 是否需要等待图片 | 不需要              | 需要                             |
| jQuery 特有      | 是                  | 否（但有 jQuery 版本）           |



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

### 3. `defer` (延迟执行)

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

答案：面向对象是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。

解析：

面向对象和面向过程的异同
- 面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候一个一个依次调用就可以了。
- 面向对象是把构成问题事务分解成各个对象，建立对象的目的不是为了完成一个步骤，而是为了描叙某个事物在整个解决问题的步骤中的行为。




## 28.你对松散类型的理解

答案：

JavaScript 中的变量为松散类型，所谓松散类型就是指当一个变量被申明出来就可以保存任意类型的值，就是不像 SQL 一样申明某个键值为 int 就只能保存整型数值，申明 varchar 只能保存字符串。一个变量所保存值的类型也可以改变，这在 JavaScript 中是完全有效的，只是不推荐。相比较于将变量理解为“盒子“，《JavaScript 编程精解》中提到应该将变量理解为“触手”，它不保存值，而是抓取值。这一点在当变量保存引用类型值时更加明显。

JavaScript 中变量可能包含两种不同的数据类型的值：基本类型和引用类型。基本类型是指简单的数据段，而引用类型指那些可能包含多个值的对象。




## 29.JS 严格模式和正常模式

答案：严格模式使用"use strict";

作用：

- 消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;
- 消除代码运行的一些不安全之处，保证代码运行的安全；
- 提高编译器效率，增加运行速度；
- 为未来新版本的 Javascript 做好铺垫。

表现：

- 严格模式下, delete 运算符后跟随非法标识符(即 delete 不存在的标识符)，会抛出语法错误； 非严格模式下，会静默失败并返回 false
- 严格模式中，对象直接量中定义同名属性会抛出语法错误； 非严格模式不会报错
- 严格模式中，函数形参存在同名的，抛出错误； 非严格模式不会
- 严格模式不允许八进制整数直接量（如：023）
- 严格模式中，arguments 对象是传入函数内实参列表的静态副本；非严格模式下，arguments 对象里的元素和对应的实参是指向同一个值的引用
- 严格模式中 eval 和 arguments 当做关键字，它们不能被赋值和用作变量声明
- 严格模式会限制对调用栈的检测能力，访问 arguments.callee.caller 会抛出异常
- 严格模式 变量必须先声明，直接给变量赋值，不会隐式创建全局变量，不能用 with,
- 严格模式中 call apply 传入 null undefined 保持原样不被转换为 window

解析：

一、概述

除了正常运行模式，ECMAscript 5 添加了第二种运行模式："严格模式"（strict mode）。顾名思义，这种模式使得 Javascript 在更严格的条件下运行。

设立"严格模式"的目的，主要有以下几个：

- 消除 Javascript 语法的一些不合理、不严谨之处，减少一些怪异行为;

- 消除代码运行的一些不安全之处，保证代码运行的安全；

- 提高编译器效率，增加运行速度；

- 为未来新版本的 Javascript 做好铺垫。

"严格模式"体现了 Javascript 更合理、更安全、更严谨的发展方向，包括 IE 10 在内的主流浏览器，都已经支持它，许多大项目已经开始全面拥抱它。

另一方面，同样的代码，在"严格模式"中，可能会有不一样的运行结果；一些在"正常模式"下可以运行的语句，在"严格模式"下将不能运行。掌握这些内容，有助于更细致深入地理解 Javascript，让你变成一个更好的程序员。

本文将对"严格模式"做详细介绍。

二、进入标志

进入"严格模式"的标志，是下面这行语句：

"use strict";

老版本的浏览器会把它当作一行普通字符串，加以忽略。

三、如何调用

"严格模式"有两种调用方法，适用于不同的场合。

3.1 针对整个脚本文件

将"use strict"放在脚本文件的第一行，则整个脚本都将以"严格模式"运行。如果这行语句不在第一行，则无效，整个脚本以"正常模式"运行。如果不同模式的代码文件合并成一个文件，这一点需要特别注意。

(严格地说，只要前面不是产生实际运行结果的语句，"use strict"可以不在第一行，比如直接跟在一个空的分号后面。)

```js
　　<script>
　　　　"use strict";
　　　　console.log("这是严格模式。");
　　</script>

　　<script>
　　　　console.log("这是正常模式。");kly, it's almost 2 years ago now. I can admit it now - I run it on my school's network that has about 50 computers.
　　</script>
```

上面的代码表示，一个网页中依次有两段 Javascript 代码。前一个 script 标签是严格模式，后一个不是。

3.2 针对单个函数

将"use strict"放在函数体的第一行，则整个函数以"严格模式"运行。

```js
function strict() {
  "use strict";
  return "这是严格模式。";
}

function notStrict() {
  return "这是正常模式。";
}
```

3.3 脚本文件的变通写法

因为第一种调用方法不利于文件合并，所以更好的做法是，借用第二种方法，将整个脚本文件放在一个立即执行的匿名函数之中。

```js
(function() {
  "use strict"; // some code here

})();
```

四、语法和行为改变

严格模式对 Javascript 的语法和行为，都做了一些改变。

4.1 全局变量显式声明

在正常模式中，如果一个变量没有声明就赋值，默认是全局变量。严格模式禁止这种用法，全局变量必须显式声明。

```js
"use strict";

v = 1; // 报错，v未声明

for (i = 0; i < 2; i++) {
  // 报错，i未声明
}
```

因此，严格模式下，变量都必须先用 var 命令声明，然后再使用。

4.2 静态绑定

Javascript 语言的一个特点，就是允许"动态绑定"，即某些属性和方法到底属于哪一个对象，不是在编译时确定的，而是在运行时（runtime）确定的。

严格模式对动态绑定做了一些限制。某些情况下，只允许静态绑定。也就是说，属性和方法到底归属哪个对象，在编译阶段就确定。这样做有利于编译效率的提高，也使得代码更容易阅读，更少出现意外。

具体来说，涉及以下几个方面。

（1）禁止使用 with 语句

因为 with 语句无法在编译时就确定，属性到底归属哪个对象。

```js
　　"use strict";

　　var v = 1;

　　with (o){ // 语法错误
　　　　v = 2;
　　}
```

（2）创设 eval 作用域

正常模式下，Javascript 语言有两种变量作用域（scope）：全局作用域和函数作用域。严格模式创设了第三种作用域：eval 作用域。

正常模式下，eval 语句的作用域，取决于它处于全局作用域，还是处于函数作用域。严格模式下，eval 语句本身就是一个作用域，不再能够生成全局变量了，它所生成的变量只能用于 eval 内部。

```js
"use strict";

var x = 2;

console.info(eval("var x = 5; x")); // 5

console.info(x); // 2
```

4.3 增强的安全措施

（1）禁止 this 关键字指向全局对象

```js
function f() {
  return !this;
} // 返回false，因为"this"指向全局对象，"!this"就是false
function f() {
  "use strict";
  return !this;
} // 返回true，因为严格模式下，this的值为undefined，所以"!this"为true。
```

因此，使用构造函数时，如果忘了加 new，this 不再指向全局对象，而是报错。

```js
function f() {
  "use strict";

  this.a = 1;
}

f(); // 报错，this未定义
```

（2）禁止在函数内部遍历调用栈

```js
function f1() {
  "use strict";

  f1.caller; // 报错

  f1.arguments; // 报错
}

f1();
```

4.4 禁止删除变量

严格模式下无法删除变量。只有 configurable 设置为 true 的对象属性，才能被删除。

```js
　　"use strict";

　　var x;

　　delete x; // 语法错误

　　var o = Object.create(null, {'x': {
　　　　　　value: 1,
　　　　　　configurable: true
　　}});

　　delete o.x; // 删除成功
```

4.5 显式报错

正常模式下，对一个对象的只读属性进行赋值，不会报错，只会默默地失败。严格模式下，将报错。

```js
"use strict";

var o = {};

Object.defineProperty(o, "v", { value: 1, writable: false });

o.v = 2; // 报错
```

严格模式下，对一个使用 getter 方法读取的属性进行赋值，会报错。

```js
"use strict";

var o = {
  get v() {
    return 1;
  }
};

o.v = 2; // 报错
```

严格模式下，对禁止扩展的对象添加新属性，会报错。

```js
"use strict";

var o = {};

Object.preventExtensions(o);

o.v = 1; // 报错
```

严格模式下，删除一个不可删除的属性，会报错。

```js
"use strict";

delete Object.prototype; // 报错
```

4.6 重名错误

严格模式新增了一些语法错误。

（1）对象不能有重名的属性

正常模式下，如果对象有多个重名属性，最后赋值的那个属性会覆盖前面的值。严格模式下，这属于语法错误。

```js
"use strict";

var o = {
  p: 1,
  p: 2
}; // 语法错误
```

（2）函数不能有重名的参数

正常模式下，如果函数有多个重名的参数，可以用 arguments[i]读取。严格模式下，这属于语法错误。

```js
　　"use strict";

　　function f(a, a, b) { // 语法错误

　　　　return ;

　　}
```

4.7 禁止八进制表示法

正常模式下，整数的第一位如果是 0，表示这是八进制数，比如 0100 等于十进制的 64。严格模式禁止这种表示法，整数第一位为 0，将报错。

```js
　　"use strict";

　　var n = 0100; // 语法错误
```

4.8 arguments 对象的限制

arguments 是函数的参数对象，严格模式对它的使用做了限制。

（1）不允许对 arguments 赋值

```js
　　"use strict";

　　arguments++; // 语法错误

　　var obj = { set p(arguments) { } }; // 语法错误

　　try { } catch (arguments) { } // 语法错误

　　function arguments() { } // 语法错误

　　var f = new Function("arguments", "'use strict'; return 17;"); // 语法错误
```

（2）arguments 不再追踪参数的变化

```js
function f(a) {
  a = 2;

  return [a, arguments[0]];
}

f(1); // 正常模式为[2,2]

function f(a) {
  "use strict";

  a = 2;

  return [a, arguments[0]];
}

f(1); // 严格模式为[2,1]
```

（3）禁止使用 arguments.callee

这意味着，你无法在匿名函数内部调用自身了。

```js
"use strict";

var f = function() {
  return arguments.callee;
};

f(); // 报错
```

4.9 函数必须声明在顶层

将来 Javascript 的新版本会引入"块级作用域"。为了与新版本接轨，严格模式只允许在全局作用域或函数作用域的顶层声明函数。也就是说，不允许在非函数的代码块内声明函数。

```js
"use strict";

if (true) {
  function f() {} // 语法错误
}

for (var i = 0; i < 5; i++) {
  function f2() {} // 语法错误
}
```

4.10 保留字

为了向将来 Javascript 的新版本过渡，严格模式新增了一些保留字：implements, interface, let, package, private, protected, public, static, yield。

使用这些词作为变量名将会报错。

```js
　　function package(protected) { // 语法错误

　　　　"use strict";

　　　　var implements; // 语法错误

　　}
```

此外，ECMAscript 第五版本身还规定了另一些保留字（class, enum, export, extends, import, super），以及各大浏览器自行增加的 const 保留字，也是不能作为变量名的。

[参考](https://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html)




## 30.移动端 click 事件、touch 事件、tap 事件的区别

答案：

1. click 事件在移动端会有 200-300ms ms 的延迟，主要原因是苹果手机在设计时，考虑到用户在浏览网页时需要放大，所以，在用户点击的 200-300ms 之后，才触发 click，如果 200-300ms 之内还有 click，就会进行放大缩小。

2. touch 事件是针对触屏手机上的触摸事件。现今大多数触屏手机 webkit 内核提供了 touch 事件的监听，让开发者可以获取用户触摸屏幕时的一些信息。其中包括：touchstart,touchmove,touchend,touchcancel 这四个事件，touchstart touchmove touchend 事件可以类比于 mousedown mouseover mouseup 的触发

3. tap 事件在移动端，代替 click 作为点击事件，tap 事件被很多框架（如 zepto）封装，来减少这延迟问题， tap 事件不是原生的，所以是封装的，那么具体是如何实现的呢？

```js
  <script>
    function tap(ele, callback) {
      // 记录开始时间
      var startTime = 0,
      // 控制允许延迟的时间
          delayTime = 200,
      // 记录是否移动，如果移动，则不触发tap事件
          isMove = false;

      // 在touchstart时记录开始的时间
      ele.addEventListener('touchstart', function (e) {
        startTime = Date.now();
      });

      // 如果touchmove事件被触发，则isMove为true
      ele.addEventListener('touchmove', function (e) {
        isMove = true;
      });

      // 如果touchmove事件触发或者中间时间超过了延迟时间，则返回，否则，调用回调函数。
      ele.addEventListener('touchend', function (e) {
        if (isMove || (Date.now() - startTime > delayTime)) {
          return;
        } else {
          callback(e);
        }
      })
    }

    var btn = document.getElementById('btn');
    tap(btn, function () {
      alert('taped');
    });
  </script>
```

拓展：

点透问题

如果我们在移动端所有的 click 都替换为了 tap 事件，还是会触发点透问题的，因为实质是： 在同一个 z 轴上，z-index 不同的两个元素，上面的元素是一个绑定了 tap 事件的，下面是一个 a 标签，一旦 tap 触发，这个元素就会 display: none，而从上面的 tap 可以看出，有 touchstart、touchend，所以会 300ms 之后触发 click 事件，而 z-index 已经消失了，所以，触发了下面的 a 的 click 事件，注意： 我们认为 a 标签默认是绑定了 click 事件的。而这种现象不是我们所期待的。

解决方案： （1）使用 fastclick。 （2）添加一个延迟。

（1）直接引入 fastclick 库。

```js
window.addEventListener(
  "load",
  function() {
    FastClick.attach(document.body);
  },
  false
);
```

这样，就可以成功解决问题了。

（2）对于上一个 tap 做延迟。

```js
tap(ele, function() {
  setTimeout(function() {
    ele.style.display = "none";
  }, 300);
});
```

这样，过了 300ms，那么 click 事件就不会触发在下面的 a 标签上了。




## 31.JS 单线程还是多线程，如何显示异步操作

答案：JS 本身是单线程的，他是依靠浏览器完成的异步操作。

解析：

具体步骤，

1、主线程 执行 js 中所有的代码。

2、主线程 在执行过程中发现了需要异步的任务任务后扔给浏览器（浏览器创建多个线程执行），并在  callback queque  中创建对应的回调函数（回调函数是一个对象，包含该函数是否执行完毕等）。

3、主线程 已经执行完毕所有同步代码。开始监听  callback queque 一旦 浏览器 中某个线程任务完成将会改变回调函数的状态。主线程查看到某个函数的状态为已完成，就会执行该函数。





## 32. JavaScript 数组的函数 map/forEach/reduce/filter

答案：

1. map

```js
// map
//作用：对数组进行遍历
//返回值：新的数组
// 是否改变：否
var arr = [2, 5, 3, 4];
var ret = arr.map(function(value) {
  return value + 1;
});
console.log(ret); //[3,6,4,5]
console.log(arr); //[2,5,3,4]
```

2. forEach

```js
// forEach 方法
// 作用：遍历数组的每一项
// 返回值：undefined
// 是否改变：否
var arr = [2, 5, 3, 4];
var ret = arr.forEach(function(value) {
  console.log(value); // 2, 5, 3, 4
});
console.log(ret); //undefined
console.log(arr); //[2,5,3,4]
```

3. reduce

```js
// reduce 方法
// 作用：对数组进行迭代，然后两两进行操作，最后返回一个值
// 返回值：return出来的结果
// 是否改变：不会
var arr = [1, 2, 3, 4];
var ret = arr.reduce(function(a, b) {
  return a * b;
});
console.log(ret); // 24
console.log(arr); // [1, 2, 3, 4]
```

4. filter

```js
// filter 过滤
// 作用： 筛选一部分元素
// 返回值： 一个满足筛选条件的新数组
// 是否改变原有数组：不会

var arr = [2, 5, 3, 4];
var ret = arr.filter(function(value) {
  return value > 3;
});
console.log(ret); //[5,4]
console.log(arr); //[2,5,3,4]
```




## 33. JS 块级作用域、变量提升

答案：

1. 块级作用域

JS 中作用域有：全局作用域、函数作用域。没有块作用域的概念。ECMAScript 6(简称 ES6)中新增了块级作用域。块作用域由 { } 包括，if 语句和 for 语句里面的{ }也属于块作用域。

2. 变量提升

- 如果变量声明在函数里面，则将变量声明提升到函数的开头
- 如果变量声明是一个全局变量，则将变量声明提升到全局作用域的开头

解析：

```js
<script type="text/javascript">
  {
    var a = 1;
    console.log(a); // 1
  }
  console.log(a); // 1
  // 可见，通过var定义的变量可以跨块作用域访问到。

  (function A() {
    var b = 2;
    console.log(b); // 2
  })();
  // console.log(b); // 报错，
  // 可见，通过var定义的变量不能跨函数作用域访问到

  if(true) {
    var c = 3;
  }
  console.log(c); // 3
  for(var i = 0; i < 4; i++) {
    var d = 5;
  };
  console.log(i);	// 4   (循环结束i已经是4，所以此处i为4)
  console.log(d); // 5
  // if语句和for语句中用var定义的变量可以在外面访问到，
  // 可见，if语句和for语句属于块作用域，不属于函数作用域。

  {
    var a = 1;
    let b = 2;
    const c = 3;

    {
      console.log(a);		// 1	子作用域可以访问到父作用域的变量
      console.log(b);		// 2	子作用域可以访问到父作用域的变量
      console.log(c);		// 3	子作用域可以访问到父作用域的变量

      var aa = 11;
      let bb = 22;
      const cc = 33;
    }

    console.log(aa);	// 11	// 可以跨块访问到子 块作用域 的变量
    // console.log(bb);	// 报错	bb is not defined
    // console.log(cc);	// 报错	cc is not defined
  }
</script>
```

拓展：

var、let、const 的区别

- var 定义的变量，没有块的概念，可以跨块访问, 不能跨函数访问。
- let 定义的变量，只能在块作用域里访问，不能跨块访问，也不能跨函数访问。
- const 用来定义常量，使用时必须初始化(即必须赋值)，只能在块作用域里访问，而且不能修改。
- 同一个变量只能使用一种方式声明，不然会报错

```js
<script type="text/javascript">
  // 块作用域
  {
    var a = 1;
    let b = 2;
    const c = 3;
    // c = 4; // 报错

    // let a = 'a';	// 报错  注：是上面 var a = 1; 那行报错
    // var b = 'b';	// 报错：本行报错
    // const a = 'a1';	// 报错  注：是上面 var a = 1; 那行报错
    // let c = 'c';	// 报错：本行报错

    var aa;
    let bb;
    // const cc; // 报错
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
    console.log(aa); // undefined
    console.log(bb); // undefined
  }
  console.log(a); // 1
  // console.log(b); // 报错
  // console.log(c); // 报错

  // 函数作用域
  (function A() {
    var d = 5;
    let e = 6;
    const f = 7;
    console.log(d); // 5
    console.log(e); // 6  (在同一个{ }中,也属于同一个块，可以正常访问到)
    console.log(f); // 7  (在同一个{ }中,也属于同一个块，可以正常访问到)
  })();
  // console.log(d); // 报错
  // console.log(e); // 报错
  // console.log(f); // 报错
</script>
```




## 34. null/undefined 的区别

答案：

null： Null 类型，代表“空值"，代表一个空对象指针，使用 typeof 运算得到 “object"，所以你可以认为它是一个特殊的对象值。

undefined： Undefined 类型，当一个声明了一个变量未初始化时，得到的就是 undefined。




## 35. JS 哪些操作会造成内存泄露

答案：

1）意外的全局变量引起的内存泄露

```js
function leak() {
  leak = "xxx"; //leak成为一个全局变量，不会被回收
}
```

2）闭包引起的内存泄露

```js
function bindEvent() {
  var obj = document.createElement("XXX");
  obj.οnclick = function() {
    //Even if it's a empty function
  };
}
```

闭包可以维持函数内局部变量，使其得不到释放。 上例定义事件回调时，由于是函数内定义函数，并且内部函数--事件回调的引用外暴了，形成了闭包。
解决之道，将事件处理函数定义在外部，解除闭包,或者在定义事件处理函数的外部函数中，删除对 dom 的引用。

```js
//将事件处理函数定义在外部
function onclickHandler() {
  //do something
}
function bindEvent() {
  var obj = document.createElement("XXX");
  obj.οnclick = onclickHandler;
}

//在定义事件处理函数的外部函数中，删除对dom的引用
function bindEvent() {
  var obj = document.createElement("XXX");
  obj.οnclick = function() {
    //Even if it's a empty function
  };
  obj = null;
}
```

3）没有清理的 DOM 元素引用

```js
var elements={
    button: document.getElementById("button"),
    image: document.getElementById("image"),
    text: document.getElementById("text")
};
function doStuff(){
    image.src="http://some.url/image";
    button.click():
    console.log(text.innerHTML)
}
function removeButton(){
    document.body.removeChild(document.getElementById('button'))
}
```

4）被遗忘的定时器或者回调

```js
var someResouce = getData();
setInterval(function() {
  var node = document.getElementById("Node");
  if (node) {
    node.innerHTML = JSON.stringify(someResouce);
  }
}, 1000);
```

这样的代码很常见, 如果 id 为 Node 的元素从 DOM 中移除, 该定时器仍会存在, 同时, 因为回调函数中包含对 someResource 的引用, 定时器外面的 someResource 也不会被释放。

5）子元素存在引起的内存泄露


黄色是指直接被 js 变量所引用，在内存里，红色是指间接被 js 变量所引用，如上图，refB 被 refA 间接引用，导致即使 refB 变量被清空，也是不会被回收的子元素 refB 由于 parentNode 的间接引用，只要它不被删除，它所有的父元素（图中红色部分）都不会被删除。

6）IE7/8 引用计数使用循环引用产生的问题

```js
function fn() {
  var a = {};
  var b = {};
  a.pro = b;
  b.pro = a;
}
fn();
```

fn()执行完毕后，两个对象都已经离开环境，在标记清除方式下是没有问题的，但是在引用计数策略下，因为 a 和 b 的引用次数不为 0，所以不会被垃圾回收器回收内存，如果 fn 函数被大量调用，就会造成内存泄漏。在 IE7 与 IE8 上，内存直线上升。
IE 中有一部分对象并不是原生 js 对象。例如，其内存泄漏 DOM 和 BOM 中的对象就是使用 C++以 COM 对象的形式实现的，而 COM 对象的垃圾回收机制采用的就是引用计数策略。因此，即使 IE 的 js 引擎采用标记清除策略来实现，但 js 访问的 COM 对象依然是基于引用计数策略的。换句话说，只要在 IE 中涉及 COM 对象，就会存在循环引用的问题。

```js
var element = document.getElementById("some_element");
var myObject = new Object();
myObject.e = element;
element.o = myObject;
```

上面的例子在一个 DOM 元素（element)与一个原生 js 对象（myObject)之间创建了循环引用。其中，变量 myObject 有一个名为 e 的属性指向 element 对象；而变量 element 也有一个属性名为 o 回指 myObject。由于存在这个循环引用，即使例子中的 DOM 从页面中移除，它也永远不会被回收。

看上面的例子，有人会觉得太弱了，谁会做这样无聊的事情，但是其实我们经常会这样做

```js
window.οnlοad=function outerFunction(){
  var obj=document.getElementById("element"):
  obj.οnclick=function innerFunction(){};
};
```

这段代码看起来没什么问题，但是 obj 引用了 document.getElementById(“element”)，而 document.getElementById(“element”)的 onclick 方法会引用外部环境中的变量，自然也包括 obj，是不是很隐蔽啊。

最简单的解决方式就是自己手工解除循环引用，比如刚才的函数可以这样

```js
myObject.element=null;
element.o=null;
window.οnlοad=function outerFunction(){
  var obj=document.getElementById("element"):
  obj.οnclick=function innerFunction(){};
  obj=null;
};
```

将变量设置为 null 意味着切断变量与它此前引用的值之间的连接。当垃圾回收器下次运行时，就会删除这些值并回收它们占用的内存。 要注意的是，IE9+并不存在循环引用导致 Dom 内存泄漏问题，可能是微软做了优化，或者 Dom 的回收方式已经改变

解析：

1、JS 的回收机制

JavaScript 垃圾回收的机制很简单：找出不再使用的变量，然后释放掉其占用的内存，但是这个过程不是实时的，因为其开销比较大，所以垃圾回收系统（GC）会按照固定的时间间隔,周期性的执行。

到底哪个变量是没有用的？所以垃圾收集器必须跟踪到底哪个变量没用，对于不再有用的变量打上标记，以备将来收回其内存。用于标记的无用变量的策略可能因实现而有所区别，通常情况下有两种实现方式：标记清除和引用计数。引用计数不太常用，标记清除较为常用。

2、标记清除（mark and sweep）

js 中最常用的垃圾回收方式就是标记清除。当变量进入环境时，例如，在函数中声明一个变量，就将这个变量标记为“进入环境”。从逻辑上讲，永远不能释放进入环境的变量所占用的内存，因为只要执行流进入相应的环境，就可能会用到它们。而当变量离开环境时，则将其标记为“离开环境”。

```js
function test() {
  var a = 10; //被标记，进入环境
  var b = 20; //被标记，进入环境
}
test(); //执行完毕之后a、b又被标记离开环境，被回收
```

3、引用计数(reference counting)

引用计数的含义是跟踪记录每个值被引用的次数。当声明了一个变量并将一个引用类型值（function object array）赋给该变量时，则这个值的引用次数就是 1。如果同一个值又被赋给另一个变量，则该值的引用次数加 1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数减 1。当这个值的引用次数变成 0 时，则说明没有办法再访问这个值了，因而就可以将其占用的内存空间回收回来。这样，当垃圾回收器下次再运行时，它就会释放那些引用次数为 0 的值所占用的内存。

```js
function test() {
  var a = {}; //a的引用次数为0
  var b = a; //a的引用次数加1，为1
  var c = a; //a的引用次数加1，为2
  var b = {}; //a的引用次数减1，为1
}
```

4、如何分析内存的使用情况

Google Chrome 浏览器提供了非常强大的 JS 调试工具，Memory 视图 profiles 视图让你可以对 JavaScript 代码运行时的内存进行快照，并且可以比较这些内存快照。它还让你可以记录一段时间内的内存分配情况。在每一个结果视图中都可以展示不同类型的列表，但是对我们最有用的是 summary 列表和 comparison 列表。 summary 视图提供了不同类型的分配对象以及它们的合计大小：shallow size （一个特定类型的所有对象的总和）和 retained size （shallow size 加上保留此对象的其它对象的大小）。distance 显示了对象到达 GC 根（校者注：最初引用的那块内存，具体内容可自行搜索该术语）的最短距离。 comparison 视图提供了同样的信息但是允许对比不同的快照。这对于找到泄漏很有帮助。

5、怎样避免内存泄露

1）减少不必要的全局变量，或者生命周期较长的对象，及时对无用的数据进行垃圾回收；

2）注意程序逻辑，避免“死循环”之类的 ；

3）避免创建过多的对象 原则：不用了的东西要及时归还。

[参考](https://blog.csdn.net/michael8512/article/details/77888000)




## 36.重排与重绘的区别，什么情况下会触发？

答案：

1. 简述重排的概念

   浏览器下载完页面中的所有组件（HTML、JavaScript、CSS、图片）之后会解析生成两个内部数据结构（DOM 树和渲染树），DOM 树表示页面结构，渲染树表示 DOM 节点如何显示。重排是 DOM 元素的几何属性变化，DOM 树的结构变化，渲染树需要重新计算。

2. 简述重绘的概念

   重绘是一个元素外观的改变所触发的浏览器行为，例如改变 visibility、outline、背景色等属性。浏览器会根据元素的新属性重新绘制，使元素呈现新的外观。由于浏览器的流布局，对渲染树的计算通常只需要遍历一次就可以完成。但 table 及其内部元素除外，它可能需要多次计算才能确定好其在渲染树中节点的属性值，比同等元素要多花两倍时间，这就是我们尽量避免使用 table 布局页面的原因之一。

3. 简述重绘和重排的关系
   重绘不会引起重排，但重排一定会引起重绘，一个元素的重排通常会带来一系列的反应，甚至触发整个文档的重排和重绘，性能代价是高昂的。

4. 什么情况下会触发重排？

- 页面渲染初始化时；（这个无法避免）
- 浏览器窗口改变尺寸；
- 元素尺寸改变时；
- 元素位置改变时；
- 元素内容改变时；
- 添加或删除可见的 DOM 元素时。

5. 重排优化有如下五种方法

- 将多次改变样式属性的操作合并成一次操作，减少 DOM 访问。
- 如果要批量添加 DOM，可以先让元素脱离文档流，操作完后再带入文档流，这样只会触发一次重排。（fragment 元素的应用）
- 将需要多次重排的元素，position 属性设为 absolute 或 fixed，这样此元素就脱离了文档流，它的变化不会影响到其他元素。例如有动画效果的元素就最好设置为绝对定位。
- 由于 display 属性为 none 的元素不在渲染树中，对隐藏的元素操作不会引发其他元素的重排。如果要对一个元素进行复杂的操作时，可以先隐藏它，操作完成后再显示。这样只在隐藏和显示时触发两次重排。
- 在内存中多次操作节点，完成后再添加到文档中去。例如要异步获取表格数据，渲染到页面。可以先取得数据后在内存中构建整个表格的 html 片段，再一次性添加到文档中去，而不是循环添加每一行。




## 37.发布订阅设计模式

答案：发布/订阅模式(Publish Subscribe Pattern)属于设计模式中的行为(Behavioral Patterns)

解析：[参考](https://www.jianshu.com/p/c391c77a8771)




## 38. jsonp 优缺点？ 

答案：

### jsonp 优缺点

- 1.优点
  - 1.1 它不像 XMLHttpRequest 对象实现的 Ajax 请求那样受到同源策略的限制，JSONP 可以跨越同源策略；
  - 1.2 它的兼容性更好，在更加古老的浏览器中都可以运行，不需要 XMLHttpRequest 或 ActiveX 的支持
  - 1.3 在请求完毕后可以通过调用 callback 的方式回传结果。将回调方法的权限给了调用方。这个就相当于将 controller 层和 view 层终于*分 开了。我提供的 jsonp 服务只提供纯服务的数据，至于提供服务以 后的页面渲染和后续 view 操作都由调用者来自己定义就好了。如果*有两个页面需要渲染同一份数据，你们只需要有不同的渲染逻辑就可以了，逻辑都可以使用同 一个 jsonp 服务。
- 2.缺点
  - 2.1 它只支持 GET 请求而不支持 POST 等其它类型的 HTTP 请求
  - 2.2 它只支持跨域 HTTP 请求这种情况，不能解决不同域的两个页面之间如何进行 JavaScript 调用的问题。
  - 2.3 jsonp 在调用失败的时候不会返回各种 HTTP 状态码。
  - 2.4 缺点是安全性。万一假如提供 jsonp 的服务存在页面注入漏洞，即它返回的 javascript 的内容被人控制的。那么结果是什么？所有调用这个 jsonp 的网站都会存在漏洞。于是无法把危险控制在一个域名下…所以在使用 jsonp 的时候必须要保证使用的 jsonp 服务必须是安全可信的




## 39.兼容各种浏览器版本的事件绑定

答案：

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




## 40.typescript 遇到过什么坑

答案：

main.ts 报错（ Cannot find module './App.vue'.）

原因： typescript 不能识别.vue 文件

解决办法： 引入 vue 的 typescript declare 库




## 41.this 和 apply 的应用

答案：比如求数组的最大值 Math.max.apply(this, 数组)

```js
var numbers = [5, 458, 120, -215];
var maxInNumbers = Math.max.apply(this, numbers); //第一个参数也可以填Math或null
console.log(maxInNumbers); // 458
var maxInNumbers = Math.max.call(this, 5, 458, 120, -215);
console.log(maxInNumbers); // 458
```




## 42.split() join()的区别

答案：

join()：用于把数组中的所有元素通过指定的分隔符进行分隔放入一个字符串

split()：用于把一个字符串通过指定的分隔符进行分隔成数组




## 43.JavaScript 的数据类型

答案：JS 数据类型共有六种，分别是 String、Number、Boolean、Null、Undefined 和 Object 等， 另外，ES6 新增了 Symbol 类型。其中，Object 是引用类型，其他的都是基本类型(Primitive Type)。




## 44.如何判断一个对象是否属于某个类？

答案：instanceof

解析：

```js
if (a instanceof Person) {
  alert("yes");
}
```




## 45.new 操作符具体干了什么呢?

答案：

样本一

new 共经过了 4 几个阶段

- 1、创建一个空对象
- 2、设置原型链
- 3、让 Func 中的 this 指向 obj，并执行 Func 的函数体
- 4、判断 Func 的返回值类型：

样本二

```
function Test(){}
const test = new Test()
```

1. 创建一个新对象：

```
const obj = {}
```

2. 设置新对象的 constructor 属性为构造函数的名称，设置新对象的__proto__属性指向构造函数的 prototype 对象

```
obj.constructor = Test
obj.__proto__ = Test.prototype
```

3. 使用新对象调用函数，函数中的 this 被指向新实例对象

```
Test.call(obj)
```

4. 将初始化完毕的新对象地址，保存到等号左边的变量中




## 46.call() 和 apply() 的含义和区别？

答案：

首先说明两个方法的含义：

- call：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.call(A, args1,args2);即 A 对象调用 B 对象的方法。
- apply：调用一个对象的一个方法，用另一个对象替换当前对象。例如：B.apply(A, arguments);即 A 对象应用 B 对象的方法。

call 与 apply 的相同点：

- 方法的含义是一样的，即方法功能是一样的；
- 第一个参数的作用是一样的；

call 与 apply 的不同点：两者传入的列表形式不一样

- call 可以传入多个参数；
- apply 只能传入两个参数，所以其第二个参数往往是作为数组形式传入

想一想哪个性能更好一些呢？




## 47.sort 排序原理

答案：冒泡排序法

解析：

冒泡排序法的原理：

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




## 48.Zepto 的点透问题如何解决？

答案：

方案一：来得很直接 github 上有个 fastclick 可以完美解决https://github.com/ftlabs/fastclick

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

方案二：用 touchend 代替 tap 事件并阻止掉 touchend 的默认行为 preventDefault()

```js
$("#cbFinish").on("touchend", function(event) {
  //很多处理比如隐藏什么的
  event.preventDefault();
});
```

方案三：延迟一定的时间(300ms+)来处理事件

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




## 49.如何判断当前脚本运行在浏览器还是 node 环境中？

答案：通过判断 Global 对象是否为 window，如果不为 window，当前脚本没有运行在浏览器中




## 50.移动端最小触控区域是多大？

答案：苹果推荐是 44pt x 44pt

解析：[参考](https://developer.apple.com/ios/human-interface-guidelines/visual-design/layout/)




## 51.移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？

答案：

1. 300 毫秒
2. 因为浏览器捕获第一次单击后，会先等待一段时间，如果在这段时间区间里用户未进行下一次点击，则浏览器会做单击事件的处理。如果这段时间里用户进行了第二次单击操作，则浏览器会做双击事件处理。
3. 推荐 fastclick.js




## 52.解释 JavaScript 中的作用域与变量声明提升？

答案：

- 我对作用域的理解是只会对某个范围产生作用，而不会对外产生影响的封闭空间。在这样的一些空间里，外部不能访问内部变量，但内部可以访问外部变量。
- 所有申明都会被提升到作用域的最顶上
- 同一个变量申明只进行一次，并且因此其他申明都会被忽略
- 函数声明的优先级优于变量申明，且函数声明会连带定义一起被提升




## 53.Node.js 的适用场景？

答案：比如：RESTFUL API、实时聊天、客户端逻辑强大的单页 APP，具体的例子比如说：本地化的在线音乐应用，本地化的在线搜索应用，本地化的在线 APP 等。

解析：[参考](https://www.cnblogs.com/kevin9103/p/5053517.html)




## 54.bind、call、apply 的区别

答案：

call 和 apply 其实是一样的，区别就在于传参时参数是一个一个传或者是以一个数组的方式来传。<br>
call 和 apply 都是在调用时生效，改变调用者的 this 指向。<br>

```
let name = 'Jack'
const obj = {name: 'Tom'}
function sayHi() {console.log('Hi! ' + this.name)}

sayHi() // Hi! Jack
sayHi.call(obj) // Hi! Tom

```

bind 也是改变 this 指向，不过不是在调用时生效，而是返回一个新函数。

```
const newFunc = sayHi.bind(obj)
newFunc() // Hi! Tom
```




## 55.使用构造函数的注意点

答案：

1. 一般情况下构造函数的首字母需要大写，因为我们在看到一个函数首字母大写的情况，就认定这是一个构造函数，需要跟new关键字进行搭配使用，创建一个新的实例（对象）
2. 构造函数在被调用的时候需要跟new关键字搭配使用。
3. 在构造函数内部通过this+属性名的形式为实例添加一些属性和方法。
4. 构造函数一般不需要返回值，如果有返回值
    * 4.1 如果返回值是一个基本数据类型，那么调用构造函数，返回值仍旧是那么创建出来的对象。
    * 4.2 如果返回值是一个复杂数据类型，那么调用构造函数的时候，返回值就是这个return之后的那个复杂数据类型。




## 56.如何获取浏览器版本信息

答案：window.navigator.userAgent




## 57.如何实现文件断点续传

答案：断点续传最核心的内容就是把文件“切片”然后再一片一片的传给服务器，但是这看似简单的上传过程却有着无数的坑。

首先是文件的识别，一个文件被分成了若干份之后如何告诉服务器你切了多少块，以及最终服务器应该如何把你上传上去的文件进行合并，这都是要考虑的。

因此在文件开始上传之前，我们和服务器要有一个“握手”的过程，告诉服务器文件信息，然后和服务器约定切片的大小，当和服务器达成共识之后就可以开始后续的文件传输了。

前台要把每一块的文件传给后台，成功之后前端和后端都要标识一下，以便后续的断点。

当文件传输中断之后用户再次选择文件就可以通过标识来判断文件是否已经上传了一部分，如果是的话，那么我们可以接着上次的进度继续传文件，以达到续传的功能。
有了 HTML5 的 File api 之后切割文件比想想的要简单的多的多。

只要用 slice 方法就可以了

```
var packet = file.slice(start, end);
```

参数 start 是开始切片的位置，end 是切片结束的位置 单位都是字节。通过控制 start 和 end 就可以是实现文件的分块

如

```
file.slice(0,1000);
file.slice(1000,2000);
file.slice(2000,3000);
// ......
```

在把文件切成片之后，接下来要做的事情就是把这些碎片传到服务器上。
如果中间掉线了，下次再传的时候就得先从服务器获取上一次上传文件的位置，然后以这个位置开始上传接下来的文件内容。

解析：[参考](https://www.cnblogs.com/zhwl/p/3580776.html)




## 58.数组的常用方法

答案：

1. Array.map()

此方法是将数组中的每个元素调用一个提供的函数，结果作为一个新的数组返回，并没有改变原来的数组

```js
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map(x => x * 2);
//arr= [1, 2, 3, 4, 5]   原数组保持不变
//newArr = [2, 4, 6, 8, 10] 返回新数组
```

2. Array.forEach()

此方法是将数组中的每个元素执行传进提供的函数，没有返回值，直接改变原数组，注意和 map 方法区分

```js
let arr = [1, 2, 3, 4, 5];
num.forEach(x => x * 2);
// arr = [2, 4, 6, 8, 10]  数组改变,注意和map区分
```

3. Array.filter()

此方法是将所有元素进行判断，将满足条件的元素作为一个新的数组返回

```js
let arr = [1, 2, 3, 4, 5]
    const isBigEnough => value => value >= 3
    let newArr = arr.filter(isBigEnough )
    //newNum = [3, 4, 5] 满足条件的元素返回为一个新的数组
　　
```

4. Array.every()

此方法是将所有元素进行判断返回一个布尔值，如果所有元素都满足判断条件，则返回 true，否则为 false：

```js
let arr = [1, 2, 3, 4, 5]
    const isLessThan4 => value => value < 4
    const isLessThan6 => value => value < 6
    arr.every(isLessThan4 ) //false
    arr.every(isLessThan6 ) //true
　　
```

5. Array.some()

此方法是将所有元素进行判断返回一个布尔值，如果存在元素都满足判断条件，则返回 true，若所有元素都不满足判断条件，则返回 false：

```js
let arr= [1, 2, 3, 4, 5]
    const isLessThan4 => value => value < 4
    const isLessThan6 => value => value > 6
    arr.some(isLessThan4 ) //true
    arr.some(isLessThan6 ) //false
　　
```

6. Array.reduce()

此方法是所有元素调用返回函数，返回值为最后结果,传入的值必须是函数类型：

```js
let arr = [1, 2, 3, 4, 5];
const add = (a, b) => a + b;
let sum = arr.reduce(add);
//sum = 15  相当于累加的效果
```

与之相对应的还有一个 Array.reduceRight() 方法，区别是这个是从右向左操作的

7. Array.push()

此方法是在数组的后面添加新加元素，此方法改变了数组的长度：

8. Array.pop()

此方法在数组后面删除最后一个元素，并返回数组，此方法改变了数组的长度：

```js
let arr = [1, 2, 3, 4, 5];
arr.pop();
console.log(arr); //[1, 2, 3, 4]
console.log(arr.length); //4
```

9. Array.shift()

此方法在数组后面删除第一个元素，并返回数组，此方法改变了数组的长度：

```js
let arr = [1, 2, 3, 4, 5];
arr.shift();
console.log(arr); //[2, 3, 4, 5]
console.log(arr.length); //4
```

10. Array.unshift()

此方法是将一个或多个元素添加到数组的开头，并返回新数组的长度：

```js
let arr = [1, 2, 3, 4, 5];
arr.unshift(6, 7);
console.log(arr); //[6, 7, 2, 3, 4, 5]
console.log(arr.length); //7
```

11. Array.isArray()

判断一个对象是不是数组，返回的是布尔值

12. Array.concat()

此方法是一个可以将多个数组拼接成一个数组：

````js
let arr1 = [1, 2, 3]
      arr2 = [4, 5]
  let arr = arr1.concat(arr2)
  console.log(arr)//[1, 2, 3, 4, 5]
```　　

13. Array.toString()

 此方法将数组转化为字符串：
```js
let arr = [1, 2, 3, 4, 5];
   let str = arr.toString()
   console.log(str)// 1,2,3,4,5
```　

14. Array.join()

  此方法也是将数组转化为字符串：
```js
let arr = [1, 2, 3, 4, 5];
   let str1 = arr.toString()
   let str2 = arr.toString(',')
   let str3 = arr.toString('##')
   console.log(str1)// 12345
   console.log(str2)// 1,2,3,4,5
   console.log(str3)// 1##2##3##4##5
　　
````

通过例子可以看出和 toString 的区别，可以设置元素之间的间隔~

15. Array.splice(开始位置， 删除的个数，元素)

万能方法，可以实现增删改：

```js
let arr = [1, 2, 3, 4, 5];
     let arr1 = arr.splice(2, 0 'haha')
     let arr2 = arr.splice(2, 3)
     let arr1 = arr.splice(2, 1 'haha')
     console.log(arr1) //[1, 2, 'haha', 3, 4, 5]新增一个元素
     console.log(arr2) //[1, 2] 删除三个元素
     console.log(arr3) //[1, 2, 'haha', 4, 5] 替换一个元素
```




## 59.字符串常用操作

答案：

- charAt(index):返回指定索引处的字符串
- charCodeAt(index):返回指定索引处的字符的 Unicode 的值
- concat(str1,str2,...):连接多个字符串，返回连接后的字符串的副本
- fromCharCode():将 Unicode 值转换成实际的字符串
- indexOf(str):返回 str 在父串中第一次出现的位置，若没有则返回-1
- lastIndexOf(str):返回 str 在父串中最后一次出现的位置，若没有则返回-1
- match(regex):搜索字符串，并返回正则表达式的所有匹配
- replace(str1,str2):str1 也可以为正则表达式，用 str2 替换 str1
- search(regex):基于正则表达式搜索字符串，并返回第一个匹配的位置
- slice(start,end)：返回字符索引在 start 和 end（不含）之间的子串
- split(sep，limit)：将字符串分割为字符数组，limit 为从头开始执行分割的最大数量
- substr(start，length)：从字符索引 start 的位置开始，返回长度为 length 的子串
- substring(from,to)：返回字符索引在 from 和 to（不含）之间的子串
- toLowerCase()：将字符串转换为小写
- toUpperCase()：将字符串转换为大写
- valueOf()：返回原始字符串值




## 60.作用域的概念及作用

答案：

- 作用域 ： 起作用的一块区域
- 作用域的概念： 对变量起保护作用的一块区域
- 作用： 作用域外部无法获取到作用域内部声明的变量，作用域内部能够获取到作用域外界声明的变量。




## 61.作用域的分类

答案：块作用域、词法作用域、动态作用域

解析：

1 块作用域 花括号 {}

2 词法作用域（js 属于词法作用域）
作用域只跟在何处被创建有关系，跟在何处被调用没有关系

3 动态作用域
作用域只跟在何处被调用有关系，跟在何处被创建没有关系




## 62.js 属于哪种作用域

答案：词法作用域（函数作用域）

解析：

```js
// 块作用域
/*{
        var num =123;
    }
    console.log(num);*/
// 如果js属于块作用域，那么在花括号外部就无法访问到花括号内部的声明的num变量。
// 如果js不属于块级作用域，那么花括号外部就能够访问到花括号内部声明的num变量
// 能够输出num变量，也就说明js不属于块级作用。
// 在ES6 之前的版本js是不存在块级作用域的。

//js属于词法作用域还是动态作用域

// js中函数可以帮我们去形成一个作用域

/* function fn(){
        var num =123;
    }
    fn();
    //在函数外界能否访问到num这样一个变量
    console.log(num)*/ //Uncaught ReferenceError: num is not defined
// 如果函数能够生成一个作用域，那么在函数外界就无法访问到函数内部声明的变量。
// js中的函数能够生成一个作用。  函数作用域 。

// 词法作用域：作用的外界只跟作用域在何处创建有关系，跟作用域在何处被调用没有关系

var num = 123;
function f1() {
  console.log(num); //
}
function f2() {
  var num = 456;
  f1(); //f1在f2被调用的时候会被执行 。
}
f2();

//如果js是词法作用域，那么就会输出f1被创建的时候外部的num变量 123
//如果js是动态作用域，那么f1执行的时候就会输出f1被调用时外部环境中的num  456
```




## 63.浮点数精度

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


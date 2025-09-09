# CSS基础


## 1. 介绍一下标准的 CSS 的盒子模型

CSS 盒子模型是 CSS 布局和设计的基础概念，用于描述 HTML 元素如何被表示为一个矩形盒子，以及这些盒子如何相互影响和布局。

### 1. 基本组成部分

- **内容区域（Content）**：这是盒子的核心部分，包含元素的文本、图像等实际内容。在 CSS 中，通过 `width` 和 `height` 属性来设置内容区域的宽度和高度（标准盒模型下）。例如：

```css
div {
  width: 200px;
  height: 100px;
}
```

这里设置的 `width` 和 `height` 仅针对内容区域。

- **内边距（Padding）**：位于内容区域和边框之间，用于控制内容与边框的距离。内边距使内容在盒子内部有一定的空白空间。可以通过 `padding - top`、`padding - right`、`padding - bottom`、`padding - left` 分别设置四个方向的内边距，也可以使用 `padding` 简写属性统一设置。例如：

```css
div {
  padding: 10px; /* 四个方向内边距均为10px */
  /* 或者 */
  padding - top: 5px;
  padding - right: 10px;
  padding - bottom: 5px;
  padding - left: 10px;
}
```

- **边框（Border）**：围绕在内边距之外，定义了盒子的边界。可以设置边框的宽度（`border - width`）、样式（`border - style`，如实线 `solid`、虚线 `dashed` 等）和颜色（`border - color`）。同样有针对四个方向的单独设置属性和简写属性。例如：

```css
div {
  border: 1px solid black; /* 1px宽黑色实线边框 */
  /* 或者 */
  border - top: 2px dashed red;
}
```

- **外边距（Margin）**：在边框之外，用于控制盒子与其他盒子之间的距离。和内边距、边框类似，有四个方向的单独设置属性（`margin - top`、`margin - right`、`margin - bottom`、`margin - left`）以及简写属性 `margin`。例如：

```css
div {
  margin: 20px; /* 四个方向外边距均为20px */
  /* 或者 */
  margin - bottom: 30px;
}
```

### 2. 盒模型类型

- **标准盒模型**：现代浏览器默认遵循标准盒模型，**<u>在标准盒模型中，`width` 和 `height` 只应用于内容区域。元素实际占据的空间宽度是 `width + 2 * padding + 2 * border + 2 * margin`，高度同理。</u>**例如：

```css
div {
  width: 100px;
  padding: 10px;
  border: 1px solid black;
  margin: 5px;
}
```

该 `div` 元素实际占据的水平空间为 `100 + 2 * 10 + 2 * 1 + 2 * 5 = 132px`。

- **怪异盒模型（IE 盒模型）**：早期 IE 浏览器采用的盒模型。**<u>在怪异盒模型中，`width` 和 `height` 包含了内容区域、内边距和边框。</u>**即元素实际占据的空间宽度是 `width + 2 * margin`，高度同理。例如，同样的 CSS 代码，在怪异盒模型下，设置的 `width = 100px` 已经包含了内边距和边框，实际内容区域宽度小于 `100px`。可以通过 `box - sizing` 属性来切换盒模型类型，`box - sizing: content - box` 表示标准盒模型（默认值），`box - sizing: border - box` 表示怪异盒模型。例如：

```css
div {
  box - sizing: border - box;
  width: 100px;
  padding: 10px;
  border: 1px solid black;
  margin: 5px;
}
```

此时，内容区域、内边距和边框都包含在设置的 `100px` 宽度内。




## 2. CSS 隐藏元素的几种方法

在 CSS 中，隐藏元素有多种方法，每种方法各有特点，适用于不同场景

### 1. `display: none`

- **原理**：将元素从文档流中完全移除，元素及其子元素都不再占据空间，就好像该元素不存在于文档中一样。
- **应用场景**：当元素在特定条件下完全不需要显示，且不希望其占用页面空间时使用。例如，在网页加载时，某些初始不需要展示的弹窗、提示框等元素，可使用 `display: none` 隐藏，待用户触发特定操作（如点击按钮）时，通过 JavaScript 动态将其 `display` 属性改为其他值（如 `block`、`flex` 等）来显示。
- **示例**：

```css
.hidden {
  display: none;
}
```

```html
<div class="hidden">这是一个隐藏的 div</div>
```

### 2. `visibility: hidden`

- **原理**：元素虽然不可见，但仍然占据文档空间，其原本的位置会被保留。该元素的子元素若不单独设置，也会跟随隐藏。
- **应用场景**：适用于需要暂时隐藏元素，但希望保留其在文档流中占位的情况。比如，在制作动画效果时，希望某个元素暂时消失但不影响其他元素布局，后续再让其重新显示。
- **示例**：

```css
.invisible {
  visibility: hidden;
}
```

```html
<div class="invisible">这是一个不可见但仍占位的 div</div>
```

### 3. `opacity: 0`

- **原理**：通过将元素的透明度设置为 0，使元素变得完全透明，从而实现隐藏效果。元素依然占据文档空间，并且可以响应事件（如点击等）。
- **应用场景**：常用于实现淡入淡出的动画效果。当需要隐藏元素，但又希望其在隐藏状态下仍能响应交互操作时，也可使用此方法。例如，制作一个点击隐藏但仍可点击触发其他操作的按钮。
- **示例**：

```css
.transparent {
  opacity: 0;
}
```

```html
<button class="transparent">隐藏但可点击</button>
```

### 4. `position: absolute` 并移出可视区域

- **原理**：将元素设置为绝对定位，然后通过 `top`、`left` 等属性将其移动到页面的可视区域之外，从而达到隐藏效果。元素虽然在视觉上不可见，但仍在文档流中，只是位置发生了改变。
- **应用场景**：适用于一些需要隐藏，但又不想影响文档布局，同时希望保留元素的一些特性（如保持动画状态等）的场景。例如，将一些临时不需要显示但后续可能复用的元素移出可视区域隐藏。
- **示例**：

```css
.hidden - offscreen {
  position: absolute;
  top: -9999px;
  left: -9999px;
}
```

```html
<div class="hidden - offscreen">隐藏在可视区域外的 div</div>
```

### 5. `clip-path`

- **原理**：使用 `clip-path` 属性定义一个剪裁区域，元素只有在这个区域内的部分才会显示，区域外的部分将被隐藏。通过设置合适的剪裁路径，可以完全隐藏元素。
- **应用场景**：在需要对元素进行复杂剪裁和隐藏效果时使用，例如制作一些不规则形状的隐藏效果。
- **示例**：

```css
.clip-hidden {
  clip-path: polygon(0 0, 0 0, 0 0, 0 0);
}
```

```html
<div class="clip-hidden">通过剪裁隐藏的 div</div>
```

### 6. `height: 0` 和 `overflow: hidden`

- **原理**：将元素的高度设置为 0，同时设置 `overflow: hidden` 防止内容溢出。这样元素及其内部内容都无法显示，并且不占据文档空间（除了 border 和 margin）。
- **应用场景**：对于一些可以动态展开和收起的元素（如折叠面板），在收起状态下可使用此方法隐藏内容，并且不会影响页面布局。
- **示例**：

```css
.collapsed {
  height: 0;
  overflow: hidden;
  border: none;
  margin: 0;
}
```

```html
<div class="collapsed">隐藏的内容区域</div>
```

不同的隐藏方法在可访问性、对文档布局的影响以及元素交互性方面存在差异，在实际开发中需根据具体需求选择合适的方法。




## 3. CSS 清除浮动的几种方法（至少两种）

在 CSS 布局中，浮动元素会脱离文档流，可能导致父元素高度塌陷等布局问题，以下是几种常见的清除浮动方法：

### 1. 使用 clear 属性

- **原理**：`clear` 属性指定一个元素是否及如何避免其旁边出现浮动元素。取值有 `left`（清除左浮动）、`right`（清除右浮动）、`both`（清除左右浮动）。当一个元素设置了 `clear` 属性，它会下移到浮动元素下方，从而避免与浮动元素相邻。
- **示例**：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    .float-left {
      float: left;
      width: 100px;
      height: 100px;
      background - color: lightblue;
    }

    .clear-both {
      clear: both;
    }
  </style>
</head>

<body>
  <div class="float-left"></div>
  <div class="clear-both"></div>
  <p>这是一段文本，不会受上方浮动元素影响。</p>
</body>

</html>
```

- **缺点**：需要额外添加一个空的 HTML 元素来清除浮动，增加了无意义的标签，使 HTML 结构变得复杂，不利于代码维护。

### 2. 父元素设置 overflow 属性

- **原理**：给包含浮动元素的父元素设置 `overflow` 属性，取值可以是 `hidden`、`auto` 或 `scroll`。当设置为 `hidden` 时，父元素会将溢出的浮动元素包含在内，从而触发 BFC（块级格式化上下文），使父元素能够自适应浮动元素的高度。
- **示例**：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    .parent {
      overflow: hidden;
    }

    .float-left {
      float: left;
      width: 100px;
      height: 100px;
      background - color: lightblue;
    }
  </style>
</head>

<body>
  <div class="parent">
    <div class="float-left"></div>
  </div>
  <p>这是一段文本，不会受上方浮动元素影响。</p>
</body>

</html>
```

- **缺点**：如果子元素有超出父元素的部分（例如图片过大），设置 `overflow: hidden` 会裁剪掉超出部分；设置 `overflow: auto` 或 `scroll` 可能会出现不必要的滚动条。

### 3. 使用 :after 伪元素

- **原理**：利用 `:after` 伪元素在父元素内容之后创建一个虚拟元素，然后对这个虚拟元素应用 `clear: both` 属性来清除浮动。同时设置 `content: ""` 使其成为一个空元素，并设置 `display: block` 让它以块级元素形式呈现。
- **示例**：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    .parent::after {
      content: "";
      display: block;
      clear: both;
    }

    .float-left {
      float: left;
      width: 100px;
      height: 100px;
      background - color: lightblue;
    }
  </style>
</head>

<body>
  <div class="parent">
    <div class="float-left"></div>
  </div>
  <p>这是一段文本，不会受上方浮动元素影响。</p>
</body>

</html>
```

- **优点**：不需要在 HTML 中添加额外的标签，保持了 HTML 结构的简洁性，同时能有效清除浮动，是一种较为推荐的方法。

### 4. 使用 clearfix 类

- **原理**：这是一种结合 `:before` 和 `:after` 伪元素以及 `zoom` 属性（针对 IE 浏览器）的综合方法，本质上还是通过 `:after` 伪元素清除浮动。
- **示例**：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    .clearfix::before,
    .clearfix::after {
      content: "";
      display: table;
    }

    .clearfix::after {
      clear: both;
    }

    .clearfix {
      *zoom: 1;
    }

    .float-left {
      float: left;
      width: 100px;
      height: 100px;
      background-color: lightblue;
    }
  </style>
</head>

<body>
  <div class="clearfix">
    <div class="float-left"></div>
  </div>
  <p>这是一段文本，不会受上方浮动元素影响。</p>
</body>

</html>
```

- **优点**：不仅保持了 HTML 结构简洁，而且兼容包括 IE 在内的多种浏览器，是一种广泛应用的清除浮动解决方案。其中 `*zoom: 1` 是针对 IE 浏览器触发 hasLayout 机制，使 IE 能正确处理浮动。





## 4. 页面导入样式时，使用 link 和@import 有什么区别？

> 1. Link 属于 html 标签，而@import 是 CSS 中提供的
> 2. 在页面加载的时候，link 会同时被加载，而@import 引用的 CSS 会在页面加载完成后才会加载引用的 CSS
> 3. @import 只有在 ie5 以上才可以被识别，而 link 是 html 标签，不存在浏览器兼容性问题
> 4. Link 引入样式的权重大于@import 的引用（@import 是将引用的样式导入到当前的页面中）



### 1. 加载顺序与时机

- **`link`**：是 HTML 标签，在页面加载时，浏览器会同时并行加载 `link` 引入的 CSS 文件，与页面的其他资源（如图片、脚本等）一同加载。这意味着样式可以尽早加载并应用到页面，不会阻塞页面的渲染。例如：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="styles.css">
  <title>Document</title>
</head>
<body>
  <!-- 页面内容 -->
</body>
</html>
```

- **`@import`**：是 CSS 规则，在 CSS 文件被解析时才会加载。这会导致它在页面渲染过程中才开始加载样式，可能会阻塞页面的渲染。如果 `@import` 位于页面底部的 CSS 文件中，在它之前的 HTML 元素可能会先以无样式的状态短暂呈现，直到样式加载完成。例如：

```css
/* styles.css */
@import 'additional - styles.css';
body {
  font - family: Arial, sans - serif;
}
```

### 2. 兼容性

- **`link`**：是 HTML 标签，被所有主流浏览器广泛支持，兼容性好。
- **`@import`**：在低版本的 Internet Explorer（IE5 及以下）中存在兼容性问题，这些浏览器不支持 `@import` 方式引入样式。

### 3. 可操作性

- **`link`**：可以通过 JavaScript 动态创建和修改。例如，通过 `document.createElement('link')` 创建 `link` 元素，然后设置其 `rel` 和 `href` 属性来动态引入不同的样式表，以实现换肤等功能。例如：

```javascript
var link = document.createElement('link');
link.rel ='stylesheet';
link.href = 'new - styles.css';
document.head.appendChild(link);
```

- **`@import`**：不能通过 JavaScript 直接操作，灵活性较差。它只能在 CSS 文件内部使用，并且一旦导入，无法动态更改。

### 4. 功能特性

- **`link`**：除了引入样式表，还可以用于定义文档与外部资源的其他关系，如 `rel="icon"` 用于指定网站图标。
- **`@import`**：主要用于在 CSS 文件中引入其他 CSS 文件，功能相对单一。

综上所述，在现代前端开发中，由于 `link` 在加载性能、兼容性和可操作性上具有优势，通常优先使用 `link` 标签来引入样式表。只有在某些特定场景，如在 CSS 文件内部需要引入其他样式片段时，才会考虑使用 `@import`。




## 5. 伪元素和伪类的区别？

伪元素和伪类是 CSS 中用于选择和设置元素样式的两种重要方式，它们存在以下区别：

### 1. 概念与作用

- **伪类**：用于向某些选择器添加特殊的效果，基于元素的状态或与其他元素的关系来选择元素。它本质上是为了选择 DOM 树中已有的元素，但这些元素处于特定状态，比如链接的 `:hover`（鼠标悬停）、`:active`（被激活，如点击时）、`:visited`（已访问过）等状态，或者元素在文档结构中的位置，如 `:first-child`（第一个子元素）、`:nth-child(n)`（第 n 个子元素）等。伪类可以让开发者在不改变 HTML 结构的前提下，根据元素的不同状态或位置应用不同的样式。例如：

```css
a:hover {
  color: red;
}
li:first-child {
  font-weight: bold;
}
```

- **伪元素**：用于创建一些不在文档树中的元素，并为其添加样式。这些元素实际上并不存在于 HTML 文档中，而是通过 CSS 生成的虚拟元素。常见的伪元素有 `::before` 和 `::after`，它们可以在元素内容的前面或后面插入新的内容。例如，在段落前面添加一个图标：

```css
p::before {
  content: "📌";
  color: blue;
}
```

### 2. 语法

- **伪类**：使用单个冒号 `:` 作为前缀，紧跟在选择器后面。例如 `a:hover`、`li:nth-child(2)`。
- **伪元素**：在 CSS3 规范中，使用双冒号 `::` 作为前缀，紧跟在选择器后面，如 `p::before`、`div::first-line`。不过，为了兼容旧版本浏览器，对于 `::before` 和 `::after` 这两个最常用的伪元素，单冒号写法 `:before` 和 `:after` 也被大多数浏览器支持，但建议统一使用双冒号写法以符合 CSS3 规范。

### 3. 可应用数量

- **伪类**：一个选择器可以同时使用多个伪类，以满足更复杂的选择条件。例如，`a:hover:active` 表示链接在鼠标悬停且被激活时的状态。
- **伪元素**：一个选择器通常只能使用一个伪元素。如果在一个选择器后使用多个伪元素，只有最后一个会生效。例如，`p::before::after` 这样的写法，`::after` 会覆盖 `::before` 的设置（虽然这种写法本身不符合规范且不推荐）。

### 4. 对 DOM 的影响

- **伪类**：不会改变 DOM 结构，只是根据元素已有的状态或关系来应用样式。无论元素处于何种伪类状态，它在 DOM 树中的结构和属性都不会发生变化。
- **伪元素**：虽然没有直接改变原有的 DOM 树结构，但它创建了实际上不存在于文档中的虚拟元素，这些虚拟元素在渲染时会被插入到文档中相应的位置，影响页面的呈现。例如，通过 `::before` 和 `::after` 添加的内容会在页面上显示，就好像是文档中真实存在的元素一样。




## 6. CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3 新增伪类有那些？

### 1. CSS 选择符

- **元素选择符**：根据元素名称选择元素，如 `p` 选择所有段落元素，`div` 选择所有 `div` 元素。
- **类选择符**：以点号（`.`）开头，根据元素的 `class` 属性值选择元素，如 `.container` 选择所有 `class` 属性值包含 `container` 的元素。
- **ID 选择符**：以井号（`#`）开头，根据元素的 `id` 属性值选择唯一的元素，如 `#main` 选择 `id` 为 `main` 的元素。由于其具有唯一性，在页面中 `id` 应避免重复使用。
- **通配符选择符**：使用星号（`*`），表示选择文档中的所有元素，如 `* { margin: 0; padding: 0; }` 会将所有元素的外边距和内边距设置为 0 。
- **属性选择符**：根据元素的属性及属性值选择元素。例如，`a[href]` 选择所有带有 `href` 属性的 `a` 元素；`input[type="text"]` 选择 `type` 属性值为 `text` 的 `input` 元素。
- **后代选择符**：使用空格分隔两个选择器，选择作为第一个选择器后代的第二个选择器元素。如 `div p` 选择 `div` 元素内部的所有 `p` 元素，无论嵌套多深。
- **子选择符**：使用大于号（`>`）分隔两个选择器，仅选择作为第一个选择器直接子元素的第二个选择器元素。例如，`ul > li` 只选择 `ul` 元素的直接子 `li` 元素，而不会选择孙子辈及以下的 `li` 元素。
- **相邻兄弟选择符**：使用加号（`+`）分隔两个选择器，选择紧接在第一个选择器元素之后的第二个选择器元素，且它们具有相同的父元素。例如，`h1 + p` 选择紧跟在 `h1` 元素之后的 `p` 元素。
- **通用兄弟选择符**：使用波浪号（`~`）分隔两个选择器，选择在第一个选择器元素之后且具有相同父元素的所有第二个选择器元素。例如，`h1 ~ p` 选择 `h1` 元素之后的所有 `p` 元素，只要它们有相同的父元素。

### 2. 可继承属性

- **文本相关属性**：如 `font-family`（字体系列）、`font-size`（字体大小）、`font-weight`（字体粗细）、`color`（文本颜色）等，会从父元素继承到子元素。例如，设置 `body { font-family: Arial, sans-serif; }`，那么 `body` 内部的所有元素都会继承这个字体系列。
- **列表相关属性**：`list-style-type`（列表样式类型，如 `disc` 实心圆、`circle` 空心圆、`square` 方块等）、`list-style-image`（列表项标记图像）、`list-style-position`（列表项标记位置）等属性会继承。若在 `ul` 元素上设置 `list-style-type: square;`，其 `li` 子元素会自动采用方块作为列表标记。
- **表格相关属性**：`border-collapse`（边框合并）、`caption-side`（表格标题位置）等部分表格属性可继承。

### 3. 优先级算法

- **计算规则：**优先级由四个部分组成，从高到低依次为：
  - **内联样式**：直接写在元素的 `style` 属性中的样式，如 `<div style="color: red;">`，优先级最高，记为 `1,0,0,0`。
  - **ID 选择符**：每个 ID 选择符记为 `0,1,0,0`。例如 `#main { color: blue; }`，这里的 `#main` 选择符优先级为 `0,1,0,0`。
  - **类选择符、属性选择符、伪类**：每一个类选择符、属性选择符或伪类记为 `0,0,1,0`。比如 `.container { background-color: yellow; }`，`.container` 类选择符优先级为 `0,0,1,0`；`a:hover { text-decoration: underline; }` 中 `:hover` 伪类优先级也是 `0,0,1,0`。
  - **元素选择符、伪元素**：每一个元素选择符或伪元素记为 `0,0,0,1`。例如 `p { font-size: 16px; }`，`p` 元素选择符优先级为 `0,0,0,1`；`p::before { content: "前缀"; }` 中 `::before` 伪元素优先级同样为 `0,0,0,1`。
- **比较方法**：在比较优先级时，从左到右依次比较这四个部分的数值。如果某一部分数值不同，则数值大的优先级高；如果某一部分数值相同，则继续比较下一部分。例如，`0,1,0,0` 大于 `0,0,1,0`，所以 ID 选择符的优先级高于类选择符。当优先级相同时，后出现的样式会覆盖先出现的样式（在同一个样式表中，或在多个样式表按顺序加载的情况下）。

### 4. CSS3 新增伪类

- **结构性伪类**
  - **`:nth-child(n)`**：选择父元素的第 `n` 个子元素，`n` 可以是数字、关键字（如 `even` 偶数、`odd` 奇数）或公式（如 `2n` 偶数、`2n + 1` 奇数）。例如，`li:nth-child(2)` 选择每个父元素下的第二个 `li` 子元素；`li:nth-child(even)` 选择每个父元素下的偶数位置的 `li` 子元素。
  - **`:nth-of-type(n)`**：选择父元素中特定类型的第 `n` 个元素。与 `:nth-child(n)` 的区别在于，它只针对同类型元素计数。例如，在一个包含多种元素的父元素中，`p:nth-of-type(3)` 选择父元素内的第三个 `p` 元素，而不考虑其他类型的元素。
  - **`:first-of-type`**：选择父元素中特定类型的第一个元素。例如，`div:first-of-type` 选择每个父元素下的第一个 `div` 元素。
  - **`:last-of-type`**：选择父元素中特定类型的最后一个元素。例如，`span:last-of-type` 选择每个父元素下的最后一个 `span` 元素。
  - **`:only-of-type`**：如果某个元素是其父元素中唯一的该类型元素，则匹配该元素。例如，在一个父元素中只有一个 `h1` 元素时，`h1:only-of-type` 会匹配这个 `h1` 元素。
  - **`:only-child`**：如果某个元素是其父元素的唯一子元素，则匹配该元素。与 `:only-of-type` 的区别在于，`:only-child` 不考虑元素类型，只要是唯一子元素就匹配。
- **目标伪类**
  - **`:target`**：当页面的 `URL` 包含一个锚点（如 `#section1`），且锚点指向的元素就是该选择符所选择的元素时，匹配该元素。常用于实现页面内跳转时目标元素的样式改变。例如，当点击链接跳转到 `id` 为 `section1` 的元素时，`#section1:target { background-color: lightblue; }` 会使 `section1` 元素背景变为浅蓝色。
- **UI 状态伪类**
  - **`:enabled`**：选择所有启用状态的表单元素（如 `input`、`select`、`button` 等）。例如，`input:enabled { background-color: white; }` 会设置启用状态的 `input` 元素背景色为白色。
  - **`:disabled`**：选择所有禁用状态的表单元素。例如，`input:disabled { opacity: 0.5; }` 会使禁用状态的 `input` 元素透明度变为 0.5 ，呈现出不可用的视觉效果。
  - **`:checked`**：选择所有被选中的表单元素，如单选框（`input[type="radio"]`）和复选框（`input[type="checkbox"]`）。例如，`input[type="checkbox"]:checked { background-color: green; }` 会使被选中的复选框背景变为绿色。
- **否定伪类**
  - **`:not(selector)`**：选择不符合指定选择器的元素。例如，`li:not(.active)` 选择所有 `class` 不为 `active` 的 `li` 元素。可以用于排除某些特定元素，使样式应用更灵活。




## 7. 行内元素和块级元素的具体区别是什么？行内元素的 padding 和 margin 可设置吗？

在 HTML 中，行内元素和块级元素在显示、布局、特性等方面存在明显区别：

### 1. 显示特点

- **块级元素**

  - 独占一行，其宽度默认是父元素的 100%，除非通过 CSS 的 `width` 属性另行设置。
  - 可以设置 `width`、`height`、`margin`、`padding` 等属性来控制其尺寸和周围空间。

  - 块级元素内部可以包含块级元素和行内元素。例如，一个 `div` 块级元素内部可以嵌套另一个 `div` 块级元素，也可以包含 `span` 行内元素。

- **行内元素**

  - 不会独占一行，多个行内元素在同一行显示，直到该行排满才会换行。
  - 行内元素默认宽度和高度取决于其内容，一般不能直接设置 `width` 和 `height` 属性（但 `img`、`input` 等替换元素除外）。例如，`span` 元素的宽度会根据其内部文本内容自动调整：

  - 行内元素的 `margin-top`、`margin-bottom` 和 `padding-top`、`padding-bottom` 属性在某些浏览器下对布局影响有限（不同浏览器表现可能不同），但 `margin-left`、`margin-right` 和 `padding-left`、`padding-right` 可以正常影响元素间的水平间距。例如：

  - 行内元素内部一般只能包含文本和其他行内元素，不能包含块级元素。但 `a` 标签是个例外，它可以包含块级元素，不过这在 HTML 规范中属于特殊情况。

### 2. 常见元素举例

- **块级元素**：常见的有 `div`、`p`、`h1 - h6`（标题元素）、`ul`、`ol`、`li`、`table`、`form` 等。这些元素在页面布局中常用于构建较大的结构单元，如页面分区、段落、列表等。
- **行内元素**：常见的有 `span`、`a`、`img`、`input`、`strong`（加粗文本）、`em`（斜体文本）、`label` 等。它们通常用于处理文本中的特定样式或功能，如超链接、图片展示、表单输入等。

### 3. 用途与场景

- **块级元素**：常用于页面的整体布局，划分不同的功能区域，如页眉、页脚、导航栏、主体内容区域等。例如，使用 `div` 元素将页面划分为不同的板块，每个板块可以设置独立的样式和布局。
- **行内元素**：主要用于在文本流中对部分文本进行样式设置或添加交互功能。比如在段落文本中，使用 `span` 为特定文字设置独特的颜色或样式，使用 `a` 标签为部分文本添加超链接。

## 8. 什么是外边距重叠？重叠的结果是什么？

外边距重叠（Margin Collapse）是 CSS 中一个重要的概念，主要发生在块级元素之间，它**指的是两个或多个相邻块级元素的外边距（`margin`）在垂直方向上合并为一个外边距的现象。**

### 外边距重叠的场景

1. **相邻兄弟元素**：当两个相邻的块级兄弟元素之间没有其他内容（如边框、内边距、行内元素等）分隔时，它们的垂直外边距会重叠。例如：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    .box1 {
      margin-bottom: 20px;
      background-color: lightblue;
    }

    .box2 {
      margin-top: 30px;
      background-color: lightgreen;
    }
  </style>
</head>

<body>
  <div class="box1">第一个盒子</div>
  <div class="box2">第二个盒子</div>
</body>

</html>
```

这里 `.box1` 的 `margin-bottom` 和 `.box2` 的 `margin-top` 会重叠，最终两个盒子之间的垂直间距是 `30px`，而不是 `20px + 30px = 50px`。

2. **父元素与第一个或最后一个子元素：**

- 如果块级父元素没有上边框（`border-top`）、上内边距（`padding-top`），且子元素的 `margin-top` 没有被触发 BFC（块级格式化上下文），那么子元素的 `margin-top` 会与父元素的 `margin-top` 重叠。例如：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    .parent {
      background-color: lightgray;
    }

    .child {
      margin-top: 20px;
      background-color: lightblue;
    }
  </style>
</head>

<body>
  <div class="parent">
    <div class="child">子元素</div>
  </div>
</body>

</html>
```

此时，`.child` 的 `margin-top` 会与 `.parent` 的 `margin-top` 重叠，表现为父元素整体上移 `20px`。

- 类似地，如果块级父元素没有下边框（`border-bottom`）、下内边距（`padding-bottom`），且子元素的 `margin-bottom` 没有被触发 BFC，那么子元素的 `margin-bottom` 会与父元素的 `margin-bottom` 重叠

3. **空块级元素**：

   一个空的块级元素，如果它既没有边框、内边距，也没有内容，并且上下外边距都存在时，其上下外边距会重叠。例如：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    .empty {
      margin-top: 20px;
      margin-bottom: 30px;
    }
  </style>
</head>

<body>
  <div class="empty"></div>
</body>

</html>
```

这个空 `div` 的上下外边距会重叠，最终该元素在垂直方向上只占据 `30px` 的外边距空间。

### 重叠的结果

1. **取最大外边距值**：在相邻兄弟元素外边距重叠时，重叠后的外边距大小是参与重叠的外边距中的最大值。如前面第一个例子，`.box1` 的 `margin-bottom` 为 `20px`，`.box2` 的 `margin-top` 为 `30px`，重叠后外边距为 `30px`。
2. **传递合并**：在父元素与子元素外边距重叠场景中，外边距会合并并传递给父元素。例如第二个例子，子元素的 `margin-top` 与父元素的 `margin-top` 重叠，最终父元素整体上移，就好像是父元素本身具有这个 `margin-top` 值一样。

外边距重叠可能会导致页面布局与预期不符，在开发过程中需要注意并合理利用或避免这种现象，比如通过触发 BFC 来阻止父元素与子元素的外边距重叠，或通过设置内边距等方式改变布局结构来避免相邻元素外边距重叠产生意外效果。




## 9. rgba()和 opacity 的透明效果有什么不同

`rgba()` 和 `opacity` 都能实现透明效果，但它们存在一些关键差异：

### 1. 作用范围

- **`rgba()`**：`rgba()` 是 `color` 属性的一种取值方式，其中 `a` 代表透明度（取值范围从 `0` 到 `1`，`0` 表示完全透明，`1` 表示完全不透明），它仅对元素的颜色部分（如背景色、文本颜色等）起作用。例如，设置元素背景色为半透明：

```css
div {
  background-color: rgba(0, 128, 255, 0.5); /* 蓝色背景，50% 透明度 */
}
```

此时，只有背景色是半透明的，元素内部的子元素不会受到该透明度的影响，它们的颜色和透明度保持自身设置。

- **`opacity`**：`opacity` 属性应用于整个元素，包括元素的内容、背景、边框等所有部分，同时也会影响该元素的所有子元素。例如：

```css
div {
  opacity: 0.5; /* 整个元素及其子元素都变为 50% 透明度 */
}
```

如果该 `div` 内部有文本、图片或其他子元素，它们都会随着父元素一起变得半透明。

### 2. 继承特性

- **`rgba()`**：由于 `rgba()` 只针对元素的颜色设置透明度，不影响子元素的透明度设置，所以子元素不会继承父元素通过 `rgba()` 设置的透明度。每个子元素可以根据自身需求设置独立的颜色和透明度。例如：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    .parent {
      background- color: rgba(255, 0, 0, 0.5); /* 红色背景，50% 透明度 */
    }

    .child {
      background-color: rgba(0, 255, 0, 1); /* 子元素绿色背景，完全不透明 */
    }
  </style>
</head>

<body>
  <div class="parent">
    <div class="child">子元素</div>
  </div>
</body>

</html>
```

- **`opacity`**：`opacity` 设置的透明度具有继承性，子元素会继承父元素的透明度。即便子元素自身设置了 `opacity`，最终的透明度也是在继承父元素透明度基础上的叠加效果。例如：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    .parent {
      opacity: 0.5; /* 父元素 50% 透明度 */
    }

    .child {
      opacity: 0.8; /* 子元素自身设置 80% 透明度 */
    }
  </style>
</head>

<body>
  <div class="parent">
    <div class="child">子元素</div>
  </div>
</body>

</html>
```

在这个例子中，子元素最终的透明度是父元素透明度 `0.5` 与自身透明度 `0.8` 的叠加效果，看起来会比父元素更透明。

### 3. 对布局和事件的影响

- **`rgba()`**：**仅改变颜色透明度，不影响元素的布局和事件响应。**元素在页面中的占位空间以及对鼠标点击、悬停等事件的响应区域，与不透明时相同。例如，一个半透明背景的按钮，其可点击区域依然是完整的按钮大小。
- **`opacity`**：虽然元素透明度改变，但它在页面布局中的占位空间不变。然而，由于整个元素包括其内部子元素都变得透明，可能会给用户一种元素不可操作的错觉。但实际上，透明元素依然可以响应事件，比如点击一个透明度为 `0.5` 的按钮，仍然会触发按钮的点击事件。不过在某些情况下，这种透明状态下的事件响应可能与用户预期不符，需要额外注意。

在实际开发中，应根据具体需求选择使用 `rgba()` 或 `opacity`。如果只想对元素的颜色进行透明处理且不影响子元素和布局事件，`rgba()` 是更好的选择；如果需要整个元素及其子元素同时呈现透明效果，`opacity` 更为合适。




## 10. css 中可以让文字在垂直和水平方向上重叠的两个属性是什么？

垂直方向：`line-height`

水平方向：`letter-spacing`

那么问题来了，关于 `letter-spacing` 的妙用知道有哪些么？

答案:可以用于消除 `inline-block` 元素间的换行符空格间隙问题。

1. `line - height` 属性
   - **定义与作用**：`line - height` 属性用于设置行间的距离，即一行文字的基线（baseline）与下一行文字基线之间的距离。它会影响文本在垂直方向上的布局与间距，对多行文本的外观和可读性有重要影响。
   - **取值类型**
     - **具体数值**：如 `line-height: 20px`，表示固定的行距值为 20 像素。无论字体大小如何变化，行距始终保持 20 像素。这种方式适合对行距有精确控制需求的场景。
     - **无单位数字**：例如 `line-height: 1.5`，这里的数字是基于当前字体大小的倍数。若当前字体大小为 16px，那么行距就是 `16px * 1.5 = 24px`。当字体大小改变时，行距会相应按比例调整，适用于需要保持行距与字体大小相对比例的情况。
     - **百分比**：如 `line-height: 150%`，同样是基于当前字体大小的比例来计算行距。即如果字体大小是 16px，行距则为 `16px * 150% = 24px`。与无单位数字类似，会随字体大小变化而调整。
     - **长度值（em、rem 等）**：使用 `em` 或 `rem` 单位时，也是基于字体大小来计算行距。`em` 是相对于当前元素字体大小，`rem` 是相对于根元素（通常是 `<html>`）的字体大小。例如 `line-height: 1.2em`，若当前元素字体大小为 16px，则行距为 `16px * 1.2 = 19.2px`。
   - **应用场景**
     - **提高可读性**：在正文文本中，合适的 `line-height` 能使多行文字之间有恰当的间距，便于阅读。一般网页正文的 `line - height` 取值在 1.5 - 2 之间较为常见。
     - **垂直居中**：对于单行文本，可以通过将 `line-height` 设置为与元素高度相同的值，实现文本在元素内的垂直居中。例如：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    .box {
      height: 50px;
      line-height: 50px;
      background-color: lightblue;
    }
  </style>
</head>

<body>
  <div class="box">单行文本垂直居中</div>
</body>

</html>
```

1. `letter-spacing` 属性
   - **定义与作用**：`letter-spacing` 属性用于设置字符之间的间距。通过调整该属性，可以使文字看起来更松散或更紧凑，从而改变文本的视觉效果。
   - **取值类型**
     - **长度值**：常见单位有 `px`、`em`、`rem` 等。例如 `letter-spacing: 2px` 表示字符间的间距增加 2 像素；`letter - spacing: 0.1em` 则是基于当前字体大小，每个字符间增加 0.1 倍字体大小的间距。若字体大小为 16px，间距增加量就是 `16px * 0.1 = 1.6px`。
     - **normal**：默认值，字符间距为正常间距，由字体本身决定。
   - **应用场景**
     - **标题与强调效果**：在标题中适当增加 `letter-spacing`，可以使标题更醒目，增强视觉冲击力。比如一些广告标语、导航栏标题等。例如：

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    h1 {
      letter-spacing: 3px;
    }
  </style>
</head>

<body>
  <h1>独特的标题效果</h1>
</body>

</html>
```

- **特殊设计需求**：在某些特定的设计风格中，如复古风格、艺术字体排版等，可能需要通过调整 `letter-spacing` 来实现独特的文本布局效果。




## 11. px 和 em 的区别。

答案：px 和 em 都是长度单位，区别是，px 的值是固定的，指定是多少就是多少，计算比较容易。em 得值不是固定的，并且 em 会继承父级元素的字体大小。

浏览器的默认字体高都是 16px。所以未经调整的浏览器都符合: 1em=16px。那么 12px=0.75em, 10px=0.625em。

在 CSS 中，`px`、`em` 和 `rem` 都是用于定义元素尺寸的单位，但它们的工作原理和适用场景有显著区别：

### **1. `px`（像素）**

- **绝对单位**：`1px` 代表屏幕上的一个物理像素点。
- **特点**
  - 固定大小，不受父元素或根元素影响。
  - 在不同设备上可能显示不同（高 DPI 屏幕会缩放）。
- **适用场景**：边框、固定尺寸元素（如图标）等需要精确控制的场景。
- **示例**：

```CSS
.box { width: 200px; } /* 始终为 200 像素 */
```

### **2. `em`（相对父元素）**

- **相对单位**：`1em` 等于 **当前元素** 的 `font-size` 值。
- **特点**
  - 继承父元素的字体大小（若自身未设置 `font-size`）。
  - **级联效应**：嵌套元素会逐层放大或缩小。
- **计算公式**：

```CSS
元素尺寸 = em 值 × 当前元素的 font-size
```

- **示例**：

```CSS
  div { font-size: 16px; }
  p { font-size: 1.2em; } /* 16px × 1.2 = 19.2px */
  span { font-size: 1.2em; } /* 父级 p 的 19.2px × 1.2 = 23.04px */
```

- **适用场景**：内边距、外边距等需要相对于自身字体大小调整的属性。

### **3. `rem`（Root EM，相对根元素）**

- **相对单位**：`1rem` 等于 **根元素（`<html>`）** 的 `font-size` 值。
- **特点**
  - 直接基于根元素，**无视父元素**，避免级联问题。
  - 默认根字体大小为 `16px`（浏览器默认值）。
- **计算公式**：

```CSS
元素尺寸 = rem 值 × <html> 的 font-size
```

- **示例**：

```css
  html { font-size: 16px; }
  p { font-size: 1.5rem; } /* 16px × 1.5 = 24px */
  div { font-size: 0.8rem; } /* 16px × 0.8 = 12.8px */
```

- **适用场景**：全局布局（宽度、高度）、响应式设计（通过媒体查询修改根字体大小实现整体缩放）。

### **关键区别总结**

| **单位** | **参考基准**       | **是否级联** | **响应式适配** |
| -------- | ------------------ | ------------ | -------------- |
| `px`     | 固定像素           | ❌ 否         | ❌ 需手动调整   |
| `em`     | 当前元素的字体大小 | ✅ 是         | ⚠️ 需谨慎使用   |
| `rem`    | 根元素字体大小     | ❌ 否         | ✅ 高效         |

### **最佳实践建议**

1. **优先使用 `rem`**： 全局布局使用 `rem`，避免级联问题，方便响应式调整（通过修改 `html { font-size: ... }` 实现整体缩放）。
2. **局部使用 `em`**： 元素内边距、行高等需要相对于自身字号的属性使用 `em`（如 `line-height: 1.5em`）。
3. **固定尺寸用 `px`**： 边框、阴影等无需缩放的细节使用 `px`（如 `border: 1px solid #000`）。

> 💡 **响应式技巧**： 设置根字体大小为百分比（如 `html { font-size: 62.5%; }`），使 `1rem = 10px`（默认 `16px × 62.5% = 10px`），简化计算（例如 `1.6rem = 16px`）。






## 12. 如何垂直居中一个元素？

方法一：绝对定位居中（原始版之已知元素的高宽）

```css
.content {
  width: 200px;
  height: 200px;
  background-color: #6699ff;
  position: absolute; /*父元素需要相对定位*/
  top: 50%;
  left: 50%;
  margin-top: -100px; /*设为高度的1/2*/
  margin-left: -100px; /*设为宽度的1/2*/
}
```

方法二：绝对定位居中（改进版之一未知元素的高宽）

```css
.content {
  width: 200px;
  height: 200px;
  background-color: #6699ff;
  position: absolute; /*父元素需要相对定位*/
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /*在水平和垂直方向上各偏移-50%*/
}
```

方法三：绝对定位居中（改进版之二未知元素的高宽）

```css
.content {
  width: 200px;
  height: 200px;
  background-color: #6699ff;
  margin: auto; /*很关键的一步*/
  position: absolute; /*父元素需要相对定位*/
  left: 0;
  top: 0;
  right: 0;
  bottom: 0; /*让四个定位属性都为0*/
}
```

方法四：flex 布局居中

```css
body {
  display: flex; /*设置外层盒子display为flex*/
  align-items: center; /*设置内层盒子的垂直居中*/
  justify-content: center; /*设置内层盒子的水平居中*/
  
}
.content {
  width: 200px;
  height: 200px;
  background-color: #6699ff;
}
```

那么问题来了，如何垂直居中一个 `img`（用更简便的方法。）

```css
.content {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
```



## 13. BFC 详解

BFC（Block Formatting Context，块级格式化上下文）是 CSS 中一个重要的布局概念，它决定了元素如何对其内容进行定位和与其他元素的关系。BFC 是一个独立的渲染区域，内部布局不受外部影响，也不会影响外部元素。

### 一、BFC 的触发条件（满足任一即可）

1. **根元素**（`<html>`）
2. **浮动元素**（`float` 不为 `none`）
3. **绝对定位元素**（`position: absolute/fixed`）
4. **display 值**
   - `inline-block`
   - `table-cell`
   - `table-caption`
   - `flex/inline-flex`
   - `grid/inline-grid`
5. **overflow 值**（非visible属性）：
   - `hidden`
   - `auto`
   - `scroll`
6. **contain 值**：`layout`, `content`, 或 `paint`
7. **column-span**: `all`

### 二、BFC 的核心特性

1. **内部盒子垂直排列**：

```css
.bfc-container {
 display: flow-root; /* 创建BFC */
}
```

```html
<div class="bfc-container">
 <div>Box 1</div>
 <div>Box 2</div> <!-- 垂直排列 -->
</div>
```

2. **外边距折叠（Margin Collapsing）消失**：

```CSS
   .normal > div { margin: 20px 0; } /* 上下外边距会折叠 */
   .bfc-container > div { margin: 20px 0; } /* 不会折叠 */
```

3. **包含内部浮动**：

```CSS
   .float-container {
     border: 2px solid;
   }
   .float-container::after {
     content: '';
     display: table;
     clear: both; /* 传统清除浮动 */
   }
   /* BFC方案： */
   .bfc-container {
     overflow: hidden; /* 自动包含浮动 */
   }
```

4. **隔离外部浮动**：

```CSS
   .float-left { float: left; width: 200px; }
   .bfc-content {
     overflow: hidden; /* 避免被浮动覆盖 */
   }
```

5. **阻止元素被浮动覆盖**：

```HTML
   <div class="float-left">浮动元素</div>
   <div class="bfc-container">BFC内容不会被覆盖</div>
```

### 三、BFC 的实际应用场景

1. **清除浮动**（替代 clearfix）：

```
CSS   .clearfix {
     display: flow-root; /* 现代方案 */
   }
```

1. **创建自适应两栏布局**：

```
CSS   .sidebar {
     float: left;
     width: 200px;
   }
   .main-content {
     overflow: hidden; /* 自适应剩余宽度 */
   }
```

1. **避免外边距穿透**：

```
CSS   .parent {
     overflow: hidden; /* 创建BFC */
   }
   .child {
     margin-top: 50px; /* 不会穿透父元素 */
   }
```

1. **防止文字环绕**：

```
CSS   .image { float: left; }
   .text-content {
     overflow: hidden; /* 文字不再环绕图片 */
   }
```

### 四、BFC 布局规则示意图

```
 +----------------------------+
|          BFC容器           |
|  +----------------------+  |
|  | 垂直排列的块级盒子    |  |
|  +----------------------+  |
|  | 包含浮动元素          |  |
|  |   +---+               |  |
|  |   |浮动|              |  |
|  |   +---+               |  |
|  +----------------------+  |
|                            |
|  隔离的外部元素             |
|  ↓ 不会重叠/折叠           |
+----------------------------+
```

### 五、现代布局建议

1. **优先使用 `display: flow-root`**：

```CSS
   .bfc {
     display: flow-root; /* 最纯净的BFC创建方式 */
   }
```

相比 `overflow: hidden` 不会裁剪内容，比 `float` 不会改变布局模式

2. **替代方案比较**

| 方法                 | 优点                    | 缺点                     |
| -------------------- | ----------------------- | ------------------------ |
| `display: flow-root` | 无副作用                | 兼容性需考虑（IE不支持） |
| `overflow: hidden`   | 兼容性好                | 可能裁剪溢出内容         |
| `float`              | 兼容性好                | 改变布局模式             |
| `display: flex/grid` | 创建BFC同时提供现代布局 | 可能改变子元素布局       |

### 六、BFC 与 其他格式化上下文

1. **IFC**（行内格式化上下文）：`display: inline` 的元素
2. **FFC**（弹性格式化上下文）：`display: flex/inline-flex`
3. **GFC**（网格格式化上下文）：`display: grid/inline-grid`

> **最佳实践**：理解 BFC 机制后，优先使用 `display: flow-root` 创建无副作用的 BFC，在需要清除浮动或隔离布局时主动应用此特性。




## 14.用纯 CSS 创建一个三角形的原理是什么？ 

在CSS中创建三角形主要利用了`border`（边框）属性的特性。其核心原理是：**将一个元素的宽度和高度设置为0，然后通过设置不同方向的边框颜色和宽度，利用边框交界处为斜面的特性来形成三角形**。

### 一、具体步骤

1. **设置元素尺寸为0**：

```CSS
   .triangle {
     width: 0;
     height: 0;
   }
```

2. **利用边框形成三角形**

- 边框实际上是四个梯形（当元素有宽度和高度时）
- 当元素宽度和高度为0时，边框变为四个三角形

```CSS
   .triangle {
     border-top: 50px solid red;
     border-right: 50px solid transparent;
     border-bottom: 50px solid transparent;
     border-left: 50px solid transparent;
   }
```

上述代码会生成一个**朝下的红色三角形**。

### 二、原理解析

- 每个边框在交界处是以45度斜角连接的。
- 当元素没有内容尺寸时（宽高为0），边框会从中心点向四周延伸。
- 通过将其中三个边框设置为透明（`transparent`），只保留一个边框的颜色，即可形成三角形。

### 三、方向控制

| 三角形方向 | 关键CSS设置                      |
| ---------- | -------------------------------- |
| **向上**   | `border-bottom` 有颜色，其余透明 |
| **向下**   | `border-top` 有颜色，其余透明    |
| **向左**   | `border-right` 有颜色，其余透明  |
| **向右**   | `border-left` 有颜色，其余透明   |

### 四、示例：创建一个朝上的绿色三角形

```CSS
.triangle-up {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 60px solid green; /* 高度由底边框宽度决定 */
}
```

### 五、扩展技巧：等腰直角三角形

通过设置不对称的边框宽度

```CSS
.right-angle-triangle {
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-left: 80px solid orange; /* 直角在右侧 */
  border-bottom: 40px solid transparent;
}
```

### 六、注意事项

1. **兼容性**：所有现代浏览器均支持。
2. **边框宽度**：三角形的大小由边框宽度决定。
3. **颜色透明**：必须将不需要的边框设置为`transparent`（不能用`none`或`0`）。
4. **替代方案**：也可使用`clip-path`（但兼容性较差）：

```css
   .clip-triangle {
     width: 100px;
     height: 100px;
     background: blue;
     clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
   }
```

### 七、实际应用场景

- 下拉菜单的箭头指示标
- 气泡对话框的尖角
- 步骤流程图中的连接箭头

通过灵活调整边框宽度和颜色，可以创建任意朝向和大小的纯CSS三角形，无需图片资源，且可无限缩放。

```css
div {
  width: 0;
  height: 0;
  border-top: 40px solid transparent;
  border-left: 40px solid transparent;
  border-right: 40px solid transparent;
  border-bottom: 40px solid #ff0000;
}
```




## 15. Sass、LESS 是什么？大家为什么要使用他们？

### Sass 和 LESS 是什么？

Sass (Syntactically Awesome Style Sheets) 和 LESS (Leaner Style Sheets) 都是 **CSS 预处理器**，它们是 CSS 的超集，在 CSS 基础上增加了变量、嵌套、混合(mixin)、函数等编程特性，最终会编译成标准 CSS。

```base
开发者编写 Sass/LESS → 预处理器编译 → 生成浏览器可读的 CSS
```

### 为什么开发者要使用它们？

#### 1. **解决原生 CSS 的痛点**

- **缺乏变量**：原生 CSS 直到 CSS3 才支持变量(`var()`)，且兼容性有限
- **无法嵌套**：CSS 选择器必须完整重复书写层级关系
- **缺少计算**：CSS 不能直接进行数学运算
- **复用困难**：相似样式需要重复编写

#### 2. **核心优势特性**

##### 🎨 变量管理

```scss
///  Scss/Sass/LESS
$primary-color: #3498db;
$padding: 16px;

.button {
  background: $primary-color;
  padding: $padding;
}
```

> 统一修改主题色/间距时只需修改变量值

##### 🪆 嵌套规则

```scss
// Scss// Sass/LESS
.nav {
  ul {
    margin: 0;
    li { 
      padding: 5px;
      &:hover { color: red; }
    }
  }
}
```

> 编译后：

```css
CSS.nav ul { margin: 0; }
.nav ul li { padding: 5px; }
.nav ul li:hover { color: red; }
```

##### ♻️ 混合(Mixins)

```scss
// Scss// Sass
@mixin center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  @include center-flex;
}
Less// LESS
.border-radius(@radius) {
  border-radius: @radius;
}

.button {
  .border-radius(10px);
}
```

##### ➗ 运算能力

```scss
$container-width: 1000px;
.sidebar {
  width: $container-width / 4; // 直接计算
}
```

##### 📦 模块化

```scss
// _variables.scss
$colors: (primary: #3498db, secondary: #2ecc71);

// main.scss
@use 'variables';
.button {
  background: map-get(variables.$colors, primary);
}
```

#### 3. **工程化优势**

| 特性             | 原生 CSS | Sass/LESS |
| ---------------- | -------- | --------- |
| 变量系统         | ❌        | ✅         |
| 选择器嵌套       | ❌        | ✅         |
| 代码复用         | 有限     | 高        |
| 逻辑控制(if/for) | ❌        | ✅         |
| 自动前缀         | 需手动   | 可自动    |
| 源码压缩         | 需工具   | 内置      |

##### Sass 与 LESS 对比

| 特性           | Sass (.scss)        | LESS         |
| -------------- | ------------------- | ------------ |
| 语法           | 类CSS，支持缩进语法 | 完全类CSS    |
| 编译器         | Dart/C/Ruby         | JavaScript   |
| 流行度         | 更高(78%)           | 较广(22%)    |
| 逻辑控制       | @if/@else/@for      | 条件有限     |
| 颜色函数       | 更强大              | 基础         |
| 模块系统       | @use/@forward       | 无严格模块化 |
| 报错信息       | 更详细              | 较简单       |
| Bootstrap 支持 | v4 后默认           | v3 默认      |

> 统计来源：2023 State of CSS 调查

### 现代替代方案：PostCSS

虽然 Sass/LESS 仍然流行，但 **PostCSS + CSS 原生变量** 正在成为新趋势：

```css
/* 原生 CSS 变量 */
:root {
  --primary: #3498db;
}
.button {
  background: var(--primary);
  /* PostCSS 插件可添加 autoprefixer 等 */
}
```

### 何时选择 Sass/LESS？

- 需要复杂嵌套/逻辑控制时
- 遗留项目已使用预处理器
- 团队熟悉预处理器的开发流程

### 何时选择原生 CSS？

- 小型项目或简单样式
- 希望减少构建步骤
- 利用现代 CSS 特性(var()、calc()等)

## 最佳实践建议

1. **新项目**：考虑 PostCSS + 原生 CSS




## 16. display:none 与 visibility:hidden 的区别是什么？

>  display :  隐藏对应的元素但不挤占该元素原来的空间。visibility:  隐藏对应的元素并且挤占该元素原来的空间。
>
> 即是，使用 CSS display:none 属性后，HTML 元素（对象）的宽度、高度等各种属性值都将“丢失”;而使用 visibility:hidden 属性后，HTML 元素（对象）仅仅是在视觉上看不见（完全透明），而它所占据的空间位置仍然存在。

| **特性**              | `display: none`                  | `visibility: hidden`                        |
| --------------------- | -------------------------------- | ------------------------------------------- |
| **文档流影响**        | ❌ 完全从文档流移除               | ✅ 保留原有空间（占位）                      |
| **重排/重绘**         | 触发重排(Reflow) + 重绘(Repaint) | 仅触发重绘(Repaint)                         |
| **子元素 visibility** | 无法被子元素覆盖                 | 子元素可通过 `visibility: visible` 重新显示 |
| **交互能力**          | 完全不可交互                     | 不可交互但保留事件监听                      |
| **性能消耗**          | 较高（影响布局）                 | 较低（仅视觉隐藏）                          |
| **可访问性**          | 屏幕阅读器不可访问               | 屏幕阅读器可访问（部分浏览器）              |

### **视觉对比示例**

```HTML
<div class="box" style="background: coral;">正常元素</div>
<div class="box" style="background: lightblue; display: none;">display: none</div>
<div class="box" style="background: lightgreen;">后续元素会填补空缺</div>

<div class="box" style="background: coral; margin-top: 20px;">正常元素</div>
<div class="box" style="background: lightblue; visibility: hidden;">visibility: hidden</div>
<div class="box" style="background: lightgreen;">后续元素会保持原位置</div>
```

**渲染效果**：

```
 [正常元素] [后续元素会填补空缺]
          ↑ display:none 的元素完全不占空间

[正常元素] [           ] [后续元素会保持原位置]
          ↑ visibility:hidden 保留空白区域
```

### **技术细节深入**

#### 1. **文档流与盒模型**

- **display: none**
  - 浏览器渲染时会**完全忽略该元素**
  - 等同于「该元素不存在」
  - 示例：DOM 中移除此元素的效果
- **visibility: hidden**
  - 元素仍占据**原有空间**
  - 类似于将元素透明度设为0但保留物理结构

#### 2. **渲染性能**

- **display: none**

```JavaScript
  // 切换时会触发完整的渲染树重构
  element.style.display = 'none'; // 触发重排
  element.style.display = 'block'; // 再次触发重排
```

- **visibility: hidden**

```JavaScript
  // 仅触发图层重绘（性能更优）
  element.style.visibility = 'hidden'; 
```

#### 3. **子元素控制**

```HTML
<div style="visibility: hidden;">
  <p style="visibility: visible;">我仍然可见！</p>
</div>

<div style="display: none;">
  <p style="display: block;">我仍然不可见！</p> 
</div>
```

#### 4. **事件响应**

- **visibility: hidden**
  - 元素无法触发鼠标事件（如 `click`）
  - 但仍可通过 JavaScript 事件委托监听到

```JavaScript
  document.addEventListener('click', e => {
    if(e.target.style.visibility === 'hidden') {
      console.log('隐藏元素被点击了！'); // 仍会触发
    }
  });
```

### **何时选择哪种方式？**

#### ✅ 使用 `display: none` 的场景：

1. 需要**彻底移除元素**（如动态切换选项卡内容）
2. 移动端优先渲染时隐藏非关键内容
3. 减少 DOM 节点数量提升性能（如长列表虚拟滚动）

#### ✅ 使用 `visibility: hidden` 的场景：

1. 需要**保持布局稳定**（如占位防止页面跳动）
2. 实现淡入淡出动画的中间状态
3. 隐藏敏感数据但仍需屏幕阅读器访问

#### ⚠️ 注意共同点：

- 两者都无法被搜索引擎抓取（对 SEO 的影响相同）
- 都会隐藏元素的视觉呈现

### **现代 CSS 替代方案**

```CSS
/* 结合 opacity 和指针事件控制 */
.hidden {
  opacity: 0;
  pointer-events: none;
  position: absolute; /* 可选：移出文档流 */
}
```

> 这种方案能实现视觉隐藏+保留可访问性，但需要手动处理布局问题




## 17. 移动端 1px 问题的解决办法

### 问题根源分析

移动端 1px 问题源于**设备像素比（Device Pixel Ratio, DPR）**：

- 在 Retina 屏幕（如 iPhone）上，DPR 通常为 2 或 3
- CSS 中的 1px 对应的是逻辑像素（CSS 像素）
- 1 个逻辑像素会被渲染为 2 或 3 个物理像素，导致边框变粗

```
 普通屏幕：1 CSS 像素 = 1 物理像素
Retina 屏幕：1 CSS 像素 = 2×2 或 3×3 物理像素
```

### 解决方案对比

| 方法               | 原理              | 优点           | 缺点             | 兼容性       |
| ------------------ | ----------------- | -------------- | ---------------- | ------------ |
| 伪元素 + transform | 缩放边框          | 灵活、效果最佳 | 代码稍复杂       | 优秀         |
| viewport 缩放      | 调整视口比例 缩放 | 调整视口比例   | 一劳永逸         | 影响全局布局 |
| border-image       | 使用图片边框      | 简单直接       | 需要图片、不灵活 | 良好         |
| box-shadow         | 阴影模拟边框      | 实现简单       | 效果不完美       | 优秀         |
| SVG 方案           | 矢量图形边框      | 清晰锐利       | 实现复杂         | 良好         |
| 0.5px              | 直接使用小数      | 最简单         | 兼容性差         | 有限         |

### 详细解决方案

### 1. 伪元素 + transform（推荐）

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>1px 解决方案 - 伪元素+transform</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      padding: 20px;
      background: #f8f9fa;
      color: #333;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
    }
    
    h1 {
      text-align: center;
      margin: 30px 0;
      color: #2c3e50;
    }
    
    .explanation {
      background: white;
      border-radius: 10px;
      padding: 25px;
      margin-bottom: 30px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    .solution-section {
      margin: 40px 0;
    }
    
    .solution-title {
      font-size: 1.4rem;
      color: #3498db;
      margin-bottom: 20px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
    }
    
    .box {
      height: 100px;
      margin: 20px 0;
      position: relative;
      background: #f1f2f6;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    
    /* 标准1px边框（有问题的） */
    .normal-border {
      border: 1px solid #e74c3c;
    }
    
    /* 解决方案：伪元素+transform */
    .border-1px {
      position: relative;
    }
    
    .border-1px::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 200%;
      height: 200%;
      border: 1px solid #27ae60;
      transform: scale(0.5);
      transform-origin: 0 0;
      box-sizing: border-box;
      pointer-events: none;
    }
    
    /* 单边边框示例 */
    .border-top-1px {
      position: relative;
    }
    
    .border-top-1px::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: #9b59b6;
      transform: scaleY(0.5);
      transform-origin: 0 0;
    }
    
    .code-block {
      background: #2c3e50;
      color: #ecf0f1;
      padding: 15px;
      border-radius: 6px;
      font-radius: 6px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      margin: 15px 0;
      overflow-x: auto;
    }
    
    .comparison {
      display: flex;
      gap: 20px;
      margin: 30px 0;
    }
    
    .comparison-item {
      flex: 1;
      text-align: center;
    }
    
    .comparison-title {
      font-weight: bold;
      margin-bottom: 10px;
      color: #7f8c8d;
    }
    
    .device-info {
      background: #eafaf1;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
      text-align: center;
      font-weight: 500;
    }
    
    .dpr-badge {
      display: inline-block;
      background: #3498db;
      color: white;
      padding: 3px 8px;
      border-radius: 4px;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>移动端 1px 问题解决方案</h1>
    
    <div class="explanation">
      <h2>问题根源：设备像素比（DPR）</h2>
      <p>在 Retina 屏幕（如 iPhone）上，设备像素比（DPR）通常为 2 或 3，导致 CSS 的 1px 会被渲染为 2-3 个物理像素，使边框变粗。</p>
      
      <div class="device-info">
        当前设备像素比：<span class="dpr-badge" id="dprValue">计算中...</span>
      </div>
    </div>
    
    <div class="solution-section">
      <h2 class="solution-title">1. 伪元素 + transform（推荐方案）</h2>
      
      <div class="comparison">
        <div class="comparison-item">
          <div class="comparison-title">标准 1px 边框</div>
          <div class="box normal-border">边框变粗</div>
        </div>
        <div class="comparison-item">
          <div class="comparison-title">1px 解决方案</div>
          <div class="box border-1px">完美细边框</div>
        </div>
      </div>
      
      <div class="code-block">
/* 所有边框 */
.border-1px {
  position: relative;
}

.border-1px::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;    /* 放大2倍 */
  height: 200%;   /* 放大2倍 */
  border: 1px solid #27ae60;
  transform: scale(0.5); /* 缩小回50% */
  transform-origin: 0 0;
  box-sizing: border-box;
  pointer-events: none; /* 防止遮挡点击事件 */
}

/* 单边上边框 */
.border-top-1px::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: #9b59b6;
  transform: scaleY(0.5); /* Y轴缩放 */
  transform-origin: 0 0;
}
      </div>
    </div>
    
    <div class="solution-section">
      <h2 class="solution-title">2. viewport 缩放方案</h2>
      <p>通过 JavaScript 动态设置 viewport 的缩放比例</p>
      
      <div class="code-block">
// 根据设备像素比设置 viewport
const dpr = window.devicePixelRatio || 1;
const viewport = document.querySelector('meta[name="viewport"]');

if (dpr > 1) {
  const scale = 1 / dpr;
  viewport.setAttribute('content', 
    `width=device-width, initial-scale=${scale}, 
     maximum-scale=${scale}, minimum-scale=${scale}, 
     user-scalable=no`);
}

// 同时需要设置根字体大小
document.documentElement.style.fontSize = 
  `${100 * dpr}px`;
      </div>
      
      <p>优点：一劳永逸解决所有1px问题</p>
      <p>缺点：需要调整整个页面的布局和字体大小</p>
    </div>
    
    <div class="solution-section">
      <h2 class="solution-title">3. border-image 方案</h2>
      <div class="code-block">
.border-image-1px {
  border-width: 1px 0;
  border-image: url('data:image/png;base64,iVBORw0KGgo...') 2 0 stretch;
}
      </div>
      <p>使用 base64 图片创建1px边框，但不够灵活</p>
    </div>
    
    <div class="solution-section">
      <h2 class="solution-title">4. box-shadow 方案</h2>
      <div class="code-block">
.box-shadow-1px {
  box-shadow: 0 0.5px 0 0 #e74c3c; /* 下边框 */
}
      </div>
      <p>简单但效果不如其他方案完美，可能模糊</p>
    </div>
  </div>

  <script>
    // 显示当前设备像素比
    document.getElementById('dprValue').textContent = 
      window.devicePixelRatio || 1;
    
    // 添加边框切换功能用于演示
    document.querySelectorAll('.box').forEach(box => {
      box.addEventListener('click', function() {
        this.classList.toggle('normal-border');
        this.classList.toggle('border-1px');
      });
    });
  </script>
</body>
</html>
```



### 最佳实践建议

1. **通用方案**：使用伪元素 + transform 方法
   - 效果最好，兼容性佳
   - 可针对不同边框单独处理
2. **大型项目**：考虑 viewport 缩放方案
   - 一次性解决所有1px问题
   - 需要调整整体布局策略
3. **简单需求**：box-shadow 或 border-image
   - 快速实现但效果有限
4. **避免使用 0.5px**
   - 兼容性差（iOS8+，Android4.4+）
   - 部分浏览器会四舍五入为0或1px

### 伪元素方案优化技巧

```CSS
/* 响应不同 DPR 的媒体查询 */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  .border-1px::after {
    width: 200%;
    height: 200%;
    transform: scale(0.5);
  }
}

@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {
  .border-1px::after {
    width: 300%;
    height: 300%;
    transform: scale(0.333);
  }
}
```

这个方案通过媒体查询针对不同 DPR 设备进行优化，确保在各种设备上都能获得完美的1px显示效果。





## 18. 哪些 css 属性可以继承？

在 CSS 中，**可继承属性**是指那些值会自动从父元素传递给子元素的属性。理解这些属性对于编写高效、简洁的 CSS 代码至关重要。

### 可继承属性分类

#### 1. 文本相关属性

- `color`：文本颜色
- `font`：字体简写属性
- `font-family`：字体系列
- `font-size`：字体大小
- `font-style`：字体样式（如斜体）
- `font-weight`：字体粗细
- `font-variant`：字体变体（如小型大写字母）
- `line-height`：行高
- `letter-spacing`：字符间距
- `text-align`：文本对齐方式
- `text-indent`：文本缩进
- `text-transform`：文本转换（大小写控制）
- `word-spacing`：单词间距
- `direction`：文本方向（ltr/rtl）
- `white-space`：空白处理方式

#### 2. 列表相关属性

- `list-style`：列表样式简写
- `list-style-type`：列表项标记类型
- `list-style-position`：列表项标记位置
- `list-style-image`：列表项标记图像

#### 3. 表格相关属性

- `border-collapse`：表格边框合并方式
- `border-spacing`：表格边框间距
- `caption-side`：表格标题位置
- `empty-cells`：空单元格显示方式

#### 4. 其他属性

- `visibility`：元素可见性
- `cursor`：鼠标指针样式
- `quotes`：引号样式
- `orphans`：控制分页时页面底部保留的最少行数
- `widows`：控制分页时页面顶部保留的最少行数

### 不可继承属性（常见示例）

这些属性不会自动传递给子元素：

- 盒模型属性：`width`, `height`, `margin`, `padding`, `border`
- 定位属性：`position`, `top`, `right`, `bottom`, `left`, `z-index`
- 背景属性：`background`, `background-color`, `background-image`
- 显示属性：`display`, `float`, `clear`
- 其他：`overflow`, `vertical-align`, `text-decoration`, `box-shadow`



## 19. 几种常见的 CSS 布局

### 1. Flexbox 弹性布局

**核心特点**：一维布局模型，提供强大的空间分配和对齐能力

```HTML
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox 弹性布局</title>
  <style>
    .flex-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
    }
    
    .flex-item {
      flex: 1 1 200px;
      background: #3498db;
      color: white;
      padding: 20px;
      border-radius: 4px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">项目 1</div>
    <div class="flex-item">项目 2</div>
    <div class="flex-item">项目 3</div>
  </div>
</body>
</html>
```

**关键属性**：

- `flex-direction`：主轴方向（row/column）
- `justify-content`：主轴对齐方式
- `align-items`：交叉轴对齐方式
- `flex-wrap`：是否换行
- `flex-grow/flex-shrink`：伸缩比例

**适用场景**：

- 导航菜单
- 卡片布局
- 表单控件
- 媒体对象
- 垂直居中

### 2. CSS Grid 网格布局

**核心特点**：二维布局系统，行列同时控制

```HTML
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Grid 布局</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 100px auto;
      gap: 15px;
      grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    }
    
    .header { grid-area: header; background: #3498db; }
    .sidebar { grid-area: sidebar; background: #2ecc71; }
    .main { grid-area: main; background: #e74c3c; }
    .footer { grid-area: footer; background: #f39c12; }
    
    .grid-item {
      padding: 20px;
      border-radius: 4px;
      color: white;
    }
  </style>
</head>
<body>
  <div class="grid-container">
    <div class="grid-item header">页眉</div>
    <div class="grid-item sidebar">侧边栏</div>
    <div class="grid-item main">主内容区</div>
    <div class="grid-item footer">页脚</div>
  </div>
</body>
</html>
```

**关键特性**：

- 显式网格和隐式网格
- 网格轨道（行/列）尺寸控制
- 网格区域命名
- 强大的对齐系统
- 响应式布局能力

**适用场景**：

- 复杂页面布局
- 仪表盘
- 图片画廊
- 表单布局
- 杂志式排版

### 3. 浮动布局（传统方案）

**核心特点**：元素脱离文档流，其他内容环绕其周围

```HTML
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>浮动布局</title>
  <style>
    .container {
      width: 100%;
    }
    
    .float-left {
      float: left;
      width: 30%;
      background: #3498db;
      padding: 20px;
      margin-right: 20px;
    }
    
    .content {
      overflow: hidden; /* 清除浮动 */
      background: #f1f2f6;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="float-left">浮动侧边栏</div>
    <div class="content">
      <p>这里是主要内容区域，文字会环绕在浮动元素周围。</p>
    </div>
  </div>
</body>
</html>
```

**关键要点**：

- 使用 `clear: both` 清除浮动
- 父元素需要清除浮动（BFC）
- 现代布局中逐渐被 Flex/Grid 替代

**适用场景**：

- 文字环绕图片
- 多列布局（旧版浏览器支持）
- 兼容性要求高的项目

### 4. 定位布局

**核心特点**：精确控制元素位置

```HTML
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>定位布局</title>
  <style>
    .relative-container {
      position: relative;
      height: 300px;
      background: #f1f2f6;
      border: 1px solid #ddd;
    }
    
    .absolute-box {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 100px;
      height: 100px;
      background: #e74c3c;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .fixed-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #2c3e50;
      color: white;
      padding: 15px;
      z-index: 1000;
    }
  </style>
</head>
<body>
  <div class="fixed-header">固定页眉</div>
  
  <div style="height: 1000px; padding-top: 60px;">
    <div class="relative-container">
      <div class="absolute-box">绝对定位</div>
    </div>
  </div>
</body>
</html>
```

**定位类型**：

- `static`：默认定位
- `relative`：相对定位
- `absolute`：绝对定位
- `fixed`：固定定位
- `sticky`：粘性定位

**适用场景**：

- 模态框
- 固定导航
- 工具提示
- 悬浮按钮
- 复杂叠加效果

### 5. 多列布局

**核心特点**：类似报纸的多列文本流

```HTML
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>多列布局</title>
  <style>
    .multi-column {
      column-count: 3;
      column-gap: 40px;
      column-rule: 1px solid #ddd;
      padding: 20px;
    }
    
    @media (max-width: 768px) {
      .multi-column {
        column-count: 2;
      }
    }
    
    @media (max-width: 480px) {
      .multi-column {
        column-count: 1;
      }
    }
  </style>
</head>
<body>
  <div class="multi-column">
    <p>这里是第一列内容。多列布局特别适合展示长文本内容...</p>
    <p>第二列内容继续展示...</p>
    <p>第三列内容在此呈现...</p>
  </div>
</body>
</html>
```

**关键属性**：

- `column-count`：列数
- `column-width`：列宽
- `column-gap`：列间距
- `column-rule`：列间分隔线

**适用场景**：

- 新闻文章
- 博客内容
- 杂志式排版
- 长文本展示

### 6. 圣杯布局 / 双飞翼布局

**核心特点**：三栏布局，中间内容优先渲染

```HTML
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>圣杯布局</title>
  <style>
    .holy-grail {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    .header, .footer {
      background: #2c3e50;
      color: white;
      padding: 20px;
    }
    
    .main-content {
      display: flex;
      flex: 1;
    }
    
    .content {
      flex: 1;
      background: #f1f2f6;
      padding: 20px;
      order: 2;
    }
    
    .left-sidebar {
      width: 200px;
      background: #3498db;
      padding: 20px;
      order: 1;
    }
    
    .right-sidebar {
      width: 250px;
      background: #2ecc71;
      padding: 20px;
      order: 3;
    }
    
    @media (max-width: 768px) {
      .main-content {
        flex-direction: column;
      }
      
      .left-sidebar, .right-sidebar {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="holy-grail">
    <header class="header">页眉</header>
    <div class="main-content">
      <main class="content">主内容区</main>
      <aside class="left-sidebar">左侧边栏</aside>
      <aside class="right-sidebar">右侧边栏</aside>
    </div>
    <footer class="footer">页脚</footer>
  </div>
</body>
</html>
```

**关键特性**：

- 中间内容优先加载（SEO友好）
- 两侧边栏固定宽度
- 中间内容自适应
- 响应式支持

### 7. 响应式布局技术

**核心特点**：适应不同屏幕尺寸

```HTML
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>响应式布局</title>
  <style>
    .responsive-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    
    .card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      padding: 20px;
    }
    
    @media (max-width: 600px) {
      .menu {
        flex-direction: column;
      }
    }
    
    @container (min-width: 400px) {
      .card {
        display: flex;
        gap: 15px;
      }
    }
  </style>
</head>
<body>
  <div class="responsive-grid">
    <div class="card">响应式卡片 1</div>
    <div class="card">响应式卡片 2</div>
    <div class="card">响应式卡片 3</div>
    <div class="card">响应式卡片 4</div>
  </div>
</body>
</html>
```

**关键技术**：

- 媒体查询（`@media`）
- 视口单位（`vw`, `vh`, `vmin`, `vmax`）
- 弹性单位（`fr`, `minmax()`）
- 容器查询（`@container`）
- 相对单位（`rem`, `em`）

### 布局技术对比表

| 布局技术 | 维度 | 学习曲线 | 浏览器支持 | 适用场景             |
| -------- | ---- | -------- | ---------- | -------------------- |
| Flexbox  | 一维 | 简单     | 优秀       | 组件布局、对齐控制   |
| CSS Grid | 二维 | 中等     | 良好       | 复杂页面布局         |
| 浮动     | 一维 | 简单     | 优秀       | 文字环绕、旧版浏览器 |
| 定位     | -    | 中等     | 优秀       | 精确控制、叠加效果   |
| 多列     | 一维 | 简单     | 良好       | 长文本内容           |
| 圣杯     | 二维 | 复杂     | 优秀       | 三栏式页面           |

### 最佳实践建议

1. **优先使用 Flexbox 和 Grid**：现代布局的首选方案
2. **渐进增强策略**：为旧浏览器提供基本布局
3. **移动优先设计**：从小屏幕开始设计
4. **布局容器化**：使用容器查询实现组件级响应
5. **语义化结构**：使用正确的HTML5语义标签
6. **性能优化**：避免过度嵌套和复杂选择器

选择布局技术时，考虑项目需求、浏览器支持要求和团队熟悉度。现代项目推荐结合使用 Flexbox 和 Grid，它们在大多数场景下能提供最强大、最灵活的布局解决方案。



## 20. li 与 li 之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

### 原因分析

这个问题的根源在于HTML代码中的换行符被浏览器解析为空白文本节点。在默认的inline-block布局下，空白符（如空格、换行符等）会被当作一个文本节点，占据一定的空间，从而导致元素之间产生间隙。

**具体原因：**

1. 当 `li` 元素设置为`display: inline-block`或默认的`display: inline`（但 li 默认是block，所以通常出现在设置为 `inline-block` 时）时，它们之间的换行符或空格符会被视为一个文本节点，占据大约 4px 的宽度（具体取决于字体大小）。
2. 即使没有设置 `inline-block`，当li浮动时，也会因为某些情况出现间隙，但浮动情况下的间隙通常是由于其他原因（如父容器宽度不够，导致换行）造成，而这里的问题主要讨论的是 `inline-block` 引起的间隙。

### 解决办法

有多种方法可以消除这些空白间隔，下面列出几种常用方法：

#### 方法1：移除 li 标签之间的空格（不换行）

将多个 li 写在一行，避免换行符和空格。

示例：

```HTML
<ul>
  <li>Item1</li><li>Item2</li><li>Item3</li>
</ul>
```

#### 方法2：使用负边距

通过设置负的 `margin-left` 来抵消空白间隔。

示例：

```css
li {
  display: inline-block;
  margin-left: -4px; /* 根据实际空白大小调整 */
}
```

注意：这个方法需要知道空白的大小，而且不同浏览器或字体大小下可能不同，不够灵活。

#### 方法3：设置父元素font-size为0

在父元素上设置`font-size: 0`，然后在li上重新设置字体大小。这样可以消除空白符占用的空间。

示例：

```CSS
ul {
  font-size: 0;
}
li {
  display: inline-block;
  font-size: 16px; /* 重新设置字体大小 */
}
```

注意：这种方法在有些浏览器上可能会有兼容性问题，但现代浏览器基本支持。

#### 方法4：使用浮动（float）

通过浮动li元素，使其脱离文档流，这样空白符就不会占据空间。

示例：

```css
li {
  float: left;
}
/* 清除浮动 */
ul::after {
  content: '';
  display: block;
  clear: both;
}
```

注意：浮动需要清除，否则会影响后面的元素。

#### 方法5：使用flex布局

将父容器设为flex布局，这样内部的li就不会出现空白间隔。

示例：

```css
ul {
  display: flex;
}
```

#### 方法6：使用HTML注释（不推荐，但可作为一种方法）

在li标签之间添加注释，将换行符包裹在注释中，从而消除空白。

示例：

```HTML
<ul>
  <li>Item1</li><!--
  --><li>Item2</li><!--
  --><li>Item3</li>
</ul>
```

#### 方法7：设置负的word-spacing或letter-spacing

在父元素上设置负的word-spacing或letter-spacing，然后在子元素上重置为0。

示例：

```CSS
ul {
  word-spacing: -4px; /* 或letter-spacing: -4px; */
}
li {
  display: inline-block;
  word-spacing: normal; /* 或letter-spacing: normal; */
}
```

#### 推荐方法

现代前端开发中，推荐使用flex布局或者设置父元素font-size为0的方法，它们更简洁、易维护。如果项目需要兼容旧浏览器，可以考虑负边距或者浮动方法。




## 21. 怎么让 Chrome 支持小于 12px 的文字？

在 Chrome 浏览器中，默认设置限制了最小文字大小为 12px，这可能导致设计细节丢失。

### 主要解决方案

#### 1. 使用 CSS transform 缩放

- **原理**：通过缩放整个元素实现视觉上的小字号
- **实现步骤**
  1. 设置元素为 `display: inline-block`（行内块元素）
  2. 应用 `transform: scale(0.8)`（比例根据需求调整）
  3. 使用 `transform-origin: left` 保持左对齐
- **优点**：简单高效，保持文本可选中和搜索
- **缺点**：元素实际占位空间不变，需调整布局

#### 2. 使用 SVG 替代文本

- **原理**：使用矢量图形替代文本，不受浏览器最小字号限制
- **实现方式**
  1. 创建 SVG 文件或内联 SVG
  2. 使用 `<text>` 标签设置任意字号
  3. 通过 CSS 控制 SVG 样式
- **优点**：完美显示任意小字，支持高清屏
- **缺点**：文本不可搜索，增加开发复杂度

#### 3. 使用 canvas 绘制文本

- **原理**：在画布上绘制任意大小的文本
- **实现步骤**
  1. 创建 `<canvas>` 元素
  2. 使用 `context.fillText()` 方法绘制文本
  3. 设置任意字体大小
- **优点**：完全控制文本渲染
- **缺点**：文本不可选择，SEO 不友好

#### 4. 使用自定义字体（Icon Font）

- **原理**：将小文本转换为字体图标
- **实现方式**
  1. 使用图标字体工具（如 IcoMoon）
  2. 将小文本转换为图标
  3. 通过 CSS 控制图标大小
- **优点**：矢量缩放，保持清晰度
- **缺点**：仅适用于固定短文本，修改不便

#### 5. 使用图片替代文本

- **原理**：将文本转换为图片显示
- **实现步骤**
  1. 在图像编辑软件中创建小文本图片
  2. 使用 `<img>` 标签引入
  3. 设置 `srcset` 适配高清屏
- **优点**：兼容性好，显示效果稳定
- **缺点**：文本不可选择，增加HTTP请求

### 解决方案对比

| 方法          | 实现难度 | 可访问性 | 可扩展性 | 推荐指数 |
| ------------- | -------- | -------- | -------- | -------- |
| CSS Transform | ★★☆☆☆    | 优秀     | 良好     | ★★★★★    |
| SVG           | ★★★☆☆    | 良好     | 优秀     | ★★★★☆    |
| Canvas        | ★★★★☆    | 差       | 一般     | ★★★☆☆    |
| Icon Font     | ★★★☆☆    | 良好     | 差       | ★★☆☆☆    |
| 图片替代      | ★★☆☆☆    | 差       | 差       | ★★☆☆☆    |

#### 最佳实践建议

1. **首选 CSS Transform 方案**：适用于大多数需要小字号的场景
2. **关键元素使用 SVG**：对于需要完美显示的小文本（如数据可视化标签）
3. **避免使用废弃属性**：如 `-webkit-text-size-adjust: none`（Chrome 27+ 已废弃）
4. **响应式设计考虑**：在高清屏上适当增加小文字尺寸
5. **可访问性测试**：确保小文字在放大后仍清晰可读

#### 实现示例

```HTML
<!-- CSS Transform 方案 -->
<div class="small-text">
  使用 transform 显示的 8px 文本
</div>

<style>
.small-text {
  display: inline-block;
  font-size: 12px; /* 设置基础字号 */
  transform: scale(0.7);
  transform-origin: left;
}
</style>

<!-- SVG 方案 -->
<svg width="100" height="20">
  <text x="0" y="15" font-size="8">SVG 显示的 8px 文本</text>
</svg>
```

这些方法都有效解决了 Chrome 浏览器中小于 12px 文字的显示问题，具体选择应根据项目需求和上下文环境决定。



## 22. display:inline-block 什么时候会显示间隙？

在网页布局中，`display: inline-block` 是常用的布局属性，但它经常会产生意想不到的间隙问题。

### 间隙产生的场景与原因

#### 1. 元素间空白符导致的间隙

**场景**：当多个 `inline-block` 元素水平排列时，元素之间会出现约4px的间隙

```HTML
<div class="container">
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>
</div>
```

**原因**：HTML代码中的换行符和空格被视为文本节点，浏览器将它们渲染为空白字符

#### 2. 垂直方向基线对齐间隙

**场景**：`inline-block` 元素下方出现约3-5px的间隙

```HTML
<div class="parent">
  <div class="child">内容</div>
</div>
```

**原因**：`inline-block` 元素默认与父元素的基线对齐，而基线下方存在字符下沉空间（descender space）

#### 3. 容器内换行导致的间隙

**场景**：当容器宽度不足以容纳所有 `inline-block` 元素时，换行后行与行之间有额外间隙

```HTML
<div class="wrapper">
  <div class="item">项目1</div>
  <div class="item">项目2</div>
  <!-- 更多项目... -->
</div>
```

**原因**：行框（line box）之间的默认间距由 `line-height` 属性控制

#### 4. 内容垂直居中问题

**场景**：包含文本的 `inline-block` 元素在不同浏览器中垂直对齐不一致

```HTML
<div class="nav">
  <a href="#">首页</a>
  <a href="#">产品</a>
  <a href="#">
    <img src="icon.png" alt="图标">
  </a>
</div>
```

**原因**：浏览器对 `vertical-align` 的默认值（baseline）处理方式不同

### 间隙产生的根本原因

1. **HTML空白字符渲染**：浏览器将HTML中的空格和换行符解析为文本节点
2. **基线对齐机制**：`inline-block` 元素默认 `vertical-align: baseline`
3. **行框模型**：文本的行高和行框高度计算方式
4. **字体度量差异**：不同字体的基线位置和字符下沉空间不同

### 解决方案

#### 1. 消除HTML空白字符

```HTML
<!-- 移除所有空白符 -->
<div class="container">
  <div class="box">Box 1</div><div class="box">Box 2</div><div class="box">Box 3</div>
</div>

<!-- 使用注释分隔 -->
<div class="container">
  <div class="box">Box 1</div><!--
  --><div class="box">Box 2</div><!--
  --><div class="box">Box 3</div>
</div>
```

#### 2. CSS解决方案

```CSS
/* 方法1：父元素字体大小设为0 */
.container {
  font-size: 0;
}
.box {
  font-size: 16px; /* 重置字体大小 */
}

/* 方法2：负边距抵消 */
.box {
  margin-right: -4px;
}

/* 方法3：浮动替代 */
.box {
  float: left;
}

/* 方法4：Flexbox布局 */
.container {
  display: flex;
}

/* 方法5：调整垂直对齐 */
.box {
  vertical-align: top; /* 或 middle/bottom */
}
```

#### 3. 重置行高

```CSS
.container {
  line-height: 0; /* 消除行高影响 */
}
.box {
  line-height: normal; /* 重置行高 */
}
```

### 不同场景的最佳实践

| 场景       | 推荐解决方案          | 备注               |
| ---------- | --------------------- | ------------------ |
| 导航菜单   | Flexbox布局           | 现代布局首选       |
| 图标列表   | `font-size: 0`        | 需要重置子元素字体 |
| 响应式网格 | 负边距                | 注意浏览器兼容性   |
| 内联表单   | `vertical-align: top` | 解决垂直对齐问题   |
| 旧版浏览器 | 浮动布局              | 兼容性好           |



## 23. png、jpg、gif 这些图片格式解释一下，分别什么时候用？webp 呢

答案：

gif 图形交换格式，索引颜色格式，颜色少的情况下，产生的文件极小，支持背景透明，动画，图形渐进，无损压缩（适合线条，图标等），缺点只有 256 种颜色

jpg 支持上百万种颜色，有损压缩，压缩比可达 180：1，而且质量受损不明显，不支持图形渐进与背景透明，不支持动画

png 为替代 gif 产生的，位图文件，支持透明，半透明，不透明。不支持动画，无损图像格式。Png8 简单说是静态 gif，也只有 256 色，png24 不透明，但不止 256 色。

webp 谷歌开发的旨在加快图片加载速度的图片格式，图片压缩体积是 jpeg 的 2/3，有损压缩。高版本的 W3C 浏览器才支持，google39+，safari7+

我们常见的图片格式有PNG、JPG（JPEG）、GIF以及WebP等，它们各有特点，适用于不同的场景。

### 1. PNG (Portable Network Graphics)

- 特点
  - 无损压缩：不会丢失图像质量
  - 支持透明通道（Alpha通道），可以实现半透明效果
  - 支持8位（PNG-8）和24位（PNG-24）颜色深度
  - 不支持动画
- 适用场景
  - 需要透明背景的图像（如Logo、图标）
  - 需要高质量图像的场景（如设计稿、截图）
  - 需要多次编辑且不希望损失质量的图像
- 不适用场景
  - 摄影图片（文件体积通常比JPG大）

### 2. JPG/JPEG (Joint Photographic Experts Group)

- 特点
  - 有损压缩：通过牺牲图像质量来减小文件体积
  - 不支持透明背景
  - 支持数百万种颜色（24位真彩色）
  - 压缩率可调（质量从0%到100%）
- 适用场景
  - 颜色丰富的照片或图像
  - 不需要透明背景的图片
  - 对文件大小有要求而对质量要求不极致的场景
- 不适用场景
  - 需要透明背景的图像
  - 文字、线条图形（压缩后容易产生模糊或锯齿）

### 3. GIF (Graphics Interchange Format)

- 特点
  - 支持动画
  - 支持透明（但只有完全透明，没有半透明）
  - 仅支持256色（8位颜色）
  - 无损压缩
- 适用场景
  - 简单动画（如小图标动画、表情包）
  - 颜色数量少的简单图像（如Logo、图标）
- 不适用场景
  - 色彩丰富的照片（颜色限制会导致失真）
  - 需要半透明效果的图片

### 4. WebP (由Google开发)

- 特点
  - 同时支持有损和无损压缩
  - 支持透明通道（包括半透明）
  - 支持动画
  - 文件体积通常比PNG和JPG小（在同等质量下）
- 适用场景
  - 需要替代PNG、JPG和GIF的几乎所有场景
  - 需要减小图片体积提升网页加载速度的场景
- 限制
  - 兼容性：旧版浏览器（如IE）不支持
  - 编码时间可能稍长

### 总结

| 格式 | 透明支持         | 动画支持 | 颜色深度     | 压缩类型  | 适用场景                     |
| ---- | ---------------- | -------- | ------------ | --------- | ---------------------------- |
| PNG  | 支持（半透明）   | 不支持   | 8位/24位     | 无损      | 透明图片、图标、截图         |
| JPG  | 不支持           | 不支持   | 24位         | 有损      | 照片、色彩丰富的图片         |
| GIF  | 支持（完全透明） | 支持     | 8位（256色） | 无损      | 简单动画、颜色少的图形       |
| WebP | 支持（半透明）   | 支持     | 24位         | 有损/无损 | 几乎所有场景（需考虑兼容性） |

### 使用建议

1. **照片、色彩丰富图片**：

   - 首选：WebP（有损）> JPG
   - 理由：WebP在同等质量下体积更小

2. **透明图片**：

   - 首选：WebP（无损）> PNG
   - 理由：WebP文件更小

3. **简单动画**：

   - 首选：WebP > GIF
   - 理由：WebP支持更多颜色且文件更小

4. **兼容性考虑**：

   - 如果必须支持旧浏览器（如IE）：
     - 透明图片：PNG
     - 照片：JPG
     - 简单动画：GIF

5. **现代Web开发**：

   - 优先使用WebP格式，并通过`<picture>`元素提供回退方案：

   ```HTML
   <picture>
      <source srcset="image.webp" type="image/webp">
      <source srcset="image.jpg" type="image/jpeg">
      <img src="image.jpg" alt="Description">
    </picture>
   ```

   


## 24. 超链接访问过后 hover 样式就不出现的问题是什么？如何解决？

在CSS中，超链接的样式有四个状态，它们的顺序很重要。通常，我们使用LVHA顺序（:link, :visited, :hover, :active）。如果顺序不正确，尤其是:visited放在:hover之后，那么当链接被访问后，:visited样式会覆盖:hover样式，导致hover效果失效。

解决方法：确保CSS中超链接样式的顺序为：:link, :visited, :hover, :active。

记忆口诀：LoVe HAte（爱恨原则）
L - :link
V - :visited
H - :hover
A - :active

示例代码：
```css
a:link { color: blue; } /* 未访问的链接 */
a:visited { color: purple; } /* 已访问的链接 */
a:hover { color: red; } /* 鼠标悬停 */
a:active { color: yellow; } /* 激活（点击时） */
```

这样设置后，当链接被访问后，hover 样式（红色）仍然会生效，因为它在:visited之后定义（在 CSS 中，后面定义的样式会覆盖前面相同优先级的样式）。

注意：如果只设置部分状态，也要确保顺序正确。比如只设置:hover和:active，那么:hover应该在:active之前。

另外，如果使用了 `!important`，可能会打破这个顺序，所以尽量避免在链接样式中使用 `!important`。

如果问题仍然存在，可能是其他 CSS 规则覆盖了样式，需要检查选择器优先级。




## 25. 什么是 Css Hack？ie6,7,8 的 hack 分别是什么？

**CSS Hack** 是一种利用浏览器对 CSS 解析的差异或漏洞，为特定浏览器（尤其是旧版 IE）应用专属样式的技术。它通常用于解决浏览器兼容性问题，但**不推荐作为首选方案**（存在维护困难、破坏标准等问题）。现代开发中，应优先使用特性检测（如 `@supports`）或条件注释（针对 IE）。

### 针对 IE6、IE7、IE8 的 CSS Hack

以下是针对 IE6/7/8 的常见 Hack 方法（按优先级排序）：

#### 1. **IE6 专属 Hack**

- **下划线 Hack** 属性前加 `_`，仅 IE6 识别：

```CSS
 .element {
     _color: red; /* 仅 IE6 生效 */
 }
```

- **星号 Hack** 属性前加 `*`，IE6/7 识别（需结合其他 Hack7 识别（需结合其他 Hack 单独过滤 IE6）：

```CSS
 .element {
     *color: red; /* IE6/7 生效 */
 }
```

- **HTML 选择器 Hack** 利用子选择器漏洞：

```CSS
 * html .element { 
     color: red; /* 仅 IE6 生效 */
 }
```

#### 2. **IE7 专属 Hack**

- **星号 + 加号 Hack** 属性前加 `*+`，仅 IE7 识别：

```CSS
 .element {
     *+color: red; /* 仅 IE7 生效 */
 }
```

- **选择器后缀 Hack** 在 `:root` 伪类后添加空格（现代浏览器忽略）：

```CSS
 .element, x:-IE7 {
     color: red; /* 仅 IE7 生效 */
 }
```

#### 3. **IE8 专属 Hack**

- **`\9` 转义 Hack** 属性值末尾加 `\9`，IE8 及以下生效，IE8 及以下生效：

```CSS
 .element {
     color: red \9; /* IE8 及更低版本生效 */
 }
```

- **`\0` 转义 Hack** 属性值末尾加 `\0`，IE8/9/10 生效（需结合其他方法过滤）：

```CSS
 .element {
     color: red \0; /* IE8~10 生效 */
 }
```

- **媒体查询 Hack** 利用 IE8 的媒体查询漏洞：

```CSS
 @media \0screen {
     .element { color: red; } /* 仅 IE8 生效 */
 }
```

### 替代方案（推荐）

1. **条件注释 (IE9 以下专属)** 在 HTML 中为不同 IE 版本加载样式：

```HTML
   <!--[if   ```html
   <!--[if IE 6]>
     <link rel="stylesheet" href="ie6.css">
   <![endif]-->
   <!--[if IE 7]>
     <link rel="stylesheet" href="ie7.css">
   <![endif]-->
```

1. **特性检测 (Modernizr 或 `@supports`)** 使用 JavaScript 或 CSS 原生检测：

```CSS
   @supports (display: flex) {
     /* 支持 Flexbox 的浏览器 */
   }
```

### 注意事项

- **慎用 Hack**：Hack 可能导致未来浏览器升级后页面崩溃。
- **渐进增强**：优先保证现代浏览器的体验，再为旧浏览器提供降级样式。
- **IE 淘汰计划**：微软已终止 IE 支持，建议逐步放弃对 IE6/7/8 的兼容。

> 请仅在无法通过标准方法解决兼容性问题时使用 Hack，并明确注释代码！




## 26. 重置（resetting）CSS 和 标准化（normalizing）CSS 的区别是什么？你会选择哪种方式，为什么？

### CSS 重置（Resetting）与标准化（Normalizing）的区别

| **特性**           | **CSS 重置 (Resetting)**                                | **CSS 标准化 (Normalizing)**                           |
| ------------------ | ------------------------------------------------------- | ------------------------------------------------------ |
| **核心目标**       | 彻底**清除**所有浏览器默认样式                          | **统一**浏览器默认样式，保留有用部分                   |
| **工作方式**       | 将所有元素的默认样式归零（如 `margin: 0; padding: 0;`） | 针对性修复浏览器差异，保留合理默认值（如标题字体大小） |
| **典型代表**       | Eric Meyer 的 Reset CSS                                 | Nicolas Gallagher 的 Normalize.css                     |
| **对默认样式态度** | **完全移除**（从零开始）                                | **保留并修复**（基于默认样式优化）                     |
| **代码示例**       | `* { margin:0; padding:0; }`                            | `ul { padding-left: 40px; }`                           |
| **优点**           | 彻底消除浏览器差异，完全自由定制                        | 保留语义化 HTML 的默认行为，减少冗余代码               |
| **缺点**           | 破坏有用默认样式（如 `<em>` 斜体），需重写所有样式      | 无法完全清除所有差异，需额外覆盖部分样式               |

### **我会选择哪种方式，为什么？**

**推荐选择：标准化（Normalizing）**，原因如下：

1. **更智能的保留默认样式** Normalize.css 会保留合理的默认样式（如 `<sup>` 的上标效果、`<button>` 的悬停状态），而重置会无差别清除所有默认样式，导致需要重写更多代码。
2. **针对性修复浏览器差异** Normalize.css 直接修复了 100+ 个浏览器渲染差异（如 HTML5 元素显示问题、字体抗锯齿、行高计算等），而重置只是简单归零，仍需手动处理这些差异。
3. **更好的语义化支持** 保留 HTML 元素的语义化默认行为（如 `<h1>` 的字号层级、`<ul>` 的项目符号），符合渐进增强原则。
4. **模块化与可维护性** Normalize.css 提供详细注释和模块化结构（[源码](https://github.com/necolas/normalize.css)），方便按需调整。

### **何时使用重置（Resetting）？**

- 需要完全从零设计的视觉密集型项目（如全屏互动网站）
- 设计系统与浏览器默认样式完全冲突时
- 可结合使用：`Normalize.css + 自定义重置`（例如保留 Normalize 并添加 `box-sizing: border-box;`）

> **现代替代方案**：考虑使用更先进的 CSS 工具
>
> - **CSS Remedy**：Josh W. Comeau 的现代重置方案（保留有用默认值 + 修复问题）
> - **Tailwind CSS**：实用优先的 CSS 框架（内置智能重置）
> - **PostCSS 插件**：通过 `postcss-normalize` 按需引入标准化规则

### **总结**

| **场景**                  | **推荐方案**                    |
| ------------------------- | ------------------------------- |
| 大多数常规项目            | **Normalize.css**               |
| 高度定制化视觉项目        | 重置 + 自定义扩展               |
| 现代框架项目（React/Vue） | Normalize.css 或 CSS-in-JS 方案 |
| 追求开发效率              | Tailwind CSS 等框架             |

**核心原则**：优先保留有用的浏览器默认行为，减少不必要的代码覆盖，针对性修复差异而非全面清除。




## 27. css sprite 是什么, 有什么优缺点

概念：将多个小图片拼接到一个图片中。通过 background-position 和元素尺寸调节需要显示的背景图案。

**优点：**

- 减少 HTTP 请求数，极大地提高页面加载速度。
- 增加图片信息重复度，提高压缩比，减少图片大小。
- 更换风格方便，只需在一张或几张图片上修改颜色或样式即可实现。

**缺点：**

- 图片合并麻烦。
- 维护麻烦，修改一个图片可能需要从新布局整个图片，样式。




## 28. 什么是 FOUC? 如何避免

### 什么是 FOUC？

**FOUC (Flash of Unstyled Content)** 是指网页在加载过程中，浏览器短暂显示未应用样式的原始 HTML 内容，然后突然跳转到应用完整 CSS 样式的视觉现象。这种"无样式内容闪烁"通常持续几百毫秒到几秒，会破坏用户体验，给人不专业的印象。

#### FOUC 的典型表现

1. 页面加载时先显示
   - 无样式的纯文本链接（默认蓝色带下划线）
   - 无序列表显示为纯文本（无项目符号）
   - 表单元素使用浏览器默认样式
2. 突然"闪现"为设计后的样式

#### FOUC 的主要原因

| 原因             | 说明                                       |
| ---------------- | ------------------------------------------ |
| CSS 加载位置不当 | CSS 文件放在 `<body>` 底部而非 `<head>` 中 |
| @import 引入 CSS | 使用 `@import` 会导致渲染阻塞              |
| JavaScript 阻塞  | JS 文件阻塞 CSS 解析和渲染                 |
| 旧版 IE 特定行为 | IE 的样式处理机制不同                      |

### 如何避免 FOUC？(7 种有效方案)

#### ✅ 最佳实践：CSS 放置位置优化

```HTML
<!DOCTYPE html>
<html>
<head>
  <!-- 关键：所有 CSS 必须放在 head 中 -->
  <link rel="stylesheet" href="styles.css">
  
  <!-- 内联关键 CSS 效果更佳 -->
  <style>
    /* 首屏必要样式 */
    body { visibility: hidden; }
    .header, .hero { ... }
  </style>
</head>
```

#### ✅ 避免使用 @import

```HTML
<!-- 错误方式 -->
<style>
  @import url("styles.css"); /* 导致渲染延迟 */
</style>

<!-- 正确方式 -->
<link rel="stylesheet" href="styles.css">
```

#### ✅ 异步加载非关键 CSS

```HTML
<!-- 使用 media 属性避免阻塞 -->
<link rel="stylesheet" href="non-critical.css" media="print" onload="this.media='all'">

<!-- 使用 preload 优化 -->
<link rel="preload" href="fonts.css" as="style" onload="this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="fonts.css"></noscript>
```

#### ✅ JavaScript 加载优化

```HTML
<!-- 将 JS 放在 body 末尾 -->
<body>
  <!-- 页面内容 -->
  <script src="app.js"></script> <!-- 避免阻塞渲染 -->
</body>

<!-- 或使用 async/defer -->
<script src="analytics.js" async></script>
```

#### ✅ 初始隐藏技巧 (应急方案)

```CSS
/* 在 head 的内联样式中设置 */
body { 
  opacity: 0;
  visibility: hidden;
}

/* 页面加载完成后显示 */
document.addEventListener('DOMContentLoaded', function() {
  document.body.style.opacity = 1;
  document.body.style.visibility = 'visible';
});
```

#### ✅ 现代框架解决方案

**Next.js (React):**

```Jsx
// next.config.js
module.exports = {
  experimental: {
    optimizeCss: true, // 自动优化CSS
  },
};

// 使用内置 CSS 解决方案
import styles from './Layout.module.css';
```

**Vue:**

```HTML
<template>
  <!-- 使用 v-cloak 指令 -->
  <div v-cloak>
    {{ message }}
  </div>
</template>

<style>
[v-cloak] {
  display: none;
}
</style>
```

#### ✅ 构建工具优化

使用 **Critical CSS** 工具提取首屏样式：

```Bash
# 使用Webpack插件
npm install critical-webpack-plugin --save-dev

# 或使用PostCSS插件
npm install postcss-critical-css --save-dev
```

### FOUC 检测工具

1. **Chrome DevTools**
   - 使用 [Performance 选项卡]录制加载过程
   - 查看 [Rendering] → [Layout Shift Regions]
2. **Lighthouse**：

```Bash
   npm install -g lighthouse
   lighthouse https://your-site.com --view
```

1. **WebPageTest**： https://www.webpagetest.org/  的视频录制功能

### 总结：FOUC 预防策略优先级

1. **将 CSS 放在 `<head>` 中** - 最基础有效的方案
2. **内联关键 CSS** - 首屏内容立即显示
3. **异步加载非关键资源** - 使用 `preload` 和 `media` 属性
4. **优化 JavaScript 加载** - 使用 `async/defer`
5. **使用现代框架能力** - Next.js/Vue 的内置优化
6. **构建时提取关键 CSS** - 适用于复杂项目

> 📌 **核心原则**：确保浏览器在渲染 HTML 内容前已接收并处理必要的 CSS 规则。用户体验中，即使是 100ms 的样式闪烁也会被用户感知，因此消除 FOUC 是专业前端开发的基本要求。




## 29.  css3 有哪些新特性

答案：

1. 选择器

- E:last-child 匹配父元素的最后一个子元素 E。
- E:nth-child(n)匹配父元素的第 n 个子元素 E。
- E:nth-last-child(n) CSS3 匹配父元素的倒数第 n 个子元素 E。

2. RGBA

回答此问题，面试官很可能继续问：rgba()和 opacity 的透明效果有什么不同？

3. 多栏布局

```html
<div class="mul-col">
  <div>
    <h3>新手上路</h3>
    <p>新手专区 消费警示 交易安全 24小时在线帮助 免费开店</p>
  </div>
  <div>
    <h3>付款方式</h3>
    <p>快捷支付 信用卡 余额宝 蚂蚁花呗 货到付款</p>
  </div>
  <div>
    <h3>淘宝特色</h3>
    <p>手机淘宝 旺信 大众评审 B格指南</p>
  </div>
</div>
```

```css
.mul-col {
  column-count: 3;
  column-gap: 5px;
  column-rule: 1px solid gray;
  border-radius: 5px;
  border: 1px solid gray;
  padding: 10px;
}
```

4. 多背景图

```css
/* backgroundimage:url('1.jpg),url('2.jpg') */
```

5. CSS3 word-wrap 属性

```css
p.test {
  word-wrap: break-word;
}
```

6. 文字阴影

```css
text-shadow: 5px 2px 6px rgba(64, 64, 64, 0.5);
```

7. @font-face 属性

Font-face 可以用来加载字体样式，而且它还能够加载服务器端的字体文件，让客户端显示客户端所没有安装的字体。

```css
@font-face {
  font-family: BorderWeb;
  src: url(BORDERW0.eot);
}
@font-face {
  font-family: Runic;
  src: url(RUNICMT0.eot);
}
.border {
  font-size: 35px;
  color: black;
  font-family: "BorderWeb";
}
.event {
  font-size: 110px;
  color: black;
  font-family: "Runic";
}

/* 淘宝网字体使用 */

@font-face {
  font-family: iconfont;
  src: url(//at.alicdn.com/t/font_1465189805_4518812.eot);
}
```

8. 圆角

```css
border-radius: 15px;
```

9. 边框图片

CSS3 border-image 属性

10. 盒阴影

```css
/* box-shadow: 水平方向的偏移量 垂直方向的偏移量 模糊程度 扩展程度 颜色 是否具有内阴影 */
```

11. 盒子大小

CSS3 box-sizing 属性

12. 媒体查询

CSS3 @media 查询

13. CSS3 动画

@keyframes

```css
@keyframes abc {
  from {
    transform: rotate(0);
  }
  50% {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

animation 属性

```css
/* animation ： name duration timing-function delay interation-count direction play-state */
```

14. 渐变效果

```css
background-image: -webkit-gradient(
  linear,
  0% 0%,
  100% 0%,
  from(#2a8bbe),
  to(#fe280e)
);
```

15. CSS3 弹性盒子模型

- 弹性盒子是 CSS3 的一种新的布局模式。
- CSS3 弹性盒（ Flexible Box 或 flexbox），是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。
- 引入弹性盒布局模型的目的是提供一种更加有效的方式来对一个容器中的子元素进行排列、对齐和分配空白空间。

16. CSS3 过渡

```css
div {
  transition: width 2s;
  -moz-transition: width 2s; /* Firefox 4 */
  -webkit-transition: width 2s; /* Safari 和 Chrome */
  -o-transition: width 2s; /* Opera */
}
```

17. CSS3 变换

- rotate()旋转
- translate()平移
- scale( )缩放
- skew()扭曲/倾斜
- 变换基点
- 3d 转换

[参考](https://www.w3school.com.cn/css3/index.asp)

CSS3 的新特性全面提升了前端开发能力，主要分为以下六大类，结合核心功能与代码示例说明：

### ⚙️ 一、选择器增强

新增选择器大幅提升元素定位精度：

1. **属性选择器**

```CSS
a[href^="https"] { }  /* 链接以 https 开头 */
img[src$=".png"] { }  /* 图片为 png 格式 */
```

2. **结构伪类**

```css
li:nth-child(2n) { }  /* 偶数行列表项 */
p:first-of-type { }   /* 父元素内首个 <p> */
```

3. **状态伪类**

```CSS
input:disabled { }    /* 禁用输入框 */
input:checked + label { } /* 选中复选框时的标签 */
```

### 🧩 二、布局系统革新

1. **Flexbox 弹性布局**

```CSS
.container {
   display: flex;
   justify-content: space-between; /* 水平均匀分布 */
}
```

1. **Grid 网格布局**

```CSS
.grid {
   display: grid;
   grid-template-columns: 1fr 2fr; /* 两列，第二列宽度为第一列2倍 */
}
```

1. **多列布局**

```CSS
article {
  column-count: 3;  /* 内容分三列显示 */
}
```

### 🎨 三、视觉效果

1. **圆角与阴影**

```CSS
.card {
  border-radius: 10px; 
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1); 
}
```

2. **渐变背景**

```CSS
.banner {
   background: linear-gradient(to right, #ff7e5f, #feb47b);
}
```

3. **边框图片**

```CSS
.art-box {
   border-image: url(border.png) 30 round;
}
```

### 🚀 四、动画与变换

1. **过渡（Transition）**

```CSS
button {
   transition: background 0.3s ease; 
}
button:hover { background: #3498db; }
```

2. **变换（Transform）**

```CSS
.icon:hover {
   transform: rotate(45deg) scale(1.2); /* 旋转并放大 */
}
```

3. **关键帧动画（Animation）**

```css
@keyframes spin {
   from { transform: rotate(0deg); }
   to { transform: rotate(360deg); }
}
.loader { animation: spin 2s infinite linear; }
```

### ✏️ 五、文字与字体

1. **文本特效**

```CSS
h1 {
  text-shadow: 2px 2px 4px #000;
  text-overflow: ellipsis; /* 溢出显示省略号 */
}
```

2. **自定义字体**

~~~css
@font-face {
 font-family: "MyFont";
 src: url("myfont.woff2") format("woff2");
}
body { font-family: "MyFont"; }
~~~

### 🎯 六、其他关键特性

1. **媒体查询（Media Queries）**

```CSS
@media (max-width: 768px) {
  .sidebar { display: none; }
}
```

2. **RGBA/HSLA 透明度支持**

```CSS
.translucent {
  background: rgba(255, 0, 0, 0.5); /* 半透明红色 */
  color: hsla(120, 100%, 50%, 0.8); /* 半透明绿色 */
}
```

### 💎 总结建议

- **优先掌握**：Flex/Grid 布局、过渡动画、Grid 布局、过渡动画、媒体查询（响应式开发核心）
- **工具推荐**：使用 Autoprefixer 自动处理浏览器兼容前缀
- **设计原则**
  - 渐进增强：基础功能兼容低版本，高级特性增强现代浏览器体验
  - 性能优化：避免滥用阴影/渐变，硬件加速动画（使用 `transform` 和 `opacity`）

> 完整特性列表可参考 [CSS3 选择器详解](https://zhuanlan.zhihu.com/p/617700202) 及 [W3C 标准文档](https://www.w3.org/Style/CSS/)。




## 30. display 有哪些值？说明他们的作用

`display` 是 CSS 中最基础且强大的布局控制属性，它决定了元素在页面中的呈现方式。下面是常见取值及其作用：

### **常见 display 值及作用**

| 值                 | 描述                           | 典型用例                    |
| ------------------ | ------------------------------ | --------------------------- |
| **`block`**        | 块级元素，独占一行             | `<div>`, `<p>`, `<h1>`      |
| **`inline`**       | 行内元素，不换行               | `<span>`, `<a>`, `<strong>` |
| **`inline-block`** | 行内块级元素，可设宽高但不换行 | 导航项、按钮组              |
| **`none`**         | 完全隐藏元素，不占空间         | 下拉菜单、模态框            |
| **`flex`**         | 弹性布局容器                   | 一维布局、居中              |
| **`grid`**         | 网格布局容器                   | 二维复杂布局                |
| **`table`**        | 表格布局                       | 数据表格结构                |
| **`list-item`**    | 列表项                         | `<li>`                      |

### 详细解释与代码示例

#### 1. 基础布局模式

```CSS
/* 块级元素 - 独占整行 */
.block-element {
  display: block;
  width: 200px;
  height: 50px;
  background: #3498db;
}

/* 行内元素 - 不换行 */
.inline-element {
  display: inline;
  background: #e74c3c;
  /* width/height 无效 */
}

/* 行内块元素 - 兼具两者特性 */
.inline-block-element {
  display: inline-block;
  width: 100px;
  height: 40px;
  background: #2ecc71;
}
```

#### 2. 现代布局系统

```CSS
/* Flexbox 弹性布局 */
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-item {
  flex: 1;
}

/* Grid 网格布局 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
}

.grid-item {
  grid-column: span 2;
}
```

#### 3. 表格相关布局

```CSS
/* 表格布局 */
.table-wrapper {
  display: table;
  width: 100%;
}

.table-row {
  display: table-row;
}

.table-cell {
  display: table-cell;
  padding: 10px;
  border: 1px solid #ddd;
}
```

#### 4. 特殊值

```CSS
/* 完全隐藏元素 */
.hidden-element {
  display: none;
}

/* 列表项 */
.list-item {
  display: list-item;
  list-style-type: square;
  margin-left: 20px;
}

/* 只渲染内容，不渲染容器 */
.contents-element {
  display: contents;
}
```

### 显示特性总结

| 特性         | block | inline   | inline-block | flex        | grid        |
| ------------ | ----- | -------- | ------------ | ----------- | ----------- |
| 换行         | ✓     | ✗        | ✗            | ✗           | ✗           |
| 设置宽高     | ✓     | ✗        | ✓            | ✓           | ✓           |
| 内外边距生效 | ✓     | ✓(水平)  | ✓            | ✓           | ✓           |
| 包含块级元素 | ✓     | ✗        | ✓            | ✓           | ✓           |
| 默认宽度     | 100%  | 内容宽度 | 内容宽度     | min-content | min-content |
| 垂直对齐     | ✗     | baseline | ✓            | ✓           | ✓           |

### 实际应用场景推荐

1. **常规布局**：`block` 和 `inline-block`
2. **导航菜单**：`inline-block` 或 `flex`
3. **卡片网格布局**：`grid` 或 `flex`
4. **复杂表单布局**：`grid`
5. **居中元素**：`flex` (搭配 `justify-content` 和 `align-items`)
6. **响应式布局**：`flex` 或 `grid` + 媒体查询
7. **隐藏元素**：`none`（完全移除）或 `visibility: hidden`（保留空间）

> **现代最佳实践**：优先使用 `flex` 和 `grid` 布局，它们提供了更强大的对齐、分布和响应式控制能力，简化了许多传统布局难题。




## 31. 行内元素 float: left 后是否变为块级元素？

- 行内元素设置成浮动之后变得更加像是 inline-block
- 行内块级元素，设置成这个属性的元素会同时拥有行内和块级的特性，最明显的不同是它的默认宽度不是 100%，行内元素默认 100%宽度占据一行
- 这时候给行内元素设置 padding-top 和 padding-bottom 或者 width、height 都是有效果的




## 32. 在网页中的应该使用奇数还是偶数的字体？为什么呢？

答案：应该使用偶数字体

1.比例关系

相对来说偶数字号比较容易和页面中其他部分的字号构成一个比例关系。如我使用 14px 的字体作为正文字号，那么其他部分的字体（如标题）就可以使用 14×1.5 =21px 的字体，或者在一些地方使用到了 14×0.5=7px 的 padding 或者 margin，如果你是在用 sass 或者 less 编写 css，这时候用处就凸显出来了。

2.UI 设计师的缘故

大多数设计师用的软件如 ps 提供的字号是偶数，自然到了   前端那边也是用的是偶数。

3.浏览器缘故

其一是低版本的浏览器 ie6 会把奇数字体强制转化为偶数，即 13px 渲染为 14px。

其二是为了平分字体。偶数宽的汉字，如 12px 的汉子，去掉 1 像素的字体间距，填充了的字体像素宽度其实就是 11px，这样的汉字中竖线左右是平分的，如“中”子，左右就是 5px 了。

4.系统差别

Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，而 13、15、17 px 时用的是小一号的点阵（即每个字占的空间大了 1 px，但点阵没变），于是略显稀疏。

而在 Linux 和其他手持设备上，奇数偶数的渲染效果其实相差不大。

解析：[参考](https://blog.csdn.net/jian_xi/article/details/79346477)




## 38.CSS 合并方法

答案：@import url(css 文件地址)




## 39.列出你所知道可以改变页面布局的属性

答案：width、height、float、position、等




## 40.CSS 在性能优化方面的实践

答案：

1. 内联首屏关键 CSS（Critical CSS）

内联 CSS 能够使浏览器开始页面渲染的时间提前，只将渲染首屏内容所需的关键 CSS 内联到 HTML 中

2. 异步加载 CSS

3. 文件压缩

4. 去除无用 CSS

解析：[参考](https://www.cnblogs.com/heroljy/p/9412704.html)




## 41.CSS3 动画（简单动画的实现，如旋转等）

答案：

让一个 div 元素旋转 360 度示例

1. div 的样式结构:

```css
div {
  margin: 50px auto;
  width: 200px;
  height: 200px;
  background-color: pink;
}
```

2. 设置旋转属性的类名:

```css
div.rotate {
              /* 旋转360度 */
            transform: rotate(360deg);
              /* all表示所有属性,1s表示在一秒的时间完成动画 */
            transition: all 1s;
}
```

```
transition 有四个属性:

property: 规定应用过渡的 CSS 属性的名称。

duration: 定义过渡效果花费的时间。默认是 0,单位是 s。

timing-function: 规定过渡效果的时间曲线。默认是 "ease"。匀速'linear',加速'ease-in',减速'ease-out',先快后慢'ease-in-out'。

delay: 规定过渡效果何时开始。默认是 0。单位 s。

可以连写: transition: property duration timing-function delay;
```

3. 给 div 元素设置鼠标移入时旋转,也就是给它加上.rotate 类名.鼠标移出时移除类名

```js
$(function() {
  $("div")
    .mouseenter(function() {
      $(this).addClass("rotate");
    })
    .mouseleave(function() {
      $(this).removeClass("rotate");
    });
});
```

解析：[参考](https://blog.csdn.net/qq_42209630/article/details/80338578)




## 42.base64 的原理及优缺点

答案：

1.什么是 Base64

Base64 是一种基于 64 个可打印字符来表示二进制数据的编码方式，是从二进制数据到字符的过程。
原则上，计算机中所有内容都是二进制形式存储的，所以所有内容（包括文本、影音、图片等）都可以用 base64 来表示。

2.适用场景

```
1.Base64一般用于在HTTP协议下传输二进制数据，由于HTTP协议是文本协议，所以在HTTP写一下传输二进制数据需要将二进制数据转化为字符数据，
网络传输只能传输可打印字符，
在ASCII码中规定，0-31、128这33个字符属于控制字符，
32~127这95个字符属于可打印字符
那么其它字符怎么传输呢，Base64就是其中一种方式，
2.将图片等资源文件以Base64编码形式直接放于代码中，使用的时候反Base64后转换成Image对象使用。
3.偶尔需要用这条纯文本通道传一张图片之类的情况发生的时候，就会用到Base64，比如多功能Internet 邮件扩充服务（MIME）就是用Base64对邮件的附件进行编码的。
```

3.Base64 编码原理

Base64 编码之所以称为 Base64，是因为其使用 64 个字符来对任意数据进行编码，同理有 Base32、Base16 编码。标准 Base64 编码使用的 64 个字符为：


有点特殊的是最后两个字符，因对最后两个字符的选择不同，Base64 编码又有很多变种，比如用于编码 URL 的 Base64 URL 编码。

Base64 编码本质上是一种将二进制数据转成文本数据的方案。对于非二进制数据，是先将其转换成二进制形式，然后每连续 6 比特（2 的 6 次方=64）计算其十进制值，根据该值在上面的索引表中找到对应的字符，最终得到一个文本字符串。

假设我们要对 Hello! 进行 Base64 编码，按照 ASCII 表，其转换过程如下图所示：


可知 Hello! 的 Base64 编码结果为 SGVsbG8h，每 3 个原始字符经 Base64 编码成 4 个字符。那么，当原始字符串长度不能被 3 整除时，怎么办呢？

以 Hello!! 为例，其转换过程为：


Hello!! Base64 编码的结果为 SGVsbG8hIQAA。可见，不能被 3 整除时会采用来来补 0 的方式来完成编码。
需要注意的是：标准 Base64 编码通常用 = 字符来替换最后的 A，即编码结果为 SGVsbG8hIQ==。因为 = 字符并不在 Base64 编码索引表中，其意义在于结束符号，在 Base64 解码时遇到 = 时即可知道一个 Base64 编码字符串结束。

4.优缺点

优点:可以将二进制数据转化为可打印字符，方便传输数据，对数据进行简单的加密，肉眼安全。
缺点：内容编码后体积变大，编码和解码需要额外工作量。

解析：[参考 1](https://segmentfault.com/a/1190000012654771)、[参考 2](https://blog.csdn.net/fightingitpanda/article/details/83305100)




## 43.stylus/sass/less 区别

答案：

1. 后缀

默认 Sass 使用 .sass 扩展名，而 Less 使用 .less 扩展名，Stylus 默认使用 .styl 的文件扩展名

2. 语法

3. 变量

- sass 变量必须是以\$开头的，然后变量和值之间使用冒号（：）隔开，和 css 属性是一样的
- Less css 中变量都是用@开头的，其余与 sass 都是一样的
- stylus 对变量是没有任何设定的，可以是以\$开头，或者任何的字符，而且与变量之间可以用冒号，空格隔开，但是在 stylus 中不能用@开头

解析：[参考](https://blog.csdn.net/pedrojuliet/article/details/72887490)




## 44.position 的值， relative 和 absolute 分别是相对于谁进行定位的？

答案：

- absolute :生成绝对定位的元素， 相对于最近一级的 定位不是 static 的父元素来进行定位。
- fixed （老 IE 不支持）生成绝对定位的元素，通常相对于浏览器窗口或 frame 进行定位。
- relative 生成相对定位的元素，相对于其在普通流中的位置进行定位。
- static 默认值。没有定位，元素出现在正常的流中
- sticky 生成粘性定位的元素，容器的位置根据正常文档流计算得出




## 45.对偏移、卷曲、可视的理解

答案：

```
偏移
offsetWidth	  width  +  padding  +  border
offsetHeight	height +  padding  +  border
offsetLeft
offsetTop
offsetParent
注意：没有offsetRight和offsetBottom
************************************************************************************************

卷曲
scrollWidth    width  +  padding
scrollHeight   当内部的内容溢出盒子的时候， 顶边框的底部，计算到内容的底部；如果内容没有溢出盒子，计算方式为盒子内部的真实高度（边框到边框）
scrollLeft     这个scroll系列属性不是只读的
scrollTop
scroll()

此函数可以获取卷曲的高度和卷曲的宽度
function myScroll() {
   return {
      top: window.pageYOffset  || document.documentElement.scrollTop  || document.body.scrollTop  || 0,
      left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };

}

滚动滚动条的时候触发事件
box（window）.onscroll = function () {}
************************************************************************************************

可视
clientWidth   获取的是元素内部的真实宽度 width  +  padding
clientHeight  边框之间的高度
clientLeft    相当于左边框的宽度  如果元素包含了滚动条，并且滚动条显示在元素的左侧。这时，clientLeft属性会包含滚动条的宽度17px
clientTop     相当于顶边框的宽度
client()

此函数可以获取浏览器可视区域的宽高
function myClient() {
    return {
        wid: window.innerWidth  || document.documentElement.clientWidth  || document.body.clientWidth  || 0,
       heit: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
    };
}

----------------------------------------------------------------------------------------------
@offsetHeight和style.height的区别

demo.style.height只能获取行内样式，如果样式写到了其他地方，甚至根本就没写，便无法获取
style.height是字符串（而且带单位），offsetHeight是数值
demo.style.height可以设置行内样式，offsetHeight是只读属性
因此，一般用demo.offsetHeight来获取某元素的真实宽度/高度，用style.height来设置宽度/高度

----------------------------------------------------------------------------------------------
@offsetLeft和style.left的区别

一、style.left只能获取行内样式
二、offsetLeft只读，style.left可读可写
三、offsetLeft是数值，style.left是字符串并且有单位px
四、如果没有加定位，style.left获取的数值可能是无效的
五、最大区别在于offsetLeft以border左上角为基准，style.left以margin左上角为基准

----------------------------------------------------------------------------------------------
@scrollHeight和scrollWidth

标签内部实际内容的高度/宽度
不计算边框，如果内容不超出盒子，值为盒子的宽高（不带边框）
如果内容超出了盒子，就是从顶部或左部边框内侧一直到内容a的最外部分

----------------------------------------------------------------------------------------------
@scrollTop和scrollLeft

被卷去部分的 顶部/左侧 到可视区域 顶部/左侧 的距离
```





## 46.精灵图和 base64 如何选择？

答案：

## Css Sprites：

介绍：
Css Sprites（雪碧图或 css 精灵），是网页图片处理的一种方式，它允许你将一个页面涉及到的所有零星图片都包含到一张大图中去，这样一来，当访问该页面时，载入的图片就不会像以前那样一幅一幅地慢慢显示出来了。

原理：
将许多的小图片整合到一张大图片中，利用 css 中的 background-image 属性，background-position 属性定位某个图片位置，来达到在大图片中引用某个部位的小图片的效果。

优点：
减少网页的 http 请求，提升网页加载速度。
合并多张小图片成大图，能减少字节总数（大图大小 <= 多张小图大小）.

缺点：
前期需要处理图片将小图合并，多些许工程量。
对于需要经常改变的图片维护起来麻烦。

## base64：

介绍：
base64 是网络上最常见的用于传输 8Bit 字节代码的编码方式之一，要求把每三个 8Bit 的字节转换为四个 6Bit 的字节，Base64 是网络上最常见的用于传输 8Bit 字节代码的编码方式之一。

通俗点讲：将资源原本二进制形式转成以 64 个字符基本单位，所组成的一串字符串。
比如一张图片转成 base64 编码后就像这样，图片直接以 base64 形式嵌入文件中（很长没截完）：


生成 base64 编码：
图片生成 base64 可以用一些工具，如在线工具，但在项目中这样一个图片这样生成是挺繁琐。
特别说下，webpack 中的 url-loader 可以完成这个工作，可以对限制大小的图片进行 base64 的转换，非常方便。

优点：
base64 的图片会随着 html 或者 css 一起下载到浏览器,减少了请求.
可避免跨域问题

缺点：
老东西（低版本）的 IE 浏览器不兼容。
体积会比原来的图片大一点。
css 中过多使用 base64 图片会使得 css 过大，不利于 css 的加载。

适用场景：
应用于小的图片几 k 的，太大的图片会转换后的大小太大，得不偿失。
用于一些 css sprites 不利处理的小图片，如一些可以通过 background-repeat 平铺来做成背景的图片

解析：[参考](https://www.cnblogs.com/wangqi2019/p/10498627.html)




## 47.如果设计中使用了非标准的字体，你该如何去实现？

答案：使用`@font-face`并为不同的`font-weight`定义`font-family`。




## 48.知道 css 有个 content 属性吗？有什么作用？有什么应用？

答案：知道。css 的 content 属性专门应用在 before/after 伪元素上，用来插入生成内容。最常见的应用是利用伪类清除浮动。

```css
//一种常见利用伪类清除浮动的代码
.clearfix:after {
  content: "."; //这里利用到了content属性
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.clearfix {
  zoom: 1;
}
```

after 伪元素通过 content 在元素的后面生成了内容为一个点的块级素，再利用 clear:both 清除浮动。
那么问题继续还有，知道 css 计数器（序列数字字符自动递增）吗？如何通过 css content 属性实现 css 计数器？

答案：css 计数器是通过设置 counter-reset 、counter-increment 两个属性 、及 counter()/counters()一个方法配合 after / before 伪类实现。




## 49.CSS 选择器的优先级是如何计算的？

答案：浏览器通过优先级规则，判断元素展示哪些样式。优先级通过 4 个维度指标确定，我们假定以`a、b、c、d`命名，分别代表以下含义：

1. `a`表示是否使用内联样式（inline style）。如果使用，`a`为 1，否则为 0。
2. `b`表示 ID 选择器的数量。
3. `c`表示类选择器、属性选择器和伪类选择器数量之和。
4. `d`表示标签（类型）选择器和伪元素选择器之和。

优先级的结果并非通过以上四个值生成一个得分，而是每个值分开比较。`a、b、c、d`权重从左到右，依次减小。判断优先级时，从左到右，一一比较，直到比较出最大值，即可停止。所以，如果`b`的值不同，那么`c`和`d`不管多大，都不会对结果产生影响。比如`0，1，0，0`的优先级高于`0，0，10，10`。

当出现优先级相等的情况时，最晚出现的样式规则会被采纳。如果你在样式表里写了相同的规则（无论是在该文件内部还是其它样式文件中），那么最后出现的（在文件底部的）样式优先级更高，因此会被采纳。

在写样式时，我会使用较低的优先级，这样这些样式可以轻易地覆盖掉。尤其对写 UI 组件的时候更为重要，这样使用者就不需要通过非常复杂的优先级规则或使用`!important`的方式，去覆盖组件的样式了。

解析：[参考](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)、[参考](https://www.sitepoint.com/web-foundations/specificity/)




## 50.请阐述`Float`定位的工作原理。

答案：

浮动（float）是 CSS 定位属性。浮动元素从网页的正常流动中移出，但是保持了部分的流动性，会影响其他元素的定位（比如文字会围绕着浮动元素）。这一点与绝对定位不同，绝对定位的元素完全从文档流中脱离。

CSS 的`clear`属性通过使用`left`、`right`、`both`，让该元素向下移动（清除浮动）到浮动元素下面。

如果父元素只包含浮动元素，那么该父元素的高度将塌缩为 0。我们可以通过清除（clear）从浮动元素后到父元素关闭前之间的浮动来修复这个问题。

有一种 hack 的方法，是自定义一个`.clearfix`类，利用伪元素选择器`::after`清除浮动。[另外还有一些方法](https://css-tricks.com/all-about-floats/#article-header-id-4)，比如添加空的`<div></div>`和设置浮动元素父元素的`overflow`属性。与这些方法不同的是，`clearfix`方法，只需要给父元素添加一个类，定义如下：

```css
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

值得一提的是，把父元素属性设置为`overflow: auto`或`overflow: hidden`，会使其内部的子元素形成块格式化上下文（Block Formatting Context），并且父元素会扩张自己，使其能够包围它的子元素。

解析：[参考](https://css-tricks.com/all-about-floats/)




## 51.请阐述`z-index`属性，并说明如何形成层叠上下文（stacking context）

答案：

CSS 中的`z-index`属性控制重叠元素的垂直叠加顺序。`z-index`只能影响`position`值不是`static`的元素。

没有定义`z-index`的值时，元素按照它们出现在 DOM 中的顺序堆叠（层级越低，出现位置越靠上）。非静态定位的元素（及其子元素）将始终覆盖静态定位（static）的元素，而不管 HTML 层次结构如何。

层叠上下文是包含一组图层的元素。 在一组层叠上下文中，其子元素的`z-index`值是相对于该父元素而不是 document root 设置的。每个层叠上下文完全独立于它的兄弟元素。如果元素 B 位于元素 A 之上，则即使元素 A 的子元素 C 具有比元素 B 更高的`z-index`值，元素 C 也永远不会在元素 B 之上.

每个层叠上下文是自包含的：当元素的内容发生层叠后，整个该元素将会在父层叠上下文中按顺序进行层叠。少数 CSS 属性会触发一个新的层叠上下文，例如`opacity`小于 1，`filter`不是`none`，`transform`不是`none`。

解析：[参考 1](https://css-tricks.com/almanac/properties/z/z-index/)、[参考 2](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/)、[参考 3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)




## 52.如何解决不同浏览器的样式兼容性问题？

答案：

- 在确定问题原因和有问题的浏览器后，使用单独的样式表，仅供出现问题的浏览器加载。这种方法需要使用服务器端渲染。
- 使用已经处理好此类问题的库，比如 Bootstrap。
- 使用 `autoprefixer` 自动生成 CSS 属性前缀。
- 使用 Reset CSS 或 Normalize.css。




## 53.如何为功能受限的浏览器提供页面？ 使用什么样的技术和流程？

答案：

- 优雅的降级：为现代浏览器构建应用，同时确保它在旧版浏览器中正常运行。
- Progressive enhancement - The practice of building an application for a base level of user experience, but adding functional enhancements when a browser supports it.
- 渐进式增强：构建基于用户体验的应用，但在浏览器支持时添加新增功能。
- 利用 [caniuse.com](https://caniuse.com/) 检查特性支持。
- 使用 `autoprefixer` 自动生成 CSS 属性前缀。
- 使用 [Modernizr](https://modernizr.com/)进行特性检测。




## 54.有什么不同的方式可以隐藏内容（使其仅适用于屏幕阅读器）？

答案：

这些方法与可访问性（a11y）有关。

- `visibility: hidden`：元素仍然在页面流中，并占用空间。
- `width: 0; height: 0`：使元素不占用屏幕上的任何空间，导致不显示它。
- `position: absolute; left: -99999px`： 将它置于屏幕之外。
- `text-indent: -9999px`：这只适用于`block`元素中的文本。
- Metadata： 例如通过使用 Schema.org，RDF 和 JSON-LD。
- WAI-ARIA：如何增加网页可访问性的 W3C 技术规范。

即使 WAI-ARIA 是理想的解决方案，我也会采用绝对定位方法，因为它具有最少的注意事项，适用于大多数元素，而且使用起来非常简单。

解析：[参考 1](https://www.w3.org/TR/wai-aria-1.1/)、[参考 2](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)、[参考 3](http://a11yproject.com/)




## 55.除了`screen`，你还能说出一个 @media 属性的例子吗？

答案：

- all
  适用于所有设备。
- print
  为了加载合适的文档到当前使用的可视窗口. 需要提前咨询 paged media（媒体屏幕尺寸）, 以满足个别设备网页尺寸不匹配等问题。
- screen
  主要适用于彩色的电脑屏幕
- speech
  speech 这个合成器. 注意: CSS2 已经有一个相似的媒体类型叫 aural.

解析：[参考](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@media)




## 56.编写高效的 CSS 应该注意什么？

答案：

首先，浏览器从最右边的选择器，即关键选择器（key selector），向左依次匹配。根据关键选择器，浏览器从 DOM 中筛选出元素，然后向上遍历被选元素的父元素，判断是否匹配。选择器匹配语句链越短，浏览器的匹配速度越快。避免使用标签和通用选择器作为关键选择器，因为它们会匹配大量的元素，浏览器必须要进行大量的工作，去判断这些元素的父元素们是否匹配。

[BEM (Block Element Modifier)](https://bem.info/) methodology recommends that everything has a single class, and, where you need hierarchy, that gets baked into the name of the class as well, this naturally makes the selector efficient and easy to override.
[BEM (Block Element Modifier)](https://bem.info/)原则上建议为独立的 CSS 类命名，并且在需要层级关系时，将关系也体现在命名中，这自然会使选择器高效且易于覆盖。

搞清楚哪些 CSS 属性会触发重新布局（reflow）、重绘（repaint）和合成（compositing）。在写样式时，避免触发重新布局的可能。

解析：[参考 1](https://developers.google.com/web/fundamentals/performance/rendering/)、[参考 2](https://csstriggers.com/)




## 57.使用 CSS 预处理的优缺点分别是什么？

答案：

优点：

- 提高 CSS 可维护性。
- 易于编写嵌套选择器。
- 引入变量，增添主题功能。可以在不同的项目中共享主题文件。
- 通过混合（Mixins）生成重复的 CSS。
- Splitting your code into multiple files. CSS files can be split up too but doing so will require a HTTP request to download each CSS file.
- 将代码分割成多个文件。不进行预处理的 CSS，虽然也可以分割成多个文件，但需要建立多个 HTTP 请求加载这些文件。

缺点：

- 需要预处理工具。
- 重新编译的时间可能会很慢。




## 58.对于你使用过的 CSS 预处理，说说喜欢和不喜欢的地方？

答案：

喜欢：

- 绝大部分优点上题以及提过。
- Less 用 JavaScript 实现，与 NodeJS 高度结合。

不喜欢：

- 我通过`node-sass`使用 Sass，它用 C ++ 编写的 LibSass 绑定。在 Node 版本切换时，我必须经常重新编译。
- Less 中，变量名称以`@`作为前缀，容易与 CSS 关键字混淆，如`@media`、`@import`和`@font-face`。




## 59. 解释浏览器如何确定哪些元素与 CSS 选择器匹配。

答案：

浏览器从最右边的选择器（关键选择器）根据关键选择器，浏览器从 DOM 中筛选出元素，然后向上遍历被选元素的父元素，判断是否匹配。选择器匹配语句链越短，浏览器的匹配速度越快。

例如，对于形如`p span`的选择器，浏览器首先找到所有`<span>`元素，并遍历它的父元素直到根元素以找到`<p>`元素。对于特定的`<span>`，只要找到一个`<p>`，就知道`<span>`已经匹配并停止继续匹配。

解析：[参考](https://stackoverflow.com/questions/5797014/why-do-browsers-match-css-selectors-from-right-to-left)




## 60.说说你对盒模型的理解，以及如何告知浏览器使用不同的盒模型渲染布局。

答案：

CSS 盒模型描述了以文档树中的元素而生成的矩形框，并根据排版模式进行布局。每个盒子都有一个内容区域（例如文本，图像等）以及周围可选的`padding`、`border`和`margin`区域。

CSS 盒模型负责计算：

- 块级元素占用多少空间。
- 边框是否重叠，边距是否合并。
- 盒子的尺寸。

盒模型有以下规则：

- 块级元素的大小由`width`、`height`、`padding`、`border`和`margin`决定。
- 如果没有指定`height`，则块级元素的高度等于其包含子元素的内容高度加上`padding`（除非有浮动元素，请参阅下文）。
- 如果没有指定`width`，则非浮动块级元素的宽度等于其父元素的宽度减去父元素的`padding`。
- 元素的`height`是由内容的`height`来计算的。
- 元素的`width`是由内容的`width`来计算的。
- 默认情况下，`padding`和`border`不是元素`width`和`height`的组成部分。

解析：[参考](https://www.smashingmagazine.com/2010/06/the-principles-of-cross-browser-css-coding/#understand-the-css-box-model)




## 61.`* { box-sizing: border-box; }`会产生怎样的效果？

答案：

- 元素默认应用了`box-sizing: content-box`，元素的宽高只会决定内容（content）的大小。
- `box-sizing: border-box`改变计算元素`width`和`height`的方式，`border`和`padding`的大小也将计算在内。
- 元素的`height` = 内容（content）的高度 + 垂直方向的`padding` + 垂直方向`border`的宽度
- 元素的`width` = 内容（content）的宽度 + 水平方向的`padding` + 水平方向`border`的宽度




## 62.`relative`、`fixed`、`absolute`和`static`四种定位有什么区别？

答案：

经过定位的元素，其`position`属性值必然是`relative`、`absolute`、`fixed`或`static`。

- `static`：默认定位属性值。该关键字指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。此时 top, right, bottom, left 和 z-index 属性无效。
- `relative`：该关键字下，元素先放置在未添加定位时的位置，再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白）。
- `absolute`：不为元素预留空间，通过指定元素相对于最近的非 static 定位祖先元素的偏移，来确定元素位置。绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。
- `fixed`：不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变。打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。当元素祖先的 transform 属性非 none 时，容器由视口改为该祖先。
- `static`：盒位置根据正常流计算(这称为正常流动中的位置)，然后相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位。在所有情况下（即便被定位元素为 `table` 时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。`position: static` 对 `table` 元素的效果与 `position: relative` 相同。

解析：[参考](https://developer.mozilla.org/en/docs/Web/CSS/position)




## 63.你使用过哪些现有的 CSS 框架？你是如何改进它们的？

答案：

- **Bootstrap**： 更新周期缓慢。Bootstrap 4 已经处于 alpha 版本将近两年了。添加了在页面中广泛使用的微调按钮组件。
- **Semantic UI**：源代码结构使得自定义主题很难理解。非常规主题系统的使用体验很差。外部库的路径需要硬编码（hard code）配置。变量重新赋值没有 Bootstrap 设计得好。
- **Bulma**： 需要很多非语义的类和标记，显得很多余。不向后兼容，以至于升级版本后，会破坏应用的正常运行。




## 64.你了解 CSS Flex 和 Grid 吗？

答案：Flex 主要用于一维布局，而 Grid 则用于二维布局。

解析：

### Flex

flex 容器中存在两条轴， 横轴和纵轴， 容器中的每个单元称为 flex item。

在容器上可以设置 6 个属性：

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

注意：当设置 flex 布局之后，子元素的 float、clear、vertical-align 的属性将会失效。

#### Flex 项目属性

有六种属性可运用在 item 项目上:

1. order
2. flex-basis
3. flex-grow
4. flex-shrink
5. flex
6. align-self

### Grid

CSS 网格布局用于将页面分割成数个主要区域，或者用来定义组件内部元素间大小、位置和图层之间的关系。

像表格一样，网格布局让我们能够按行或列来对齐元素。 但是，使用 CSS 网格可能还是比 CSS 表格更容易布局。 例如，网格容器的子元素可以自己定位，以便它们像 CSS 定位的元素一样，真正的有重叠和层次。




## 65.响应式设计与自适应设计有何不同？

答案：

响应式设计和自适应设计都以提高不同设备间的用户体验为目标，根据视窗大小、分辨率、使用环境和控制方式等参数进行优化调整。

响应式设计的适应性原则：网站应该凭借一份代码，在各种设备上都有良好的显示和使用效果。响应式网站通过使用媒体查询，自适应栅格和响应式图片，基于多种因素进行变化，创造出优良的用户体验。就像一个球通过膨胀和收缩，来适应不同大小的篮圈。

自适应设计更像是渐进式增强的现代解释。与响应式设计单一地去适配不同，自适应设计通过检测设备和其他特征，从早已定义好的一系列视窗大小和其他特性中，选出最恰当的功能和布局。与使用一个球去穿过各种的篮筐不同，自适应设计允许使用多个球，然后根据不同的篮筐大小，去选择最合适的一个。

解析：[参考 1](https://developer.mozilla.org/en-US/docs/Archive/Apps/Design/UI_layout_basics/Responsive_design_versus_adaptive_design)、[参考 2](http://mediumwell.com/responsive-adaptive-mobile/)、[参考 3](https://css-tricks.com/the-difference-between-responsive-and-adaptive-design/)




## 66.你有没有使用过视网膜分辨率的图形？当中使用什么技术？

答案：我倾向于使用更高分辨率的图形（显示尺寸的两倍）来处理视网膜显示。更好的方法是使用媒体查询，像`@media only screen and (min-device-pixel-ratio: 2) { ... }`，然后改变`background-image`。

对于图标类的图形，我会尽可能使用 svg 和图标字体，因为它们在任何分辨率下，都能被渲染得十分清晰。

还有一种方法是，在检查了`window.devicePixelRatio`的值后，利用 JavaScript 将`<img>`的`src`属性修改，用更高分辨率的版本进行替换。

解析：[参考](https://www.sitepoint.com/css-techniques-for-retina-displays/)




## 67.什么情况下，用`translate()`而不用绝对定位？什么时候，情况相反。

答案：`translate()`是`transform`的一个值。改变`transform`或`opacity`不会触发浏览器重新布局（reflow）或重绘（repaint），只会触发复合（compositions）。而改变绝对定位会触发重新布局，进而触发重绘和复合。`transform`使浏览器为元素创建一个 GPU 图层，但改变绝对定位会使用到 CPU。 因此`translate()`更高效，可以缩短平滑动画的绘制时间。

当使用`translate()`时，元素仍然占据其原始空间（有点像`position：relative`），这与改变绝对定位不同。

解析：[参考 1](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/)、[参考 2](https://neal.codes/blog/front-end-interview-css-questions)、[参考 3](https://quizlet.com/28293152/front-end-interview-questions-css-flash-cards/)、[参考 4](http://peterdoes.it/2015/12/03/a-personal-exercise-front-end-job-interview-questions-and-my-answers-all/)




## 68.一边固定宽度一边宽度自适应

答案：可以使用 flex 布局 复制下面的 HTML 和 CSS 代码 用浏览器打开可以看到效果

```html
<div class="wrap">
  <div class="div1"></div>
  <div class="div2"></div>
</div>
```

```css
.wrap {
  display: flex;
  justify-content: space-between;
}
.div1 {
  min-width: 200px;
}
.div2 {
  width: 100%;
  background: #e6e6e6;
}
html,
body,
div {
  height: 100%;
  margin: 0;
}
```




## 69.display:none、visibile:hidden、opacity:0 的区别

答案：

|                  | 是否隐藏 | 是否在文档中占用空间 | 是否会触发事件 |
| ---------------- | -------- | -------------------- | -------------- |
| display: none    | 是       | 否                   | 否             |
| visibile: hidden | 是       | 是                   | 否             |
| opacity: 0       | 是       | 是                   | 是             |




## 70.文本超出部分显示省略号

答案：

#### 单行

```css
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```

#### 多行

```css
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3; // 最多显示几行
overflow: hidden;
```




## 71.利用伪元素画三角

答案：

```css
.info-tab {
  position: relative;
}
.info-tab::after {
  content: "";
  border: 4px solid transparent;
  border-top-color: #2c8ac2;
  position: absolute;
  top: 0;
}
```




## 72.过渡与动画的区别是什么

答案：

- transition
  可以在一定的时间内实现元素的状态过渡为最终状态，用于模拟以一种过渡动画效果，但是功能有限，只能用于制作简单的动画效果而动画属性
- animation
  可以制作类似 Flash 动画，通过关键帧控制动画的每一步，控制更为精确，从而可以制作更为复杂的动画。




## 73.去除 inline-block 元素间间距的方法

答案：

- 移除空格
- 使用 margin 负值
- 使用 font-size:0
- letter-spacing
- word-spacing

解析：更详细的介绍请看[去除 inline-block 元素间间距的 N 种方法](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)




## 74.为什么要初始化 CSS 样式

答案：

- 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对 CSS 初始化往往会出现浏览器之间的页面显示差异。
- 去掉标签的默认样式如：margin,padding，其他浏览器默认解析字体大小，字体设置。




## 75.行内元素和块级元素有哪些

答案：

### 行内元素

一个行内元素只占据它对应标签的边框所包含的空间<br>
一般情况下，行内元素只能包含数据和其他行内元素

```
b, big, i, small, tt
abbr, acronym, cite, code, dfn, em, kbd, strong, samp, var
a, bdo, br, img, map, object, q, script, span, sub, sup
button, input, label, select, textarea
```

### 块级元素

占据一整行，高度、行高、内边距和外边距都可以改变，可以容纳块级标签和其他行内标签<br>

```
header,form,ul,ol,table,article,div,hr,aside,figure,canvas,video,audio,footer
```




## 76. 设备像素比

答案：




## 77. ::bofore 和 :after 中双冒号和单冒号有什么区别？

答案：




## 78. 说下 CSS3 中一些样式的兼容，分别指兼容哪些浏览器

答案：




## 79. 有哪些手段可以优化 CSS, 提高性能

答案：

1, 首推的是合并css文件，如果页面加载10个css文件，每个文件1k，那么也要比只加载一个100k的css文件慢。

2，减少css嵌套，最好不要套三层以上。

3，不要在ID选择器前面进行嵌套，ID本来就是唯一的而且人家权值那么大，嵌套完全是浪费性能。

4，建立公共样式类，把相同样式提取出来作为公共类使用，比如我们常用的清除浮动等。

5，减少通配符*或者类似[hidden="true"]这类选择器的使用，挨个查找所有...这性能能好吗？当然重置样式这些必须 的东西是不能少的。

6，巧妙运用css的继承机制，如果父节点定义了，子节点就无需定义。

7，拆分出公共css文件，对于比较大的项目我们可以将大部分页面的公共结构的样式提取出来放到单独css文件里， 这样一次下载后就放到缓存里，当然这种做法会增加请求，具体做法应以实际情况而定。

8，不用css表达式，表达式只是让你的代码显得更加炫酷，但是他对性能的浪费可能是超乎你的想象的。

9，少用css rest，可能你会觉得重置样式是规范，但是其实其中有很多的操作是不必要不友好的，有需求有兴趣的 朋友可以选择normolize.css

10，cssSprite，合成所有icon图片，用宽高加上bacgroud-position的背景图方式显现出我们要的icon图，这是一种 十分实用的技巧，极大减少了http请求。

11，当然我们还需要一些善后工作，CSS压缩(这里提供一个在线压缩 YUI Compressor ，当然你会用其他工具来压缩是十 分好的)，

12，GZIP压缩，Gzip是一种流行的文件压缩算法，详细做法可以谷歌或者百度。




## 80. 怎么样实现边框 0.5 个像素？

答案：




## 81. transform translate transition 的区别

答案：




## 82. 请解释一下 CSS3 的 Flexbox（弹性盒布局模型）,以及适用场景？

答案：




## 83. 用纯 CSS 创建一个三角形的原理是什么？

答案：




## 84. 一个满屏 品 字布局 如何设计?

答案：




## 85. 全屏滚动的原理是什么？用到了 CSS 的那些属性？

答案：




## 86. 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的 IE？

答案：




## 87. 如何修改 chrome 记住密码后自动填充表单的黄色背景？

答案：




## 88.用 css 分别实现某个 div 元素上下居中和左右居中

答案：




## 89. 你对 line-height 是如何理解的？

答案：




## 90. 让页面里的字体变清晰，变细用 CSS 怎么做？

答案：

-webkit-font-smoothing: antialiased;




## 91. font-style 属性可以让它赋值为“oblique” oblique 是什么意思？

答案：




## 92 .position:fixed;在 android 下无效怎么处理？

答案：




## 93. 如果需要手动写动画，你认为最小时间间隔是多久，为什么？

答案：




## 94. overflow: scroll 时不能平滑滚动的问题怎么处理？

答案：




## 95. 有一个高度自适应的 div，里面有两个 div，一个高度 100px，希望另一个填满剩下的高度。

答案：




## 96.postcss 的作用

答案：




## 97.自定义字体的使用场景

答案：




## 98.如何美化 CheckBox

答案：




## 99.float 和 display:inline-block 的区别是什么？

答案：




## 100.rem 布局字体太大怎么处理?

答案：




## 101.标准模式与怪异模式的区别

答案：浏览器解析 CSS 的两种模式：标准模式(strict mode)和怪异模式(quirks mode)

标准模式：浏览器按 W3C 标准解析执行代码；

怪异模式：使用浏览器自己的方式解析执行代码，因为不同浏览器解析执行的方式不一样，所以称之为怪异模式。

浏览器解析时使用标准模式还是怪异模式，与网页中的 DTD 声明直接相关，DTD 声明定义了标准文档的类型（标准模式解析）文档类型，会使浏览器使用相关的方式加载网页并显示，忽略 DTD 声明，将使网页进入怪异模式（quirks mode）。

区别是：

1、盒模型：

在怪异模式下，盒模型为 IE 模型


而在 W3C 标准的盒模型中为：


2、图片元素的垂直对齐方式

对于 inline 元素和 table-cell 元素，标准模式下 vertical-align 属性默认取值是 baseline；在怪异模式下，table 单元格中的图片的 vertical-align 属性默认取值是 bottom。因此在图片底部会有及像素的空间。

3、`<table>`元素中的字体
CSS 中，对于 font 的属性都是可以继承的。怪异模式下，对于 table 元素，字体的某些元素将不会从 body 等其他封装元素继承中的得到，特别是 font-size 属性。

4、内联元素的尺寸

- 标准模式下，non-replaced inline 元素无法自定义大写；
- 怪异模式下，定义这些元素的 width、height 属性可以影响这些元素显示的尺寸。

5、元素的百分比高度

- CSS 中对于元素的百分比高度规定：百分比为元素包含块的高度，不可为负值；如果包含块的高度没有显示给出，该值等同于 auto，所以百分比的高度必须是在元素有高度声明的情况下使用。
- 当一个元素使用百分比高度是，标准模式下，高度取决于内容变化，怪异模式下，百分比高度被准确应用

6、元素溢出的处理

标准模式下，overflow 取值默认为 visible；在怪异模式在，该溢出会被当做扩展 box 来对待，即元素的大小由内容决定，溢出不会裁剪，元素框自动调整，包含溢出内容。



## 66.css reset 与 css sprites

答案：

css reset ：重置浏览器默认属性

css sprites ：由多个小图片组成的大图，减少服务器对图片的请求数



## 67.IE6 遇到什么 bug？解决办法是？

答案：

一、IE6 双倍边距 bug

当页面上的元素使用 float 浮动时，不管是向左还是向右浮动;只要该元素带有 margin 像素都会使该值乘以 2，例如“margin-left:10px” 在 IE6 中，该值就会被解析为 20px。想要解决这个 BUG 就需要在该元素中加入 display:inline 或 display:block 明确其元素类型即可解决双倍边距的 BUG

二、IE6 中 3 像素问题及解决办法

当元素使用 float 浮动后，元素与相邻的元素之间会产生 3px 的间隙。诡异的是如果右侧的容器没设置高度时 3px 的间隙在相邻容器的内部，当设定高度后又跑到容器的相反侧了。要解决这类 BUG 的话，需要使布局在同一行的元素都加上 float 浮动。

三、IE6 中奇数宽高的 BUG

IE6 中奇数的高宽显示大小与偶数高宽显示大小存在一定的不同。其中要问题是出在奇数高宽上。要解决此类问题，只需要尽量将外部定位的 div 高宽写成偶数即可。

四、IE6 中图片链接的下方有间隙

IE6 中图片的下方会存在一定的间隙，尤其在图片垂直挨着图片的时候，即可看到这样的间隙。要解决此类问题，需要将 img 标签定义为 display:block 或定义 vertical-align 对应的属性。也可以为 img 对应的样式写入 font-size:0

五、IE6 下空元素的高度 BUG

如果一个元素中没有任何内容，当在样式中为这个元素设置了 0-19px 之间的高度时。此元素的高度始终为 19px。

解决的方法有四种:

1.在元素的 css 中加入：overflow:hidden

2.在元素中插入 html 注释：

3.在元素中插入 html 的空白符：

4.在元素的 css 中加入：font-size:0

六、重复文字的 BUG

在某些比较复杂的排版中，有时候浮动元素的最后一些字符会出现在 clear 清除元素的下面。

解决方法如下：

1.确保元素都带有 display:inline

2.在最后一个元素上使用“margin-right:-3px

3.为浮动元素的最后一个条目加上条件注释，xxx

4.在容器的最后元素使用一个空白的 div，为这个 div 指定不超过容器的宽度。

七、IE6 中 z-index 失效

具体 BUG 为，元素的父级元素设置的 z-index 为 1，那么其子级元素再设置 z-index 时会失效，其层级会继承父级元素的设置，造成某些层级调整上的 BUG。

写在最后：实际上 IE6 中，很多 BUG 的解决方法都可以使用 display:inline、font-size:0、float 解决。因此我们在书写代码时要记住，一旦使用了 float 浮动，就为元素增加一个 display:inline 样式，可以有效的避免浮动造成的样式错乱问题。使用空 DIV 时，为了避免其高度影响布局美观，也可以为其加上 font-size:0 这样就很容易避免一些兼容上的问题。

解析：[参考](https://www.cnblogs.com/rightzhao/p/3474162.html)



## 68.实现模糊搜索结果的关键词高亮显示

答案：



## 69.介绍css3中position:sticky（网易）

答案：






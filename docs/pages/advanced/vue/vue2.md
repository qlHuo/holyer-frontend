

# Vue2相关知识

## 1. Vue 的实例生命周期

在Vuejs中，一个组件从创建到销毁会经历一系列的过程，这些过程可以分为创建、挂载、更新和销毁四个阶段，每个阶段都有对应的生命周期钩子。

![vue_002](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251123174549568.jpg)

### 一、生命周期详解

1. **创建阶段**
   - **beforeCreate**：在实例初始化之后，数据观测（`data`、`props` 等）和事件配置之前被调用。此时，`this` 指向组件实例，但组件的 `data`、`props` 等都还未初始化，所以无法访问它们。
   - **created**：在实例创建完成后被立即调用。此时，`data` 和 `props` 已被初始化，可访问和操作它们，但 DOM 还未被挂载，即 `$el` 还不存在。如果需要进行一些数据请求、初始化操作等，可在此钩子函数中进行。
   - **beforeMount**：在挂载开始之前被调用，此时模板已经编译完成，但尚未挂载到真实 DOM 上。可以在这个阶段对模板进行最后的修改。
   - **mounted**：在组件挂载到真实 DOM 后被调用。此时，`$el` 已存在，可以操作 DOM 元素，比如初始化第三方插件、获取 DOM 元素的尺寸等。同时，子组件也已挂载完成。
2. **更新阶段**
   - **beforeUpdate**：在数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。此时，数据已经更新，但 DOM 还未更新，可在这个钩子函数中访问更新前的 DOM 状态。
   - **updated**：在由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。此时，DOM 已经更新完成，可以访问更新后的 DOM 状态。但要注意，在此处进行 DOM 操作可能会陷入死循环，因为 `updated` 钩子函数在数据更新时会反复调用。
3. **销毁阶段**
   - **beforeDestroy**：在实例销毁之前调用。此时，实例仍然完全可用，可以在这个阶段进行一些清理工作，比如清除定时器、解绑事件监听器等。
   - **destroyed**：在实例销毁之后调用。此时，所有的指令都已解绑，所有的事件监听器都已移除，子实例也已被销毁。
4. **`props`、`data()`、`watch`、`computed`、`methods` 的执行时机**
   - **`props`**：在 `beforeCreate` 之前，Vue 会解析父组件传递过来的 `props`，并将其添加到组件实例中。在 `created` 钩子函数中，`props` 已可正常访问。
   - **`data()`**：在 `beforeCreate` 之后，`created` 之前，Vue 会调用 `data()` 函数，将返回的对象作为组件的初始数据，并进行响应式处理。在 `created` 钩子函数中，`data` 已可正常访问。
   - **`computed`**：在 `created` 钩子函数之前，Vue 会初始化 `computed` 属性。计算属性会在其依赖的数据发生变化时重新计算，并且具有缓存机制，只有在依赖数据变化时才会重新求值。
   - **`watch`**：在 `created` 钩子函数之后，Vue 会初始化 `watch` 监听器。`watch` 用于监听数据的变化，当监听的数据发生变化时，会执行相应的回调函数。
   - **`methods`**：在组件实例创建过程中，`methods` 中的方法会被定义为组件的实例方法。在任何钩子函数或模板中都可以调用这些方法。

### 二、特殊组件的生命周期

#### 1. keep-alive 组件

- **activated()**：缓存组件激活时
- **deactivated()**：缓存组件停用时

```JavaScript
activated() {
  // 恢复组件状态
  this.startDataPolling();
},
deactivated() {
  // 暂停后台任务
  this.stopDataPolling();
}
```

#### 2. 错误处理

- **errorCaptured()**：捕获子孙组件错误

```JavaScript
errorCaptured(err, vm, info) {
  console.error(`Error in ${info}:`, err);
  this.logErrorToService(err); // 上报错误
  return false; // 阻止错误继续向上传播
}
```

### 三、父子组件的生命周期执行顺序

1. **加载渲染过程**
   - **父组件 beforeCreate**：父组件实例刚被创建，此时还未进行数据观测以及事件和方法的初始化，`this` 已指向组件实例，但数据和方法都不可用。
   - **父组件 created**：父组件数据观测和初始化已完成，可访问 `data`、`props` 等数据，但此时 DOM 还未挂载，不能操作 DOM。
   - **父组件 beforeMount**：模板已编译完成，但还未挂载到真实 DOM，可对模板做最后的修改。
   - **子组件 beforeCreate**：子组件实例开始创建，和父组件 `beforeCreate` 类似，此时子组件还未进行数据观测以及事件和方法的初始化。
   - **子组件 created**：子组件数据观测和初始化已完成，可访问子组件的 `data`、`props` 等数据。
   - **子组件 beforeMount**：子组件模板已编译完成，但还未挂载到真实 DOM。
   - **子组件 mounted**：子组件成功挂载到真实 DOM，此时可以操作子组件的 DOM 元素。
   - **父组件 mounted**：父组件挂载到真实 DOM，此时父组件和子组件都已挂载完成，可操作父组件 DOM 元素。
   - 总结加载渲染过程顺序为：父组件 `beforeCreate` -> 父组件 `created` -> 父组件 `beforeMount` -> 子组件 `beforeCreate` -> 子组件 `created` -> 子组件 `beforeMount` -> 子组件 `mounted` -> 父组件 `mounted`。
2. **更新过程**
   - **父组件 beforeUpdate**：父组件数据发生变化，在虚拟 DOM 重新渲染和打补丁之前调用。此时，父组件数据已更新，但 DOM 还未更新。
   - **子组件 beforeUpdate**：父组件数据变化可能影响到子组件，子组件在虚拟 DOM 重新渲染和打补丁之前调用。此时子组件数据也准备更新，DOM 同样未更新。
   - **子组件 updated**：子组件虚拟 DOM 重新渲染和打补丁完成，DOM 更新完毕。
   - **父组件 updated**：父组件虚拟 DOM 重新渲染和打补丁完成，DOM 更新完毕。
   - 总结更新过程顺序为：父组件 `beforeUpdate` -> 子组件 `beforeUpdate` -> 子组件 `updated` -> 父组件 `updated`。
3. **销毁过程**
   - **父组件 beforeDestroy**：父组件实例即将销毁，此时实例仍然完全可用，可进行一些清理工作，如清除定时器、解绑事件监听器等。
   - **子组件 beforeDestroy**：父组件销毁过程中，子组件也即将销毁，同样可进行清理工作。
   - **子组件 destroyed**：子组件已销毁，所有指令解绑，事件监听器移除，子组件实例不可用。
   - **父组件 destroyed**：父组件已销毁，所有指令解绑，事件监听器移除，父组件实例不可用。
   - 总结销毁过程顺序为：父组件 `beforeDestroy` -> 子组件 `beforeDestroy` -> 子组件 `destroyed` -> 父组件 `destroyed`。

![wenxiaobai_mermaid_1764084856667](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251125233453981.png)






## 2. 为什么避免 v-if 和 v-for 用在一起

在Vue2中，当同一个元素上同时使用`v-if`和`v-for`时，官方风格指南强烈建议避免这种情况。原因主要在于：

1. **优先级问题**：在Vue2中，`v-for`的优先级高于`v-if`。这意味着，对于同一个元素，`v-for`会先执行，然后`v-if`会在每次循环中执行。这可能导致即使我们只想渲染部分数据，也会先遍历整个数组，造成不必要的性能消耗。
2. **可读性和维护性**：将`v-if`和`v-for`放在一起会让代码难以理解，尤其是当条件判断较为复杂时。

### 具体分析

考虑以下代码：

```HTML
<ul>
  <li v-for="user in users" v-if="user.isActive" :key="user.id">
    {{ user.name }}
  </li>
</ul>
```

实际上，Vue2会将其解析为：

```JavaScript
// 伪代码：先执行循环，再在循环内部每次进行判断
users.forEach(user => {
  if (user.isActive) {
    // 生成对应的li元素
  }
});
```

即使我们只需要显示少量活跃用户，也会遍历整个用户列表，如果用户列表很大，这会造成性能浪费。

### 解决方案

1. **使用计算属性**：预先过滤列表，避免在模板中同时使用`v-for`和`v-if`。

```vue
<template>
 <ul>
  <li v-for="user in activeUsers" :key="user.id">
   {{ user.name }}
  </li>
 </ul>
</template>
<script>
export default {
 data() {
   return {
     users: [/* ... */]
   }
 },
 computed: {
   activeUsers() {
     return this.users.filter(user => user.isActive);
   }
 }
}
</script>
```

2. **将`v-if`提升到外层元素**：如果过滤后的列表仍然需要条件判断（比如整个列表是否显示），可以将`v-if`移动到外层容器上。

```HTML
<ul v-if="shouldShowUsers">
 <li v-for="user in users" :key="user.id">
   {{ user.name }}
 </li>
</ul>
```

3. **使用`<template>`标签进行包裹**：如果不想添加额外的DOM元素，可以使用`<template>`标签来包裹循环，并在其上使用`v-if`。

```HTML
<template v-for="user in users">
 <li v-if="user.isActive" :key="user.id">
   {{ user.name }}
 </li>
</template>
```

但是注意，这种方法仍然会在每次渲染时遍历整个数组，所以如果数组很大且活跃用户很少，性能问题依然存在。因此，更推荐使用计算属性。

### Vue3的变化

在Vue3中，`v-if`的优先级高于`v-for`。这意味着在同一个元素上使用`v-if`和`v-for`时，`v-if`会先执行，此时在`v-if`的条件中无法访问到`v-for`的循环变量。因此，在Vue3中，同时使用两者会导致编译错误，从而强制开发者明确如何组织代码。



## 3. Vue2 插槽（Slot）详解

插槽（Slot）是 Vue2 中实现**内容分发**的关键机制，允许父组件向子组件传递**模板内容**，解决组件内容定制化的问题。以下是核心知识点：

#### **一、 基础用法（默认插槽）**

- **子组件**：使用 `<slot>` 标签定义占位符

```Vue
<!-- ChildComponent.vue -->
<template>
<div>
  <h3>子组件标题</h3>
  <slot>默认内容（父组件未传内容时显示）</slot>
</div>
</template>
```

- **父组件**：在子组件标签内传入内容

```Vue
<template>
<child-component>
  <p>这是父组件插入的内容</p>
</child-component>
</template>
```

#### **二、具名插槽（多个插槽）**

当需要多个独立内容区域时使用：

- **子组件**：用 `name` 命名插槽

```Vue
<template>
<div>
  <slot name="header"></slot>
  <slot></slot>  <!-- 默认插槽（隐含 name="default"）-->
  <slot name="footer"></slot>
</div>
</template>
```

- **父组件**：通过 `v-slot` 或 `slot` 属性指定位置

```Vue
<template>
<child-component>
  <template v-slot:header> <h1>标题</h1> </template>
  <p>默认插槽内容</p>
  <template #footer> <!-- 简写语法 -->
    <footer>底部信息</footer>
  </template>
</child-component>
</template>
```

#### **三、作用域插槽（数据回传）**

子组件向插槽传递数据，父组件自定义渲染逻辑：

- **子组件**：在 `<slot>` 上绑定数据

```Vue
<template>
<ul>
  <li v-for="item in items" :key="item.id">
    <slot :item="item"> {{ item.name }} </slot>
  </li>
</ul>
</template>
```

- **父组件**：用 `v-slot` 接收数据

```Vue
<template>
<child-component>
  <!-- 接收作用域数据 -->
  <template v-slot:default="slotProps">
    <span :class="{ active: slotProps.item.isActive }">
      {{ slotProps.item.name }}
    </span>
  </template>
</child-component>
</template>
```

#### **四、解构与默认值**

- **解构作用域数据**：

```Vue
<template #default="{ item }">
{{ item.name }}
</template>
```

- **设置默认值**：

```Vue
  <template #header="{ text = '默认标题' }">
    {{ text }}
  </template>
```

#### **五、插槽原理**

- 插槽内容被编译为**函数**（作用域插槽是函数式组件）
- 子组件渲染时，`<slot>` 标签会被替换为父组件传入的内容
- 作用域插槽通过 `scopedSlots` 属性传递数据

#### **六、最佳实践**

1. **命名规范**：具名插槽使用清晰的名称（如 `header`/`footer`）
2. **后备内容**：在 `<slot>` 内设置默认内容增强健壮性
3. **作用域插槽**：复杂数据渲染时提升组件灵活性
4. **避免滥用**：简单场景用 props，复杂 UI 定制用插槽

#### **注意事项**

1. `v-slot` 只能用于 `<template>` 或组件标签（Vue 2.6+）
2. 旧版语法 `slot="name"` 仍兼容但不推荐
3. 作用域插槽数据是**只读的**，避免直接修改



## 4. v-if 和 v-show 对比

> `v-if` = **条件性渲染**（操作 DOM） 
>
> `v-show` = **条件性显示**（操作 CSS）

| **特性**     | **v-if**                              | **v-show**                            |
| ------------ | ------------------------------------- | ------------------------------------- |
| **渲染机制** | 动态**添加/移除** DOM 元素            | 通过 CSS `display: none` **切换显示** |
| **初始渲染** | 条件为假时**不渲染**到 DOM            | 无论条件如何**始终渲染**到 DOM        |
| **切换开销** | 切换时**销毁/重建**组件（开销大）     | 仅切换 CSS 属性（开销小）             |
| **生命周期** | 切换时触发组件的`created`/`destroyed` | 无生命周期变化（仅 CSS 变化）         |
| **适用场景** | 运行时条件**很少改变**的情况          | 需要**频繁切换**显示/隐藏的场景       |
| **初始成本** | 初始渲染成本较低（条件假时不渲染）    | 初始渲染成本较高（总要渲染）          |
| **组合语法** | 支持 `v-else`/`v-else-if`             | 只能单独使用                          |

### 使用场景建议

- **用 `v-if` 当**： 条件在运行时**很少变化**（如权限控制、初始加载判断）
- **用 `v-show` 当**： 需要**高频切换**（如选项卡切换、折叠面板）



## 5. vue 常用的修饰符

### 一. 事件修饰符

vue为v-on提供了事件修饰符，通过点(.)表示的指令后缀来调用修饰符。

**.stop **

阻止点击事件冒泡，等同于JavaScript中的event.stopPropagation() 。使用了.stop后，点击子节点不会捕获到父节点的事件

```vue
<a v-on:click.stop="doThis"></a>
<a @click.stop="doThis"></a>
```

**.prevent **

防止执行预设的行为（如果事件可取消，则取消该事件，而不停止事件的进一步传播），等同于JavaScript中的event.preventDefault()，prevent等同于JavaScript的event.preventDefault()，用于取消默认事件。比如我们页面的标签，当用户点击时，通常在浏览器的网址列出#：

```vue
<a @submit.prevent="doThis"></a>
```

**.capture**

与事件冒泡的方向相反，事件捕获由外到内,捕获事件：嵌套两三层父子关系，然后所有都有点击事件，点击子节点，就会触发从外至内 父节点-》子节点的点击事件

```vue
<a @click.capture="doThis"></a>
```

**.self**

只会触发自己范围内的事件，不包含子元素

```vue
<a @click.self="doThat"></a>
```

**.once**

只执行一次，如果我们在@click事件上添加.once修饰符，只要点击按钮只会执行一次。

```vue
<a @click.once="doThis"></a>
```

**.passive**

Vue 还对应 addEventListener 中的 passive 选项提供了 .passive 修饰符

```vue
<!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 -->
<!-- 而不会等待 `onScroll` 完成  -->
<!-- 这其中包含 `event.preventDefault()` 的情况 -->
<div v-on:scroll.passive="onScroll">...</div>
```

这个 .passive 修饰符尤其能够提升移动端的性能。不要把 .passive 和 .prevent 一起使用，因为 .prevent 将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive 会告诉浏览器你不想阻止事件的默认行为。

### 二、键盘修饰符

在JavaScript事件中除了前面所说的事件，还有键盘事件，也经常需要监测常见的键值。在Vue中允许v-on在监听键盘事件时添加关键修饰符。记住所有的keyCode比较困难，所以Vue为最常用的键盘事件提供了别名： 
**.enter：回车键** 
**.tab：制表键** 
**.delete：含delete和backspace键** 
**.esc：返回键** 
**.space: 空格键** 
**.up：向上键** 
**.down：向下键** 
**.left：向左键** 
**.right：向右键**

例如：

```vue
<!-- 只有在 `keyCode` 是 13 时调用 `vm.submit()` -->
<input @keyup.13="submit" />
```

记住所有的 keyCode 比较困难，所以 Vue 为最常用的按键提供了别名：

```vue
<!-- 同上 -->
<input @keyup.enter="submit" />
```

可以通过全局 config.keyCodes 对象自定义按键修饰符别名：

```js
// 可以使用 `v-on:keyup.f1`
Vue.config.keyCodes ={
  f1: 112
}
```

### 三、系统修饰符

可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。 
**.ctrl** 
**.alt** 
**.shift** 
**.meta**

> 注意：在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。

例如：

```vue
<!-- Alt + C -->
<input @keyup.alt.67="clear" />
<!-- Ctrl + Click -->
<div @click.ctrl="doSomething">Do something</div>
```

注意：

> 请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。而单单释放 ctrl 也不会触发事件。如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。

**.exact修饰符**

.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。

```vue
<!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 有且只有 Ctrl 被按下的时候才触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 没有任何系统修饰符被按下的时候才触发 -->
<button @click.exact="onClick">A</button>
```

### 四、鼠标按钮修饰符

鼠标修饰符用来限制处理程序监听特定的滑鼠按键。常见的有： 

1. **.left**： 鼠标左键 `@mousedown.left="handler"`
2. **.right**：  鼠标右键 `@contextmenu.right.prevent`（阻止右键菜单）
3. **.middle**：鼠标中键 `@mouseup.middle="handler"` 
   这些修饰符会限制处理函数仅响应特定的鼠标按钮。

### 五、表单输入修饰符

**(1).lazy**

在改变后才触发（也就是说只有光标离开input输入框的时候值才会改变）

```vue
<input v-model.lazy="msg" />
```

**(2).number**

将输出字符串转为Number类型·（虽然type类型定义了是number类型，但是如果输入字符串，输出的是string）

```vue
<input v-model.number="msg" />
```

**(3).trim**

自动过滤用户输入的首尾空格

```vue
<input v-model.trim="msg" />
```

### 六、自定义按键修饰符别名

在 Vue中 可以通过config.keyCodes自定义按键修饰符别名。

```js
 // 可以使用 `v-on:keyup.f1` 或者 `@keyup.f1`
Vue.config.keyCodes = {  
    f1: 112
}
```

**keyCode对应表**

| **keyCode** | 实际键值              |
| ----------- | --------------------- |
| 48到57      | 0到9                  |
| 65到90      | a到z（A到Z）          |
| 112到135    | F1到F24               |
| 8           | BackSpace（退格）     |
| 9           | Tab                   |
| 13          | Enter（回车）         |
| 20          | Caps_Lock（大写锁定） |
| 32          | Space（空格键）       |
| 37          | Left（左箭头）        |
| 38          | Up（上箭头）          |
| 39          | Right（右箭头）       |
| 40          | Down（下箭头）        |

### 七、事件修饰符串联

```vue
<!-- 停止冒泡、阻止默认事件 -->
<a @click.stop.prevent="doThis"></a>
<!-- 右键菜单控制 -->
<div @contextmenu.prevent.right="showMenu">
  右键点击显示自定义菜单
</div>
<!-- 组合键保存 -->
<textarea @keydown.ctrl.s.prevent="saveContent"></textarea>
```

> 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `@click.prevent.self` 会阻止所有的点击，而 `@click.self.prevent` 只会阻止对元素自身的点击。



## 6. vue 中 key 的作用

在 Vue2 中，key 是一个特殊的属性，主要用在 Vue 的虚拟 DOM 算法中，作为节点的标识。当 Vue 更新虚拟 DOM 时，它会根据 key 来判断哪些节点是新的，哪些节点是旧的，从而高效地更新真实的DOM。

key 的作用主要体现在以下几个方面：

1. 在列表渲染（v-for）时，Vue 使用 key 来跟踪每个节点的身份，从而重用和重新排序现有元素。
2. 在条件渲染（v-if/v-else）中，使用key可以强制替换元素而不是复用它们。
3. 在动态组件中，使用key可以触发组件的重新渲染。

### 一、列表渲染中的key

在使用v-for进行列表渲染时，key是必须的（除非遍历输出的DOM内容非常简单，或者是刻意依赖默认行为以获取性能上的提升）。

为什么需要key？
当Vue正在更新使用v-for渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue将不会移动DOM元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。

这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时DOM状态（例如：表单输入值）的列表渲染输出。

为了给Vue一个提示，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一key属性。

```html
<ul>
  <li v-for="item in items" :key="item.id">
    {{ item.name }}
  </li>
</ul>
```

注意：key的值必须是唯一标识，通常使用id，如果没有id，也可以使用其他唯一值，但不推荐使用索引index作为key，因为当列表顺序变化时，索引也会变化，这会导致性能问题和状态问题。

> 使用索引作为key的弊端：
> 假设我们有一个列表，每个项目有一个输入框，我们在列表前面插入一个新项目，那么原来第一个项目的索引会变成1，第二个变成2，以此类推。Vue会根据key（索引）认为原来的第一个项目（索引0）被删除了，然后新插入了一个项目（索引0），然后原来的第二个项目（索引1）变成了第一个（索引0）？实际上Vue会重新使用已有的元素，而不是重新创建，这会导致输入框的状态错乱。
>
> 所以，最好使用唯一的id作为key。

### 二、条件渲染中的key

在条件渲染中，Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。比如在切换 v-if 和 v-else 时，如果两个元素结构相似，Vue 会复用同一个元素，只更新其中的内容，这样可以提高渲染效率。但有时候我们不需要复用，这时候可以添加 key 属性来区分两个元素，让 Vue 认为是两个不同的元素，从而重新渲染。

```vue
<template v-if="loginType === 'username'">
  <label>用户名</label>
  <input placeholder="请输入用户名" key="username-input" />
</template>
<template v-else>
  <label>邮箱</label>
  <input placeholder="请输入邮箱" key="email-input" />
</template>
```

在上面的例子中，两个input元素被设置了不同的key，所以每次切换时，input都会被重新创建，而不会复用。这样用户在不同输入框输入的内容就不会在切换时被保留。

### 三、动态组件中的key

在动态组件中，我们可能会使用`<component :is="currentComponent" />`来切换组件。默认情况下，当切换组件时，Vue会复用同一个组件实例，而不是销毁再创建。这可能会导致组件的生命周期钩子不会重新调用，或者组件的状态被保留。如果我们希望每次切换都重新渲染组件，可以给动态组件添加key属性。

```vue
<component :is="currentComponent" :key="currentComponent"></component>
```

这样，当currentComponent变化时，Vue会认为这是一个不同的组件，从而销毁旧组件实例，创建新组件实例。

### 四、触发强制更新

有时候，我们可能想要强制替换一个元素/组件，而不是复用它。这可以通过给元素/组件添加一个唯一的key属性来实现。当key改变时，Vue会强制替换该元素/组件。

```vue
<div :key="uniqueId">内容</div>
```

当uniqueId变化时，这个div会被重新创建。

### 总结

key是Vue中一个非常重要的概念，它帮助Vue高效地更新虚拟DOM。在列表渲染中，key可以帮助Vue跟踪每个节点的身份，从而重用和重新排序元素；在条件渲染和动态组件中，key可以控制元素的复用。正确使用key可以避免很多潜在的问题，并提升应用性能。

注意：key必须是唯一的，不要使用重复的key，否则会导致渲染错误。



## 7. vue2 中如何使用 event 对象？

在Vue 2中，事件处理时使用 `event` 对象主要有以下两种方式：

| 特性         | 自动传入方式                 | 显式传入方式 (`$event`)                     |
| :----------- | :--------------------------- | :------------------------------------------ |
| **用法**     | `@click="handleClick"`       | `@click="handleClick($event, customParam)"` |
| **参数获取** | 方法第一个参数自动为 `event` | 需手动传入 `$event` 到指定位置              |
| **适用场景** | 无需额外参数时               | 需要同时传入事件对象和其他参数时            |
| **代码示例** | `handleClick(event) { ... }` | `handleClick(event, id) { ... }`            |

### 一、两种使用方式详解

- **自动传入 Event 对象**：当事件处理函数不要求自定义参数时，Vue会自动将原生DOM事件对象作为第一个参数传递给方法。

  ```vue
  <template>
    <button @click="handleClick">点击我</button>
  </template>
  <script>
  export default {
      methods: {
        handleClick(event) {
          // 可以直接使用 event 对象
          console.log(event.target); // 获取触发事件的元素
        }
      }
  }
  </script>
  ```

- **显式传入 `$event` 对象**：如果你的处理函数还需要其他参数，就需要使用 `$event` 变量显式传递事件对象。

  ```vue
  <template>
    <button @click="handleClick">点击我</button>
  </template>
  <script>
  export default {
      methods: {
        handleClick(event, customParam) {
          console.log(event.target);
          console.log(customParam); // 66
        }
      }
  }
  </script>
  ```

  这里特别要注意：**`$event` 是 Vue 提供的特殊变量**，用于在模板中访问原始DOM事件对象。

### 二、事件修饰符：简化事件处理

Vue提供了事件修饰符，帮助你更声明性地处理常见的DOM事件细节。它们可以直接用在事件绑定上：

- **阻止默认行为**：`@click.prevent="handleSubmit"` 替代 `event.preventDefault()`
- **阻止事件冒泡**：`@click.stop="handleClick"` 替代 `event.stopPropagation()`
- **事件只触发一次**：`@click.once="handleClick"`
- **修饰符可以串联**：`@click.stop.prevent="handleClick"`

### 三、在组件中使用事件对象

在自定义组件中，你可以通过 `$emit` 方法将事件对象传递给父组件：

```vue
<!-- 子组件 -->
<template>
  <button @click="handleClick">点击我</button>
</template>
<script>
export default {
    // 子组件方法
    methods: {
      handleClick(event) {
        this.$emit('custom-click', event); // 将事件对象传递出去
      }
    }
}
</script>
```

```vue
<!-- 父组件 -->
<ChildComponent @custom-click="handleCustomClick" />
<script>
export default {
    // 父组件方法
    methods: {
      handleCustomClick(event) {
        // 处理从子组件传来的事件对象
        console.log('Received event:', event);
      }
    }
}
</script>
```

### 四、实用技巧与注意事项

1. **访问事件对象属性**：常用的 `event` 对象属性包括：
   - `event.target`：获取触发事件的元素
   - `event.type`：获取事件类型（如 'click'）
2. **关于 `window.event`**：在Chrome和IE等浏览器中，有时即使没有显式接收 `event` 对象，也能通过 `window.event` 访问到。但**不建议依赖这种方式**，因为这不是标准行为，且在不同浏览器中兼容性不一致。
3. **不要使用箭头函数**：在 `methods` 中定义事件处理函数时，避免使用箭头函数，以确保 `this` 正确指向当前Vue实例。



## 8. \$nextTick 的使用

Vue 的 `$nextTick` 是一个非常重要的方法，它用于延迟执行一段代码，直到下一次 DOM 更新循环之后。这样可以确保在修改数据之后，DOM 已经更新完成，然后再对更新后的 DOM 进行操作。

### 为什么需要 $nextTick？

Vue 的数据驱动视图更新是异步的。当数据发生变化时，Vue 并不会立即更新 DOM，而是开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入队列一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际（已去重的）工作。

所以，当你修改数据后，立即获取 DOM 元素的状态（例如高度、宽度等）可能还是旧的状态，因为此时 DOM 还没有更新。而 `$nextTick` 就是用来在 DOM 更新完成后执行回调的方法。

### 使用方式

1. **作为全局方法使用**（在 Vue 实例外部，例如在普通的 js 文件中）：

   ```javascript
   import Vue from 'vue';
   Vue.nextTick(() => {
     // 在 DOM 更新后执行
   });
   ```

2. **在 Vue 实例内部使用**：

   ```javascript
   // 在组件中
   this.$nextTick(() => {
     // 在 DOM 更新后执行
   });
   ```

3. **返回 Promise**（如果你没有提供回调函数，那么 `$nextTick` 返回一个 Promise）：

   ```javascript
   this.$nextTick().then(() => {
     // 在 DOM 更新后执行
   });
   
   // 或者使用 async/await
   async someMethod() {
     // ... 修改数据
     await this.$nextTick();
     // 此时 DOM 已经更新
   }
   ```

### 注意事项

### 工作原理

> - `$nextTick` 返回的是一个微任务（microtask），它会在当前事件循环的末尾执行，比 `setTimeout(fn, 0)` 更加高效。
> - 在 Vue 2.6+ 中，`$nextTick` 优先使用微任务队列，但如果遇到不支持的环境，会降级到宏任务（如 setTimeout）。

1. **事件循环机制**：

   - Vue 使用微任务（microtask）队列实现异步更新
   - 在支持的环境中优先使用 `Promise.then()`
   - 否则回退到 `MutationObserver` 或 `setTimeout`

2. **执行顺序**：

   ![image-20251130172328797](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251130172335969.png)

3. **与 setTimeout 的区别**

| 特性        | $nextTick               | setTimeout(fn, 0)     |
| ----------- | ----------------------- | --------------------- |
| 执行时机    | DOM 更新后立即执行      | 所有微任务执行后执行  |
| 性能        | 更高（微任务）          | 较低（宏任务）        |
| 执行顺序    | 在渲染后但在下一帧前    | 在事件循环的下一轮    |
| 可靠性      | 确保在 DOM 更新后执行   | 不能保证 DOM 已更新   |
| 与 Vue 集成 | 完全集成到 Vue 更新周期 | 独立于 Vue 的更新机制 |

### 原理进阶

**Vue 的异步更新队列实现（简化版）**

```JavaScript
let pending = false;
let callbacks = [];

function flushCallbacks() {
  pending = false;
  const copies = callbacks.slice(0);
  callbacks.length = 0;
  for (let i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// 选择最优的异步方案
let timerFunc;
if (typeof Promise !== 'undefined') {
  const p = Promise.resolve();
  timerFunc = () => {
    p.then(flushCallbacks);
  };
} else if (typeof MutationObserver !== 'undefined') {
  // 回退到 MutationObserver
} else {
  // 回退到 setTimeout
  timerFunc = () => {
    setTimeout(flushCallbacks, 0);
  };
}

// $nextTick 实现
Vue.prototype.$nextTick = function (fn) {
  callbacks.push(fn);
  if (!pending) {
    pending = true;
    timerFunc();
  }
};
```

### 常见问题解决方案

#### 问题：更新数据后立即获取元素尺寸不正确

**解决方案**：

```JavaScript
this.isExpanded = true;
this.$nextTick(() => {
  const height = this.$refs.content.offsetHeight;
  // 此时获取的是展开后的正确高度
});
```

#### 问题：动态添加元素后初始化插件

**解决方案**：

```JavaScript
this.showWidget = true;
this.$nextTick(() => {
  $(this.$refs.widget).datepicker();
});
```

### 总结

`$nextTick` 是 Vue 响应式系统的关键组成部分，核心要点：

1. ✅ 确保在 DOM 更新后执行代码
2. ✅ 优先使用 async/await 语法更清晰
3. ✅ 适合操作 DOM、初始化第三方库等场景
4. ❌ 避免在循环中过度使用
5. ⚠️ 在组件销毁前检查状态



## 9. Vue 组件中 data 为什么必须是函数

在 Vue 组件中，data 必须是一个函数，而不是一个对象，因为 Vue 组件是可以被复用的。如果 data 是一个对象，那么所有组件实例将共享同一个数据对象，这会导致一个组件实例的数据变化影响到所有其他实例。**而通过使用函数返回数据对象，每个组件实例都会获得一个独立的数据副本，从而避免数据污染。**

### 问题演示：对象形式的问题

```JavaScript
// 错误示例：使用对象形式的 data
const SharedDataComponent = {
  data: {
    count: 0
  },
  template: '<button @click="count++">{{ count }}</button>'
}

// 创建两个组件实例
const comp1 = new Vue(SharedDataComponent).$mount('#comp1');
const comp2 = new Vue(SharedDataComponent).$mount('#comp2');
```

此时会发生：

1. 点击 comp1 按钮 → comp1 和 comp2 的计数器**同时增加**
2. 因为两个实例**共享同一个数据对象**（内存地址相同）
3. 一个组件的状态变化会污染其他实例

### 正确用法：函数形式

```JavaScript
// 正确示例：使用函数返回数据对象
const IsolatedDataComponent = {
  data() {
    return {
      count: 0
    }
  },
  template: '<button @click="count++">{{ count }}</button>'
}

// 创建两个组件实例
const comp1 = new Vue(IsolatedDataComponent).$mount('#comp1');
const comp2 = new Vue(IsolatedDataComponent).$mount('#comp2');
```

此时：

1. 每个实例调用 data 函数**生成独立的数据对象**
2. 点击 comp1 只会增加 comp1 的计数器
3. comp2 的状态保持不变

### 根本原理

#### 1. 对象是引用类型

JavaScript 中对象是通过**引用传递**的：

```JavaScript
const obj = { count: 0 };
const a = obj;
const b = obj;

a.count = 5;
console.log(b.count); // 5（b也被修改）
```

#### 2. 组件复用需求

Vue 组件设计为可复用的：

- 同一个组件可能被多次使用（如列表中的多个条目）
- 每个实例需要独立的内部状态

#### 3. Vue 的实例化机制

当创建组件实例时：

```JavaScript
// Vue 内部简化逻辑
function createComponentInstance(Component) {
  const instance = {
    // 如果是对象：直接使用（导致共享）
    // 如果是函数：调用函数获取新对象
    data: typeof Component.data === 'function' 
      ? Component.data() 
      : Component.data
  }
  return instance;
}
```

### 特殊场景：根实例的 data

在根实例中，`data` 可以是对象：

```JavaScript
// 根实例允许使用对象形式
new Vue({
  el: '#app',
  data: { // 这里可以是对象
    message: 'Hello'
  }
});
```

**为什么允许？**

- 根实例通常是**单例**的（整个应用只有一个）
- 不存在多个实例共享状态的问题

### 常见错误模式

#### 1. 箭头函数问题

```JavaScript
// 错误：箭头函数没有自己的 this
data: () => ({
  count: this.someProp // this 指向错误！
})

// 正确：使用普通函数
data() {
  return {
    count: this.someProp // this 指向当前实例
  }
}
```

#### 2. 在函数外定义对象

```JavaScript
const sharedData = { count: 0 }; // ❌ 危险！

export default {
  data() {
    return sharedData; // 仍然共享！
  }
}
```

#### 3. 复杂对象的处理

```JavaScript
data() {
  return {
    user: {
      name: 'John',
      profile: {
        age: 30
      }
    }
  }
}
// 即使嵌套对象也是独立的
```

### Vue 的强制措施

如果你在组件中错误使用对象形式的 data：

```JavaScript
export default {
  data: { // 应该是个函数！
    message: 'Hello'
  }
}
```

Vue 会发出警告：

```bash
 [Vue warn]: The "data" option should be a function that returns a per-instance value in component definitions.
```

### 最佳实践

1. **始终使用函数形式**：

```JavaScript
data() {
 return {
   // 初始数据
 }
}
```

2. **初始化复杂状态**：

```JavaScript
data() {
 return {
   form: {
     username: '',
     password: ''
   },
   items: []
 }
}
```

3. **动态初始化**（基于 props）：

```JavaScript
props: ['initialCount'],
data() {
 return {
   count: this.initialCount
 }
}
```

### 常见问题解答

**Q：为什么 React 不需要这样？** A：React 组件使用 class 的实例属性或函数组件的 useState，天然具有隔离性

**Q：可以返回同一个对象吗？** A：技术上可以但绝对不要（`return sharedObject`），会破坏组件隔离

**Q：Vue 3 有变化吗？** A：Vue 3 组合式 API 使用 `setup()` + `ref()`/`reactive()`，不再需要 data 函数

记住这个核心原则： **Vue 组件中的 data 必须是函数，因为它是一个创建数据对象的工厂，确保每个组件实例都有独立的状态空间。**



## 10. vue2 组件通信全解

在Vue.js 2中，组件通信是构建应用的关键部分。根据组件之间的关系（父子、兄弟、跨级等），我们可以采用不同的通信方式。下面将详细解释各种场景下的通信方法。

### 一、父子组件通信

#### 1. 父组件向子组件传递数据（Props）

- 父组件通过`props`向子组件传递数据。
- 子组件中通过`props`选项声明接收的数据。

**父组件：**

```Vue
<template>
  <ChildComponent :message="parentMessage" />
</template>
<script>
import ChildComponent from './ChildComponent.vue';、
export default {
  components: { ChildComponent },
  data() {
    return {
      parentMessage: 'Hello from parent'
    };
  }
};
</script>
```

**子组件：**

```Vue
<template>
  <div>{{ message }}</div>
</template>
<script>
export default {
  props: ['message'] // 或者使用对象形式指定类型和默认值
};
</script>
```

#### 2. 子组件向父组件传递数据（自定义事件）

- 子组件通过`$emit`触发一个自定义事件，并传递数据。
- 父组件通过`v-on`监听该事件并处理数据。

**子组件：**

```Vue
<template>
  <button @click="sendMessage">Send to Parent</button>
</template>

<script>
export default {
  methods: {
    sendMessage() {
      this.$emit('message-from-child', 'Hello from child');
    }
  }
};
</script>
```

**父组件：**

```Vue
<template>
  <ChildComponent @message-from-child="handleMessage" />
</template>
<script>
import ChildComponent from './ChildComponent.vue';
export default {
  components: { ChildComponent },
  methods: {
    handleMessage(message) {
      console.log(message); // 输出: Hello from child
    }
  }
};
</script>
```

#### 3. 使用 `.sync` 修饰符（Vue 2.3+）

- 用于双向绑定某个prop（实际上是一种语法糖）。

**父组件：**

```Vue
<template>
  <ChildComponent :title.sync="pageTitle" />
</template>
```

**子组件：**

```Vue
<script>
export default {
  methods: {
    updateTitle() {
      this.$emit('update:title', 'New Title');
    }
  }
};
</script>
```

#### 4. v-model 双向绑定

默认情况下，`v-model`相当于`:value="value" @input="value = $event"`。

```vue
<!-- 父组件 -->
<child-component v-model="inputValue"></child-component>

<!-- 子组件 -->
<input :value="value" @input="$emit('input', $event.target.value)">
```

也可以自定义`model`选项：

```Js
// 子组件
export default {
  model: {
    prop: 'checked', // 将value改为checked
    event: 'change' // 将input事件改为change事件
  },
  props: ['checked'],
  methods: {
    changeValue() {
      this.$emit('change', newValue)
    }
  }
}
```

#### 5. 作用域插槽

子组件通过插槽暴露数据：

```Vue
<!-- 子组件 -->
<template>
  <div>
    <slot :user="user"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { name: 'John' }
    }
  }
}
</script>
```

父组件使用`slot-scope`（Vue2）或`v-slot`（Vue2.6+）接收数据：

```Vue
<!-- 父组件 -->
<child-component>
  <template slot-scope="props">
    {{ props.user.name }}
  </template>
</child-component>

<!-- 或使用v-slot（推荐） -->
<child-component>
  <template v-slot:default="props">
    {{ props.user.name }}
  </template>
</child-component>
```

### 二、兄弟组件通信

兄弟组件之间可以通过共同的父组件作为桥梁进行通信。

#### 1. 通过共同的父组件传递

- 子组件A通过事件将数据传递给父组件，父组件再通过props传递给子组件B。![image-20251130224452076](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251130224452235.png)

### 三、跨级组件通信

#### 1. `$attrs` 和 `$listeners`

- 当需要向深层嵌套的组件传递数据或事件时，可以使用`$attrs`（包含父作用域中不作为prop被识别的特性）和`$listeners`（包含父作用域中的事件监听器）。

**祖先组件：**

```Vue
<template>
  <ChildComponent :message="msg" @custom-event="handleEvent" />
</template>
```

**中间组件（如果不处理，则继续向下传递）：**

```Vue
<template>
  <GrandChildComponent v-bind="$attrs" v-on="$listeners" />
</template>
```

#### 2. Provide / Inject

> 如果希望 `provide` 和 `inject` 是响应式的，可以传递一个对象，或者使用 Vue.observable（Vue2.6+）来创建一个响应式对象。

- 祖先组件通过`provide`提供数据，后代组件通过`inject`注入数据。
- 注意：不是响应式的（除非传递的是响应式对象，如父组件的data属性）。

**祖先组件：**

```Vue
<script>
export default {
  provide() {
    return {
      providedMessage: this.message // 如果message是响应式的，后代组件也会响应变化
    };
  },
  data() {
    return {
      message: 'Hello from ancestor'
    };
  }
};
</script>
```

**后代组件：**

```Vue
<script>
export default {
  inject: ['providedMessage'],
  mounted() {
    console.log(this.providedMessage); // 输出: Hello from ancestor
  }
};
</script>
```

### 四、任意组件通信

#### 1. 事件总线（Event Bus）

- 创建一个中央事件总线（通常是一个新的Vue实例），然后在任何组件中触发事件和监听事件。

**创建事件总线（event-bus.js）：**

```JavaScript
import Vue from 'vue';
export const EventBus = new Vue();
```

**组件A（触发事件）：**

```JavaScript
import { EventBus } from './event-bus.js';

EventBus.$emit('custom-event', 'some data');
```

**组件B（监听事件）：**

```JavaScript
import { EventBus } from './event-bus.js';

EventBus.$on('custom-event', (data) => {
  console.log(data); // 输出: some data
});
```

注意：在组件销毁前，使用`EventBus.$off`移除事件监听，避免内存泄漏。

#### 2. Vuex 状态管理

Vuex是专为Vue.js应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态。

基本结构：

- `state`: 存储状态数据。
- `mutations`: 同步修改状态（通过`commit`触发）。
- `actions`: 处理异步操作，提交`mutations`（通过`dispatch`触发）。
- `getters`: 计算属性，用于从`state`中派生出一些状态。

基础示例：

```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    }
  }
})
```

组件中：

```vue
<template>
  <div>
    <div>{{ count }}</div>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapActions(['increment'])
  }
}
</script>
```

### 五、其他方式

#### 1. `$parent` 和 `$children`

- 通过`$parent`访问父组件实例，`$children`访问子组件实例（不保证顺序，也不是响应式）。
- 不推荐，因为增加了耦合度。

#### 2. `$refs`

- 在父组件中通过`ref`属性给子组件标记，然后通过`this.$refs`访问。
- 主要用于直接操作子组件或访问子组件的方法。

父组件：

```Vue
<template>
  <ChildComponent ref="childRef" />
</template>

<script>
import ChildComponent from './ChildComponent.vue';

export default {
  components: { ChildComponent },
  mounted() {
    this.$refs.childRef.someMethod(); // 调用子组件的方法
  }
};
</script>
```

#### 3. 本地存储

通过`localStorage`或`sessionStorage`存储数据，并在不同组件间共享。

```Js
// 存储数据
localStorage.setItem('key', 'value')

// 获取数据
localStorage.getItem('key')
```

注意：存储事件（`storage`事件）可以监听存储的变化（仅在同源的不同标签页间触发）：

```Js
window.addEventListener('storage', (event) => {
  console.log(event.key, event.newValue)
})
```

### 总结

> 使用原则：**能用 props 解决的不用 Vuex，能组件内解决的问题不提升到全局**。

- 父子通信：props / events, `.sync`, `$refs`
- 兄弟通信：通过共同的父组件、事件总线、Vuex
- 跨级通信：`$attrs/$listeners`、provide/inject、事件总线、Vuex
- 任意组件：事件总线、Vuex、本地存储



## vue 中央事件总线的使用





## vue 中 keep-alive 组件的作用

答案：keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

解析：

用法也很简单：

```html
<keep-alive>
  <component>
    <!-- 该组件将被缓存！ -->
  </component>
</keep-alive>
```

props
_ include - 字符串或正则表达，只有匹配的组件会被缓存
_ exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存

```js
// 组件 a
export default {
  name: "a",
  data() {
    return {};
  }
};
```

```html
<keep-alive include="a">
  <component>
    <!-- name 为 a 的组件将被缓存！ -->
  </component> </keep-alive
>可以保留它的状态或避免重新渲染
```

```html
<keep-alive exclude="a">
  <component>
    <!-- 除了 name 为 a 的组件都将被缓存！ -->
  </component> </keep-alive
>可以保留它的状态或避免重新渲染
```

但实际项目中,需要配合 vue-router 共同使用.

router-view 也是一个组件，如果直接被包在 keep-alive 里面，所有路径匹配到的视图组件都会被缓存：

```html
<keep-alive>
  <router-view>
    <!-- 所有路径匹配到的视图组件都会被缓存！ -->
  </router-view>
</keep-alive>
```

如果只想 router-view 里面某个组件被缓存，怎么办？

增加 router.meta 属性

```js
// routes 配置
export default [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      keepAlive: true // 需要被缓存
    }
  },
  {
    path: "/:id",
    name: "edit",
    component: Edit,
    meta: {
      keepAlive: false // 不需要被缓存
    }
  }
];
```

```
<keep-alive>
    <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
    </router-view>
</keep-alive>

<router-view v-if="!$route.meta.keepAlive">
    <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
</router-view>
```

[参与互动](https://github.com/yisainan/web-interview/issues/413)







## vue 更新数组时触发视图更新的方法

答案：

1.Vue.set 可以设置对象或数组的值，通过 key 或数组索引，可以触发视图更新

```
数组修改

Vue.set(array, indexOfItem, newValue)
this.array.$set(indexOfItem, newValue)
对象修改

Vue.set(obj, keyOfItem, newValue)
this.obj.$set(keyOfItem, newValue)
```

2.Vue.delete 删除对象或数组中元素，通过 key 或数组索引，可以触发视图更新

```
数组修改

Vue.delete(array, indexOfItem)
this.array.$delete(indexOfItem)
对象修改

Vue.delete(obj, keyOfItem)
this.obj.$delete(keyOfItem)
```

3.数组对象直接修改属性，可以触发视图更新

```
this.array[0].show = true;
this.array.forEach(function(item){
    item.show = true;
});
```

4.splice 方法修改数组，可以触发视图更新

```
this.array.splice(indexOfItem, 1, newElement)
```

5.数组整体修改，可以触发视图更新

```
var tempArray = this.array;
tempArray[0].show = true;
this.array = tempArray;
```

6.用 Object.assign 或 lodash.assign 可以为对象添加响应式属性，可以触发视图更新

```
//Object.assign的单层的覆盖前面的属性，不会递归的合并属性
this.obj = Object.assign({},this.obj,{a:1, b:2})

//assign与Object.assign一样
this.obj = _.assign({},this.obj,{a:1, b:2})

//merge会递归的合并属性
this.obj = _.merge({},this.obj,{a:1, b:2})
```

7.Vue 提供了如下的数组的变异方法，可以触发视图更新

```
push()
pop()
shift()
unshift()
splice()
sort()
reverse()
```



## vue 中对象更改检测的注意事项







## v-model 语法糖的组件中的使用





## 十个常用的自定义过滤器





## vue 等单页面应用及其优缺点



优点：
1、用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染。
2、前后端职责业分离（前端负责view，后端负责model），架构清晰
3、减轻服务器的压力

缺点：
1、SEO（搜索引擎优化）难度高
2、初次加载页面更耗时
3、前进、后退、地址栏等，需要程序进行管理，所以会大大提高页面的复杂性和逻辑的难度



## 什么是 vue 的计算属性？

答案：先来看一下计算属性的定义：
当其依赖的属性的值发生变化的时，计算属性会重新计算。反之则使用缓存中的属性值。
计算属性和vue中的其它数据一样，都是响应式的，只不过它必须依赖某一个数据实现，并且只有它依赖的数据的值改变了，它才会更新



## 38.$route和$router的区别

答案：$route 是路由信息对象，包括path，params，hash，query，fullPath，matched，name 等路由信息参数。

而 $router 是路由实例对象，包括了路由的跳转方法，钩子函数等





## 39.watch的作用是什么

答案：watch 主要作用是监听某个数据值的变化。和计算属性相比除了没有缓存，作用是一样的。

借助 watch 还可以做一些特别的事情，例如监听页面路由，当页面跳转时，我们可以做相应的权限控制，拒绝没有权限的用户访问页面。





## 计算属性的缓存和方法调用的区别

答案：

计算属性是基于数据的依赖缓存，数据发生变化，缓存才会发生变化，如果数据没有发生变化，调用计算属性直接调用的是存储的缓存值；

而方法每次调用都会重新计算；所以可以根据实际需要选择使用，如果需要计算大量数据，性能开销比较大，可以选用计算属性，如果不能使用缓存可以使用方法；

其实这两个区别还应加一个watch，watch是用来监测数据的变化，和计算属性相比，是watch没有缓存，但是一般想要在数据变化时响应时，或者执行异步操作时，可以选择watch







## vue 如何优化首屏加载速度？





## vue 打包后会生成哪些文件？





### 如何配置 vue 打包生成文件的路径？



## vue 的服务器端渲染



### vue 开发命令 npm run dev 输入后的执行过程





## 什么是 Virtual DOM？

答案：可以看作是一个使用 javascript 模拟了 DOM 结构的树形结构

解析：[参考](https://www.cnblogs.com/gaosong-shuhong/p/9253959.html)





## 响应式系统的基本原理

答案：

vue响应式的原理，首先对象传入vue实例作为data对象时，首先被vue遍历所有属性，调用Object.defineProperty设置为getter和setter，每个组件都有一个watcher对象，在组件渲染的过程中，把相关的数据都注册成依赖，当数据发生setter变化时，会通知watcehr，从而更新相关联的组件





## Vue.js 全局运行机制





## 如何编译 template 模板？

答案：[参考](http://www.itcast.cn/news/20190110/15320198690.shtml)



## diff 算法







### 批量异步更新策略及 nextTick 原理？







## Vue 中如何实现 proxy 代理？



webpack 自带的 devServer 中集成了 http-proxy-middleware。配置 devServer 的 proxy 选项即可

```js
proxyTable: {
   '/api': {
    target: 'http://192.168.149.90:8080/', // 设置你调用的接口域名和端口号
    changeOrigin: true,   // 跨域
    pathRewrite: {
     '^/api': '/'
    }
  }
  }
```









## vue 的渲染机制

答案：



## vue 在什么情况下在数据发生改变的时候不会触发视图更新

答案：

v-for 遍历的数组，当数组内容使用的是 arr[0].xx =xx 更改数据，vue 无法监测到
vm.arr.length = newLength 也是无法检测的到的





## 61.vue 的优点是什么？

答案：

低耦合。视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的"View"上，当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变。

可重用性。你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 view 重用这段视图逻辑。

独立开发。开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。

可测试。界面素来是比较难于测试的，而现在测试可以针对 ViewModel 来写。





## 62.vue 如何实现按需加载配合 webpack 设置

答案：

```
webpack 中提供了 require.ensure()来实现按需加载。以前引入路由是通过 import 这样的方式引入，改为 const 定义的方式进行引入。
不进行页面按需加载引入方式：import home from '../../common/home.vue'
进行页面按需加载的引入方式：const home = r => require.ensure( [], () => r (require('../../common/home.vue')))
```

在音乐 app 中使用的路由懒加载方式为：

```
const Recommend = (resolve) => {
  import('components/recommend/recommend').then((module) => {
    resolve(module)
  })
}

const Singer = (resolve) => {
  import('components/singer/singer').then((module) => {
    resolve(module)
  })
}
```





## 63.如何让 CSS 只在当前组件中起作用

答案：将当前组件的`<style>`修改为`<style scoped>`





## 64.指令 v-el 的作用是什么?

答案：提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标.可以是 CSS 选择器，也可以是一个 HTMLElement 实例





## 65.vue-loader 是什么？使用它的用途有哪些？

答案：

vue-loader 是解析 .vue 文件的一个加载器，将 template/js/style 转换成 js 模块。

用途：js 可以写 es6、style 样式可以 scss 或 less；template 可以加 jade 等。







## 67.你们vue项目是打包了一个js文件，一个css文件，还是有多个文件？





## 68.vue遇到的坑，如何解决的？

答案：



## 69.vuex 工作原理详解 

答案：

vuex 整体思想诞生于 flux,可其的实现方式完完全全的使用了 vue 自身的响应式设计，依赖监听、依赖收集都属于 vue 对对象 Property set get 方法的代理劫持。最后一句话结束 vuex 工作原理，vuex 中的 store 本质就是没有 template 的隐藏着的 vue 组件；

解析：vuex的原理其实非常简单，它为什么能实现所有的组件共享同一份数据？
因为vuex生成了一个store实例，并且把这个实例挂在了所有的组件上，所有的组件引用的都是同一个store实例。
store实例上有数据，有方法，方法改变的都是store实例上的数据。由于其他组件引用的是同样的实例，所以一个组件改变了store上的数据， 导致另一个组件上的数据也会改变，就像是一个对象的引用。



## 70.vuex 是什么？怎么使用？哪种功能场景使用它？

答案：

vue 框架中状态管理。在 main.js 引入 store，注入。新建一个目录 store，….. export 。场景有：单页应用中，组件之间的状态。音乐播放、登录状态、加入购物车

main.js:

```
import store from './store'


new Vue({
el:'#app',
store
})
```





## 71.vuex 有哪几种属性？

答案：

有五种，分别是 State、 Getter、Mutation 、Action、 Module

```
vuex的State特性
A、Vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于一般Vue对象里面的data
B、state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新
C、它通过mapState把全局的 state 和 getters 映射到当前组件的 computed 计算属性中

· vuex的Getter特性
A、getters 可以对State进行计算操作，它就是Store的计算属性
B、 虽然在组件内也可以做计算属性，但是getters 可以在多组件之间复用
C、 如果一个状态只在一个组件内使用，是可以不用getters

·  vuex的Mutation特性
Action 类似于 mutation，不同在于：Action 提交的是 mutation，而不是直接变更状态；Action 可以包含任意异步操作。
```





## 72.不用 Vuex 会带来什么问题？

答案：

可维护性会下降，想修改数据要维护三个地方；

可读性会下降，因为一个组件里的数据，根本就看不出来是从哪来的；

增加耦合，大量的上传派发，会让耦合性大大增加，本来 Vue 用 Component 就是为了减少耦合，现在这么用，和组件化的初衷相背。





## 73.vue-router 如何响应 路由参数 的变化？

答案：





## 74.完整的 vue-router 导航解析流程

答案：





## 75.vue-router 有哪几种导航钩子（ 导航守卫 ）？

答案：三种

第一种是全局导航钩子：router.beforeEach(to,from,next)，作用：跳转前进行判断拦截。
第二种：组件内的钩子；
第三种：单独路由独享组件





## 76.vue-router 的几种实例方法以及参数传递

答案：



## 77.怎么定义 vue-router 的动态路由？怎么获取传过来的动态参数？ 

答案：在 router 目录下的 index.js 文件中，对 path 属性加上/:id。 使用 router 对象的 params.id



## 78.vue-router 如何定义嵌套路由？

答案：





## 79.`<router-link></router-link>`组件及其属性

答案：





## 80.vue-router 实现路由懒加载（ 动态加载路由 ）

答案：[参考](https://segmentfault.com/a/1190000011519350)



## 81.vue-router 路由的两种模式

答案：hash history





## 82.history 路由模式与后台的配合





## 83.vue路由实现原理?或 vue-router原理?

答案：

说简单点，vue-router的原理就是通过对URL地址变化的监听，继而对不同的组件进行渲染。
每当URL地址改变时，就对相应的组件进行渲染。原理是很简单，实现方式可能有点复杂，主要有hash模式和history模式。
如果想了解得详细点，建议百度或者阅读源码。





## 85. MVC、MVP 与 MVVM 模式

答案：

一、MVC

通信方式如下

1. 视图（View）：用户界面。 传送指令到 Controller

2. 控制器（Controller）：业务逻辑 完成业务逻辑后，要求 Model 改变状态

3. 模型（Model）：数据保存 将新的数据发送到 View，用户得到反馈

二、MVP

通信方式如下



1. 各部分之间的通信，都是双向的。

2. View 与 Model 不发生联系，都通过 Presenter 传递。

3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter 非常厚，所有逻辑都部署在那里。

五、MVVM

MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。通信方式如下



唯一的区别是，它采用双向绑定（data-binding）：View 的变动，自动反映在 ViewModel，反之亦然。





## 86.常见的实现 MVVM 几种方式

答案：





## 87.解释下 Object.defineProperty()方法

答案：这是 js 中一个非常重要的方法，ES6 中某些方法的实现依赖于它，VUE 通过它实现双向绑定，此方法会直接在一个对象上定义一个新属性，或者修改一个已经存在的属性， 并返回这个对象

解析：

### 语法

Object.defineProperty(object, attribute, descriptor)

- 这三个参数都是必输项
- 第一个参数为 目标对象
- 第二个参数为 需要定义的属性或者方法
- 第三个参数为 目标属性所拥有的特性

### descriptor

前两个参数都很明确，重点是第三个参数 descriptor， 它有以下取值

- value: 属性的值
- writable: 属性的值是否可被重写（默认为 false）
- configurable: 总开关，是否可配置，若为 false, 则其他都为 false（默认为 false）
- enumerable: 属性是否可被枚举（默认为 false）
- get: 获取该属性的值时调用
- set: 重写该属性的值时调用

一个例子

```js
var a = {};
Object.defineProperty(a, "b", {
  value: 123
});
console.log(a.b); //123
a.b = 456;
console.log(a.b); //123
a.c = 110;
for (item in a) {
  console.log(item, a[item]); //c 110
}
```

因为 writable 和 enumerable 默认值为 false, 所以对 a.b 赋值无效，也无法遍历它

### configurable

总开关，是否可配置，设置为 false 后，就不能再设置了，否则报错， 例子

```js
var a = {};
Object.defineProperty(a, "b", {
  configurable: false
});
Object.defineProperty(a, "b", {
  configurable: true
});
//error: Uncaught TypeError: Cannot redefine property: b
```

### writable

是否可重写

```js
var a = {};
Object.defineProperty(a, "b", {
  value: 123,
  writable: false
});
console.log(a.b); // 打印 123
a.b = 25; // 没有错误抛出（在严格模式下会抛出，即使之前已经有相同的值）
console.log(a.b); // 打印 123， 赋值不起作用。
```

### enumerable

属性特性 enumerable 定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举

```js
var a = {};
Object.defineProperty(a, "b", {
  value: 3445,
  enumerable: true
});
console.log(Object.keys(a)); // 打印["b"]
```

enumerable 改为 false

```js
var a = {};
Object.defineProperty(a, "b", {
  value: 3445,
  enumerable: false //注意咯这里改了
});
console.log(Object.keys(a)); // 打印[]
```

### set 和 get

如果设置了 set 或 get, 就不能设置 writable 和 value 中的任何一个，否则报错

```js
var a = {};
Object.defineProperty(a, "abc", {
  value: 123,
  get: function() {
    return value;
  }
});
//Uncaught TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute, #<Object> at Function.defineProperty
```

对目标对象的目标属性 赋值和取值 时， 分别触发 set 和 get 方法

```js
var a = {};
var b = 1;
Object.defineProperty(a, "b", {
  set: function(newValue) {
    b = 99;
    console.log("你要赋值给我,我的新值是" + newValue);
  },
  get: function() {
    console.log("你取我的值");
    return 2; //注意这里，我硬编码返回2
  }
});
a.b = 1; //打印 你要赋值给我,我的新值是1
console.log(b); //打印 99
console.log(a.b); //打印 你取我的值
//打印 2    注意这里，和我的硬编码相同的
```

上面的代码中，给 a.b 赋值，b 的值也跟着改变了。原因是给 a.b 赋值，自动调用了 set 方法，在 set 方法中改变了 b 的值。vue 双向绑定的原理就是这个。

扩展：[参考](https://www.cnblogs.com/zhaowj/p/9576450.html)



## 88.实现一个自己的 MVVM（原理剖析）

答案：





## 89.递归组件的使用

答案：组件是可以在自己的模板中调用自身的，不过他们只能通过name选项来做这件事

解析：



## 90.Obj.keys()与 Obj.defineProperty

答案：





### 91.发布-订阅模式

答案：





### 构建的 vue-cli 工程都到了哪些技术，它们的作用分别是什么？

答案：

1、vue.js：vue-cli 工程的核心，主要特点是 双向数据绑定 和 组件系统。

2、vue-router：vue 官方推荐使用的路由框架。

3、vuex：专为 Vue.js 应用项目开发的状态管理器，主要用于维护 vue 组件间共用的一些 变量 和 方法。

4、axios（ 或者 fetch 、ajax ）：用于发起 GET 、或 POST 等 http 请求，基于 Promise 设计。

5、vux 等：一个专为 vue 设计的移动端 UI 组件库。

6、创建一个 emit.js 文件，用于 vue 事件机制的管理。

7、webpack：模块加载和 vue-cli 工程打包器。





## vue-cli 工程常用的 npm 命令有哪些？

答案：npm install、npm run dev、npm run build --report 等

解析：

下载 node_modules 资源包的命令：npm install

启动 vue-cli 开发环境的 npm 命令：npm run dev

vue-cli 生成 生产环境部署资源 的 npm 命令：npm run build

用于查看 vue-cli 生产环境部署资源文件大小的 npm 命令：npm run build --report，此命令必答

命令效果：
![vue_001](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251123183016388.jpg)

在浏览器上自动弹出一个 展示 vue-cli 工程打包后 app.js、manifest.js、vendor.js 文件里面所包含代码的页面。可以具此优化 vue-cli 生产环境部署的静态资源，提升 页面 的加载速度。





## 请说出 vue-cli 工程中每个文件夹和文件的用处

答案：

```
vue-cli目录解析：

build 文件夹：用于存放 webpack 相关配置和脚本。开发中仅 偶尔使用 到此文件夹下 webpack.base.conf.js 用于配置 less、sass等css预编译库，或者配置一下 UI 库。
config 文件夹：主要存放配置文件，用于区分开发环境、线上环境的不同。 常用到此文件夹下 config.js 配置开发环境的 端口号、是否开启热加载 或者 设置生产环境的静态资源相对路径、是否开启gzip压缩、npm run build 命令打包生成静态资源的名称和路径等。
dist 文件夹：默认 npm run build 命令打包生成的静态资源文件，用于生产部署。
node_modules：存放npm命令下载的开发环境和生产环境的依赖包。
src: 存放项目源码及需要引用的资源文件。
src下assets：存放项目中需要用到的资源文件，css、js、images等。
src下componets：存放vue开发中一些公共组件：header.vue、footer.vue等。
src下emit：自己配置的vue集中式事件管理机制。
src下router：vue-router vue路由的配置文件。
src下service：自己配置的vue请求后台接口方法。
src下page：存在vue页面组件的文件夹。
src下util：存放vue开发过程中一些公共的.js方法。
src下vuex：存放 vuex 为vue专门开发的状态管理器。
src下app.vue：使用标签<route-view></router-view>渲染整个工程的.vue组件。
src下main.js：vue-cli工程的入口文件。
index.html：设置项目的一些meta头信息和提供<div id="app"></div>用于挂载 vue 节点。
package.json：用于 node_modules资源部 和 启动、打包项目的 npm 命令管理。
```





## config 文件夹 下 index.js 的对于工程 开发环境 和 生产环境 的配置

答案：

```
build 对象下 对于 生产环境 的配置：

index：配置打包后入口.html文件的名称以及文件夹名称
assetsRoot：配置打包后生成的文件名称和路径
assetsPublicPath：配置 打包后 .html 引用静态资源的路径，一般要设置成 "./"
productionGzip：是否开发 gzip 压缩，以提升加载速度

dev 对象下 对于 开发环境 的配置：

port：设置端口号
autoOpenBrowser：启动工程时，自动打开浏览器
proxyTable：vue设置的代理，用以解决 跨域 问题
```





## 请你详细介绍一些 package.json 里面的配置

答案：

```
scripts：npm run xxx 命令调用node执行的 .js 文件
dependencies：生产环境依赖包的名称和版本号，即这些 依赖包 都会打包进 生产环境的JS文件里面
devDependencies：开发环境依赖包的名称和版本号，即这些 依赖包 只用于 代码开发 的时候，不会打包进 生产环境js文件 里面。
```





## vue-cli 中常用到的加载器

答案：

1.安装 sass:

2.安装 axios:

3.安装 mock:

4.安装 lib-flexible: --实现移动端自适应

5.安装 sass-resourses-loader





## 100.vue.cli 中怎样使用自定义的组件？有遇到过哪些问题吗？

答案：

第一步：在 components 目录新建你的组件文件（如：indexPage.vue），script 一定要 export default {}

第二步：在需要用的页面（组件）中导入：import indexPage from '@/components/indexPage.vue'

第三步：注入到 vue 的子组件的 components 属性上面,components:{indexPage}

第四步：在 template 视图 view 中使用

遇到的问题：
例如有 indexPage 命名，使用的时候则 index-page





## vue-cli 提供的几种脚手架模板

答案：





## vue-cli 开发环境使用全局常量

答案：





## vue-cli 生产环境使用全局常量

答案：





## vue-cli 中自定义指令的使用

答案：





## vue 是如何对数组方法进行变异的？例如 push、pop、splice 等方法

答案：



## vue 组件之间的通信种类

答案：

1)	父组件向子组件通信
2)	子组件向父组件通信
3)	隔代组件间通信
4)	兄弟组件间通信



## vue 是如何对数组方法进行变异的？例如 push、pop、splice 等方法

答案：



108. ## 谈一谈 nextTick 的原理

答案：



109. ## Vue 中的 computed 是如何实现的

答案：



110. ## vue 如何优化首页的加载速度？vue 首页白屏是什么问题引起的？如何解决呢？

答案：

### vue 如何优化首页的加载速度？

* 路由懒加载
* ui框架按需加载
* gzip压缩

### vue 首页白屏是什么问题引起的？

* 第一种，打包后文件引用路径不对，导致找不到文件报错白屏

解决办法：修改一下config下面的index.js中bulid模块导出的路径。因为index.html里边的内容都是通过script标签引入的，而你的路径不对，打开肯定是空白的。先看一下默认的路径。

* 第二种，由于把路由模式mode设置影响

解决方法：路由里边router/index.js路由配置里边默认模式是hash，如果你改成了history模式的话，打开也会是一片空白。所以改为hash或者直接把模式配置删除，让它默认的就行 。如果非要使用history模式的话，需要你在服务端加一个覆盖所有的情况的候选资源：如果URL匹配不到任何静态资源，则应该返回一个index.html，这个页面就是你app依赖页面。

所以只要删除mode或者把mode改成hash就OK了。

* 第三种，项目中使用了es6的语法，一些浏览器不支持es6，造成编译错误不能解析而造成白屏

解决方法：

安装 npm install --save-dev babel-preset-es2015

安装 npm install --save-dev babel-preset-stage-3

在项目根目录创建一个.babelrc文件 里面内容 最基本配置是：

```js
{
    // 此项指明，转码的规则
    "presets": [
        // env项是借助插件babel-preset-env，下面这个配置说的是babel对es6,es7,es8进行转码，并且设置amd,commonjs这样的模块化文件，不进行转码
        ["env", {
            "modules": false
        }],
        // 下面这个是不同阶段出现的es语法，包含不同的转码插件
        "stage-2"
    ],
    // 下面这个选项是引用插件来处理代码的转换，transform-runtime用来处理全局函数和优化babel编译
    "plugins": ["transform-runtime"],
    // 下面指的是在生成的文件中，不产生注释
    "comments": false,
    // 下面这段是在特定的环境中所执行的转码规则，当环境变量是下面的test就会覆盖上面的设置
    "env": {
        // test 是提前设置的环境变量，如果没有设置BABEL_ENV则使用NODE_ENV，如果都没有设置默认就是development
        "test": {
            "presets": ["env", "stage-2"],
            // instanbul是一个用来测试转码后代码的工具
            "plugins": ["istanbul"]
        }
    }
}
```



## 111.Vue 的父组件和子组件生命周期钩子执行顺序是什么

答案：

* 加载渲染过程
  * 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted

* 子组件更新过程

  * 父beforeUpdate->子beforeUpdate->子updated->父updated

* 父组件更新过程
  * 父beforeUpdate->父updated

* 销毁过程
  * 父beforeDestroy->子beforeDestroy->子destroyed->父destroyed



112.在 Vue 中，子组件为何不可以修改父组件传递的 Prop，如果修改了，Vue 是如何监控到属性的修改并给出警告的。

答案：



113.实现通信方式

答案：

```
方式1: props
1)	通过一般属性实现父向子通信
2)	通过函数属性实现子向父通信
3)	缺点: 隔代组件和兄弟组件间通信比较麻烦

方式2: vue自定义事件
1)	vue内置实现, 可以代替函数类型的props
  a.	绑定监听: <MyComp @eventName="callback"
  b.	触发(分发)事件: this.$emit("eventName", data)
2)	缺点: 只适合于子向父通信

方式3: 消息订阅与发布
1)	需要引入消息订阅与发布的实现库, 如: pubsub-js
  a.	订阅消息: PubSub.subscribe('msg', (msg, data)=>{})
  b.	发布消息: PubSub.publish(‘msg’, data)
2)	优点: 此方式可用于任意关系组件间通信

方式4: vuex
1)	是什么: vuex是vue官方提供的集中式管理vue多组件共享状态数据的vue插件
2)	优点: 对组件间关系没有限制, 且相比于pubsub库管理更集中, 更方便

方式5: slot
1)	是什么: 专门用来实现父向子传递带数据的标签
  a.	子组件
  b.	父组件
2)	注意: 通信的标签模板是在父组件中解析好后再传递给子组件的
```



114.说说Vue的MVVM实现原理

答案：

#### 理解

```
1)	Vue作为MVVM模式的实现库的2种技术
a.	模板解析
b.	数据绑定

2)	模板解析: 实现初始化显示
a.	解析大括号表达式
b.	解析指令

3)	数据绑定: 实现更新显示
a.	通过数据劫持实现
```

#### 原理结构图

![vue_006](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251123182959601.png)







## v-for 产生的列表，实现 active 的切换





## vue 弹窗后如何禁止滚动条滚动？



## vue怎么实现页面的权限控制



答案：利用 vue-router 的 beforeEach 事件，可以在跳转页面前判断用户的权限（利用 cookie 或 token），是否能够进入此页面，如果不能则提示错误或重定向到其他页面，在后台管理系统中这种场景经常能遇到。

## vue 中如何实现 tab 切换功能？





## vue 中如何利用 keep-alive 标签实现某个组件缓存功能？



## vue 中实现切换页面时为左滑出效果

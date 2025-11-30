# Vuejs基础概念

## 1. Vue 渐进式框架的理解

### 一、渐进式框架概念

Vue 的"渐进式"特性是其最核心的设计哲学，指的是**Vue 可以根据项目需求，从轻量级核心逐步扩展到复杂功能的能力**。

**渐进式的核心特点**：

1. **分层架构**：Vue 被设计为分层结构，每层提供不同的能力
2. **可选集成**：高级功能（路由、状态管理）作为可选插件
3. **增量采用**：可在现有项目中逐步引入 Vue
4. **灵活适配**：从简单页面增强到复杂 SPA 应用



### 二、渐进式架构的三层模型

#### 1. **核心层（视图层）**

- **功能**：声明式渲染、组件系统
- **适用场景**：简单交互增强、局部功能实现
- **特点**：轻量级（仅~24KB gzip）、易上手

```HTML
<!-- 简单集成示例 -->
<div id="app">
  {{ message }}
</div>

<script>
// 仅使用核心库
new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
</script>
```

#### 2. **中间层（生态系统）**

- 核心插件：
  - Vue Router：SPA 路由管理
  - Vuex/Pinia：状态管理
  - Vue CLI/Vite：构建工具
- **适用场景**：单页应用开发
- **特点**：按需引入、灵活组合

```JavaScript
// 按需引入插件
import Vue from 'vue'
import VueRouter from 'vue-router'
import Pinia from 'pinia'

Vue.use(VueRouter)
const pinia = Pinia.createPinia()

const router = new VueRouter({ /* 路由配置 */ })
const app = new Vue({
  router,
  pinia,
  // ...其他配置
})
```

### 3. **高级层（全栈解决方案）**

- 解决方案：
  - Nuxt.js：服务端渲染（SSR）
  - Quasar：跨平台应用开发
  - Vue Native：移动应用开发
- **适用场景**：企业级应用、高性能要求项目
- **特点**：开箱即用、最佳实践集成

```JavaScript
// Nuxt.js 配置示例 (nuxt.config.js)
export default {
  target: 'server', // 服务端渲染
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  buildModules: [
    '@nuxtjs/pwa'
  ]
}
```

### 三、渐进式框架的核心优势

#### 1. 学习曲线平缓

- **阶梯式学习**：从模板语法 → 组件系统 → 状态管理 → 服务端渲染
- **概念渐进**：无需一开始掌握所有高级概念

#### 2. 灵活集成能力

- **现有项目改造**：可在 jQuery 项目中局部引入 Vue
- **微前端友好**：作为微应用嵌入大型系统
- **多技术栈共存**：与 React/Angular 组件共存

```HTML
<!-- 在传统页面中使用 Vue -->
<div class="legacy-section">传统内容</div>

<div id="vue-app"></div>

<!-- 仅引入 Vue 核心库 -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.js"></script>
<script>
  new Vue({ el: '#vue-app' })
</script>
```

#### 3. 可扩展的生态系统

| 功能需求   | Vue 解决方案   | 替代方案         |
| ---------- | -------------- | ---------------- |
| 路由管理   | Vue Router     | React Router     |
| 状态管理   | Vuex/Pinia     | Redux/MobX       |
| 服务端渲染 | Nuxt.js        | Next.js          |
| 移动端开发 | Vue Native     | React Native     |
| 桌面应用   | Electron + Vue | Electron + React |

#### 4. 性能优化空间

- **按需加载**：异步组件、路由懒加载
- **渐进式加载**：优先渲染核心内容
- **代码拆分**：Webpack/Vite 自动优化

```JavaScript
// 路由懒加载示例
const UserDetails = () => import('./views/UserDetails.vue')

const router = new VueRouter({
  routes: [{ path: '/user/:id', component: UserDetails }]
})
```

### 四、渐进式框架的适用场景

#### 1. 小型项目（核心库）

- 静态网站增强
- 表单交互优化
- 简单数据展示

#### 2. 中型项目（+路由/状态管理）

- 单页应用（SPA）
- 管理后台系统
- 内容展示平台

#### 3. 大型项目（全栈方案）

- 电商平台（需要 SSR）
- 企业级应用（微前端架构）
- 跨平台应用（一套代码多端运行）

![image-20251125234707380](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251125234707431.png)

### 五、渐进式 vs 其他框架策略

| 特性         | Vue (渐进式)       | Angular (全功能)     | React (视图库)     |
| ------------ | ------------------ | -------------------- | ------------------ |
| **初始体积** | ~24KB (核心)       | ~60KB (完整)         | ~6KB (React核心)   |
| **学习曲线** | 平缓渐进           | 陡峭（需学全套）     | 中等（需选型生态） |
| **灵活性**   | 极高（按需选用）   | 低（官方全家桶）     | 高（自由组合）     |
| **入门门槛** | 低（HTML基础即可） | 高（TypeScript要求） | 中（JSX概念）      |
| **集成策略** | 增量采用           | 全量替换             | 增量或全量         |

### 六、最佳实践：渐进采用策略

#### 1. 从核心开始

```JavaScript
// 步骤1：仅引入核心功能
new Vue({
  el: '#app',
  data: { /* ... */ },
  methods: { /* ... */ }
})
```

#### 2. 引入路由管理

```JavaScript
// 步骤2：添加路由功能
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({ /* ... */ })

new Vue({
  router,
  // ...其他配置
})
```

#### 3. 集成状态管理

```JavaScript
// 步骤3：引入状态管理
import { createPinia } from 'pinia'

const pinia = createPinia()
new Vue({
  pinia,
  // ...其他配置
})
```

#### 4. 升级到全栈方案

```Bash
# 步骤4：迁移到 Nuxt.js
npx create-nuxt-app my-project
```

### 七、总结：渐进式框架的价值

Vue 的渐进式设计解决了前端开发的三大核心痛点：

1. **学习成本问题**：开发者可以从简单开始，逐步提升技能
2. **技术迁移风险**：允许在现有项目中逐步引入新技术
3. **项目适应性**：同一技术栈可覆盖不同规模的项目需求

> "Vue 被设计为可以自底向上逐层应用。核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。" - Vue 官方文档





## 2. Vue.js 的两大核心：响应式系统与组件系统

### 一、核心一：响应式系统（Reactivity System）

#### 1. 核心原理

Vue 的响应式系统通过 **数据劫持 + 依赖追踪** 实现：

- **Vue 2**：使用 `Object.defineProperty`
- **Vue 3**：使用 `Proxy` 重构

```JavaScript
// Vue 2 响应式原理简化实现
function defineReactive(obj, key) {
  let value = obj[key]
  const dep = new Dep() // 依赖收集器
  
  Object.defineProperty(obj, key, {
    get() {
      dep.depend() // 收集当前依赖
      return value
    },
    set(newVal) {
      value = newVal
      dep.notify() // 通知更新
    }
  })
}
```

#### 2. 核心机制

- **依赖收集**：在属性读取时收集依赖
- **派发更新**：在属性修改时通知更新
- **批量异步更新**：使用 `nextTick` 优化更新性能

![image-20251125235300575](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251125235300640.png)



#### 3. 响应式API进化

| **Vue 2**    | **Vue 3**            | 改进点           |
| ------------ | -------------------- | ---------------- |
| `data()`     | `ref()`/`reactive()` | 细粒度响应式控制 |
| `Vue.set()`  | 直接赋值             | 无需特殊API      |
| 数组变异方法 | 原生数组操作         | 更符合JS开发习惯 |

### 二、核心二：组件系统（Component System）

#### 1. 组件化架构

![image-20251125235338852](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251125235338917.png)

#### 2. 组件核心特性

- **声明式模板**：基于HTML的模板语法
- **单文件组件(SFC)**：`.vue`文件整合模板/逻辑/样式
- **组件通信**：

![image-20251125235401949](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251125235402002.png)

#### 3. 组件生命周期

![image-20251125235418207](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251125235418262.png)

#### 4. 高级组件模式

```Vue
<template>
  <!-- 组件复合示例 -->
  <Modal>
    <template #header>
      <HeaderComponent />
    </template>
    <template #body>
      <BodyComponent :data="content" />
    </template>
    <template #footer>
      <FooterComponent @submit="handleSubmit" />
    </template>
  </Modal>
</template>
```

### 三、双核协同工作原理

![image-20251125235453451](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251125235453516.png)

### 四、核心设计优势

#### 1. 响应式系统优势

- **自动依赖追踪**：无需手动管理更新
- **高效更新**：精确到组件级别的更新
- **开发体验**：减少样板代码

#### 2. 组件系统优势

- **代码复用**：可复用组件库
- **关注点分离**：

```Vue
// 单文件组件结构
<template> <!-- UI呈现 --> </template>
<script>    <!-- 业务逻辑 --> </script>
<style>     <!-- 样式隔离 --> </style>
```

- **可维护性**：树状结构组织代码

### 五、实际应用场景

#### 1. 响应式系统典型应用

```Vue
<template>
  <!-- 实时表单验证 -->
  <input v-model="email">
  <div v-if="error">{{ error }}</div>
</template>

<script>
export default {
  data() {
    return { email: '' }
  },
  computed: {
    error() {
      return this.email.includes('@') ? '' : 'Invalid email'
    }
  }
}
</script>
```

#### 2. 组件系统典型应用

```Vue
<!-- 可复用按钮组件 -->
<template>
  <button :class="['btn', `btn-${type}`]" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
.btn { padding: 8px 16px; }
.btn-primary { background: blue; }
.btn-danger { background: red; }
</style>
```

### 六、双核与其他框架对比

| **特性**       | Vue           | React          | Angular          |
| -------------- | ------------- | -------------- | ---------------- |
| **响应式实现** | 自动依赖追踪  | 手动`setState` | Zone.js脏检查    |
| **组件化**     | SFC单文件组件 | JSX函数组件    | TypeScript装饰器 |
| **更新粒度**   | 组件级        | 虚拟DOM diff   | 组件级           |
| **学习曲线**   | 平缓          | 中等           | 陡峭             |

### 七、最佳实践指南

#### 1. 响应式优化

```JavaScript
// 避免深层响应
data() {
  return {
    // 扁平化数据结构
    user: { id: 1, name: 'Alice' }
  }
}

// 冻结不需要响应的数据
Object.freeze(this.staticData)
```

#### 2. 组件设计原则

```Vue
<!-- 遵循单一职责 -->
<SearchInput v-model="query"/>
<SearchResults :items="filteredItems"/>
<SearchHistory :items="history"/>

<!-- 状态提升 -->
<SharedComponent :value="sharedState"/>
```

#### 3. 性能优化

```JavaScript
// 异步组件
const HeavyComponent = () => import('./HeavyComponent.vue')

// 虚拟滚动
<VirtualList :items="bigData" :item-size="50"/>
```

### 总结：Vue.js 核心价值

Vue 的双核心架构实现了**声明式编程**的终极目标：

![image-20251125235620296](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251125235620353.png)

通过响应式系统：

- 开发者只需关注数据状态
- 视图自动保持同步

通过组件系统：

- 复杂UI分解为可维护单元
- 实现高效代码复用

两大核心共同造就了 Vue **渐进式框架**的特性，使开发者能够：

1. 从简单功能开始
2. 逐步扩展至复杂应用
3. 保持开发体验的一致性
4. 实现高质量应用交付

> "Vue 的设计目标是通过尽可能简单的 API 实现响应式的数据绑定和可组合的视图组件。" - Evan You（Vue 作者）



## 3. Vue组件的设计原则

### 一、单一职责原则

#### 概念

这一原则来自于面向对象编程（OOP）的领域，它的核心思想是一个组件应该只有一个责任，也就是说，一个组件应该专注于做一件事情，并且只在一个方面具有变化的理由。这有助于提高组件的可维护性、可复用性和可测试性。

#### 优点

- 可维护性： 组件只负责一项具体的任务，当需要进行维护或修改时，你只需关注一个特定领域，而不会影响其他部分的功能。
- 可复用性： 因为组件的职责明确，它们可以更容易地在不同的项目或场景中重复使用。
- 可测试性： 单一职责原则使得单元测试更容易，因为你可以针对每个组件的职责编写独立的测试。

#### 常见实现方式

- 拆分组件： 将大型组件拆分成更小的子组件，每个子组件专注于一个特定的功能或任务。这些子组件可以通过props和事件传递数据和通信。
- HOOKS： 使用HOOKS，将一些通用的功能封装成HOOK，然后在需要的组件中引入。这有助于避免在一个组件中堆积过多的职责。
- 自定义指令： 如果某个功能需要在多个组件中共享，可以考虑将其实现为一个自定义指令，然后在需要的地方使用。
- 状态管理器（vuex、pinia）和事件总线： 对于数据管理和跨组件通信，使用状态管理或一个事件总线（Event Bus）来确保数据和逻辑的独立性。

### 二、可复用性原则

#### 概念

设计和构建组件以便能够在不同的项目、页面或场景中重复使用，从而最大限度地提高组件的再利用价值。这一原则强调组件应该是**独立**的、**通用**的，不仅仅解决特定的问题，而是能够在**多种上下文中使用**。

#### 优点

- 节省时间和资源： 可重用的组件可以在不同项目中多次使用，从而减少开发时间和资源投入。
- 一致性： 通过在多个项目中使用相同的组件，可以确保用户界面保持一致，提供更好的用户体验。
- 维护性： 只需在一个地方进行修改或修复，即可影响到所有使用该组件的地方，简化了维护过程。
- 测试性： 可复用的组件通常更容易进行单元测试，因为它们的职责明确，不依赖于特定上下文。

#### 常见实现方式

- 独立的组件设计： 设计组件时，要确保它们是相对独立的，不过多地依赖于特定数据或上下文。使用props来接收数据，以便在不同情境下传入不同的数据。
- 参数化组件： 通过使用组件的配置选项或props属性，使组件能够适应不同的需求。这可以包括颜色、样式、文本内容等。
- 可插拔功能： 如果组件有一些可选的功能，可以将它们作为插槽（slots）或者通过props参数来配置，以便根据需要启用或禁用。
- 文档和示例： 提供清晰的文档和示例，以便其他开发人员能够轻松理解如何使用你的组件，并提供示例代码，以展示如何在不同上下文中使用它。
- 发布和共享： 如果你的组件是通用的，考虑将其打包成一个独立的库，然后发布到npm或其他适当的包管理平台，以供其他开发人员使用。

### 三、可配置性原则

#### 概念

设计和构建组件时，使组件具有足够的配置选项和参数，以便用户可以根据其需求进行自定义配置。这意味着组件应该是灵活的，可以适应不同的使用场景，而不仅仅是固定的解决方案。

#### 优点

- 适应性： 用户可以根据具体需求配置组件，使其适应不同的设计和功能要求。
- 可扩展性： 可配置的组件可以更容易地扩展或修改，因为用户可以自定义组件的行为而无需修改组件的源代码。
- 复杂性管理： 可配置性有助于管理组件的复杂性，因为不同的配置选项可以在一定程度上控制组件的行为。
- 降低定制成本： 用户可以根据他们的需求使用现有组件，而无需从头开始编写自定义解决方案，从而降低了定制成本。
- 易测试性：可配置性使得组件更易于进行单元测试，因为可以在不同配置下测试组件的不同行为。
- 自定义主题和样式：通过配置选项，用户可以轻松地自定义组件的主题和样式，使其与整体设计风格更协调。

#### 常见实现方式

- 可配置性层级： 如果组件具有多个配置选项，可以考虑将它们组织成不同的层级，以提供更高级别和低级别的配置。
- Props：使用props来传递配置信息给组件。这是Vue中最基本的配置方式，可以通过props接收父组件传递的配置数据，注意设计好默认值，确保即使没有传递配置，组件也能正常运行。这增加了组件的鲁棒性
- 插槽：使用插槽（slots）来允许父组件在组件内部插入自定义内容，从而实现更灵活的配置。
- 事件：通过自定义事件，允许组件在某些特定的情况下通知父组件，从而进行相应的配置。
- Hooks：使用Hooks来将通用的配置选项和逻辑注入到组件中，提高组件的复用性和灵活性。
- Provide/Inject：使用Provide/Inject来共享配置信息，使得组件树中的任何组件都可以访问配置信息。
- 全局配置：在组件库中，可以提供全局配置选项，让用户在应用中一次性配置所有相关组件的默认行为

### 四、可测试性原则

#### 概念

设计和构建组件时，使其容易进行单元测试，以便验证组件的功能和行为是否符合预期。可测试性原则强调组件应该是独立的、可隔离的，以便测试可以在一个受控环境中进行，而不会受到外部因素的干扰。

#### 优点

- 质量保证： 通过单元测试，可以更容易地发现和修复组件中的问题，提高代码质量和稳定性。
- 维护性： 可测试的组件通常更易于维护，因为测试可以充当文档，帮助开发人员理解组件的预期行为。
- 重构支持： 可测试性有助于支持重构，因为可以确保在重构后组件仍然按照预期工作。
- 文档替代：测试用例可以作为组件功能的实际示例，帮助其他开发者理解其工作方式。
- 协作： 可测试性鼓励更好的协作，因为团队成员可以编写测试来验证他们的更改不会破坏现有的组件功能。

#### 常见实现方式

- 组件拆分： 将组件拆分成较小的、功能单一的单元，这使得每个单元更容易测试。
- 依赖注入： 使用依赖注入或依赖注入容器，以便将组件的依赖关系解耦，从而可以轻松替换或模拟依赖进行测试。
- 模拟数据和事件： 在测试中使用模拟数据和事件，以模拟组件的各种状态和用户交互。
- 使用测试框架： 使用Vue的测试工具或流行的JavaScript测试框架（如Jest、Mocha、或Vue Test Utils）来编写单元测试。
- 集成测试： 编写集成测试，以验证多个组件之间的协作和整体行为。
- 自动化测试流程： 将测试自动化，以便可以在每次代码更改时运行测试，确保不会引入新的问题。
- 断言和期望： 使用断言库来定义预期的行为，以便在测试中验证组件的输出和行为。

### 五、单向数据流原则

#### 概念

数据在组件内部的传递应该是单向的，从父组件传递到子组件，子组件不能直接修改父组件的数据，而应该通过触发事件来通知父组件进行更改，确保数据的可控性和可预测性。简单说就是只有数据的所有权拥有者才能修改数据。

#### 优点

- **可维护性**：单向数据流使代码更容易理解和维护，因为你可以明确地追踪数据的流动路径。如果有错误或需要修改，你只需查看父组件即可。
- **可预测性**：由于数据只能从一个方向改变，你可以更容易预测组件的行为。这有助于减少不可预测的副作用。
- **数据隔离：** 子组件的状态和数据是相对独立的，不容易受到外部因素的干扰。
- **组件独立性**：子组件可以更容易地复用，因为它们不依赖于特定的上下文或状态。
- **性能优化**：Vue使用虚拟DOM来减少不必要的重绘，而单向数据流有助于优化此过程，因为只有更改的数据会导致重新渲染。
- **可复用性：** 因为组件之间的依赖关系明确，所以它们更容易在不同的上下文中重用。
- **可测试性：** 单向数据流有助于编写更容易测试的组件，因为数据和行为是可控的。

### 总结

总的来说，单一职责原则帮助组件专注于一个责任，可复用性原则使组件成为通用的解决方案，可配置性原则增加组件的灵活性，可测试性原则确保组件易于测试，而单向数据流原则则提供了清晰的数据传递方向。在具体实现中，组件拆分、文档和示例、依赖注入等技术都是可以的。综合这些原则，我们能够设计出更加清晰、可维护、可测试、可复用的Vue组件，从而提高整体项目的开发效率和代码质量。在封装Vue组件时，牢记这些设计原则，让我们的组件在Vue生态系统中脱颖而出。

参考文章：[Vue组件设计之道](https://juejin.cn/post/7291935944117436442)



## 4. Vue 2 与 Vue 3  双向数据绑定原理解析

### 一、双向数据绑定本质

双向数据绑定的核心是保持**数据层（Model）** 和 **视图层（View）** 的同步：

- **数据 → 视图**：数据变化自动更新视图
- **视图 → 数据**：用户操作自动更新数据

### 二、Vue 2 实现原理

#### 1. 核心机制：Object.defineProperty

```JavaScript
// 简易实现
function defineReactive(obj, key) {
  let value = obj[key]
  const dep = new Dep() // 依赖收集器
  
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      dep.depend() // 收集依赖
      return value
    },
    set(newVal) {
      if (newVal === value) return
      value = newVal
      dep.notify() // 通知更新
    }
  })
}
```

#### 2. 完整工作流程

![image-20251128233621947](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251128233622029.png)



#### 3. v-model 实现原理

```HTML
<!-- 编译前 -->
<input v-model="message">

<!-- 编译后 -->
<input 
  :value="message"
  @input="message = $event.target.value">
```

#### 4. 局限性分析

| **问题**         | **原因**                     | **影响**               |
| ---------------- | ---------------------------- | ---------------------- |
| **数组监听缺陷** | 无法检测索引变化和length变化 | 需要$set和数组方法重写 |
| **对象新增属性** | 初始化后添加的属性无法响应   | 需要$set强制响应化     |
| **性能瓶颈**     | 递归遍历所有属性             | 大型对象初始化性能差   |
| **无法检测删除** | delete操作无法触发更新       | 需要$delete特殊处理    |

### 三、Vue 3 实现原理

#### 1. 核心机制：Proxy + Reflect

```JavaScript
// 响应式实现
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      track(target, key) // 收集依赖
      return Reflect.get(target, key, receiver)
    },
    set(target, key, value, receiver) {
      Reflect.set(target, key, value, receiver)
      trigger(target, key) // 触发更新
      return true
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key)
      trigger(target, key) // 触发删除更新
      return result
    }
  })
}
```

#### 2. 完整工作流程

![image-20251128233832040](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251128233832109.png)

#### 3. v-model 升级

```HTML
<!-- Vue 3 v-model -->
<CustomComponent v-model="message" />

<!-- 等价于 -->
<CustomComponent
  :modelValue="message"
  @update:modelValue="newValue => message = newValue" />
  
<!-- 支持多个v-model -->
<UserForm
  v-model:username="user.name"
  v-model:email="user.email" />
```

#### 4. 性能优化对比

| **优化点**     | Vue 2                 | Vue 3          |
| -------------- | --------------------- | -------------- |
| **初始化速度** | 慢（递归遍历）        | 快（按需代理） |
| **内存占用**   | 高（每个属性创建Dep） | 低（整体代理） |
| **数组处理**   | 需要特殊处理          | 原生支持       |
| **动态属性**   | 需要$set              | 原生支持       |
| **嵌套对象**   | 递归初始化            | 惰性代理       |
| **删除检测**   | 不支持                | 支持           |

### 四、核心机制对比

#### 1. 响应式系统架构

![image-20251128234033265](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251128234033338.png)

#### 2. 依赖收集机制

| **特性**     | Vue 2               | Vue 3               |
| ------------ | ------------------- | ------------------- |
| **数据结构** | Dep 类 + Watcher 树 | WeakMap + Map + Set |
| **收集粒度** | 属性级别            | 属性级别            |
| **依赖关系** | 显式依赖            | 隐式依赖            |
| **内存管理** | 需手动解除引用      | 自动垃圾回收        |
| **性能影响** | 大量Watcher占用内存 | 轻量级依赖跟踪      |

### 3. 更新触发机制

```
JavaScript// Vue 2 更新队列
function queueWatcher(watcher) {
  if (!flushing) {
    queue.push(watcher)
  }
  nextTick(flushSchedulerQueue)
}

// Vue 3 更新调度
function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  
  const effects = new Set()
  depsMap.get(key).forEach(effect => effects.add(effect))
  
  scheduler(() => {
    effects.forEach(effect => effect.run())
  })
}
```

## 五、实战应用对比

### 1. 数组操作示例

```JavaScript
// Vue 2
this.list[0] = newItem // 不会触发更新
this.$set(this.list, 0, newItem) // 正确方式

// Vue 3
this.list[0] = newItem // 自动触发更新
```

### 2. 对象属性添加

```JavaScript
// Vue 2
this.user.age = 25 // 不会触发更新
this.$set(this.user, 'age', 25) // 正确方式

// Vue 3
this.user.age = 25 // 自动触发更新
```

### 3. 性能敏感场景

```JavaScript
// 创建大型响应式对象
const data = { /* 10,000个属性 */ }

// Vue 2 初始化
new Vue({ data }) // 递归遍历所有属性，耗时操作

// Vue 3 初始化
reactive(data) // 按需代理，极速初始化
```

### 六、进阶特性对比

#### 1. 响应式API对比

| **API**        | Vue 2    | Vue 3             | 说明             |
| -------------- | -------- | ----------------- | ---------------- |
| **基本响应式** | data()   | reactive()        | 创建响应式对象   |
| **值类型响应** | 无       | ref()             | 基础类型响应方案 |
| **计算属性**   | computed | computed()        | 函数式API        |
| **侦听器**     | watch    | watch/watchEffect | 改进的侦听API    |
| **只读对象**   | 无       | readonly()        | 防止意外修改     |

#### 2. Composition API 优势

```JavaScript
// Vue 3 组合式函数
function useCounter() {
  const count = ref(0)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  
  return { count, increment, decrement }
}

// 组件中使用
export default {
  setup() {
    const { count, increment } = useCounter()
    return { count, increment }
  }
}
```
# git 与 github 知识

> github官方文档 [GitHub Docs](https://docs.github.com/zh)

## 1. Git 是什么？

### **一、核心定义**

- Git 是一个**分布式版本控制系统 (DVCS - Distributed Version Control System)**。

- 版本控制系统 (VCS)：

  用于跟踪和管理文件（通常是源代码）变化的工具。它记录文件的修改历史，允许：

  - **回溯历史：** 查看过去的版本，了解谁在什么时候修改了什么。
  - **版本恢复：** 恢复到之前的某个稳定版本。
  - **协作开发：** 多人同时处理同一项目而不会覆盖彼此的更改。
  - **分支与实验：** 在不影响主线代码的情况下开发新功能或修复 Bug。

### **二、关键特性**

- 分布式 (Distributed)：

  这是 Git 与 SVN 等旧系统最根本的区别。

  每个开发者的本地机器上都拥有一个完整的仓库副本，包括所有的提交历史和分支信息。

  这意味着：

  - **离线工作：** 你可以在没有网络连接的情况下进行提交、查看历史、创建分支等绝大多数操作。
  - **速度快：** 绝大多数操作（如提交、查看日志、比较差异）都在本地进行，非常迅速。
  - **冗余与健壮性：** 每个开发者的克隆都是完整的备份。即使中央服务器宕机，本地历史依然完整，修复后可重新同步。
  - **灵活的协作模型：** 支持多种工作流（如集中式、Pull Request、Forking 等）。

- **基于快照 (Snapshot-based)：** Git 看待数据的方式不同。每次提交时，Git 会记录项目在那一刻所有文件的快照（类似于对整个项目拍了一张照片）。如果文件没有变化，Git 只会存储一个指向之前相同文件的链接（非常高效）。这比记录差异（Delta）的系统在恢复历史时更直接。

- **数据完整性：** Git 中的所有数据（文件内容、目录结构、提交、标签等）在存储前都会计算一个 SHA-1 哈希值（一个 40 位的校验和）。这意味着你不可能在 Git 不知情的情况下更改任何文件内容或目录。这种机制构建了 Git 的核心，确保历史不可篡改。

- 强大的分支模型：

  Git 的分支是其杀手锏功能。

  - **轻量级：** 创建分支本质上只是在 Git 内部创建一个指向某个提交的指针（41 字节文件），极其快速和廉价。
  - **高效合并：** Git 设计了高效的算法来合并不同分支的更改。虽然合并冲突仍需手动解决，但基础合并过程非常优化。
  - **促进工作流：** 鼓励基于分支的开发（Feature Branch Workflow, Git Flow, GitHub Flow）。



## 2. Git 与 SVN 的异同

### 一、两者对比

| 特性             | Git (分布式 - DVCS)                                          | SVN (集中式 - CVCS)                                          | 区别带来的影响                                               |
| ---------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **架构**         | **分布式**。每个开发者拥有完整的仓库克隆（含完整历史）。     | **集中式**。只有一个中央仓库保存完整历史和权威版本。开发者只有工作副本。 | **根本性区别！** Git 允许多副本、离线工作、本地提交；SVN 严重依赖网络和中央服务器。 |
| **网络依赖**     | 大部分操作（提交、查看历史、分支切换）在**本地离线**完成。   | 几乎所有重要操作（提交、更新、查看日志）都**需要网络连接**访问中央服务器。 | Git 开发更流畅，不受网络中断影响；SVN 在网络差或服务器宕机时工作受阻。 |
| **存储方式**     | **快照**。每次提交记录整个项目文件树的一个完整快照（未变文件用链接）。 | **增量差异 (Delta)**。每次提交只记录与之前版本相比发生变化的文件内容。 | Git 恢复历史更快（直接找到快照）；SVN 恢复历史较慢（需从初始版本逐层应用差异）。Git 元数据 `.git` 初始体积可能更大（但存储效率高）。 |
| **分支成本**     | **非常低廉**。创建分支瞬间完成（仅是一个指针）。合并也高效。 | **相对昂贵**。创建分支相当于在服务器上复制目录（可能耗时耗空间）。 | Git 鼓励频繁使用分支（功能分支、Bug修复分支）；SVN 中分支使用相对谨慎，常仅用于大版本或长期特性。 |
| **标签 (Tag)**   | **不可变的指针**。标签是某个特定提交的别名（本质是提交的引用）。 | **特定版本的快照副本**。标签是在服务器上对某个版本目录的拷贝（类似廉价分支）。 | Git 标签轻量、易于创建和管理；SVN 标签更重，创建稍麻烦。     |
| **工作流程**     | 非常灵活。支持集中式工作流、功能分支流、Git Flow、GitHub Flow、Forking Flow等。 | 相对单一。主要围绕主干（`trunk`）、分支（`branches`）、标签（`tags`）目录结构，以主干开发为主。 | Git 工作流更适应现代敏捷开发和开源协作（尤其是 Pull Request）；SVN 工作流相对传统。 |
| **冲突处理**     | 在合并或变基时可能发生冲突。冲突解决在本地进行。             | 在`svn update`或`svn commit`时可能发生冲突（当本地版本落后于中央版本）。 | Git 冲突通常在合并分支时显式处理；SVN 冲突在更新代码时可能更频繁地遇到。 |
| **学习曲线**     | 概念相对较多（暂存区、分布式、分支模型强大），初学者可能需要更多时间理解。 | 概念相对简单（检出、更新、提交、分支/标签即目录拷贝），上手容易。 | Git 前期学习成本稍高，但掌握后效率更高；SVN 易于入门，但在复杂分支管理上显得力不从心。 |
| **流行度与生态** | **当前绝对主流**。GitHub, GitLab, Bitbucket 等平台极大繁荣了生态，是现代开源和商业开发的标配。 | **曾经主流，现已式微**。仍存在于一些老项目和企业中，但新项目基本转向 Git。 | Git 拥有庞大的社区、丰富的工具链（GUI客户端、CI/CD集成如 GitHub Actions）和最佳实践；SVN 生态相对萎缩。 |
| **代表性平台**   | GitHub, GitLab, Bitbucket, Gitee, Azure Repos 等。           | Apache Subversion Server, VisualSVN Server, CollabNet SVN 等。 | Git 平台功能更现代（PR/MR、Issue Tracking、CI/CD、Wiki）；SVN 平台功能相对基础。 |

### 二、关键区别

1. **核心架构：** Git **分布式** vs SVN **集中式**（根本区别）。
2. **网络需求：** Git **大部分操作离线** vs SVN **严重依赖网络**。
3. **分支模型：** Git **分支廉价高效** vs SVN **分支相对昂贵**。
4. **数据存储：** Git **基于快照** vs SVN **基于差异**。
5. **主流地位：** Git **是现代开发的事实标准** vs SVN **是遗留系统的代表**。

### 三、为什么应该选择 Git？

- **现代前端工作流依赖 Git：** React, Vue, Angular 等主流框架的官方文档、脚手架工具、社区资源都围绕 Git (尤其是 GitHub) 构建。
- **分支驱动开发 (Feature Branch Workflow)：** 前端项目迭代快，需要频繁创建分支开发新功能或 UI 变更、修复 Bug。Git 的低成本分支是基石。
- **Pull Request (PR) / Merge Request (MR) 流程：** 这是现代协作的核心，用于代码审查、自动化测试 (CI)、自动化部署 (CD)。GitHub/GitLab 对此提供了完美支持。
- **强大的 GitHub/GitLab 生态：** GitHub Pages (部署静态站点)、GitHub Actions / GitLab CI (前端 CI/CD 自动化)、Issue Tracking、项目管理、Wiki 等工具无缝集成。
- **开源社区参与：** 学习开源项目、提交 Issue、贡献代码 (Fork & PR) 都基于 Git 平台。

Git 凭借其分布式的架构、强大的分支模型、高效的性能和繁荣的现代生态系统，已经完全取代了 SVN 成为软件开发（尤其是前端开发）的首选版本控制系统。理解 Git 的核心概念和工作原理对于任何前端工程师都是必不可少的基础技能。



## 3. Git 常用命令全解（前端工程师版）

### 一、仓库操作

| **命令**                      | **作用**                   | **示例**                                     |
| ----------------------------- | -------------------------- | -------------------------------------------- |
| `git init`                    | 初始化新仓库               | `git init my-project`                        |
| `git clone <url>`             | 克隆远程仓库               | `git clone https://github.com/user/repo.git` |
| `git remote -v`               | 查看远程仓库               |                                              |
| `git remote add <name> <url>` | 添加远程仓库               | `git remote add origin https://...`          |
| `git fetch <remote>`          | 获取远程更新（不自动合并） | `git fetch origin`                           |

### 二、基础工作流

| **命令**                      | **作用**         | **前端场景**                        |
| ----------------------------- | ---------------- | ----------------------------------- |
| `git status`                  | 查看当前状态     | 检查未提交的修改                    |
| `git add <file>`              | 添加文件到暂存区 | `git add src/components/*`          |
| `git add .`                   | 添加所有修改     | 提交前批量操作                      |
| `git add -p`                  | 交互式添加       | 选择性提交部分修改                  |
| `git commit -m "message"`     | 提交更改         | `git commit -m "fix: 修复按钮样式"` |
| `git commit --amend`          | 修改最后提交     | 修正提交信息/添加遗漏文件           |
| `git restore <file>`          | 撤销工作区修改   | `git restore package.json`          |
| `git restore --staged <file>` | 撤销暂存区文件   | 误add后撤销                         |

### 三、分支管理

| **命令**                     | **作用**       | **最佳实践**               |
| ---------------------------- | -------------- | -------------------------- |
| `git branch`                 | 查看本地分支   |                            |
| `git branch <name>`          | 创建新分支     | `git branch feat/login`    |
| `git switch <branch>`        | 切换分支       | `git switch main`          |
| `git switch -c <new-branch>` | 创建并切换分支 | `git switch -c fix/header` |
| `git merge <branch>`         | 合并分支       | `git merge feat/login`     |
| `git rebase <base>`          | 变基操作       | `git rebase main`          |
| `git branch -d <branch>`     | 删除分支       | `git branch -d old-feat`   |

### 四、历史与日志

| **命令**                    | **作用**             | **实用参数**                |
| --------------------------- | -------------------- | --------------------------- |
| `git log`                   | 查看提交历史         |                             |
| `git log --oneline`         | 简洁历史             |                             |
| `git log -p`                | 带代码差异的历史     | 分析代码变更                |
| `git log --graph`           | 图形化分支历史       | `git log --graph --oneline` |
| `git blame <file>`          | 查看文件修改记录     | `git blame src/App.js`      |
| `git diff`                  | 工作区与暂存区差异   |                             |
| `git diff --staged`         | 暂存区与最新提交差异 |                             |
| `git diff branch1..branch2` | 比较分支差异         | `git diff main..feat`       |

### 五、远程协作

| **命令**                            | **作用**     | **注意事项**                          |
| ----------------------------------- | ------------ | ------------------------------------- |
| `git push`                          | 推送本地提交 | `git push -u origin feat` (首次)      |
| `git pull`                          | 拉取远程更新 |                                       |
| `git pull --rebase`                 | 变基方式拉取 | 保持线性历史                          |
| `git push origin --delete <branch>` | 删除远程分支 | `git push origin --delete old-branch` |
| `git push --force`                  | 强制推送     | 变基后使用（慎用）                    |

### 六、高级操作

| **命令**                   | **作用**         | **使用场景**              |
| -------------------------- | ---------------- | ------------------------- |
| `git stash`                | 暂存当前修改     | 紧急切换分支时保存工作    |
| `git stash pop`            | 恢复暂存修改     |                           |
| `git cherry-pick <commit>` | 复制特定提交     | `git cherry-pick a1b2c3d` |
| `git reset <commit>`       | 回退到指定提交   |                           |
| `git reflog`               | 查看操作历史     | 找回误删分支/提交         |
| `git bisect`               | 二分查找问题提交 | 定位引入Bug的提交         |
| `git clean -fd`            | 删除未跟踪文件   | 清理node_modules等目录    |

### 七、前端专项命令

```Bash
# 1. 解决package.json冲突后重装依赖
git checkout --ours package.json
npm install

# 2. 忽略已提交的node_modules
echo "node_modules/" >> .gitignore
git rm -r --cached node_modules
git commit -m "停止追踪node_modules"

# 3. 修改历史提交中的敏感信息
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch .env' \
  --prune-empty --tag-name-filter cat -- --all
```

### 八、实用别名配置（~/.gitconfig）

```Ini
[alias]
  co = checkout
  br = branch
  ci = commit
  st = status
  unstage = reset HEAD --
  last = log -1 HEAD
  lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
  wip = !git add -A && git commit -m "wip"
  undo = reset HEAD~1
```

### 九、日常命令组合

```Bash
# 标准开发流程
git switch -c feat/new-component
# ...开发代码...
git add src/components/NewComponent.js
git commit -m "feat: 新增组件"
git push -u origin feat/new-component

# 紧急修复流程
git stash                     # 保存当前工作
git switch main               # 切换到主分支
git pull --rebase origin main # 更新代码
git switch -c hotfix/header   # 创建修复分支
# ...修复代码...
git commit -m "fix: 修复头部样式"
git push origin hotfix/header
git switch dev                # 回到原分支
git stash pop                 # 恢复工作
```

> **前端特别提示**：
>
> 1. 使用 `git rm -r --cached .` + `git add .` 可刷新.gitignore规则
> 2. 配置 `git config --global pull.rebase true` 避免多余合并提交
> 3. 使用 `npx npm-merge-driver install` 优化package.json合并冲突
> 4. 重要操作前使用 `git tag backup-v1` 创建标记点



## 4. Git 基础配置指南

### 一、核心配置文件层级

| **作用域** | **配置文件路径**   | **优先级** | **适用场景**               |
| ---------- | ------------------ | ---------- | -------------------------- |
| **系统级** | `/etc/gitconfig`   | 最低       | 服务器全局设置             |
| **用户级** | `~/.gitconfig`     | 中         | 开发者个人配置（推荐主用） |
| **仓库级** | `项目/.git/config` | 最高       | 项目特殊配置               |

### 二、必做基础配置

```Bash
# 设置全局用户名/邮箱（所有提交记录关联）
git config --global user.name "你的姓名"
git config --global user.email "你的邮箱@example.com"

# 设置默认编辑器（VS Code示例）
git config --global core.editor "code --wait"

# 启用颜色标记（提升可读性）
git config --global color.ui auto
```

### 三、提效配置项

#### 1. 别名配置（大幅提升效率）

```Bash
# 常用命令缩写
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'

# 高级别名
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
# 使用：`git lg` 查看美化版历史
```

#### 2. 自动换行符处理（跨平台协作）

```Bash
# Windows
git config --global core.autocrlf true

# macOS/Linux
git config --global core.autocrlf input
```

#### 3. SSH密钥配置（免密推送）

```Bash
# 生成密钥（-t 指定算法，-C 添加注释）
ssh-keygen -t ed25519 -C "your_email@example.com"

# 将公钥添加到 GitHub
cat ~/.ssh/id_ed25519.pub
# 复制输出内容 → GitHub Settings → SSH and GPG keys
```

### 四、前端专项配置

#### 1. `.gitignore` 全局模板

```Bash
# 创建全局忽略规则
git config --global core.excludesfile ~/.gitignore_global

# 编辑全局忽略文件（内容如下）
echo '
# 前端通用忽略规则
node_modules/
dist/
*.log
.DS_Store
.idea/
.vscode/
.env
*.local
' > ~/.gitignore_global
```

#### 2. 大文件处理（避免误传）

```Bash
# 禁止添加超过10MB文件（提交时拦截）
git config --global hooks.maxsize 10485760
```

### 五、配置验证与查看

```Bash
# 查看所有配置项
git config --list

# 查看特定配置
git config user.name

# 检查生效优先级
git config --show-origin user.email
```

### 六、安全增强配置

```Bash
# 禁用凭据缓存（敏感项目）
git config --global credential.helper ''

# 启用提交签名（需先配置GPG密钥）
git config --global commit.gpgsign true
```

### 七、跨平台统一配置示例

```Ini
# ~/.gitconfig 完整示例
[user]
	name = 你的姓名
	email = 你的邮箱@example.com
[core]
	editor = code --wait
	autocrlf = input
	excludesfile = ~/.gitignore_global
[alias]
	co = checkout
	br = branch
	ci = commit
	st = status
	unstage = reset HEAD --
	last = log -1 HEAD
[push]
	default = current  # 推送当前分支
```

> **前端工程师特别提示**：
>
> 1. 务必配置全局 `.gitignore` 避免提交 `node_modules`
> 2. 使用 `git config --global alias` 创建符合自己习惯的快捷命令
> 3. 跨团队项目应在仓库根目录添加 `.editorconfig` 统一代码风格



## 5. Git 分支

### 一、分支的本质与原理

1. 分支即指针
   - 每个分支本质是`指向某个提交（Commit）的轻量级指针`
   - 创建分支：仅新建一个41字节的文件（`.git/refs/heads/branch-name`）
2. HEAD指针
   - 特殊指针，指向当前所在分支（或特定提交）
   - `detached HEAD`状态：HEAD直接指向提交而非分支

### 二、分支操作全解

| **命令**                     | **作用**           | **场景**               |
| ---------------------------- | ------------------ | ---------------------- |
| `git branch feat-login`      | 创建分支           | 基于当前分支创建新分支 |
| `git switch feat-login`      | 切换分支           | 替代旧版`checkout`     |
| `git switch -c fix-bug`      | 创建并切换分支     | 常用快捷操作           |
| `git branch -d feat-old`     | 删除已合并分支     | 清理完成的分支         |
| `git branch -D feat-abandon` | 强制删除未合并分支 | 放弃未完成功能         |
| `git branch -vv`             | 查看分支跟踪关系   | 确认分支与远程对应关系 |
| `git branch --move old new`  | 分支重命名         | 修正分支名称拼写错误   |



### 三、分支策略与工作流

#### **1. 功能分支工作流（推荐）**

![image-20251103234122529](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251103234122633.png)

#### 2. Git Flow（复杂项目适用）

| **分支类型** | **生命周期** | **作用**         |
| ------------ | ------------ | ---------------- |
| `main`       | 永久         | 生产环境对应版本 |
| `develop`    | 永久         | 集成测试分支     |
| `feature/*`  | 功能开发期间 | 新功能开发       |
| `release/*`  | 版本发布前   | 预发布测试       |
| `hotfix/*`   | 紧急修复期间 | 生产环境Bug修复  |

### 四、高级技巧

#### 1. 恢复误删分支

```Bash
# 查找最后提交的SHA
git reflog
# 重建分支指针
git branch recovered-branch 90d9262
```

#### 2. 分支过滤器

```Bash
# 清理已合并到main的分支
git branch --merged main | grep -v "main" | xargs git branch -d
```

#### 3. 临时切换分支（保存工作进度）

```Bash
git stash           # 保存当前修改
git switch main     # 处理紧急任务
git switch -        # 返回原分支
git stash pop       # 恢复修改
```

### 五、前端团队协作规范

1. 命名规范：
   - `feat/xxx`：新功能开发
   - `fix/xxx`：Bug修复
   - `docs/xxx`：文档更新
   - `perf/xxx`：性能优化
2. PR最佳实践：
   - 单PR对应单功能（避免大而全）
   - 本地执行`npm run build`通过
   - 更新CHANGELOG.md（如遵循语义化版本）
3. 环境对应：
   - `main` → 生产环境
   - `develop` → 测试环境
   - `feature/*` → 本地开发

> **核心原则**：
>
> - 公共分支（main/develop）`禁止`直接push
> - 所有变更通过PR/MR进入主分支
> - 合并前必须解决所有CI检查错误





## 6. Git 合并场景全流程解析

### 一、合并前的准备阶段

#### 1合并前的准备阶段

#### 1. 状态检查

```Bash
# 确保工作区干净
git status
# 查看git status
# 查看分支拓扑
git log --all --graph --oneline
```

#### 2. 更新目标分支

```Bash
git checkout main
git pull --rebase origin main
git pull --rebase origin main
```

#### 3. 预合并测试（推荐）

```bash
# 在特性分支上运行测试
git checkout feat
npm run test
npm run build
```

### 二、六大合并场景流程详解

####  场景1：快进合并（Fast-Forward）

![image-20251103233216539](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251103233216644.png)

**操作步骤**

```bash
git checkout main
git merge feat  # 自动完成
git push
```



#### 场景2：标准三方合并（无冲突）

![image-20251103233318507](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251103233318617.png)

```Bash
git checkout main
git merge feat  # 自动创建合并提交
git push
```

#### 场景3：冲突合并（手动解决）

```Bash
git checkout main
git merge feat  # 提示冲突

# 解决冲突流程
git status  # 查看冲突文件

vim conflict-file.js  # 手动编辑解决
git add conflict-file.js
git commit  # conflict-file.js
git commit  # 提交合并结果
git push
```

#### 场景4：压缩合并（Squash Merge）

![image-20251103233418087](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251103233418195.png)

**操作步骤**

```Bash
git checkout main
git merge --squash feat
git commit -m "整合登录功能"
git push
```

#### 场景5：变基合并（Rebase + Merge）

```Bash
# 在特性分支操作
git checkout feat
git rebase main  # 解决可能的冲突
git push -f

# 切换到主分支合并
git checkout main
git分支合并
git checkout main
git merge feat  # 此时为快进合并
git push
```

#### 场景6：递归合并（多分支合并）

![image-20251103233804307](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251103233804423.png)

**操作步骤**

```Bash
git checkout main
git merge feat1  # 先合并第一个特性
# 解决可能的冲突
git add .
git commit
git merge feat2  # 再合并第二个特性
# 解决冲突...
git push
```

### 三、冲突解决全流程

#### 1冲突解决全流程

#### 1. 冲突检测

```Bash
Auto-merging src/app.js
CONFLICT (content): Merge conflict in src/app.js
```

#### 2. 冲突标识解析

```Js
// 当前分支内容（main）
const API_URL = 'https://api.prod.com';
```

#### 3. 解决方案选项

1. **保留当前分支版本**：

```Bash
git checkout --ours src/app.js
```

1. **保留合并分支版本**：

```Bash
git checkout --theirs src/app.js git checkout --theirs src/app.js
```

1. **手动整合方案**（推荐）： 整合方案**（推荐）：

```Js
// 最终方案
const API_URL = process.env.PROD_MODE 
 ? 'https://api.prod.com' 
 : 'https://api.staging.com';
```

#### 4. 使用合并工具

```Bash
git config --global merge.tool vscode
git mergetool  # 启动VS Code解决冲突
```

### 四、合并后处理

#### 1. 验证合并结果

1. 验证合并结果

```Bash
# 运行测试
npm test

# 检查差异
git diff main..origin/main
```

#### 2. 分支清理

```Bash
# 删除已合并的本地分支
git branch -d feat

# 删除远程分支
git push origin --delete feat
```

#### 3. 提交历史优化

```Bash
# 查看合并后的历史
git log --graph --pretty=format:'%h -%d %s (%cr) <%an>'
```

### 五、前端项目合并最佳实践

#### 1. 合并策略选择指南

| 场景          | 推荐策略 | 优点              | 缺点           |
| ------------- | -------- | ----------------- | -------------- |
| 短期个人分支  | 快进合并 | 历史线性简洁      | 无合并提交记录 |
| 团队协作分支  | 三方合并 | 保留完整历史      | 产生额外提交   |
| 含多个WIP提交 | 压缩合并 | 主分支历史整洁    | 丢失开发过程   |
| 长期功能分支  | 变基合并 | 线性历史+完整记录 | 需要强制推送   |

#### 2. 关键配置文件处理

**package.json冲突解决方案**：

```Json
{
  "dependencies": {
    // 使用更高版本
    "react": "^18.2.0",
    
    // 合并双方新增依赖
    "lodash": "^4.17.21",
    "axios": "^1.4.0"
  }
}
```

#### 3. 自动化合并检查

```Yaml
# .github/workflows/merge-check.yml
name: Merge Validation
on: 
  pull_request:

on: 
  pull_request:
    types: [opened, synchronize]

jobs:
  build:
   ize]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - run: npm ci
    - run: npm run build
    - run: npm run build
    - run: npm test
```

### 六、高级合并技巧

#### 1. 空合并（No-op Merge）

```Bash
git merge -s ours feat  # 接受当前分支状态  # 接受当前分支状态
```

#### 2. 部分文件合并

```Bash
# 仅合并特定文件
git checkout feat -- src/utils/helpers.js
 feat -- src/utils/helpers.js
git commit -m "合并工具函数"
```

#### 3. 合并中止与恢复

```Bash
# 中止合并
git merge --abort

# 恢复冲突状态
git checkout -m --状态
git checkout -m --conflict=diff3 file.txt
```

#### 4. 复杂冲突解决

```Bash
# 查看三方差异
git show :1:file.txt > base
git show :2:file.txt > ours
git show :3:file.txt > theirs

# 使用diff3工具
git config使用diff3工具
git config --global merge.conflictStyle diff3
```

> **黄金准则**：
>
> 1. 主：
> 2. 主分支保护：通过PR合并，禁止直接push
> 3. 预合并验证：在本地解决冲突后再验证：在本地解决冲突后再推送
> 4. 原子提交：保持每个提交的独立性
> 5. 历史清理：定期删除已合并分支
> 6. 文档记录：在合并提交中详细说明变更

通过系统化合并流程管理，前端团队可减少75%的集成问题。建议结合图形化工具（如VS Code GitLens）可视化合并 GitLens）可视化合并过程，显著提升操作效率。



## 7. Git 与 GitHub 关联全流程指南

### 一、核心关联原理

![image-20251103234958331](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251103234958468.png)

### 二、关联操作全流程

#### 1. 初始关联（新项目）

```Bash
# 创建本地仓库
git init
git add .
git commit -m "初始提交"

# 在GitHub创建空仓库（不初始化）

# 添加远程仓库
git remote add origin https://github.com/<用户名>/<仓库名>.git

# 首次推送
git branch -M main  # 重命名分支（可选）
git push -u origin main  # -u 设置上游跟踪
```

#### 2. 克隆现有仓库

```Bash
# 获取仓库SSH/HTTPS链接（GitHub页面）
git clone git@github.com:<用户名>/<仓库名>.git

# 自动完成：
# 1. 创建本地仓库
# 2. 设置origin远程
# 3. 拉取所有文件
```

#### 3. 多远程仓库配置

```Bash
# 添加第二个远程仓库（如公司私有库）
git remote add upstream git@git.company.com:project.git

# 查看远程配置
git remote -v
# origin    git@github.com:user/repo.git (fetch)
# origin    git@github.com:user/repo.git (push)
# upstream  git@git.company.com:project.git (fetch)
# upstream  git@git.company.com:project.git (push)
```

### 三、日常协作命令

#### 1. 推送更新

```Bash
# 标准推送
git push origin main

# 强制推送（谨慎使用）
git push -f origin feat  # rebase后可能需要
```

#### 2. 获取更新

```Bash
# 安全拉取（推荐）
git fetch origin  # 只下载不合并
git rebase origin/main  # 变基到最新

# 快捷拉取（可能产生合并提交）
git pull origin main
```

#### 3. 分支管理

```Bash
# 推送新分支
git push -u origin feat-login  # -u 设置跟踪

# 删除远程分支
git push origin --delete old-branch
```

### 四、认证方式配置

#### 1. SSH密钥认证（推荐）

```Bash
# 生成密钥
ssh-keygen -t ed25519 -C "your_email@example.com"

# 将公钥添加到GitHub
cat ~/.ssh/id_ed25519.pub
# -> GitHub Settings > SSH and GPG keys

# 测试连接
ssh -T git@github.com
# Hi qlHuo! You've successfully authenticated, but GitHub does not provide shell access.
```

#### 2. HTTPS令牌认证（GitHub 2021+）

```Bash
# 生成Personal Access Token
# GitHub Settings > Developer settings > Personal access tokens

# 首次推送时输入令牌替代密码
git push origin main
Username: <GitHub用户名>
Password: <粘贴令牌>
```

### 五、GitHub 协作流程

#### 1. Pull Request 标准流程

![image-20251103235053996](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251103235054140.png)

#### 2. 协作命令组

```Bash
# 1. 同步主分支更新
git checkout main
git pull --rebase origin main

# 2. 基于最新main创建特性分支
git checkout -b feat-search

# 3. 开发完成后推送
git push -u origin feat-search

# 4. 在GitHub创建PR
# 5. 根据审查意见修改
git add .
git commit --amend  # 更新最后提交
git push -f origin feat-search  # 强制更新PR
```

### 六、前端专项配置

#### 1. 仓库初始化模板

```Bash
# .gitignore 前端模板
node_modules/
dist/
.DS_Store
.env.local
*.log

# README.md 必备项
[![CI Status](https://github.com/user/repo/actions/workflows/ci.yml/badge.svg)](https://github.com/user/repo/actions)
```

#### 2. GitHub Actions 集成

```Yaml
# .github/workflows/ci.yml
name: Frontend CI
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - run: npm ci
    - run: npm run build
    - run: npm test
```

### 七、问题排查指南

#### 1. 常见错误处理

| **错误信息**                                      | **解决方案**               |
| ------------------------------------------------- | -------------------------- |
| `Permission denied (publickey)`                   | 检查SSH密钥配置            |
| `Support for password authentication was removed` | 使用令牌替代密码           |
| `Updates were rejected`                           | 先执行 `git pull --rebase` |
| `Detached HEAD`                                   | `git switch -c new-branch` |

#### 2. 连接测试命令

```Bash
# 检查远程URL
git remote -v

# 测试SSH连接
ssh -T git@github.com

# 重置认证缓存
git credential-manager reject https://github.com
```

### 八、高级协作技巧

#### 1. 同步上游仓库更新

```Bash
# 添加原始仓库为upstream
git remote add upstream git@github.com:original/repo.git

# 获取更新
git fetch upstream

# 合并到本地分支
git merge upstream/main
```

#### 2. PR 开发工作流优化

```Bash
# 在PR分支处理审查意见时
git fetch origin
git rebase -i origin/main  # 交互式变基整理提交

# 添加修改到最新提交
git add .
git commit --amend --no-edit
git push -f
```

#### 3. GitHub CLI 工具

```Bash
# 安装GitHub CLI
brew install gh  # macOS
scoop install gh # Windows

# 常用操作
gh repo clone user/repo  # 克隆仓库
gh pr create    # 创建PR
gh pr checkout  # 获取他人PR到本地
```

> **最佳实践**：
>
> 1. 主分支设置保护规则（Require PR, Require checks）
> 2. 使用SSH密钥认证提高安全性和便利性
> 3. 配置 `git config --global pull.rebase true` 避免多余合并提交
> 4. 重要操作前创建标签备份：`git tag v1-before-refactor`

通过建立本地Git与GitHub的稳定关联，前端开发者可实现高效的团队协作和自动化部署。建议定期执行 `git remote -v` 验证连接配置，并利用GitHub Actions实现CI/CD自动化流程。





## 8. 简单对比 git pull 和 git pull --rebase 的使用

### 区别图解

![image-20251104230418423](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251104230418635.png)



### 对比解析

| **特征**       | `git pull` (默认)         | `git pull --rebase`        |
| -------------- | ------------------------- | -------------------------- |
| **工作原理**   | `git fetch` + `git merge` | `git fetch` + `git rebase` |
| **提交历史**   | 产生合并提交              | 保持线性历史               |
| **历史可视化** | 出现分叉                  | 直线延伸                   |
| **冲突处理**   | 在合并提交时解决          | 在每个提交重放时解决       |
| **适用场景**   | 公共分支协作              | 私有分支开发               |
| **前端推荐度** | ⭐⭐                        | ⭐⭐⭐⭐⭐ ⭐⭐                   |

### 工作流程对比

#### 1. `git pull` 流程

![image-20251104234820376](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251104234820543.png)

```Bash
# 执行命令
git pull origin main

# 结果：
*   a1b2c3d (HEAD) Merge branch 'main' of github:repo
|\  
| * 4e5f6g7 Remote commit
* | 1a2b3c4 Local commit
|/  
* 00ff00 Previous commit
```

#### 2. `git pull --rebase` 流程

![image-20251104234919649](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251104234919802.png)

```Bash
# 执行命令
git pull --rebase origin main

# 结果：
* 1a2b3c4 (HEAD) Local commit (重放后)
* 4e5f6g7 Remote commit
* 00ff00 Previous commit
```

### 冲突处理差异

#### `git pull` 冲突：

- 单次冲突解决（合并时）
- 生成合并提交记录冲突解决方案
- 解决后提交：`git commit`

#### `git pull --rebase` 冲突：

- 可能多次冲突（每个提交重放时）
- 解决流程：

```Bash
# 1. 解决冲突
git add resolved-file.js

# 2. 继续变基
git rebase --continue

# 3. 重复直到所有提交重放完成
```

- 无额外合并提交

### 前端开发场景推荐

#### 使用 `git pull --rebase` 当：

1. 在**私有特性分支**开发

```Bash
git switch -c feat/user-profile
# 开发后更新：
git pull --rebase origin main
```

2. 需要**清晰线性历史**

```Bash
# 查看整洁历史
git log --oneline --graph
# 输出：直线提交历史
```

3. 准备发起 **Pull Request** 前

```Bash
# PR前同步主分支
git pull --rebase origin main
git push -f
```

#### 使用 `git pull` 当：

1. 在**共享分支**协作

```Bash
git switch develop  # 多人协作分支
git pull origin develop
```

2. **需要保留**合并轨迹

```Bash
# 查看功能合并记录
git log --merges
```

3. 处理复杂合并（多人同时修改）

```Bash
# 需要明确合并点
git pull origin hotfix
```

### 永久配置推荐（前端项目）

~~~Bash
# 前端项目）
```bash
# 为所有分支启用rebase模式
git config --global pull.rebase true

# 仅对当前仓库配置
git config pull.rebase true
~~~

### 异常处理技巧

#### 1. 中断rebase操作

```Bash
# 放弃rebase返回原始状态
git rebase --abort
```

#### 2. 解决连续冲突

```Bash
# 跳过当前冲突提交
git rebase --skip  # 谨慎使用

# 使用工具解决
git mergetool
```

#### 3. 恢复误操作

```Bash
# 查看操作记录
git reflog

# 重置到rebase前状态
git reset --hard HEAD@{5}
```

### 黄金实践准则

1. **私有分支**：始终使用 `git pull --rebase`
2. **公共分支**：使用普通 `git pull`
3. **推送前**：在特性分支执行 rebase
4. **协作分支**：避免强制推送 (`push -f`)
5. **复杂历史**：合并前用 `git log --graph` 检查拓扑

> **前端团队建议**： 在 `package.json` 中添加预处理脚本确保依赖安装：
>
> ```
> Json"scripts": {
> 
> "scripts": {
>   "prepull": "npm ci",
>   "postpull": "npm run build"
> }
> ```
>
> 执行 `git pull --rebase` 前自动安装依赖，避免因依赖变更导致的构建失败

通过合理选择同步策略，可使前端项目历史策略，可使前端项目历史清晰度提升70%，减少合并提交噪音，优化CI/CD流程可靠性。

[参考内容](https://www.cnblogs.com/kevingrace/p/5896706.html)



## 9. 什么时候使用“git rebase”代替“git merge”？

### 核心原则：

- **`git rebase`**：用于**整理提交历史，使其更清晰、线性**。
- **`git merge`**：用于**保留原始分支结构和合并记录**。

### 适合使用 `git rebase` 的场景：

1. **本地分支整理提交**
   - 你在本地功能分支（如 `feature`）开发时，主分支（如 `main`）有更新。
   - 使用 `git rebase main` 将 `feature` 的提交“移动”到 `main` 分支的最新提交之后，**避免多余的合并提交**，保持历史线性。
2. **提交 PR/MR 前清理历史**
   - 准备提交代码审查（如 GitHub Pull Request/GitLab Merge Request）时，通过 `rebase` 整理分支的杂乱提交（如修复拼写、合并多个小提交），使审查更清晰。
3. **避免“合并噪音”**
   - 不想在历史中看到大量的 `Merge branch 'main' into feature` 记录（`git merge` 会产生这些提交）。`rebase` 能消除这种噪音。
4. **长期分支同步更新**
   - 长期开发的功能分支需定期同步主分支改动。用 `rebase` 可将主分支的新提交“插入”到你的分支底部，减少最终合并冲突。

### 注意事项（`rebase` 的风险）：

- **不要对已推送的公共分支使用 `rebase`**！ 重写历史会破坏其他开发者已拉取的分支，导致混乱。 ✅ 仅对**本地私有分支**使用 `rebase`。

### 操作对比：

| 场景                     | `git merge`              | `git rebase`                              |
| ------------------------ | ------------------------ | ----------------------------------------- |
| 合并 `main` 到 `feature` | 新增合并提交，历史有分叉 | 将 `feature` 提交移到 `main` 后，历史线性 |
| 历史记录                 | 保留完整分支结构         | 干净、一条直线                            |
| 适用分支                 | 公共分支、已推送的分支   | **本地/私有分支**                         |

### 简单示例：

```Bash
# 在 feature 分支上同步 main 的更新（保持线性）
git checkout feature
git rebase main

# 完成后合并到 main（此时可快进合并）
git checkout main
git merge feature  # 不会产生额外合并提交！
```

### 总结：

- **用 `rebase`**：整理**本地分支**历史，追求简洁线性提交。
- **用 `merge`**：合并**公共分支**，保留原始记录。

> 📌 黄金法则：**仅对尚未推送的提交使用 `rebase`！**




## 10.  复刻（fork）、分支（branch）和克隆（clone）之间有什么区别？

### 对比说明

| **特性**       | **复刻 (Fork)**                                              | **分支 (Branch)**                                            | **克隆 (Clone)**                                             |
| -------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **作用域**     | 仓库级别(服务器之间)                                         | 仓库内部                                                     | 仓库到本地                                                   |
| **发生位置**   | 代码托管平台(如GitHub)                                       | 同一Git仓库内                                                | 本地计算机                                                   |
| **主要目的**   | 创建个人副本用于贡献或实验                                   | 隔离开发新功能/修复问题                                      | 获取仓库完整副本到本地                                       |
| **所有权**     | 创建属于你的新仓库                                           | 原仓库的一部分                                               | 本地副本，指向原远程仓库                                     |
| **权限要求**   | 不需要原仓库写权限                                           | 需要原仓库写权限                                             | 只需要原仓库读权限                                           |
| **典型工作流** | 1. Fork原仓库<br />2. Clone你的fork<br />3. 创建分支开发<br />4. 推送分支到你的fork<br />5. 发起Pull Request | 1. 创建新分支<br />2. 在分支上开发<br />3. 提交更改<br />4. 合并回主分支 | 1. 克隆仓库到本地<br />2. 在本地工作<br />3. 提交更改<br />4. 推送回远程仓库 |
| **协作场景**   | 向没有写权限的项目贡献代码                                   | 在有写权限的项目中协作开发                                   | 获取代码到本地开始工作                                       |

1. **克隆 (`git clone`)**
   - **是什么？** 将**整个远程仓库**复制到你的**本地计算机**上的操作。
   - **作用域：** 从**远程服务器** (如 GitHub, GitLab, Bitbucket) 到**你的本地机器**。
   - **目的：** 获取项目代码的完整副本，包括所有历史记录、分支和标签，以便你可以在本地工作（编辑、编译、测试、提交）。
   - 关键点：
     - 你通常克隆的是你有**读取权限**的仓库（可能是原始仓库，也可能是你 Fork 出来的仓库）。
     - 克隆后，你的本地仓库会有一个默认的远程连接（通常叫 `origin`），指向你克隆的那个远程仓库。
     - 这是你开始为任何 Git 项目工作的**第一步**（无论是原始项目还是 Fork 出来的项目）。
2. **分支 (`git branch`, `git checkout -b`)**
   - **是什么？** 在**同一个 Git 仓库内**创建的**开发线**。它本质上是某个提交点（通常是 `HEAD`）的一个**可移动的指针**。
   - **作用域：** **仅限于单个仓库内部**（无论是本地仓库还是远程仓库）。分支存在于仓库中。
   - 目的：
     - **隔离开发：** 允许你在不影响主代码（如 `main` 或 `master` 分支）的情况下独立开发新功能、修复错误或进行实验。
     - **并行工作：** 多个开发者可以在同一个仓库的不同分支上同时工作。
     - **版本管理：** 代表代码的不同状态（稳定版、开发版、功能 A 版、修复 B 版等）。
   - 关键点：
     - 分支是 Git 工作流的**核心**。几乎所有开发都在分支上进行。
     - 创建和切换分支非常轻量且快速，因为 Git 只是创建了一个新的指针。
     - 开发完成后，分支的更改需要**合并**（`git merge`）或**变基**（`git rebase`）回另一个分支（通常是主分支）。
     - 分支操作主要在**本地**进行，但你需要将分支**推送**（`git push`）到远程仓库，以便与他人共享你的工作或备份。
3. **复刻 (`fork` - 通常指 GitHub/GitLab 等平台的操作)**
   - **是什么？** 在**代码托管平台**上，创建某个仓库的**一个独立的、属于你账户的副本**的操作。
   - **作用域：** 在**代码托管平台**上，从一个仓库（源仓库/上游仓库）到**你的账户下的一个新仓库**。
   - 目的：
     - 贡献开源项目：这是为你没有直接推送权限的开源项目做贡献的标准方式。
       1. 你 Fork 原始项目到自己的账户下（现在你有一个完全独立的副本）。
       2. 你克隆**你的 Fork** 到本地机器。
       3. 你在本地仓库中创建一个新分支进行更改。
       4. 你将更改提交并推送回**你的 Fork**。
       5. 你向原始项目的维护者发起一个 **Pull Request**，请求他们将你 Fork 中分支的更改拉取（合并）到原始项目。
     - **独立实验/衍生项目：** 你想以某个项目为基础启动自己的项目，或者在不影响原项目的情况下进行重大实验。
   - 关键点：
     - Fork 是一个**服务器端**的操作（在 GitHub/GitLab 等平台上点击 Fork 按钮）。
     - Fork 创建了一个**全新的、独立的仓库**，这个仓库**最初是原仓库的完整副本**，包括所有分支、标签和提交历史。
     - **你拥有 Fork 出来的仓库**，你可以随意修改它。
     - Fork 出来的仓库**默认与原仓库没有自动同步关系**。如果原仓库更新了，你需要手动将这些更新拉取（`git pull`）到你的本地克隆，然后再推送回你的 Fork 以保持同步（或者配置上游远程 `upstream` 来跟踪原仓库）。
     - **协作的核心在于 Pull Request**：这是你将 Fork 中的更改反馈给原始项目的主要机制。

**总结与关系：**

1. **`clone` 是起点：** 无论你要做什么（在原项目上工作，还是贡献给别人的项目），第一步通常都是 `clone` 一个远程仓库（原始仓库或你 Fork 出来的仓库）到本地。
2. **`branch` 是日常工作方式：** 一旦你有了本地仓库，你就会在 `branch` 上进行实际的功能开发或 bug 修复。这是管理代码变更的基本单位。
3. **`fork` 是协作和访问控制的桥梁：** 当你没有权限直接推送到你感兴趣的原始仓库时，`fork` 让你在自己的空间拥有一个副本。你在这个副本（通过 `clone` 到本地）上创建 `branch` 进行开发，然后通过 Pull Request 请求原始仓库接受你的更改。`fork` 也用于创建项目的独立衍生版本。

**简单类比：**

- **`clone`：** 就像去图书馆借一本书（项目）回家。你现在有了一本完整的书可以阅读和做笔记（在本地工作）。
- **`branch`：** 就像你在自己的那本书里，拿出一个活页夹，开始写新的一章（新功能）。这本书还在你家里（本地仓库）。你可以写很多不同的章节（分支），而不会弄乱原来的书页（主分支）。写完后，你可以决定把这章加回书里（合并）。
- **`fork`：** 就像图书馆不允许你在原书上写字，所以你请求图书馆复印一整本书给你。现在你拥有了这本书的一个完全属于你的副本（你账户下的仓库）。你可以在这本复印的书上任意涂写、修改（在分支上开发）。如果你觉得你修改的章节特别好，你可以把它交给图书馆管理员（发起 Pull Request），建议他们把你这章加到图书馆的原书里。




## 11. git cherry-pick 详解

`git cherry-pick` 是一个强大但需谨慎使用的 Git 命令，它的核心作用是将**某个提交（commit）的更改**应用到**当前所在的分支**上。你可以把它想象成从一个分支上“采摘”特定的“樱桃🍒”（提交），然后“嫁接”到另一个分支上。

**主要作用：**

1. **选择性移植提交：** 当你想把某个分支（比如 `feature-bugfix`）上的 **一个或几个特定提交**（而不是整个分支的所有改动）应用到另一个分支（比如 `main` 或 `release`）时使用。

2. **绕过合并：** 在某些情况下，你不想（或不能）将一个分支完全合并（`merge`）或变基（`rebase`）到另一个分支（可能是因为那个分支包含了很多你暂时不想要的改动），你只想提取其中关键的修复或特性。

3. **移植热修复**：

   最常见的使用场景之一。例如：

   - 你在 `main` 分支上发现一个严重 Bug。
   - 你基于 `main` 创建一个热修复分支 `hotfix-123` 来修复它，并提交了修复代码（比如提交 `a1b2c3d`）。
   - 你的团队可能还有一个正在开发的 `next-release` 分支（包含很多新特性，但还不稳定）。
   - 你需要把这个热修复同时应用到 `main` 分支（立即部署）和 `next-release`分支（确保下一个版本也修复了）。你可以：
     - 将 `hotfix-123` 分支合并回 `main`。
     - **切换到 `next-release` 分支，然后执行 `git cherry-pick a1b2c3d`**，将修复提交 `a1b2c3d` 单独“摘”过来应用到 `next-release` 分支上，而无需合并整个 `hotfix-123` 分支（可能包含与 `next-release` 无关的配置等）或等待 `main` 完全合并到 `next-release`。

4. **恢复丢失的提交：** 如果不小心在一个分支上重置（`reset`）或删除了分支，导致某个有用的提交“丢失”了（但你知道它的 commit hash），你可以在其他分支上找到它或者从 reflog 中找到它的哈希值，然后用 `cherry-pick` 把它“救”回某个分支。

5. **代码复用：** 如果某个提交包含的通用功能或工具类修改需要在多个特性分支中使用，可以用 `cherry-pick` 把它应用到这些分支上。

**工作原理：**

1. **识别提交：** 你提供目标提交的哈希值（或者引用如分支名、标签名，Git 会取该分支/标签指向的提交）。
2. **计算差异：** Git 会计算该提交与其父提交之间的差异（即该提交引入了哪些修改）。
3. **应用差异：** Git 尝试将计算出的差异应用到**当前分支**的最新提交（HEAD）上。
4. **创建新提交：** 如果应用成功（没有冲突），Git 会将应用后的更改作为一个**全新的提交**添加到当前分支上。**关键点：这个新提交拥有一个全新的、不同于原提交的哈希值。**

**重要的区别与注意事项：**

- 与 `merge`/`rebase` 的区别：

  - `merge`：将两个分支的历史“交汇”在一起，创建一个合并提交，包含两个分支的所有改动。
  - `rebase`：将一个分支的所有提交重新在另一个分支的顶端“重放”一遍，修改提交历史使其更线性。
  - `cherry-pick`：**只复制特定提交的更改内容**，并将其作为新提交添加到当前分支。**它不关心或复制原提交的上下文、历史顺序或父提交关系。**

- 新的提交，新的哈希值：

  Cherry-pick 创建的是内容相同（如果无冲突）但历史背景完全不同的新提交。这意味着：

  - 原提交和 cherry-pick 过来的提交在 Git 历史中是**两个独立的、无关联的**提交（尽管内容可能一样）。
  - 它们有不同的提交者/作者信息和时间戳。
  - 它们有不同的父提交。

- **可能引发冲突：** 如果目标提交的更改与当前分支 HEAD 的内容存在重叠（修改了相同文件的相同区域），Git 会报告冲突，需要你手动解决冲突（就像解决 `merge` 冲突一样），然后完成 cherry-pick 过程（`git cherry-pick --continue`）或放弃（`git cherry-pick --abort`）。

- 潜在问题：

  - **提交碎片化：** 过度或不当使用 cherry-pick 可能导致相同逻辑的更改以多个不同哈希值的提交分散在历史中，使历史变得混乱，难以追踪完整的改动上下文。
  - **依赖性问题：** 如果 cherry-pick 的提交依赖于它之前的某个提交（该提交没有被 cherry-pick），那么移植过来的代码可能无法正常工作或编译。
  - **重复提交：** 如果不小心对同一个提交进行了多次 cherry-pick（尤其是在多个分支上操作时），会导致重复的更改，可能引入意料之外的错误。

- **最适合的场景：** **移植独立的、原子性的修复提交（如热修复）** 到多个目标分支。对于需要保持完整历史关联的特性分支，通常 `merge` 或 `rebase` 是更优选择。

**基本用法：**

1. 切换到你要应用更改的目标分支（例如 `main` 或 `release`）：

```Bash
git checkout target-branch
```

2. 执行 cherry-pick 命令，指定源提交的哈希值：

```Bash
git cherry-pick <commit-hash>  # 例如 git cherry-pick a1b2c3d
```

3. 如果发生冲突：

   - 手动解决冲突文件。

   - 使用 `git add <resolved-file>` 标记冲突已解决。

   - 继续 cherry-pick 进程：`git cherry-pick --continue`。

   - 或者放弃：`git cherry-pick --abort`

4. 成功应用后，目标分支上会新增一个包含源提交改动的全新提交。

**简而言之：`git cherry-pick` 是将其他分支上的单个（或多个）特定提交的“更改内容”精确复制到当前分支的工具，非常适用于移植热修复或选择性复用代码，但需注意它创建的是独立的新提交，并可能带来历史碎片化风险，应谨慎使用。**



## 12. 本地仓库关联远程仓库的场景，以及如何操作

将本地仓库关联到远程仓库是 Git 协作开发的基础操作，以下是常见场景及详细操作指南：

### ️ 🔑 **关联远程仓库操作步骤**

#### **场景 1：首次关联空远程仓库**

> 本地已存在项目目录，需要上传到新建的远程仓库（如 GitHub/GitLab 空仓库）

```Bash
# 进入本地仓库目录
cd /path/to/your/local-repo

# 添加远程仓库（通常命名为 origin）
git remote add origin https://github.com/yourname/repo.git

# 验证关联
git remote -v
# 输出应显示：
# origin  https://github.com/yourname/repo.git (fetch)
# origin  https://github.com/yourname/repo.git (push)

# 首次推送并建立跟踪关系（以 main 分支为例）
git push -u origin main
# -u 参数设置上游跟踪，后续可直接用 git push
```

#### **场景 2：更改现有远程地址**

> 远程仓库 URL 变更（如从 HTTPS 切换为 SSH，或迁移到新平台）

```Bash
# 查看当前关联
git remote -v

# 修改远程 URL
git remote set-url origin https://new.url/repo.git

# 或删除后重新添加
git remote remove origin
git remote add origin https://new.url/repo.git
```

#### **场景 3：关联多个远程仓库**

>  同时推送代码到多个远程仓库（如 GitHub + Gitee 镜像）

```Bash
# 添加主仓库
git remote add github https://github.com/your/repo.git

# 添加镜像仓库
git remote add gitee https://gitee.com/your/repo.git

# 推送到不同远程
git push github main
git push gitee main

# 查看所有远程
git remote -v
# 输出：
# github  https://github.com/your/repo.git (fetch)
# github  https://github.com/your/repo.git (push)
# gitee   https://gitee.com/your/repo.git (fetch)
# gitee   https://gitee.com/your/repo.git (push)
```

#### Bash**场景 4：关联 Fork 的仓库（开源贡献）**

> 将他人仓库 fork 到自己的账户后，关联到本地进行开发

```Bash
# 克隆你自己的 fork
git clone https://github.com/yourname/project.git

# 进入目录
cd project

# 添加原始仓库为 upstream（方便同步更新）
git remote add upstream https://github.com/original/project.git

# 验证
git remote -v
# 输出：
# origin    https://github.com/yourname/project.git (fetch/push)
# upstream  https://github.com/original/project.git (fetch/push)

# 同步原始仓库更新
git fetch upstream
git merge upstream/main
```

### ⚠️ **常见问题解决方案**

1. **权限错误（认证失败）**

```Bash
# HTTPS协议：更新凭证缓存
git config --global credential.helper cache

# SSH协议：检查密钥配置
ssh -T git@github.com  # 测试连接
```

2. **分支名称冲突**

```Bash
# 推送不同名分支
git push -u origin local-branch:remote-branch
```

3. **远程仓库非空**

```Bash
# 强制推送（谨慎使用）
git push -f origin main
# 或先拉取合并
git pull origin main --allow-unrelated-histories
```

### 🔍 **管理远程仓库高级技巧**

```Bash
# 重命名远程
git remote rename origin prod

# 查看远程详情
git remote show origin

# 删除远程
git remote remove backup

# 修改推送URL（保持拉取URL不变）
git remote set-url --push origin https://push-only.url/repo.git
```

### 🌐 **协议选择建议**

| 协议类型  | 适用场景            | 示例                               |
| --------- | ------------------- | ---------------------------------- |
| **HTTPS** | 快速上手/临时访问   | `https://github.com/user/repo.git` |
| **SSH**   | 安全需求高/免密推送 | `git@github.com:user/repo.git`     |
| **Git**   | 内网高速访问        | `git://internal-server/repo.git`   |

> 💡 **最佳实践**：
>
> - 个人项目推荐 SSH 协议
> - 首次关联后使用 `git push -u origin main` 建立追踪关系
> - 定期使用 `git remote -v` 检查关联状态



## 13. 简述如何解决git冲突

解决 Git 冲突是版本协作中的关键技能，以下是清晰的解决流程和实用技巧：

### 🔍 **冲突识别**

当执行以下操作时可能触发冲突：

```Bash
git merge   # 分支合并
git rebase  # 变基操作
git pull    # 拉取远程更新
git cherry-pick # 拣选提交
```

Git 会明确提示：

```
 CONFLICT (content): Merge conflict in <文件名>
Automatic merge failed; fix conflicts and then commit the result.
```

### 🛠️ **解决冲突四步法**

#### **步骤 1：定位冲突文件**

```Bash
git status
```

查看 **Unmerged paths** 部分，确认所有冲突文件（标记为 `both modified`）

#### **步骤 2：手动解决冲突**

打开冲突文件，会看到标准冲突标记：

```js
#<<<<<<< HEAD
当前分支的代码 (例如：main分支)
=======
要合并分支的代码 (例如：feature分支)
#>>>>>>> feature
```

**解决方案：**

1. 保留当前分支代码 → 删除 `<<<<<<< HEAD` 到 `=======` 的内容
2. 保留传入分支代码 → 删除 `=======` 到 `>>>>>>> feature` 的内容
3. **最佳实践：手动整合两者** → 保留需要的部分后删除所有冲突标记

#### **步骤 3：标记冲突已解决**

```Bash
# 单个文件解决后
git add <文件名>

# 全部冲突解决后
git add .
```

#### **步骤 4：完成操作**

```Bash
# 合并操作后
git commit -m "Resolve merge conflicts"

# 变基操作后
git rebase --continue

# 拣选提交后
git cherry-pick --continue
```

### ⚙️ **高效工具推荐**

1. **VS Code 冲突编辑器** 打开冲突文件 → 点击行号旁的提示图标一键选择修改方案
2. **图形化工具**

```Bash
git mergetool  # 调用配置的diff工具 (如meld, kdiff3)
```

3. **命令行查看冲突**

```Bash
git diff --name-only --diff-filter=U  # 仅列出冲突文件
```

### 🚨 **特殊场景处理**

**场景 1：放弃解决**

```Bash
git merge --abort      # 终止合并
git rebase --abort     # 终止变基
```

**场景 2：接受特定版本**

```Bash
# 使用当前分支版本覆盖
git checkout --ours <文件>

# 使用传入分支版本覆盖
git checkout --theirs <文件>
```

**场景 3：复杂二进制文件冲突** 建议重新下载文件：

```Bash
rm conflicted_image.jpg
git checkout HEAD -- conflicted_image.jpg
```

### 💡 **防冲突技巧**

1. **频繁拉取更新**

```Bash
git pull --rebase  # 使用变基式拉取
```

2. **小步提交** 避免大块代码一次性提交

3. 团队规范

   - 约定文件修改权限

   - 使用 `.gitattributes` 配置合并策略

```Bash
*.json merge=union   # JSON文件自动合并
*.lock binary        # 锁文件禁止合并
```

### 📝 **冲突解决示例**

**原始冲突文件：**

```JavaScript
// app.js
# <<<<<<< HEAD
const apiUrl = "https://production-api";
=======
const apiUrl = "https://staging-api";
# >>>>>>> feature
```

**解决后：**

```JavaScript
// app.js
const apiUrl = process.env.PRODUCTION 
  ? "https://production-api"
  : "https://staging-api";
```

**终端操作：**

```Bash
git add app.js
git commit -m "智能配置API地址"
```

> **关键原则**：解决冲突本质是**人工决策代码最终形态**的过程,仔细比对代码意图，测试验证后再提交，复杂的冲突应及时与协作者沟通。





## 14. 如何重新设置 commit 信息？

**修改最近一次commit**

```Bash
git commit --amend
```

- 执行后会打开默认编辑器（如 Vim/VSCode）
- 修改提交信息后保存退出
- **注意**：会生成新的 commit hash（修改历史）

**快捷方式**（不打开编辑器）：

```bash
git commit --amend -m "新的提交信息"
```



## 15. 新建 Git 功能分支步骤及指令说明

#### 1. **切换到基础分支** (通常是 `main`/`master`)

```Bash
git checkout main
```

- 确保从最新稳定分支创建新功能分支
- 使用 `git pull` 可先同步远程更新

#### 2. **创建并切换新分支**

```Bash
git checkout -b feature/new-feature
```

- `-b`：创建并切换分支
- `feature/new-feature`：推荐使用 `feature/` 前缀 + 描述性名称

#### 3. **开发并提交变更**

```Bash
# 修改文件后...
git add .
git commit -m "实现新功能X的核心逻辑"
```

- `add .`：暂存所有修改
- `commit -m`：提交变更并添加清晰描述

#### 4. **推送分支到远程**（首次推送）

```Bash
git push -u origin feature/new-feature
```

- `-u`：建立分支跟踪关系（后续只需 `git push`）
- 将本地分支关联到远程同名分支

### 🚀 完整流程示例

```Bash
# 1. 更新主分支
git checkout main
git pull
=======
>>>>>>> 651273ab9684a4cd1d0ae22332865bc60b4698a1

# 2. 创建功能分支
git checkout -b feature/user-auth

# 3. 开发提交（重复多次）
git add .
git commit -m "添加登录页面UI"
# ...更多开发提交...

# 4. 推送到远程
git push -u origin feature/user-auth
```

### 📌 关键说明

1. **分支命名规范**
   - 使用`feature/`、`fix/`等前缀
   - 例如：`feature/payment-integration`
2. **跟踪关系验证**

```Bash
git branch -vv
```

- 查看分支是否关联远程（显示 `[origin/feature/...]`）

3. **合并准备** 完成开发后：

```Bash
# 切换回主分支
git checkout main

# 合并功能分支
git merge feature/new-feature
```

> 💡 **最佳实践**：保持功能分支小巧且专注（生命周期 ≤ 2天），定期同步主分支变更（`git merge main`）







## 16. 查看 Git 提交历史的两种场景及指令

### 📄 **查看文件的提交历史**

```Bash
git log -- [文件路径]
```

- 说明：
  - 显示特定文件的所有修改记录
  - 添加 `-p` 查看具体代码变更：`git log -p -- [文件路径]`
  - 添加 `--oneline` 简化输出：`git log --oneline -- [文件路径]`

**示例**：

```Bash
# 查看 app.js 的修改历史
git log -- app.js

# 简略版+代码变更
git log --oneline -p -- src/components/Button.js
```

### 🌿 **查看分支的提交历史**

```Bash
git log [分支名]
```

- 常用参数
  - `--graph`：显示分支/合并的树形结构
  - `--decorate`：显示分支/标签指向
  - `--oneline`：单行显示提交信息
  - `-n [数字]`：限制显示数量（如 `-n 5` 显示最近5条）

**常用组合**：

```Bash
# 查看当前分支历史（图形化）
git log --graph --oneline --decorate

# 查看特定分支历史（如feat/login）
git log --oneline feat/login

# 对比两个分支差异
git log main..feature/new-api
```

### 🔍 高级历史查看技巧

#### **可视化工具**

```Bash
gitk [文件路径]       # 打开图形化历史查看器
git log --all         # 显示所有分支历史
```

#### **过滤搜索**

```Bash
# 按作者过滤
git log --author="John"

# 按时间过滤
git log --since="2023-01-01" --until="2023-02-01"

# 按提交信息关键词
git log --grep="BUGFIX"
```

#### **显示文件变更统计**

```Bash
git log --stat        # 显示每次提交的文件变更统计
git shortlog -sn      # 显示所有贡献者提交次数
```

### 📊 历史查看示例输出

**分支历史（`git log --oneline --graph`）**：

```
 * 4d3f2b1 (HEAD -> main) 合并支付功能
|\  
| * a8c9e0f (feat/payment) 添加支付回调
| * e7f1a4d 实现支付接口
|/  
* 02b5d3f 用户登录功能
* c1d8e7a 初始化项目
```

**文件历史（`git log --oneline -- utils.js`）**：

```
 f3a2b01 优化工具函数性能
d8e7c2a 修复空值处理BUG
a1b2c3d 添加通用工具函数
```

> 💡 **最佳实践**：
>
> - 日常开发使用 `git log --oneline -n 5` 快速查看最近提交
> - 定位问题时使用 `git blame [文件]` 查看每行最后修改信息
> - 复杂历史优先用 `gitk` 或 IDE 内置的 Git 图形工具




## 17. git 撤销操作全解

根据撤销范围分为四类场景，以下是核心方法和指令：

### **1. 撤销工作区修改（未 `git add`）**

```Bash
# 撤销单个文件修改  
git restore <file>  
# 或旧版命令  
git checkout -- <file>  

# 撤销所有未暂存修改（危险！）  
git restore .  
git checkout -- .
```

### **2. 撤销暂存区修改（已 `git add` 未 `git commit`）**

```Bash
# 将文件移出暂存区（保留修改）  
git restore --staged <file>  
# 或旧版命令  
git reset HEAD <file>  

# 撤销所有暂存（保留工作目录修改）  
git restore --staged .  
```

### **3. 撤销本地提交（已 `git commit`）**

| **场景**                       | **命令**                        | **效果**                     |
| ------------------------------ | ------------------------------- | ---------------------------- |
| 撤销最近提交（保留修改）       | `git reset --soft HEAD~1`       | 提交回退，修改保留在暂存区   |
| 撤销最近提交（保留修改未暂存） | `git reset HEAD~1` (默认 mixed) | 提交回退，修改保留在工作目录 |
| 彻底丢弃最近提交               | `git reset --hard HEAD~1`       | 提交和修改全部删除           |
| 撤销指定历史提交（不删提交）   | `git revert <commit-hash>`      | 生成逆向提交，保留原提交记录 |

### **4. 撤销远程提交（已 `git push`）**

```Bash
# 先本地撤销（如重置到旧提交）  
git reset --hard HEAD~1  

# 强制覆盖远程分支（需权限）  
git push --force origin <branch>  
# 安全强制推送  
git push --force-with-lease origin <branch>  
```

### 🔄 撤销场景对照表

| **操作阶段**      | **安全操作**                  | **危险操作**             |
| ----------------- | ----------------------------- | ------------------------ |
| 未 add            | `git restore <file>`          | `git restore .`          |
| 已 add 未 commit  | `git restore --staged <file>` | -                        |
| 已 commit 未 push | `git revert` / `reset --soft` | `git reset --hard`       |
| 已 push           | `git revert + push`           | `reset --hard + push -f` |

### 💡 特殊撤销技巧

1. **临时保存现场**

```Bash
git stash        # 保存未提交修改  
git stash pop    # 恢复修改  
```

1. **找回误删内容**

```Bash
git reflog       # 查看所有操作记录  
git reset HEAD@{2} # 重置到指定操作点  
```

1. **修改最后一次提交**

```Bash
git commit --amend  # 修改提交信息/内容  
```

### ⚠️ 黄金准则

1. **未推送的提交**：随意使用 `reset`
2. **已推送的提交**：
   - 个人分支 → `reset --hard + push --force-with-lease`
   - 共享分支 → **必须用 `git revert`**（避免历史重写）
3. **不确定时**：

```bash
git diff HEAD     # 查看将要丢失的修改  
git status        # 确认当前状态  
```



## 18. Git 中 HEAD、工作树和索引之间的区别？

Git 中的 **HEAD**、**工作树（Working Tree）** 和 **索引（Index / Staging Area）** 是三个核心概念，它们协同工作但职责不同：

### **1. 工作树（Working Tree）**

- **是什么**：本地文件系统中的实际目录（你直接编辑文件的地方）
- **职责**
  - 存放当前检出的文件（可被修改）
  - 反映磁盘上的实时文件状态
- **状态**
  - `git status` 显示的 **Unmodified**（未修改）/ **Modified**（已修改）/ **Untracked**（未跟踪）

### **2. 索引（Index / Staging Area）**

- **是什么**：介于工作树和版本库之间的 **暂存区**（.git/index 文件）
- **职责**
  - 临时存储 **下次提交的内容**
  - 通过 `git add` 将工作树的修改添加到索引
  - 通过 `git commit` 将索引内容固化为新提交
- **关键特性**
  - 是 **提交前的缓冲区**
  - 可选择性添加修改（部分文件/部分代码行）

### **3. HEAD**

- **是什么**：指向 **当前分支最新提交** 的指针（存储在 `.git/HEAD`）
- **职责**
  - 标记当前工作树的基础版本（`git checkout` 时切换的目标）
  - 指向当前分支（如 `ref: refs/heads/main`）
- **特殊状态**
  - `HEAD~1`：上一个提交
  - `HEAD@{n}`：在 `git reflog` 中的历史位置

### 🔄 **三者的协作流程**

![image-20251110233316270](https://raw.githubusercontent.com/qlHuo/images/main/imgs/20251110233316554.png)

#### **操作示例**：

1. **修改工作树文件** → 文件状态变为 `Modified`
2. **`git add file.txt`** → 将修改存入索引
3. **`git commit`** → 将索引内容提交，生成新提交并移动 `HEAD`

### 💡 **核心区别总结**

| **概念**   | **存储位置**      | **用户操作**            | **状态变化**       |
| ---------- | ----------------- | ----------------------- | ------------------ |
| **工作树** | 本地磁盘目录      | 直接编辑文件            | 文件内容实时变化   |
| **索引**   | `.git/index` 文件 | `git add`               | 记录下次提交的快照 |
| **HEAD**   | `.git/HEAD` 文件  | `git commit`/`checkout` | 指向当前提交位置   |

### ⚠️ **常见问题解析**

- **为什么修改后要 `git add`？** 工作树 → 索引：**选择性**控制哪些修改进入版本库。
- **`git status` 输出含义**：

```Bash
Changes not staged for commit:  # 工作树有修改，但未添加到索引
Changes to be committed:         # 修改已添加到索引（等待提交）
Untracked files:                # 工作树中存在但索引未跟踪的文件
```

- **`HEAD` 分离状态**：

```Bash
git checkout <commit-hash>  # HEAD 直接指向提交（非分支）
```

### 🌰 **生活化比喻**

- **工作树** → **照相馆的拍摄区**（随意更换服装/道具）
- **索引** → **选片台**（从照片中挑选要精修的）
- **HEAD** → **相册最新照片位置**（每次提交生成新照片）
- **`git commit`** → 将选中的照片（索引）放入相册（版本库）并更新最新位置（HEAD）

理解这三者的关系是掌握 Git 工作流的基础，尤其对高效使用 `git reset`、`git restore` 等高级操作至关重要！




## 19. 解释 Forking 工作流程的优点？

1. Forking 工作流程 与其他流行的 Git 工作流程有着根本的区别。它不是用单个服务端仓库充当“中央”代码库，而是为每个开发者提供自己的服务端仓库。Forking 工作流程最常用于公共开源项目中。

2. Forking 工作流程的主要优点是可以汇集提交贡献，又无需每个开发者提交到一个中央仓库中，从而实现干净的项目历史记录。开发者可以推送（push）代码到自己的服务端仓库，而只有项目维护人员才能直接推送（push）代码到官方仓库中。

3. 当开发者准备发布本地提交时，他们的提交会推送到自己的公共仓库中，而不是官方仓库。然后他们向主仓库提交请求拉取（pull request），这会告知项目维护人员有可以集成的更新。





## 20. GitHub Actions 与 Workflows 详解及前端应用



### 一、GitHub Actions 基础概念

#### 1.1 什么是 GitHub Actions

GitHub Actions 是 GitHub 提供的持续集成和持续交付（CI/CD）平台，允许开发者直接在 GitHub 仓库中创建、自定义和执行自动化工作流程。通过编写简单的配置文件，可实现诸如代码测试、构建、部署等任务的自动化。

#### 1.2 名词解释

- **Workflow（工作流）**：是一个可定制的自动化流程，由一个或多个按顺序执行的 jobs 组成。每个 workflow 由一个`.yaml`文件定义，存储在仓库的`.github/workflows`目录下。
- **Job（作业）**：是 workflow 中的一个独立任务，在同一个运行器（runner）上执行一系列步骤（steps）。例如，一个作业可以是运行测试，另一个作业可以是构建前端项目。
- **Step（步骤）**：是 job 中的单个操作，通常调用一个 action。
- **Action（动作）**：是执行特定任务的最小单位，比如检出代码、设置 Node.js 环境、运行测试脚本等。GitHub Marketplace 上有大量公开的 actions 可供复用。

## 二、Workflows 配置文件详解

### 2.1 文件结构与语法

Workflows 配置文件采用 YAML 语法。以下是一个简单的示例结构：

```yaml
name: My Frontend Workflow # 工作流名称
on:
  push:
    branches:
      - main # 监听main分支的推送事件
jobs:
  build-and-test: # 作业名称
    runs-on: ubuntu-latest # 使用最新的Ubuntu运行器
    steps:
      - name: Checkout code # 步骤名称
        uses: actions/checkout@v3 # 使用官方的检出代码action
      - name: Setup Node.js
        uses: actions/setup - node@v3
        with:
          node-version: '14' # 设置Node.js版本为14
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

### 2.2 on 字段 - 触发条件

`on`字段定义了 workflow 何时触发。常见的触发事件包括`push`（推送代码时）、`pull_request`（创建或更新拉取请求时）、`schedule`（按计划定时触发）等。例如：

```yaml
on:
  push:
    branches:
      - main
      - develop
  pull_request:
    types: [opened, synchronize, reopened]
  schedule:
    - cron: '0 2 * * *' # 每天凌晨2点触发
```

### 2.3 jobs 字段 - 作业定义

每个 job 包含以下关键部分：

- **runs-on**：指定运行作业的环境，如`ubuntu-latest`、`windows-latest`、`macos-latest`等。
- **steps**：定义作业执行的具体步骤，每个步骤可以是使用一个 action 或运行自定义脚本。

## 三、前端开发中的应用场景

### 3.1 代码测试自动化

在前端项目中，自动化测试至关重要。通过 GitHub Actions 可在每次代码推送或拉取请求时自动运行测试。例如，对于一个使用 Jest 进行单元测试的 React 项目：

```yaml
name: React Unit Tests
on:
  push:
    branches:
      - main
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Run Jest tests
        run: npm test -- --coverage
```

### 3.2 项目构建与打包

前端项目通常需要构建和打包。以 Vue 项目为例，可配置如下：

```yaml
name: Vue Build
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node - version: '14'
      - name: Install dependencies
        run: npm install
      - name: Build Vue project
        run: npm run build
```

### 3.3 部署到静态服务器（如 GitHub Pages）

GitHub Pages 是托管静态网站的便捷方式。对于一个纯 HTML/CSS/JavaScript 项目，可这样配置部署到 GitHub Pages：

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-github-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir:./dist # 假设构建输出目录为dist
```

这里使用了`peaceiris/actions - github - pages`这个 action，它会将指定目录（`publish_dir`）的内容部署到 GitHub Pages。

### 3.4 代码质量检查

可集成 ESLint、Prettier 等工具进行代码质量检查。例如：

```yaml
name: Code Quality Check
on:
  push:
    branches:
      - main
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14'
      - name: Install dependencies
        run: npm install
      - name: Run ESLint
        run: npm run lint
      - name: Run Prettier
        run: npm run prettier -- --check
```

## 四、注意事项

- **环境一致性**：确保在 GitHub Actions 运行器上的环境与本地开发环境一致，特别是 Node.js 版本、依赖包版本等。可通过`actions/setup - node`等 actions 精确控制环境版本。
- **安全与密钥管理**：涉及到部署密钥、API 密钥等敏感信息，应使用 GitHub 的 Secrets 功能进行安全存储，并在 workflow 中通过`secrets.SECRET_NAME`引用，避免将密钥直接暴露在配置文件中。
- **调试与日志查看**：GitHub Actions 提供详细的日志输出，可在仓库的 “Actions” 标签页中查看每个工作流、作业和步骤的执行日志，帮助排查问题。如果在运行自定义脚本时遇到问题，可通过添加`set -x`命令在脚本中开启调试模式，输出详细的执行信息。

参考：

[GitHub Actions 快速入门 - GitHub 文档](https://docs.github.com/zh/actions/get-started/quickstart)

[Github Actions 超详细教程，看这一篇就够了！ - 知行小屋](https://blog.natuie.net/posts/2025/02/06/055518/)

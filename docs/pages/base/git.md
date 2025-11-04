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
<<<<<<< HEAD
// 当前分支内容（main）
const API_URL = 'https://api.prod.com';
=======
// 合并分支内容（=======
// 合并分支内容（feat）
const API_URL = 'https://api.staging.com';
>>>>>>> feat-login
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




## 10. “拉取请求（pull request）”和“分支（branch）”之间有什么区别？

答案：

* 分支（branch） 是代码的一个独立版本。

* 拉取请求（pull request） 是当有人用仓库，建立了自己的分支，做了些修改并合并到该分支（把自己修改应用到别人的代码仓库）。




## 11. 什么是 Git 复刻（fork）？复刻（fork）、分支（branch）和克隆（clone）之间有什么区别？

答案：

* 复刻（fork） 是对存储仓库（repository）进行的远程的、服务器端的拷贝，从源头上就有所区别。复刻实际上不是 Git 的范畴。它更像是个政治/社会概念。

* 克隆（clone） 不是复刻，克隆是个对某个远程仓库的本地拷贝。克隆时，实际上是拷贝整个源存储仓库，包括所有历史记录和分支。

* 分支（branch） 是一种机制，用于处理单一存储仓库中的变更，并最终目的是用于与其他部分代码合并。




## 12. 使用过 git cherry-pick，有什么作用？

答案：

命令 git cherry-pick 通常用于把特定提交从存储仓库的一个分支引入到其他分支中。常见的用途是从维护的分支到开发分支进行向前或回滚提交。
这与其他操作（例如：合并（merge）、变基（rebase））形成鲜明对比，后者通常是把许多提交应用到其他分支中。

```
git cherry-pick <commit-hash>
```




## 13. 如何把本地仓库的内容推向一个空的远程仓库？

答案：

git init //生成.git 文件
git remote add origin 远程仓库地址 // 将本地和远程厂库关联起来
git add .
git commit -m '提交信息'
git push origin master // 将本地代码推送到库上




## 14. 提交时发生冲突，你能解释冲突是如何产生的吗？你是如何解决的？ 

答案：

### 1. 冲突是如何产生的

我们都知道，Git 的实现途径是 1 棵树。比如有一个节点树(point1),

- 我们基于 point1 进行开发，开发出了结点 point2；
- 我们基于 point1 进行开发，开发出了结点 point3；
  如果我们在 point2 和 point3 内操作了同一类元素，那么势必会导致冲突的存在。
  主要的思想如下图 1 所示:

point1.js

```js
function test() {
  console.log(a);
  var a = 1;
}
```

人物甲 更新了版本 2
代码: poin2.js

```js
function test() {
  console.log(a);
  var a = 2;
}
```

人物乙 更新了版本 3
代码: poin3.js

```js
function test() {
  console.log(a);
  var a = 3;
}
```

场景如下，甲乙都是根据 point.js 文件进行了开发。甲开发出了版本 2，并且提交了代码；乙开发出了版本 3，也需要提交了代码，此时将会报错存在冲突。

为什么呢？因为甲开发完了版本，提交了版本之后，此时远端的代码已经是版本 2 点代码了，而乙是基于版本 1 进行的开发出了版本 3。所以，乙想要提交代码，势必要将自己的代码更新为版本 2 的代码，然后再进行提交，如果存在冲突则解决冲突后提交

### 2. 冲突是如何解决的

上面已经详细的说明了冲突时如何产生的，那么又该如何解决冲突呢?

解决冲突通常使用如下的步骤即可:

- 情况 1 无冲突

先拉取远端的代码，更新本地代码。然后提交自己的更新代码即可。

- 情况 2 有冲突

拉取远端代码。存在冲突，会报错。
此时我们需要将本地代码暂存起来 stash；
更新本地代码，将本地代码版本更新和远端的代码一致即可；
将暂存的代码合并到更新后的代码后，有冲突解决冲突(需要手动进行解决冲突)；
提交解决冲突后的代码。






## 12. git提交代码时候写错commit信息后，如何重新设置commit信息？

答案：可以通过git commit --amend 来对本次commit进行修改。




## 13.说明新建一个GIT功能分支的步骤，提供每个步骤的指令，并对指令进行说明

答案：

git branch name     创建名字为name的branch

git checkout xxx_dev    切换到名字为xxx_dev的分支

git pull    从远程分支拉取代码到本地分支

git checkout -b main_furture_xxx    创建并切换到main_furture_xxx

git push origin main_furture_xxx    执行推送的操作，完成本地分支向远程分支的同步




## 14.说明git合并的两种方法以及区别

答案：

git代码合并有两种：git Merge 和 git ReBase

Git Merge：这种合并方式是将两个分支的历史合并到一起，现在的分支不会被更改，它会比对双方不同的文件缓存下来，生成一个commit，去push。

Git ReBase：这种合并方法通常被称为“衍合”。他是提交修改历史，比对双方的commit，然后找出不同的去缓存，然后去push，修改commit历史。




## 15.如何查看文件的提交历史和分支的提交历史

答案：

使用git log查看文件提交历史

git log filename

使用git log查看分支提交历史

git log branch file




## 16.如何从 git 中删除文件，而不将其从文件系统中删除？

答案：

如果你在 git add 过程中误操作，你最终会添加不想提交的文件。但是，git rm 则会把你的文件从你暂存区（索引）和文件系统（工作树）中删除，这可能不是你想要的。

换成 git reset 操作：

```
git reset filename          # or
echo filename >> .gitingore # add it to .gitignore to avoid re-adding it
```

上面意思是，`git reset <paths>` 是 `git add <paths>` 的逆操作




## 17.什么时候应使用 “git stash”？

答案：

git stash 命令把你未提交的修改（已暂存（staged）和未暂存的（unstaged））保存以供后续使用，以后就可以从工作副本中进行还原。




## 18.你能解释下 Gitflow 工作流程吗？

答案：

Gitflow 工作流程使用两个并行的、长期运行的分支来记录项目的历史记录，分别是 master 和 develop 分支。

* Master，随时准备发布线上版本的分支，其所有内容都是经过全面测试和核准的（生产就绪）。
Hotfix，维护（maintenance）或修复（hotfix）分支是用于给快速给生产版本修复打补丁的。修复（hotfix）分支很像发布（release）分支和功能（feature）分支，除非它们是基于 master 而不是 develop 分支。

* Develop，是合并所有功能（feature）分支，并执行所有测试的分支。只有当所有内容都经过彻底检查和修复后，才能合并到 master 分支。
Feature，每个功能都应留在自己的分支中开发，可以推送到 develop 分支作为功能（feature）分支的父分支。





## 19.Git 中 HEAD、工作树和索引之间的区别？

答案：

* 该工作树/工作目录/工作空间是你看到和编辑的（源）文件的目录树。
* 该索引/中转区（staging area）是个在 /.git/index，单一的、庞大的二进制文件，该文件列出了当前分支中所有文件的 SHA1 检验和、时间戳和文件名，它不是个带有文件副本的目录。
* HEAD是当前检出分支的最后一次提交的引用/指针。




## 20.解释 Forking 工作流程的优点？

答案：

* Forking 工作流程 与其他流行的 Git 工作流程有着根本的区别。它不是用单个服务端仓库充当“中央”代码库，而是为每个开发者提供自己的服务端仓库。Forking 工作流程最常用于公共开源项目中。

* Forking 工作流程的主要优点是可以汇集提交贡献，又无需每个开发者提交到一个中央仓库中，从而实现干净的项目历史记录。开发者可以推送（push）代码到自己的服务端仓库，而只有项目维护人员才能直接推送（push）代码到官方仓库中。

* 当开发者准备发布本地提交时，他们的提交会推送到自己的公共仓库中，而不是官方仓库。然后他们向主仓库提交请求拉取（pull request），这会告知项目维护人员有可以集成的更新。


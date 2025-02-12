# VUE3 + TS组件库搭建

## 一. 搭建monorepo环境

> 1.使用pnpm安装包速度快，磁盘空间利用率高效，使用pnpm可以快速建立monorepo，50~100个包的monorepo，pnpm的性能优势会非常明显。这里我们使用pnpm workspace 来实现monorepo。

```bash
npm install -g pnpm # 全局安装pnpm
pnpm init # 初始化package.json 私有库
pnpm install vue typescript -D # 全局下添加依赖
```

> 2.使用 pnpm必须要建立.npmrc文件，shamefully-hoist = true，否则安装的模块无法放置到node_module目录下

```bash
touch .npmrc # 创建.npmrc文件
echo "shamefully-hoist = true" >> .npmrc # 添加shamefully-hoist = true
pnpm tsc --init # 初始化tsconfig.json
```

> 3.pnpm-workspace.yaml 配置

```yaml
packages:
  - play # 存放组件测试的时候的代码
  - docs # 文档
  - "packages/**" 
```

> 4.在根目录下创建packages目录，并在packages目录下创建components、theme-chalk、utils目录，并在components、theme-chalk、utils目录下创建package.json文件。

```bash
mkdir -p packages/components packages/theme-chalk packages/utils
touch packages/components/package.json packages/theme-chalk/package.json packages/utils/package.json
```

> 5.在根目录.npmrc文件，添加link-workspace-packages = true // 链接工作包

```bash
touch .npmrc
echo "link-workspace-packages = true" >> .npmrc
```

> 6.在根目录package.json文件中，添加依赖

```bash
-w // 在workspace中安装
pnpm install @guan-chun/themechalk -w // 安装主题
pnpm install @guan-chun/components -w // 安装组件
pnpm install @guan-chun/utils -w // 安装工具
```

## 二. 实现组件play环境

```bash
pnpm create vite play --template vue-ts
cd play
pnpm install
```
> 1.创建typings目录，vue-shim.d.ts文件，声明 vue 文件
> 2.在根目录package.json文件中，添加以下内容

```bash
"dev": "pnpm -C play dev", # 启动play环境
```

## 三、通过JS实现BEM规范 utils/create.ts

## 四、实现icon组件

```bash
pnpm install unplugin-vue-define-options -D -w // 安装unplugin-vue-define-options // 自动生成组件的defineOptions
```

# 我的私房菜 🍳

> 一间温暖的私人厨房——集菜谱浏览、点菜下单、烹饪追踪于一体的纯前端 Web 应用

**我的私房菜** 是一个为家庭厨房场景设计的全功能菜谱管理系统。它以一套精心整理的 296 道中式菜品数据为基础，提供了优雅的点菜界面、完整的购物车与下单流程，以及强大的菜谱增删改查和烹饪进度追踪能力。整个应用完全基于浏览器端运行，无需任何后端服务。

<p align="center">
  <img src="https://img.shields.io/badge/recipes-296-暖橙" alt="296 recipes">
  <img src="https://img.shields.io/badge/categories-15-暖橙" alt="15 categories">
  <img src="https://img.shields.io/badge/pure--frontend-localStorage-brightgreen" alt="pure frontend">
</p>

---

## ✨ 功能亮点

### 🛒 温馨点菜体验
- **分类浏览**：15 个菜品分类（炒菜、炖菜、蒸菜、汤品……），一键切换
- **实时搜索**：在当前分类下按菜名或食材关键词即时筛选
- **购物车系统**：支持多选、数量调整，底部弹出式设计，操作流畅
- **下单确认**：温馨的确认卡片，替代冰冷的浏览器弹窗
- **订单记录**：历史订单可追溯，支持评价与反馈

### 📋 菜谱管理（增删改查）
- **全字段编辑**：菜名、分类、难度、时间、图片、食材清单、调料清单、制作步骤，所有信息均可修改
- **搜索式管理**：输入关键词快速定位目标菜谱，支持按菜名、分类、食材搜索
- **安全删除**：确认后移除，杜绝误操作

### 👨‍🍳 烹饪追踪
- **制作次数**：记录每道菜的烹饪频次
- **拿手菜标识**：累计 3 次以上五星好评自动点亮「拿手菜」徽章
- **星级评价**：用餐后可对菜品评分（1-5 星）并留下文字评论

### ❤️ 收藏 & 更多
- **收藏夹**：一键收藏心仪菜品，独立分类快速查看
- **今日菜单**：下单确认后自动加入当日菜单
- **响应式设计**：适配桌面与移动端，无论厨房还是客厅都能随手使用

---

## 🛠 技术栈

| 层面 | 技术 |
|------|------|
| 结构 | HTML5 语义化标签 |
| 样式 | CSS3 自定义属性、Flexbox、骨骼屏加载动画 |
| 逻辑 | 原生 JavaScript (ES6+)，SPA 单页架构 |
| 存储 | localStorage 本地持久化 |
| 图标 | Font Awesome 6 |
| 字体 | 系统字体栈（PingFang SC / Noto Sans SC） |

- **零依赖**：不依赖任何前端框架或构建工具
- **零服务器**：纯静态文件，`index.html` 即开即用

---

## 🚀 快速开始

### 方式一：直接打开
```bash
# 用浏览器直接打开 index.html
open index.html
```

### 方式二：本地 HTTP 服务器（推荐）
```bash
# Python
python -m http.server 3000

# 或 Node.js
npx http-server -p 3000

# 然后访问 http://localhost:3000
```

> **注意**：直接通过 `file://` 协议打开时，部分浏览器可能限制本地文件的跨域加载。推荐使用本地 HTTP 服务器。

---

## 📁 项目结构

```
├── index.html          # 主页面（SPA 入口）
├── styles.css          # 全局样式（暖奶油色系）
├── script.js           # 核心逻辑（RecipeManager + UIManager）
├── recipes-data.js     # 296 道菜品数据（~209KB）
├── recipes.json        # 菜品数据 JSON 副本
├── images/             # 菜品图片（~150 张）
└── CookLikeHOC-main/   # 上游数据源（详见致谢）
```

### 核心模块

- **`RecipeManager`** — 数据引擎，负责菜谱加载、localStorage 持久化、购物车状态、订单管理、评价系统
- **`UIManager`** — 界面控制器，管理三页面路由（点菜 / 菜谱 / 管理）、弹窗渲染、搜索筛选、表单处理

---

## 📖 使用指南

### 点菜页面
1. 点击分类标签浏览不同品类的菜品
2. 使用搜索框在当前分类下精确查找
3. 点击菜品卡片查看详情（食材、调料、步骤、历史评价）
4. 点击 ❤️ 收藏，点击 🛒 加入购物车
5. 右上角购物车图标 → 下单确认

### 菜谱管理页面
1. 切换到「管理」标签
2. 在搜索栏输入关键词，找到目标菜谱
3. 点击「编辑」进入全字段编辑模式（自动跳转到表单）
4. 点击「删除」移除菜谱
5. 表单下方可直接「添加新菜谱」

### 订单与评价
1. 点菜页完成下单后，历史订单显示在「菜谱」页
2. 待完成的订单可标记「完成」
3. 完成后可留下 1-5 星评价及文字评论
4. 评价将显示在对应菜品的详情页中

---

## 🎨 设计语言

| 属性 | 值 |
|------|-----|
| 主色调 | 暖奶油色 `#FDF8F3` |
| 强调色 | 珊瑚橙 `#E07A5F` |
| 圆角系统 | 8px / 16px / 24px / 999px |
| 卡片阴影 | `0 2px 12px rgba(0,0,0,0.04)` |
| 字体 | 系统字体栈，中文优先 PingFang SC |

整体风格温暖柔和，适合家庭厨房场景的日常使用体验。

---

## 🙏 致谢

### 菜品数据来源

本项目中的所有 296 道菜谱数据来源于开源项目 **[CookLikeHOC](https://github.com/Gar-b-age/CookLikeHOC)**，由 [@Gar-b-age](https://github.com/Gar-b-age) 及社区贡献者共同整理维护。

CookLikeHOC 项目基于**老乡鸡**（Laoxiangji）公开发布的 [《老乡鸡菜品溯源报告》](https://www.lxjchina.com.cn/display.asp?id=4226) 和 [《老乡鸡菜品溯源报告 2.0》](https://www.lxjchina.com.cn/info.php?class_id=102106)，将报告中的菜品配方、食材清单和制作步骤进行了系统化的数字化整理。该项目是纯粹的社区公益行为，与老乡鸡品牌无任何商业关联。

在此向以下贡献者致以诚挚谢意：

- **[Gar-b-age](https://github.com/Gar-b-age)** — CookLikeHOC 项目发起人，完成菜品数据的初始整理与结构化
- **[liucongg](https://github.com/liucongg)** — AI 手绘图版贡献
- **[honestAnt](https://github.com/honestAnt)** — Docker 部署支持
- **所有 CookLikeHOC 社区贡献者** — 校对、补充与持续维护
- **老乡鸡** — 公开菜品溯源报告，推动中餐标准化与透明化

> 本项目是 CookLikeHOC 数据的下游应用，聚焦于个人家庭厨房的菜谱管理与点菜体验场景。如果你对原始数据或更多菜品细节感兴趣，欢迎访问 [CookLikeHOC 官方仓库](https://github.com/Gar-b-age/CookLikeHOC) 及其 [在线网页](https://cooklikehoc.soilzhu.su)。

---

## 📄 许可

本项目中的菜谱数据继承自 CookLikeHOC 项目，遵循其原始许可。代码部分采用 MIT License。

---

## 🔮 路线图

- [ ] PWA 离线支持
- [ ] 数据导出 / 导入（JSON 一键备份恢复）
- [ ] 食材采购清单自动生成
- [ ] 营养信息展示
- [ ] 多设备数据同步

---

<p align="center">
  <sub>用心做饭，好好吃饭 ❤️</sub>
</p>
# home-cooking-recipes
# home-cooking-recipes
# home-cooking-recipes

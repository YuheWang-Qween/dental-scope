# Anatomy content requirements

Never add selectable anatomy without a meaningful description in every supported language (English, Swedish, German, Spanish and Latin). New named structures and atlas parts need their own content entry; paired left/right structures may share one entry. Generated tooth layers may share their tissue description.

Describe location and anatomical relationships, with function where relevant. Cite medical sources for new anatomical claims, distinguish schematic examples from measured anatomy, and retain draft status until expert review.

Run the description coverage tests and production build after adding anatomy or changing content resolution. `src/content/descriptionCoverage.ts` enforces this requirement in both tests and the Vite build. Do not bypass that guard or substitute generic filler text.

Keep changes within the existing registry, content, state, engine and UI architecture.

---

# Project context

## 项目概述
Dental Scope —— 开源交互式 3D 牙科解剖浏览器（Educational anatomical reference，非诊疗用途）。从全口（颌骨、牙龈、32 颗恒牙、神经、颞下颌关节）逐层深入到单颗牙的釉质、牙本质、髓腔与根管。支持剖面、分离解剖、按名称/编号/别称搜索、五语言界面（en/sv/de/es/la）、深链接、Quiz 模式。静态站点，构建全程由 Vite 自定义插件做 SEO（tooth/ 静态入口、guide 页、sitemap、robots）。

## 技术栈
- Vite 8 + React 19 + TypeScript(strict) + Three.js（命令式引擎）+ Zustand + glTF/meshopt 压缩
- 包管理器：pnpm（禁止 npm/yarn；`pnpm-lock.yaml` 为唯一锁文件）
- 资源管线：Python（NumPy/SciPy/scikit-image/trimesh）+ glTF Transform（`tools/pipeline/`）
- 测试：Vitest（单元）+ Playwright（e2e，对 production build 运行）
- 部署：纯静态产物 `dist/` 由平台按 service 方式提供（`scripts/serve.mjs` 静态服务，端口 5000）

## 目录结构
```
src/
  app/      路由（hash 路由由 BrowserRouter 处理需确认）、搜索/分享元数据、repo 链接
  anatomy/  结构注册表、牙齿编号表、命名法（anatomy is data）
  content/  多语言教育文本（JSON）+ 解析器
  search/   索引 + 打分
  state/    Zustand store、纯 visibility resolver
  engine/   Three.js 引擎：加载、材质、拾取、相机、explode、section、labels
  ui/       React 面板（无每帧渲染）
  modes/    Explore + Quiz
tools/pipeline/   BodyParts3D → production GLB
scripts/          预览/部署脚本（preview-build/run、build/run、serve.mjs）
```

## 关键入口 / 核心模块
- `src/main.tsx` React 入口；`index.html` 含 `<!-- seo: … -->` 标记（构建插件强校验）
- `public/models/manifest.json` 3D 资源清单（构建时由 `src/anatomy/registry.ts` + `descriptionCoverage.ts` 校验）
- `src/content/descriptionCoverage.ts`：解剖描述覆盖守卫（tests 与 Vite build 都强制执行，不得绕过）
- `src/anatomy/triangleBudgets.ts`：牙齿网格三角形预算守卫（build 时校验）
- `src/app/seo.ts` / `about.ts` / `credits.ts` / `guide.ts`：生成静态页面与 SEO 元数据

## 运行与预览
- 预览型项目（`preview_enable = "enabled"`）。`.coze` `[dev]` → `scripts/preview-build.sh`（pnpm install）+ `scripts/preview-run.sh`（vite dev，`0.0.0.0:5000`，端口从 `.preview` 读取，fallback 5000）
- 部署 `[deploy]` → `scripts/build.sh`（install + `vite build` → `dist/`）+ `scripts/run.sh`（`scripts/serve.mjs` 静态服务，端口 5000，SPA fallback 到 `404.html`）
- 本地命令：`pnpm dev`（5173）、`pnpm build`、`pnpm test`、`pnpm run typecheck`、`pnpm run lint`、`pnpm run test:e2e`（先 `npx playwright install chromium`）
- 注意：Vite dev 默认 5173，但平台预览只用 5000；`DS_BASE`/`DS_PREVIEW` 等环境变量影响构建产物与 SEO，平台预览构建不设 DS_BASE
- 修改解剖内容后必须跑覆盖测试 + production build（AGENTS.md 上文规则）

## 用户偏好与长期约束
- 论文/解剖内容：任何可点选解剖结构必须有五种语言（en/sv/de/es/la）的有意义描述；新结构/atlas 部件要独立条目；左右成对可共用；生成的牙层可共用组织描述。新解剖学论断要引用医学来源、区分 schematic vs measured、保持 draft 待专家评审
- 保持现有 registry/content/state/engine/UI 架构，不引入新框架
- 包管理器只用 pnpm

## 常见问题和预防
- 构建失败先说 `descriptionCoverage` / `triangleBudget` 守卫，别绕过守卫直接提交
- 添加解剖/改内容解析后忘记跑测试与 build → CI 会拦；本地先 `pnpm test` + `pnpm build`
- 端口：平台预览/部署固定 5000；系统保留 9000 不得使用
# website_design - Next.js Web Application
> Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS 4 + shadcn/ui

```
website_design/
├── src/
│   ├── app/                # App Router 路由层
│   │   ├── design-system/  # 设计系统展示页 (/design-system)
│   │   ├── layout.tsx      # 根布局
│   │   ├── page.tsx        # 首页 (/)
│   │   └── globals.css     # 全局样式 + 设计令牌
│   ├── components/
│   │   ├── layout/         # 布局组件 (Header, Hero, Footer)
│   │   └── ui/             # shadcn/ui 组件库
│   └── lib/
│       └── utils.ts        # cn() 工具函数
├── public/                 # 静态资源
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Commands
```bash
npm run dev     # 启动开发服务器 (localhost:3000)
npm run build   # 生产构建
npm run start   # 启动生产服务器
npm run lint    # ESLint 检查
```

## 核心原则

**⚠️ 一切设计必须来自设计系统的颜色和组件**

- 颜色：使用 `bg-background`、`text-foreground`、`text-muted-foreground` 等
- 组件：全部来自 `@/components/ui/` 目录
- 布局：使用 `container mx-auto px-4` 实现水平居中对齐
- 间距：遵循 Tailwind 的 spacing scale (4px 基准)

## Architecture
- **App Router**: 文件系统路由，`src/app/` 下文件自动映射为路由
- **路径别名**: `@/*` 映射到 `./src/*`
- **设计系统**: shadcn/ui 组件 + Tailwind CSS 令牌
- **字体**: Geist Sans + Geist Mono

## Conventions
- 组件使用 `export default function` 导出
- 样式使用 Tailwind CSS utility classes
- 类型使用 TypeScript 严格模式
- 文件头部注释遵循 L3 契约格式

[PROTOCOL]: 架构变更时更新此文件，保持与代码同构
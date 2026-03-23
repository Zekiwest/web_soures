import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button、Card
 * [OUTPUT]: 对外提供 AISection 组件
 * [POS]: 首页AI数字人区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const aiFeatures = [
  {
    title: "支持源码出售",
    description: "企业可掌控系统功能和数据，自主定制开发",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "OEM贴牌代理分销",
    description: "支持API对接与深度定制，满足多样需求",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "算力充值",
    description: "按需获取AI算力，高效处理智能任务",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

const aiTools = [
  {
    title: "可DIY界面",
    description: "拖拽组件、换皮肤，打造个性化操作面板",
  },
  {
    title: "邀请分佣",
    description: "分享邀请码，好友充值即可获得佣金",
  },
];

export function AISection() {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-16 text-white">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            AI数字人小程序，个人IP塑造神器
          </h2>
          <p className="mx-auto max-w-2xl text-purple-200">
            极速生成专属数字人，只需上传一段30秒的真人视频与声音就可以生成 1:1 数字人
          </p>
        </div>

        {/* 功能卡片 */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {aiFeatures.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20">
                  {feature.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-purple-200">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 工具展示 */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {aiTools.map((tool) => (
            <div
              key={tool.title}
              className="flex items-center justify-between rounded-xl bg-white/10 p-6 backdrop-blur-sm"
            >
              <div>
                <h3 className="mb-2 text-lg font-semibold">{tool.title}</h3>
                <p className="text-sm text-purple-200">{tool.description}</p>
              </div>
              <div className="h-16 w-16 rounded-lg bg-white/20" />
            </div>
          ))}
        </div>

        {/* 按钮 */}
        <div className="flex justify-center gap-4">
          <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100">
            获取演示
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            查看详情
          </Button>
        </div>
      </div>
    </section>
  );
}
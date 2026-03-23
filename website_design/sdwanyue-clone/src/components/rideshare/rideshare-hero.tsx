import { Button } from "@/components/ui/button";

/**
 * [INPUT]: 依赖 shadcn/ui Button
 * [OUTPUT]: 对外提供 RideshareHero 组件
 * [POS]: 网约车系统页面 Hero 区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export function RideshareHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-10 right-10 h-60 w-60 rounded-full bg-cyan-300 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-lg font-medium text-blue-200">
            —— 省钱 • 省时 • 省事 ——
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            让出行生意更简单
          </h1>
          <p className="mb-8 text-xl text-blue-100">
            出行产业数字化升级一站式SaaS自助服务平台
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              免费试用
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              了解详情
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
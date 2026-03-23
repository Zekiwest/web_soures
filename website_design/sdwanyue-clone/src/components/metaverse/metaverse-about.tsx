import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Badge
 * [OUTPUT]: 对外提供 MetaverseAbout 组件
 * [POS]: 元宇宙页面关于区域
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export function MetaverseAbout() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* 视频占位 */}
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-white/30">
                <svg
                  className="h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* 文字介绍 */}
          <div>
            <Badge className="mb-4 bg-purple-100 text-purple-600">
              ABOUT US
            </Badge>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              何为轻量元宇宙?
            </h2>
            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  轻量元宇宙
                </h3>
                <p>
                  是轻巧灵动、低用户成本的全新元宇宙形态。具有
                  <strong className="text-purple-600">
                    免安装、全平台、低成本
                  </strong>
                  等三大特性，全面采用HTML5和小程序免安装模式，可直接在浏览器、微信、淘宝等平台中运行，彻底解决企业元宇宙用户增长成本高的痛点。
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  Layaverse轻量元宇宙众创平台
                </h3>
                <p>
                  由中国领先的原创 3D 引擎提供商 LayaBox，历时四年研发的 3D
                  沉浸式元宇宙内容创作和运营平台。自2022年11月8号上线以来，Layaverse
                  已快速成长为"众创型"轻量元宇宙的代表。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
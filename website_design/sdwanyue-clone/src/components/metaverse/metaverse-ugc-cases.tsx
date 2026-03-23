import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 MetaverseUGCCases 组件
 * [POS]: 元宇宙页面UGC创作案例区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const ugcCases = [
  {
    title: "南开大学",
    description:
      "南开大学正式入驻Layaverse UGC元宇宙平台，标志着中国首家元宇宙新闻与传播学院正式上线",
    color: "from-blue-500 to-indigo-600",
  },
  {
    title: "会盟天下",
    description:
      "企业在元宇宙空间里完成新品发布、社区建设、日常会议、渠道管理、酒的销售、白酒生产流程3D化还原",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "中国展厅",
    description:
      "这个小宇宙包括雕塑艺术馆、书画艺术馆、音乐厅、休息厅以及7个装饰性建筑。在移动端呈现了一个较为真实的元宇宙世界",
    color: "from-red-500 to-pink-600",
  },
  {
    title: "芭莎艺术《未知的边界》元宇宙展",
    description:
      "通过艺术展与元宇宙的创新融合，打破空间和时间的限制，为观众带来真实与虚拟交相辉映的独特艺术感受",
    color: "from-purple-500 to-violet-600",
  },
  {
    title: "中国移动通信联合会",
    description:
      "在 Layaverse 中召开2022全球元宇宙大会「星火燎原计划」暨全球元宇宙大会产城联盟新闻发布会。",
    color: "from-cyan-500 to-blue-600",
  },
];

export function MetaverseUGCCases() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Layaverse-轻量元宇宙众创平台UGC创作案例
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ugcCases.map((item) => (
            <Card
              key={item.title}
              className="group overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-0">
                {/* 图片/视频占位 */}
                <div
                  className={`relative aspect-video bg-gradient-to-br ${item.color}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <button className="flex h-14 w-14 items-center justify-center rounded-full bg-white/30 text-white backdrop-blur-sm">
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* 文字 */}
                <div className="p-4">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
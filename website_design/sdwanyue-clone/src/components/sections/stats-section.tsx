/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 StatsSection 组件
 * [POS]: 首页数据展示区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const stats = [
  {
    value: "8年",
    label: "项目经验",
    description: "开发经验丰富 值得信赖",
    icon: "https://qiniugw.sdwanyue.com/20251119/01/8%E5%B9%B4icon.png",
  },
  {
    value: "16款",
    label: "软件产品",
    description: "覆盖多种行业 量身打造",
    icon: "https://qiniugw.sdwanyue.com/20251119/01/16%E6%AC%BEicon.png",
  },
  {
    value: "96人",
    label: "服务团队",
    description: "技术团队强大 专业售后",
    icon: "https://qiniugw.sdwanyue.com/20251119/01/96%E4%BA%BAicon.png",
  },
  {
    value: "2216家",
    label: "合作客户",
    description: "众多客户信赖 口碑好评",
    icon: "https://qiniugw.sdwanyue.com/20251119/01/2216icon%20%281%29.png",
  },
];

export function StatsSection() {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 p-4 rounded-xl transition-colors hover:bg-gray-50"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={stat.icon}
                  alt={stat.label}
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Text */}
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-[#01CF89]">
                    {stat.label}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
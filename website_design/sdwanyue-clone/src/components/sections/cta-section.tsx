import { Button } from "@/components/ui/button";

/**
 * [INPUT]: 依赖 shadcn/ui Button
 * [OUTPUT]: 对外提供 CTASection 组件
 * [POS]: 首页CTA行动召唤区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const stats = [
  { value: "7*24h", label: "技术团队支持" },
  { value: "99.99%", label: "全年服务可用性" },
  { value: "212个", label: "国家地区全覆盖" },
  { value: "20+", label: "行业技术解决方案" },
];

export function CTASection() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* 标题 */}
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            开启业务增长之旅，即享120,000分钟
          </h2>

          {/* 按钮 */}
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              免费试用
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              立即咨询
            </Button>
          </div>

          {/* 统计数据 */}
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="mb-2 text-2xl font-bold md:text-3xl">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";

/**
 * [INPUT]: 依赖 shadcn/ui Button
 * [OUTPUT]: 对外提供 RideshareCoverage 组件
 * [POS]: 网约车系统页面业务覆盖区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const stats = [
  { value: "300+", label: "已覆盖城市" },
  { value: "100+", label: "合作伙伴" },
  { value: "1000+", label: "千万级订单" },
];

export function RideshareCoverage() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-lg font-semibold text-blue-600">我们的</p>
          <h2 className="mb-8 text-3xl font-bold text-gray-900">业务覆盖</h2>

          <div className="mb-12 grid gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="mb-2 text-5xl font-bold text-blue-600">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">
            平台资质达国家网约车标准
          </h3>
          <p className="mb-6 text-blue-100">
            基于深厚的行业和技术积累，白龙马集团通过三级等保2.0的要求
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50"
          >
            免费试用 →
          </Button>
        </div>
      </div>
    </section>
  );
}
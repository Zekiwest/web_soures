import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 RideshareTeam 组件
 * [POS]: 网约车系统页面金牌团队服务区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const teamServices = [
  {
    title: "极速服务",
    highlight: "15天内即可交付上线",
    description: "7*24小时运维服务\n10分钟内售后响应",
  },
  {
    title: "运营教练",
    highlight: "提供平台经营的专业指导服务",
    description: "有效的花钱、有效的赚钱\n有运力就能加盟",
  },
  {
    title: "监管对接",
    highlight: "符合监管要求的数据处理服务",
    description: "覆盖300+城市的经验积累\n让对接更高效、更稳定",
  },
  {
    title: "资源撮合",
    highlight: "牌照等资质的撮合匹配",
    description: "成熟合作模式的支撑\n让资源价值最大化",
  },
];

export function RideshareTeam() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-lg">
            <span className="font-bold text-yellow-500">金牌</span>
            <span className="text-gray-900">团队·</span>
            <span className="font-bold text-blue-600">极致</span>
            <span className="text-gray-900">服务</span>
          </p>
          <p className="text-gray-600">
            专业、专心、专注，只为合作伙伴的安心
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {teamServices.map((service) => (
            <Card key={service.title} className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-3 font-medium text-blue-600">
                  {service.highlight}
                </p>
                <p className="whitespace-pre-line text-sm text-gray-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
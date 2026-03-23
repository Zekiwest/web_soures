import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Card, Badge
 * [OUTPUT]: 对外提供 RideshareServices 组件
 * [POS]: 网约车系统页面全场景业务类型区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const serviceTypes = [
  { name: "快车", icon: "🚗", hot: true },
  { name: "专车", icon: "🚙", hot: false },
  { name: "出租车", icon: "🚕", hot: false },
  { name: "城际", icon: "🚌", hot: true },
  { name: "接送机", icon: "✈️", hot: false },
  { name: "代驾", icon: "🍺", hot: false },
  { name: "客运", icon: "🚐", hot: false },
];

export function RideshareServices() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-lg font-semibold text-blue-600">全场景</p>
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            的业务类型
          </h2>
          <p className="text-gray-600">
            从短途「实时、预约」的市内用车到长途的城际用车，全场景覆盖
          </p>
        </div>

        <div className="mb-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-7">
          {serviceTypes.map((service) => (
            <Card
              key={service.name}
              className="group cursor-pointer border-0 shadow-md transition-all hover:shadow-lg"
            >
              <CardContent className="flex flex-col items-center p-4">
                <span className="mb-2 text-3xl">{service.icon}</span>
                <span className="relative text-sm font-medium text-gray-700">
                  {service.name}
                  {service.hot && (
                    <Badge className="absolute -right-8 -top-1 bg-red-500 px-1 text-[10px]">
                      HOT
                    </Badge>
                  )}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 快车解决方案详情 */}
        <Card className="mx-auto max-w-4xl border-0 bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg">
          <CardContent className="p-8">
            <h3 className="mb-4 text-xl font-bold text-gray-900">
              快车解决方案
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              可拎包入驻的一体化SaaS服务解决方案，自带生态流量，我们的宗旨是：
              <strong className="text-blue-600">省钱</strong>·帮您实现研发投入的边际成本；
              <strong className="text-blue-600">省时</strong>·15天内开首城；
              <strong className="text-blue-600">省事</strong>·高稳定、高可用的成熟服务。
            </p>
            <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700">
              了解详情 →
            </button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
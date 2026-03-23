import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 HospitalAdvantages 组件
 * [POS]: 医院系统页面优势区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const advantages = [
  { title: "多端适配", description: "包含APP、小程序、H5、公众号端等多端适配", icon: "📱" },
  { title: "DIY装修", description: "商城首页DIY自定义装修，个性化设计、更加灵活多变", icon: "🎨" },
  { title: "分布式部署", description: "分布式部署多台计算机，地域分散，构成松散耦合系统", icon: "🖥️" },
  { title: "完善对外接口", description: "商品、订单、用户等重要功能配备众多的对外接口", icon: "🔌" },
];

export function HospitalAdvantages() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">我们的优势</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv) => (
            <Card key={adv.title} className="border-0 bg-white text-center shadow-sm">
              <CardContent className="p-6">
                <span className="mb-4 block text-4xl">{adv.icon}</span>
                <h3 className="mb-2 font-semibold text-gray-900">{adv.title}</h3>
                <p className="text-sm text-gray-600">{adv.description}</p>
                <button className="mt-4 text-sm font-medium text-green-600 hover:underline">
                  了解更多 →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
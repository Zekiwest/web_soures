import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 出租车服务页面
 * [POS]: /rideshare/taxi 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "合规车辆", description: "正规出租车，合法合规运营" },
  { title: "打表计费", description: "按计价器收费，透明公正" },
  { title: "即时叫车", description: "附近出租车快速响应" },
  { title: "安全可靠", description: "全程录音录像，行程可追溯" },
];

const advantages = [
  { title: "覆盖广泛", description: "城市出租车全覆盖" },
  { title: "价格透明", description: "打表计费，无隐藏收费" },
  { title: "便捷支付", description: "支持现金、刷卡、电子支付" },
  { title: "投诉保障", description: "不满意可投诉，平台介入处理" },
];

export default function TaxiPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-500 to-teal-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">出租车服务</h1>
          <p className="mb-8 text-xl text-green-100">传统出租车，在线叫车更便捷</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-green-600 hover:bg-green-50">立即叫车</Button>
            <Button variant="outline" className="border-white text-white">了解详情</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">服务特点</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-gray-50 text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">平台优势</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((adv) => (
              <Card key={adv.title} className="border-0 bg-white text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{adv.title}</h3>
                  <p className="text-sm text-gray-600">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-500 to-teal-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">便捷出租车出行</h2>
        <p className="mb-8 text-green-100">正规出租车，打表计费，安全可靠</p>
        <Button className="bg-white text-green-600 hover:bg-green-50">立即咨询</Button>
      </section>
    </>
  );
}
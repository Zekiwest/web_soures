import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 专车服务页面
 * [POS]: /rideshare/special 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "高端车型", description: "B级以上舒适车型，宽敞空间" },
  { title: "专业司机", description: "严格筛选，服务培训认证" },
  { title: "优质服务", description: "车内整洁，免费WiFi、饮用水" },
  { title: "准时保障", description: "提前到达，延误赔付" },
];

const scenarios = [
  { title: "商务出行", description: "重要会议、客户接待、商务考察" },
  { title: "机场接送", description: "航班准点接送，行李协助" },
  { title: "专车包车", description: "按小时/按天包车服务" },
  { title: "家庭出行", description: "家庭出游、老人儿童接送" },
];

export default function SpecialCarPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">专车服务</h1>
          <p className="mb-8 text-xl text-amber-100">高端出行，尊享品质服务</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-amber-600 hover:bg-amber-50">立即预约</Button>
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
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">应用场景</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {scenarios.map((scenario) => (
              <Card key={scenario.title} className="border-0 bg-white text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{scenario.title}</h3>
                  <p className="text-sm text-gray-600">{scenario.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 to-orange-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">开启高端专车出行</h2>
        <p className="mb-8 text-amber-100">专业司机，优质服务，尊享出行体验</p>
        <Button className="bg-white text-amber-600 hover:bg-amber-50">立即咨询</Button>
      </section>
    </>
  );
}
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 客运服务页面
 * [POS]: /rideshare/passenger 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "在线购票", description: "手机购票，无需排队" },
  { title: "电子票务", description: "电子客票，扫码乘车" },
  { title: "实时查询", description: "班次查询，余票显示" },
  { title: "便捷退改", description: "在线退票、改签服务" },
];

const services = [
  { title: "长途客运", description: "跨省跨市长途客运票务服务" },
  { title: "短途客运", description: "城市周边短途客运服务" },
  { title: "定制客运", description: "点对点定制客运服务" },
  { title: "旅游包车", description: "团体旅游、企业包车服务" },
];

export default function PassengerPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-500 to-green-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">客运服务</h1>
          <p className="mb-8 text-xl text-emerald-100">在线购票，便捷出行</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50">立即购票</Button>
            <Button variant="outline" className="border-white text-white">了解详情</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">平台功能</h2>
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
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">服务类型</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="border-0 bg-white text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-emerald-500 to-green-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">在线购票，便捷出行</h2>
        <p className="mb-8 text-emerald-100">电子客票，扫码乘车，告别排队</p>
        <Button className="bg-white text-emerald-600 hover:bg-emerald-50">立即咨询</Button>
      </section>
    </>
  );
}
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 城际出行页面
 * [POS]: /rideshare/intercity 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "城际专线", description: "固定线路，定时发车，便捷出行" },
  { title: "上门接送", description: "市区内上门接送，直达目的地" },
  { title: "舒适座驾", description: "商务车型，宽敞舒适" },
  { title: "实惠价格", description: "拼车/包车灵活选择，性价比高" },
];

const services = [
  { title: "城际拼车", description: "多人拼车，分摊费用，经济实惠" },
  { title: "城际包车", description: "独享车辆，私密出行，灵活时间" },
  { title: "跨城顺风", description: "顺路车主，共享出行" },
  { title: "定制专线", description: "企业定制，批量出行解决方案" },
];

export default function IntercityPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-500 to-indigo-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">城际出行</h1>
          <p className="mb-8 text-xl text-blue-100">跨城出行，舒适便捷新选择</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">立即预约</Button>
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
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">出行方式</h2>
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

      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">开启城际便捷出行</h2>
        <p className="mb-8 text-blue-100">上门接送，直达目的地，省时省心</p>
        <Button className="bg-white text-blue-600 hover:bg-blue-50">立即咨询</Button>
      </section>
    </>
  );
}
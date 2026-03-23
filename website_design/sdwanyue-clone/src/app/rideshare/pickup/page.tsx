import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 接送机服务页面
 * [POS]: /rideshare/pickup 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "航班监控", description: "实时追踪航班，延误免费等待" },
  { title: "机场接送", description: "机场内指定地点接送，行李协助" },
  { title: "专业司机", description: "熟悉机场路线，服务规范" },
  { title: "多种车型", description: "经济/舒适/豪华，按需选择" },
];

const services = [
  { title: "接机服务", description: "航班落地后专车等候，送至目的地" },
  { title: "送机服务", description: "按时上门接送，送达机场航站楼" },
  { title: "往返接送", description: "往返机场一站式服务" },
  { title: "多人拼车", description: "机场拼车，分摊费用更实惠" },
];

export default function PickupPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-sky-500 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">接送机服务</h1>
          <p className="mb-8 text-xl text-sky-100">航班准点接送，出行无忧</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-sky-600 hover:bg-sky-50">立即预约</Button>
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

      <section className="bg-gradient-to-r from-sky-500 to-blue-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">航班准点接送</h2>
        <p className="mb-8 text-sky-100">航班监控，延误免费等待，行李协助</p>
        <Button className="bg-white text-sky-600 hover:bg-sky-50">立即咨询</Button>
      </section>
    </>
  );
}
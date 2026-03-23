import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 医疗陪诊系统页面
 * [POS]: /yiliao 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const services = [
  { title: "陪诊服务", description: "专业陪诊人员全程陪同就医" },
  { title: "代办问诊", description: "代办问诊、取药、缴费等服务" },
  { title: "在线预约", description: "提前预约挂号，减少排队等待" },
  { title: "健康档案", description: "建立个人健康档案，跟踪健康状况" },
];

export default function YiliaoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-600 to-teal-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">医疗陪诊系统</h1>
          <p className="mb-8 text-xl text-green-100">提供全流程就医陪同与代办服务</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-green-600 hover:bg-green-50">免费试用</Button>
            <Button variant="outline" className="border-white text-white">了解详情</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">服务内容</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="border-0 bg-gray-50 text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-600 to-teal-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">立即体验医疗陪诊服务</h2>
        <p className="mb-8 text-green-100">专业陪诊，让就医更轻松</p>
        <Button className="bg-white text-green-600 hover:bg-green-50">立即咨询</Button>
      </section>
    </>
  );
}
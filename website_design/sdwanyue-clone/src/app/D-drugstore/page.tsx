import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card, Badge
 * [OUTPUT]: 数字药店系统页面
 * [POS]: /D-drugstore 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "在线购药", description: "合规药品在线销售，支持处方药购买" },
  { title: "药师咨询", description: "专业药师在线用药指导" },
  { title: "电子处方", description: "在线开具电子处方，安全便捷" },
  { title: "药品配送", description: "O2O配送，快速送达" },
];

const services = [
  { title: "B2C药店商城", description: "面向消费者的在线药店平台" },
  { title: "O2O即时配送", description: "周边药店快速配送服务" },
  { title: "处方流转", description: "合规处方流转平台" },
  { title: "慢病管理", description: "慢性病用药管理与提醒" },
];

export default function DrugstorePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-600 to-teal-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">数字药店系统</h1>
          <p className="mb-8 text-xl text-green-100">合规安全的互联网药店解决方案</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-green-600 hover:bg-green-50">免费试用</Button>
            <Button variant="outline" className="border-white text-white">了解详情</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">核心功能</h2>
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
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">服务场景</h2>
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

      <section className="bg-gradient-to-r from-green-600 to-teal-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">开启数字药店新业态</h2>
        <p className="mb-8 text-green-100">合规经营，安全可靠，助力药店数字化转型</p>
        <Button className="bg-white text-green-600 hover:bg-green-50">立即咨询</Button>
      </section>
    </>
  );
}
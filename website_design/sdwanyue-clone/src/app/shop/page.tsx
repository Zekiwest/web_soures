import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 多商户商城系统页面（备用URL）
 * [POS]: /shop 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "多商户入驻", description: "支持商家自主入驻，平台审核管理" },
  { title: "独立店铺", description: "商家独立店铺装修，品牌展示" },
  { title: "订单管理", description: "订单处理、物流跟踪、售后管理" },
  { title: "资金结算", description: "平台分账、自动结算、财务报表" },
];

export default function ShopPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">多商户商城系统</h1>
          <p className="mb-8 text-xl text-emerald-100">B2B2C多商户电商平台解决方案</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-emerald-600 hover:bg-emerald-50">免费试用</Button>
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

      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">打造多商户电商平台</h2>
        <p className="mb-8 text-emerald-100">一站式电商解决方案</p>
        <Button className="bg-white text-emerald-600 hover:bg-emerald-50">立即咨询</Button>
      </section>
    </>
  );
}
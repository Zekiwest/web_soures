import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 采购系统页面
 * [POS]: /caigou 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "供应商管理", description: "供应商资质审核、分级管理" },
  { title: "采购订单", description: "在线询价、比价、下单采购" },
  { title: "库存管理", description: "实时库存监控、智能补货提醒" },
  { title: "财务对账", description: "采购账单管理、自动对账结算" },
];

const advantages = [
  { title: "降低采购成本", description: "多家比价，优化采购流程" },
  { title: "提高效率", description: "在线采购，减少人工操作" },
  { title: "透明可控", description: "全流程可追溯，杜绝暗箱操作" },
  { title: "数据驱动", description: "采购数据分析，优化决策" },
];

export default function CaigouPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-600 to-gray-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">采购系统</h1>
          <p className="mb-8 text-xl text-slate-100">企业级采购管理解决方案</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-slate-600 hover:bg-slate-50">免费试用</Button>
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
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">系统优势</h2>
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

      <section className="bg-gradient-to-r from-slate-600 to-gray-700 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">优化企业采购流程</h2>
        <p className="mb-8 text-slate-100">降本增效，数字化采购管理</p>
        <Button className="bg-white text-slate-600 hover:bg-slate-50">立即咨询</Button>
      </section>
    </>
  );
}
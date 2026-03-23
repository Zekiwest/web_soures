import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 代驾服务页面
 * [POS]: /rideshare/drive 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "专业代驾", description: "持证上岗，驾驶技术娴熟" },
  { title: "快速响应", description: "附近司机接单，最快15分钟到达" },
  { title: "安全保障", description: "保险保障，行程全程监控" },
  { title: "价格透明", description: "按里程计费，费用清晰明了" },
];

const scenarios = [
  { title: "酒后代驾", description: "饮酒后安全回家，拒绝酒驾" },
  { title: "商务代驾", description: "商务应酬、会议接送代驾" },
  { title: "疲劳代驾", description: "长途驾驶疲劳，专业司机接手" },
  { title: "新手代驾", description: "复杂路况、恶劣天气代驾" },
];

export default function DrivePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-rose-500 to-pink-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">代驾服务</h1>
          <p className="mb-8 text-xl text-rose-100">安全出行，拒绝酒驾</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-rose-600 hover:bg-rose-50">立即叫代驾</Button>
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

      <section className="bg-gradient-to-r from-rose-500 to-pink-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">安全出行，拒绝酒驾</h2>
        <p className="mb-8 text-rose-100">专业代驾司机，保障您和他人的安全</p>
        <Button className="bg-white text-rose-600 hover:bg-rose-50">立即咨询</Button>
      </section>
    </>
  );
}
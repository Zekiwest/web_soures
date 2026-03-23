import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 在线预约系统页面
 * [POS]: /yuyue 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const scenarios = [
  { title: "医疗预约", description: "医院挂号、体检预约、疫苗接种" },
  { title: "美容美发", description: "理发预约、美容SPA、美甲美睫" },
  { title: "健身运动", description: "健身房预约、私教课程、场馆预订" },
  { title: "餐饮预订", description: "餐厅订座、包间预订、宴会预约" },
];

const features = [
  { title: "在线预约", description: "用户自主选择时间，便捷预约" },
  { title: "智能排期", description: "自动避免冲突，优化资源分配" },
  { title: "提醒通知", description: "短信、APP推送预约提醒" },
  { title: "评价反馈", description: "服务评价、意见反馈收集" },
];

export default function YuyuePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-cyan-600 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">在线预约系统</h1>
          <p className="mb-8 text-xl text-cyan-100">智能预约管理，提升服务效率</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-cyan-600 hover:bg-cyan-50">免费试用</Button>
            <Button variant="outline" className="border-white text-white">了解详情</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">应用场景</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {scenarios.map((scenario) => (
              <Card key={scenario.title} className="border-0 bg-gray-50 text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{scenario.title}</h3>
                  <p className="text-sm text-gray-600">{scenario.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">核心功能</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-white text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">开启智能预约服务</h2>
        <p className="mb-8 text-cyan-100">提升用户体验，优化服务流程</p>
        <Button className="bg-white text-cyan-600 hover:bg-cyan-50">立即咨询</Button>
      </section>
    </>
  );
}
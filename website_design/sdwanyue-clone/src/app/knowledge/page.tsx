import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 知识付费系统页面（备用URL）
 * [POS]: /knowledge 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "多种付费形式", description: "视频、音频、图文、专栏等" },
  { title: "营销裂变", description: "拼团、优惠券、分销、秒杀" },
  { title: "会员体系", description: "会员等级、积分、权益管理" },
  { title: "数据分析", description: "多维度数据统计分析" },
];

export default function KnowledgePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">知识付费系统</h1>
          <p className="mb-8 text-xl text-purple-100">打造沉浸式学习与变现平台</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-purple-600 hover:bg-purple-50">免费试用</Button>
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

      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">开启知识变现之旅</h2>
        <p className="mb-8 text-purple-100">让知识创造价值</p>
        <Button className="bg-white text-purple-600 hover:bg-purple-50">立即咨询</Button>
      </section>
    </>
  );
}
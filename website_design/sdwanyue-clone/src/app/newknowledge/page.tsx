import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card, Badge
 * [OUTPUT]: 知识付费系统页面
 * [POS]: /newknowledge 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "多种付费形式", description: "支持视频、音频、图文、专栏等多种内容付费形式", icon: "📚" },
  { title: "营销裂变", description: "拼团、优惠券、分销、秒杀等多种营销玩法", icon: "🚀" },
  { title: "会员体系", description: "完善的会员等级、积分、权益管理", icon: "👑" },
  { title: "数据分析", description: "多维度数据统计，实时掌握运营状况", icon: "📊" },
];

const contentTypes = [
  { title: "视频课程", description: "支持录播视频、直播回放等多种视频内容" },
  { title: "音频专栏", description: "音频课程、播客专栏、有声读物" },
  { title: "图文内容", description: "图文教程、电子书、专栏文章" },
  { title: "直播课程", description: "实时直播、互动教学、连麦答疑" },
];

export default function KnowledgePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">知识付费系统</h1>
          <p className="mb-8 text-xl text-purple-100">
            打造沉浸式学习与变现平台，让知识创造价值
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-purple-600 hover:bg-purple-50">免费试用</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">了解详情</Button>
          </div>
        </div>
      </section>

      {/* 核心功能 */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">核心功能</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-gray-50 text-center">
                <CardContent className="p-6">
                  <span className="mb-4 block text-4xl">{feature.icon}</span>
                  <h3 className="mb-2 font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 内容形式 */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">多种内容形式</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {contentTypes.map((type) => (
              <Card key={type.title} className="border-0 bg-white">
                <CardContent className="p-4">
                  <Badge className="mb-2 bg-purple-100 text-purple-600">{type.title}</Badge>
                  <p className="text-sm text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-3xl font-bold">立即开启知识变现之旅</h2>
          <p className="mb-8 text-purple-100">8种付费形式 × 8种营销裂变，打造您的知识付费平台</p>
          <Button className="bg-white text-purple-600 hover:bg-purple-50">立即咨询</Button>
        </div>
      </section>
    </>
  );
}
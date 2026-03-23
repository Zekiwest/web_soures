import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card, Badge
 * [OUTPUT]: 教育培训Web端页面
 * [POS]: /jiaoyupeixun 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "课程管理", description: "支持多种课程形式，灵活配置课程内容", icon: "📚" },
  { title: "直播教学", description: "高清直播课堂，支持万人同时在线", icon: "🎥" },
  { title: "在线考试", description: "智能题库系统，自动批改评分", icon: "📝" },
  { title: "学习追踪", description: "学习进度可视化，数据统计报表", icon: "📊" },
];

const advantages = [
  { title: "多端同步", description: "PC端、移动端数据实时同步" },
  { title: "安全稳定", description: "企业级安全架构，保障数据安全" },
  { title: "灵活部署", description: "支持公有云、私有云、混合云部署" },
  { title: "专业服务", description: "7x24小时技术支持服务" },
];

export default function JiaoyupeixunPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-yellow-400 text-yellow-900">HOT</Badge>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">教育培训Web端</h1>
          <p className="mb-8 text-xl text-blue-100">
            专业的在线教育平台解决方案，助力培训机构数字化转型
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">免费试用</Button>
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

      {/* 平台优势 */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">平台优势</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((adv) => (
              <Card key={adv.title} className="border-0 bg-white">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{adv.title}</h3>
                  <p className="text-sm text-gray-600">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-3xl font-bold">开启在线教育新篇章</h2>
          <p className="mb-8 text-blue-100">一站式教育平台解决方案，助力机构快速发展</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">立即咨询</Button>
        </div>
      </section>
    </>
  );
}
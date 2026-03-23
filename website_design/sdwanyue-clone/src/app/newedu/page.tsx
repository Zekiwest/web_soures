import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 在线教育系统页面（备用URL）
 * [POS]: /newedu 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "直播课堂", description: "高清直播，支持万人同时在线" },
  { title: "互动白板", description: "实时互动，教学更高效" },
  { title: "课程管理", description: "灵活课程配置，多场景教学" },
  { title: "考试测评", description: "智能题库，自动批改评分" },
];

export default function NewEduPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">在线教育系统</h1>
          <p className="mb-8 text-xl text-blue-100">构建高效互动的在线教学平台</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">免费试用</Button>
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

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">开启在线教育新篇章</h2>
        <p className="mb-8 text-blue-100">一站式教育平台解决方案</p>
        <Button className="bg-white text-blue-600 hover:bg-blue-50">立即咨询</Button>
      </section>
    </>
  );
}
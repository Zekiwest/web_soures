import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 企业内训系统页面
 * [POS]: /neixun 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "在线培训", description: "企业内部课程直播与录播" },
  { title: "考试测评", description: "内置题库、考试与学习进度追踪" },
  { title: "员工管理", description: "多角色权限与组织架构管理" },
  { title: "数据分析", description: "培训效果统计与员工能力评估" },
];

export default function NeixunPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-orange-600 to-red-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">企业内训系统</h1>
          <p className="mb-8 text-xl text-orange-100">满足企业员工培训与考核需求</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-orange-600 hover:bg-orange-50">免费试用</Button>
            <Button variant="outline" className="border-white text-white">了解详情</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">系统功能</h2>
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

      <section className="bg-gradient-to-r from-orange-600 to-red-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">打造企业专属培训平台</h2>
        <p className="mb-8 text-orange-100">提升员工技能，助力企业发展</p>
        <Button className="bg-white text-orange-600 hover:bg-orange-50">立即咨询</Button>
      </section>
    </>
  );
}
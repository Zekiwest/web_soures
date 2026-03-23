import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 智慧党建系统页面
 * [POS]: /newparty 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "党员管理", description: "党员信息管理与组织架构管理" },
  { title: "学习教育", description: "学习手册、答题问卷、积分兑换" },
  { title: "党建宣传", description: "党建动态、党建活动、党费管理" },
  { title: "数据统计", description: "多维度数据统计与分析报表" },
];

export default function NewPartyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-600 to-pink-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">智慧党建系统</h1>
          <p className="mb-8 text-xl text-red-100">让党建管理更高效、更智能</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-red-600 hover:bg-red-50">免费试用</Button>
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

      <section className="bg-gradient-to-r from-red-600 to-pink-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">推进党建信息化建设</h2>
        <p className="mb-8 text-red-100">支持高并发访问与数据统计分析</p>
        <Button className="bg-white text-red-600 hover:bg-red-50">立即咨询</Button>
      </section>
    </>
  );
}
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 产品体验页面
 * [POS]: /free 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const products = [
  { title: "在线教育系统", description: "直播课堂、课程管理、多场景教学" },
  { title: "知识付费系统", description: "在线课程、内容付费、用户裂变" },
  { title: "直播带货系统", description: "带货直播、社交电商、多商户入驻" },
  { title: "同城外卖系统", description: "多端协同、智能调度、本地生活" },
  { title: "互联网医院系统", description: "在线问诊、处方购药、家庭医生" },
  { title: "数字人系统", description: "AI数字人、智能互动、多场景应用" },
];

export default function FreePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">产品体验</h1>
          <p className="mb-8 text-xl text-blue-100">免费试用，体验专业级产品功能</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">立即体验</Button>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">可体验产品</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.title} className="border-0 bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <Button size="sm" variant="outline">申请体验</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">开启产品体验之旅</h2>
        <p className="mb-8 text-blue-100">专业顾问一对一演示，快速了解产品功能</p>
        <Button className="bg-white text-blue-600 hover:bg-blue-50">立即咨询</Button>
      </section>
    </>
  );
}
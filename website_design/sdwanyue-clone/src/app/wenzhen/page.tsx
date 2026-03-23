import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 在线问诊系统页面
 * [POS]: /wenzhen 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "图文问诊", description: "患者可图文或语音咨询医生" },
  { title: "视频问诊", description: "实时视频连线，面对面问诊" },
  { title: "药师咨询", description: "专业药师在线指导用药" },
  { title: "电子处方", description: "在线开具电子处方，药品配送到家" },
];

export default function WenzhenPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-cyan-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">在线问诊系统</h1>
          <p className="mb-8 text-xl text-blue-100">便捷高效的互联网医疗服务方案</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-blue-600 hover:bg-blue-50">免费试用</Button>
            <Button variant="outline" className="border-white text-white">了解详情</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">问诊方式</h2>
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

      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">开启在线问诊服务</h2>
        <p className="mb-8 text-blue-100">提升问诊效率，降低就诊成本</p>
        <Button className="bg-white text-blue-600 hover:bg-blue-50">立即咨询</Button>
      </section>
    </>
  );
}
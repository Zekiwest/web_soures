import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 数字人直播页面
 * [POS]: /shuziren 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "AI数字人主播", description: "超写实数字人形象，24小时不间断直播" },
  { title: "智能互动", description: "AI语音识别，自动回复用户问题" },
  { title: "一键开播", description: "简单配置，快速开启数字人直播" },
  { title: "多场景应用", description: "电商带货、品牌宣传、客服咨询" },
];

const advantages = [
  { title: "降低成本", description: "无需主播、场地、设备投入" },
  { title: "全天直播", description: "7x24小时不间断，抓住流量" },
  { title: "标准化输出", description: "话术统一，品牌形象一致" },
  { title: "快速迭代", description: "随时调整内容，适应市场变化" },
];

export default function ShuzirenPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-violet-600 to-purple-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">数字人直播</h1>
          <p className="mb-8 text-xl text-violet-100">AI驱动的虚拟主播解决方案</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-violet-600 hover:bg-violet-50">免费试用</Button>
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

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">产品优势</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((adv) => (
              <Card key={adv.title} className="border-0 bg-white text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{adv.title}</h3>
                  <p className="text-sm text-gray-600">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-violet-600 to-purple-700 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">开启AI直播新时代</h2>
        <p className="mb-8 text-violet-100">降本增效，24小时不间断直播</p>
        <Button className="bg-white text-violet-600 hover:bg-violet-50">立即咨询</Button>
      </section>
    </>
  );
}
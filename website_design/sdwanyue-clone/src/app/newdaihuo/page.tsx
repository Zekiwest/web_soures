import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card, Badge
 * [OUTPUT]: 直播带货系统页面
 * [POS]: /newdaihuo 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "直播功能", description: "高清直播、连麦互动、虚拟礼物" },
  { title: "商品管理", description: "商品展示、库存管理、价格设置" },
  { title: "营销工具", description: "限时秒杀、优惠券、拼团活动" },
  { title: "数据统计", description: "直播数据、销售数据、用户分析" },
];

const advantages = [
  { title: "低延迟直播", description: "毫秒级延迟，互动体验流畅" },
  { title: "多平台推流", description: "支持多平台同时直播推流" },
  { title: "AI辅助", description: "智能美颜、虚拟背景、AI客服" },
  { title: "高并发支持", description: "百万级并发，稳定可靠" },
];

export default function DaihuoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-red-500 to-pink-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-yellow-400 text-yellow-900">HOT</Badge>
          <h1 className="mb-4 text-4xl font-bold">直播带货系统</h1>
          <p className="mb-8 text-xl text-red-100">一站式电商直播解决方案</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-red-600 hover:bg-red-50">免费试用</Button>
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
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">技术优势</h2>
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

      <section className="bg-gradient-to-r from-red-500 to-pink-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">开启直播电商新时代</h2>
        <p className="mb-8 text-red-100">专业直播系统，助力商家快速变现</p>
        <Button className="bg-white text-red-600 hover:bg-red-50">立即咨询</Button>
      </section>
    </>
  );
}
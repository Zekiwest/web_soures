import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 三方接入介绍页
 * [POS]: /news/49 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const integrations = [
  {
    title: "支付对接",
    description: "支持微信支付、支付宝、银联等主流支付渠道",
    icon: "💳",
  },
  {
    title: "短信服务",
    description: "对接阿里云短信、腾讯云短信等短信服务商",
    icon: "📱",
  },
  {
    title: "直播服务",
    description: "支持声网、腾讯云直播、阿里云直播等直播SDK",
    icon: "📺",
  },
  {
    title: "地图服务",
    description: "支持高德地图、百度地图等地图定位服务",
    icon: "🗺️",
  },
  {
    title: "存储服务",
    description: "支持阿里云OSS、腾讯云COS、七牛云等对象存储",
    icon: "💾",
  },
  {
    title: "推送服务",
    description: "支持极光推送、个推等消息推送服务",
    icon: "🔔",
  },
];

export default function News49Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">三方接入</h1>
          <p className="mb-8 text-xl text-orange-100">丰富的第三方服务对接能力</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-orange-600 hover:bg-orange-50">
              立即咨询
            </Button>
            <Button variant="outline" className="border-white text-white">
              了解详情
            </Button>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-orange-600">
              万岳科技
            </Link>
            <span>/</span>
            <span className="text-gray-900">三方接入</span>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            支持对接的第三方服务
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {integrations.map((item) => (
              <Card key={item.title} className="border-0 bg-gray-50">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl">{item.icon}</div>
                  <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            三方接入优势
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">快速接入</h3>
              <p className="text-sm text-gray-600">
                标准化接口文档，专业技术支持，快速完成第三方服务对接
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">安全可靠</h3>
              <p className="text-sm text-gray-600">
                采用加密传输，确保第三方服务调用的安全性和稳定性
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">灵活配置</h3>
              <p className="text-sm text-gray-600">
                支持后台可视化配置，无需修改代码即可切换服务商
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">需要对接特定服务？</h2>
        <p className="mb-8 text-orange-100">
          我们支持定制开发，满足您的个性化对接需求
        </p>
        <Button className="bg-white text-orange-600 hover:bg-orange-50">
          立即咨询
        </Button>
      </section>
    </>
  );
}
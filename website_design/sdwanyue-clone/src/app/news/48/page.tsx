import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 云服务介绍页
 * [POS]: /news/48 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  {
    title: "云端部署",
    description: "支持阿里云、腾讯云、华为云等主流云平台，实现快速部署与弹性扩展",
  },
  {
    title: "数据安全",
    description: "采用企业级安全架构，数据加密存储，保障用户隐私与业务数据安全",
  },
  {
    title: "高可用架构",
    description: "多节点负载均衡，自动故障转移，保障业务7x24小时稳定运行",
  },
  {
    title: "弹性扩展",
    description: "支持按需扩展资源，应对业务高峰，降低运维成本",
  },
];

export default function News48Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">云服务</h1>
          <p className="mb-8 text-xl text-purple-100">企业级云服务解决方案</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-purple-600 hover:bg-purple-50">
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
            <Link href="/" className="hover:text-purple-600">
              万岳科技
            </Link>
            <span>/</span>
            <span className="text-gray-900">云服务</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            核心服务
          </h2>
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

      {/* Service Details */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                为什么选择我们的云服务？
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  我们提供一站式云服务解决方案，从系统部署、运维监控到安全保障，
                  全方位护航您的业务发展。无论您是初创企业还是大型集团，我们都能提供适合的云服务方案。
                </p>
                <p>
                  支持私有化部署、混合云架构等多种部署模式，满足不同行业合规要求。
                  专业技术团队7x12小时在线支持，确保系统稳定运行。
                </p>
              </div>
              <Button className="mt-6 bg-purple-600 hover:bg-purple-700">
                获取方案报价
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600">99.99%</div>
                  <p className="mt-2 text-sm text-gray-600">服务可用性</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600">7x12</div>
                  <p className="mt-2 text-sm text-gray-600">技术支持</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600">多地域</div>
                  <p className="mt-2 text-sm text-gray-600">节点部署</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600">弹性</div>
                  <p className="mt-2 text-sm text-gray-600">资源扩展</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">开启云端之旅</h2>
        <p className="mb-8 text-purple-100">专业团队为您量身定制云服务方案</p>
        <Button className="bg-white text-purple-600 hover:bg-purple-50">
          立即咨询
        </Button>
      </section>
    </>
  );
}
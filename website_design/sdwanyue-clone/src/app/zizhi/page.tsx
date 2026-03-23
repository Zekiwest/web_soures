import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 更多产品页面
 * [POS]: /zizhi 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const products = [
  { title: "APP上架服务", description: "苹果/安卓主流商店上架服务" },
  { title: "资质代办", description: "增值电信业务经营许可证等资质代办" },
  { title: "私域部署", description: "企业专属私域平台搭建与部署" },
  { title: "定制开发", description: "个性化定制开发服务" },
];

const services = [
  { title: "源码出售", description: "源码无加密，可二次开发" },
  { title: "技术支持", description: "7x12小时技术支持服务" },
  { title: "培训服务", description: "系统操作培训，快速上手" },
  { title: "运维服务", description: "系统运维，保障稳定运行" },
];

export default function ZizhiPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-600 to-gray-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">更多产品与服务</h1>
          <p className="mb-8 text-xl text-slate-100">一站式企业服务解决方案</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-slate-600 hover:bg-slate-50">立即咨询</Button>
            <Button variant="outline" className="border-white text-white">了解详情</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">增值服务</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Card key={product.title} className="border-0 bg-gray-50 text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{product.title}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">专业服务</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="border-0 bg-white text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-slate-600 to-gray-700 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">专业团队为您服务</h2>
        <p className="mb-8 text-slate-100">全方位技术支持，助力企业快速发展</p>
        <Button className="bg-white text-slate-600 hover:bg-slate-50">立即咨询</Button>
      </section>
    </>
  );
}
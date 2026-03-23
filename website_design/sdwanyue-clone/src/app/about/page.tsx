import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 联系我们页面
 * [POS]: /about 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const contactInfo = [
  { title: "公司名称", value: "山东万岳网络科技有限公司" },
  { title: "统一信用代码", value: "91370100MA3XXXXX" },
  { title: "联系电话", value: "17560858943" },
  { title: "公司地址", value: "山东省济南市长清区崮云湖街道创新谷" },
];

const services = [
  { title: "技术咨询", description: "专业技术团队，提供全方位技术咨询" },
  { title: "方案定制", description: "根据业务需求，定制个性化解决方案" },
  { title: "售后服务", description: "7x24小时技术支持，快速响应" },
  { title: "培训服务", description: "系统操作培训，助力快速上手" },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">联系我们</h1>
          <p className="mb-8 text-xl text-blue-100">期待与您的合作</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">公司信息</h2>
            <Card className="border-0 bg-gray-50">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                      <span className="font-medium text-gray-600">{info.title}</span>
                      <span className="text-gray-900">{info.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">服务支持</h2>
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

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-3xl font-bold">立即联系我们</h2>
          <p className="mb-8 text-blue-100">专业团队为您提供优质服务</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-50">
            <a href="tel:17560858943">电话咨询: 17560858943</a>
          </Button>
        </div>
      </section>
    </>
  );
}
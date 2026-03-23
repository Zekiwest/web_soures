import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 部署方案介绍页
 * [POS]: /news/37 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const deploymentOptions = [
  {
    title: "SaaS云服务",
    description: "无需购买服务器，即开即用，按需付费，适合初创企业快速上线",
    features: ["无需运维", "快速上线", "按需付费"],
    recommended: false,
  },
  {
    title: "独立部署",
    description: "购买源码后部署到自有服务器，数据自主可控，适合对数据安全有要求的企业",
    features: ["数据自主", "源码交付", "二次开发"],
    recommended: true,
  },
  {
    title: "私有化部署",
    description: "部署在企业内网，完全物理隔离，满足金融、政务等行业合规要求",
    features: ["物理隔离", "高安全性", "合规保障"],
    recommended: false,
  },
  {
    title: "混合云部署",
    description: "核心数据私有化，业务服务云端化，兼顾安全与性能",
    features: ["灵活架构", "性能优化", "安全可控"],
    recommended: false,
  },
];

export default function News37Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">部署方案</h1>
          <p className="mb-8 text-xl text-cyan-100">多种部署模式，满足不同业务需求</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-cyan-600 hover:bg-cyan-50">
              获取方案
            </Button>
            <Button variant="outline" className="border-white text-white">
              技术咨询
            </Button>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-cyan-600">
              万岳科技
            </Link>
            <span>/</span>
            <span className="text-gray-900">部署方案</span>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            选择适合您的部署方式
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {deploymentOptions.map((option) => (
              <Card
                key={option.title}
                className={`relative overflow-hidden ${
                  option.recommended ? "border-2 border-cyan-500" : ""
                }`}
              >
                {option.recommended && (
                  <div className="absolute right-0 top-0 bg-cyan-500 px-3 py-1 text-xs text-white">
                    推荐
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {option.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{option.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {option.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-cyan-100 px-3 py-1 text-xs text-cyan-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            部署流程
          </h2>
          <div className="grid gap-8 lg:grid-cols-4">
            {[
              { step: "01", title: "需求沟通", desc: "了解业务需求与技术要求" },
              { step: "02", title: "方案设计", desc: "定制部署架构方案" },
              { step: "03", title: "环境搭建", desc: "服务器配置与系统部署" },
              { step: "04", title: "上线运维", desc: "系统上线与持续运维支持" },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-600 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            技术支持
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-4xl">🖥️</div>
                <h3 className="mb-2 font-semibold text-gray-900">服务器支持</h3>
                <p className="text-sm text-gray-600">
                  支持Linux、Windows等多种操作系统，兼容阿里云、腾讯云、华为云等主流云平台
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-4xl">🔧</div>
                <h3 className="mb-2 font-semibold text-gray-900">运维支持</h3>
                <p className="text-sm text-gray-600">
                  提供7x12小时技术支持，系统监控、故障排查、性能优化一站式服务
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mb-4 text-4xl">📚</div>
                <h3 className="mb-2 font-semibold text-gray-900">文档支持</h3>
                <p className="text-sm text-gray-600">
                  完善的部署文档与技术手册，配合视频教程，助力快速上手
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">定制您的部署方案</h2>
        <p className="mb-8 text-cyan-100">
          专业团队为您量身定制最适合的部署架构
        </p>
        <Button className="bg-white text-cyan-600 hover:bg-cyan-50">
          立即咨询
        </Button>
      </section>
    </>
  );
}
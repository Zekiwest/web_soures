"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 平台优势区块组件
 * [POS]: waimai 组件库的优势展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const advantages = [
  {
    icon: "🏆",
    title: "7年开发经验",
    description: "7年专注O2O系统相关领域开发，提供完善解决方案",
  },
  {
    icon: "📱",
    title: "多终端覆盖",
    description: "支持APP/微信端/H5等多端数据打通，统一后台管理",
  },
  {
    icon: "🌍",
    title: "多城市分站",
    description: "支持无限开通城市/区域站点，分站独立运营管理",
  },
  {
    icon: "🌐",
    title: "系统多语言",
    description: "支持英文版展示，中英文切换，打造国际化外卖业务",
  },
];

const services = [
  { title: "功能定制", description: "可对系统进行功能定制或二次开发" },
  { title: "源码出售", description: "提供全套原生外卖系统源码" },
  { title: "1对1指导", description: "安排专人一对一服务指导 售后无忧" },
  { title: "7*24h服务", description: "强大的技术团队为您解决遇到的难题" },
  { title: "技术支持", description: "协助申请三方 推荐服务器配置方案" },
  { title: "更新迭代", description: "定期升级和优化系统 保证产品质量" },
  { title: "安全保障", description: "定期安全检查 多种高级防护措施" },
  { title: "快速搭建", description: "6小时搭建完成 提供高并发解决方案" },
];

export function WaimaiAdvantages() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            为什么选择万岳外卖系统
          </h2>
          <p className="text-gray-500">Why Choose Us</p>
        </div>

        {/* 核心优势 */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv) => (
            <Card key={adv.title} className="border-0 bg-white text-center">
              <CardContent className="p-6">
                <div className="mb-3 text-4xl">{adv.icon}</div>
                <h3 className="mb-2 font-semibold text-gray-900">{adv.title}</h3>
                <p className="text-sm text-gray-600">{adv.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 服务支持 */}
        <div className="mb-8 text-center">
          <h3 className="mb-2 text-xl font-semibold text-gray-900">
            我们的服务支持
          </h3>
          <p className="text-gray-600">
            强大的研发实力，安全稳定可靠的系统支持
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-white p-4 text-center shadow-sm"
            >
              <h4 className="mb-1 font-semibold text-orange-600">{service.title}</h4>
              <p className="text-xs text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
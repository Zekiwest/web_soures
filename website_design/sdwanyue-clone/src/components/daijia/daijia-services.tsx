"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 代驾系统服务支持区块组件
 * [POS]: daijia 组件库的服务支持展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const services = [
  { title: "功能定制", description: "可对系统进行功能定制或二次开发" },
  { title: "源码出售", description: "提供全套原生代驾系统源码" },
  { title: "1对1指导", description: "安排专人一对一服务指导 售后无忧" },
  { title: "7×24h服务", description: "强大的技术团队为您解决遇到的难题" },
  { title: "技术支持", description: "协助申请三方 推荐服务器配置方案" },
  { title: "更新迭代", description: "定期升级和优化系统 保证产品质量" },
  { title: "安全保障", description: "定期安全检查 多种高级防护措施" },
  { title: "快速搭建", description: "6小时搭建完成 提供高并发解决方案" },
];

export function DaijiaServices() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            系统服务支持
          </h2>
          <p className="text-gray-600">从客户实际需求出发，提供多方位服务支持</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="border-0 bg-white text-center shadow-sm">
              <CardContent className="p-4">
                <h4 className="mb-1 font-semibold text-emerald-600">{service.title}</h4>
                <p className="text-xs text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
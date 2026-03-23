"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 跑腿系统服务区块组件
 * [POS]: paotui 组件库的服务展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const services = [
  { title: "成品源码出售", description: "提供全套原生同城跑腿系统源码" },
  { title: "功能定制开发", description: "可对同城跑腿系统进行功能定制或二次开发" },
  { title: "快速搭建部署", description: "6小时搭建完成，提供高并发、大数据解决方案" },
  { title: "专业技术支持", description: "协助申请三方接口，推荐服务器配置方案" },
  { title: "系统更新服务", description: "定期升级和优化系统功能，保证产品质量" },
  { title: "专业售后支持", description: "7*12小时在线解答产品问题，提供技术文档" },
];

export function PaotuiServices() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            我们的服务
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="border-0 bg-white text-center shadow-sm">
              <CardContent className="p-4">
                <h4 className="mb-1 font-semibold text-blue-600">{service.title}</h4>
                <p className="text-xs text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
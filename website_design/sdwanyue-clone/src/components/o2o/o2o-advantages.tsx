"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: O2O系统优势区块组件
 * [POS]: o2o 组件库的优势展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const advantages = [
  {
    icon: "📱",
    title: "覆盖多终端",
    description: "包含APP、小程序、H5客户端、WEB管理后台，功能全面，可定制。",
  },
  {
    icon: "📊",
    title: "数据精细化",
    description: "交易数据、营销数据、财务数据、会员数据、配送数据等，各类统计一目了然。",
  },
  {
    icon: "🎁",
    title: "营销玩法丰富",
    description: "拼团、砍价、秒杀等超多营销玩法，将通过发券、推送、分享等形式，助力平台和商家用户扩散，提升营收。",
  },
  {
    icon: "💎",
    title: "会员体系完善",
    description: "支持会员卡储值，会员标签能力，以积累用户的形式提升盈利实力。",
  },
  {
    icon: "🎨",
    title: "店铺自定义",
    description: "各类装修组件，操作方便，打造店铺独有特色，加深用户印象提高驻留时间。",
  },
  {
    icon: "👥",
    title: "多级用户推广",
    description: "引入二级分销机制，让更多人帮忙卖货，利用社交关系提高平台转化率。",
  },
];

const services = [
  { title: "成品源码出售", description: "提供全套原生同城O2O系统源码" },
  { title: "功能定制开发", description: "可对同城O2O系统进行功能定制或二次开发" },
  { title: "快速搭建部署", description: "6小时搭建完成，提供高并发、大数据解决方案" },
  { title: "专业技术支持", description: "协助申请三方接口，推荐服务器配置方案" },
  { title: "系统更新服务", description: "定期升级和优化系统功能，保证产品质量" },
  { title: "专业售后支持", description: "7*12小时在线解答产品问题，提供技术文档" },
];

export function O2OAdvantages() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            万岳同城O2O系统优势
          </h2>
        </div>

        {/* 核心优势 */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv) => (
            <Card key={adv.title} className="border-0 bg-white">
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
            我们的服务
          </h3>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-white p-4 text-center shadow-sm"
            >
              <h4 className="mb-1 font-semibold text-purple-600">{service.title}</h4>
              <p className="text-xs text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
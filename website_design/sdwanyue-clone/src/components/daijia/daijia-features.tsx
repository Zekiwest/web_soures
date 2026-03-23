"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 代驾系统核心功能区块组件
 * [POS]: daijia 组件库的核心功能展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  {
    title: "LBS长连接技术",
    description: "代驾软件开发公司首家成功研发的长连接技术，已达到国内LBS出行领域顶尖水平",
  },
  {
    title: "AI智能化派单",
    description: "全国首家实现共享单和独享单双模式，提高派单速度",
  },
  {
    title: "司机永不掉线",
    description: "采用多线程总体调度，确保司机用不掉线，帮助企业开启智能代驾新时代",
  },
  {
    title: "公里数精准",
    description: "通过LBS+GPS定位，实时推送位置信息，确保公里数计算精准",
  },
  {
    title: "万级司机同时在线",
    description: "并采用分布式计算技术，可高并发承载，轻松应对万级司机在线",
  },
  {
    title: "价格表",
    description: "可多维度自由组合设置阶梯式价格表，满足全国代驾公司的任意价格表配置",
  },
];

const techFeatures = [
  { title: "系统抗压稳定性", description: "采用分布式负载主流运维管理，24小时系统监控" },
  { title: "多样的听单模式", description: "多样订单派发能力，支持灵活的订单转发" },
  { title: "灵活的计费体系", description: "集成行业内公里、返程模式等主流线上电子化模式" },
  { title: "大数据服务", description: "人流密度、用户画像、交通拥堵数据分析" },
  { title: "数据可视化", description: "支持可视化样式，用来展示点、线、面" },
  { title: "路线规划和导航", description: "基于精准路况提供最优参考驾车路线" },
];

export function DaijiaFeatures() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            丰富的产品功能，轻松玩转代驾运营模式
          </h2>
          <p className="text-gray-600">
            完善的系统产品功能+完整的代驾解决方案，多方位赋能代驾运营者
          </p>
        </div>
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg bg-gray-50 p-4 text-center"
            >
              <h4 className="mb-1 font-semibold text-emerald-600">{feature.title}</h4>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
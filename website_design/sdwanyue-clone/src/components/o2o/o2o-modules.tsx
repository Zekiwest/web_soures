"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: O2O系统功能模块区块组件
 * [POS]: o2o 组件库的功能模块展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const modules = [
  {
    title: "用户端",
    icon: "👤",
    description: "包含APP+小程序+H5，用于消费者浏览商铺、商品、服务等，并进行下单、提货等操作。",
    features: [
      "城市切换", "LBS定位", "轮播图", "搜索栏",
      "优选好店", "新品推荐", "限时优惠", "商品分类",
      "店铺详情", "商品详情", "在线分享", "商家入驻",
    ],
  },
  {
    title: "配送端",
    icon: "🛵",
    description: "骑手接单配送、路线规划、收入统计等功能。",
    features: ["接单配送", "路线规划", "收入统计", "订单管理"],
  },
  {
    title: "商家管理后台",
    icon: "🏪",
    description: "商家店铺管理、商品管理、订单处理等。",
    features: ["店铺设置", "商品管理", "订单处理", "数据统计"],
  },
  {
    title: "城市管理后台",
    icon: "🏙️",
    description: "分城市区域管理、商家审核、数据统计等。",
    features: ["城市管理", "商家审核", "区域划分", "运营统计"],
  },
  {
    title: "运营管理后台",
    icon: "💻",
    description: "平台整体运营管理、数据分析、系统配置。",
    features: ["平台运营", "数据分析", "营销配置", "系统设置"],
  },
];

export function O2OModules() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            万岳同城O2O系统功能介绍
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Card
              key={module.title}
              className="border-0 bg-white transition-all hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-3 text-4xl">{module.icon}</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  {module.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{module.description}</p>
                <div className="flex flex-wrap gap-2">
                  {module.features.slice(0, 6).map((feature) => (
                    <span
                      key={feature}
                      className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600"
                    >
                      {feature}
                    </span>
                  ))}
                  {module.features.length > 6 && (
                    <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-600">
                      +{module.features.length - 6}更多
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 外卖系统核心功能区块组件
 * [POS]: waimai 组件库的核心功能展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { icon: "🍔", title: "美食外卖", description: "多种美食分类推荐榜单，用户可快速寻找到合适的店家" },
  { icon: "⚡", title: "闪送到家", description: "支持帮我取、帮我送、同城帮买、代排队等业务" },
  { icon: "📅", title: "预约服务", description: "保洁、家政等常用上门服务，线上提前预约下单" },
  { icon: "🏪", title: "发现好店", description: "想找线下门店消费，在线即可查看店铺评价" },
  { icon: "🛒", title: "超市便利", description: "购物买菜不用愁，动动手指马上送到家" },
  { icon: "💊", title: "在线买药", description: "线下药店入驻，用户在线购买药品后骑手送上门" },
  { icon: "🥬", title: "生鲜菜场", description: "除商品外，水产食品可在线下单，专人配送货" },
  { icon: "🍎", title: "生活服务", description: "水果蔬菜在线购买，保证新鲜送到家门口" },
];

export function WaimaiFeatures() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            万岳外卖系统核心功能
          </h2>
          <p className="text-gray-600">
            万岳外卖O2O系统，提供完善的外卖平台解决方案
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-0 bg-white text-center transition-all hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-3 text-4xl">{feature.icon}</div>
                <h3 className="mb-2 font-semibold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
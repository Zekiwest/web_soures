"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 商家移动APP端功能区块组件
 * [POS]: waimai 组件库的商家端展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const merchantFeatures = [
  { title: "外卖订单", description: "支持在线接单、核销订单、发布新订单、退款等" },
  { title: "店铺设置", description: "可以修改店铺信息，设置营业时间、查看收益" },
  { title: "接单打印", description: "支持连接三方小票打印机设备，接单自动打印订单" },
  { title: "商品管理", description: "上下架商品，添加商品分类、图片和价格" },
];

export function WaimaiMerchant() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              万岳同城外卖系统
            </h2>
            <h3 className="mb-4 text-xl font-semibold text-orange-600">
              商家移动APP端
            </h3>
            <p className="mb-6 text-lg text-gray-700">
              随时随地轻松管理店铺
            </p>
            <p className="mb-8 text-gray-600">
              移动互联网时代，提供商家移动app管理后台，操作上架商品更简单方便，
              随时随地均可管理店铺信息。
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {merchantFeatures.map((feature) => (
                <Card key={feature.title} className="border border-gray-200">
                  <CardContent className="p-4">
                    <h4 className="mb-1 font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-80 w-64 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-red-100 shadow-lg">
              <span className="text-6xl">📱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
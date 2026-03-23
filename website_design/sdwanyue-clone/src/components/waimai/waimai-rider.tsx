"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 骑手运营后台功能区块组件
 * [POS]: waimai 组件库的骑手端展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const riderFeatures = [
  { title: "骑手管理", description: "管理骑手，设置骑手类型、基本信息、跑腿费以及分成" },
  { title: "订单调度", description: "查看所有订单信息、转单申请，支持指派订单以及查询订单号" },
  { title: "提现管理", description: "管理骑手端发起的提现申请，进行线下打款提现" },
  { title: "财务统计", description: "可查看所有交易记录，按照骑手进行统计报表" },
];

export function WaimaiRider() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="order-2 flex items-center justify-center lg:order-1">
            <div className="flex h-80 w-64 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 shadow-lg">
              <span className="text-6xl">🛵</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              万岳同城外卖系统
            </h2>
            <h3 className="mb-4 text-xl font-semibold text-blue-600">
              分站骑手运营后台
            </h3>
            <p className="mb-6 text-lg text-gray-700">
              专属区域独立管理骑手
            </p>
            <p className="mb-8 text-gray-600">
              骑手均由地区后台进行统一管理、审核，支持众包/全职两种方式，后台可
              进行订单调度和转单、派单，使用管理更简单。
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {riderFeatures.map((feature) => (
                <Card key={feature.title} className="border border-gray-200 bg-white">
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
        </div>
      </div>
    </section>
  );
}
"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 订单监控调度中心区块组件
 * [POS]: waimai 组件库的调度中心展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const dispatchFeatures = [
  "订单监控",
  "骑手监控",
  "骑手派单",
  "转单申请",
  "配送统计",
  "业绩考核",
  "订单详情",
  "路线规划",
];

export function WaimaiDispatch() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              万岳同城外卖系统
            </h2>
            <h3 className="mb-4 text-xl font-semibold text-green-600">
              订单监控调度中心
            </h3>
            <p className="mb-6 text-lg text-gray-700">
              专属区域独立管理骑手
            </p>
            <p className="mb-8 text-gray-600">
              调度中心可监控已派出订单的取货与送达状态，当配送员长时间未取货或未
              送达时，平台管理者可根据实际情况对异常订单进行重新指派。无缝对接平
              台订单，订单实时监控，提高配送效率。
            </p>
            <div className="flex flex-wrap gap-3">
              {dispatchFeatures.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full bg-green-100 px-4 py-2 text-sm text-green-700"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-80 w-full items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-teal-100 shadow-lg">
              <span className="text-6xl">📊</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
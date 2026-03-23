"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 跑腿系统流程区块组件
 * [POS]: paotui 组件库的流程展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const steps = [
  { step: "01", title: "用户下单", description: "填写配送跑腿需求" },
  { step: "02", title: "骑手接单/抢单", description: "前往商家取货" },
  { step: "03", title: "骑手到达商家", description: "确认取货，进行配送" },
  { step: "04", title: "订单状态跟踪", description: "用户和运营实时跟踪" },
  { step: "05", title: "确认送达", description: "配送完成，用户评价订单" },
];

export function PaotuiProcess() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            万岳同城跑腿系统功能介绍
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {steps.map((item, index) => (
            <div key={item.step} className="flex items-center">
              <Card className="w-40 border-0 bg-gray-50 text-center">
                <CardContent className="p-4">
                  <div className="mb-2 text-2xl font-bold text-blue-600">{item.step}</div>
                  <h3 className="mb-1 font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="mx-2 hidden text-2xl text-gray-300 md:block">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
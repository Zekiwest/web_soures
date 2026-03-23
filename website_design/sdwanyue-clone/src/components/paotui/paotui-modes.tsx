"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 跑腿系统配送模式区块组件
 * [POS]: paotui 组件库的配送模式展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const modes = [
  {
    title: "帮买模式",
    icon: "🛒",
    items: ["日化百货", "生鲜食品", "烟酒药品", "咖啡茶叶", "米面粮油"],
  },
  {
    title: "帮送模式",
    icon: "📦",
    items: ["鲜花蛋糕", "文件证件", "贵重物品", "急件", "3C数码"],
  },
  {
    title: "帮取模式",
    icon: "📮",
    items: ["快递包裹", "生活用品", "办公文具", "海鲜水产", "药品"],
  },
  {
    title: "帮排模式",
    icon: "⏳",
    items: ["餐厅排队", "医院排队", "银行排队", "报名排队", "抢购排队"],
  },
  {
    title: "帮办模式",
    icon: "🔧",
    items: ["上门清洗", "上门维修", "上门回收", "送货上门", "家政服务"],
  },
];

export function PaotuiModes() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            多种配送模式，满足各行各业需求
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {modes.map((mode) => (
            <Card key={mode.title} className="border-0 bg-white">
              <CardContent className="p-4 text-center">
                <div className="mb-3 text-4xl">{mode.icon}</div>
                <h3 className="mb-3 font-semibold text-gray-900">{mode.title}</h3>
                <div className="space-y-1">
                  {mode.items.map((item) => (
                    <div key={item} className="text-xs text-gray-600">
                      {item}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: O2O系统运营模式区块组件
 * [POS]: o2o 组件库的运营模式展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const modes = [
  {
    title: "同城电商模式",
    description: "聚合周边商家店铺和特色服务，全面覆盖本地商圈的衣食住行",
    examples: ["大众点评", "来伊份", "本来生活"],
  },
  {
    title: "同城配送模式",
    description: "整合本地支持配送服务的商家，为用户提供多种方便快捷的配送服务",
    examples: ["闪送", "帮啦跑腿", "捎货"],
  },
  {
    title: "同城跑腿模式",
    description: "支持帮我买、帮我送、代排队、帮我办等跑腿服务，订单既可众包也可指派",
    examples: ["达达快送", "点我达", "顺丰同城骑士"],
  },
  {
    title: "同城外卖模式",
    description: "专为城市外卖领域创业者打造，建立专业的本地外卖平台",
    examples: ["饿了么", "美团外卖", "麦乐送"],
  },
];

export function O2OModes() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            多种同城O2O模式，实现线上线下统一运营
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {modes.map((mode) => (
            <Card
              key={mode.title}
              className="group border-0 bg-gray-50 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {mode.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{mode.description}</p>
                <div className="flex flex-wrap gap-2">
                  {mode.examples.map((example) => (
                    <span
                      key={example}
                      className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-700"
                    >
                      {example}
                    </span>
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
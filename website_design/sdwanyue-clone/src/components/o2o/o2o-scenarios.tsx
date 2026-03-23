"use client";

import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Badge
 * [OUTPUT]: O2O系统应用场景区块组件
 * [POS]: o2o 组件库的应用场景展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const scenarios = [
  { icon: "团购", title: "团购" },
  { icon: "同城商城", title: "同城商城" },
  { icon: "餐饮美食", title: "餐饮美食" },
  { icon: "电影买票", title: "电影买票" },
  { icon: "KTV娱乐", title: "KTV娱乐" },
  { icon: "酒店住宿", title: "酒店住宿" },
  { icon: "外卖", title: "外卖" },
  { icon: "同城配送", title: "同城配送" },
  { icon: "鲜花烘焙", title: "鲜花烘焙" },
  { icon: "学习培训", title: "学习培训" },
  { icon: "旅游出行", title: "旅游出行" },
  { icon: "美妆日用", title: "美妆日用" },
  { icon: "健康护理", title: "健康护理" },
  { icon: "运动户外", title: "运动户外" },
  { icon: "家具服装", title: "家具服装" },
];

export function O2OScenarios() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            万岳同城O2O解决方案 广泛适用于多个领域
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {scenarios.map((scenario) => (
            <Badge
              key={scenario.title}
              variant="outline"
              className="cursor-pointer border-purple-200 bg-purple-50 px-4 py-2 text-base text-purple-700 hover:bg-purple-100"
            >
              {scenario.title}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
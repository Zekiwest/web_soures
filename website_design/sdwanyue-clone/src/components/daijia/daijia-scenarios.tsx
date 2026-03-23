"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 代驾系统适用场景区块组件
 * [POS]: daijia 组件库的场景展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const scenarios = [
  {
    title: "酒后代驾",
    icon: "🍺",
    description: "是指由一名专业的司机代替驾驶，将喝了酒的司机连人带车送回家。酒后代驾服务为饮酒的朋友提供了一个相对安全的选择空间。",
  },
  {
    title: "长途代驾",
    icon: "🛣️",
    description: "委托方与代驾公司签定长途代驾服务合同，选派有长途驾驶经验的员工，按客户指定时间连人带车送达指定的城市的一种有偿服务。",
  },
  {
    title: "商务代驾",
    icon: "💼",
    description: "由于职业的需要向代驾公司为自己的差旅请一名专业的司机代替驾驶，将商务人士及汽车连人带车安全的送达目的地。",
  },
  {
    title: "旅游代驾",
    icon: "🏞️",
    description: "有外出旅游意向的家庭等，自己有车但为了自己的旅途质量，请一名专业的司机代替驾驶，安全的送达旅游景点。",
  },
];

export function DaijiaScenarios() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            万岳代驾系统适用场景
          </h2>
          <p className="text-gray-600">场景覆盖多样化，满足行业客户需求</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((scenario) => (
            <Card
              key={scenario.title}
              className="border-0 bg-gray-50 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-3 text-4xl">{scenario.icon}</div>
                <h3 className="mb-2 font-semibold text-gray-900">{scenario.title}</h3>
                <p className="text-sm text-gray-600">{scenario.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
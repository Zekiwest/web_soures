import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 RideshareEcosystem 组件
 * [POS]: 网约车系统页面生态化解决方案区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const ecosystemItems = [
  {
    title: "完善的系统能力",
    description: "管理平台、司机端、乘客端，全业务场景覆盖",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "专业的运营体系",
    description: "从入驻到落地，全链路1对1支持",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "海量的用车订单",
    description: "接入多个出行服务流量渠道，助您完成百万订单",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export function RideshareEcosystem() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            全闭环生态化解决方案
          </h2>
          <p className="text-gray-600">
            构建从多场景的用车需求到运力平台支撑的出行生态循环
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <div className="inline-block rounded-full bg-blue-600 px-8 py-3 text-lg font-semibold text-white">
              白龙马出行 ®
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {ecosystemItems.map((item) => (
              <Card key={item.title} className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
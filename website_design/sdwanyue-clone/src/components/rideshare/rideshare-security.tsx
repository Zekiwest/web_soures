import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 RideshareSecurity 组件
 * [POS]: 网约车系统页面安全风控体系区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const securityStages = [
  {
    stage: "源头保障",
    items: [
      { title: "人脸识别", description: "保障人车匹配" },
    ],
  },
  {
    stage: "行前预防",
    items: [
      { title: "安心小号", description: "司乘手机号隐私保护通话" },
      { title: "行程分享", description: "分享行程，好友相伴更安心" },
      { title: "紧急联系人", description: "任何情况一键通知亲友" },
    ],
  },
  {
    stage: "行中护航",
    items: [
      { title: "一键报警", description: "免拨号的城市报警" },
      { title: "行程偏离预警", description: "路线实时安全监控" },
      { title: "行程录音", description: "维护司乘安全" },
    ],
  },
  {
    stage: "行后保障",
    items: [
      { title: "司机评价", description: "司机的服务及口碑评价" },
      { title: "疲劳驾驶", description: "出车时长安全合规管控" },
    ],
  },
];

export function RideshareSecurity() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-lg font-semibold text-blue-400">完善的</p>
          <h2 className="mb-4 text-3xl font-bold">安全风控体系</h2>
          <p className="text-gray-300">
            提供从司机源头筛选到行后保障的全业务链路监控
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {securityStages.map((stage) => (
            <Card
              key={stage.stage}
              className="border-0 bg-white/10 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-blue-300">
                  {stage.stage}
                </h3>
                <div className="space-y-3">
                  {stage.items.map((item) => (
                    <div key={item.title} className="rounded-lg bg-white/5 p-3">
                      <p className="font-medium text-white">{item.title}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
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
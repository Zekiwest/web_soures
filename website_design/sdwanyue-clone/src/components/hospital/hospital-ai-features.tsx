import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 HospitalAiFeatures 组件
 * [POS]: 医院系统页面 AI问诊功能优势区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const aiFeatures = [
  {
    title: "智能回复",
    items: ["自动识别用户提问内容", "实时生成问诊回复", "提升首轮沟通效率"],
  },
  {
    title: "推荐医生",
    items: ["根据问题内容推荐系统内相关医生", "智能匹配科室医生", "快速进入问诊流程"],
  },
  {
    title: "即时问诊",
    items: ["支持图文在线问诊", "支持视频实时问诊", "沟通更直接"],
  },
];

export function HospitalAiFeatures() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          AI问诊功能优势
        </h2>

        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {aiFeatures.map((feature) => (
            <Card key={feature.title} className="border-0 bg-gray-50">
              <CardContent className="p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-green-500">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-green-600 to-teal-600 p-8 text-center text-white">
          <h3 className="mb-4 text-2xl font-bold">AI问诊 + 医生推荐</h3>
          <div className="mb-6 grid gap-4 md:grid-cols-2">
            <div>
              <p className="font-semibold">极速响应 零等待</p>
              <p className="text-sm text-green-100">智能自动回复，减少用户等待时间，提高平台响应效率</p>
            </div>
            <div>
              <p className="font-semibold">简化流程 一步问诊</p>
              <p className="text-sm text-green-100">智能匹配医生，一键进入问诊，即时发起在线/视频问诊</p>
            </div>
          </div>
          <button className="rounded-lg bg-white px-6 py-2 font-medium text-green-600 hover:bg-green-50">
            了解AI问诊
          </button>
        </div>
      </div>
    </section>
  );
}
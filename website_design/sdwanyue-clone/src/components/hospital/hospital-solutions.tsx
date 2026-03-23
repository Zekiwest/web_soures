import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 HospitalSolutions 组件
 * [POS]: 医院系统页面解决方案区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const solutions = [
  { title: "医药企业", description: "提供在线预约、诊疗、购药、物流、患者管理等功能" },
  { title: "医疗机构", description: "为私立/公立医院构建安全、高效、便捷的互联网医院平台" },
  { title: "连锁药店", description: "连锁药店/中医诊所提供O2O模式的互联网医院解决方案" },
  { title: "体检机构", description: "构建体检机构、连锁体检健康综合服务互联网医院平台" },
  { title: "康养机构", description: "打造互联网医疗平台，助力地产企业打造智慧养老等" },
  { title: "生物科技", description: "提供新药研发、实验、反馈等一系列完整的平台系统保障" },
];

export function HospitalSolutions() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-lg font-semibold text-green-600">智蚂科技</p>
          <h2 className="text-3xl font-bold text-gray-900">互联网医院解决方案</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => (
            <Card key={solution.title} className="border-0 bg-gradient-to-br from-green-50 to-teal-50">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-gray-900">{solution.title}</h3>
                <p className="text-sm text-gray-600">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
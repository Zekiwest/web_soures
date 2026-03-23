import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 对外提供 HospitalHero 组件
 * [POS]: 医院系统页面 Hero 区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const heroCards = [
  {
    title: "在线问诊",
    description: "选择医生进行在线咨询和图文问诊可以开具线上电子药方",
  },
  {
    title: "预约挂号",
    description: "便捷预约，无需线下排队等待更加专业节省医疗资源",
  },
  {
    title: "药品购买",
    description: "平台药品商城，一站式就医拿药购买可在线开具药方",
  },
  {
    title: "家庭医生",
    description: "解决日常健康困扰，进行病情咨询用药提醒、健康管理",
  },
];

export function HospitalHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-teal-800 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex gap-4">
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            了解详情
          </Button>
          <Button className="bg-white text-green-600 hover:bg-green-50">
            获取演示
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {heroCards.map((card) => (
            <Card key={card.title} className="border-0 bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-green-100">{card.description}</p>
                <button className="mt-4 text-sm font-medium text-white hover:underline">
                  查看演示 →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
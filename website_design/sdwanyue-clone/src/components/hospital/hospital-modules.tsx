import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 HospitalModules 组件
 * [POS]: 医院系统页面功能模块区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const modules = [
  { title: "就诊记录", description: "可以查看在线咨询订单/图文问诊订单/预约挂号订单等讯息", icon: "📋" },
  { title: "视频课堂", description: "点播相关视频，传递健康知识视频可评论可收藏", icon: "🎥" },
  { title: "健康科普", description: "查看健康相关文章的科普专栏文章内容可收藏", icon: "📖" },
  { title: "家庭医生", description: "解决日常健康困扰，进行病情咨询用药提醒、健康管理", icon: "👨‍⚕️" },
  { title: "智慧医院", description: "预约挂号、远程排号、智能导诊、查询报告、健康教育", icon: "🏥" },
  { title: "远程诊疗", description: "分级诊疗、视频诊疗、问诊量表、复诊预约、远程会诊", icon: "💻" },
  { title: "网上药店", description: "自营和合作药房、智能分配、订单管理、物流管理", icon: "💊" },
];

export function HospitalModules() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-lg font-semibold text-green-600">智蚂科技</p>
          <h2 className="text-3xl font-bold text-gray-900">互联网医院功能模块</h2>
        </div>

        <div className="mb-8">
          <p className="text-center text-gray-600">
            智蚂互联网医院系统，包括与HIS对接，智慧医院、远程诊疗、网上药房、电子处方流转等子系统，满足各级别医院开展互联网诊疗
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => (
            <Card key={module.title} className="border-0 bg-white shadow-sm">
              <CardContent className="p-4">
                <span className="mb-2 block text-3xl">{module.icon}</span>
                <h3 className="mb-1 font-semibold text-gray-900">{module.title}</h3>
                <p className="text-sm text-gray-600">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
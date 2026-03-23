import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 RideshareTech 组件
 * [POS]: 网约车系统页面核心技术能力区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const dispatchFeatures = [
  "智能调度",
  "到达时间预估",
  "供需预测",
  "司乘个性化匹配",
  "多种接单模式",
];

const techAdvantages = [
  {
    title: "核心地图调度能力",
    description: "在地图大数据、调度规划、精准定位、轨迹纠偏、ETA、里程算法拥有强大的优势",
  },
  {
    title: "多项安全加密措施",
    description: "防网络监听、防身份仿冒、防信息篡改、防黑客攻击，严格的权限校验预认证",
  },
  {
    title: "阿里云基础设施架构",
    description: "具备高可用、高并发、灵活拓展的优势，根据业务需要，集群支撑动态扩容",
  },
  {
    title: "双机热备，双活容灾",
    description: "设备、数据、服务模块采取备份/冗余措施，有强大的容错和系统恢复能力",
  },
  {
    title: "移动端动态化架构",
    description: "一套代码，双端运行，具备动态更新、热部署、灰度发布能力",
  },
  {
    title: "分布式集群",
    description: "服务端支持微服务分布式，可根据负载情况动态拓容",
  },
  {
    title: "微前端架构",
    description: "独立开发、独立测试、独立部署、独立升级，让迭代更高效，更稳定",
  },
  {
    title: "微服务架构",
    description: "每个服务可以独立开发和拓展，某个服务负载过大，支持独立拓容",
  },
  {
    title: "SaaS云部署",
    description: "弹性灵活的部署方式，专注核心业务，快速迭代",
  },
  {
    title: "自动化运维",
    description: "自动化部署和升级，支持系统快速测试、发布、迭代",
  },
];

export function RideshareTech() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* 核心地图和调度能力 */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              核心地图和调度能力
            </h2>
            <p className="text-gray-600">
              全面功能覆盖，实现精准匹配的多样化派单，提升调度效率
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {dispatchFeatures.map((feature) => (
              <div
                key={feature}
                className="rounded-full bg-blue-100 px-6 py-2 text-sm font-medium text-blue-700"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* 十大技术优势 */}
        <div>
          <div className="mb-8 text-center">
            <p className="mb-2 text-lg font-semibold text-blue-600">十大</p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              技术优势
            </h2>
            <p className="text-gray-600">
              「地图及出行」双行业的技术积累，为平台的稳定运行保驾护航
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {techAdvantages.map((adv, index) => (
              <Card key={adv.title} className="border-0 shadow-md">
                <CardContent className="p-4">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-sm font-semibold text-gray-900">
                    {adv.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-gray-600">
                    {adv.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
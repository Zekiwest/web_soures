import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 EducationAdvantages 组件
 * [POS]: 教育系统页面系统优势区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const advantages = [
  {
    title: "万人在线学习",
    subtitle: "高并发低延迟",
    description: "提供高并发、大数据解决方案，支持数据库读写分离和集群化部署",
    icon: "👥",
  },
  {
    title: "多种存储方式",
    subtitle: "数据安全可靠",
    description: "数据加密，内容云端存储，防盗防录屏，IP访问监控，全方位保护课程版权",
    icon: "🔒",
  },
  {
    title: "多端数据互通",
    subtitle: "五大终端支持",
    description: "支持Web、Android、iOS、微信小程序、H5等多个终端，数据同步",
    icon: "📱",
  },
  {
    title: "直播方式多样",
    subtitle: "注重互动体验",
    description: "高清视频直播授课，码率自适应，播放超低延迟，互动连麦流畅不失真",
    icon: "🎥",
  },
];

export function EducationAdvantages() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            智蚂在线教育系统优势
          </h2>
          <p className="text-gray-600">
            提供全方位保障，助力企业构建自己的品牌网校
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv) => (
            <Card key={adv.title} className="border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardContent className="p-6">
                <span className="mb-4 block text-4xl">{adv.icon}</span>
                <h3 className="mb-1 text-lg font-bold text-gray-900">{adv.title}</h3>
                <p className="mb-2 text-sm font-medium text-blue-600">{adv.subtitle}</p>
                <p className="text-sm text-gray-600">{adv.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 EducationLive 组件
 * [POS]: 教育系统页面直播教学形式区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const liveTypes = [
  {
    title: "互动大班课",
    description: "包含语音大班课和视频大班课两种模式，可容纳万人同时在线；语音大班课支持视频、音频、PPT，视频大班课以实时视频讲座的形式展现。",
    icon: "🎓",
  },
  {
    title: "精品小班课",
    description: "支持老师和学员视频连麦，实现师生之间一对一、一对多视频互动教学。内置教学白板、随堂测验、抢答、举手上台等多种实用教学功能。",
    icon: "👥",
  },
  {
    title: "双师教学",
    description: "主讲老师线上授课，辅导老师协助主讲老师答疑督学、维持课堂纪律、总结知识要点、发布重要提醒，构建高效有序的授课直播环境。",
    icon: "👨‍🏫",
  },
  {
    title: "内容付费",
    description: "包含知识付费和课程付费两种模式，内容分为视频、图文和语音三种展现形式，学员通过免费、密码、付费三种方式获取相关课程。",
    icon: "💰",
  },
];

export function EducationLive() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            多种直播教学形式 提供更多选择
          </h2>
          <p className="text-gray-600">
            支持大班课、小班课、公开课等多种场景，打造真实课堂体验
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {liveTypes.map((type) => (
            <Card key={type.title} className="border-0 bg-white shadow-md">
              <CardContent className="p-6">
                <span className="mb-4 block text-4xl">{type.icon}</span>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
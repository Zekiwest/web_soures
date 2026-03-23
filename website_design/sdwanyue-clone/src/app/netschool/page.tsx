import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 网校系统页面
 * [POS]: /netschool 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const features = [
  { title: "在线直播", description: "高清直播课堂，支持万人同时在线学习" },
  { title: "录播课程", description: "视频课程点播，支持断点续播" },
  { title: "在线题库", description: "海量题库资源，智能组卷评测" },
  { title: "学习管理", description: "学员管理、课程管理、数据分析" },
];

const modules = [
  { title: "教务管理", description: "课程排期、教师管理、班级管理" },
  { title: "学员中心", description: "学习进度、成绩查询、证书管理" },
  { title: "营销工具", description: "优惠券、拼团、分销裂变" },
  { title: "数据报表", description: "多维度数据分析，运营决策支持" },
];

export default function NetschoolPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">网校系统</h1>
          <p className="mb-8 text-xl text-indigo-100">一站式在线教育平台解决方案</p>
          <div className="flex justify-center gap-4">
            <Button className="bg-white text-indigo-600 hover:bg-indigo-50">免费试用</Button>
            <Button variant="outline" className="border-white text-white">了解详情</Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">核心功能</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="border-0 bg-gray-50 text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">功能模块</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {modules.map((module) => (
              <Card key={module.title} className="border-0 bg-white text-center">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold text-gray-900">{module.title}</h3>
                  <p className="text-sm text-gray-600">{module.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">打造专属网校平台</h2>
        <p className="mb-8 text-indigo-100">快速部署，灵活定制，助力教育机构数字化转型</p>
        <Button className="bg-white text-indigo-600 hover:bg-indigo-50">立即咨询</Button>
      </section>
    </>
  );
}
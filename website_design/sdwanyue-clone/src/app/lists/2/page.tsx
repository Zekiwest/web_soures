import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 万岳动态列表页
 * [POS]: /lists/2 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const newsItems = [
  {
    id: 1132,
    title: "在线教育创业新机会：一套教育培训APP与小程序系统源码能做什么？",
    date: "2026-03-21",
    views: 8,
    summary: "随着知识付费与在线教育市场不断发展，越来越多机构开始搭建自己的在线教育平台。本文从技术与创业角度解析教育培训APP与小程序系统源码的实际价值，并介绍如何通过成熟解决方案快速搭建课程平台，实现知识付费、在线教学与教育品牌运营。",
    tags: ["在线教育系统源码"],
  },
  {
    id: 1131,
    title: "上门家政预约系统源码+小程序：打造一站式家政服务平台",
    date: "2026-03-20",
    views: 12,
    summary: "随着家政服务需求不断增长，传统家政公司在预约管理和服务效率方面面临诸多挑战。通过上门家政预约系统源码+小程序，企业可以快速搭建线上家政服务平台，实现服务展示、在线预约、订单管理和用户评价等功能。",
    tags: ["家政系统源码"],
  },
  {
    id: 1120,
    title: "AI医疗时代来了：互联网医院系统源码与AI问诊APP开发趋势解析",
    date: "2026-03-07",
    views: 45,
    summary: "随着人工智能技术的发展，互联网医疗正在从传统的信息化平台迈向智能化阶段。通过互联网医院系统源码搭建医疗服务平台，并开发具备AI能力的问诊APP，已经成为医疗机构和互联网企业的重要技术方向。",
    tags: ["互联网医院系统源码"],
  },
  {
    id: 1119,
    title: "远程医疗爆发，视频问诊APP/小程序开发为什么越来越火？",
    date: "2026-03-06",
    views: 77,
    summary: "随着互联网医疗的快速发展，视频问诊APP和小程序正在成为远程医疗的重要应用形式。通过在线预约、实时视频问诊、电子处方和健康档案管理等功能，医疗机构可以实现线上线下一体化服务，提升患者就医效率。",
    tags: ["视频问诊APP"],
  },
  {
    id: 1118,
    title: "2026医疗陪诊行业趋势：医院陪诊系统源码如何赋能智慧医疗服务升级？",
    date: "2026-03-05",
    views: 69,
    summary: "随着人口老龄化和医疗服务需求增长，医疗陪诊行业正在迎来新的发展机遇。传统陪诊服务逐渐向数字化、平台化转型，医院陪诊系统源码成为构建陪诊平台的重要技术基础。",
    tags: ["医院陪诊系统源码"],
  },
  {
    id: 1115,
    title: "打造可持续盈利的网校平台：源码架构与商业模式深度结合",
    date: "2026-03-02",
    views: 55,
    summary: "随着在线教育行业进入精细化运营阶段，单纯依靠课程内容已经难以形成竞争优势。本文从软件开发与平台运营的角度出发，深入分析网校平台源码架构的重要性。",
    tags: ["网校系统源码"],
  },
];

export default function Lists2Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold">万岳动态</h1>
          <p className="text-lg text-blue-100">了解最新产品资讯与行业动态</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600">
              万岳科技
            </Link>
            <span>/</span>
            <Link href="/news" className="hover:text-blue-600">
              行业动态
            </Link>
            <span>/</span>
            <span className="text-gray-900">万岳动态</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* News List */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {newsItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <Link href={`/news/${item.id}`}>
                        <h2 className="mb-2 text-xl font-semibold text-gray-900 hover:text-blue-600">
                          {item.title}
                        </h2>
                      </Link>
                      <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                        <span>{item.date}</span>
                        <span>{item.views} 阅读</span>
                      </div>
                      <p className="mb-4 text-gray-600">{item.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-8 flex justify-center gap-2">
                <Button variant="outline" disabled>
                  «
                </Button>
                <Button variant="default">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">»</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Search */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-gray-900">搜索</h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="请输入关键词"
                      className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                    />
                    <Button>提交</Button>
                  </div>
                  <div className="mt-4">
                    <p className="mb-2 text-sm text-gray-500">热搜关键词：</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="cursor-pointer text-sm text-blue-600 hover:underline">
                        在线教育系统
                      </span>
                      <span className="cursor-pointer text-sm text-blue-600 hover:underline">
                        教育直播系统源码
                      </span>
                      <span className="cursor-pointer text-sm text-blue-600 hover:underline">
                        在线教育平台
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Updates */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-gray-900">最近更新</h3>
                  <ul className="space-y-3">
                    {newsItems.slice(0, 5).map((item) => (
                      <li key={item.id}>
                        <Link
                          href={`/news/${item.id}`}
                          className="text-sm text-gray-600 hover:text-blue-600"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Hot Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-gray-900">热门标签</h3>
                  <div className="flex flex-wrap gap-2">
                    {["在线教育系统", "教育直播系统", "教育直播平台", "在线教育平台"].map(
                      (tag) => (
                        <span
                          key={tag}
                          className="cursor-pointer rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 hover:bg-blue-100 hover:text-blue-600"
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
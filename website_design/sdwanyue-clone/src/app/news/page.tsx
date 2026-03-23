import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 产品活动/新闻页面
 * [POS]: /news 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const news = [
  { title: "在线教育创业新机会：教育培训APP与小程序系统", date: "2026-03-21", category: "万岳动态" },
  { title: "上门家政预约系统源码+小程序解决方案", date: "2026-03-20", category: "万岳动态" },
  { title: "AI医疗时代：互联网医院系统开发趋势解析", date: "2026-03-07", category: "行业新闻" },
  { title: "远程医疗爆发，视频问诊APP开发趋势", date: "2026-03-06", category: "行业新闻" },
  { title: "AI+招聘系统：下一代求职招聘平台开发方向", date: "2026-03-18", category: "行业新闻" },
  { title: "代驾平台创业新机会：成熟代驾系统源码", date: "2026-03-17", category: "常见问题" },
];

export default function NewsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-700 to-slate-800 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold">产品活动</h1>
          <p className="mb-8 text-xl text-gray-200">最新动态、行业新闻、常见问题</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">最新动态</h2>
          <div className="space-y-4">
            {news.map((item, index) => (
              <Card key={index} className="border-0 bg-gray-50">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <span className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-600">{item.category}</span>
                    <span className="font-medium text-gray-900">{item.title}</span>
                  </div>
                  <Button size="sm" variant="ghost">查看详情</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-700 to-slate-800 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">关注我们获取最新动态</h2>
        <p className="mb-8 text-gray-200">第一时间了解产品更新与行业资讯</p>
        <Button className="bg-white text-gray-700 hover:bg-gray-100">订阅资讯</Button>
      </section>
    </>
  );
}
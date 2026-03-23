import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Card
 * [OUTPUT]: 常见问题列表页
 * [POS]: /lists/3 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const faqItems = [
  {
    id: 1104,
    title: "数字药店系统源码：传统药店如何通过智慧药店APP实现数字化升级？",
    date: "2026-03-04",
    summary: "随着医药电商政策逐步放开，传统药店正在通过数字药店系统源码加速转型。本文解析智慧药店APP的核心功能、技术架构与运营策略，帮助药店实现线上线下融合发展。",
  },
  {
    id: 1099,
    title: "2026年做知识付费平台开发还有机会吗？源码模式如何盈利？",
    date: "2026-02-26",
    summary: "知识付费市场进入成熟期，但仍存在细分机会。本文从市场分析、技术选型、盈利模式等角度，深度解析知识付费平台开发的商业逻辑与源码选择策略。",
  },
  {
    id: 1098,
    title: "万岳在线问诊系统源码：为医疗行业带来的革命性变化与机会",
    date: "2026-01-31",
    summary: "在线问诊系统源码正成为互联网医疗的基础设施。本文从技术架构、合规要求、运营模式等维度，解析在线问诊系统如何赋能医疗行业数字化转型。",
  },
  {
    id: 1097,
    title: "私域+网校系统源码，教育培训平台开发的新增长模式",
    date: "2026-01-28",
    summary: "私域运营成为教育机构获客新引擎。结合网校系统源码构建私域教育平台，实现用户沉淀、精细化运营与持续变现，已成为教育行业的新增长模式。",
  },
  {
    id: 1096,
    title: "为什么越来越多企业选择 AI 数字人系统源码进行平台级开发？",
    date: "2026-01-21",
    summary: "AI数字人应用场景不断拓展，企业选择源码级方案可获得更高自主权与长期价值。本文从技术、成本、战略等角度解析源码方案的优势。",
  },
  {
    id: 1095,
    title: "直播带货系统源码如何支撑高并发场景？技术架构深度解析",
    date: "2026-01-15",
    summary: "直播带货系统面临高并发、低延迟等挑战。本文从架构设计、技术选型、性能优化等维度，深度解析如何构建稳定可靠的直播带货平台。",
  },
];

export default function Lists3Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-teal-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold">常见问题</h1>
          <p className="text-lg text-green-100">快速解惑答疑，助您了解产品与服务</p>
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
            <span className="text-gray-900">常见问题</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* FAQ List */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {faqItems.map((item) => (
                  <Card key={item.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <Link href={`/news/${item.id}`}>
                        <h2 className="mb-2 text-xl font-semibold text-gray-900 hover:text-green-600">
                          {item.title}
                        </h2>
                      </Link>
                      <div className="mb-3 text-sm text-gray-500">
                        <span>{item.date}</span>
                      </div>
                      <p className="text-gray-600">{item.summary}</p>
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
              {/* Quick Categories */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-gray-900">问题分类</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-green-600">
                        系统功能问题
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-green-600">
                        部署与运维
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-green-600">
                        价格与购买
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-green-600">
                        售后服务
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="text-gray-600 hover:text-green-600">
                        定制开发
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Support */}
              <Card className="bg-green-50">
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-gray-900">需要更多帮助？</h3>
                  <p className="mb-4 text-sm text-gray-600">
                    如果您没有找到想要的答案，可以联系我们的客服团队获取帮助。
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    在线咨询
                  </Button>
                </CardContent>
              </Card>

              {/* Hot Questions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-4 font-semibold text-gray-900">热门问题</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                        1
                      </span>
                      <Link href="#" className="text-sm text-gray-600 hover:text-green-600">
                        系统支持哪些部署方式？
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                        2
                      </span>
                      <Link href="#" className="text-sm text-gray-600 hover:text-green-600">
                        源码是否可以二次开发？
                      </Link>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">
                        3
                      </span>
                      <Link href="#" className="text-sm text-gray-600 hover:text-green-600">
                        售后服务包含哪些内容？
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
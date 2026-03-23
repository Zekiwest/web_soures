"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Tabs、Badge、Button、Card
 * [OUTPUT]: 对外提供 SolutionsSection 组件
 * [POS]: 首页解决方案区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const solutions = [
  {
    id: "education",
    title: "教育培训",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    description:
      "覆盖在线教学、知识付费与考试管理，支持多终端学习与互动教学，助力教育机构高效运营",
    items: [
      {
        title: "在线教育系统",
        tags: ["直播课堂", "互动教学", "课程管理", "多终端学习"],
        description:
          "满足各类线上教学场景，拥有大班课、小班课、互动白板、内容付费等特色功能",
      },
      {
        title: "知识付费系统",
        tags: ["内容变现", "社群裂变", "多形式付费", "数据分析"],
        description:
          "包含8种内容付费形式和8种营销裂变功能，结合多维度数据统计与丰富的社群助学工具",
      },
      {
        title: "考试答题系统",
        tags: ["在线考试", "题库管理", "成绩统计", "多端作答"],
        description:
          "通过题库管理、随机组卷、考试监控、自动阅卷、成绩分析等功能，使管理者能够轻松组织考试",
      },
    ],
  },
  {
    id: "medical",
    title: "医疗健康",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    description:
      "覆盖远程问诊、在线购药与就医陪诊，支持线上问诊、医生预约、药师咨询及院内陪诊",
    items: [
      {
        title: "互联网医院系统",
        tags: ["远程问诊", "处方购药", "医生预约", "家庭医生"],
        description:
          "通过互联网技术，患者可以方便地进行线上问诊，预约医生门诊，购买药品并进行快递配送",
      },
      {
        title: "医院陪诊系统",
        tags: ["就医陪同", "代办服务", "在线预约", "智能调度"],
        description:
          "提供专业的就医陪诊系统，为患者带来更便捷的看病陪同服务，包含诊前预约、代办问诊等多种功能",
      },
      {
        title: "在线问诊系统",
        tags: ["图文问诊", "药师咨询", "在线购药", "快速问诊"],
        description:
          "患者可以在线咨询药师买药，也可图文问诊医生，随时随地线上看病、抓药，降低时间及金钱成本",
      },
    ],
  },
  {
    id: "local",
    title: "本地服务与餐饮",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    description:
      "覆盖同城外卖、在线预约与智慧点餐，支持多端管理、配送调度、扫码点餐与会员营销",
    items: [
      {
        title: "同城外卖系统",
        tags: ["同城配送", "外卖系统", "即时跑腿", "三端一体"],
        description:
          "提供外卖配送创业解决方案，包含外卖系统用户端、商户端、骑手端，功能模块有外卖调度中心等",
      },
      {
        title: "在线预约系统",
        tags: ["家政服务", "上门预约", "本地生活", "多商户入驻"],
        description: "包含8种内容付费形式和8种营销裂变功能，让知识变现更简单",
      },
      {
        title: "智慧点餐系统",
        tags: ["智慧餐饮", "扫码点餐", "会员营销", "数字化管理"],
        description:
          "覆盖餐饮经营全场景，为商家提供一站式点餐解决方案，整合在线点餐、堂食、外卖等多种功能",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "电商零售",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    description:
      "覆盖直播商城、多商户商城与连锁餐饮，支持多端运营、内容营销、私域管理及数字化经营",
    items: [
      {
        title: "直播商城系统",
        tags: ["直播带货", "短视频电商", "多商户入驻", "内容营销"],
        description:
          "集直播、短视频带货、商城运营、社区种草等功能为一体，助力商户实现营销自由",
      },
      {
        title: "多商户商城系统",
        tags: ["多商户商城", "私域电商", "多端运营", "营销系统"],
        description:
          "支持自营+多商户入驻的移动商城系统，包含多种营销玩法，助力商家迅速建立私域流量",
      },
      {
        title: "连锁餐饮系统",
        tags: ["餐饮管理", "连锁门店", "智慧餐饮", "数字化经营"],
        description:
          "为餐饮行业量身定制的高效管理工具，集订单管理、库存控制、员工调度、财务分析等多种功能",
      },
    ],
  },
  {
    id: "government",
    title: "数字政企",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    description:
      "覆盖企业内训、在线购药与智慧党建，支持多终端管理、在线学习、培训考核与数字化服务",
    items: [
      {
        title: "企业内训系统",
        tags: ["在线培训", "员工管理", "学习考核", "数据统计"],
        description:
          "专业的企业内部员工培训解决方案，支持私有化部署，多功能、多场景、多终端的在线培训学习",
      },
      {
        title: "数字药店系统",
        tags: ["在线购药", "药师咨询", "处方配送", "健康管理"],
        description:
          "整合了在线药品购买、虚拟药师咨询、处方配送等功能，使患者能够轻松浏览、购买药品",
      },
      {
        title: "智慧党建系统",
        tags: ["党员管理", "在线学习", "党建宣传", "数据统计"],
        description:
          "集党员管理、党建宣传和党务工作等为一体，包含学习手册、答题问卷、兑换商城等各项功能",
      },
    ],
  },
  {
    id: "life",
    title: "本地生活与出行",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    description:
      "覆盖同城跑腿、网约车服务与人才招聘，支持多端协同、智能调度、实时定位与招聘管理",
    items: [
      {
        title: "同城跑腿系统",
        tags: ["同城配送", "即时服务", "多端协同", "智能调度"],
        description:
          "支持多种配送模式，包含用户端、配送端、配送分站和总后台，支持一键接单抢单/转单求助",
      },
      {
        title: "网约车系统",
        tags: ["快车专车", "智能调度", "实时定位", "多场景覆盖"],
        description:
          "出行产业数字化升级一站式SaaS自助服务平台，支持快车、专车、出租车、城际等多种业务场景",
      },
      {
        title: "人才招聘系统",
        tags: ["招聘管理", "人才匹配", "企业招聘", "智能筛选"],
        description:
          "用于猎企招聘业务、HR招聘管理的系统，可按需选择功能模块组合，满足工作中的独特需求",
      },
    ],
  },
];

export function SolutionsSection() {
  const [activeTab, setActiveTab] = useState("education");
  const [activeItem, setActiveItem] = useState(0);

  const currentSolution = solutions.find((s) => s.id === activeTab);

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            万岳科技提供多种行业解决方案
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            从在线教育、知识付费、直播带货、多商户商城等在线销售系统，到外卖、医院陪诊、跑腿、网约车等线上+线下的O2O模式
            <br />
            为企业提供多种业务模式应用解决方案
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          value={activeTab}
          onValueChange={(value) => {
            setActiveTab(value);
            setActiveItem(0);
          }}
          className="w-full"
        >
          <TabsList className="mb-8 flex flex-wrap justify-center gap-2 bg-transparent">
            {solutions.map((solution) => (
              <TabsTrigger
                key={solution.id}
                value={solution.id}
                className="flex items-center gap-2 rounded-full border border-gray-200 px-6 py-3 data-[state=active]:border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {solution.icon}
                <span>{solution.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {solutions.map((solution) => (
            <TabsContent key={solution.id} value={solution.id}>
              <div className="grid gap-8 lg:grid-cols-3">
                {/* 左侧：行业描述 */}
                <div className="lg:col-span-1">
                  <Card className="h-full border-0 bg-gray-50">
                    <CardContent className="p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                          {solution.icon}
                        </div>
                        <h3 className="text-xl font-semibold">{solution.title}</h3>
                      </div>
                      <p className="mb-6 text-gray-600">{solution.description}</p>

                      {/* 子导航 */}
                      <div className="space-y-2">
                        {solution.items.map((item, index) => (
                          <button
                            key={item.title}
                            onClick={() => setActiveItem(index)}
                            className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                              activeItem === index
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {item.title}
                          </button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* 右侧：详细内容 */}
                <div className="lg:col-span-2">
                  <Card className="h-full border-0 bg-white shadow-sm">
                    <CardContent className="p-6">
                      {solution.items[activeItem] && (
                        <div>
                          <h3 className="mb-4 text-2xl font-bold text-gray-900">
                            {solution.items[activeItem].title}
                          </h3>

                          {/* 标签 */}
                          <div className="mb-6 flex flex-wrap gap-2">
                            {solution.items[activeItem].tags.map((tag) => (
                              <Badge
                                key={tag}
                                className="bg-blue-100 text-blue-600 hover:bg-blue-200"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* 描述 */}
                          <p className="mb-6 text-gray-600">
                            {solution.items[activeItem].description}
                          </p>

                          {/* 分割线 */}
                          <div className="mb-6 h-px bg-gray-200" />

                          {/* 按钮 */}
                          <div className="flex gap-4">
                            <Button className="bg-blue-600 hover:bg-blue-700">
                              立即体验
                            </Button>
                            <Button variant="outline">查看详情</Button>
                          </div>

                          {/* 行业案例 */}
                          <div className="mt-8">
                            <h4 className="mb-4 text-lg font-semibold text-gray-900">
                              行业案例
                            </h4>
                            <div className="flex flex-wrap gap-4">
                              {[1, 2, 3, 4, 5].map((i) => (
                                <div
                                  key={i}
                                  className="h-12 w-24 rounded bg-gray-100"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Tabs, Card, Badge
 * [OUTPUT]: 对外提供 EducationFunctions 组件
 * [POS]: 教育系统页面功能展示区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const functionTabs = [
  {
    id: "online",
    label: "在线课堂",
    features: [
      { title: "图文点播", description: "支持图片+文字的课程内容，适用于讲义和知识点内容" },
      { title: "视频点播", description: "后台可上传录制的视频文件，前端需购买才可开通观看" },
      { title: "进度统计", description: "课程目录内自动标记上次学到/已经学完的课时内容" },
      { title: "课时目录", description: "支持多课时组成的系列课程，用户可按照课时进行学习" },
      { title: "音频点播", description: "支持上传音频文件，可设置免费/收费才能播放学习" },
      { title: "课程套餐", description: "多种系列课程和直播课，可以组合成套餐课程进行销售" },
      { title: "课程介绍", description: "包含课程和讲师介绍，用户可查看课程概述和讲师信息" },
      { title: "课程评价", description: "用户购买课程后，支持对课程进行打分和评价" },
    ],
  },
  {
    id: "interactive",
    label: "互动教学",
    features: [
      { title: "实时互动", description: "支持弹幕、提问、点赞等多种互动形式" },
      { title: "连麦互动", description: "老师可邀请学员连麦，实现面对面教学" },
      { title: "屏幕共享", description: "支持老师共享屏幕，展示教学内容" },
      { title: "电子白板", description: "内置电子白板，方便老师板书讲解" },
    ],
  },
  {
    id: "large",
    label: "大班公开课",
    features: [
      { title: "万人在线", description: "支持万人同时在线观看，稳定流畅" },
      { title: "多格式支持", description: "支持视频、音频、PPT等多种格式" },
      { title: "互动问答", description: "支持课堂互动问答，提升参与感" },
    ],
  },
  {
    id: "exam",
    label: "考试练习",
    features: [
      { title: "题库管理", description: "支持单选、多选、判断等多种题型" },
      { title: "自动阅卷", description: "客观题自动阅卷，即时出分" },
      { title: "成绩统计", description: "详细的成绩分析和统计报表" },
    ],
  },
  {
    id: "special",
    label: "特色功能",
    features: [
      { title: "会员系统", description: "通过打造会员体系，提升核心用户粘性" },
      { title: "积分抵现", description: "学员通过购买课程获得积分，积分可用于抵现" },
      { title: "推广分销", description: "用户以推广员身份分销课程，获得佣金奖励" },
    ],
  },
];

export function EducationFunctions() {
  const [activeTab, setActiveTab] = useState("online");

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            智蚂在线教育系统功能展示
          </h2>
          <p className="text-gray-600">
            丰富的直播课堂系统运营级功能，助力教培机构快速布局线上教育市场
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-8 flex flex-wrap justify-center gap-2 bg-transparent">
            {functionTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-full border border-gray-200 px-6 py-2 data-[state=active]:border-blue-600 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {functionTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {tab.features.map((feature) => (
                  <Card key={feature.title} className="border-0 bg-white shadow-sm">
                    <CardContent className="p-4">
                      <Badge className="mb-2 bg-blue-100 text-blue-600">
                        {feature.title}
                      </Badge>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
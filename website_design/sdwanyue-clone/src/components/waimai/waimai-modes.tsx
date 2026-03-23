"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 外卖系统运营模式区块组件
 * [POS]: waimai 组件库的运营模式展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const modes = [
  {
    title: "同城外卖",
    description: "凭借自身的本地商铺资源快速搭建独立品牌外卖平台，专注于同城O2O服务",
  },
  {
    title: "连锁餐饮",
    description: "为餐饮行业量身定制的高效管理工具，助您实现从店面运营到管理的全面升级",
  },
  {
    title: "点餐下单",
    description: "覆盖餐饮经营全场景，为商家提供一站式点餐解决方案，让您的餐厅迈向数字化时代",
  },
  {
    title: "校园外卖",
    description: "高校也拥有庞大的需求，系统提供多种帮办服务，不仅仅是外卖跑腿",
  },
  {
    title: "海外版外卖",
    description: "为海外外卖运营商专属打造，支持多语言、谷歌地图、国际支付等定制服务",
  },
  {
    title: "同城跑腿",
    description: "提供同城帮买帮送、代办事服务项目，足不出户即可满足用户即时需求",
  },
];

export function WaimaiModes() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            万岳科技提供多种外卖运营模式的源码系统
          </h2>
          <p className="text-gray-600">
            外卖点餐系统已成为刚性需求，提供多种运营模式解决不同的用户需求
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modes.map((mode) => (
            <Card
              key={mode.title}
              className="group border-0 bg-gray-50 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {mode.title}
                </h3>
                <p className="text-sm text-gray-600">{mode.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 跑腿系统配送端功能区块组件
 * [POS]: paotui 组件库的配送端展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const deliveryFeatures = [
  { title: "接单倒计时", description: "骑手接单后开始倒计时" },
  { title: "转单提醒", description: "无法配送时可转单求助" },
  { title: "休息弹窗", description: "骑手可设置休息状态" },
  { title: "待完成订单", description: "查看所有待完成订单" },
];

const riderStats = [
  { title: "个人中心", description: "展示今日订单、收入以及评价" },
  { title: "我的钱包", description: "查看收益详情以及今日账单，可申请提现" },
  { title: "提现申请", description: "可申请提现到微信、支付宝或银行卡" },
  { title: "订单统计", description: "查看今日订单、月订单和订单详情" },
  { title: "我的评价", description: "显示当前的综合评分，可查看具体评价" },
];

const pathFeatures = [
  { title: "快速规划路径", description: "可为骑手快速规划配送路径，并且根据配送时间，帮助骑手快速选择最佳行走路线" },
  { title: "实时定位跟踪", description: "实时定位跟踪，在配送过程中，用户、运营可以随时查看配送员位置，了解配送情况" },
];

export function PaotuiDeliveryFeatures() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            配送端功能展示
          </h2>
          <p className="text-gray-600">
            抢单、取货、转单、休息，操作方便，各种状态自由控制
          </p>
          <p className="text-sm text-gray-500">
            骑手可根据自身情况安排配送服务时间，骑手离线后不能进行接单/抢单，平台也不能派单给骑手
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* 左侧：配送状态功能 */}
          <Card className="border-0 bg-white">
            <CardContent className="p-6">
              <h3 className="mb-4 font-semibold text-gray-900">配送状态管理</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {deliveryFeatures.map((feature) => (
                  <div key={feature.title} className="rounded-lg bg-gray-50 p-3">
                    <h4 className="font-medium text-blue-600">{feature.title}</h4>
                    <p className="text-xs text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 右侧：骑手统计 */}
          <Card className="border-0 bg-white">
            <CardContent className="p-6">
              <h3 className="mb-4 font-semibold text-gray-900">骑手数据统计</h3>
              <div className="space-y-3">
                {riderStats.map((stat) => (
                  <div key={stat.title} className="rounded-lg bg-gray-50 p-3">
                    <h4 className="font-medium text-blue-600">{stat.title}</h4>
                    <p className="text-xs text-gray-600">{stat.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 智能路径规划 */}
        <div className="mt-12">
          <h3 className="mb-4 text-center text-xl font-semibold text-gray-900">
            智能规划路径，订单实时定位跟踪
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {pathFeatures.map((feature) => (
              <Card key={feature.title} className="border-0 bg-white">
                <CardContent className="p-6">
                  <h4 className="mb-2 font-semibold text-blue-600">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
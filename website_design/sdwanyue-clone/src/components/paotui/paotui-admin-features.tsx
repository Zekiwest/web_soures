"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 跑腿系统后台功能区块组件
 * [POS]: paotui 组件库的后台展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const stationFeatures = [
  { title: "概况统计", description: "后台首页展现平台内所有数据指标统计，方便运营人员把握整体趋势" },
  { title: "订单管理", description: "显示订单号、订单类型、订单状态、订单金额、支付方式、下单时间等" },
  { title: "骑手管理", description: "后台可以直接新增、查看、审核、修改骑手信息，停用或开启骑手账号" },
  { title: "财务管理", description: "统计配送员的配送收入、分站收益、订单结算状态，查询每个骑手的配送明细" },
  { title: "运营管理", description: "对配送时长、配送距离、配送模式、配送成本进行统计和管理" },
  { title: "调度中心", description: "通过地图查看全城骑手位置和路线，可指派订单给其他骑手" },
];

const adminFeatures = [
  { title: "业务管理", description: "添加城市，设置当前城市开通的业务、配送时段、基础配送费" },
  { title: "配送统计", description: "订单监控、订单趋势、骑手概况、收入情况、接单记录、服务满意度" },
  { title: "分站管理", description: "对城市配送分站统一管理，设置权限，展示基本数据" },
  { title: "结算管理", description: "展示所有分站中的收益总金额、待提现金额、已体现金额" },
  { title: "收益管理", description: "为平台、分站和骑手设置订单收益比例" },
  { title: "用户管理", description: "禁用、删除注册平台用户，编辑用户资料，统计用户增长数据" },
  { title: "优惠券管理", description: "包含优惠券列表和优惠劵消费记录，可定制其它营销功能" },
  { title: "分销管理", description: "分销模式包含三方分享和海报分享两种模式" },
];

export function PaotuiAdminFeatures() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* 配送后台 */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              配送后台功能展示
            </h2>
            <p className="text-gray-600">
              配送后台可实时监控订单状态和骑手位置，管理骑手状态，协调派单，设置不同派单方式。
              订单、财务、收入数据一目了然，方便运营人员统计结算。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stationFeatures.map((feature) => (
              <Card key={feature.title} className="border border-gray-200 bg-gray-50">
                <CardContent className="p-4">
                  <h4 className="mb-1 font-semibold text-blue-600">{feature.title}</h4>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 总后台 */}
        <div>
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              总后台功能展示
            </h2>
            <p className="text-gray-600">
              总后台可开通或关闭城市业务，确定分销或收益模式，并对分站进行全方位管理，
              包括财务、订单统计，分析用户增长数据，为运营调整做参考。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {adminFeatures.map((feature) => (
              <Card key={feature.title} className="border border-gray-200 bg-gray-50">
                <CardContent className="p-4">
                  <h4 className="mb-1 font-semibold text-indigo-600">{feature.title}</h4>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
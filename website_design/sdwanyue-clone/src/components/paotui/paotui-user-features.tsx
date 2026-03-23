"use client";

import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Badge
 * [OUTPUT]: 跑腿系统用户端功能区块组件
 * [POS]: paotui 组件库的用户端展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const userFeatures = [
  "帮我送", "帮我取", "同城帮买", "帮我排队",
  "帮我办事", "订单追踪", "订单列表", "加小费",
  "优惠券", "分享海报", "邀请好友", "钱包充值",
  "地址管理", "取件时间", "个人中心", "选择城市",
];

export function PaotuiUserFeatures() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              用户端功能展示
            </h2>
            <p className="mb-6 text-gray-600">
              集帮送、帮取、帮买、帮办等主流同城配送服务，用户下单便利，体验流畅
            </p>
            <div className="flex flex-wrap gap-3">
              {userFeatures.map((feature) => (
                <Badge
                  key={feature}
                  variant="outline"
                  className="border-blue-200 bg-blue-50 px-3 py-1 text-blue-700"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-64 w-48 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-indigo-100 shadow-lg">
              <span className="text-5xl">📱</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
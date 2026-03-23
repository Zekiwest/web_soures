"use client";

import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Badge
 * [OUTPUT]: 营销功能区块组件
 * [POS]: waimai 组件库的营销功能展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const marketingFeatures = [
  "满减活动",
  "邀请用户",
  "新人红包",
  "优惠券",
  "LBS定位",
  "专题活动",
  "热搜推荐",
  "骑手打赏",
  "门店优惠",
];

export function WaimaiMarketing() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            更多实用营销功能
          </h2>
          <p className="mx-auto max-w-3xl text-gray-600">
            万岳同城外卖系统为您提供外卖+同城生活解决方案，系统包含更多实用营销功能，
            可帮助企业快速搭建外卖+餐饮+团购+商城+跑腿等营销一体化本地生活综合性消费平台。
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {marketingFeatures.map((feature) => (
            <Badge
              key={feature}
              variant="outline"
              className="cursor-pointer border-orange-200 bg-orange-50 px-4 py-2 text-base text-orange-700 hover:bg-orange-100"
            >
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
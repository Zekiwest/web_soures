"use client";

import {
  WaimaiHero,
  WaimaiModes,
  WaimaiFeatures,
  WaimaiMerchant,
  WaimaiRider,
  WaimaiMarketing,
  WaimaiTerminals,
  WaimaiDispatch,
  WaimaiAdvantages,
} from "@/components/waimai";
import { Button } from "@/components/ui/button";

/**
 * [INPUT]: 依赖 waimai 组件库, shadcn/ui Button
 * [OUTPUT]: 同城外卖系统页面
 * [POS]: /x_waimai 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export default function WaimaiPage() {
  return (
    <>
      {/* Hero 区块 */}
      <WaimaiHero />

      {/* 运营模式 */}
      <WaimaiModes />

      {/* 核心功能 */}
      <WaimaiFeatures />

      {/* 商家移动APP端 */}
      <WaimaiMerchant />

      {/* 骑手运营后台 */}
      <WaimaiRider />

      {/* 营销功能 */}
      <WaimaiMarketing />

      {/* 多终端支持 */}
      <WaimaiTerminals />

      {/* 订单监控调度中心 */}
      <WaimaiDispatch />

      {/* 平台优势 */}
      <WaimaiAdvantages />

      {/* CTA 底部 */}
      <section className="bg-gradient-to-r from-orange-500 to-red-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">打造本地生活服务平台</h2>
        <p className="mb-8 text-orange-100">连接商家与用户，创造价值共赢</p>
        <Button className="bg-white text-orange-600 hover:bg-orange-50">
          立即咨询
        </Button>
      </section>
    </>
  );
}
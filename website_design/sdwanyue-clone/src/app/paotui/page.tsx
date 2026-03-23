"use client";

import {
  PaotuiHero,
  PaotuiProcess,
  PaotuiModes,
  PaotuiUserFeatures,
  PaotuiDeliveryFeatures,
  PaotuiAdminFeatures,
  PaotuiServices,
} from "@/components/paotui";
import { Button } from "@/components/ui/button";

/**
 * [INPUT]: 依赖 paotui 组件库, shadcn/ui Button
 * [OUTPUT]: 同城跑腿系统页面
 * [POS]: /paotui 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export default function PaotuiPage() {
  return (
    <>
      {/* Hero 区块 */}
      <PaotuiHero />

      {/* 流程介绍 */}
      <PaotuiProcess />

      {/* 配送模式 */}
      <PaotuiModes />

      {/* 用户端功能 */}
      <PaotuiUserFeatures />

      {/* 配送端功能 */}
      <PaotuiDeliveryFeatures />

      {/* 后台功能 */}
      <PaotuiAdminFeatures />

      {/* 服务支持 */}
      <PaotuiServices />

      {/* CTA 底部 */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">选择万岳跑腿系统，开启创业之旅</h2>
        <p className="mb-8 text-blue-100">快速部署，即时运营，满足用户多元化需求</p>
        <Button className="bg-white text-blue-600 hover:bg-blue-50">
          立即咨询
        </Button>
      </section>
    </>
  );
}
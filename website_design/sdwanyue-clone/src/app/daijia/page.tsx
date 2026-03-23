"use client";

import {
  DaijiaHero,
  DaijiaScenarios,
  DaijiaTerminals,
  DaijiaFeatures,
  DaijiaServices,
} from "@/components/daijia";
import { Button } from "@/components/ui/button";

/**
 * [INPUT]: 依赖 daijia 组件库, shadcn/ui Button
 * [OUTPUT]: 代驾系统页面
 * [POS]: /daijia 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export default function DaijiaPage() {
  return (
    <>
      {/* Hero 区块 */}
      <DaijiaHero />

      {/* 适用场景 */}
      <DaijiaScenarios />

      {/* 多终端支持 */}
      <DaijiaTerminals />

      {/* 核心功能 */}
      <DaijiaFeatures />

      {/* 服务支持 */}
      <DaijiaServices />

      {/* CTA 底部 */}
      <section className="bg-gradient-to-r from-emerald-500 to-teal-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">一键拥有自己的代驾软件</h2>
        <p className="mb-4 text-emerald-100">独立部署 | 源码开放支持 | 可做二次开发</p>
        <Button className="bg-white text-emerald-600 hover:bg-emerald-50">
          立即咨询
        </Button>
      </section>
    </>
  );
}
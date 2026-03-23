"use client";

import {
  O2OHero,
  O2OModes,
  O2OModules,
  O2OScenarios,
  O2OAdvantages,
} from "@/components/o2o";
import { Button } from "@/components/ui/button";

/**
 * [INPUT]: 依赖 o2o 组件库, shadcn/ui Button
 * [OUTPUT]: 同城O2O系统页面
 * [POS]: /O2O 路由页面
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export default function O2OPage() {
  return (
    <>
      {/* Hero 区块 */}
      <O2OHero />

      {/* 运营模式 */}
      <O2OModes />

      {/* 功能模块 */}
      <O2OModules />

      {/* 应用场景 */}
      <O2OScenarios />

      {/* 系统优势 */}
      <O2OAdvantages />

      {/* CTA 底部 */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-16 text-white text-center">
        <h2 className="mb-4 text-3xl font-bold">
          点击获取万岳同城O2O系统，提供源码，支持二开
        </h2>
        <p className="mb-8 text-purple-100">连接商家与消费者，创造便捷生活体验</p>
        <Button className="bg-white text-purple-600 hover:bg-purple-50">
          立即体验
        </Button>
      </section>
    </>
  );
}
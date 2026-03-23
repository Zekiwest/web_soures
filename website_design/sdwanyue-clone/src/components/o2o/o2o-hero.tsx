"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Badge
 * [OUTPUT]: O2O系统 Hero 区块组件
 * [POS]: o2o 组件库的头部展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export function O2OHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 to-pink-600 py-20 text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white" />
        <div className="absolute bottom-20 right-20 h-48 w-48 rounded-full bg-pink-300" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Badge className="mb-4 w-fit bg-yellow-400 text-yellow-900">
              全渠道O2O平台
            </Badge>
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
              同城O2O系统
            </h1>
            <p className="mb-6 text-xl text-purple-100">
              同城配送、电商、跑腿、预约一站式解决方案
            </p>
            <p className="mb-8 text-purple-200">
              万岳同城O2O系统是一款支持同城配送、同城电商、同城跑腿、同城预约等模式的
              O2O综合平台。系统主要面向同城电商领域创业者，按需求为您提供分城市地区、
              覆盖本地各类生活服务的平台解决方案。
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">源码销售</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">定制开发</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">二次开发</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">快速部署</span>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">售后服务</span>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex h-80 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <span className="text-6xl">🏪🛒</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
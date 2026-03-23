"use client";

import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Badge
 * [OUTPUT]: 跑腿系统 Hero 区块组件
 * [POS]: paotui 组件库的头部展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export function PaotuiHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 py-20 text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white" />
        <div className="absolute bottom-20 right-20 h-48 w-48 rounded-full bg-blue-300" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Badge className="mb-4 w-fit bg-yellow-400 text-yellow-900">
              同城即时配送
            </Badge>
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
              同城跑腿系统
            </h1>
            <p className="mb-6 text-xl text-blue-100">
              高效便捷的同城即时配送服务
            </p>
            <p className="mb-8 text-blue-200">
              万岳同城跑腿系统支持多种配送模式，包含用户端、配送端、配送分站和总后台，
              支持一键接单/抢单/转单求助，实时定位跟踪，配送收入结算，配送调度等多种功能，
              系统开放API，定制开发后可对接电商平台。
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
              <span className="text-6xl">🛵📦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
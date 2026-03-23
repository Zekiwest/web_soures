"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/**
 * [INPUT]: 依赖 shadcn/ui Button, Badge
 * [OUTPUT]: 外卖系统 Hero 区块组件
 * [POS]: waimai 组件库的头部展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export function WaimaiHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 py-20 text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white" />
        <div className="absolute bottom-20 right-20 h-48 w-48 rounded-full bg-yellow-300" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Badge className="mb-4 w-fit bg-yellow-400 text-yellow-900">
              HOT 热门产品
            </Badge>
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
              同城外卖系统
            </h1>
            <p className="mb-6 text-xl text-orange-100">
              一站式本地生活服务平台解决方案
            </p>
            <p className="mb-8 text-orange-200">
              服务模式多，不只是外卖。支持同城外卖、连锁餐饮、点餐下单、
              校园外卖、海外版外卖、同城跑腿等多种运营模式。
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-orange-600 hover:bg-orange-50">
                了解详情
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                查看演示
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            {/* 占位图 */}
            <div className="flex h-80 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <span className="text-6xl">🍔🛵</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
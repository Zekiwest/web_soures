"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * [INPUT]: 依赖 shadcn/ui Badge, Button
 * [OUTPUT]: 代驾系统 Hero 区块组件
 * [POS]: daijia 组件库的头部展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export function DaijiaHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 py-20 text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white" />
        <div className="absolute bottom-20 right-20 h-48 w-48 rounded-full bg-yellow-300" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <Badge className="mb-4 w-fit bg-yellow-400 text-yellow-900">
              专业代驾解决方案
            </Badge>
            <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
              万岳代驾系统
            </h1>
            <p className="mb-6 text-xl text-emerald-100">
              让代驾服务更简单、更透明、更贴近生活
            </p>
            <p className="mb-8 text-emerald-200">
              以互联网为基础，加持现有先进和成熟的O2O商业模式，运用移动定位和大数据技术，
              最大限度地降低了代驾企业运营成本，更个性多样。
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-emerald-600 hover:bg-emerald-50">
                查看演示
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                立即咨询
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex h-80 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
              <span className="text-6xl">🚗🔑</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
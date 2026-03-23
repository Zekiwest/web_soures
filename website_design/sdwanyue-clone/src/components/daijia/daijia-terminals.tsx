"use client";

import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 代驾系统多终端支持区块组件
 * [POS]: daijia 组件库的多终端展示
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const terminals = [
  { icon: "📱", title: "小程序", desc: "用户端" },
  { icon: "👤", title: "用户端", desc: "APP/小程序" },
  { icon: "🚗", title: "司机端", desc: "APP/小程序" },
  { icon: "💻", title: "管理端", desc: "Web后台" },
];

const userFeatures = ["首页", "代人呼叫", "呼叫代驾", "输入终点"];

export function DaijiaTerminals() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            多终端支持，满足不同角色使用需求
          </h2>
          <p className="text-gray-600">
            为您提供一整套代驾系统软件产品，方便您进行管理及运营
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {terminals.map((terminal) => (
            <Card
              key={terminal.title}
              className="border-0 bg-white text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-3 text-5xl">{terminal.icon}</div>
                <h3 className="mb-1 font-semibold text-gray-900">
                  {terminal.title}
                </h3>
                <p className="text-sm text-gray-500">{terminal.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
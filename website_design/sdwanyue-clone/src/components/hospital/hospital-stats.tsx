import { Button } from "@/components/ui/button";

/**
 * [INPUT]: 依赖 shadcn/ui Button
 * [OUTPUT]: 对外提供 HospitalStats 组件
 * [POS]: 医院系统页面统计数据区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const stats = [
  { value: "1255+", label: "日常活跃用户" },
  { value: "1000+", label: "已完成订单" },
  { value: "56+", label: "成功案例" },
  { value: "20+", label: "合作伙伴" },
];

export function HospitalStats() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-teal-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="mb-2 text-4xl font-bold">{stat.value}</p>
              <p className="text-green-100">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold">
            即刻下载智蚂互联网医院系统
          </h2>
          <p className="mb-6 text-green-100">Internet Hospital System</p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-green-600 hover:bg-green-50">
              Download on the App Store
            </Button>
            <Button className="bg-white text-green-600 hover:bg-green-50">
              Download on the 安卓应用商店
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
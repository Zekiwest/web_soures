import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Card
 * [OUTPUT]: 对外提供 MetaverseCases 组件
 * [POS]: 元宇宙页面全行业案例区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const cases = [
  { title: "企业场景", color: "from-blue-400 to-indigo-500" },
  { title: "校园场景", color: "from-green-400 to-teal-500" },
  { title: "政务场景", color: "from-red-400 to-pink-500" },
  { title: "地产场景", color: "from-yellow-400 to-orange-500" },
  { title: "展会场景", color: "from-purple-400 to-violet-500" },
  { title: "航天场景", color: "from-cyan-400 to-blue-500" },
  { title: "文旅场景", color: "from-emerald-400 to-green-500" },
  { title: "艺术场景", color: "from-pink-400 to-rose-500" },
  { title: "数字藏品场景", color: "from-amber-400 to-yellow-500" },
];

export function MetaverseCases() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Layaverse-轻量元宇宙众创平台全行业案例
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {cases.map((item) => (
            <Card
              key={item.title}
              className="group cursor-pointer overflow-hidden border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardContent className="p-0">
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${item.color} transition-transform duration-300 group-hover:scale-105`}
                />
                <div className="p-3">
                  <p className="text-center text-sm font-medium text-gray-700">
                    {item.title}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
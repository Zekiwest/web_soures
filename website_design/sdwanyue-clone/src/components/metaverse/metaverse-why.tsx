/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 MetaverseWhy 组件
 * [POS]: 元宇宙页面为什么需要区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

const reasons = [
  "大幅提升品牌形象",
  "提高商务接待效率",
  "扩大用户运营成效",
  "增加社区会员粘性",
];

export function MetaverseWhy() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 py-16 text-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-purple-300 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* 图片占位 */}
          <div className="hidden lg:block">
            <div className="aspect-square max-w-md rounded-2xl bg-white/10 backdrop-blur-sm" />
          </div>

          {/* 文字 */}
          <div>
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              为什么需要元宇宙空间？
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-4 text-lg">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                    ✓
                  </span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
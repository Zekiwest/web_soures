/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 HospitalSecurity 组件
 * [POS]: 医院系统页面安全保障区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export function HospitalSecurity() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-lg font-semibold text-green-600">智蚂互联网医院系统</p>
            <h2 className="mb-6 text-3xl font-bold text-gray-900">安全保障</h2>
            <p className="mb-8 text-gray-600">
              Multiple security measures, multiple security verification, to protect user data, regular data backup and security checks.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm text-green-600">✓</span>
                <span className="text-gray-700">设置防火墙，定期安全检查，加密传输等多种高级防护措施</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm text-green-600">✓</span>
                <span className="text-gray-700">访问控制、权限控制和管理、身份验证等多重阶段验证管理</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-sm text-green-600">✓</span>
                <span className="text-gray-700">数据级备份、系统级备份双重备份保障</span>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <div className="h-80 w-full rounded-xl bg-green-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
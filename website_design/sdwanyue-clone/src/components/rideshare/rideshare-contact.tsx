/**
 * [INPUT]: 无外部依赖
 * [OUTPUT]: 对外提供 RideshareContact 组件
 * [POS]: 网约车系统页面联系区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export function RideshareContact() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            联系我们
          </h2>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* 联系信息 */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">公司名称</p>
                  <p className="text-gray-600">北京白龙马云行科技有限公司</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">北京地址</p>
                  <p className="text-gray-600">朝阳区望京东路6号望京国际研发园H座3层</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">厦门地址</p>
                  <p className="text-gray-600">思明区软件园二期望海路65号之二203单元</p>
                </div>
              </div>
            </div>

            {/* 二维码 */}
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="mb-2 h-28 w-28 rounded-lg bg-gray-200" />
                <p className="text-sm text-gray-600">商务合作</p>
              </div>
              <div className="text-center">
                <div className="mb-2 h-28 w-28 rounded-lg bg-gray-200" />
                <p className="text-sm text-gray-600">微信公众号</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
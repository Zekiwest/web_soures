import { Button } from "@/components/ui/button";

/**
 * [INPUT]: 依赖 shadcn/ui Button
 * [OUTPUT]: 对外提供 EducationCta 组件
 * [POS]: 教育系统页面底部CTA区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export function EducationCta() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold">
            即刻获取智蚂在线教育系统
          </h2>
          <p className="mb-8 text-blue-100">
            Download Our Demo App Now
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-3 rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-blue-200">Download On</p>
                <p className="font-semibold">App Store</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-lg bg-white/10 px-6 py-3 backdrop-blur-sm">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31c.34.27.64.71.64 1.19s-.3.92-.64 1.19l-2.59 1.49-2.5-2.5 2.5-2.5 2.59 1.13zm-14.11-8.5l10.76 6.22-2.27 2.27L6.05 2.66z" />
              </svg>
              <div className="text-left">
                <p className="text-xs text-blue-200">Download On</p>
                <p className="font-semibold">Android Market</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            立即咨询
          </Button>
        </div>
      </div>
    </section>
  );
}
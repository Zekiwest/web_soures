import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

/**
 * [INPUT]: 依赖 shadcn/ui Button、Input、Card
 * [OUTPUT]: 对外提供 MetaverseRecruit 组件
 * [POS]: 元宇宙页面生态伙伴招募区
 * [PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md
 */

export function MetaverseRecruit() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">
          Layaverse-轻量元宇宙众创平台生态伙伴招募
        </h2>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 grid gap-8 lg:grid-cols-2">
            {/* 文字说明 */}
            <div>
              <h3 className="mb-4 text-2xl font-bold">
                邀请元宇宙事业伙伴，共享万亿商机
              </h3>
              <p className="mb-6 text-purple-200">
                Layaverse诚邀代理机构，面向元宇宙时代携手布局新商业蓝图共享时代机遇带来的行业红利
              </p>
              <p className="text-sm text-purple-300">
                我们将会尽快与您取得联系!
              </p>
            </div>

            {/* 二维码占位 */}
            <div className="flex justify-center lg:justify-end">
              <div className="h-32 w-32 rounded-lg bg-white p-2">
                <div className="h-full w-full bg-gray-200" />
              </div>
            </div>
          </div>

          {/* 表单 */}
          <Card className="border-0 bg-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <form className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    公司类型
                  </label>
                  <Input
                    placeholder="请输入公司类型"
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium">电话</label>
                  <Input
                    placeholder="请输入联系电话"
                    className="border-white/20 bg-white/10 text-white placeholder:text-white/50"
                  />
                </div>
                <div className="md:col-span-2">
                  <Button className="w-full bg-white text-purple-900 hover:bg-purple-100">
                    提交信息
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}